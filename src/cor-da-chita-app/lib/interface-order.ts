export interface Order {
  id: string;
  items: {
    productId: string;
    productName: string;
    productPrice: number;
    productQuantity: number;
  }[];
  userName: string;
  userEmail: string;
  street: string;
  neighborhood: string;
  num: string;
  city: string;
  uf: string;
  cep: string;
  complement: string;
  freight: {
    totalWidthFreight: number;
    totalHeightFreight: number;
    totalLengthFreight: number;
    totalWeightFreight: number;
    freightValue: number;
    freightMethod: string;
  };
  orderPixId: number;
  orderDate: string;
  phoneNumber: string;
  totalPriceProducts: number;
}
