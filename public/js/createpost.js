
const newPost = async (event) => {
  event.preventDefault();
  document.location.replace('/post')
}

document
  .querySelector('.new-post')
  .addEventListener('click', newPost);


