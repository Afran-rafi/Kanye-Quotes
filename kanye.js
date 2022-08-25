const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => quote(data))
}
// loadQuotes()

const quote = (quote) => {
    const quotes = document.getElementById('quote');
    quotes.innerHTML = `<b>Quote:</b> ${quote.quote}`
}
