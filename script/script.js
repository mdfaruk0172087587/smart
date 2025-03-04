const colorDiv = document.querySelectorAll('.color-box')
for(const colors of colorDiv){
const color = colors;
color.addEventListener('click', function(e){
    for(const colors of colorDiv){
       colors.classList.remove('border-purple-800')
       colors.classList.add('border-gray-300')
    }
    e.target.classList.add('border-purple-800')
    e.target.classList.remove('border-gray-300')
})
}
// size
const btnSize = document.querySelectorAll('.btn-size')
for(const btn of btnSize){
    const button = btn;
   button.addEventListener('click', function(e){
      for(const btn of btnSize){
         btn.classList.remove('border-blue-700')
      }
    e.target.classList.add('border-blue-700')
   })
}
// - and + div
const btnQuantity = document.querySelectorAll('.btn-quantity')
for(const btn of btnQuantity){
   const button = btn;
   button.addEventListener('click', function(e){
    
    const quantityNumber = parseInt( document.getElementById('quantity-number').innerText)
   const amount=  e.target.innerText === "+"? 1: -1;
   document.getElementById('quantity-number').innerText = Math.max(0, quantityNumber + amount);
   
   })
}
// add to cart 
document.getElementById('btn-add-to-cart').addEventListener('click', function(){
   const quantityNumber = parseInt( document.getElementById('quantity-number').innerText)
   
   if(quantityNumber > 0){
      document.getElementById('btn-checkout').classList.remove('hidden')
      document.getElementById('checkout-number').innerText = quantityNumber;
   }
   else{
      alert('godi konta nibi thik kor bolod')
   }
})
document.getElementById('btn-checkout').addEventListener('click', function(){
   document.getElementById('images-section div').classList.add('hidden')
   document.getElementById('text-section-div').classList.add('hidden')
   document.getElementById('main-hrd-section -hidden').classList.remove('hidden')
})