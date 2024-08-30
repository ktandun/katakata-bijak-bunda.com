// Add more quotes below, the first item will be shown as main quote
const quotes = [
  [
    "Indo negara adalah memiliki Alam negara yang kaya raya, dan rakyatnya semua ramah tapi rakyatnya miskin krn tdk dpt pendidikan yang bagus",
    "2024",
  ],
  ["Pesawat China pelit, udah jarak jauh tdk ada TV..,", "2024"],
  ["5kg, otak nya pintar", "2024"],
];

document.addEventListener("DOMContentLoaded", function () {
  quotes.forEach(function (quote, index) {
    let [quoteText, quoteDate] = quote;
    if (index == 0) {
      document.getElementById("main").innerHTML = `
        <blockquote class="quote">
          ${quoteText}
          <p class="quote-date">${quoteDate}</p>
        </blockquote>`;
    } else {
      document.getElementById("previous-quotes").insertAdjacentHTML(
        "beforeend",
        `
        <blockquote class="quote">${quoteText}
          <p class="quote-date">${quoteDate}</p>
        </blockquote>`,
      );
    }
  });
});
