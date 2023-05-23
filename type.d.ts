export interface Product {
  map(arg0: (item: Item) => import("react").JSX.Element): import("react").ReactNode;
  _id: number;
  title: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  description: string;
  brand: string;
  category: string;
  image: string;
}
[];
export interface Item {
  _id: number;
  title: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  description: string;
  brand: string;
  category: string;
  image: string;
}