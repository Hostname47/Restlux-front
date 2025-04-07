export type Clickable = {
  to: string;
  target?: string;
};

export type Collapsible = {
  subtitle?: string;
  buttons: Button[];
};

export type Button = {
  title: string;
  subtitle?: string;
  keywords: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} & (Collapsible | Clickable);
