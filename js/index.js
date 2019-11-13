//prettier-ignore
const images = [
  {title: 'Cafe önü ahşap masa sandalye', imgURL: 'img/refs/thumb/ref1.jpg', originalImgURL: 'img/refs/original/ref1.png'},
  {title: 'İç mekan cafe berjer sandalye masa', imgURL: 'img/refs/thumb/ref2.jpg', originalImgURL: 'img/refs/original/ref2.png'},
  {title: 'Geniş mekan ikili sedir masa berjer', imgURL: 'img/refs/thumb/ref3.jpg', originalImgURL: 'img/refs/original/ref3.png'},
  {title: 'Dış mekan cafe önü ahşap masa sandalye', imgURL: 'img/refs/thumb/ref4.jpg', originalImgURL: 'img/refs/original/ref4.png'},
  {title: 'Açık hava demir cafe sedir koltuk masa', imgURL: 'img/refs/thumb/ref5.jpg', originalImgURL: 'img/refs/original/ref5.png'},
  {title: 'Restoran ikili cafe koltuk masa', imgURL: 'img/refs/thumb/ref6.jpg', originalImgURL: 'img/refs/original/ref6.png'},
  {title: 'Cafe koltuk sedir cam masa', imgURL: 'img/refs/thumb/ref7.jpg', originalImgURL: 'img/refs/original/ref7.png'},
  {title: 'Cafe masa modern sandalye deri sedir', imgURL: 'img/refs/thumb/ref8.jpg', originalImgURL: 'img/refs/original/ref8.png'},
  {title: 'Okey masası sandalye ahşap berjer', imgURL: 'img/refs/thumb/ref9.jpg', originalImgURL: 'img/refs/original/ref9.png'},
  {title: 'Kapitoneli cafe sedir ahşap masa sandalye', imgURL: 'img/refs/thumb/ref10.jpg', originalImgURL: 'img/refs/original/ref10.png'},
  {title: 'İki yanlı okey masası kumaş sandalye berjer', imgURL: 'img/refs/thumb/ref11.jpg', originalImgURL: 'img/refs/original/ref11.png'},
  {title: 'Chester cafe ikili koltuk berjer lükens', imgURL: 'img/refs/thumb/ref12.jpg', originalImgURL: 'img/refs/original/ref12.png'}
];

const references = document.querySelector(".references");

const createRef = refObj => {
  let item = document.createElement("div");
  let img = document.createElement("img");
  let overlay = document.createElement("div");
  let originalImg = document.createElement("img");
  let quitFullScreen = document.createElement("span");

  item.classList.add("item");
  img.src = refObj.imgURL;
  originalImg.src = refObj.originalImgURL;
  img.alt = refObj.title;
  overlay.classList.add("overlay");
  quitFullScreen.textContent = "X";

  img.addEventListener("click", function() {
    overlay.appendChild(originalImg);
    document.body.prepend(overlay);
  });
  overlay.addEventListener("click", function(event) {
    if (event.target == originalImg) return;
    overlay.remove();
  });
  item.appendChild(img);
  overlay.appendChild(quitFullScreen);

  return item;
};

images.forEach(item => references.appendChild(createRef(item)));
