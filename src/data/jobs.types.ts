import type { StaticImageData } from "next/image";

export const ROLES = ["Frontend", "Backend", "Fullstack"] as const;
export const LEVELS = ["Junior", "Midweight", "Senior"] as const;
export const LANGUAGES = [
  "Python",
  "Ruby",
  "JavaScript",
  "HTML",
  "CSS",
] as const;
export const TOOLS = ["React", "Sass", "Vue", "Django", "RoR"] as const;

export type Role = (typeof ROLES)[number];
export type Level = (typeof LEVELS)[number];
export type Language = (typeof LANGUAGES)[number];
export type Tool = (typeof TOOLS)[number];

export type Tag = Role | Level | Language | Tool;

export type Job = {
  id: number;
  company: string;
  logo: StaticImageData;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  isNew: boolean;
  isFeatured: boolean;
  tags: Tag[];
};
