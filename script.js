document.addEventListener("DOMContentLoaded", () => {
  // Selecting elements for text character counting
  const textArea = document.querySelector("#text-input");
  const textCount = document.querySelector("#text-count");

  // Selecting elements for CSS minification and character count
  const cssTextArea = document.querySelector("#css-input");
  const cssCount = document.querySelector("#css-count");
  const minifyCssButton = document.querySelector("#minify-css");
  const minifiedCssOutput = document.querySelector("#minified-css-output");
  const minifiedCssCount = document.querySelector("#css-count-minified");

  // Selecting elements for JavaScript minification and character count
  const jsTextArea = document.querySelector("#js-input");
  const jsCount = document.querySelector("#js-count");
  const minifyJsButton = document.querySelector("#minify-js");
  const minifiedJsOutput = document.querySelector("#minified-js-output");
  const minifiedJsCount = document.querySelector("#js-count-minified");

  // Event listener for text character count
  textArea.addEventListener("input", () => {
    textCount.innerText = `${textArea.value.length}`;
  });

  // Event listener for CSS character count
  cssTextArea.addEventListener("input", () => {
    cssCount.innerText = `${cssTextArea.value.length}`;
  });

  // Event listener for JavaScript character count
  jsTextArea.addEventListener("input", () => {
    jsCount.innerText = `${jsTextArea.value.length}`;
  });

  // Event listener for CSS minification
  minifyCssButton.addEventListener("click", () => {
    const minifiedCss = minifyCSS(cssTextArea.value);
    minifiedCssOutput.textContent = minifiedCss;
    minifiedCssCount.innerText = `${minifiedCss.length}`; // Update minified CSS character count
  });

  // Event listener for JavaScript minification
  minifyJsButton.addEventListener("click", () => {
    const minifiedJs = minifyJS(jsTextArea.value);
    minifiedJsOutput.textContent = minifiedJs;
    minifiedJsCount.innerText = `${minifiedJs.length}`; // Update minified JavaScript character count
  });

  function minifyCSS(css) {
    return css
      .replace(/\/\*.*?\*\//g, "") // Remove comments
      .replace(/\s+/g, " ") // Replace multiple spaces with a single space
      .replace(/\s*([{}:;.,])\s*/g, "$1") // Remove spaces around symbols
      .trim(); // Trim leading and trailing whitespace
  }

  function minifyJS(js) {
    return js
      .replace(/\/\*[\s\S]*?\*\//g, "") // Remove multi-line comments
      .replace(/(^|\s)\/\/.*/g, "") // Remove single-line comments
      .replace(/\s*([\{\};:,=\+\-\*\(\)\[\]])\s*/g, "$1") // Remove spaces around special characters
      .replace(/\s+/g, " ") // Replace multiple spaces with a single space
      .trim(); // Trim any leading or trailing whitespace
  }
});
