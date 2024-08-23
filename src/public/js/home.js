let counter = 1;
function createRow(data) {
  return `
  <div class="rows" id="rows"><div class="row">
        <div class="col-1"> <p>${counter++}</p></div>
        <div class="col-9 d-flex flex-column justify-content-start align-items-center">
          <div id=individual>
            <p style="font-size:20px">${data.name}</p>
          </div>
          <div id="individual">
            <p style="margin:0;">email: ${data.contact.email}</p>
            <p>home: ${data.contact.home}</p>
          </div>

        </div>
        <div class="col-2"><button class ="btn" id="view">view profile</button></div>
      </div>
  </div> </div>`;
}

function fillTable(arr) {
  const container = document.querySelector("#data-table");
  arr.forEach((item) => {
    const row = createRow(item);
    container.innerHTML += row;
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  fetch("/api/v1/home/getClientList")
    .then((res) => res.json())
    .then((res) => {
      if (res.msg == "ok") {
        const arr = res.data.reduce((pre, curr) => {
          pre.push({name: curr.name, _id: curr._id, contact: curr.contact});
          return pre;
        }, []);
        console.log(arr);
        fillTable(arr);
      }
    })
    .catch((error) => console.log(error));
});

function getClientProfile(id) {
  console.log(id);
  fetch("/api/v1/home/getClient", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id: id}),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
}
const searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInput = document.querySelector("#search");
  const searchValue = searchInput.value.toLowerCase().trim();
  if (searchValue == "") {
    search.style =
      "background-color: rgba(255, 0, 0, 0.2);border: 1px solid rgba(255, 0, 0, 0.5)";
  } else {
    fetch("/api/v1/home/getClient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: searchValue}),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.href = "/api/v1/clientProfile";
      })
      .catch((error) => console.log(error));
  }
});
