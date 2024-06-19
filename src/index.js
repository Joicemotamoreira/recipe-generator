function displayRecipe(response) {
  console.log("recipe generetated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let ingredient = document.querySelector("#ingredient");
  let apiKey = "b5f48bboa0a3000997064tb1d30c4a9f";
  let context = `you are sandwich maker that loves to help the user to make simple sandwiches providing an easy sandwich recipe. your mission is to generate a short and simples recipe in basic HTML and separete each line with a <br />. make sure use the user ingredient. You can start with a title <div>${ingredient.value} Sandwich Recipe</div> straight with the recipe, no introduction needed. Separate the recipe into two parts: <strong>ingredients</strong> and <strong>instructions</strong>.`;
  let prompt = `User ingredient: generate one sandwich recipe about ${ingredient.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<span class="generating">⏳ Generating recipe with <i>${ingredient.value}</i> for you! 😋</span>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeGeneretor = document.querySelector("#recipe-generator");
recipeGeneretor.addEventListener("submit", generateRecipe);
