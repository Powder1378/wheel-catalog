const baseHtml = document.querySelector('.spreadsheets--item.js-base');
const spreadsheets = document.querySelector('.spreadsheets');
const apiURL = 'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjAVelBMOc22-gML36B6PALAP4tiKN1iy7VsvcxJnG2JC15sNTGAehPOwwI9l5GgS6xWbAWUWsvvpY1DjrjABpMjSqImbXNny9OJCK8pUKTn0zFNhxailcrUU0VCNRpHKS8yQ2EmMESAwNFDc8G2dhAeLwVqBERMSgmJYJxbZT4K7SMW6LLHwbbtUqp3fYQt7m0zwZGBX5j-2D0X9Ad9BtpdpLY0_y8pHNvey1DW4_qMJ2-ck7dCiCbxi2MCNpuPkq0rESSCAdfLW8zJqzZvRIOLP0_vg&lib=MEX3zXkwI-AmcLcHj6JU7WTzbqBIoUkXV';

async function loadData() {
  const response = await fetch(apiURL);
  const data = await response.json();
  data.forEach(entry => {
    const copy = baseHtml.cloneNode(true);
    copy.classList.remove('js-base');
    copy.querySelector('.spreadsheets--name').textContent = entry.name;
    copy.querySelector('.spreadsheets--type').textContent = entry.type;
    copy.querySelector('.spreadsheets--source').textContent = entry.source;
    copy.querySelector('.spreadsheets--img').src = entry.image;
    spreadsheets.appendChild(copy);
  });
}

loadData();
