export const tagColorMap: Record<string, { bg: string; color: string }> = {
  Kesehatan: { bg: "bg-clay-orange", color: "text-clay-tertiary" },
  Keterampilan: { bg: "bg-clay-pink", color: "text-clay-error" },
};

export const defaultTagColor = {
  bg: "bg-clay-teal-light",
  color: "text-clay-primary",
};

export function getTagColor(tag: string | null) {
  if (!tag) return defaultTagColor;
  return tagColorMap[tag] ?? defaultTagColor;
}
