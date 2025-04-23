import { mount as productsMount } from "productsApp/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

productsMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#cart-dev"));