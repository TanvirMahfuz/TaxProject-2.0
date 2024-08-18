let counter = 1;
function createRow(data) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let i = 0; i < 3; i++) {
    let col4 = document.createElement("div");
    col4.classList.add("col-4");
    if (i == 0) col4.innerHTML = counter++;
    else if (i == 1) col4.innerHTML = data.name;
    else col4.innerHTML = data._id;
    row.appendChild(col4);
  }
  return row;
}

function fillTable(arr) {
  const container = document.querySelector(".container")[0];
  arr.forEach((element) => {
    container.appendChild(createRow(element));
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  fetch("/api/v1/home/getClientList")
    .then((res) => res.json())
    .then((res) => {
      if (res.msg == "ok") {
        const arr = res.data.reduce((pre, curr) => {
          pre.push({name: curr.name, _id: curr._id});
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
      // if (data.success) {
      //   window.location.href = "/api/v1/home/getClientList" + data.data.name;
      // }
    })
    .catch((error) => console.log(error));
}
