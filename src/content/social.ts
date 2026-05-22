export const social = [
  { url: "mailto:santycf2202@gmail.com", name: "mail" },
  { url: "https://github.com/SantyCano2022", name: "github" },
  { url: "https://www.linkedin.com/in/santiago-cano-florez/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
