  const sendButton = document.getElementById('sendButton');
        const userInput = document.getElementById('userInput');
        const chatbox = document.getElementById('chatbox');

        sendButton.addEventListener('click', async () => {
            const userMessage = userInput.value;
            if (!userMessage) return;

            // Display user's message
            displayMessage(userMessage, 'user');
            userInput.value = '';

            // Call OpenAI API
            const response = await getAIResponse(userMessage);
            displayMessage(response, 'bot');
        });

        function displayMessage(message, sender) {
            const messageElement = document.createElement('p');
            messageElement.textContent = message;
            messageElement.className = sender;
            chatbox.appendChild(messageElement);
            chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
        }

        async function getAIResponse(message) {
            const apiKey = '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'; // Replace with your OpenAI API key

            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: message }]
                })
            });