export default function AboutPhoto({
  src,
  alt = "Photo",
  variant = "gradient-ring", // "gradient-ring" | "l-accent" | "tilt-glass"
  className = "",
}) {
  if (variant === "gradient-ring") {
    // 1) Cincin gradasi (conic) + card rounded
    return (
      <div
        className={[
          "relative p-1 rounded-3xl",
          // cincin gradasi di luar foto
          "bg-[conic-gradient(from_220deg,theme(colors.cyan.400),theme(colors.teal.500),theme(colors.sky.400),theme(colors.cyan.400))]",
          "shadow-[0_12px_40px_rgba(14,116,144,0.18)]",
          className,
        ].join(" ")}
      >
        <div className="rounded-2xl bg-white shadow-xl">
          <img
            src={src}
            alt={alt}
            className="block w-[520px] max-w-full aspect-[4/5] object-cover rounded-2xl"
          />
        </div>
      </div>
    );
  }

  if (variant === "l-accent") {
    // 2) Aksen “L” menggunakan bar tipis (bukan balok)
    return (
      <div className={["relative w-[520px] max-w-full", className].join(" ")}>
        {/* batang kiri */}
        <div className="absolute -left-5 top-6 h-[86%] w-2 bg-cyan-300 rounded-full" />
        {/* batang bawah */}
        <div className="absolute left-0 bottom-4 h-2 w-[86%] bg-cyan-300 rounded-bl-[140px]" />

        <img
          src={src}
          alt={alt}
          className="relative z-[1] w-full aspect-[4/5] object-cover rounded-[22px] rounded-tr-[36px] shadow-[0_12px_36px_rgba(0,0,0,0.18)]"
        />
      </div>
    );
  }

  // 3) Kartu “glass” sedikit miring + glow cyan lembut
  return (
    <div className={["relative w-[520px] max-w-full", className].join(" ")}>
      {/* glow */}
      <div className="absolute -inset-6 bg-[radial-gradient(50%_50%_at_10%_10%,theme(colors.cyan.300/.35),transparent_60%)] blur-2xl" />
      <div className="relative rotate-[-1.5deg]">
        <div className="rounded-3xl bg-white/70 backdrop-blur shadow-2xl ring-1 ring-white/40">
          <img
            src={src}
            alt={alt}
            className="block w-full aspect-[4/5] object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
