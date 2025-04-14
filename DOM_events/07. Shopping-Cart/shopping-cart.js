document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let uniqueProducts = {};

   let totalMoney = 0;
   
   let textarea = document.querySelector('textarea');
   let checkoutBtn = document.querySelector('.checkout');
   let products = Array.from(document.getElementsByClassName('product'));

   products.forEach(product => {
      let name = product.querySelector('.product-title').textContent;
      let price = Number(product.querySelector('.product-line-price').textContent).toFixed(2);
      let addBtn = product.querySelector('.add-product');

      addBtn.addEventListener('click', () => {
         if (!uniqueProducts[name]) {
            uniqueProducts[name] = 0;
         }
         totalMoney += Number(price);
         textarea.value += `Added ${name} for ${Number(price).toFixed(2)} to the cart.\n`;
      });
   });

   checkoutBtn.addEventListener('click', () => {
      textarea.value += `You bought ${Object.keys(uniqueProducts).join(', ')} for ${totalMoney.toFixed(2)}.`;
      checkoutBtn.disabled = true;
      
      products.forEach(product => {
         let addBtn = product.querySelector('.add-product'); 
         addBtn.disabled = true;  
      });

   });
}

