import type { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  note?: string;
  children: ReactNode;
}

export default function Section({ id, title, note, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-20">
      <div className="mb-9 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-teal-700 dark:bg-stone-700" />
          <h2 className="font-mono text-[15px] font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-500">
            {title}
          </h2>
        </div>

        {note && (
          <p className="max-w-2xl text-[14px] leading-relaxed text-stone-500 dark:text-stone-400">
            {note}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}