import { create } from 'zustand';
import { addCart } from '@/app/actions/addCart';
import { getCart } from '@/app/actions/getCart';

interface ProductProps {
  id: string;
  title: string;
  price: number;
  discount: number;
  image: any;
}

interface CartState {
  products: ProductProps[];
  fetchCart: () => Promise<void>;
  addToCart: (id: string) => Promise<void>;
}

export const useCartStore = create<CartState>((set) => ({
  products: [],

  addToCart: async (id: string) => {
    try {
      const updatedCart = await addCart(id);
      set((state) => ({ products: [...state.products, updatedCart] }));
    } catch (error) {
      console.error("Failed to add product to cart:", error);
    }
  },

  fetchCart: async () => {
    try {
      const cartProducts = await getCart();
      set({ products: cartProducts });
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    }
  },

}));
