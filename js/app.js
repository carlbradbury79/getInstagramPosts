const fetchPosts = async () =>
  await (await fetch('.netlify/functions/getInstagramPosts')).json();

fetchPosts().then((data) => {
  console.log('data', data);
  postList = document.querySelector('#posts');

  data.forEach((post) => {
    const li = document.createElement('li');

    const image = document.createElement('img');

    image.src = post.thumbnail;

    li.appendChild(image);

    postList.appendChild(li);
  });
});
