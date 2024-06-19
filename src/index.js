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
  let context =
    "you are sandwich maker that loves to help the user to make simple sandwiches providing a easy sandwich recipe. make sure use the user ingredient.";
  let prompt = `User ingredient: generate one sandwich recipe about ${ingredient.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeGeneretor = document.querySelector("#recipe-generator");
recipeGeneretor.addEventListener("submit", generateRecipe);
