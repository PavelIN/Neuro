import Users from "./users.js";

const button = document.querySelector(".users__button");
let allUsers = [];

let nextPage = 1;

const hideButton = (totalPage) => {
  if (nextPage === totalPage) {
    button.classList.add("users__button-none");
  }
};

const render = () => {
  const users = document.querySelector(".users");
  users.innerHTML = '';
  const sortedUsers = allUsers.sort((a, b) => {
    const nameA = a.first_name.toUpperCase();
    const nameB = b.first_name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  sortedUsers.forEach((data) => {
    new Users(data).renderItem();
  });
};

const getUsers = async () => {
  const fetchParms = {
    metod: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(
    `https://reqres.in/api/users?page=${nextPage}`,
    fetchParms
  );
  console.log(res);
  if (res.status == 200) {
    const parsedRes = await res.json();
    hideButton(parsedRes.total_pages);
    allUsers = [...allUsers, ...parsedRes.data];
    render();
    ++nextPage;
  } else {
    alert(res.statusText);
  }
};

await getUsers();



button.addEventListener("click", getUsers);
