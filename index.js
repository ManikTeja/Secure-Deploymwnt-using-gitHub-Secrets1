const API_KEY = '9be0eef7280e4fa49f6731a797f797c9'; // will be replaced in CI/CD

async function searchNews() {
  const query = document.getElementById("searchInput").value;
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  const container = document.getElementById("newsContainer");
  container.innerHTML = "";
  data.articles.forEach(article => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${article.title}</h3><p>${article.description}</p>`;
    container.appendChild(div);
  });
}
