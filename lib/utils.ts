export const cx = (...classNames: string[]): string => classNames.filter(Boolean).join(" ");

export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-");
};
