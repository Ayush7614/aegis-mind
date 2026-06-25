export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,255,156,0.10),transparent_60%),radial-gradient(ellipse_60%_50%_at_85%_20%,rgba(45,226,255,0.08),transparent_55%),radial-gradient(ellipse_50%_50%_at_10%_30%,rgba(255,45,85,0.07),transparent_55%)]" />
      {/* grid */}
      <div className="absolute inset-0 bg-grid bg-radial-fade opacity-70" />
      {/* floating orbs */}
      <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-neon/10 blur-3xl animate-float" />
      <div
        className="absolute top-1/3 right-10 h-80 w-80 rounded-full bg-cyber/10 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-violet/10 blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(5,7,13,0.9)_100%)]" />
    </div>
  );
}
