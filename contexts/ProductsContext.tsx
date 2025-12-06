import React, { createContext, ReactNode, useContext, useState } from "react";

// definitions
import { IProduct, IProductContext } from "@/definitions/products.definitions";

// context
const ProductsContext = createContext<IProductContext | undefined>(undefined);

// context provider
export function ProductsContextProvider({ children }: { children: ReactNode }) {
  // states
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isFormOn, setIsFormOn] = useState<boolean>(false);
  return (
    <ProductsContext.Provider
      value={{ products, isFormOn, setIsFormOn, setProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

// hooks
export function useProductsContext(): IProductContext {
  const ctx = useContext(ProductsContext);
  if (!ctx)
    throw new Error(
      "useProductsContext must be used inside ProductsContextProvider"
    );
  return ctx;
}
