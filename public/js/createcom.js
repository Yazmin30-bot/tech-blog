const newFormHandler = async (event) => {
  event.preventDefault();

  const text = document.querySelector('#com-text').value.trim();
  console.log(text);
  const post_id = window.location.toString().split('/').pop();

  if (text) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ text, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};



document
  .querySelector('.new-com-form')
  .addEventListener('submit', newFormHandler);


