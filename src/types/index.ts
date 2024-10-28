export type TGuitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

export type TCartItem = TGuitar & {
  quantity: number;
};

