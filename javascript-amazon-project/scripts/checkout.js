import {renderOrderSummary} from "./checkout/orderSummary.js";
import { renderPaymetSummary } from "./checkout/paymentSummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage(){
  try{
    //throw 'error10';

    await loadProductsFetch();

    const value= await new Promise((resolve,reject)=>{
      //throw 'error2';
      loadCart(()=>{
        //reject('error3');
        resolve('value2');
      });
    });

  } catch(error){
    console.log("Unexpected error. Please try again later.");
  }
  
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