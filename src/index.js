function displayStory(response) {
  new Typewriter("#story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: null,
  });
}

function generateStory(event) {
  event.preventDefault();

  let themeInput = document.querySelector("#theme");

  let apiKey = "f3c5613898a1043cbte4a77d8c1bcfo0";
  let context =
    "You are a fairytale expert and are knowledgeable about all the fairytales in the world so please be polite and concise and provide a good fairytale";
  let prompt = `Please generate a good, entertaining, short fairytale, only 2 paragraphs long, about ${themeInput.value}. Please display the fairytale starting with "Once upon a time" in 2 paragraphs in example HTML format:<p>Once upon a time</p><p>The was a fairytale</p>`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let storyElement = document.querySelector("#story");
  storyElement.classList.remove("hidden");
  storyElement.innerHTML = `Generating a "${themeInput.value}" fairytale for you...`;

  axios.get(apiUrl).then(displayStory);
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
