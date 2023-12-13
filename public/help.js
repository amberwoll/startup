const url = "https://api.quotable.io/random";
fetch(url)
  .then((x) => x.json())
  .then((response) => {
    document.querySelector("pre").textContent = `"${response.content}" - ${response.author}`;

  });