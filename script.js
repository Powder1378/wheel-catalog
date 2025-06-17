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
  { name: "スプリット・シックス", image: "./images/SPT_V_25.png",type: "Sports",source: "Vanilla"},


  // SUV
  { name: "VIP", image: "./images/SUV_V_1.png",type: "SUV",source: "Vanilla"},
  { name: "ベネファクター", image: "./images/SUV_V_2.png",type: "SUV",source: "Vanilla"},
  { name: "コスモ", image: "./images/SUV_V_3.png",type: "SUV",source: "Vanilla"},
  { name: "ビップ", image: "./images/SUV_V_4.png",type: "SUV",source: "Vanilla"},
  { name: "ロイヤル・シックス", image: "./images/SUV_V_5.png",type: "SUV",source: "Vanilla"},
  { name: "ファゴーム", image: "./images/SUV_V_6.png",type: "SUV",source: "Vanilla"},
  { name: "デラックス", image: "./images/SUV_V_7.png",type: "SUV",source: "Vanilla"},
  { name: "アイスド・アウト", image: "./images/SUV_V_8.png",type: "SUV",source: "Vanilla"},
  { name: "コンシェンティ", image: "./images/SUV_V_9.png",type: "SUV",source: "Vanilla"},
  { name: "ロズスピード・テン", image: "./images/SUV_V_10.png",type: "SUV",source: "Vanilla"},
  { name: "スーパーノヴァ", image: "./images/SUV_V_11.png",type: "SUV",source: "Vanilla"},
  { name: "オベイRS", image: "./images/SUV_V_12.png",type: "SUV",source: "Vanilla"},
  { name: "ロズスピード・ボーラー", image: "./images/SUV_V_13.png",type: "SUV",source: "Vanilla"},
  { name: "エクストラバガンゾ", image: "./images/SUV_V_14.png",type: "SUV",source: "Vanilla"},
  { name: "スプリット・シックス", image: "./images/SUV_V_15.png",type: "SUV",source: "Vanilla"},
  { name: "エンパワード", image: "./images/SUV_V_16.png",type: "SUV",source: "Vanilla"},
  { name: "サンライズ", image: "./images/SUV_V_17.png",type: "SUV",source: "Vanilla"},
  { name: "ダッシュVIP", image: "./images/SUV_V_18.png",type: "SUV",source: "Vanilla"},
  { name: "カッター", image: "./images/SUV_V_19.png",type: "SUV",source: "Vanilla"},


  // Muscle
  { name: "クラシック・ファイブ", image: "./images/MUS_V_1.png",type: "Muscle",source: "Vanilla"},
  { name: "デュークス", image: "./images/MUS_V_2.png",type: "Muscle",source: "Vanilla"},
  { name: "マッスル・フリーク", image: "./images/MUS_V_3.png",type: "Muscle",source: "Vanilla"},
  { name: "クラッカ", image: "./images/MUS_V_4.png",type: "Muscle",source: "Vanilla"},
  { name: "アズリアル", image: "./images/MUS_V_5.png",type: "Muscle",source: "Vanilla"},
  { name: "メカ", image: "./images/MUS_V_6.png",type: "Muscle",source: "Vanilla"},
  { name: "ブラック・トップ", image: "./images/MUS_V_7.png",type: "Muscle",source: "Vanilla"},
  { name: "ドラッグSPL", image: "./images/MUS_V_8.png",type: "Muscle",source: "Vanilla"},
  { name: "リボルバー", image: "./images/MUS_V_9.png",type: "Muscle",source: "Vanilla"},
  { name: "クラシック・ロッド", image: "./images/MUS_V_10.png",type: "Muscle",source: "Vanilla"},
  { name: "フェアリー", image: "./images/MUS_V_11.png",type: "Muscle",source: "Vanilla"},
  { name: "スプーナー", image: "./images/MUS_V_12.png",type: "Muscle",source: "Vanilla"},
  { name: "ファイブスター", image: "./images/MUS_V_13.png",type: "Muscle",source: "Vanilla"},
  { name: "オールドスクール", image: "./images/MUS_V_14.png",type: "Muscle",source: "Vanilla"},
  { name: "カエル・ヘフェッター", image: "./images/MUS_V_15.png",type: "Muscle",source: "Vanilla"},
  { name: "ドッドマン", image: "./images/MUS_V_16.png",type: "Muscle",source: "Vanilla"},
  { name: "シックス・ガン", image: "./images/MUS_V_17.png",type: "Muscle",source: "Vanilla"},
  { name: "マーセナリー", image: "./images/MUS_V_18.png",type: "Muscle",source: "Vanilla"},


  // Offroad
  { name: "レイダー", image: "./images/OFF_V_1.png",type: "Offroad",source: "Vanilla"},
  { name: "マッドスリンガー", image: "./images/OFF_V_2.png",type: "Offroad",source: "Vanilla"},
  { name: "ネヴィス", image: "./images/OFF_V_3.png",type: "Offroad",source: "Vanilla"},
  { name: "ケアンゴーム", image: "./images/OFF_V_4.png",type: "Offroad",source: "Vanilla"},
  { name: "アマゾン", image: "./images/OFF_V_5.png",type: "Offroad",source: "Vanilla"},
  { name: "チャレンジャー", image: "./images/OFF_V_6.png",type: "Offroad",source: "Vanilla"},
  { name: "デューン・バッシャー", image: "./images/OFF_V_7.png",type: "Offroad",source: "Vanilla"},
  { name: "ファイブスター", image: "./images/OFF_V_8.png",type: "Offroad",source: "Vanilla"},
  { name: "ロッククロウラー", image: "./images/OFF_V_9.png",type: "Offroad",source: "Vanilla"},
  { name: "ミルスペック・スティーリー", image: "./images/OFF_V_10.png",type: "Offroad",source: "Vanilla"},
  { name: "レトロ・スティーリー", image: "./images/OFF_V_11.png",type: "Offroad",source: "Vanilla"},
  { name: "耐久スティーリー", image: "./images/OFF_V_12.png",type: "Offroad",source: "Vanilla"},
  { name: "凹型スティーリー", image: "./images/OFF_V_13.png",type: "Offroad",source: "Vanilla"},
  { name: "警察仕様スティーリー", image: "./images/OFF_V_14.png",type: "Offroad",source: "Vanilla"},
  { name: "軽量スティーリー", image: "./images/OFF_V_15.png",type: "Offroad",source: "Vanilla"},
  { name: "デュークス", image: "./images/OFF_V_16.png",type: "Offroad",source: "Vanilla"},
  { name: "アバランチ", image: "./images/OFF_V_17.png",type: "Offroad",source: "Vanilla"},
  { name: "マウンテンマン", image: "./images/OFF_V_18.png",type: "Offroad",source: "Vanilla"},
  { name: "リッジクライマー", image: "./images/OFF_V_19.png",type: "Offroad",source: "Vanilla"},
  { name: "凸形5", image: "./images/OFF_V_20.png",type: "Offroad",source: "Vanilla"},
  { name: "フラット6", image: "./images/OFF_V_21.png",type: "Offroad",source: "Vanilla"},
  { name: "全地形モンスター", image: "./images/OFF_V_22.png",type: "Offroad",source: "Vanilla"},
  { name: "ドラッグSPL", image: "./images/OFF_V_23.png",type: "Offroad",source: "Vanilla"},
  { name: "凹型ラリーマスター", image: "./images/OFF_V_24.png",type: "Offroad",source: "Vanilla"},
  { name: "凹凸スノーフレーク", image: "./images/OFF_V_25.png",type: "Offroad",source: "Vanilla"},


  // Lowrider
  { name: "フレア", image: "./images/LOW_V_1.png",type: "Lowrider",source: "Vanilla"}
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

  // OFF_M_36 ~ OFF_M_50 を追加
for (let i = 36; i <= 50; i++) {
  data.push({
    name: `Offroad ${i}`,
    image: `./images/OFF_M_${i}.png`,
    type: "Offroad",
    source: "MOD"
  });
}
// 要素取得
const container = document.getElementById("wheel-container");
const searchInput = document.getElementById("search");
const typeFilters = document.querySelectorAll(".type-filter");
const sourceFilters = document.querySelectorAll(".source-filter");
const filterSummary = document.getElementById("filter-summary");

// データ表示
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

// フィルター適用
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

// イベント登録
searchInput.addEventListener("input", applyFilters);
typeFilters.forEach(cb => cb.addEventListener("change", applyFilters));
sourceFilters.forEach(cb => cb.addEventListener("change", applyFilters));

// 初期表示
applyFilters();
