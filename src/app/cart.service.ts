import {Injectable} from '@angular/core';
import {Product} from "./products";
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    items: Product[] = [];

    constructor(private http: HttpClient) {
    }

    addToCart(product: Product): void {
        this.items.push(product);
    }

    getItems(): Product[] {
        return this.items;
    }

    clearCart(): Product[] {
        this.items = [];
        return this.items;
    }

    getShippingPrices(): Observable<{ type: string, price: number }[]> {
        return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
    }
}
