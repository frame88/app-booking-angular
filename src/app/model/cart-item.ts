import { Hotel, Room } from "./hotel";


export class CartItem {
    hotel: Hotel | undefined;
    room: Room | undefined;
    creationDate: number | undefined
}
