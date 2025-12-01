# LifeOS + Guide: Design Document

**Date:** 2024-12-01
**Status:** Approved for Implementation
**Approach:** Hybrid MCP Foundation → Agent Service Evolution

---

## Vision

An ambient digital companion ("Guide") that knows you across all life domains - health, productivity, emotional state, goals, relationships. It surfaces insights naturally when relevant, like a knowledgeable friend who's been with you for years.

**LifeOS** = The operating system for your life
**LifeSkills** = The apps that run on LifeOS
**Guide** = The ambient companion that ties it all together

---

## Design Decisions

| Dimension | Decision |
|-----------|----------|
| **Relationship Model** | Ambient Companion - surfaces insights naturally, like a knowledgeable friend |
| **Scope** | Full life context - health, productivity, emotional, relationships, goals |
| **Interaction** | Integrated everywhere - Claude Code, mobile, web, all tools |
| **Data Storage** | Hybrid - native apps for raw data, personal cloud (Supabase) for insights/context |
| **Knowledge Model** | Full awareness - patterns, goals, emotional state, preferences, history |
| **Architecture** | Hybrid MCP + Agent - start with MCP foundation, evolve to agent service |

---

## Architecture

### Phase 1: MCP Foundation

```
┌─────────────────────────────────────────────────────────────────┐
│                     Claude (any client)                          │
├─────────────────────────────────────────────────────────────────┤
│                        MCP Layer                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐ │
│  │guide-memory │  │guide-health │  │ guide-productivity      │ │
│  │             │  │             │  │                         │ │
│  │ • Profile   │  │ • Apple     │  │ • Calendar              │ │
│  │ • Goals     │  │   Health    │  │ • Tasks                 │ │
│  │ • Patterns  │  │ • Strong    │  │ • Time tracking         │ │
│  │ • Sessions  │  │ • Nutrition │  │ • Focus sessions        │ │
│  │ • Insights  │  │ • Sleep     │  │                         │ │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### Phase 3: Agent Service (Future)

```
┌──────────────────────────────────────────────────────────────┐
│                 Guide Agent (always running)                  │
│  ┌────────────┐  ┌────────────┐  ┌────────────────────────┐ │
│  │ Observers  │  │ Insight    │  │ Context Store          │ │
│  │ (webhooks, │  │ Engine     │  │ (patterns, goals,      │ │
│  │  polling)  │  │ (LLM)      │  │  emotional state)      │ │
│  └────────────┘  └────────────┘  └────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│                    Delivery Channels                          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐    │
│  │ Claude   │ │ Mobile   │ │ Push     │ │ Calendar     │    │
│  │ Code     │ │ App      │ │ Notify   │ │ Events       │    │
│  └──────────┘ └──────────┘ └──────────┘ └──────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

---

## Data Model

**Storage:** Supabase (user-controlled)

### Tables

**`profiles`** - User identity and preferences
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users,
  core_values TEXT[],
  constraints JSONB,           -- { "bad_knee": true, "vegetarian": true }
  preferences JSONB,           -- { "communication_style": "direct" }
  active_since TIMESTAMP,
  updated_at TIMESTAMP
);
```

**`goals`** - What user is working toward
```sql
CREATE TABLE goals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users,
  domain TEXT,                 -- health, productivity, inner, etc.
  title TEXT,
  description TEXT,
  target JSONB,                -- { "value": 225, "unit": "lbs" }
  current JSONB,
  deadline DATE,
  status TEXT,                 -- active, achieved, paused, abandoned
  progress_log JSONB[],        -- [{ date, value, note }]
  connected_patterns UUID[],
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

**`patterns`** - Observed correlations
```sql
CREATE TABLE patterns (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users,
  trigger TEXT,                -- "sleep_hours < 7"
  outcome TEXT,                -- "energy_rating drops 2+ points"
  confidence FLOAT,            -- 0.0 to 1.0
  evidence_count INT,
  first_observed TIMESTAMP,
  last_confirmed TIMESTAMP,
  status TEXT                  -- hypothesized, confirmed, disproven
);
```

**`sessions`** - Interaction history
```sql
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users,
  started_at TIMESTAMP,
  ended_at TIMESTAMP,
  domain TEXT,
  skill_used TEXT,
  summary TEXT,
  context_loaded JSONB,        -- What Guide knew going in
  outcomes JSONB,              -- What was decided/accomplished
  follow_ups TEXT[]            -- Things to check on later
);
```

**`insights`** - Guide's observations
```sql
CREATE TABLE insights (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users,
  type TEXT,                   -- observation, recommendation, celebration, concern
  content TEXT,
  context JSONB,               -- What triggered this insight
  priority INT,                -- 1-5
  status TEXT,                 -- pending, delivered, acknowledged, acted_on
  created_at TIMESTAMP,
  surfaced_at TIMESTAMP,
  response JSONB               -- User's reaction/action
);
```

**`domain_logs`** - Structured tracking data
```sql
CREATE TABLE domain_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users,
  domain TEXT,                 -- strength, nutrition, sleep, mood, etc.
  logged_at TIMESTAMP,
  data JSONB,                  -- Domain-specific structure
  source TEXT,                 -- manual, apple_health, strong_app, etc.
  notes TEXT
);

-- Example strength log:
-- { "exercise": "squat", "sets": [{"reps": 5, "weight": 185}, ...], "rpe": 7 }

-- Example sleep log:
-- { "bedtime": "22:30", "wake": "06:30", "quality": 7, "hrv": 45 }

-- Example mood log:
-- { "rating": 6, "energy": 5, "emotions": ["tired", "hopeful"] }
```

---

## Enhanced Skills

### The Enhancement Pattern

Every skill gains context load/save phases:

```
┌─────────────────────────────────────────────────────────────┐
│                    Enhanced Skill Flow                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. CONTEXT LOAD                                             │
│     └─▶ Query guide-memory for relevant history              │
│     └─▶ Check related goals, patterns, recent sessions       │
│     └─▶ Load user preferences and constraints                │
│                                                              │
│  2. ORIGINAL SKILL WORKFLOW                                  │
│     └─▶ Existing phases, but informed by context             │
│     └─▶ Personalized recommendations                         │
│     └─▶ References to past decisions and outcomes            │
│                                                              │
│  3. CONTEXT SAVE                                             │
│     └─▶ Log session summary to guide-memory                  │
│     └─▶ Update goal progress if applicable                   │
│     └─▶ Record any new patterns observed                     │
│     └─▶ Queue insights for future surfacing                  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Skill Header Extension

```yaml
---
name: health:strength-program
description: Progressive overload strength training
context:
  reads: [profiles, goals, patterns, sessions, domain_logs.strength]
  writes: [sessions, domain_logs.strength, insights]
  related_goals: ["strength", "body_composition"]
---
```

---

## Evolution Roadmap

### Phase 1: Foundation (Now - 2 months)

**Deliverables:**
- [ ] `guide-memory` MCP server (Supabase connection)
- [ ] Data schema (all tables above)
- [ ] Profile onboarding skill
- [ ] Enhanced health skills (strength, nutrition, sleep)
- [ ] Session continuity ("Last time...")
- [ ] Basic pattern detection

**Experience:**
- Claude Code sessions are context-aware
- "Log my workout" tracks to database
- Progress visible over time
- Sessions reference previous interactions

### Phase 2: Integration (2-4 months)

**Deliverables:**
- [ ] Apple Health MCP server
- [ ] Calendar MCP server
- [ ] All skill domains enhanced
- [ ] Cross-domain pattern detection
- [ ] Goal progress visualization
- [ ] Export for Claude.ai context

**Experience:**
- Health data flows in automatically
- Calendar awareness for scheduling
- Patterns detected across domains
- Richer context in all interactions

### Phase 3: Ambient (4-6 months)

**Deliverables:**
- [ ] Guide Agent service (background)
- [ ] Push notifications
- [ ] Scheduled check-ins
- [ ] Proactive insight delivery
- [ ] Mobile app or PWA
- [ ] Voice integration

**Experience:**
- Guide reaches out proactively
- Morning briefings, evening reflections
- Insights delivered when relevant
- Access from anywhere

### Phase 4: Intelligence (6+ months)

**Deliverables:**
- [ ] Predictive insights
- [ ] Automated pattern discovery
- [ ] Life experiments framework
- [ ] API for third-party integrations

**Experience:**
- Guide anticipates needs
- Suggests experiments to test hypotheses
- Deeply personalized over time

---

## Technical Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Database | Supabase | Postgres + Auth + Realtime. User-controlled. |
| MCP Servers | TypeScript | Native to Claude Code ecosystem |
| Auth | Supabase Auth | Built-in, secure |
| Agent (Phase 3) | Edge Functions / Workers | Serverless, scalable |
| Mobile (Phase 3) | PWA → React Native | Start simple, native later |
| Notifications | Expo Push / OneSignal | Cross-platform |

---

## File Structure

```
~/.claude/lifeskills/
├── skills/                    # Enhanced LifeSkills
│   ├── health/
│   │   ├── strength-program/
│   │   ├── nutrition-planning/
│   │   └── sleep-routine/
│   ├── productivity/
│   ├── inner/
│   ├── communication/
│   ├── creative/
│   ├── business/
│   ├── using-lifeskills/
│   └── creating-lifeskills/
├── mcp-servers/
│   ├── guide-memory/          # Core memory MCP
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── tools/
│   │   │   │   ├── profile.ts
│   │   │   │   ├── goals.ts
│   │   │   │   ├── patterns.ts
│   │   │   │   ├── sessions.ts
│   │   │   │   ├── insights.ts
│   │   │   │   └── logs.ts
│   │   │   └── db/
│   │   │       └── supabase.ts
│   │   └── package.json
│   ├── guide-health/          # Phase 2
│   └── guide-productivity/    # Phase 2
├── docs/
│   └── plans/
│       └── 2024-12-01-lifeos-guide-design.md
└── data/                      # Local cache/backup
```

---

## Privacy & Security

- All data stored in user's own Supabase instance
- Row-level security on all tables
- API keys in secure storage (1Password, env vars)
- Option to self-host Supabase
- Local file backup for offline access
- No data shared with third parties

---

## Success Criteria

**Phase 1 Success:**
- [ ] Can log workouts and see them persist across sessions
- [ ] Guide references previous sessions naturally
- [ ] Goal progress is tracked and visible
- [ ] At least one pattern is detected and surfaced

**Long-term Success:**
- Guide feels like it truly knows you
- Insights are timely and relevant (not annoying)
- Health metrics trend positive over time
- System is sustainable (not burdensome to maintain)

---

## Next Steps

1. Set up Supabase project with schema
2. Build `guide-memory` MCP server
3. Create profile onboarding skill
4. Enhance `health:strength-program` with context
5. Test end-to-end flow
6. Iterate based on real usage

---

**Document Status:** Ready for implementation planning
