
const apiKey = '';
const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

async function sendPrompt() {
    const userPrompt = document.getElementById('user-prompt').value;
    if (!userPrompt) {
        alert('Please enter a prompt.');
        return;
    }

    const responseDiv = document.getElementById('ai-response');
    responseDiv.textContent = 'Loading...';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt: userPrompt,
                max_tokens: 150
            })
        });

        const data = await response.json();
        responseDiv.textContent = data.choices[0].text;
    } catch (error) {
        console.error('Error:', error);
        responseDiv.textContent = 'An error occurred while fetching the response.';
    }
}
