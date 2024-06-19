function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "new recipe",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeGeneretor = document.querySelector("#recipe-generator");
recipeGeneretor.addEventListener("submit", generateRecipe);
