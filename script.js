const sheetID = "1CNIWfNKE-of46T1-B8YalUG_Qe2vJOKdYO8J62MhyW4";
const sheetName = "wheeldata";  // シート名が小文字ならこのまま
const url = `https://opensheet.elk.sh/${sheetID}/${sheetName}`;

const container = document.getElementById("wheel-container");

fetch(url)
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "wheel-card";

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("読み込みエラー:", err);
    container.innerHTML = "<p>データの読み込みに失敗しました。</p>";
  });
