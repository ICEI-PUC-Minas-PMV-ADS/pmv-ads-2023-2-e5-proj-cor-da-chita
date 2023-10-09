// EM AJUSTES / TESTES
import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type ProductContextProps = {
  children: ReactNode;
};

type ProductContextType = {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  description: string[];
  setDescription: Dispatch<SetStateAction<any>>;
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
  weightProduct: number;
  setWeight: Dispatch<SetStateAction<number>>;
  lengthProduct: number;
  setLength: Dispatch<SetStateAction<number>>;
  widthProduct: number;
  setWidth: Dispatch<SetStateAction<number>>;
  heightProduct: number;
  setHeight: Dispatch<SetStateAction<number>>;
  imageProduct: string;
  setImage: Dispatch<SetStateAction<string>>;
  slug: string;
  setSlug: Dispatch<SetStateAction<string>>;
};

const initialValue = {
  id: "",
  setId: () => {},
  name: "",
  setName: () => {},
  category: "",
  setCategory: () => {},
  description: [],
  setDescription: () => {},
  price: 0,
  setPrice: () => {},
  weightProduct: 0,
  setWeight: () => {},
  lengthProduct: 0,
  setLength: () => {},
  widthProduct: 0,
  setWidth: () => {},
  heightProduct: 0,
  setHeight: () => {},
  imageProduct: "",
  setImage: () => {},
  slug: "",
  setSlug: () => {},
};

export const ProductContext = createContext<ProductContextType>(initialValue);

export default function ProductContextProvider({
  children,
}: ProductContextProps) {
  const [id, setId] = useState(initialValue.id);
  const [name, setName] = useState(initialValue.name);
  const [category, setCategory] = useState(initialValue.category);
  const [description, setDescription] = useState(initialValue.description);
  const [price, setPrice] = useState(initialValue.price);
  const [weightProduct, setWeight] = useState(initialValue.weightProduct);
  const [lengthProduct, setLength] = useState(initialValue.lengthProduct);
  const [widthProduct, setWidth] = useState(initialValue.widthProduct);
  const [heightProduct, setHeight] = useState(initialValue.heightProduct);
  const [imageProduct, setImage] = useState(initialValue.imageProduct);
  const [slug, setSlug] = useState(initialValue.slug);

  return (
    <ProductContext.Provider
      value={{
        id,
        setId,
        name,
        setName,
        category,
        setCategory,
        description,
        setDescription,
        price,
        setPrice,
        weightProduct,
        setWeight,
        lengthProduct,
        setLength,
        widthProduct,
        setWidth,
        heightProduct,
        setHeight,
        imageProduct,
        setImage,
        slug,
        setSlug,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
