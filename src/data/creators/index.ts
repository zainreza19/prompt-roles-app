import type { Creator } from "@/data/creators";
import { techSaasCreators } from "./tech-saas";
import { aiCreators } from "./ai";
import { marketingGrowthCreators } from "./marketing-growth";
import { businessEntrepreneurshipCreators } from "./business-entrepreneurship";
import { personalFinanceCreators } from "./personal-finance";
import { productivityCreators } from "./productivity";
import { designUxCreators } from "./design-ux";
import { ecommerceDtcCreators } from "./ecommerce-dtc";
import { healthFitnessCreators } from "./health-fitness";
import { personalDevelopmentCreators } from "./personal-development";
import { macIndieSoftwareCreators } from "./mac-indie-software";

// Populated as each industry's creator list is researched and verified.
// Add an entry here + flip the matching `status` to "live" in
// `src/data/creators.ts` to bring an industry online.
export const creatorsByIndustry: Record<string, Creator[]> = {
  "tech-saas": techSaasCreators,
  ai: aiCreators,
  "marketing-growth": marketingGrowthCreators,
  "business-entrepreneurship": businessEntrepreneurshipCreators,
  "personal-finance": personalFinanceCreators,
  productivity: productivityCreators,
  "design-ux": designUxCreators,
  "ecommerce-dtc": ecommerceDtcCreators,
  "health-fitness": healthFitnessCreators,
  "personal-development": personalDevelopmentCreators,
  "mac-indie-software": macIndieSoftwareCreators,
};
