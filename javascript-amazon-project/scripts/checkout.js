import {renderOrderSummary} from "./checkout/orderSummary.js";
import { renderPaymetSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

loadProducts(() => {
  renderPaymetSummary();
  renderOrderSummary();
});
