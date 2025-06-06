interface ModerationResponse {
  // Define properties expected from the API response
  error?: boolean;
  message?: string;
  // Add more fields according to SkunkOAI response structure
}

async function moderateMessage(message: string): Promise<ModerationResponse> {
  try {
    const response = await fetch('https://sp-api.netlify.app/.netlify/functions/moderate-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt_moderation: message }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: ModerationResponse = await response.json();
    return data;

  } catch (error) {
    console.error('Error moderating message:', error);
    return { error: true, message: (error as Error).message };
  }
}

// Usage example:
moderateMessage("Hello, this is a test message.")
  .then(result => console.log("Moderation result:", result));