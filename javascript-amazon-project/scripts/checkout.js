import {renderOrderSummary} from "./checkout/orderSummary.js";
import { renderPaymetSummary } from "./checkout/paymentSummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage(){

  await loadProductsFetch();

  const value= await new Promise((resolve)=>{
    loadCart(()=>{
      resolve('value2');
    });
  })

  renderOrderSummary();
  renderPaymetSummary();
}
loadPage();

//import '../data/cart-class.js';
//import '../data/backend-practice.js';
/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve('value2');
    });
  })

]).then((values)=>{
  console.log(values);
  renderOrderSummary();
  renderPaymetSummary();
});

*/
/*
new Promise((resolve)=> {
  loadProducts(()=>{
    resolve('value1');
  });

}).then((value)=>{
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  });

}).then(()=>{
  renderOrderSummary();
  renderPaymetSummary();
});
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderPaymetSummary();
    renderOrderSummary();
  });
});
*/