const data = [
// Sports
  { name: "インフェルノ", image: "./images/SPT_V_1.png",type: "Sports",source: "Vanilla"},
  { name: "ディープファイブ", image: "./images/SPT_V_2.png",type: "Sports",source: "Vanilla"},
  { name: "ロズスピード Mr.V", image: "./images/SPT_V_3.png",type: "Sports",source: "Vanilla"},
  { name: "ダイヤモンドカット", image: "./images/SPT_V_4.png",type: "Sports",source: "Vanilla"},
  { name: "クロノ", image: "./images/SPT_V_5.png",type: "Sports",source: "Vanilla"},
  { name: "フェローチRR", image: "./images/SPT_V_6.png",type: "Sports",source: "Vanilla"},
  { name: "フィフティナイン", image: "./images/SPT_V_7.png",type: "Sports",source: "Vanilla"},
  { name: "マーシー", image: "./images/SPT_V_8.png",type: "Sports",source: "Vanilla"},
  { name: "シンセティックZ", image: "./images/SPT_V_9.png",type: "Sports",source: "Vanilla"},
  { name: "オーガニック・タイプゼロ", image: "./images/SPT_V_10.png",type: "Sports",source: "Vanilla"},
  { name: "エンドーv.1", image: "./images/SPT_V_11.png",type: "Sports",source: "Vanilla"},
  { name: "GTワン", image: "./images/SPT_V_12.png",type: "Sports",source: "Vanilla"},
  { name: "デューバー7", image: "./images/SPT_V_13.png",type: "Sports",source: "Vanilla"},
  { name: "ウザール", image: "./images/SPT_V_14.png",type: "Sports",source: "Vanilla"},
  { name: "グラウンドライド", image: "./images/SPT_V_15.png",type: "Sports",source: "Vanilla"},
  { name: "Sレーサー", image: "./images/SPT_V_16.png",type: "Sports",source: "Vanilla"},
  { name: "ベナム", image: "./images/SPT_V_17.png",type: "Sports",source: "Vanilla"},
  { name: "コスモ", image: "./images/SPT_V_18.png",type: "Sports",source: "Vanilla"},
  { name: "ダッシュVIP", image: "./images/SPT_V_19.png",type: "Sports",source: "Vanilla"},
  { name: "アイスキッド", image: "./images/SPT_V_20.png",type: "Sports",source: "Vanilla"},
  { name: "ラウフェルド", image: "./images/SPT_V_21.png",type: "Sports",source: "Vanilla"},
  { name: "湾岸マスター", image: "./images/SPT_V_22.png",type: "Sports",source: "Vanilla"},
  { name: "スーパーファイブ", image: "./images/SPT_V_23.png",type: "Sports",source: "Vanilla"},
  { name: "エンドーv2", image: "./images/SPT_V_24.png",type: "Sports",source: "Vanilla"},
  { name: "スプリット・シックス", image: "./images/SPT_V_25.png",type: "Sports",source: "Vanilla"}
];
// SPT_M_51 ~ SPT_M_113 を追加
for (let i = 51; i <= 113; i++) {
  data.push({
    name: `Sports ${i}`,
    image: `./images/SPT_M_${i}.png`,
    type: "Sports",
    source: "MOD"
  });
}

// SUV

// 要素の取得
const container = document.getElementById("wheel-container");
const searchInput = document.getElementById("search");
const typeFilters = document.querySelectorAll(".type-filter");
const sourceFilters = document.querySelectorAll(".source-filter");
const filterSummary = document.getElementById("filter-summary");

// ホイールカードの描画
function displayData(items) {
  container.innerHTML = "";

  if (items.length === 0) {
    container.innerHTML = `
      <div class="no-result">
        <p>この条件に合うホイールはまだ <strong>作成中</strong> です。</p>
      </div>
    `;
    return;
  }

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

// フィルタの適用
function applyFilters() {
  const keyword = searchInput.value.toLowerCase();

  const selectedTypes = Array.from(typeFilters)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const selectedSources = Array.from(sourceFilters)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const filtered = data.filter(item => {
    const matchesName = item.name.toLowerCase().includes(keyword);
    const matchesType = selectedTypes.includes(item.type);
    const matchesSource = selectedSources.includes(item.source);
    return matchesName && matchesType && matchesSource;
  });

  filterSummary.textContent = `絞り込み結果：${filtered.length} 件`;

  displayData(filtered);
}

// イベントリスナー登録
searchInput.addEventListener("input", applyFilters);
typeFilters.forEach(cb => cb.addEventListener("change", applyFilters));
sourceFilters.forEach(cb => cb.addEventListener("change", applyFilters));

// 初期表示
applyFilters();
