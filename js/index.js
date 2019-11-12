const references = document.querySelector(".references");

const createRef = imgURL => {
  let item = document.createElement("div");
  let img = document.createElement("img");

  item.classList.add("item");
  img.src = imgURL;
  img.alt = "Hey";

  item.appendChild(img);

  return item;
};

const totalRefs = 12;

for (var i = 1; i <= totalRefs; i++) {
  references.appendChild(createRef(`img/refs/thumb/ref${i}.jpg`));
}
