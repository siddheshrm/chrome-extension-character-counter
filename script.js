document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.querySelector("textarea");
  const count = document.querySelector(".count");

  textarea.addEventListener("keyup", countCharacters);

  function countCharacters() {
    const textLength = textarea.value.length;
    count.innerText = `${textLength}`;
  }
});
