import { CartItem } from "./cart-item";


export interface Reservation{
  hotel: CartItem[],
  user: string | undefined
}
