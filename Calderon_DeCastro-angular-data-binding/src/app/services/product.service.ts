import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.models';

@Injectable({
providedIn: 'root'
})
export class ProductService {
private products: Product[] = [
{
id: 1,
name: 'Vans',
description: 'Latest shoes with amazing design',
price: 1300.99,
imageUrl: 'https://25.media.tumblr.com/e6af5a834f365867ac8d5edf8c2a4099/tumblr_mjvn3e2Brw1rt0ityo1_500.gif',
isAvailable: true,
category: 'Shoes',
rating: 4.8,
quantity: 10
},
{
id: 2,
name: 'Fiery Nike',
description: 'Powerful shoes for professionals',
price: 1299.99,
imageUrl: 'https://www.thedailybeast.com/resizer/v2/TGHCNC6NIFMTBMEYE7MP57H5AU.gif?smart=true&auth=07f520a0cfd79c39e1267871987055827c9097e918820402632a23cdb1502938&width=1600&height=900',
isAvailable: true,
category: 'Shoes',
rating: 4.5,
quantity: 5
},
{
id: 3,
name: 'Glowy Fairy',
description: 'Premium lights quality with white design',
price: 899.99,
imageUrl: 'https://i.gifer.com/2cCD.gif',
isAvailable: false,
category: 'Shoes',
rating: 4.2,
quantity: 0
},
{
id: 4,
name: 'Blazer High',
description: 'Track your fit and stay confident',
price: 1205.99,
imageUrl: 'https://public-files.gumroad.com/qvlt0ud4kqj0q3jwmnq3o1c36f2u',
isAvailable: true,
category: 'Wearables',
rating: 4.0,
quantity: 15
}
];
constructor() { }

getProducts(): Observable<Product[]> {
return of(this.products);
}
getProduct(id: number): Observable<Product | undefined> {
const product = this.products.find(p => p.id === id);
return of(product);
}
addProduct(product: Product): Observable<Product> {
// Generate a new ID (in a real app, the backend would do this)
const newId = Math.max(...this.products.map(p => p.id)) + 1;
const newProduct = { ...product, id: newId };
this.products.push(newProduct);
return of(newProduct);
}
updateProduct(product: Product): Observable<Product> {
const index = this.products.findIndex(p => p.id === product.id);
if (index !== -1) {
this.products[index] = { ...product };
return of(this.products[index]);
}
return of(product); // In a real app, you might want to handle this
}
deleteProduct(id: number): Observable<boolean> {
const index = this.products.findIndex(p => p.id === id);
if (index !== -1) {
this.products.splice(index, 1);
return of(true);
}
return of(false);
}
}