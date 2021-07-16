
/* const newPost = async(event) => {
  event.preventDefault();
  
    document.location.replace('/post')
  
 
} */



const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/createpost');
    } else {
      alert('Failed to delete title');
    }
  }
};


/* document
  .querySelector('.new-post')
  .addEventListener('click', newPost); */



  document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);  
