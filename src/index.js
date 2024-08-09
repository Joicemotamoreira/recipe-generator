function translate() {
  let languageButton = document.querySelector("#languageButton");
  let h1 = document.querySelector("h1");
  let h2 = document.querySelector("h2");
  let ingredient = document.querySelector("#ingredient");
  let exemplos = document.querySelector(".hint");

  if (languageButton.innerHTML === "Português") {
    languageButton.innerHTML = "English";
    h1.innerHTML = "Não sabe o que comer?";
    h2.innerHTML =
      "Me diz seu ingrediente favorito que te dou uma receita bem facinha de sanduíche!";
    ingredient.placeholder = "Insira um ingrediente..";
    exemplos.innerHTML = "Exemplos: Ovos, Tomate, Atum ou Queijo";
  } else if (languageButton.innerHTML === "English") {
    languageButton.innerHTML = "Português";
    h1.innerHTML = "Don't know what to eat?";
    h2.innerHTML =
      "Tell me your favorite ingredient and get an easy sandwich recipe!";
    ingredient.placeholder = "Enter an ingredient..";
    exemplos.innerHTML = "i.e: Egg, Tomato, Tuna or Cheese";
  }
}

let languageButton = document.querySelector("#languageButton");
languageButton.addEventListener("click", translate);

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
  if (languageButton.innerHTML === "Português") {
    let ingredient = document.querySelector("#ingredient");
    let apiKey = "b5f48bboa0a3000997064tb1d30c4a9f";
    let context = `you are sandwich maker that loves to help the user to make simple sandwiches providing an easy sandwich recipe. your mission is to generate a short and simples recipe in basic HTML and separete each line with a <br />. make sure use the user ingredient. You can start with a title <div>${ingredient.value} Sandwich Recipe</div> straight with the recipe, no introduction needed. Separate the recipe into two parts: <strong>ingredients</strong> and <strong>instructions</strong>.`;
    let prompt = `User ingredient: generate one sandwich recipe about ${ingredient.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<span class="generating">⏳ Generating recipe with <i>${ingredient.value}</i> for you! 😋</span>`;

    axios.get(apiUrl).then(displayRecipe);
  } else if (languageButton.innerHTML === "English") {
    let ingredient = document.querySelector("#ingredient");
    let apiKey = "b5f48bboa0a3000997064tb1d30c4a9f";
    let context = `você é um especialista em sanduíches que adora ajudar o usuário a fazer sanduíches simples providenciando uma receita fácil de sanduíche. sua missão é gerar uma receita breve e simples em HTML básico, separe cada linha com <br />. tenha certeza de usar o ingrediente do usuário. Você pode começar com o título <div>Sanduíche de ${ingredient.value}</div> e ir direto para a receita, não precisa de nenhuma introdução. Separe a receita em duasd partes: <strong>ingredientes</strong> e <strong>instruções</strong>.`;
    let prompt = `Ingrediente do usuário: gere uma receita com o ingrediente: ${ingredient.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<span class="generating">⏳ Gerando receita com <i>${ingredient.value}</i> pra você! 😋</span>`;

    axios.get(apiUrl).then(displayRecipe);
  }
}

let recipeGeneretor = document.querySelector("#recipe-generator");
recipeGeneretor.addEventListener("submit", generateRecipe);
