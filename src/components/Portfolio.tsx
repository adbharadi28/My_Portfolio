import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Moon, Sun, Github, Linkedin, Mail, ArrowUpRight, Download, ArrowRight, Code2, Palette, Plug, MonitorSmartphone, ExternalLink, Globe, Monitor, Smartphone, Layers, } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import emailjs from "@emailjs/browser";
import heroPortrait from "@/assets/Arnav.jpg";
import { useRef } from "react";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "Node.js", level: 88 },
  { name: "Next.js", level: 90 },
  { name: "Tailwind CSS", level: 96 },
  // { name: "PostgreSQL", level: 82 },
  { name: "MySQL", level: 80 },
  // { name: "GraphQL", level: 78 },
  { name: "JavaScript", level: 96 },
  { name: "HTML / CSS", level: 98 },
];

const MARQUEE = [
  "React",
  "Vite",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Next.js",
  "Electron.js",
  "React Native",
  "ASP.NET MVC",
  "C#",
  "Java",
  "MySQL",
  "MongoDB",
  "Firebase",
  "Tailwind CSS",
  "Bootstrap",
  "Framer Motion",
  "HTML5",
  "CSS3",
  "REST API",
  "Git",
  "GitHub",
  "JWT Auth"
];

const PROJECTS = [
  {
    n: "01",
    title: "Libercocare ",
    desc: "Liberco Care is a wellness and skincare brand offering natural Ayurvedic inspired personal care products. The website showcases herbal skincare solutions beauty essentials and self care products focused on healthy living premium quality clean formulations and a modern customer friendly shopping experience.",
    tech: ["HTML", "CSS", "JS"],
    demo: "https://libercocare.com/",
    // repo: "#",
    accent: "from-primary/20 to-secondary/10",
  },
  {
    n: "02",
    title: "Joshi Gadgil & Co.",
    desc: "Joshi Gadgil & Co. is a professional Chartered Accountancy firm offering audit taxation risk advisory cyber security financial consulting and compliance services. The website presents their expertise team services and client focused approach through a clean corporate design.",
    tech: ["ASP.NET", "HTML", "CSS", "Javascript", "Bootstrap"],
    demo: "https://joshigadgilco.in/",
    repo: "#",
    accent: "from-secondary/20 to-primary/10",
  },
  {
    n: "03",
    title: "BlackCoffee Creatives",
    desc: "BlackCoffee Creatives is a creative advertising and branding agency offering services in design social media website development film animation and marketing communications. The website highlights their creative portfolio experienced team client collaborations and branding expertise through a modern visually engaging and professional interface.",
    tech: ["ASP.NET", "HTML", "CSS", "Javascript", "Bootstrap"],
    demo: "https://blackcoffeecreatives.in/",
    repo: "#",
    accent: "from-primary/15 to-primary/5",
  },
  {
    n: "04",
    title: "Kelplanet",
    desc: "Kelplanet is an IT solutions and services company providing laptop sales rentals repairs networking CCTV installation AMC support and business infrastructure solutions. The website highlights their technology services professional support team and customer focused approach through a clean modern and responsive business interface.",
    tech: ["React JS", "VITE", "HTML", "CSS", "JAVASCRIPT"],
    demo: "https://www.kelplanet.com/",
    repo: "#",
    accent: "from-secondary/15 to-secondary/5",
  },
  // {
  //   n: "05",
  //   title: "Atlas Maps API",
  //   desc: "Geospatial REST + GraphQL API serving 50k req/min with vector tiles.",
  //   tech: ["Node.js", "GraphQL", "PostGIS"],
  //   demo: "#",
  //   repo: "#",
  //   accent: "from-primary/20 to-secondary/15",
  // },
  // {
  //   n: "06",
  //   title: "Echo CMS",
  //   desc: "Block-based content platform with collaborative editing via CRDTs.",
  //   tech: ["React", "Yjs", "Node.js"],
  //   demo: "#",
  //   repo: "#",
  //   accent: "from-secondary/15 to-primary/15",
  // },
];

const SERVICES = [
  { icon: Globe, title: "Web Application Development", desc: "Production-grade web apps built with modern React, TypeScript and edge infrastructure." },
  { icon: Monitor, title: "Desktop Application Development", desc: "Build scalable, high-performance web applications with clean UI and robust backend systems." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Create fast, responsive mobile apps focused on usability, performance, and seamless experience." },
  { icon: Palette, title: "UI/UX Design & Frontend Engineering", desc: "Design and build intuitive interfaces with a focus on clarity, usability, and modern aesthetics." },
];

// NAV STARTS HERE

function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-lg tracking-tight">
          Arnav Bharadi
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="relative text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border hover:bg-accent transition-colors"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 h-9 px-4 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Hire me <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}

// NAV STARTS HERE

// HERO STARTS HERE

function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-24 md:pb-22 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-secondary/15 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          {/* <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-3 py-1 text-xs font-mono"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            Available for new projects · Q3 2026
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tighter"
          >
            Web apps <br />
            built with <span className="text-gradient font-display">precision</span> <br />
            <span className="text-muted-foreground">&amp; soul.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            I'm <span className="text-foreground font-medium">Arnav Bharadi</span> — a web application developer crafting fast, accessible products with React, Node and a relentless eye for detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:shadow-accent transition-all hover:-translate-y-0.5"
            >
              View my work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="src/assets/ResumeArnav.pdf"
              download
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-border bg-background hover:bg-accent transition-colors font-medium"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-14 flex items-center gap-8 text-sm"
          >
            {[
              { k: "4+", v: "Years building" },
              { k: "20+", v: "Shipped projects" },
              { k: "12", v: "Happy clients" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold">{s.k}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-elegant">
            <img
              src={heroPortrait}
              alt="Arnav Bharadi, Web Application Developer"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/15 mix-blend-multiply" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-soft max-w-[200px]">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-green-500" /> currently
            </div>
            <div className="mt-1 text-sm font-medium">Billing Software</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
// HERO ENDS HERE

// MARQUEE STARTS HERE

function Marquee() {
  return (
    <div className="border-y border-border bg-surface py-6 overflow-hidden">
      <div className="flex marquee whitespace-nowrap gap-12 text-3xl md:text-4xl font-display font-medium tracking-tight">
        {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((w, i) => (
          <span key={i} className="flex items-center gap-12">
            {w}
            <span className="text-secondary">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// MARQUEE ENDS HERE

// SECTION STARTS HERE

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span className="h-px w-8 bg-secondary" />
              {eyebrow}
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl">
              {title}
            </h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

// SECTION ENDS HERE


// ABOUT STARTS HERE

function About() {
  return (
    <Section id="about" eyebrow="About" title={<>A developer who treats <span className="text-gradient">craft</span> as a practice.</>}>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I’ve spent the last 4 years building pretty much everything — websites, web apps, mobile apps, even desktop applications.
            I’m not really into sticking to one lane. If something needs to be built, I’ll figure it out and ship it.
            I enjoy turning random ideas into real, working products — clean UI, smooth performance, no unnecessary complexity.
            Most of the time I’m coding, sometimes I’m exploring new tech, and yeah… occasionally overthinking design details that most people won’t even notice.
          </p>
        </div>
        <div className="space-y-4">
          {[
            { k: "Based in", v: "Dombivli, Maharashtra" },
            { k: "Stack", v: "React · Node · TS" },
            { k: "Languages", v: "English · Hindi · Marathi" },
            { k: "Open to", v: "Job + Freelance" },
          ].map((r) => (
            <div key={r.k} className="flex items-center justify-between border-b border-border pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{r.k}</span>
              <span className="font-medium">{r.v}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ABOUT ENDS HERE

// SKILLS STARTS HERE

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title={<>Tools I reach for <span className="text-gradient">every day</span>.</>}>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
          >
            <div className="flex items-baseline justify-between mb-2">
              <span className="font-medium">{s.name}</span>
              <span className="text-xs font-mono text-muted-foreground">{s.level}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// SKILLS ENDS HERE

// WORK STARTS HERE

function Work() {
  return (
    <Section id="work" eyebrow="Selected Work" title={<>Recent projects, <span className="text-gradient">handpicked</span>.</>}>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.demo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 hover:-translate-y-1 transition-all duration-500 hover:shadow-elegant"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-muted-foreground">{p.n} / {String(PROJECTS.length).padStart(2, "0")}</span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-foreground group-hover:rotate-12" />
              </div>
              <h3 className="mt-8 text-2xl md:text-3xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full border border-border bg-background/60">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-5 text-sm">
                <span className="inline-flex items-center gap-1.5 text-foreground font-medium">
                  <ExternalLink className="h-3.5 w-3.5" /> Live demo
                </span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="h-3.5 w-3.5" /> Source
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

// WORK ENDS HERE

// SERVICES STARTS HERE

function Services() {
  return (
    <Section id="services" eyebrow="Services" title={<>What I can <span className="text-gradient">build for you</span>.</>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative rounded-3xl border border-border bg-card p-7 hover:border-foreground/30 transition-colors"
          >
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground shadow-elegant group-hover:scale-110 transition-transform">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
// SERVICES ENDS HERE

// CONTACT STARTS HERE

function Contact() {
  const [loading, setLoading] = useState(false);
  const isSubmitting = useRef(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget;

    if (loading) return;

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || name.length > 100) return toast.error("Please enter a valid name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return toast.error("Please enter a valid email.");
    if (!message || message.length > 1000) return toast.error("Message must be 1–1000 characters.");

    setLoading(true);
    toast.dismiss();

    try {
      const result = await emailjs.sendForm(
        "service_fm6bv5k",
        "template_sg9vijm",
        e.currentTarget,
        "8a_ojzXUOpzfnQsVB"
      );

      console.log(result);


      if (result.status === 200) {
        toast.success("Message sent!");
        formElement.reset();

      } else {
        toast.error("Something went wrong.");
      }

    } catch (error) {
      console.error("REAL ERROR:", error);

    }

    setLoading(false);
  };


  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="h-px w-8 bg-secondary" /> Contact <span className="h-px w-8 bg-secondary" />
          </div>
          <h2 className="mt-5 text-4xl md:text-6xl font-bold tracking-tighter">
            Let's build <span className="text-gradient">something good</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Have a project in mind, or just want to say hi? Drop a line.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <form onSubmit={submit} className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 space-y-5 shadow-soft">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Name</label>
                <Input name="name" required maxLength={100} className="mt-2 h-11" placeholder="Your Name" />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email</label>
                <Input name="email" type="email" required maxLength={255} className="mt-2 h-11" placeholder="abc@company.com" />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Message</label>
              <Textarea name="message" required maxLength={1000} rows={5} className="mt-2 resize-none" placeholder="Tell me about your project…" />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium shadow-elegant"
            >
              {loading ? "Sending…" : "Send message"}
              <ArrowUpRight className="h-4 w-4 ml-1" />
            </Button>
          </form>



          <div className="lg:col-span-2 space-y-3">
            {[
              { icon: Mail, label: "Email", value: "arnavbharadi28@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=arnavbharadi28@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "/in/arnavbharadi", href: "https://www.linkedin.com/in/arnav-bharadi-15232a212?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
              { icon: Github, label: "GitHub", value: "@adbharadi28", href: "https://github.com/adbharadi28" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center justify-between rounded-2xl border border-border bg-card p-5 hover:border-foreground/40 hover:-translate-y-0.5 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="font-medium">{c.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:rotate-12 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// CONTACT ENDS HERE

// FOOTER STARTS HERE

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Arnav Bharadi. Designed &amp; built with care.</div>
        <div className="flex items-center gap-5">
          <a href="https://github.com/adbharadi28" aria-label="GitHub" className="hover:text-foreground transition-colors"><Github className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/in/arnav-bharadi-15232a212/" aria-label="LinkedIn" className="hover:text-foreground transition-colors"><Linkedin className="h-4 w-4" /></a>
          <a href="" aria-label="Email" className="hover:text-foreground transition-colors"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}

// FOOTER ENDS HERE



export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Work />
        <Services />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
