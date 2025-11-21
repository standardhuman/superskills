# Taxonomy

Organization of skills by domain and type.

## Domain Structure

Skills are organized into 6 primary domains plus meta-skills:

### 1. Business (`business:*`)

**Focus**: Professional work, planning, strategy, decision-making

**When to use**: Work contexts, organizational challenges, strategic thinking

**Core skills (planned)**:
- `weekly-review` - GTD-based structured reflection
- `strategic-planning` - Quarterly/annual goal setting
- `decision-making` - Structured decision frameworks
- `meeting-design` - Effective meeting workflows

**Grounded in**: GTD, strategic planning frameworks, decision science

**Typical trigger patterns**:
- End of week timing
- Planning discussions
- Decision paralysis in work context
- Meeting effectiveness concerns

---

### 2. Creative (`creative:*`)

**Focus**: Creative work, ideation, design, artistic expression

**When to use**: Creative projects, ideation, feedback situations, creative blocks

**Core skills (planned)**:
- `brainstorming` - Structured ideation workflows
- `feedback-integration` - Receiving creative feedback skillfully
- `creative-block` - Unsticking creative process
- `project-scoping` - Defining creative project boundaries

**Grounded in**: The Artist's Way, design thinking, creative process frameworks

**Typical trigger patterns**:
- Creative frustration ("stuck", "blocked")
- Feedback situations
- Starting new creative project
- Ideation needs

---

### 3. Research (`research:*`)

**Focus**: Investigation, analysis, synthesis, academic/professional research

**When to use**: Research projects, data analysis, learning new domains

**Core skills (planned)**:
- `question-formulation` - Defining good research questions
- `source-evaluation` - Assessing credibility and quality
- `synthesis` - Connecting insights across sources
- `hypothesis-testing` - Structured investigation approach

**Grounded in**: Academic research methods, scientific method, critical thinking frameworks

**Typical trigger patterns**:
- Research project mentioned
- Information evaluation needs
- Synthesis challenges
- Investigation planning

---

### 4. Productivity (`productivity:*`)

**Focus**: Personal productivity, time management, habit formation, energy management

**When to use**: Daily routines, productivity challenges, habit work

**Core skills (planned)**:
- `daily-shutdown` - End-of-day closure ritual
- `priority-setting` - Distinguishing urgent vs. important
- `energy-management` - Working with natural rhythms
- `habit-formation` - Building sustainable practices

**Grounded in**: GTD, Atomic Habits, Deep Work, energy management research

**Typical trigger patterns**:
- "I should..." statements
- Overwhelm/scattered feelings
- End-of-day timing
- Habit formation discussions

---

### 5. Inner (`inner:*`)

**Focus**: Inner development, emotional work, self-connection, spiritual practice

**When to use**: Emotional situations, self-reflection needs, spiritual practice, values work

**Core skills (planned)**:
- `emotion-processing` - Feeling feelings skillfully
- `self-connection` - Checking in with yourself
- `values-clarification` - Identifying what matters
- `spiritual-practice` - Meditation, prayer, contemplation workflows

**Grounded in**: Somatic experiencing, Focusing, mindfulness traditions, IFS, contemplative practices

**Typical trigger patterns**:
- Emotional language (overwhelm, anxiety, frustration)
- Feeling disconnected or scattered
- Values confusion
- Spiritual practice planning

---

### 6. Communication (`communication:*`)

**Focus**: Interpersonal communication, conflict, boundaries, connection

**When to use**: Difficult conversations, conflict situations, relationship work, boundary setting

**Core skills (planned)**:
- `nvc-conversation` - Nonviolent Communication framework
- `conflict-resolution` - Addressing disagreements skillfully
- `active-listening` - Deep listening practice
- `boundary-setting` - Saying no with care

**Grounded in**: NVC (Nonviolent Communication), active listening frameworks, boundary work

**Typical trigger patterns**:
- Conflict/disagreement mentioned
- "How do I tell them..." questions
- Relationship tension
- Boundary violations

---

### Meta-Skills

**Focus**: Using and creating skills within this framework

**Skills**:
- `using-life-skills` - Discovery system, invocation methods, integration
- `creating-life-skills` - Writing guide, standards, quality criteria

**Purpose**: Foundation for entire framework

---

## Skill Naming Conventions

### Domain Prefix

All skills (except meta-skills) use `domain:skill-name` format:

- `business:weekly-review`
- `communication:nvc-conversation`
- `inner:emotion-processing`

### Skill Names

**Guidelines**:
- Lowercase with hyphens
- Descriptive and specific
- Action-oriented when possible
- 2-3 words typically

**Good**:
- `decision-making` (action-oriented, clear)
- `emotion-processing` (specific, clear)
- `nvc-conversation` (specific framework + context)

**Bad**:
- `Decisions` (not action-oriented, capitalized)
- `feelings` (too vague)
- `talk` (too generic)

### File Structure

```
skills/
  domain/
    skill-name/
      SKILL.md
```

**Example**:
```
skills/
  communication/
    nvc-conversation/
      SKILL.md
```

## Cross-Domain Patterns

Some patterns appear across multiple domains:

### Reflection Workflows

- `business:weekly-review` - Work/projects reflection
- `inner:self-connection` - Emotional/inner reflection
- `creative:project-review` - Creative work reflection

**Common pattern**: Collect → Process → Reflect → Plan

### Communication Workflows

- `communication:nvc-conversation` - General difficult conversations
- `communication:conflict-resolution` - Specific conflict situations
- `communication:boundary-setting` - Saying no

**Common pattern**: Self-connection → Clear observation → Express need → Make request

### Decision Workflows

- `business:decision-making` - Work decisions
- `inner:values-clarification` - Values-based decisions
- `creative:project-scoping` - Creative project decisions

**Common pattern**: Clarify criteria → Generate options → Evaluate → Decide → Commit

## Taxonomy Evolution

This taxonomy will evolve based on:

1. **Real needs**: What situations recur and need systematic approaches?
2. **Framework coverage**: What established frameworks should we systematize?
3. **User feedback**: What domains are people actually using?
4. **Pruning**: Remove domains/skills that aren't used

**Not based on**:
- Completeness for its own sake
- Theoretical coverage
- Speculation about future needs

## Domain Selection Guidelines

When creating a new skill, choose domain based on:

1. **Primary context**: Where is this most often used?
2. **Framework origin**: What field does the source framework come from?
3. **User mental model**: Where would users look for this?

**If skill spans multiple domains**:
- Create primary version in most common domain
- Reference from other domains if needed
- Or create domain-specific variants

**Example**:
- `business:brainstorming` - Work ideation
- `creative:brainstorming` - Creative ideation
- Both valid, different contexts and approaches

## Summary

**6 domains**: business, creative, research, productivity, inner, communication

**2 meta-skills**: using-life-skills, creating-life-skills

**Naming**: `domain:skill-name` (lowercase-with-hyphens)

**Evolution**: Based on real use, not theoretical completeness

**Organization**: Clear domains, cross-domain patterns, systematic naming
