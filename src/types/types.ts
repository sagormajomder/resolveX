export type PlanCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
};

export type PricingFeature = {
  name: string;
  included: boolean;
};

export type PricingCardProps = {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
  badge?: string;
};
