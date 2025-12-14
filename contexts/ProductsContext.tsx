import { createContext, ReactNode, useContext, useState } from "react";

// definitions
// products
import { IProduct, IProductsContext } from "@/definitions/products.definitions";

// create context
export const ProductsContext = createContext<IProductsContext | undefined>(
  undefined
);

// context provider
export function ProductsContextProvider({ children }: { children: ReactNode }) {
  // states
  const [products, setProducts] = useState<IProduct[]>([]);
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

// hooks
export function useProductsContext(): IProductsContext {
  const cnx = useContext(ProductsContext);
  if (!cnx) {
    throw new Error("the hook must be used inside the provider");
  }
  return cnx;
}
