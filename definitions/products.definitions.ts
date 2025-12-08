import React from "react";

export interface IProduct {
  id: number;
  user: number;
  uri: string;
  name: string;
  quantity: number;
  sku: string;
  price: number;
  description: string;
  createdAt?: Date;
}

export interface IProductContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
