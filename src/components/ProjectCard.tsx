import type { Lang, Project } from "../content";
import { ArrowUpRightIcon } from "./icons";

export default function ProjectCard({
  project,
  lang,
  index,
}: {
  project: Project;
  lang: Lang;
  index: number;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-stone-200/80 bg-white/85 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-700/35 hover:shadow-[0_18px_50px_-25px_rgba(13,148,136,0.16)] sm:p-7 dark:border-stone-800/90 dark:bg-[#12110f]/90 dark:hover:border-stone-700">
      <div className="mb-7 flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] tracking-[0.12em] text-stone-400 dark:text-stone-500">
          PROJECT / {String(index + 1).padStart(2, "0")}
        </span>
        <span className="max-w-[55%] truncate rounded-full border border-teal-700/20 bg-teal-700/[0.06] px-3 py-1 font-mono text-[10px] tracking-wide text-teal-800 dark:border-stone-700 dark:bg-stone-800/40 dark:text-teal-500">
          {project.badge[lang]}
        </span>
      </div>

      <div>
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-400 dark:text-stone-500">
          {project.kind[lang]}
        </p>
        <h3 className="text-[23px] font-bold leading-tight tracking-[-0.045em] text-stone-900 transition-colors group-hover:text-teal-800 dark:text-stone-100 dark:group-hover:text-stone-200">
          {project.name}
        </h3>
      </div>

      <p className="mt-4 text-[14px] leading-[1.8] text-stone-600 dark:text-stone-400">
        {project.description[lang]}
      </p>

      <div className="mt-6">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-stone-400 dark:text-stone-500">
          Highlights
        </p>
        <ul className="space-y-2.5">
          {project.highlights[lang].map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 text-[13px] leading-[1.7] text-stone-600 dark:text-stone-300"
            >
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600 dark:bg-stone-600" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((technology) => (
          <span
            key={technology}
            className="rounded-lg border border-stone-200/80 bg-stone-50/90 px-2.5 py-1 font-mono text-[10px] text-stone-600 dark:border-stone-800 dark:bg-stone-900/80 dark:text-stone-300"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3 border-t border-stone-100 pt-5 dark:border-stone-800">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-stone-700 transition-colors hover:text-teal-700 dark:text-stone-300 dark:hover:text-stone-100"
          >
            {link.label[lang]}
            <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
    </article>
  );
}