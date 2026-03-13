export interface SubMenuItem {
  label: string;
  to: string;
}

export interface MenuItem {
  label: string;
  to?: string; // parent without link
  children?: SubMenuItem[];
}
