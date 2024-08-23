function bodyComponent(data) {
  return `<div class="container mt-5">
      <form id="profile-form">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h3>User Profile: ${data.data.name}</h3>
          </div>
          <div class="card-body">
            <h5 class="card-title">Personal Information</h5>
            <ul class="list-group mb-3">
              <li class="list-group-item">
                <label for="name">Name: </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="form-control"
                  value="${data.data.name}"
                />
              </li>
              <li class="list-group-item">
                <label for="dateOfBirth">Date of Birth: </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  class="form-control"
                  value="${data.data.dateOfBirth.split("T")[0]}"
                />
              </li>
              <li class="list-group-item">
                <label for="nationalID">National ID: </label>
                <input
                  type="text"
                  name="nationalID"
                  id="nationalID"
                  class="form-control"
                  value="${data.data.nationalID}"
                />
              </li>
              <li class="list-group-item">
                <label for="UTIN">UTIN: </label>
                <input
                  type="text"
                  name="UTIN"
                  id="UTIN"
                  class="form-control"
                  value="${data.data.UTIN}"
                />
              </li>
              <li class="list-group-item">
                <label for="TIN">TIN: </label>
                <input
                  type="text"
                  name="TIN"
                  id="TIN"
                  class="form-control"
                  value="${data.data.TIN}"
                />
              </li>
              <li class="list-group-item">
                <label for="assessmentYear">Assessment Year: </label>
                <input
                  type="text"
                  name="assessmentYear"
                  id="assessmentYear"
                  class="form-control"
                  value="${data.data.assessmentYear}"
                />
              </li>
              <li class="list-group-item">
                <label for="residentialStatus">Residential Status: </label>
                <select
                  name="residentialStatus"
                  id="residentialStatus"
                  class="form-control"
                >
                  <option value="Resident" ${
                    data.data.residentialStatus === "Resident" ? "selected" : ""
                  }>Resident</option>
                  <option value="Non-resident" ${
                    data.data.residentialStatus === "Non-resident"
                      ? "selected"
                      : ""
                  }>Non-resident</option>
                </select>
              </li>
              <li class="list-group-item">
                <label for="taxpayersStatus">Taxpayer's Status: </label>
                <select
                  name="taxpayersStatus"
                  id="taxpayersStatus"
                  class="form-control"
                >
                  <option value="Individual" ${
                    data.data.taxpayersStatus === "Individual" ? "selected" : ""
                  }>Individual</option>
                  <option value="Firm" ${
                    data.data.taxpayersStatus === "Firm" ? "selected" : ""
                  }>Firm</option>
                  <option value="Association of individuals" ${
                    data.data.taxpayersStatus === "Association of individuals"
                      ? "selected"
                      : ""
                  }>Association of individuals</option>
                  <option value="hindu Undivided Family" ${
                    data.data.taxpayersStatus === "hindu Undivided Family "
                      ? "selected"
                      : ""
                  }>Hindu Undivided Family</option>
                </select>
              </li>
            </ul>

            <h5 class="card-title">Family Information</h5>
            <ul class="list-group mb-3">
              <li class="list-group-item">
                <label for="fathersName">Father's Name: </label>
                <input
                  type="text"
                  name="fathersName"
                  id="fathersName"
                  class="form-control"
                  value="${data.data.fathersName}"
                />
              </li>
              <li class="list-group-item">
                <label for="mothersName">Mother's Name: </label>
                <input
                  type="text"
                  name="mothersName"
                  id="mothersName"
                  class="form-control"
                  value="${data.data.mothersName}"
                />
              </li>
              <li class="list-group-item">
                <label for="spouseName">Spouse's Name: </label>
                <input
                  type="text"
                  name="spouseName"
                  id="spouseName"
                  class="form-control"
                  value="${data.data.spouse.name}"
                />
              </li>
              <li class="list-group-item">
                <label for="spouseTIN">Spouse's TIN: </label>
                <input
                  type="text"
                  name="spouseTIN"
                  id="spouseTIN"
                  class="form-control"
                  value="${data.data.spouse.TIN}"
                />
              </li>
            </ul>

            <h5 class="card-title">Contact Information</h5>
            <ul class="list-group mb-3">
              <li class="list-group-item">
                <label for="officeContact">Office Contact: </label>
                <input
                  type="text"
                  name="officeContact"
                  id="officeContact"
                  class="form-control"
                  value="${data.data.contact.office}"
                />
              </li>
              <li class="list-group-item">
                <label for="homeContact">Home Contact: </label>
                <input
                  type="text"
                  name="homeContact"
                  id="homeContact"
                  class="form-control"
                  value="${data.data.contact.home}"
                />
              </li>
              <li class="list-group-item">
                <label for="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="form-control"
                  value="${data.data.contact.email}"
                />
              </li>
            </ul>

            <h5 class="card-title">Address Information</h5>
            <ul class="list-group mb-3">
              <li class="list-group-item">
                <label for="currentAddress">Current Address: </label>
                <input
                  type="text"
                  name="currentAddress"
                  id="currentAddress"
                  class="form-control"
                  value="${data.data.address.current}"
                />
              </li>
              <li class="list-group-item">
                <label for="permanentAddress">Permanent Address: </label>
                <input
                  type="text"
                  name="permanentAddress"
                  id="permanentAddress"
                  class="form-control"
                  value="${data.data.address.permanent}"
                />
              </li>
            </ul>

            <h5 class="card-title">Tax Information</h5>
            <ul class="list-group mb-3">
              <li class="list-group-item">
                <label for="circle">Circle: </label>
                <input
                  type="text"
                  name="circle"
                  id="circle"
                  class="form-control"
                  value="${data.data.circle_taxArea.circle}"
                />
              </li>
              <li class="list-group-item">
                <label for="taxArea">Tax Area: </label>
                <input
                  type="text"
                  name="taxArea"
                  id="taxArea"
                  class="form-control"
                  value="${data.data.circle_taxArea.taxArea}"
                />
              </li>
              <li class="list-group-item">
                <input
                  type="hidden"
                  name="id"
                  id="id"
                  class="form-control"
                  value="${data.data._id}"
                />
              </li>
            </ul>
            
            <button type="submit" class="btn btn-primary" id="profile-submit">Save Changes</button>
          </div>
        </div>
      </form>
    </div>`;
}

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("clientProfile.js loaded");
  fetch("/api/v1/clientProfile/user")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        document.body.innerHTML = bodyComponent(data);
      } else {
        document.body.innerHTML = "User not found";
      }
    });

  document.body.addEventListener("click", (e) => {
    if (e.target && e.target.id === "profile-submit") {
      e.preventDefault();
      const form = document.getElementById("profile-form");
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      fetch("/api/v1/clientProfile/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            alert("Profile updated successfully");
          } else {
            alert("Failed to update profile");
          }
        });
    }
  });
});
