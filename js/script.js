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
    prodName: "Samsung Galaxy A73 5G",
    prodPrice: 41999,
    prodImg: "./img/galaxy_a735G_gray.jpg"
  },
  {
    prodName: "Samsung Galaxy S21 FE 5G",
    prodPrice: 52199,
    prodImg: "./img/galaxy_s21fe5G_pink.jpg"
  },
  {
    prodName: "Redmi_Note 11",
    prodPrice: 14999,
    prodImg: "./img/redmi_note11_blue.webp"
  },
  {
    prodName: "Redmi Note 12 5G",
    prodPrice: 19999,
    prodImg: "./img/redmi_note125G_black.webp"
  },
  {
    prodName: "IQOO Neo6 5G",
    prodPrice: 29999,
    prodImg: "./img/iqoo_neo65G_blue.jpg"
  },
  {
    prodName: "IQOO Z6 5G",
    prodPrice: 16999,
    prodImg: "./img/iqoo_z65G_blue.jpg"
  },
  {
    prodName: "OnePlus 10 Pro 5G",
    prodPrice: 69999,
    prodImg: "./img/oneplus_10pro5G_black.webp"
  },
  {
    prodName: "OnePlus Nord 2T 5G",
    prodPrice: 28999,
    prodImg: "./img/oneplus_nord2t5G_aqua.webp"
  },
  {
    prodName: "Poco M4 5G",
    prodPrice: 15999,
    prodImg: "./img/poco_m45G_yellow.webp"
  },
  {
    prodName: "Poco X4 Pro 5G",
    prodPrice: 18499,
    prodImg: "./img/poco_x4pro5G_blue.webp"
  },
  {
    prodName: "Realme Narzo 50 5G",
    prodPrice: 17999,
    prodImg: "./img/realme_narzo505G_blue.webp"
  },
  {
    prodName: "Realme Narzo 50 Pro 5G",
    prodPrice: 21999,
    prodImg: "./img/realme_narzo50pro5G_black.webp"
  }
];

arrMobiles.forEach(function(elem, i){
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
  div_prodBox.setAttribute("id","product-"+i);
  div_prodImg.setAttribute("class","product-img");
  div_prodInfo.setAttribute("class","product-info");
  btn_cart.setAttribute("class","cart-btn");

// # To add text
  p_prodName.innerText = elem.prodName;
  p_prodPrice.innerText = elem.prodPrice;
  btn_cart.innerText = "Add to cart";

// # To add image
  imgElement.src = elem.prodImg;

// # To append one html element to another element
  div_prodImg.appendChild(imgElement);
  div_prodInfo.append(p_prodName,p_prodPrice);
  div_prodBox.append(div_prodImg,div_prodInfo,btn_cart)
  div_col.appendChild(div_prodBox);

// # To add html element into html document
  let sec1Row = document.getElementById("sec1-row");
  sec1Row.appendChild(div_col);


});
