
const deleButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const idp = event.target.getAttribute('data-id-p');
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace(`/post-comment/${idp}`);
    } else {
      alert('Failed to delete post');
    }
  }
};




const editButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const idp = event.target.getAttribute('data-id-p');
    const text = document.querySelector('#post-cont').value.trim();
    if (text) {
      const response = await fetch(`/api/comments/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id,
          text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        document.location.replace(`/post-comment/${idp}`);
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
