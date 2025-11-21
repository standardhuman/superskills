# Life Skills Framework

Workflow-based practices for all domains of life and work. Extends the rigorous, discipline-enforcing approach of superpowers to business, creative, research, productivity, interpersonal, and inner development domains.

## What This Is

A collection of actionable, step-by-step workflows (called "skills") that help you navigate common situations across different life domains:

- **Business**: Planning, decision-making, strategic thinking
- **Creative**: Ideation, feedback, creative blocks
- **Research**: Question formulation, synthesis, evaluation
- **Productivity**: Prioritization, habit formation, energy management
- **Inner**: Emotion processing, self-connection, values clarification
- **Communication**: NVC, conflict resolution, boundary setting

Each skill provides a structured process to follow, preventing common failure modes and codifying best practices from established frameworks (GTD, NVC, etc.).

## Installation

### For Claude Code Users

1. This repository should be at `~/.claude/life-skills/`

2. Skills will be auto-discovered by Claude Code's skill system

3. The `using-life-skills` meta-skill will suggest relevant skills based on context

### Standalone Use

Read skill files directly from `skills/[domain]/[skill-name]/SKILL.md` and follow the workflows manually.

## Quick Start

The framework includes two meta-skills:

- **using-life-skills**: Discovery system that suggests relevant skills based on conversation context
- **creating-life-skills**: Guide for writing new skills following the framework

## Structure

```
life-skills/
├── skills/
│   ├── business/           # Business operations domain
│   ├── creative/           # Creative work domain
│   ├── research/           # Research & analysis domain
│   ├── productivity/       # Personal productivity domain
│   ├── inner/              # Inner development domain
│   ├── communication/      # Interpersonal communication domain
│   ├── using-life-skills/  # Meta-skill: discovery system
│   └── creating-life-skills/ # Meta-skill: writing guide
├── examples/               # Example walkthroughs
├── docs/                   # Additional documentation
└── README.md
```

## Core Principles

1. **Workflow-based**: Actionable steps, not just principles
2. **Grounded in proven frameworks**: GTD, NVC, etc.
3. **AI-friendly**: Structured for AI assistants to invoke and guide
4. **YAGNI ruthlessly**: Start small, grow based on real needs
5. **Test in real life**: Use skills yourself before considering them done

## Status

🚧 **Phase 1: Foundation** (In Progress)
- [ ] Repository structure
- [ ] Meta-skills
- [ ] Documentation

📋 **Phase 2: Core Skills** (Planned)
- High-frequency skills (weekly-review, daily-shutdown, self-connection)
- High-impact interpersonal (nvc-conversation, active-listening)
- Creative/work workflows (brainstorming, decision-making)

🧪 **Phase 3: Testing** (Planned)
- Real-world usage validation
- Refinement based on actual use

🌍 **Phase 4: Open Source** (Planned)
- Public launch
- Community contributions

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on writing new skills.

## License

[To be determined - likely MIT or CC BY-SA]

## Related Projects

- [Superpowers](https://github.com/cldcvr/superpowers) - Engineering workflow skills (inspiration for this framework)

---

**Created**: November 2025
**Status**: Active Development
