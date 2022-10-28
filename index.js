const div = document.getElementById("main-div");
console.log(div);

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);

  data.map((cur) => {
    div.innerHTML =
      div.innerHTML +
      `<div class="sub-main">
      <p>userId : ${cur.userId}</p>
      <p>id : ${cur.id} </p>
        <h3>${cur.title}</h3>
        <p>${cur.body}</p>
    </div>`;
  });
}

getData();
