// Render ES
const homeDisplay = $("#home");
const artDisplay = $("#art-list");
const infoDisplay = $("#information");
const list = $("ul");
export function render(detailed) {
  console.log(detailed);
  list.insertAdjacentHTML(
    "beforebegin",
    `<li class="${detailed.artObject.id}">
      <a href="#information">
        <img class="art" src="${
          detailed.artObject.webImage.url.slice(0, -3) + "=s1000"
        }" alt="${detailed.artObject.title}"/>
        <h1>${detailed.artObject.dating.sortingDate}</h1>
        <h1>${detailed.artObject.title}</h1>
      </a>
    </li>
    `
  );
  $(`.${detailed.artObject.id}`).addEventListener("click", function (e) {
    e.preventDefault();
    infoDisplay.classList.toggle("hidden");
    homeDisplay.classList.toggle("hidden");
    artDisplay.classList.toggle("hidden");

    //Hier je logica voor hidden en showen van info
  });
}

function $(element) {
  return document.querySelector(element);
}

function $$(element) {
  return document.querySelectorAll(element);
}
