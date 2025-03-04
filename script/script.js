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
    const imagesP = document.getElementById('images-product')
    const colorName = e.target.id
    imagesP.src = "../images/" + colorName + ".png" 
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
const array = []
// add to cart 
document.getElementById('btn-add-to-cart').addEventListener('click', function(){
   const quantityNumber = parseInt( document.getElementById('quantity-number').innerText)
   
   if(quantityNumber > 0){
      document.getElementById('btn-checkout').classList.remove('hidden')
      document.getElementById('checkout-number').innerText = quantityNumber;
      const colorName = document.querySelector('div.border-purple-800').id;
      const size = document.querySelector('button.border-blue-700').id;
      const price = document.querySelector('button.border-blue-700').innerText.split(' ')[1].split('$')[1];
      array.push({
         Image: colorName + ".png",
         size: size, 
         title: "this is title",
         color: colorName,
         quantity: quantityNumber,
         price : quantityNumber * price,
      })

   }
   else{
      alert('godi konta nibi thik kor bolod')
   }
})
document.getElementById('btn-checkout').addEventListener('click', function(){
   document.getElementById('images-section div').classList.add('hidden')
   document.getElementById('text-section-div').classList.add('hidden')
   document.getElementById('main-hrd-section -hidden').classList.remove('hidden')
   for( const items of array){
      const item = items;
      const container = document.getElementById('added-main-text')
      const div = document.createElement('div')
      div.innerHTML=`
      <div class="flex justify-between items-center border-b mb-2">
      <div class="flex items-center gap-2">
       <img class="w-10 h-10 " src="${'../images/'}${item.Image}" alt="">
       <h1>${item.title}</h1>
      </div>
      <div class="flex items-center gap-22 mr-8">
      <p>${item.color}</p>
      <p>${item.size}</p>
      <p>${item.quantity}</p>
      <p>$${item.price}</p>
      </div>
      </div>
      `
      container.appendChild(div)
   }
})