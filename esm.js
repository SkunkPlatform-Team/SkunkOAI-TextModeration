async function moderateMessage(message){
  return fetch('https://sp-api.netlify.app/.netlify/functions/moderate-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt_moderation: message
    }),
  })
  .then(res => res.json())
  .catch(err => {
    console.error('Error:', err);
    return { error: true, message: err.message };
  });
}

export moderateMessage
