export function MapitalBadge({ light = false }: { light?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 text-xs ${light ? "text-background/80" : "text-muted-foreground"}`}>
      <span className="grid h-6 w-6 place-items-center rounded bg-navy text-[10px] font-extrabold text-background">M</span>
      Powered by <span className={`font-bold ${light ? "text-background" : "text-navy"}`}>Mapital</span>
    </div>
  );
}
