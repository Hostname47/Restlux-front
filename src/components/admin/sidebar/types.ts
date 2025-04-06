export type Clickable = {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtitle?: string;
  to: string;
};

export type Collapsible = {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtitle?: string;
  buttons: Button[];
};

export type Button = Clickable | Collapsible;
