function generateStory(event) {
  event.preventDefault();
  let storyElement = document.querySelector("#story");

  new Typewriter("#story", {
    strings: "Once upon a time",
    autoStart: true,
    delay: 10,
    cursor: null,
  });
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
