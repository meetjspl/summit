import type { ProgramCompactLayoutProps } from "./types";

export const ProgramCompactLayout = ({
  title,
  description,
  sinceTime,
  tillTime,
  isMinWidth,
}: ProgramCompactLayoutProps) => {
  return (
    <div className="flex flex-col gap-2 h-full min-w-0 justify-center">
      <h3 className="mb-0 text-white/96 font-extrabold tracking-[-0.01em] text-base leading-[1.15] whitespace-normal wrap-break-word">
        {title}
      </h3>
      {description && (
        <p className={`m-0 text-white/72 leading-[1.45] whitespace-normal wrap-break-word flex-1 overflow-y-auto pr-1.5 ${isMinWidth ? "text-[15px]" : "text-sm"}`}>
          {description}
        </p>
      )}
      <p className="mt-auto text-meetjs-green/95 font-bold text-[13px] tracking-[0.02em] font-mono">
        {sinceTime} - {tillTime}
      </p>
    </div>
  );
};
