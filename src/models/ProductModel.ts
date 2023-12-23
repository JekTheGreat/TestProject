export interface ProductModel {
  id: string;
  productName: string;
  description: string;
  unitPrice: number;
  category: string;
  imageUrl: string;
}

export interface CartListModel extends ProductModel {
  quantity: number;
}

export interface CartStateModel {
  cartList: CartListModel[];
}
