form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  const userKeys = [
    "name",
    "fathersName",
    "mothersName",
    "dateOfBirth",
    "permanentAddress",
    "currentAddress",
    "nationalID",
    "UTIN",
    "TIN",
    "circle",
    "taxArea",
    "email",
    "officeContact",
    "homeContact",
    "employersName",
    "assessmentYear",
    "residentialStatus",
    "taxpayersStatus",
    "spouseName",
    "spouseTIN",
  ];

  let user = {};
  userKeys.forEach((key) => {
    let val = null;
    try {
      user[key] = document.querySelector(`input[name=${key}]`).value;
    } catch (error) {
      console.log(key + "field not found");
    }
  });
  console.log(user);
  fetch("http://localhost:8090/api/v1/form/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status == "success") {
        console.log(data);
        window.location.reload();
      }
    });
});
