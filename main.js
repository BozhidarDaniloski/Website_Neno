//step I - Loop over the products array and for each iteration show a card in the div with an id='list'.

// console.log(products);
// exercise I - loop and create all the cards
let list = document.querySelector("#list");

// ako e so arrow novata funkcija
// let renderCard = (obj) => {
//   list.innerHTML += `<div class="col-4 mb-5" id="${obj.id}">
//   <a href="https://www.google.com" class="link d-flex flex-column">
//     <img
//       src="${obj.img}"
//       class="img-fluid"
//     />
//     <div class="item-content p-3 d-flex flex-column flex-grow-1">
//       <h2 class="title">${obj.title}</h2>
//       <p class="paragraph">${obj.desc}</p>
//       <button class="btn btn-danger del-btn mt-auto align-self-end">
//         Delete
//       </button>
//     </div>
//   </a>
// </div>`;
// }

products.forEach((element) => {
  //   list.innerHTML += `<div class="col-4 mb-5" id="${element.id}">
  //   <a href="https://www.google.com" class="link d-flex flex-column">
  //     <img
  //       src="${element.img}"
  //       class="img-fluid"
  //     />
  //     <div class="item-content p-3 d-flex flex-column flex-grow-1">
  //       <h2 class="title">${element.title}</h2>
  //       <p class="paragraph">${element.desc}</p>
  //       <button class="btn btn-danger del-btn mt-auto align-self-end">
  //         Delete
  //       </button>
  //     </div>
  //   </a>
  // </div>`;
  renderCard(element);
});

// exercise II - add card on '+' modal
let addBtn = document.querySelector("#add-product"),
  imgInput = document.querySelector("#img"),
  titleInput = document.querySelector("#title"),
  descInput = document.querySelector("#desc");

addBtn.addEventListener("click", () => {
  if (imgInput.value && titleInput.value && descInput.value) {
    // console.log('all the inputs are filled');
    // console.log(products);

    //   list.innerHTML += `<div class="col-4 mb-5" id="${products.length}">
    //   <a href="google.com" class="link d-flex flex-column">
    //     <img
    //       src="${imgInput.value}"
    //       class="img-fluid"
    //     />
    //     <div class="item-content p-3 d-flex flex-column flex-grow-1">
    //       <h2 class="title">${titleInput.value}</h2>
    //       <p class="paragraph">${descInput.value}</p>
    //       <button class="btn btn-danger del-btn mt-auto align-self-end">
    //         Delete
    //       </button>
    //     </div>
    //   </a>
    // </div>`;

    // exercise IV - push the newly created obj into the products array

    let newProductObj = {
      id: products.length,
      img: imgInput.value,
      title: titleInput.value,
      desc: descInput.value,
    };

    // console.log(newProductObj);
    products.push(newProductObj);

    //   list.innerHTML += `<div class="col-4 mb-5" id="${newProductObj.id}">
    //   <a href="google.com" class="link d-flex flex-column">
    //     <img
    //       src="${newProductObj.img}"
    //       class="img-fluid"
    //     />
    //     <div class="item-content p-3 d-flex flex-column flex-grow-1">
    //       <h2 class="title">${newProductObj.title}</h2>
    //       <p class="paragraph">${newProductObj.desc}</p>
    //       <button class="btn btn-danger del-btn mt-auto align-self-end">
    //         Delete
    //       </button>
    //     </div>
    //   </a>
    // </div>`;

    renderCard(newProductObj);

    // console.log(products);

    // exercise III - clear the input values after adding a new card
    imgInput.value = "";
    titleInput.value = "";
    descInput.value = "";
  }
});

// exercise V, VI - delete btn
document.addEventListener("click", function (e) {
  // console.log('target', e.target);
  // console.log('currentTarget', e.currentTarget);
  if (e.target.classList.contains("del-btn")) {
    e.preventDefault();
    // console.log('clicked on the del-btn');

    let productContainerHTML =
      e.target.parentElement.parentElement.parentElement;

    //html element remove
    productContainerHTML.remove();

    //products.js element remove
    // console.log(products);
    // console.log(productContainerHTML.id);
    // products.splice(productContainerHTML.id, 1);
    products = products.filter((el) => el.id != productContainerHTML.id);

    // console.log(products);

    //update the ids in the products.js
    products.forEach((el, i) => (el.id = i));

    //update the ids in the html
    Array.from(list.children).forEach((el, i) => (el.id = i));
  }
});

// exercise VII
let searchBtn = document.querySelector(".search-btn"),
  searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", () => {
  let searchInputVal = searchInput.value.toLowerCase();

  let filteredProducts = products.filter(
    (el) =>
      el.title.toLowerCase().includes(searchInputVal) ||
      el.desc.toLowerCase().includes(searchInputVal)
  );

  // console.log(filteredProducts);

  list.innerHTML = "";

  filteredProducts.forEach((filteredObj) => {
    //   list.innerHTML +=`<div class="col-4 mb-5" id="${filteredObj.id}">
    //   <a href="https://www.google.com" class="link d-flex flex-column">
    //     <img
    //       src="${filteredObj.img}"
    //       class="img-fluid"
    //     />
    //     <div class="item-content p-3 d-flex flex-column flex-grow-1">
    //       <h2 class="title">${filteredObj.title}</h2>
    //       <p class="paragraph">${filteredObj.desc}</p>
    //       <button class="btn btn-danger del-btn mt-auto align-self-end">
    //         Delete
    //       </button>
    //     </div>
    //   </a>
    // </div>`;
    renderCard(filteredObj);
  });
});

//ako e so obicna funkcija moze i dole da e
function renderCard(obj) {
  list.innerHTML += `<div class="col-4 mb-5" id="${obj.id}">
    <a href="" class="link d-flex flex-column">
      <img
        src="${obj.img}"
        class="img-fluid"
      />
      <div class="item-content p-3 d-flex flex-column flex-grow-1">
        <h2 class="title">${obj.title}</h2>
        <p class="paragraph">${obj.desc}</p>
        <button class="btn btn-danger del-btn mt-auto align-self-end">
          Delete
        </button>
      </div>
    </a>
  </div>`;
}
