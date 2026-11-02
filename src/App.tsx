import { useEffect, useState } from "react";

import {
  config,
  experience,
  projects,
  services,
  stack,
  t,
  type Lang,
} from "./content";

import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";

import {
  ArrowUpRightIcon,
  CodeIcon,
  GithubIcon,
  MailIcon,
  MoonIcon,
  SendIcon,
  SunIcon,
} from "./components/icons";

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "ru" || saved === "en") return saved;
  } catch {}

  if (typeof navigator !== "undefined" && navigator.language) {
    return navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
  }

  return "en";
}

function initialDark(): boolean {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";

    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  } catch {}

  return false;
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [dark, setDark] = useState<boolean>(initialDark);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);

  const nav = [
    { id: "services", label: t.nav.services[lang] },
    { id: "projects", label: t.nav.projects[lang] },
    { id: "experience", label: t.nav.experience[lang] },
    { id: "contact", label: t.nav.contact[lang] },
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-7 lg:px-10">
      <header className="sticky top-0 z-30 -mx-5 flex items-center justify-between gap-4 border-b border-stone-200/70 bg-[#f8f7f3]/85 px-5 py-4 backdrop-blur-xl sm:-mx-7 sm:px-7 lg:-mx-10 lg:px-10 dark:border-stone-800/80 dark:bg-[#0b0a08]/85">
        <a
          href="#top"
          className="inline-flex items-center gap-2 font-display text-[15px] font-extrabold tracking-[-0.045em] text-stone-900 dark:text-stone-100"
        >
          {config.name}
        </a>

        <nav className="hidden items-center gap-7 text-[13px] font-medium text-stone-500 md:flex dark:text-stone-400">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="transition-colors hover:text-teal-800 dark:hover:text-stone-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="relative flex rounded-full bg-stone-200/70 p-0.5 text-[10px] font-semibold dark:bg-stone-800/80"
            role="group"
            aria-label="Language"
          >
            <span
              aria-hidden="true"
              className={`absolute bottom-0.5 left-0.5 top-0.5 w-9 rounded-full bg-white shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] dark:bg-stone-600 ${
                lang === "en" ? "translate-x-9" : "translate-x-0"
              }`}
            />

            {(["ru", "en"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setLang(value)}
                aria-pressed={lang === value}
                className={`relative z-10 w-9 rounded-full px-2 py-1.5 uppercase transition-colors duration-200 ${
                  lang === value
                    ? "text-stone-900 dark:text-stone-50"
                    : "text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200"
                }`}
              >
                {value}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={t.ui.theme[lang]}
            title={t.ui.theme[lang]}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 bg-white/70 text-stone-600 transition-colors hover:border-teal-700/40 hover:text-teal-800 dark:border-stone-800 dark:bg-stone-900/70 dark:text-stone-300 dark:hover:border-stone-700 dark:hover:text-stone-100"
          >
            {dark ? (
              <SunIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden pb-12 pt-20 sm:pb-20 sm:pt-28">
          <div className="pointer-events-none absolute -right-20 top-16 hidden h-72 w-72 rounded-full border border-teal-700/10 sm:block dark:border-stone-800" />
          <div className="pointer-events-none absolute -right-8 top-28 hidden h-52 w-52 rounded-full border border-teal-700/10 sm:block dark:border-stone-800" />

          <div className="animate-fade-up">
            <p className="mb-7 inline-flex items-center font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-500">
              {t.hero.eyebrow[lang]}
            </p>

            <h1 className="max-w-4xl font-display text-[clamp(2.8rem,7vw,5.8rem)] font-extrabold leading-[0.99] tracking-[-0.065em] text-stone-950 dark:text-stone-50">
              {t.hero.title[lang]}
            </h1>

            <p className="mt-8 max-w-2xl text-[16px] leading-[1.9] text-stone-600 sm:text-[18px] dark:text-stone-400">
              {t.hero.text[lang]}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-stone-900 px-6 py-3.5 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-sm dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-300"
              >
                {t.hero.primary[lang]}
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 px-6 py-3.5 text-[13px] font-semibold text-stone-700 transition-all hover:border-teal-700/40 hover:text-teal-800 dark:border-stone-700 dark:text-stone-300 dark:hover:border-stone-600 dark:hover:text-stone-100"
              >
                {t.hero.secondary[lang]}
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-3 border-t border-stone-200/80 pt-6 sm:mt-20 sm:grid-cols-4 dark:border-stone-800">
            {[
              {
                value: String(projects.length).padStart(2, "0"),
                label: lang === "ru" ? "Проектов" : "Projects",
              },
              {
                value: String(services.length).padStart(2, "0"),
                label: lang === "ru" ? "Направления" : "Services",
              },
              {
                value: String(
                  stack.reduce((total, group) => total + group.items.length, 0),
                ).padStart(2, "0"),
                label: lang === "ru" ? "Технологий" : "Technologies",
              },
              {
                value: String(experience.length).padStart(2, "0"),
                label: lang === "ru" ? "Места работы" : "Experiences",
              },
            ].map((item) => (
              <div key={item.label} className="py-2">
                <p className="font-display text-3xl font-bold tracking-[-0.06em] text-stone-900 dark:text-stone-100">
                  {item.value}
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.13em] text-stone-400 dark:text-stone-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Section
          id="services"
          title={t.sections.services[lang]}
          note={t.sections.servicesNote[lang]}
        >
          <div className="grid gap-3 sm:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title.en}
                className="group rounded-[20px] border border-stone-200/80 bg-white/75 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-700/30 hover:shadow-[0_8px_24px_-20px_rgba(28,25,23,0.18)] dark:border-stone-800 dark:bg-[#12110f]/80"
              >
                <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl border border-teal-700/15 bg-teal-700/[0.06] text-teal-800 dark:border-stone-700 dark:bg-stone-800/50 dark:text-teal-500">
                  {index === 0 ? (
                    <CodeIcon className="h-[18px] w-[18px]" />
                  ) : index === 1 ? (
                    <ArrowUpRightIcon className="h-[18px] w-[18px]" />
                  ) : (
                    <SunIcon className="h-[18px] w-[18px]" />
                  )}
                </div>

                <h3 className="text-[17px] font-bold tracking-[-0.035em] text-stone-900 dark:text-stone-100">
                  {service.title[lang]}
                </h3>

                <p className="mt-3 text-[13px] leading-[1.8] text-stone-600 dark:text-stone-400">
                  {service.text[lang]}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title={t.sections.projects[lang]}>
          <div className="grid items-stretch gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                lang={lang}
                index={index}
              />
            ))}
          </div>
        </Section>

        <Section id="experience" title={t.sections.experience[lang]}>
          <div className="relative space-y-0">
            {experience.map((item) => (
              <article
                key={item.company}
                className="relative grid gap-4 border-l border-stone-200 py-6 pl-7 first:pt-2 last:pb-2 sm:grid-cols-[11rem_1fr] sm:gap-8 dark:border-stone-800"
              >
                <span className="absolute -left-[5px] top-8 h-2.5 w-2.5 rounded-full border-2 border-teal-700 bg-[#f8f7f3] dark:border-stone-600 dark:bg-[#0b0a08]" />

                <div>
                  <p className="text-[15px] font-bold tracking-tight text-stone-900 dark:text-stone-100">
                    {item.company}
                  </p>

                  <p className="mt-1 text-[12px] leading-relaxed text-stone-500 dark:text-stone-400">
                    {item.role[lang]}
                  </p>
                </div>

                <ul className="space-y-2.5 text-[13px] leading-[1.8] text-stone-600 dark:text-stone-300">
                  {item.points[lang].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-teal-700 dark:bg-stone-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-8 border-t border-stone-200/80 pt-5 text-[13px] text-stone-500 dark:border-stone-800 dark:text-stone-400">
            {t.ui.education[lang]}
          </p>

          <div className="mt-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-teal-700 dark:bg-stone-700" />
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-teal-800 dark:text-teal-500">
                {t.sections.stack[lang]}
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {stack.map((group) => (
                <div
                  key={group.group.en}
                  className="rounded-[18px] border border-stone-200/80 bg-white/55 p-5 dark:border-stone-800 dark:bg-[#12110f]/55"
                >
                  <p className="mb-4 text-[13px] font-semibold text-stone-800 dark:text-stone-200">
                    {group.group[lang]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-stone-200/80 bg-stone-50 px-2.5 py-1.5 font-mono text-[10px] text-stone-600 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" title={t.sections.contact[lang]}>
          <div className="relative overflow-hidden rounded-[26px] border border-stone-200/80 bg-white/80 p-7 sm:p-10 dark:border-stone-800 dark:bg-[#12110f]/90">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-teal-700/10 dark:border-stone-800" />
            <div className="pointer-events-none absolute -right-5 -top-9 h-40 w-40 rounded-full border border-teal-700/10 dark:border-stone-800" />

            <p className="relative max-w-2xl font-display text-3xl font-bold leading-tight tracking-[-0.055em] text-stone-900 sm:text-4xl dark:text-stone-100">
              {t.sections.contactText[lang]}
            </p>

            <div className="relative mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${config.email}`}
                className="inline-flex items-center gap-2.5 rounded-full bg-stone-900 px-5 py-3 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-teal-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-300"
              >
                <MailIcon className="h-4 w-4" />
                {config.email}
              </a>

              <a
                href={config.telegram}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-3 text-[13px] font-semibold text-stone-700 transition-colors hover:border-teal-700/40 hover:text-teal-800 dark:border-stone-700 dark:text-stone-300 dark:hover:border-stone-600 dark:hover:text-stone-100"
              >
                <SendIcon className="h-4 w-4" />
                Telegram
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>

              <a
                href={config.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-3 text-[13px] font-semibold text-stone-700 transition-colors hover:border-teal-700/40 hover:text-teal-800 dark:border-stone-700 dark:text-stone-300 dark:hover:border-stone-600 dark:hover:text-stone-100"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="flex flex-col gap-3 border-t border-stone-200/80 py-7 text-[11px] text-stone-400 sm:flex-row sm:items-center sm:justify-between dark:border-stone-800">
        <span>
          © {new Date().getFullYear()} {config.name}
        </span>
      </footer>
    </div>
  );
}