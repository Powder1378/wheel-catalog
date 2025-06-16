const data = [
  {
    name: "インフェルノ",
    image: "./images/SPT_V_1.png"
  },
  {
    name: "ディープファイブ",
    image: "./images/SPT_V_2.png"
  },
  {
    name: "ロズスピード Mr.V",
    image: "./images/SPT_V_3.png"
  },
  {
    name: "ダイヤモンドカット",
    image: "./images/SPT_V_4.png"
  },
  {
    name: "クロノ",
    image: "./images/SPT_V_5.png"
  },
  {
    name: "フェローチRR",
    image: "./images/SPT_V_6.png"
  },
  {
    name: "フィフティナイン",
    image: "./images/SPT_V_7.png"
  },
  {
    name: "マーシー",
    image: "./images/SPT_V_8.png"
  },
  {
    name: "シンセティックZ",
    image: "./images/SPT_V_9.png"
  },
  {
    name: "オーガニック・タイプゼロ",
    image: "./images/SPT_V_10.png"
  },
  {
    name: "エンドーv.1",
    image: "./images/SPT_V_11.png"
  },
  {
    name: "GTワン",
    image: "./images/SPT_V_12.png"
  },
  {
    name: "デューバー7",
    image: "./images/SPT_V_13.png"
  },
  {
    name: "ウザール",
    image: "./images/SPT_V_14.png"
  },
  {
    name: "グラウンドライド",
    image: "./images/SPT_V_15.png"
  },
  {
    name: "Sレーサー",
    image: "./images/SPT_V_16.png"
  },
  {
    name: "ベナム",
    image: "./images/SPT_V_17.png"
  },
  {
    name: "コスモ",
    image: "./images/SPT_V_18.png"
  },
  {
    name: "ダッシュVIP",
    image: "./images/SPT_V_19.png"
  },
  {
    name: "アイスキッド",
    image: "./images/SPT_V_20.png"
  },
  {
    name: "ラウフェルド",
    image: "./images/SPT_V_21.png"
  },
  {
    name: "湾岸マスター",
    image: "./images/SPT_V_22.png"
  },
  {
    name: "スーパーファイブ",
    image: "./images/SPT_V_23.png"
  },
  {
    name: "エンドーv2",
    image: "./images/SPT_V_24.png"
  },
  {
    name: "スプリット・シックス",
    image: "./images/SPT_V_25.png"
  }
];

const container = document.getElementById("wheel-container");
const searchInput = document.getElementById("search");

function displayData(items) {
  container.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "wheel-card";
    card.innerHTML = 
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
    ;
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
