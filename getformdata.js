const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const tableContainer = document.querySelector(".form-data-container > tbody");

function populateTable(params, container) {
  container.innerHTML = "";
  Object.keys(params).forEach((key) => {
    let value = params[key];
    console.log(key, value);
    let tr = document.createElement("tr");
    let keyTd = document.createElement("td");
    let valTd = document.createElement("td");
    keyTd.innerText = key;
    valTd.innerText = value;
    tr.appendChild(keyTd);
    tr.append(valTd);
    tableContainer.appendChild(tr);
  });
}

populateTable(params, tableContainer);
