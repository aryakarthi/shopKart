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


// ! Product 1

// # To create object
let prodInfo1 = {
  prodName1: "Poco M4 5G",
  prodPrice1: 15999
};

// # To create element
let div_col1 = document.createElement("div"),
    div_prodBox1 = document.createElement("div"),
    div_prodImg1 = document.createElement("div"),
    imgElement1 = document.createElement("img"),
    div_prodInfo1 = document.createElement("div"),
    p_prodName1 = document.createElement("p"),
    p_prodPrice1 = document.createElement("p");

// # To add attributes
div_col1.setAttribute("class","col-3");
div_prodBox1.setAttribute("class","product-box");
div_prodImg1.setAttribute("class","product-img");
div_prodInfo1.setAttribute("class","product-info");

// # To add text
p_prodName1.innerText = prodInfo1.prodName1;
p_prodPrice1.innerText = prodInfo1.prodPrice1;

// # To add image
imgElement1.src = "./img/poco_m45G_yellow.webp";

// # To add style
p_prodName1.style.color = "blue";

// # To append one html element to another element
div_prodImg1.appendChild(imgElement1);
div_prodInfo1.append(p_prodName1,p_prodPrice1);
div_prodBox1.append(div_prodImg1,div_prodInfo1)
div_col1.appendChild(div_prodBox1);

// # To add html element into html document
let sectwoRow1 = document.getElementById("sec2-row");
sectwoRow1.appendChild(div_col1);

// ! Product 2

// # To create object
let prodInfo2 = {
  prodName2: "Poco X4 Pro 5G",
  prodPrice2: 18499
};

// # To create element
let div_col2 = document.createElement("div"),
    div_prodBox2 = document.createElement("div"),
    div_prodImg2 = document.createElement("div"),
    imgElement2 = document.createElement("img"),
    div_prodInfo2 = document.createElement("div"),
    p_prodName2 = document.createElement("p"),
    p_prodPrice2 = document.createElement("p");

// # To add attributes
div_col2.setAttribute("class","col-3");
div_prodBox2.setAttribute("class","product-box");
div_prodImg2.setAttribute("class","product-img");
div_prodInfo2.setAttribute("class","product-info");

// # To add text
p_prodName2.innerText = prodInfo2.prodName2;
p_prodPrice2.innerText = prodInfo2.prodPrice2;

// # To add image
imgElement2.src = "./img/poco_x4pro5G_blue.webp";

// # To add style
p_prodName2.style.color = "blue";

// # To append one html element to another element
div_prodImg2.appendChild(imgElement2);
div_prodInfo2.append(p_prodName2,p_prodPrice2);
div_prodBox2.append(div_prodImg2,div_prodInfo2)
div_col2.appendChild(div_prodBox2);

// # To add html element into html document
let sectwoRow2 = document.getElementById("sec2-row");
sectwoRow2.appendChild(div_col2);


// ! Product 3

// # To create object
let prodInfo3 = {
  prodName3: "Realme Narzo 50 5G",
  prodPrice3: 17999
};

// # To create element
let div_col3 = document.createElement("div"),
    div_prodBox3 = document.createElement("div"),
    div_prodImg3 = document.createElement("div"),
    imgElement3 = document.createElement("img"),
    div_prodInfo3 = document.createElement("div"),
    p_prodName3 = document.createElement("p"),
    p_prodPrice3 = document.createElement("p");

// # To add attributes
div_col3.setAttribute("class","col-3");
div_prodBox3.setAttribute("class","product-box");
div_prodImg3.setAttribute("class","product-img");
div_prodInfo3.setAttribute("class","product-info");

// # To add text
p_prodName3.innerText = prodInfo3.prodName3;
p_prodPrice3.innerText = prodInfo3.prodPrice3;

// # To add image
imgElement3.src = "./img/realme_narzo505G_blue.webp";

// # To add style
p_prodName3.style.color = "blue";

// # To append one html element to another element
div_prodImg3.appendChild(imgElement3);
div_prodInfo3.append(p_prodName3,p_prodPrice3);
div_prodBox3.append(div_prodImg3,div_prodInfo3)
div_col3.appendChild(div_prodBox3);

// # To add html element into html document
let sectwoRow3 = document.getElementById("sec2-row");
sectwoRow3.appendChild(div_col3);


// ! Product 4

// # To create object
let prodInfo4 = {
  prodName4: "Realme Narzo 50 Pro 5G",
  prodPrice4: 21999
};

// # To create element
let div_col4 = document.createElement("div"),
    div_prodBox4 = document.createElement("div"),
    div_prodImg4 = document.createElement("div"),
    imgElement4 = document.createElement("img"),
    div_prodInfo4 = document.createElement("div"),
    p_prodName4 = document.createElement("p"),
    p_prodPrice4 = document.createElement("p");

// # To add attributes
div_col4.setAttribute("class","col-3");
div_prodBox4.setAttribute("class","product-box");
div_prodImg4.setAttribute("class","product-img");
div_prodInfo4.setAttribute("class","product-info");

// # To add text
p_prodName4.innerText = prodInfo4.prodName4;
p_prodPrice4.innerText = prodInfo4.prodPrice4;

// # To add image
imgElement4.src = "./img/realme_narzo50pro5G_black.webp";

// # To add style
p_prodName4.style.color = "blue";

// # To append one html element to another element
div_prodImg4.appendChild(imgElement4);
div_prodInfo4.append(p_prodName4,p_prodPrice4);
div_prodBox4.append(div_prodImg4,div_prodInfo4)
div_col4.appendChild(div_prodBox4);

// # To add html element into html document
let sectwoRow4 = document.getElementById("sec2-row");
sectwoRow4.appendChild(div_col4);
