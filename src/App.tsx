import { useEffect, useState } from 'react'
import { Arrow, ClipReveal, Cursor, Lines, Magnetic, Reveal, Rule, SectionHead } from './components/ui'
import { previews } from './components/Previews'

const NAV = ['Work', 'About', 'Skills', 'Experience', 'Contact']
const EMAIL = 'prajapativansh512@gmail.com'

type ProjectItem = {
  n: string
  name: string
  cat: string
  year: string
  tech: string
  desc: string
  p?: string
  image?: string
  fit?: 'cover' | 'contain'
  link?: string
}

const PROJECTS: ProjectItem[] = [
  { n: '01', name: 'Oneverce Solutions', cat: 'Studio · Founder', year: '2024 — Now', tech: 'Full-stack · AI · SaaS', desc: 'The digital product studio I founded, shipping websites, AI assistants and custom software for clients.', p: 'Oneverce', image: 'https://ik.imagekit.io/kn7nmib7f/Screenshot%202026-10-01%20102809.png', link: 'https://www.onevercesolution.in/' },
  { n: '02', name: 'ParArc', cat: 'Architecture Portfolio', year: '2026', tech: 'React · TypeScript · Vite', desc: 'A modern, responsive portfolio website built for parArc Design Studio to showcase architecture projects, spatial designs, and creative work.', p: 'ParArc', image: 'https://ik.imagekit.io/kn7nmib7f/Screenshot%202026-09-19%20135100.png?updatedAt=1789807537906', link: 'https://www.pararcdesignstudio.in/' },
  { n: '03', name: 'Travebie', cat: 'AI Travel Platform', year: '2026', tech: 'Next.js 16 · Gemini AI · Prisma · PostgreSQL', desc: 'An intelligent travel planning platform with Gemini AI, interactive Leaflet maps, and real-time itinerary organization.', p: 'Travebie', image: 'https://ik.imagekit.io/kn7nmib7f/Screenshot%202026-09-19%20134243.png?updatedAt=1789807538058', link: 'https://travebie.com/' },
  { n: '04', name: 'Sportivo', cat: 'Sports Web App', year: '2025', tech: 'React · TypeScript · REST', desc: 'Live fixtures, team tracking and match analytics in a fast, typography-first interface.', p: 'Sportivo', image: 'https://ik.imagekit.io/kn7nmib7f/Screenshot%202026-09-19%20135231.png?updatedAt=1789807537315', link: 'https://sportivo-multi-sport-slot-booking.onrender.com/' },
  { n: '05', name: 'DS Choco Bliss', cat: 'E-commerce', year: '2025', tech: 'Next.js · PostgreSQL · Vercel', desc: 'E-commerce platform for handcrafted chocolates featuring custom boxes, online ordering and seamless checkout.', p: 'Ds Choco Bliss', image: 'https://ik.imagekit.io/kn7nmib7f/Screenshot%202026-10-01%20101929.png', link: 'https://ds-choco.onrender.com/' },
  { n: '06', name: 'Restaurant Management POS', cat: 'POS Software', year: '2025', tech: 'Nodejs · Express · PostgreSQL | Frontend: React | API: API Routes with Next.js', desc: 'POS Management software for restaurants.', p: 'Restaurant Management POS', image: 'https://ik.imagekit.io/kn7nmib7f/Screenshot%202026-09-19%20135210.png?updatedAt=1789807537528', link: 'https://vbp-web.github.io/Restaurant-POS/' },
]

const SKILLS = [
  { t: 'Development', i: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', 'Tailwind CSS 4', 'Node.js', 'Python'] },
  { t: 'AI / ML', i: ['Google Gemini', 'Vercel AI SDK', 'LLM APIs', 'Computer Vision', 'AI Automation'] },
  { t: 'Design', i: ['Figma', 'UI/UX', 'Design Systems', 'Motion Design', 'Framer Motion'] },
  { t: 'Tools & DB', i: ['PostgreSQL (Neon)', 'Prisma ORM', 'Upstash Redis', 'Git & GitHub', 'Vercel', 'Zod', 'REST APIs'] },
]

const JOURNEY = [
  {
    y: '2024',
    k: 'Learning',
    t: 'Started learning by building',
    d: 'Started seriously exploring web development, programming and software development — learning by turning ideas into working projects.',
  },
  {
    y: '2025',
    k: 'First Project',
    t: 'Built my first real project',
    d: 'Started the year by building DS Choco Bliss, putting my development skills into a real-world project for the first time.',
  },
  {
    y: '2025 · Dec',
    k: 'Software',
    t: 'Restaurant POS system',
    d: 'Built a restaurant-focused POS and management system with ordering, tables, billing, kitchen workflows and business operations.',
  },
  {
    y: '2026 · Jan',
    k: 'Sportivo',
    t: 'Built a multi-sport booking platform',
    d: 'Developed Sportivo to handle sports venue discovery, slot booking, payments and management through a complete digital system.',
  },
  {
    y: '2026 · Mar',
    k: 'Client Work',
    t: 'Built for parArc Design Studio',
    d: 'Worked with parArc Design Studio to transform their architecture website into a modern, responsive React experience while preserving its visual identity and interactions.',
  },
  {
    y: '2026 · Jun',
    k: 'Oneverce',
    t: 'Launched Oneverce Solutions',
    d: 'Turned my growing experience into Oneverce Solutions — a studio focused on websites, software, automation, AI and digital products.',
  },
  {
    y: '2026 · Aug',
    k: 'Travebie',
    t: 'Built an AI-powered travel experience',
    d: 'Worked on Travebie, combining travel planning, conversational AI, personalized recommendations and a modern booking experience.',
  },
  {
    y: 'Now',
    k: 'AI + Products',
    t: 'Building what comes next',
    d: 'Balancing college projects with personal products like Avirafit AI while continuing to explore AI, computer vision, automation and intelligent software.',
  },
]

const PROCESS = [
  { n: '01', t: 'Discover', d: 'Listen, question, map the problem. Clarity before pixels.' },
  { n: '02', t: 'Design', d: 'Systems, type and motion sketched fast, refined slowly.' },
  { n: '03', t: 'Build', d: 'Clean, typed, tested code. Shipped early, deployed often.' },
  { n: '04', t: 'Iterate', d: 'Measure, learn, sharpen. Launch is the beginning.' },
]

const SOCIALS = [
  { n: 'Email', h: `mailto:${EMAIL}`, v: EMAIL },
  { n: 'LinkedIn', h: 'https://www.linkedin.com/in/vansh-prajapati-6a1749360', v: 'in/vansh-prajapati-6a1749360' },
  { n: 'GitHub', h: 'https://github.com/vbp-web', v: '@vbp-web' },
  { n: 'Instagram', h: 'https://www.instagram.com/oneverce/', v: '@oneverce' },
]

function useScrollY() {
  const [y, setY] = useState(0)
  useEffect(() => {
    const f = () => setY(window.scrollY)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return y
}

function Nav({ theme, setTheme }: { theme: string; setTheme: (t: string) => void }) {
  const [open, setOpen] = useState(false)

  // Prevent background scroll when mobile navigation is active
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference text-white">
        <div className="flex items-center justify-between px-5 py-5 sm:px-8 sm:py-6 md:px-10">
          <a href="#top" className="font-display text-lg font-black tracking-[-0.03em]">VANSH</a>
          <nav className="hidden items-center gap-10 md:flex">
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="group relative font-mono text-[11px] uppercase tracking-[0.14em]">
                {n}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-white transition-transform duration-500 ease-out-expo group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative h-5 w-5 rounded-full border border-white transition-transform duration-500 hover:rotate-180"
            >
              <span className="absolute inset-y-0 left-0 w-1/2 rounded-l-full bg-white" />
            </button>
          </nav>
          <div className="flex items-center gap-3 md:hidden">
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative h-5 w-5 rounded-full border border-white transition-transform duration-500"
            >
              <span className="absolute inset-y-0 left-0 w-1/2 rounded-l-full bg-white" />
            </button>
            <button
              aria-label={open ? 'Close navigation' : 'Open navigation'}
              className="font-mono text-[11px] uppercase tracking-[0.14em] border border-white/40 px-3 py-1 rounded-full"
              onClick={() => setOpen(!open)}
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      {/* Dedicated full-screen mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-bg text-fg p-6 sm:p-10 md:hidden animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <a href="#top" onClick={() => setOpen(false)} className="font-display text-xl font-black tracking-tight">VANSH</a>
            <button
              onClick={() => setOpen(false)}
              className="font-mono text-xs uppercase tracking-widest border border-line px-3 py-1.5 rounded-full"
            >
              Close ✕
            </button>
          </div>
          <nav className="flex flex-col gap-4 my-auto py-6">
            {NAV.map((n, i) => (
              <a
                key={n}
                onClick={() => setOpen(false)}
                href={`#${n.toLowerCase()}`}
                className="group flex items-baseline justify-between border-b border-line pb-3"
              >
                <span className="display text-3xl sm:text-4xl group-hover:translate-x-2 transition-transform duration-300">{n}</span>
                <span className="label">0{i + 1}</span>
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="label flex items-center gap-2 border border-line px-3 py-1.5 rounded-full"
            >
              Theme: <span className="font-semibold text-fg uppercase">{theme}</span>
            </button>
            <a href={`mailto:${EMAIL}`} className="label text-fg underline underline-offset-4">
              {EMAIL}
            </a>
          </div>
        </div>
      )}
    </>
  )
}

function Hero() {
  const y = useScrollY()
  const [t, setT] = useState('')
  useEffect(() => {
    const f = () => setT(new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata' }))
    f()
    const i = setInterval(f, 1000)
    return () => clearInterval(i)
  }, [])
  return (
    <section id="top" className="relative flex min-h-[92vh] sm:min-h-screen flex-col justify-end overflow-hidden px-5 pb-10 pt-28 sm:px-8 sm:pb-14 sm:pt-32 md:px-10 md:pb-16">
      {/* grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
          backgroundSize: '96px 96px',
          maskImage: 'radial-gradient(ellipse at 70% 40%, #000 0%, transparent 75%)',
          transform: `translateY(${y * 0.08}px)`,
        }}
      />
      {/* oversized numerals + ring */}
      <div className="pointer-events-none absolute right-[-2vw] top-[14vh] select-none opacity-25 sm:opacity-40 md:opacity-100" style={{ transform: `translateY(${y * -0.12}px)` }}>
        <span className="display block text-[32vw] sm:text-[28vw] md:text-[30vw] leading-none text-transparent" style={{ WebkitTextStroke: '1px var(--dim)' }}>
          26
        </span>
      </div>
      <div className="pointer-events-none absolute right-[8vw] top-[22vh] hidden h-[26vw] w-[26vw] md:block" style={{ transform: `translateY(${y * 0.18}px)` }}>
        <div className="absolute inset-0 rounded-full border border-dashed border-line" style={{ animation: 'spin-slow 60s linear infinite' }} />
        <div className="absolute inset-[18%] rounded-full border border-line" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-line" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-line" />
        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 bg-fg" style={{ animation: 'blink 1.2s steps(1) infinite' }} />
        <svg className="absolute left-[62%] top-[58%] h-6 w-6 text-fg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 2 20 12 12 14 9 22Z" /></svg>
        <span className="label absolute left-[66%] top-[68%]">x 0.62 / y 0.58</span>
      </div>

      {/* metadata - desktop */}
      <div className="label absolute left-6 top-28 hidden flex-col gap-1 md:flex md:left-10">
        <span>N 23.0225° — E 72.5714°</span>
        <span>Ahmedabad, IN · {t} IST</span>
      </div>
      <div className="label absolute right-6 top-28 hidden text-right md:block md:right-10">
        <span>Portfolio ’26</span>
        <br />
        <span className="text-dim">Vol. 01</span>
      </div>

      <div className="relative w-full">
        {/* mobile metadata bar */}
        <div className="label mb-6 flex items-center justify-between border-b border-line pb-3 md:hidden">
          <span>Ahmedabad · {t} IST</span>
          <span>Vol. 01</span>
        </div>

        <Reveal className="mb-4 sm:mb-8">
          <p className="label !text-fg text-[10px] sm:text-[11px]">Creative Developer / AI · ML / Founder</p>
        </Reveal>
        <Lines
          as="h1"
          delay={900}
          className="display text-[12.5vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[7.6vw]"
          lines={['I build digital', 'experiences that', <>think, move <span className="text-mute">&amp;</span> scale.</>]}
        />
        <div className="mt-8 sm:mt-12 grid items-end gap-8 md:grid-cols-12 md:gap-10">
          <Reveal delay={1800} className="md:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-mute sm:text-lg md:text-xl">
              <span className="text-fg">Developer focused on AI,</span> intelligent products, modern web experiences, and digital systems.
            </p>
          </Reveal>
          <Reveal delay={2000} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:col-span-5">
            <Magnetic href="#work" className="justify-center items-center gap-3 border border-fg bg-fg px-6 py-3.5 sm:px-7 sm:py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-bg transition-colors hover:bg-transparent hover:text-fg text-center">
              View Work <Arrow />
            </Magnetic>
            <Magnetic href="#contact" className="justify-center items-center gap-3 border border-line px-6 py-3.5 sm:px-7 sm:py-4 font-mono text-[11px] uppercase tracking-[0.14em] hover:border-fg text-center">
              Let’s Talk
            </Magnetic>
          </Reveal>
          <div className="hidden items-center justify-end gap-3 md:col-span-2 md:flex">
            <span className="label">Scroll</span>
            <span className="relative h-14 w-px overflow-hidden bg-line">
              <span className="absolute inset-0 bg-fg" style={{ animation: 'scrolldrop 2s var(--ease-out-expo) infinite' }} />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Ticker() {
  const items = ['Full-stack', 'AI / ML', 'Computer Vision', 'Automation', 'SaaS', 'Interactive Web']
  const row = [...items, ...items, ...items, ...items]
  return (
    <div className="overflow-hidden border-y border-line py-3.5 sm:py-5">
      <div className="flex w-max gap-6 sm:gap-10 whitespace-nowrap" style={{ animation: 'marquee 40s linear infinite' }}>
        {row.map((t, i) => (
          <span key={i} className="display flex items-center gap-6 sm:gap-10 text-2xl sm:text-3xl md:text-5xl text-mute">
            {t}
            <span className="relative flex h-3 w-3 sm:h-4 sm:w-4 items-center justify-center">
              <span className="absolute h-full w-full rounded-full bg-fg/20 animate-ping opacity-60" />
              <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-fg/50 shadow-[0_0_12px_currentColor]" />
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

function About() {
  const areas = ['Full-stack development', 'AI / ML', 'Computer Vision', 'Automation', 'SaaS', 'Interactive web experiences']
  return (
    <section id="about" className="px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <SectionHead title="About" n="01" />
      <div className="mt-10 sm:mt-16 grid gap-10 md:grid-cols-12 md:gap-16">
        <Lines as="h2" className="display text-4xl sm:text-6xl md:col-span-8 md:text-[7vw]" lines={['I turn ideas', 'into digital', <span className="text-mute">products.</span>]} />
        <div className="flex flex-col justify-end gap-8 sm:gap-10 md:col-span-4">
          <Reveal>
            <p className="text-base sm:text-lg leading-relaxed text-mute">
              I’m <span className="text-fg">Vansh B. Prajapati</span>: a developer who sits between engineering and design. I build the whole thing, from the model behind the feature to the motion in the interface, and run Oneverce Solutions to do it for others.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <ul>
              {areas.map((a, i) => (
                <li key={a} className="group flex items-center justify-between border-t border-line py-3 text-sm sm:text-base transition-[padding] duration-500 ease-out-expo hover:pl-3">
                  <span>{a}</span>
                  <span className="label">0{i + 1}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ProjectMedia({ project }: { project: ProjectItem }) {
  const [imgError, setImgError] = useState(false)
  const Preview = project.p && project.p in previews ? previews[project.p as keyof typeof previews] : null

  useEffect(() => {
    setImgError(false)
  }, [project.image])

  if (project.image && !imgError) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#0c0d10] flex items-center justify-center">
        <img
          key={project.image}
          src={project.image}
          alt={project.name}
          onError={() => {
            console.warn(`Failed to load image for ${project.name}:`, project.image)
            setImgError(true)
          }}
          className="h-full w-full object-contain object-center transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
        />
      </div>
    )
  }

  return (
    <div className="h-full w-full transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.06]">
      {Preview ? <Preview /> : <div className="flex h-full w-full items-center justify-center bg-panel text-dim font-mono text-xs">Preview coming soon</div>}
    </div>
  )
}

function Work() {
  return (
    <section id="work" className="px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:pb-32">
      <SectionHead title="Selected Work" n="02" />
      <Lines as="h2" className="display mb-12 sm:mb-20 mt-10 sm:mt-16 text-4xl sm:text-6xl md:text-[7.5vw]" lines={['Selected', 'work ↓']} />
      <div>
        {PROJECTS.map((p) => {
          return (
            <Reveal key={p.n}>
              <a
                href={p.link || '#contact'}
                target={p.link?.startsWith('http') ? '_blank' : undefined}
                rel={p.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block border-t border-line py-8 sm:py-10 md:py-14"
              >
                <div className="grid gap-6 sm:gap-8 md:grid-cols-12 md:gap-10 items-center">
                  <div className="flex flex-col justify-between opacity-90 transition-opacity duration-700 md:opacity-70 group-hover:opacity-100 md:col-span-5">
                    <div>
                      <div className="label mb-4 sm:mb-6 flex gap-4 sm:gap-6">
                        <span className="!text-fg">{p.n}</span>
                        <span>{p.cat}</span>
                        <span className="ml-auto">{p.year}</span>
                      </div>
                      <h3 className="display text-3xl sm:text-4xl md:text-5xl lg:text-[4.2vw] transition-transform duration-700 ease-out-expo group-hover:translate-x-3">{p.name}</h3>
                      <p className="mt-4 sm:mt-6 max-w-sm text-sm sm:text-base leading-relaxed text-mute">{p.desc}</p>
                    </div>
                    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                      <span className="label">{p.tech}</span>
                      <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em]">
                        View Project
                        <Arrow className="text-lg sm:text-xl transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-2" />
                      </span>
                    </div>
                  </div>
                  <ClipReveal className="md:col-span-7">
                    <div className="relative overflow-hidden rounded-lg border border-line/40 bg-panel shadow-2xl transition-all duration-500 group-hover:border-fg/50">
                      {/* Browser mockup header */}
                      <div className="flex items-center justify-between border-b border-line/30 bg-bg/75 px-3.5 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/90 inline-block" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/90 inline-block" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/90 inline-block" />
                        </div>
                        <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-mute uppercase tracking-wider truncate max-w-[200px] sm:max-w-none">
                          <span className="text-fg font-semibold">{p.name}</span>
                          <span className="text-dim hidden sm:inline">·</span>
                          <span className="hidden sm:inline">{p.cat}</span>
                        </div>
                        <span className="font-mono text-[10px] text-dim">Fig. {p.n}</span>
                      </div>
                      {/* Full uncropped image container */}
                      <div className="relative aspect-[1.95/1] w-full overflow-hidden bg-[#0c0d10]">
                        <ProjectMedia project={p} />
                      </div>
                    </div>
                  </ClipReveal>
                </div>
              </a>
            </Reveal>
          )
        })}
        <Rule />
      </div>
    </section>
  )
}

function Oneverce() {
  const services = ['Websites', 'Web applications', 'AI assistants', 'AI automation', 'SaaS', 'Booking systems', 'Integrations', 'Custom software']
  const stats = [['05+', 'Products shipped'], ['08', 'Service lines'], ['100%', 'Founder-led']]
  return (
    <section className="bg-fg px-5 py-20 sm:px-8 sm:py-24 text-bg md:px-10 md:py-32" style={{ ['--line' as string]: 'rgba(0,0,0,.18)', ['--mute' as string]: '#5d5b57' }}>
      <div className="flex items-center justify-between border-b border-line pb-4 sm:pb-5">
        <span className="label !text-bg">Case Study / Oneverce Solutions</span>
        <span className="label">Est. 2024</span>
      </div>
      <Lines as="h2" className="display mt-10 sm:mt-16 text-4xl sm:text-6xl md:text-[9vw]" lines={['Building', 'more than', 'websites.']} />
      <div className="mt-12 sm:mt-20 grid gap-10 sm:gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="text-lg sm:text-xl leading-snug md:text-2xl">
            Oneverce is a digital product and technology studio. We start with how a business actually runs, then build the software that makes it lighter, faster and smarter.
          </p>
          <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-4 border-t border-line pt-6">
            {stats.map(([n, l]) => (
              <div key={l}>
                <div className="display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{n}</div>
                <div className="label mt-2 sm:mt-3 text-[10px] sm:text-[11px]">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="md:col-span-6 md:col-start-7">
          {services.map((s, i) => (
            <Reveal key={s} delay={i * 50}>
              <div className="group flex items-baseline justify-between gap-3 border-t border-line py-3.5 sm:py-4 transition-[padding] duration-500 ease-out-expo hover:pl-4">
                <span className="display text-2xl sm:text-3xl md:text-4xl">{s}</span>
                <span className="label">0{i + 1}</span>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <SectionHead title="Capabilities" n="03" />
      <div className="mt-10 sm:mt-16 grid gap-x-10 gap-y-12 sm:gap-y-16 md:gap-y-20 md:grid-cols-2">
        {SKILLS.map((s, i) => (
          <Reveal key={s.t} delay={i * 80}>
            <div className="mb-4 sm:mb-6 flex items-baseline justify-between">
              <h3 className="display text-3xl sm:text-4xl md:text-5xl">{s.t}</h3>
              <span className="label">0{i + 1}</span>
            </div>
            <ul>
              {s.i.map((k) => (
                <li key={k} className="group flex items-center justify-between border-t border-line py-2.5 sm:py-3 text-base sm:text-lg text-mute transition-all duration-500 ease-out-expo hover:pl-3 hover:text-fg">
                  <span>{k}</span>
                  <Arrow className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="px-5 pb-20 sm:px-8 sm:pb-24 md:px-10 md:pb-32">
      <SectionHead title="Experience / Journey" n="04" />
      <div className="mt-10 sm:mt-16">
        {JOURNEY.map((j, i) => (
          <Reveal key={i}>
            <div className="group grid gap-2 sm:gap-3 border-t border-line py-6 sm:py-8 transition-colors md:grid-cols-12 md:gap-10">
              <div className="display text-3xl sm:text-4xl text-mute transition-colors duration-500 group-hover:text-fg md:col-span-2 md:text-5xl">{j.y}</div>
              <div className="label pt-1 sm:pt-2 md:col-span-2 md:pt-3">{j.k}</div>
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight md:col-span-4 md:text-3xl">{j.t}</h3>
              <p className="text-sm sm:text-base text-mute md:col-span-4">{j.d}</p>
            </div>
          </Reveal>
        ))}
        <Rule />
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="px-5 pb-20 sm:px-8 sm:pb-24 md:px-10 md:pb-32">
      <SectionHead title="How I Build" n="05" />
      <Lines as="h2" className="display mb-10 sm:mb-16 mt-10 sm:mt-16 text-4xl sm:text-6xl md:text-[7.5vw]" lines={['How I build']} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-line">
        {PROCESS.map((p, i) => (
          <Reveal key={p.n} delay={i * 120}>
            <div className="group flex h-full min-h-[16rem] sm:min-h-[20rem] md:min-h-[24rem] flex-col justify-between border-b border-r border-line p-5 sm:p-6 transition-colors duration-700 hover:bg-fg hover:text-bg">
              <span className="label transition-colors group-hover:!text-bg">{p.n} — {p.t}</span>
              <div>
                <div className="display text-[18vw] sm:text-[12vw] lg:text-[7.5vw] leading-[0.8]">{p.n}</div>
                <h3 className="display mt-4 sm:mt-6 text-2xl sm:text-3xl">{p.t}</h3>
                <p className="mt-2 sm:mt-3 max-w-[16rem] text-xs sm:text-sm text-mute transition-colors group-hover:text-bg/70">{p.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 pb-16 pt-20 sm:px-8 sm:pt-24 md:px-10 md:pb-20 md:pt-32">
      <div className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)', backgroundSize: '96px 96px', maskImage: 'radial-gradient(ellipse at 50% 100%, #000, transparent 70%)' }} />
      <div className="relative">
        <SectionHead title="Contact" n="06" />
        <Lines as="h2" className="display mt-10 sm:mt-16 text-4xl sm:text-6xl md:text-[9vw]" lines={['Have an idea?', <>Let’s build it<span className="text-mute">.</span></>]} />
        <div className="mt-12 sm:mt-20 grid items-center gap-10 sm:gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            {SOCIALS.map((s) => (
              <a key={s.n} href={s.h} target={s.n === 'Email' ? undefined : '_blank'} rel="noreferrer" className="group flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 border-t border-line py-4 sm:py-5 transition-[padding] duration-500 ease-out-expo hover:pl-3 sm:hover:pl-4">
                <span className="label w-24 sm:w-28">{s.n}</span>
                <span className="flex-1 text-base sm:text-lg md:text-xl lg:text-2xl break-all sm:break-normal">{s.v}</span>
                <Arrow className="text-xl sm:text-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 hidden sm:block" />
              </a>
            ))}
            <div className="border-t border-line" />
          </div>
          <div className="flex justify-center md:col-span-5 md:justify-end">
            <Magnetic href={`mailto:${EMAIL}`} strength={0.25} className="group relative h-52 w-52 sm:h-64 sm:w-64 md:h-80 md:w-80 items-center justify-center rounded-full border border-fg text-center transition-colors duration-700 hover:bg-fg hover:text-bg">
              <span className="absolute inset-2 sm:inset-3 rounded-full border border-dashed border-line" style={{ animation: 'spin-slow 40s linear infinite' }} />
              <span className="display text-xl sm:text-2xl md:text-3xl leading-tight">
                Start a<br />project <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
              </span>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8 sm:py-10 md:px-10">
      <div className="flex flex-col justify-between gap-6 sm:gap-8 md:flex-row md:items-end">
        <div>
          <div className="display text-xl sm:text-2xl">Vansh B. Prajapati</div>
          <p className="label mt-2 sm:mt-3">Creative Developer · AI/ML · Founder</p>
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-8">
          {SOCIALS.slice(1).map((s) => (
            <a key={s.n} href={s.h} target="_blank" rel="noreferrer" className="label transition-colors hover:!text-fg">{s.n}</a>
          ))}
        </div>
        <span className="label">© {new Date().getFullYear()} — All rights reserved</span>
      </div>
    </footer>
  )
}

export default function App() {
  const [theme, setTheme] = useState('light')
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 700)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className="grain">
      <Cursor />
      <div
        className="pointer-events-none fixed inset-0 z-[95] flex items-center justify-center bg-fg text-bg transition-transform duration-[1200ms] ease-out-expo"
        style={{ transform: loaded ? 'translateY(-100%)' : 'none' }}
      >
        <span className="display text-5xl">Vansh</span>
      </div>
      <Nav theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Work />
        <Oneverce />
        <Skills />
        <Experience />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
