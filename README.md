SkunkOAI-TextModeration

SkunkOAI API: Text Moderation

SkunkOAI is an Artificial Intelligence system designed to moderate and analyze user messages through AI. This specific API endpoint focuses on text moderation—helping to classify messages as safe or potentially violating content policies.


---

Endpoint

POST https://sp-api.netlify.app/.netlify/functions/moderate-message


---

Example Usage

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
    console.log('Moderation result:', data);
  })
  .catch(err => {
    console.error('Error:', err);
  });
```

---

Response Format

Successful responses return a JSON object:

```json
{
  "code": 200,
  "success": true,
  "violation_type": "safe"
}
```

If a message contains inappropriate content:

```json
{
  "code": 200,
  "success": true,
  "violation_type": "vulgar"
}
```

---

Possible violation_type Values

"safe" – Message is clean and appropriate.

"vulgar" – Contains offensive or explicit language.

"inappropriate" – Includes inappropriate or suggestive content.

"bullying" – Contains language intended to harass, intimidate, or target someone.

"toxic" – Aggressive, harmful, or hostile language that may escalate conflict.

"flood" – Repetitive or spam-like content (e.g., message flooding).

