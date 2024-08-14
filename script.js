document.addEventListener("DOMContentLoaded", () => {
  const textArea = document.querySelector("#text-input");
  const textCount = document.querySelector("#text-count");

  const cssTextArea = document.querySelector("#css-input");
  const cssCount = document.querySelector("#css-count");
  const minifyCssButton = document.querySelector("#minify-css");
  const minifiedCssOutput = document.querySelector("#minified-css-output");
  const minifiedCssCount = document.querySelector("#css-count-minified");

  const jsTextArea = document.querySelector("#js-input");
  const jsCount = document.querySelector("#js-count");
  const minifyJsButton = document.querySelector("#minify-js");
  const minifiedJsOutput = document.querySelector("#minified-js-output");
  const minifiedJsCount = document.querySelector("#js-count-minified");

  textArea.addEventListener("keyup", () => {
    textCount.innerText = `${textArea.value.length}`;
  });

  cssTextArea.addEventListener("input", () => {
    cssCount.innerText = `${cssTextArea.value.length}`;
  });

  jsTextArea.addEventListener("input", () => {
    jsCount.innerText = `${jsTextArea.value.length}`;
  });

  minifyCssButton.addEventListener("click", () => {
    const minifiedCss = minifyCSS(cssTextArea.value);
    minifiedCssOutput.textContent = minifiedCss;
    minifiedCssCount.innerText = `${minifiedCss.length}`; // New
  });

  minifyJsButton.addEventListener("click", () => {
    const minifiedJs = minifyJS(jsTextArea.value);
    minifiedJsOutput.textContent = minifiedJs;
    minifiedJsCount.innerText = `${minifiedJs.length}`; // New
  });

  function minifyCSS(css) {
    return css
      .replace(/\/\*.*?\*\//g, "")
      .replace(/\s+/g, " ")
      .replace(/\s*([{}:;.,])\s*/g, "$1");
  }

  function minifyJS(js) {
    return js
      .replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "")
      .replace(/\s+/g, " ")
      .replace(/\s*([{}:;.,])\s*/g, "$1");
  }
});
