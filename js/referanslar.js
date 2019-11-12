//prettier-ignore
const images = [
  { title: 'Avusturya', description: 'Bu kafe Avusturyada', location: 'Avusturya', path: `img/referanslar/avusturya-restoran-2.jpeg`, otherImages: [] },
  { title: '', description: '', location: '', path: `img/referanslar/avusturya-restoran.jpeg`, otherImages: [] },
  { title: '', description: '', location: '', path: `img/referanslar/black-c.jpeg`, otherImages: [] },
  { title: '', description: '', location: '', path: `img/referanslar/burgundy-sedir.jpeg`, otherImages: [] },
  { title: '', description: '', location: '', path: `img/referanslar/cafe-chester-koltuk.jpeg`, otherImages: [] },
  { title: '', description: '', location: '', path: `img/referanslar/cafe-chester.jpeg`, otherImages: [] },
  { title: '', description: '', location: '', path: `img/referanslar/cafe-sandalye-sedir.jpeg`, otherImages: [] },
  { title: '', description: '', location: '', path: `img/referanslar/demir-sedir-masa.jpeg`, otherImages: [] },
  { title: '', description: '', location: '', path: `img/referanslar/kofteci-ramiz.jpeg`, otherImages: [] },
  { title: '', description: '', location: '', path: `img/referanslar/lounge-sedir.jpeg`, otherImages: [] },
  { title: '', description: '', location: '', path: `img/referanslar/okey-masasi.jpeg`, otherImages: [] },
  { title: '', description: '', location: '', path: `img/referanslar/restoran-sandalye-masa.jpeg`, otherImages: [] },
  { title: '', description: '', location: '', path: `img/referanslar/sedir-sandalye-masa.jpeg`, otherImages: [] },
  { title: '', description: '', location: '', path: `img/referanslar/tahta-masa.jpeg`, otherImages: [] },
  { title: '', description: '', location: '', path: `img/referanslar/yesil-sedir.jpeg`, otherImages: [] }
];

/*
        <div class="ref">
          <img src="img/refs/original/JPEG/ref1.jpg" alt="Referans 1" />
          <div class="info">
            <h3>Bilmem ne kafe</h3>
            <p class="location">Berlin, Germany</p>
            <p class="desc">
              Bilmem ne kafe Berlin'in islek bir caddesinde populer nargile
              kafelerinden bir tanesi.
            </p>
          </div>
        </div>
*/

let references = document.querySelector(".references");

const createRef = refObj => {
  let ref = document.createElement("div");
  let img = document.createElement("img");
  let info = document.createElement("div");
  let title = document.createElement("h3");
  let location = document.createElement("p");
  let desc = document.createElement("p");

  ref.classList.add("ref");
  info.classList.add("info");
  location.classList.add("location");
  desc.classList.add("p");

  img.src = refObj.path;
  title.textContent = refObj.title;
  location.textContent = refObj.location;
  desc.textContent = refObj.description;

  info.appendChild(title);
  info.appendChild(location);
  info.appendChild(desc);
  ref.appendChild(img);
  ref.appendChild(info);

  return ref;
};

images.forEach(item => references.appendChild(createRef(item)));
