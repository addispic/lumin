import React from "react";
export interface IProduct {
  id: string;
  category: "Phone" | "Computer";
  name: string;
  brand: string;
  price: number;
  isAvailable: boolean;
}

export interface IProductsContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
