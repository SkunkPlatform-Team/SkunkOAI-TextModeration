import requests

url = "https://sp-api.netlify.app/.netlify/functions/moderate-message"
headers = {"Content/json"}
data = {"prompt_moderation": "Your message here"}

response = requests.post(url, json=data, headers=headers)

if response.ok:
    print(response.text)
else:
    print(f"Request failed: {response.status_code} - {response.reason}")