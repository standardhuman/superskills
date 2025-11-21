# Contributing to Life Skills Framework

Thank you for your interest in contributing! This framework exists to help people navigate life and work more skillfully through proven, actionable workflows.

## How to Contribute

### 1. Use Before Contributing

The best contributions come from real use. Before submitting a new skill:

1. Use it yourself in real situations (not hypothetical)
2. Refine based on what actually works
3. Verify it produces better outcomes than ad-hoc approaches

**Don't submit**: Theoretical skills you haven't personally tested

### 2. Types of Contributions

**New Skills**
- Workflow-based practices for business, creative, research, productivity, inner development, or communication domains
- Must be grounded in established frameworks (GTD, NVC, etc.)
- Must follow the skill template

**Skill Improvements**
- Clarifying workflows
- Adding examples
- Fixing errors or unclear language
- Documenting additional pitfalls

**Documentation**
- Improving README
- Adding example walkthroughs
- Clarifying concepts

**Not Accepting**
- Skills not grounded in proven frameworks
- Purely aspirational content without actionable workflows
- Overly specific skills (one-off situations)
- Duplicate skills (check existing first)

### 3. Writing New Skills

See `skills/creating-life-skills/SKILL.md` for complete guide.

**Quick checklist:**
- [ ] Follows standard template
- [ ] Actionable workflow (not just principles)
- [ ] Grounded in established framework
- [ ] Common pitfalls documented
- [ ] 2-3 concrete examples
- [ ] Tested in real use
- [ ] 100-400 lines

### 4. Skill Quality Standards

Every skill must:

1. **Be actionable**: Specific steps anyone can follow
2. **Be grounded**: Based on proven methodology (cite source)
3. **Prevent failure**: Document common rationalizations and pitfalls
4. **Include examples**: Show the skill in actual use
5. **Have clear trigger**: AI knows when to suggest it

**Good workflow:**
```markdown
□ Phase 1: Notice
  - Name the specific emotion (anxious, frustrated, sad)
  - Locate sensation in body (chest, throat, stomach)
  - Rate intensity 1-10
```

**Bad workflow:**
```markdown
□ Phase 1: Awareness
  - Be mindful of your state
  - Notice what's happening
```

### 5. Submission Process

**For New Skills:**

1. Fork the repository
2. Create branch: `git checkout -b skill/domain-skill-name`
3. Create skill file: `skills/domain/skill-name/SKILL.md`
4. Follow the template exactly
5. Test the skill yourself in real situations
6. Commit with clear message:
   ```
   feat(domain): add skill-name skill

   [Brief description of what this skill does and why]

   Grounded in: [Framework Name]
   Tested: [Brief note on how you've used it]
   ```
7. Push and create pull request
8. In PR description:
   - Link to source framework
   - Describe your experience using it
   - Explain why this skill is needed

**For Improvements:**

1. Fork the repository
2. Create branch: `git checkout -b improve/domain-skill-name`
3. Make changes
4. Commit with clear message explaining improvement
5. Create pull request with explanation

### 6. Code Review Process

All contributions will be reviewed for:

1. **Adherence to template**: All required sections present
2. **Quality of workflow**: Actionable and specific
3. **Grounding**: Properly cited established framework
4. **Clarity**: Can someone follow this without confusion?
5. **Real-world testing**: Has contributor actually used this?

**We may ask:**
- "Can you make this step more specific?"
- "What framework is this based on?"
- "Have you used this? What happened?"
- "Can you add an example showing this in action?"

### 7. Style Guidelines

**Markdown:**
- Use `□` for checklist items (phases)
- Use `**bold**` for emphasis
- Use `code` for tool names (TodoWrite, AskUserQuestion)
- Use tables for Quick Reference sections

**Language:**
- Action-oriented (verbs: "Ask", "Write", "Notice", "Review")
- Second person ("you", not "we" or "the user")
- Specific over vague ("Name the emotion" not "Be aware")
- Empathetic but direct

**Naming:**
- Skills: `lowercase-with-hyphens`
- Domains: `lowercase` (no hyphens)
- Phases: `Title Case`

### 8. What We're Looking For

**High priority:**
- Skills you use weekly or daily
- Skills that prevent common, costly mistakes
- Skills that systematize something most people do ad-hoc
- Skills from well-established frameworks (GTD, NVC, Atomic Habits, etc.)

**Lower priority:**
- Niche skills for rare situations
- Skills with no proven framework behind them
- Skills that are mostly aspirational
- Skills that duplicate existing ones

### 9. Licensing

By contributing, you agree that your contributions will be licensed under the same license as this project.

### 10. Questions?

- Check existing skills for examples
- Read `skills/creating-life-skills/SKILL.md`
- Open an issue for discussion before writing large skills

## Philosophy

This framework is about **proven workflows that prevent known failure modes**.

- Start with established frameworks (don't invent)
- Test in real use (don't theorize)
- Make it actionable (don't just inspire)
- Remove unused skills (YAGNI applies here too)

**Quality over quantity**: We'd rather have 20 excellent, well-used skills than 100 mediocre ones that gather dust.

Thank you for helping make life and work more skillful!
