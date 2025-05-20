document.addEventListener('DOMContentLoaded', () => {
    const priceElement = document.getElementById('solana-price');
    const timestampElement = document.getElementById('timestamp');
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd';

    console.log('Solana Price Tracker popup.js loaded.');

    async function fetchSolanaPrice() {
        console.log('Attempting to fetch Solana price...');
        try {
            const response = await fetch(apiUrl);
            console.log('API response received:', response.status);

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('API data parsed:', data);

            if (data && data.solana && typeof data.solana.usd === 'number') {
                const price = data.solana.usd;
                priceElement.textContent = `$${price.toFixed(2)}`;
                timestampElement.textContent = new Date().toLocaleTimeString();
                console.log(`Successfully updated price: $${price.toFixed(2)} at ${timestampElement.textContent}`);
            } else {
                throw new Error('Invalid data structure received from API.');
            }
        } catch (error) {
            console.error('Error fetching Solana price:', error.message, error.stack);
            priceElement.textContent = 'Error fetching price';
            timestampElement.textContent = 'N/A';
            // More specific error for user if possible
            if (error.message.includes('API request failed')) {
                 priceElement.textContent = 'API Error. Try again later.';
            } else if (error.message.includes('Invalid data structure')) {
                 priceElement.textContent = 'API response error.';
            } else if (error.message.toLowerCase().includes('failed to fetch')) {
                priceElement.textContent = 'Network error. Check connection.';
            }
        }
    }

    if (priceElement && timestampElement) {
        fetchSolanaPrice();
    } else {
        console.error('Required DOM elements (solana-price or timestamp) not found.');
        if (document.body) { // Check if body exists to append error
            const errorMsg = document.createElement('p');
            errorMsg.textContent = 'Critical error: UI elements missing. Please reinstall the extension.';
            errorMsg.style.color = 'red';
            document.body.appendChild(errorMsg);
        }
    }
});