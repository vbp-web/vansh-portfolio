"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Circle,
  Menu,
  MoveUpRight,
  Plus,
  Send,
  X,
} from "lucide-react";

const capabilities = [
  ["01", "WEB EXPERIENCES"],
  ["02", "AI PRODUCTS"],
  ["03", "AUTOMATION"],
  ["04", "BUSINESS SOFTWARE"],
  ["05", "MOBILE APP"],
  ["06", "SAAS"],
];

const projects = [
  {
    index: "01",
    title: "parArc design studio",
    label: "ARCHITECTURE EXPERIENCE",
    description:
      "A modern architecture portfolio experience rebuilt with a React-based architecture while preserving the project's visual character and animations.",
    stack: "React / JavaScript / ImageKit",
    link: "https://pararcdesignstudio.in/",
    image: "https://ik.imagekit.io/kn7nmib7f/Screenshot%202026-09-19%20135100.png", // Paste your image URL here (e.g. "https://..." or "/my-image.png")
    tone: "from-[#2f312c] via-[#151816] to-[#060706]",
    visual: "SPACE / FORM",
    mark: "PA",
  },
  {
    index: "02",
    title: "TRAVEBIE",
    label: "AI TRAVEL EXPERIENCE",
    description:
      "An AI-first travel experience built around conversational planning, interactive itineraries and personalized exploration.",
    stack: "Next.js / React / AI / APIs",
    link: "https://www.travebie.com/",
    image: "https://ik.imagekit.io/kn7nmib7f/Screenshot%202026-09-19%20134243.png", // Paste your image URL here
    tone: "from-[#382717] via-[#17120d] to-[#070707]",
    visual: "TRAVEL / 01",
    mark: "TR",
  },
  {
    index: "03",
    title: "SPORTIVO",
    label: "SPORTS BOOKING PLATFORM",
    description:
      "A multi-sport booking platform connecting players, grounds and administrators through a digital booking workflow.",
    stack: "React / Node.js / MongoDB / QR Payments",
    link: "https://sportivo-multi-sport-slot-booking.onrender.com/",
    image: "https://ik.imagekit.io/kn7nmib7f/Screenshot%202026-09-19%20135231.png", // Paste your image URL here
    tone: "from-[#22332e] via-[#111a18] to-[#050706]",
    visual: "PLAY / BOOK",
    mark: "SP",
  },
  {
    index: "04",
    title: "RESTAURANT SOFTWARE",
    label: "BUSINESS SOFTWARE",
    description:
      "A restaurant operating system covering QR menus, ordering, kitchen operations, invoices, tables and staff management.",
    stack: "Electron / React / Node.js / MongoDB",
    link: "https://vbp-web.github.io/Restaurant-POS/",
    image: "https://ik.imagekit.io/kn7nmib7f/Screenshot%202026-09-19%20135210.png", // Paste your image URL here
    tone: "from-[#362718] via-[#1a130c] to-[#060605]",
    visual: "SERVICE / FLOW",
    mark: "RS",
  },
];

const technologies = [
  ["FRONTEND", "React", "Next.js", "TypeScript", "JavaScript", "Tailwind"],
  ["BACKEND", "Node.js", "Express", "APIs"],
  ["DATABASE", "MongoDB", "PostgreSQL", "Prisma"],
  ["AI", "Gemini", "OpenAI APIs", "Computer Vision", "Image Generation", "AI Automation"],
  ["INFRASTRUCTURE", "Vercel", "Render", "Git", "GitHub", "ImageKit"],
];

const socials = [
  ["EMAIL", "mailto:prajapativansh512@gmail.com"],
  ["GITHUB", "https://github.com/vbp-web"],
  ["LINKEDIN", "https://www.linkedin.com/in/vansh-prajapati-6a1749360"],
  ["INSTAGRAM", "https://www.instagram.com/oneverce"],
];

function SectionLabel({ number, children }) {
  return (
    <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9e927e]">
      <span className="h-px w-8 bg-[#806139]" />
      <span>{number}</span>
      <span className="text-[#766e63]">/</span>
      <span>{children}</span>
    </div>
  );
}

function Reveal({ children, className = "" }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function ProjectVisual({ project }) {
  return (
    <div className={`project-visual bg-gradient-to-br ${project.tone}`}>
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="project-visual-img transition-transform duration-700 group-hover:scale-105"
          style={{ filter: "hue-rotate(-168deg) saturate(1.22)" }}
          loading="lazy"
        />
      ) : (
        <>
          <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(225,220,201,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(225,220,201,0.08)_1px,transparent_1px)] [background-size:55px_55px]" />
          <div className="absolute -right-[10%] top-[10%] h-[70%] w-[70%] rounded-full border border-[#d4c3a244] opacity-40 [transform:rotate(-18deg)]" />
          <div className="absolute -bottom-[30%] -left-[10%] h-[80%] w-[80%] rounded-full border border-[#d4c3a233] opacity-50" />
          <div className="absolute left-[12%] top-[18%] h-px w-[76%] bg-[#e1dcc944]" />
          <div className="absolute bottom-[22%] left-[23%] h-[24%] w-[54%] border border-[#e1dcc933] bg-[#0a0a0a55] backdrop-blur-[2px]" />
          <div className="absolute bottom-[25%] left-[26%] h-px w-[48%] bg-[#b49c7955]" />
          <div className="absolute right-[19%] top-[30%] h-[110px] w-[110px] rounded-full border border-[#cbb79655]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_45%,transparent_0%,rgba(0,0,0,0.1)_42%,rgba(0,0,0,0.64)_100%)]" />
          <div className="absolute left-[29%] top-[36%] text-[clamp(4rem,13vw,11rem)] font-bold leading-none tracking-[-0.1em] text-[#e1dcc90e]">{project.mark}</div>
        </>
      )}
      <div className="absolute left-2.5 top-2.5 z-10 flex items-center gap-1.5 rounded-full bg-[#050505]/85 px-2 py-0.5 text-[8px] uppercase tracking-[0.16em] text-[#dfd5c4] backdrop-blur-md md:left-6 md:top-6 md:gap-2 md:px-3 md:py-1.5 md:text-[9px] md:tracking-[0.24em]">
        <span className="h-1 w-1 rounded-full bg-[#c6a46e] md:h-1.5 md:w-1.5" />
        PROJECT FRAME / {project.index}
      </div>
      <div className="hidden sm:block absolute bottom-3.5 left-3.5 z-10 rounded-full bg-[#050505]/85 px-2.5 py-1 text-[8px] uppercase tracking-[0.2em] text-[#dfd5c4] backdrop-blur-md md:bottom-6 md:left-6 md:px-3 md:py-1.5 md:text-[10px] md:tracking-[0.28em]">{project.visual}</div>
      <div className="absolute right-2.5 top-2.5 z-10 rounded-full bg-[#050505]/85 px-2 py-0.5 font-mono text-[8px] text-[#dfd5c4] backdrop-blur-md md:right-6 md:top-6 md:px-3 md:py-1.5 md:text-[10px]">{project.mark}—2026</div>
    </div>
  );
}

function ProjectShowcase({ project }) {
  return (
    <article className="project-panel group relative border-t border-[#e1dcc91c] pt-8 lg:min-h-[720px] lg:sticky lg:top-16">
      <div className="mb-7 flex items-start justify-between gap-5">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[#82796d]">
          <span className="text-[#c6a46e]">{project.index}</span>
          <span className="h-px w-8 bg-[#3c3021]" />
          <span>{project.label}</span>
          {project.current && <span className="rounded-full border border-[#c6a46e66] px-2 py-1 text-[8px] text-[#c6a46e]">LIVE BUILD</span>}
        </div>
        <a href={project.link} target={project.link === "#" ? undefined : "_blank"} rel="noreferrer" className="group/link flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#b6ad9f] transition-colors hover:text-[#e1dcc9]">
          {project.link === "#" ? "CASE STUDY" : "OPEN PROJECT"}
          <MoveUpRight className="h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </a>
      </div>
      <ProjectVisual project={project} />
      <div className="grid gap-5 py-7 md:grid-cols-[1.2fr_1fr_0.7fr] md:items-end">
        <h3 className="text-[clamp(2.2rem,5vw,5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.07em] text-[#e1dcc9]">{project.title}</h3>
        <p className="max-w-sm text-sm leading-6 text-[#928a7d]">{project.description}</p>
        <p className="text-[10px] uppercase leading-5 tracking-[0.18em] text-[#7c7468] md:text-right">{project.stack}</p>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCapability, setActiveCapability] = useState(0);
  const [cursor, setCursor] = useState({ x: -100, y: -100, active: false, label: "" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle");
  const heroRef = useRef(null);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));

    const handleMouseMove = (event) => setCursor((current) => ({ ...current, x: event.clientX, y: event.clientY }));
    const handleScroll = () => {
      if (!heroRef.current) return;
      const progress = Math.min(window.scrollY / Math.max(heroRef.current.offsetHeight, 1), 1);
      heroRef.current.style.setProperty("--hero-progress", progress);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const updateCursor = (active, label = "") => setCursor((current) => ({ ...current, active, label }));

  const WHATSAPP_NUMBER = "918401286822"; // Replace with your WhatsApp number with country code (e.g. 919876543210)

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus("sending");

    try {
      const messageText = `Hello Vansh,\n\n*Name:* ${formState.name}\n*Email:* ${formState.email}\n*Message:* ${formState.message}`;
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;

      // Open WhatsApp chat with pre-filled message
      window.open(whatsappUrl, "_blank");

      setFormStatus("sent");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 4000);
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <main className="cinematic-colorway min-h-screen overflow-hidden bg-[#050505] text-[#e1dcc9]">
      <div className="noise pointer-events-none fixed inset-0 z-50 opacity-[0.035]" />
      <div className="custom-cursor pointer-events-none fixed left-0 top-0 z-[60] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#e1dcc9] mix-blend-difference lg:flex" style={{ left: cursor.x, top: cursor.y }}>
        <span className={`cursor-label whitespace-nowrap text-[9px] uppercase tracking-[0.18em] text-[#050505] transition-opacity ${cursor.active ? "opacity-100" : "opacity-0"}`}>{cursor.label}</span>
      </div>

      <header
        className={`fixed left-0 top-0 z-40 w-full px-5 py-5 transition-all duration-500 md:px-10 ${menuOpen ? "bg-[#050505]" : "bg-[#050505]/75 backdrop-blur-md"
          }`}
      >
        <div className="relative mx-auto flex max-w-[1500px] items-center justify-between">
          {/* Left: Brand Name */}
          <a
            href="#top"
            className="text-xs font-bold uppercase text-[#e1dcc9] transition-colors hover:text-[#c6a46e]"
            style={{ letterSpacing: "3px" }}
            onMouseEnter={() => updateCursor(true, "TOP")}
            onMouseLeave={() => updateCursor(false)}
          >
            VANSH
          </a>

          {/* Center: Navigation Links strictly in the middle of the navbar/page */}
          <nav className="nav-center-desktop">
            {["WORK", "ABOUT", "LAB", "CONTACT"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link font-semibold text-[#9a9284] transition-colors hover:text-[#e1dcc9]"
                style={{ fontSize: "11px", letterSpacing: "3px" }}
                onMouseEnter={() => updateCursor(true, item)}
                onMouseLeave={() => updateCursor(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right: Action button on Desktop */}
          <div className="hidden items-center md:flex">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#c6a46e1a] px-4 py-1.5 font-semibold uppercase text-[#e1dcc9] transition-all hover:bg-[#c6a46e33]"
              style={{ fontSize: "10px", letterSpacing: "2.5px" }}
              onMouseEnter={() => updateCursor(true, "TALK")}
              onMouseLeave={() => updateCursor(false)}
            >
              LET&apos;S TALK
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            className="flex h-8 w-8 items-center justify-center text-[#e1dcc9] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown (Original style) */}
        {menuOpen && (
          <nav className="flex flex-col gap-6 pb-7 pt-10 md:hidden">
            {["WORK", "ABOUT", "LAB", "CONTACT"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-medium tracking-[-0.05em] text-[#e1dcc9] transition-colors hover:text-[#c6a46e]"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="top" ref={heroRef} className="hero relative flex min-h-[100svh] items-center justify-center px-5 pb-16 pt-24 md:px-10" style={{ "--hero-progress": 0 }}>
        <div className="hero-light pointer-events-none absolute left-1/2 top-1/2 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#392716] opacity-[0.13] blur-[130px]" />
        <div className="relative z-10 w-full max-w-[1500px]">
          <div className="hero-meta mb-8 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a39889] md:mb-12"><span className="h-1.5 w-1.5 rounded-full bg-[#c6a46e]" /> FULL-STACK DEVELOPER <span className="text-[#4b4338]">/</span> AI BUILDER <span className="text-[#4b4338]">/</span> FOUNDER <span className="text-[#4b4338]">/</span> AI ENGINEER STUDENT</div>
          <div className="hero-type relative -mx-3 text-center font-bold uppercase text-[#e1dcc9] md:-mx-8">
            <span className="hero-word block leading-[0.75] tracking-[-0.08em]" style={{ fontSize: "clamp(80px, 18vw, 250px)" }}>VANSH</span>
            <span className="hero-subtitle mt-6 block text-center font-semibold text-[#ded7c8] md:mt-10" style={{ fontSize: "clamp(20px, 3vw, 30px)", letterSpacing: "6px" }}>B PRAJAPATI</span>
          </div>
          <div className="mt-14 flex flex-col justify-between gap-8 md:mt-20 md:flex-row md:items-end">
            <p className="max-w-md text-sm leading-6 text-[#8e877b] md:text-base">Websites, software, AI products and automation systems — built from idea to reality.</p>
            <a href="#work" className="group flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ded5c6]" onMouseEnter={() => updateCursor(true, "GO")} onMouseLeave={() => updateCursor(false)}><span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#837052] transition-colors group-hover:bg-[#e1dcc9] group-hover:text-[#050505]"><ArrowDown className="h-4 w-4" /></span> EXPLORE MY WORK</a>
          </div>
        </div>
        <div className="absolute bottom-6 left-5 right-5 flex items-center justify-between text-[9px] uppercase tracking-[0.24em] text-[#655e54] md:left-10 md:right-10"><span>SCROLL TO ENTER</span><span>IND / 2026</span></div>
      </section>

      <section className="relative px-5 py-36 md:px-10 md:py-64">
        <Reveal className="mx-auto max-w-[1500px]">
          <p className="max-w-[1100px] text-[clamp(3.3rem,9vw,10rem)] font-semibold uppercase leading-[0.85] tracking-[-0.09em] text-[#e1dcc9]">I TURN<br /><span className="pl-[12vw] text-[#908474]">IDEAS</span><br />INTO<br /><span className="pl-[7vw]">DIGITAL</span><br />PRODUCTS<span className="text-[#a98656]">.</span></p>
          <div className="mt-16 flex justify-end md:mt-24"><p className="max-w-sm text-sm leading-6 text-[#8c8478]">From the first idea to the final deployment, I work across design, development, AI and infrastructure.</p></div>
        </Reveal>
      </section>

      <section id="work" className="px-5 pb-36 md:px-10 md:pb-64">
        <div className="mx-auto max-w-[1500px]">
          <Reveal><SectionLabel number="01">CAPABILITIES</SectionLabel><h2 className="mt-8 max-w-2xl text-[clamp(3rem,7vw,8rem)] font-semibold uppercase leading-[0.85] tracking-[-0.08em]">WHAT CAN<br /><span className="text-[#837865]">I BUILD?</span></h2></Reveal>
          <div className="mt-20 divide-y divide-[#e1dcc91c] border-y border-[#e1dcc91c]">
            {capabilities.map(([number, title, description], index) => {
              const isOpen = activeCapability === index;
              return (
                <div key={title} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => setActiveCapability(isOpen ? null : index)}
                    className={`capability-row group flex w-full items-center justify-between gap-5 py-6 text-left transition-all duration-300 md:py-8 ${isOpen ? "text-[#e1dcc9]" : "text-[#726b61] hover:text-[#b4ab9d]"
                      }`}
                    onMouseEnter={() => updateCursor(true, isOpen ? "CLOSE" : "VIEW")}
                    onMouseLeave={() => updateCursor(false)}
                  >
                    <span
                      className={`text-xs transition-colors ${isOpen ? "text-[#b28c5b]" : "text-[#5d554a]"
                        }`}
                    >
                      {number}
                    </span>
                    <span className="flex-1 text-[clamp(1.25rem,2.5vw,2.4rem)] font-medium uppercase tracking-[-0.05em]">
                      {title}
                    </span>
                    <Plus
                      className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-45 text-[#c6a46e]" : "text-[#635a4d]"
                        }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pb-7 pl-7 pt-1 transition-all duration-300 md:pl-10">
                      <p className="max-w-2xl text-sm leading-6 text-[#9a9182] md:text-base">
                        {description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 pb-36 md:px-10 md:pb-64">
        <div className="mx-auto max-w-[1500px]">
          <Reveal><SectionLabel number="02">SELECTED WORK</SectionLabel><div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="max-w-3xl text-[clamp(3rem,7vw,8rem)] font-semibold uppercase leading-[0.85] tracking-[-0.08em]">THINGS I&apos;VE<br /><span className="text-[#837865]">BUILT.</span></h2><p className="max-w-xs text-sm leading-6 text-[#81796e]">A few digital rooms from the studio. Some launched, some still becoming.</p></div></Reveal>
          <div className="mt-20 space-y-20 md:mt-32 md:space-y-32">{projects.map((project) => <ProjectShowcase key={project.title} project={project} />)}</div>
        </div>
      </section>

      <section id="about" className="border-t border-[#e1dcc91c] px-5 py-36 md:px-10 md:py-64">
        <div className="mx-auto max-w-[1500px]">
          <Reveal className="text-center">
            <div className="flex justify-center">
              <SectionLabel number="03">ABOUT</SectionLabel>
            </div>
            <h2 className="mx-auto mt-8 max-w-4xl text-[clamp(3rem,7vw,8rem)] font-semibold uppercase leading-[0.85] tracking-[-0.08em]">
              THE PERSON<br />
              <span className="text-[#837865]">BEHIND THE CODE.</span>
            </h2>
          </Reveal>
          <div className="mt-16 md:mt-24">
            <Reveal className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-14">
              <div className="space-y-6 text-center text-[clamp(1.35rem,2.5vw,2.4rem)] leading-[1.25] tracking-[-0.045em] text-[#c5bcad]">
                <p>I&apos;m Vansh B Prajapati — a full-stack developer, AI builder and founder of Oneverce Solutions.</p>
                <p className="text-[#716a60]">I like taking ideas that are still rough and turning them into products people can actually use.</p>
                <p className="text-[#716a60]">My work sits between design, engineering, AI and business — because a good product needs all four.</p>
              </div>
              <div className="grid w-full grid-cols-2 gap-y-8 border-t border-[#e1dcc91c] pt-10 text-center text-[10px] uppercase tracking-[0.2em] text-[#82796c] sm:grid-cols-4 sm:gap-x-8">
                <div>
                  <span className="mb-2 block text-[#c6a46e]">FOCUS</span>
                  Full-Stack / AI / Product
                </div>
                <div>
                  <span className="mb-2 block text-[#c6a46e]">BASED</span>
                  India
                </div>
                <div>
                  <span className="mb-2 block text-[#c6a46e]">BUILDING</span>
                  Oneverce Solutions
                </div>
                <div>
                  <span className="mb-2 block text-[#c6a46e]">STATUS</span>
                  <span className="inline-flex items-center justify-center gap-2">
                    <Circle className="h-2 w-2 fill-[#c6a46e] text-[#c6a46e]" /> Available for ideas
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#e1dcc91c] px-5 py-36 md:px-10 md:py-56">
        <div className="absolute right-[-5%] top-1/2 h-[70vw] w-[70vw] -translate-y-1/2 rounded-full border border-[#a9875b13]" /><div className="absolute right-[12%] top-1/2 h-[35vw] w-[35vw] -translate-y-1/2 rounded-full border border-[#a9875b14]" />
        <Reveal className="relative mx-auto max-w-[1500px]">
          <SectionLabel number="04">STUDIO</SectionLabel>
          <h2
            className="mt-8 font-bold uppercase leading-[0.9] tracking-[-0.07em] text-[#e1dcc9]"
            style={{ fontSize: "clamp(40px, 6vw, 1440px)" }}
          >
            ONEVERCE
          </h2>
          <div className="mt-12 max-w-2xl md:ml-[19%]">
            <p
              className="font-medium uppercase leading-[1.1] tracking-[-0.05em] text-[#b4a895]"
              style={{ fontSize: "clamp(20px, 2.5vw, 32px)" }}
            >
              DIGITAL PRODUCTS.<br />AI.<br />AUTOMATION.
            </p>
            <p className="mt-6 max-w-md text-sm leading-6 text-[#80776a]">Oneverce Solutions is my digital product studio where I build modern websites, software, AI applications, automation systems and custom digital solutions.</p>
            <a href="https://onevercesolution.in/" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e1dcc9] transition-colors hover:text-[#c6a46e]" onMouseEnter={() => updateCursor(true, "OPEN")} onMouseLeave={() => updateCursor(false)}>VISIT ONEVERCE <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </Reveal>
      </section>

      <section id="lab" className="px-5 py-36 md:px-10 md:py-64">
        <div className="mx-auto max-w-[1500px]"><Reveal><SectionLabel number="05">LAB</SectionLabel><h2 className="mt-8 max-w-3xl text-[clamp(3rem,7vw,8rem)] font-semibold uppercase leading-[0.85] tracking-[-0.08em]">CURRENTLY<br /><span className="text-[#837865]">EXPERIMENTING.</span></h2></Reveal><Reveal className="mt-20 grid gap-10 border-t border-[#e1dcc91c] pt-8 md:mt-32 md:grid-cols-[1fr_1fr] md:gap-20"><div><div className="mb-8 flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[#c6a46e]"><span className="h-1.5 w-1.5 rounded-full bg-[#c6a46e]" /> IN DEVELOPMENT</div><h3 className="text-[clamp(3rem,8vw,8rem)] font-semibold uppercase leading-[0.78] tracking-[-0.1em]">AVIRAFIT<br /><span className="text-[#837865]">AI</span></h3></div><div className="flex flex-col justify-end"><p className="max-w-sm text-sm leading-6 text-[#83796d]">Exploring the intersection of personal style, computer vision and intelligent recommendations. The next room is still being built.</p><div className="mt-12 flex flex-wrap gap-2">{["AI", "COMPUTER VISION", "AUTOMATION", "PRODUCT DESIGN", "EXPERIMENTAL UI"].map((tag) => <span key={tag} className="border border-[#e1dcc922] px-3 py-2 text-[9px] uppercase tracking-[0.17em] text-[#8b8172]">{tag}</span>)}</div></div></Reveal></div>
        <div className="ticker mt-32 border-y border-[#e1dcc91c] py-5 text-[clamp(1.2rem,2.4vw,2.3rem)] uppercase tracking-[0.12em] text-[#4c463e] md:mt-48"><div className="ticker-track">AI <span>✳</span> COMPUTER VISION <span>✳</span> AUTOMATION <span>✳</span> PRODUCT DESIGN <span>✳</span> NEXT.JS <span>✳</span> SYSTEMS <span>✳</span> AI <span>✳</span> COMPUTER VISION <span>✳</span> AUTOMATION <span>✳</span></div></div>
      </section>

      <section className="border-t border-[#e1dcc91c] px-5 py-36 md:px-10 md:py-56"><div className="mx-auto max-w-[1500px]"><Reveal><SectionLabel number="06">THE SYSTEM</SectionLabel><h2 className="mt-8 text-[clamp(3rem,7vw,8rem)] font-semibold uppercase leading-[0.85] tracking-[-0.08em]">THE TOOLS<br /><span className="text-[#837865]">BEHIND THE WORK.</span></h2></Reveal><div className="mt-20 grid border-t border-[#e1dcc91c] md:mt-32 md:grid-cols-5">{technologies.map(([category, ...items]) => <Reveal key={category} className="border-b border-[#e1dcc91c] py-7 md:border-r md:px-5 md:first:pl-0"><p className="mb-6 text-[9px] uppercase tracking-[0.22em] text-[#c6a46e]">{category}</p><div className="flex flex-wrap gap-x-3 gap-y-2 md:block">{items.map((item) => <p key={item} className="text-sm leading-7 text-[#8e8578] md:text-base">{item}</p>)}</div></Reveal>)}</div></div></section>

      <section className="flex min-h-[90svh] items-center border-y border-[#e1dcc91c] px-5 py-36 md:px-10 md:py-56"><Reveal className="mx-auto w-full max-w-[1500px]"><SectionLabel number="07">PHILOSOPHY</SectionLabel><div className="mt-16 text-[clamp(3.5rem,10vw,11rem)] font-semibold uppercase leading-[0.8] tracking-[-0.1em]"><p>GOOD SOFTWARE<br /><span className="pl-[10vw] text-[#8a7d6b]">SHOULD FEEL</span><br />SIMPLE<span className="text-[#a98656]">.</span></p><p className="mt-24 text-right text-[#837865]">THE COMPLEXITY<br /><span className="text-[#e1dcc9]">SHOULD STAY</span><br />BEHIND THE SCREEN<span className="text-[#a98656]">.</span></p></div></Reveal></section>

      <section id="contact" className="px-5 pb-20 pt-36 md:px-10 md:pb-28 md:pt-64">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel number="08">CONTACT</SectionLabel>
            <h2
              className="mt-10 font-bold uppercase leading-[0.88] text-[#e1dcc9]"
              style={{
                fontSize: "clamp(48px, 11vw, 500px)",
                letterSpacing: "2px",
              }}
            >
              LET&apos;S BUILD<br />
              <span className="text-[#837865]">
                SOMETHING<br />
                REAL<span className="text-[#a98656]">.</span>
              </span>
            </h2>
          </Reveal>
          <div className="mt-20 grid gap-16 border-t border-[#e1dcc91c] pt-8 md:mt-32 md:grid-cols-[0.7fr_1.3fr] md:gap-24">
            <Reveal>
              <p className="max-w-xs text-sm leading-6 text-[#837a6d]">Have an idea, product or problem you want to turn into software?</p>
              <div className="mt-10 flex flex-col items-start gap-5">
                {socials.map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target={url.startsWith("mailto:") ? undefined : "_blank"}
                    rel={url.startsWith("mailto:") ? undefined : "noreferrer"}
                    className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#9a9183] hover:text-[#e1dcc9]"
                  >
                    {name}
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </Reveal><Reveal><form onSubmit={handleSubmit} className="grid gap-5"><div className="grid gap-5 md:grid-cols-2"><label className="border-b border-[#e1dcc92c] pb-3 text-[10px] uppercase tracking-[0.18em] text-[#756c60]">NAME<input required value={formState.name} onChange={(event) => setFormState({ ...formState, name: event.target.value })} className="mt-3 block w-full bg-transparent text-base normal-case tracking-normal text-[#e1dcc9] outline-none placeholder:text-[#4f493f]" placeholder="Your name" /></label><label className="border-b border-[#e1dcc92c] pb-3 text-[10px] uppercase tracking-[0.18em] text-[#756c60]">EMAIL<input required type="email" value={formState.email} onChange={(event) => setFormState({ ...formState, email: event.target.value })} className="mt-3 block w-full bg-transparent text-base normal-case tracking-normal text-[#e1dcc9] outline-none placeholder:text-[#4f493f]" placeholder="you@company.com" /></label></div><label className="border-b border-[#e1dcc92c] pb-3 text-[10px] uppercase tracking-[0.18em] text-[#756c60]">MESSAGE<textarea required rows="4" value={formState.message} onChange={(event) => setFormState({ ...formState, message: event.target.value })} className="mt-3 block w-full resize-none bg-transparent text-base normal-case tracking-normal text-[#e1dcc9] outline-none placeholder:text-[#4f493f]" placeholder="Tell me what you are building..." /></label><div className="flex flex-wrap items-center justify-between gap-5 pt-3"><button type="submit" disabled={formStatus === "sending" || formStatus === "sent"} className="group flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e1dcc9] disabled:cursor-not-allowed disabled:opacity-70"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#a9875b] transition-colors group-hover:bg-[#e1dcc9] group-hover:text-[#050505]">{formStatus === "sent" ? <Check className="h-4 w-4" /> : formStatus === "sending" ? <Circle className="h-4 w-4 animate-pulse" /> : <Send className="h-4 w-4" />}</span>{formStatus === "sent" ? "MESSAGE SENT" : formStatus === "sending" ? "SENDING" : "START A CONVERSATION"}</button>{formStatus === "error" && <span className="text-xs text-[#b77d63]">Something went wrong. Try again.</span>}</div></form></Reveal></div></div></section>

      <footer className="border-t border-[#e1dcc91c] px-5 py-8 md:px-10"><div className="mx-auto flex max-w-[1500px] flex-col gap-8 text-[9px] uppercase tracking-[0.2em] text-[#766e62] md:flex-row md:items-end md:justify-between"><div><p className="mb-2 text-sm font-bold tracking-[0.16em] text-[#d2c8b8]">VANSH B PRAJAPATI</p><p>FULL-STACK DEVELOPER / AI BUILDER / FOUNDER</p></div><div className="flex flex-col gap-2 md:items-end"><p>© 2026 VANSH B PRAJAPATI</p><p>BUILT WITH CODE + CURIOSITY</p></div></div></footer>
    </main>
  );
}

export default App;