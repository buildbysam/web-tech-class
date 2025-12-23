export const cx = (...classNames: string[]): string => classNames.filter(Boolean).join(" ");

export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-");
};

export const formatDate = (dateInput: string | Date): string => {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const capitalize = (str: string): string => str.slice(0, 1).toUpperCase() + str.slice(1);
