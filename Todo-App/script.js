const form = document.getElementById("form");
const input = document.getElementById("input");
const message = document.getElementById("msg");
const posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

function formValidation() {
  if (input.value === "") {
    message.innerText = "posts cannot be empty";
    console.log("error");
  } else {
    message.innerText = "";

    acceptData();
  }
}

const data = {};

const acceptData = () => {
  data["text"] = input.value;

  creatPost();
};

const creatPost = () => {
  posts.innerHTML += `
  <div>
  <p>${data.text}</p>
  <span class="options">
   <i onClick="editPosts(this)"  class="fa fa-pencil-square-o" ></i>
   <i  onClick="deletePosts(this)"  class="fa fa-trash" ></i>
  </span>
  </div>`;
  input.value = "";
};

const deletePosts = (e) => {
  e.parentElement.parentElement.remove();
};

const editPosts = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
