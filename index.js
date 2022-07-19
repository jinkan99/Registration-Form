const username = document.getElementById("user-name");
const emailId = document.getElementById("user-email");
const websiteUrl = document.getElementById("website-link");
const imageUrl = document.getElementById("image-link");
const genders = document.querySelectorAll(".radio-buttons input[type='radio']");
const checkboxes = document.querySelectorAll(
  ".checkboxes input[type='checkbox']"
);
const registrationButton = document.getElementById("enroll");
const resetButton = document.getElementById("reset");

let user = {
  name: "",
  email: "",
  websiteLink: "",
  imageLink: "",
  gender: "",
  skills: [],
};

genders.forEach((gender) => {
  gender.addEventListener("click", (e) => {
    user.gender = e.target.value;
  });
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    let index = user.skills.indexOf(e.target.value);
    if (index != -1) {
      user.skills.splice(index, 1);
    } else {
      user.skills.push(e.target.value);
    }
  });
});

registrationButton.addEventListener("click", (e) => {
  e.preventDefault();

  user.name = username.value;
  user.email = emailId.value;
  user.websiteLink = websiteUrl.value;
  user.imageLink = "./default-user-img.jpg";
  const template = `
      <tr id="new-user">
        <td id="user-info">
          <p>${user.name}</p>
          <p>${user.gender}</p>
          <p>${user.email}</p>
          <p><a href="#">${user.websiteLink}</a></p>
          <p>${user.skills}</p>
        </td>
        <td id="user-image">
          <img src= "./default-user-img.jpg"/>
        </td>
      </tr>`;

  const ele = document.createElement("tr");
  ele.innerHTML = template;
  document.querySelector("tbody").appendChild(ele);
});

resetButton.addEventListener("click", (e) => {
  e.preventDefault();

  username.value = "";
  emailId.value = "";
  websiteUrl.value = "";
  imageUrl.value = "";

  genders.forEach((gender) => {
    gender.checked = false;
  });

  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  user = {
    name: "",
    email: "",
    websiteLink: "",
    imageLink: "",
    gender: "",
    skills: [],
  };
});
