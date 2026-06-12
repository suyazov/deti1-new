interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ label, title, subtitle, light = false, centered = false, className = '' }: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center mx-auto' : ''} ${className}`}>
      <span className={`inline-block text-xs font-semibold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-4 ${
        light 
          ? 'bg-white/10 text-[#00c9a7] border border-white/10' 
          : 'bg-[rgba(0,201,167,0.1)] text-[#00c9a7] border border-[rgba(0,201,167,0.15)]'
      }`}>
        {label}
      </span>
      <h2 className={`text-[clamp(28px,3.8vw,52px)] font-bold leading-[1.1] tracking-tight ${light ? 'text-white' : 'text-[#1a1a1a]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-[#666]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
