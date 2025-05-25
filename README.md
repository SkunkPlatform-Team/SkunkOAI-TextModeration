# SkunkOAI-TextModeration
SkunkOAI API: Text-Moderations

SkunkOAI is an Artificial Intelligence designed to Talk with SkunkOAI. when SkunkOAI API is a part of API for AI. like AI-Moderation and AI-Talk.

## Example Usage:

```js
fetch('https://sp-api.netlify.app/.netlify/functions/moderate-message', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    prompt_moderation: "Hello, I am Cool People."
  }),
})
  .then(res => res.json())
  .then(data => {
    console.log('Moderation started:', data);
  })
  .catch(err => {
    console.error('Error:', err);
  });
```
