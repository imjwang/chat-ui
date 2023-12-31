import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDate = (date: Date | undefined) => {
  if (!date) return "";

  const locale = navigator.language;
  const dateString = date.toLocaleDateString(locale, {
    hour: "2-digit",
    minute: "2-digit",
  });
  return dateString;
};
