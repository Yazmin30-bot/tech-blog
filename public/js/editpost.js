
const deleButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/createpost');
    } else {
      alert('Failed to delete post');
    }
  }
};




const editButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-cont').value.trim();
    if (title && content) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id,
          title,
          content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        document.location.replace('/createpost');
      } else {
        alert('Failed to update post');
      }
    }
  }
};



document
  .querySelector('.post-list')
  .addEventListener('click', editButtonHandler);


document
  .querySelector('.delete-post')
  .addEventListener('click', deleButtonHandler);
