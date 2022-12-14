const auth = "563492ad6f91700001000001c52ba7c3cceb4b35b3dad7ecd3632e41";
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".search-form");
let searchValue;
const more = document.querySelector(".more");
let page = 1;
let fetchLink;
let currentSearch;

searchInput.addEventListener("input", updatedInput);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  currentSearch = searchValue;
  searchPhotos(searchValue);
});
more.addEventListener("click", loadMore);

function updatedInput(event) {
  searchValue = event.target.value;
}

function generatePictures(data) {
  data.photos.forEach((photo) => {
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `
            <div class='gallery-info'>
            <p>${photo.photographer} </p>
            <a href=${photo.src.original}>Download</a>
            </div>
            <img src=${photo.src.large}> </img>`;
    gallery.appendChild(galleryImg);
  });
}

async function fetchApi(url) {
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  });

  const data = await dataFetch.json();
  return data;
}

async function curatedPhotos() {
  fetchLink = "https://api.pexels.com/v1/curated??page=1&per_page=15";
  const data = await fetchApi(fetchLink);
  generatePictures(data);
}

async function searchPhotos(query) {
  clear();
  fetchLink = `https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=1`;
  const data = await fetchApi(fetchLink);
  generatePictures(data);
}

function clear() {
  gallery.innerHTML = "";
  searchInput.innerHTML = "";
}

async function loadMore() {
  page++;
  if (currentSearch) {
    fetchLink = `https://api.pexels.com/v1/search?query=${currentSearch}+query&per_page=15&page=${page}`;
  } else {
    fetchLink = `https://api.pexels.com/v1/curated??page=${page}&per_page=15`;
  }
  const data = await fetchApi(fetchLink);
  generatePictures(data);
}

curatedPhotos();
