# 🪙 Solana Price Tracker - Chrome Extension

A simple and elegant Chrome Extension that shows you the **current price of Solana (SOL)** fetched from the [CoinGecko API](https://www.coingecko.com/), right in your browser toolbar.

## 🚀 Features

* 🔄 Fetches real-time SOL price from CoinGecko
* 🕒 Displays last updated time
* 💡 Clean and modern popup UI
* ⚙️ Lightweight and easy to use


## 🛠️ Installation

1. Clone or download this repository.

```bash
git clone https://github.com/CodEasePro/solana-rate-display-extension.git
```

2. Open Chrome and go to `chrome://extensions/`.

3. Enable **Developer mode** (toggle at the top right).

4. Click **Load unpacked** and select the folder where this extension is located.

5. You should now see the Solana icon in your Chrome toolbar. Click it to view the latest SOL price!

## 📁 Project Structure

```
solana-price-tracker-extension/
├── manifest.json          # Extension manifest (v3)
├── popup.html             # Popup UI
├── popup.js               # Script to fetch and display SOL price
├── popup.css              # Styles for the popup
```

## 📦 API Used

* [CoinGecko API](https://www.coingecko.com/en/api/documentation) — Free crypto price API used to fetch real-time Solana price.

## 🔧 Notes

* There are a few `console.log` statements in `popup.js` used for debugging. These can be safely removed for production use.
* No user data is collected or stored.

## 🧑‍💻 Contributing

Feel free to fork this repository and make improvements! Pull requests are welcome.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ for Solana fans.
