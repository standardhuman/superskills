# Example: Weekly Review Walkthrough

This walkthrough shows what using a life skill looks like in practice. We'll use the `business:weekly-review` skill (which will be created in Phase 2).

## Scenario

It's Friday afternoon, 4pm. You're feeling scattered. Multiple projects in flight, inbox overflowing, not sure what to prioritize for next week.

## Conversation with Claude

**User**: I'm feeling really scattered. Got a lot going on and not sure where to focus next week.

**Claude**: I notice it's Friday afternoon and you're feeling scattered with multiple things going on. Would you like to use the `business:weekly-review` skill?

This will walk you through a structured GTD-based reflection to clear your mind and set priorities for next week.

**User**: Yes, let's do it.

**Claude**: *Loads business:weekly-review skill*

Great! I'm using the weekly-review skill to help you get clarity. This follows the GTD (Getting Things Done) framework with 5 phases. Let me create a checklist to track our progress:

*Creates TodoWrite checklist*:
```
□ Phase 1: Collect (gather open loops)
□ Phase 2: Process (clarify items)
□ Phase 3: Review (calendar & projects)
□ Phase 4: Plan (set priorities)
□ Phase 5: Complete (update systems)
```

Let's start with Phase 1: Collect

**Phase 1 asks you to gather all open loops - everything that has your attention:**
- Empty inboxes (email, Slack, notes, browser tabs)
- Capture anything on your mind

Take 10 minutes to create a list of everything that's pulling on your attention. What's on your mind?

**User**: *Lists 23 items including emails, project tasks, personal todos, ideas, worries*

**Claude**: *Marks Phase 1 complete, starts Phase 2*

Perfect, 23 items collected. Now Phase 2: Process each item to clarify what it actually is.

For each item, we'll ask: Is this actionable?
- If YES → What's the specific next action? (Add to task list)
- If NO → Is it reference (file it), trash (delete it), or someday/maybe (list for later)?

Let's go through them:

*Guides through each item with structured questions*

**User**: *Clarifies each item*

**Claude**: Great! Processing complete. Here's what we found:
- 12 actionable items (next actions now clear)
- 5 reference items (filed)
- 4 trash (deleted)
- 2 someday/maybe

*Marks Phase 2 complete, starts Phase 3*

Now Phase 3: Review past week and coming week.

**Looking at past week:**
- What happened? Any wins or lessons learned?

**User**: Launched the new feature, but it took twice as long as expected. Team communication was unclear which caused delays.

**Claude**: Good insight - communication clarity could prevent future delays.

**Looking at coming week:**
- What appointments, deadlines, or commitments do you have?

**User**: *Lists 8 commitments including meetings, deadlines, travel*

**Claude**: *Marks Phase 3 complete, starts Phase 4*

Now Phase 4: Plan - Set your top 3 priorities for next week.

Looking at your 12 action items and 8 commitments, what are the 3 most important things to accomplish next week?

**User**:
1. Complete client proposal (due Wednesday)
2. Team communication improvements (prevent delays)
3. Prep for Thursday investor meeting

**Claude**: Solid priorities. Now let's schedule time blocks:

*Uses AskUserQuestion to help schedule specific time blocks for each priority*

**User**: *Schedules time blocks*

**Claude**: *Marks Phase 4 complete, starts Phase 5*

Final phase: Complete

Actions:
- Clear your completed items from task list
- Write your 3 priorities somewhere visible
- Close browser tabs and clean workspace
- Commit to these priorities

Take 5 minutes to do this now.

**User**: Done! Workspace clean, priorities written on whiteboard, 47 browser tabs closed.

**Claude**: *Marks Phase 5 complete*

Excellent! Weekly review complete.

**Before** (4pm Friday): Scattered, overwhelmed, 23 open loops, unclear priorities

**After** (4:45pm Friday): Clear mind, 3 focused priorities, scheduled time blocks, clean systems

You've set yourself up for a focused, intentional week. Enjoy your evening!

---

## What Happened

1. **Trigger detection**: Claude noticed "Friday afternoon" + "feeling scattered" → Suggested weekly-review
2. **Skill invocation**: User accepted, skill loaded
3. **TodoWrite tracking**: Phases tracked with checklist
4. **Guided workflow**: Claude led through each phase step-by-step
5. **AskUserQuestion**: Used for reflection and decisions
6. **Clear outcome**: Tangible result (priorities, time blocks, clear mind)

## Why It Worked

- **Structure prevented overwhelm**: 5 clear phases vs. "figure it out"
- **Separation of collection and processing**: Mind could empty without immediately solving
- **Forced reflection**: Past and future week review caught insights
- **Actionable result**: 3 priorities + time blocks (not vague intentions)
- **GTD framework**: Proven methodology, not invented process

## Without the Skill

Typical response without skill:

**User**: I'm feeling really scattered. Got a lot going on and not sure where to focus next week.

**Claude**: It sounds like you have a lot on your plate. Some suggestions:
- Try to prioritize your tasks
- Maybe make a list of what's most important
- Take some time to plan your week
- Don't forget self-care!

*User receives vague advice, still feels scattered, doesn't know where to start*

**With skill**: Concrete workflow → tangible outcome in 45 minutes

---

## Future Walkthroughs

Other scenarios to document:

- `communication:nvc-conversation` - Difficult conversation with colleague
- `inner:emotion-processing` - Processing anxiety about presentation
- `creative:creative-block` - Unsticking design work
- `productivity:daily-shutdown` - End-of-day closure

Each showing:
1. Trigger
2. Skill suggestion
3. Workflow execution
4. Tangible outcome
