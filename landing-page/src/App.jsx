import './App.css'

const skills = [
  {
    domain: 'Business',
    name: 'weekly-review',
    description: 'GTD-based weekly planning and reflection',
    longDescription: 'Clear mental clutter, review all open loops, and plan the week ahead with intention.',
    framework: 'Getting Things Done',
    color: 'bg-blue-500',
    icon: '📋',
    duration: '60-90 min',
    whenToUse: 'Friday afternoon or Sunday evening',
    phases: ['Collect', 'Process', 'Organize', 'Review', 'Plan'],
  },
  {
    domain: 'Business',
    name: 'decision-making',
    description: 'Strategic decisions with pre-mortem analysis',
    longDescription: 'Navigate complex decisions by framing the real question, gathering options, and stress-testing your choice.',
    framework: 'First Principles + OODA Loop',
    color: 'bg-blue-500',
    icon: '🎯',
    duration: '30-60 min',
    whenToUse: 'Facing important choices or feeling paralyzed',
    phases: ['Frame', 'Gather', 'Options', 'Evaluate', 'Decide', 'Act'],
  },
  {
    domain: 'Productivity',
    name: 'daily-shutdown',
    description: 'End-of-day ritual for work-life boundaries',
    longDescription: 'Achieve psychological closure so work thoughts don\'t intrude on personal time.',
    framework: 'Deep Work',
    color: 'bg-green-500',
    icon: '🌅',
    duration: '10-15 min',
    whenToUse: 'End of workday, before transitioning to personal time',
    phases: ['Capture', 'Review', 'Plan', 'Tidy', 'Close'],
  },
  {
    domain: 'Productivity',
    name: 'daily-startup',
    description: 'Beginning-of-day ritual for intentional work',
    longDescription: 'Start work with intention and clarity instead of reactive scrambling.',
    framework: 'Deep Work + Atomic Habits',
    color: 'bg-green-500',
    icon: '🌄',
    duration: '15-20 min',
    whenToUse: 'Start of workday, after morning routine',
    phases: ['Prepare', 'Launch', 'Review', 'Prime', 'Focus', 'Execute'],
  },
  {
    domain: 'Inner',
    name: 'self-connection',
    description: 'Emotional processing and self-awareness',
    longDescription: 'Process difficult emotions by connecting with body sensations and identifying underlying needs.',
    framework: 'NVC + Focusing',
    color: 'bg-purple-500',
    icon: '💜',
    duration: '15-30 min',
    whenToUse: 'Feeling overwhelmed, anxious, or emotionally reactive',
    phases: ['Notice', 'Welcome', 'Explore', 'Need', 'Request'],
  },
  {
    domain: 'Communication',
    name: 'nvc-conversation',
    description: 'Nonviolent Communication for difficult conversations',
    longDescription: 'Navigate conflict by expressing observations, feelings, needs, and requests without blame.',
    framework: 'NVC',
    color: 'bg-orange-500',
    icon: '💬',
    duration: '20-45 min',
    whenToUse: 'Difficult conversation, conflict, or setting boundaries',
    phases: ['Prepare', 'Observe', 'Feel', 'Need', 'Request', 'Listen'],
  },
  {
    domain: 'Creative',
    name: 'brainstorming',
    description: 'Structured creative ideation process',
    longDescription: 'Generate innovative ideas using proven creativity frameworks and escape conventional thinking.',
    framework: 'SCAMPER + Design Thinking',
    color: 'bg-pink-500',
    icon: '💡',
    duration: '30-60 min',
    whenToUse: 'Stuck creatively, need fresh ideas, or starting a new project',
    phases: ['Diverge', 'Challenge', 'Combine', 'Converge', 'Refine'],
  },
  {
    domain: 'Health',
    name: 'sleep-routine',
    description: 'Evidence-based sleep optimization system',
    longDescription: 'Create conditions for quality sleep through wind-down rituals, environment optimization, and consistent timing.',
    framework: 'Matthew Walker + Huberman',
    color: 'bg-teal-500',
    icon: '😴',
    duration: '90 min wind-down',
    whenToUse: 'Improving sleep quality, creating evening routine',
    phases: ['Wind-Down', 'Environment', 'Pre-Sleep', 'Wake Protocol', 'Consistency'],
  },
  {
    domain: 'Health',
    name: 'strength-program',
    description: 'Progressive overload strength training',
    longDescription: 'Build strength systematically through compound movements, tracking, and planned progression.',
    framework: '5/3/1 + Starting Strength',
    color: 'bg-teal-500',
    icon: '🏋️',
    duration: '45-75 min/session',
    whenToUse: 'Starting lifting, stalling on progress, or returning after break',
    phases: ['Program', 'Execute', 'Track', 'Progress', 'Deload'],
  },
  {
    domain: 'Health',
    name: 'nutrition-planning',
    description: 'Sustainable nutrition and meal prep system',
    longDescription: 'Fuel your body with a flexible, sustainable approach to meal planning, prep, and tracking.',
    framework: 'ISSN + Precision Nutrition',
    color: 'bg-teal-500',
    icon: '🥗',
    duration: '2 hrs/week prep',
    whenToUse: 'Starting nutrition plan, meal prepping, or adjusting diet',
    phases: ['Calculate', 'Plan', 'Prep', 'Track', 'Adjust'],
  },
]

function SkillCard({ skill }) {
  return (
    <div className="group bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-500 hover:bg-slate-800/80 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{skill.icon}</span>
          <div>
            <span className={`${skill.color} text-xs px-2 py-1 rounded font-medium`}>
              {skill.domain}
            </span>
          </div>
        </div>
        <span className="text-xs text-slate-500 bg-slate-700/50 px-2 py-1 rounded">
          {skill.duration}
        </span>
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
        {skill.name}
      </h3>
      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
        {skill.longDescription}
      </p>

      {/* When to Use */}
      <div className="mb-4">
        <p className="text-xs text-slate-500 mb-1">When to use:</p>
        <p className="text-sm text-slate-400">{skill.whenToUse}</p>
      </div>

      {/* Phases */}
      <div className="mb-4">
        <p className="text-xs text-slate-500 mb-2">Workflow phases:</p>
        <div className="flex flex-wrap gap-1">
          {skill.phases.map((phase, i) => (
            <span key={phase} className="flex items-center text-xs">
              <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded">
                {phase}
              </span>
              {i < skill.phases.length - 1 && (
                <span className="text-slate-600 mx-1">→</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Framework */}
      <div className="pt-3 border-t border-slate-700">
        <p className="text-xs text-slate-500">
          Based on: <span className="text-slate-400">{skill.framework}</span>
        </p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero */}
      <header className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          LifeSkills
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-8">
          Workflow-based practices for all domains of life and work.
          Structured processes grounded in proven frameworks.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com/standardhuman/lifeskills"
            className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
          >
            View on GitHub
          </a>
          <a
            href="#skills"
            className="border border-slate-500 px-6 py-3 rounded-lg font-semibold hover:border-white transition"
          >
            Explore Skills
          </a>
        </div>
      </header>

      {/* What It Is */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What is LifeSkills?</h2>
          <p className="text-lg text-slate-300 mb-8">
            A collection of actionable, step-by-step workflows that help you navigate
            common situations across different life domains. Each skill provides a
            structured process to follow, preventing common failure modes and codifying
            best practices from established frameworks like GTD, NVC, and evidence-based
            health research.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Actionable Steps</h3>
              <p className="text-slate-400 text-sm">
                Not vague principles, but concrete phases with specific actions and time estimates.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-semibold mb-2">Research-Backed</h3>
              <p className="text-slate-400 text-sm">
                Every skill is grounded in established frameworks with proper citations.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-semibold mb-2">AI-Friendly</h3>
              <p className="text-slate-400 text-sm">
                Designed for AI assistants like Claude Code to invoke and guide you through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Available Skills</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            10 skills across 7 domains. Each skill includes detailed phases,
            timing guidance, and real-world examples.
          </p>
        </div>

        {/* Domain Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { name: 'Business', color: 'bg-blue-500' },
            { name: 'Productivity', color: 'bg-green-500' },
            { name: 'Inner', color: 'bg-purple-500' },
            { name: 'Communication', color: 'bg-orange-500' },
            { name: 'Creative', color: 'bg-pink-500' },
            { name: 'Health', color: 'bg-teal-500' },
          ].map((domain) => (
            <span key={domain.name} className="flex items-center gap-2 text-sm text-slate-400">
              <span className={`${domain.color} w-3 h-3 rounded-full`}></span>
              {domain.name}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </section>

      {/* How to Use */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Use</h2>

          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                For Claude Code Users
              </h3>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <p className="text-slate-400"># Clone to your Claude config directory</p>
                <p className="text-green-400">git clone https://github.com/standardhuman/lifeskills.git ~/.claude/lifeskills</p>
              </div>
              <p className="text-slate-400 mt-4 text-sm">
                Skills will be auto-discovered by Claude Code's skill system. The meta-skill
                will suggest relevant skills based on your conversation context.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Standalone Use
              </h3>
              <p className="text-slate-400 text-sm">
                Read skill files directly from <code className="bg-slate-900 px-2 py-1 rounded">skills/[domain]/[skill-name]/SKILL.md</code> and
                follow the workflows manually. Each skill includes step-by-step instructions,
                time estimates, and real-world examples.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                Invoke a Skill
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                In Claude Code, skills are invoked automatically when relevant. You can also request them directly:
              </p>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
                <p className="text-slate-400">"I need to make a strategic decision about..."</p>
                <p className="text-blue-400 mt-2">→ Claude uses business:decision-making skill</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-slate-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400">
            LifeSkills • Inspired by <a href="https://github.com/cldcvr/superpowers" className="text-blue-400 hover:text-blue-300">Superpowers</a>
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/standardhuman/lifeskills"
              className="text-slate-400 hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://github.com/standardhuman/lifeskills/blob/main/CONTRIBUTING.md"
              className="text-slate-400 hover:text-white transition"
            >
              Contributing
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
