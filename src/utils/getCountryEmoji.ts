import { Country } from "@/family";

export function getCountryEmoji(country: Country) {
  switch (country) {
    case "US":
      return "🇺🇸";
    case "NO":
      return "🇳🇴";
  }
}
