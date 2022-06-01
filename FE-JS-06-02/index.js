const button = document.createElement("button");
button.id = "getGoat";
button.innerHTML = "Click me";
document.body.appendChild(button);

const addImg = () => {
  const img = `<img src = "https://picsum.photos/300/200" data-test = "img-goat">`;
  document.body.insertAdjacentHTML("beforeend", img);

  // "https://placegoat.com/300/200");
};

button.addEventListener("click", addImg);
