/* <div class="col-3">
    <div class="product-box">
      <div class="product-img">
          <img src="./img/galaxy_a735G_gray.jpg" alt="Samsung Galaxy A73 5G">
      </div>
      <div class="product-info">
          <p>Samsung Galaxy A73 5G</p>
          <p>41999</p>
      </div>
    </div>
</div> */

let arrMobiles = [
  {
    prodID:101,
    prodName: "Samsung Galaxy A73 5G",
    prodPrice: 41999,
    prodImg: "./img/galaxy_a735G_gray.jpg"
  },
  {
    prodID:102,
    prodName: "Samsung Galaxy S21 FE 5G",
    prodPrice: 52199,
    prodImg: "./img/galaxy_s21fe5G_pink.jpg"
  },
  {
    prodID:103,
    prodName: "Redmi_Note 11",
    prodPrice: 14999,
    prodImg: "./img/redmi_note11_blue.webp"
  },
  {
    prodID:104,
    prodName: "Redmi Note 12 5G",
    prodPrice: 19999,
    prodImg: "./img/redmi_note125G_black.webp"
  },
  {
    prodID:105,
    prodName: "IQOO Neo6 5G",
    prodPrice: 29999,
    prodImg: "./img/iqoo_neo65G_blue.jpg"
  },
  {
    prodID:106,
    prodName: "IQOO Z6 5G",
    prodPrice: 16999,
    prodImg: "./img/iqoo_z65G_blue.jpg"
  },
  {
    prodID:107,
    prodName: "OnePlus 10 Pro 5G",
    prodPrice: 69999,
    prodImg: "./img/oneplus_10pro5G_black.webp"
  },
  {
    prodID:108,
    prodName: "OnePlus Nord 2T 5G",
    prodPrice: 28999,
    prodImg: "./img/oneplus_nord2t5G_aqua.webp"
  },
  {
    prodID:109,
    prodName: "Poco M4 5G",
    prodPrice: 15999,
    prodImg: "./img/poco_m45G_yellow.webp"
  },
  {
    prodID:110,
    prodName: "Poco X4 Pro 5G",
    prodPrice: 18499,
    prodImg: "./img/poco_x4pro5G_blue.webp"
  },
  {
    prodID:111,
    prodName: "Realme Narzo 50 5G",
    prodPrice: 17999,
    prodImg: "./img/realme_narzo505G_blue.webp"
  },
  {
    prodID:112,
    prodName: "Realme Narzo 50 Pro 5G",
    prodPrice: 21999,
    prodImg: "./img/realme_narzo50pro5G_black.webp"
  }
];

document.addEventListener('DOMContentLoaded',loadProducts);


arrMobiles.forEach(function(elem,i){
// # To create element
let div_col = document.createElement("div"),
    div_prodBox = document.createElement("div"),
    div_prodImg = document.createElement("div"),
    imgElement = document.createElement("img"),
    div_prodInfo = document.createElement("div"),
    p_prodName = document.createElement("p"),
    p_prodPrice = document.createElement("p"),
    btn_cart = document.createElement("button");

// # To add attributes
  div_col.setAttribute("class","col-3 d-flex justify-content-center mb-3");
  div_prodBox.setAttribute("class","product-box");
  div_prodBox.setAttribute("id","product-"+elem.prodID);
  div_prodImg.setAttribute("class","product-img");
  imgElement.setAttribute("class","prod-img");
  div_prodInfo.setAttribute("class","product-info");
  p_prodName.setAttribute("class","prod-name");
  p_prodPrice.setAttribute("class","prod-price");
  btn_cart.setAttribute("class","cart-btn");

// # To add text
  p_prodName.innerText = elem.prodName;
  p_prodPrice.innerText = elem.prodPrice;
  btn_cart.innerText = "Add to cart";

// # To add image
  imgElement.src = elem.prodImg;
  imgElement.alt = elem.prodName;

// # To append one html element to another element
  div_prodImg.appendChild(imgElement);
  div_prodInfo.append(p_prodName,p_prodPrice);
  div_prodBox.append(div_prodImg,div_prodInfo,btn_cart);
  div_col.appendChild(div_prodBox);

// # To add html element into html document
  let sec1Row = document.getElementById("sec1-row");
  sec1Row.appendChild(div_col);

  // console.log(sec1Row);

}); 

let addCartBtn = document.querySelectorAll(".cart-btn");

addCartBtn.forEach((btn)=>{
  btn.addEventListener('click',addCart) ;
});

function addCart(){
  let prodMob = this.parentElement;
  console.log(prodMob);
  let prod_Name = prodMob.querySelector('.prod-name').innerHTML;
  let prod_Price = prodMob.querySelector('.prod-price').innerHTML;
  let prod_Img = prodMob.querySelector('.prod-img').src;

  // console.log(prod_Name,prod_Price,prod_Img);

  let addNewProduct = createCart(prod_Name,prod_Price,prod_Img);

  let cartContainer = document.createElement('div');
  cartContainer.innerHTML = addNewProduct;

  let cartBox = document.querySelector('.cart-container');

  cartBox.append(cartContainer);
}


function createCart(prod_Name,prod_Price,prod_Img){
  return `
  <div class="cart-content">

          <div class="cart-img-box">
            <img src="${prod_Img}" class="cart-img">
          </div>
          <div class="cart-detail-box">
            <div class="prod-name">${prod_Name}</div>
            
            <div class="price-subtotal">
              <div class="prod-price" id="prod-price-id">${prod_Price}</div>
              <div class="prod-subtotal" id="prod-subtotal-id">${prod_Price}</div>
            </div>
              
            <div class="qty-group">
              <button class="minus">-</button>
              <input type="number" value="1" class="ip-qty">
              <button class="plus">+</button>
            </div>

          </div>

          <i class="las la-trash"></i>
        </div>`
}


// document.addEventListener('DOMContentLoaded',loadProducts);

function loadProducts(){
  loadContents();
}

function loadContents(){

  // let addCartBtn = document.querySelectorAll(".cart-btn");

  // addCartBtn.forEach((btn)=>{
  //   btn.addEventListener('click',addCart) ;
  // });

  let incQty = document.querySelectorAll(".plus");

  incQty.forEach((inc)=>{
    inc.addEventListener('click',incQuantity) ;
  });

  let decQty = document.querySelectorAll(".minus");

  decQty.forEach((dec)=>{
    dec.addEventListener('click',decQuantity) ;
  });

  let btnRemove=document.querySelectorAll('.la-trash') ;

  btnRemove.forEach((trash)=>{
    trash.addEventListener('click',removeItem) ;
  });

}


// let incQty = document.querySelectorAll(".plus");

// incQty.forEach((inc)=>{
//   inc.addEventListener('click',incQuantity) ;
// });

function incQuantity(){
  let getprodPrice = this.parentElement.previousElementSibling.querySelector('.prod-price').innerHTML;
  let priceVal = parseInt(getprodPrice);
  let qtyInc= parseInt(this.previousElementSibling.value);
  let subTotal = 0;
  if(qtyInc>=1 && qtyInc<5){
    qtyInc++;
    subTotal += priceVal*qtyInc;
    this.previousElementSibling.value=qtyInc;
    this.parentElement.previousElementSibling.querySelector('.prod-subtotal').innerHTML=subTotal;
  }
 }

// let decQty = document.querySelectorAll(".minus");

// decQty.forEach((dec)=>{
//   dec.addEventListener('click',decQuantity) ;
// });

function decQuantity(){
  let getprodPrice = this.parentElement.previousElementSibling.querySelector('.prod-price').innerHTML;
  let priceVal = parseInt(getprodPrice);
  let qtyDec= parseInt(this.nextElementSibling.value);
  let subTotal = 0;
  if(qtyDec>1){
    qtyDec--;
    subTotal += priceVal*qtyDec;
    this.nextElementSibling.value=qtyDec;
    this.parentElement.previousElementSibling.querySelector('.prod-subtotal').innerHTML=subTotal;
  }
}



// let btnRemove=document.querySelectorAll('.la-trash') ;

// btnRemove.forEach((trash)=>{
//   trash.addEventListener('click',removeItem) ;
// });

function removeItem(){
  this.parentElement.remove();
}


// let incQty = document.getElementsByClassName("plus");

// for(let i=0;i<incQty.length;i++){
//   incQty[i].addEventListener('click', incQuantity);
// }


// let decQty = document.getElementsByClassName("minus");

// for(let j=0;j<incQty.length;j++){
//   incQty[j].addEventListener('click', addCart);
// }