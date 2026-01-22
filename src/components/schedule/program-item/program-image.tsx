interface ProgramImageProps {
  image?: string;
  title: string;
  isVertical: boolean;
}

export const ProgramImage = ({ image, title, isVertical }: ProgramImageProps) => {
  const imageClasses = isVertical
    ? "w-24 h-24 max-h-24 object-cover rounded-[14px] border border-white/[0.12] shadow-[0_10px_24px_rgba(0,0,0,0.35)] flex-shrink-0"
    : "w-[120px] h-[120px] max-h-[120px] object-cover rounded-[14px] border border-white/[0.12] shadow-[0_10px_24px_rgba(0,0,0,0.35)] flex-shrink-0";

  const imagePlaceholderClasses = `${imageClasses} flex items-center justify-center bg-gradient-to-br from-meetjs-green/35 to-[rgba(168,195,74,0.2)] text-white/80 font-extrabold text-[28px]`;

  if (image) {
    return (
      <img
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
        className={imageClasses}
      />
    );
  }

  return (
    <div aria-hidden className={imagePlaceholderClasses}>
      {title?.slice?.(0, 1)?.toUpperCase?.() ?? "•"}
    </div>
  );
};
