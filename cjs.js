const { post } = require('axios');

async function moderateMessage(message) {
  return post(
    'https://sp-api.netlify.app/.netlify/functions/moderate-message',
    { prompt_moderation: message },
    { headers: { 'Content-Type': 'application/json' } }
  )
  .then(res => res.data)
  .catch(err => {
    console.error('Error:', err.message);
    return { error: true, message: err.message };
  });
}

module.exports = { moderateMessage };
