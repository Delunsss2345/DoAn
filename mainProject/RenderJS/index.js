const ProductList = document.querySelector(".Product__List");

const Product__Render = [
  {
    id: 1,
    name: "Milk Coffee",
    desc: "SEE MORE",
    thumbnail: "./public/img/Product__Img/Milk__Coffee.png",
  },

  {
    id: 2,
    name: "Coffee Beans",
    desc: "SEE MORE",
    thumbnail: "./public/img/Product__Img/Coffee__Beans.png",
  },
  {
    id: 3,
    name: "Coffee Maker",
    desc: "SEE MORE",
    thumbnail: "./public/img/Product__Img/Coffee__Maker.png",
  },
];

const RenderProduct = () => {
  let html = "";
  Product__Render.forEach((Product) => {
    html += `
        <div class="Product__Item">
            <figure class = "Product__Figure"> 
                <img src="${Product.thumbnail}"/> 
            </figure>
            <p class = "Product__Item--Title">${Product.name}</p>
            <a class = "Product__Item--Link">${Product.desc}</a>
        </div>
    `;
  });

  ProductList.innerHTML = html;
};

RenderProduct();

const Feedback__Element = document.querySelector(".Feedback__List");

const Feedback__List = [
  {
    id: 1,
    desc: "The best on the net! I made back the purchase price in just 48 hours! I couldn't have asked for more",
  },
  {
    id: 2,
    desc: "Thanks for creating the website, it is truly the cheapest place I have ever visited",
  },
  {
    id: 3,
    desc: "Best on the net! I got my purchase price back in just 12 hours! I was surprised",
  },
];

const RenderFeedback = () => {
  let html = "";
  Feedback__List.forEach((feedback) => {
    html += `<div id = Feedback__Item--${feedback.id} class = "Feedback__Item">
     <p class = "Feedback__Item--Desc" >"${feedback.desc}."</p>

     <div class = "Feedback__Item--Or">
     <i style="color: #a6674a;font-size: 3rem;" class="fa fa-quote-right" aria-hidden="true"></i>
     <span>destinee</span>
     </div>
   
    </div>`;
  });
  Feedback__Element.innerHTML = html;
};

RenderFeedback();

const btnFeedbackLeft = document.querySelector(".Feedback__List-BtnL");
const btnFeedbackRight = document.querySelector(".Feedback__List-BtnR");

const getFeedback = document.querySelectorAll(".Feedback__Item");
let count = 0;

btnFeedbackLeft.addEventListener("click", () => {
  if (count > -getFeedback.length) {
    --count;
    getFeedback.forEach((item) => {
      item.style.transform = `translateX(-${count * 100}%)`;
    });
  }
});

btnFeedbackRight.addEventListener("click", () => {
  if (getFeedback.length - 1 > count) {
    ++count;
    getFeedback.forEach((item) => {
      item.style.transform = `translateX(-${count * 100}%)`;
    });
  }
});

const getOutSide = document.querySelector(".outSide");
const getHeaderMobile = document.querySelector(".Header__Mobile");
const getMenu = document.querySelector(".menu");

getMenu.addEventListener("click", () => {
  getOutSide.style.visibility = "visible";
  getOutSide.style.opacity = "1";
  getHeaderMobile.style.visibility = "visible";
  getHeaderMobile.style.opacity = "1";
  getHeaderMobile.style.transform = "translateX(0)";
});

getOutSide.addEventListener("click", () => {
  getOutSide.style.visibility = "hidden";
  getOutSide.style.opacity = "0";
  getHeaderMobile.style.visibility = "hidden";
  getHeaderMobile.style.opacity = "0";
  getHeaderMobile.style.transform = "translateX(-101%)";
});
