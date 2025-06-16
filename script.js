const data = [
  {
    name: "インフェルノ",
    image: "./images/SPT_V_1.jpg"
  },
  {
    name: "ディープファイブ",
    image: "./images/SPT_V_2.jpg"
  },
  {
    name: "ロズスピード Mr.V",
    image: "./images/SPT_V_3.jpg"
  },
  {
    name: "ダイヤモンドカット",
    image: "./images/SPT_V_4.jpg"
  }
];

const container = document.getElementById("wheel-container");
const searchInput = document.getElementById("search");

function displayData(items) {
  container.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "wheel-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
    `;
    container.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = data.filter(item => item.name.toLowerCase().includes(keyword));
  displayData(filtered);
});

// 初期表示
displayData(data);
