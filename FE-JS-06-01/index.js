const getRandomKittyBtn = document.querySelector("#searchKitty");

const addRandomPicture = () => {
  const url = "https://api.thecatapi.com/v1/images/search";
  fetch(url)
    .then((response) => response.json())
    .then((data) => generatePicture(data[0].url))
    .catch((err) => console.error(err));
};

const generatePicture = (url) => {
  const picture = document.createElement("img");
  picture.setAttribute("data-test", "img-kitty");
  picture.src = url;
  document.body.appendChild(picture);
};

getRandomKittyBtn.addEventListener("click", addRandomPicture);
