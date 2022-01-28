async function getData() {
  let data = await fetch(
    `https://api.imgur.com/3/gallery/search/viral/month/1?q=top&q_type=jpg`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Client-ID 929660e585ce63e",
      },
    }
  )
    .then((res) => res.json())
    .then((ans) => displayData(ans));
}
getData();

function displayData({ data }) {
  console.log(data);
  let parent = document.getElementById("imgurPosts");
  data.forEach((el, i) => {
    let mainDiv = document.createElement("div");
    let title = document.createElement("p");
    title.innerText = el.title;

    let img = document.createElement("img");
    img.src = el?.images[0]?.link || "./images/demoimg.jpg";
    let views = document.createElement("p");
    views.innerText = "Views - " + el.views;

    let imgdiv = document.createElement("div");
    let textdiv = document.createElement("div");

    imgdiv.append(img);
    textdiv.append(title, views);

    mainDiv.append(imgdiv, textdiv);
    parent.append(mainDiv);
  });
}
