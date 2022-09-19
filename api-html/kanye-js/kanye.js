const loadData = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data));
}

// loadData()

const displayQuote = quote => {
    console.log(quote.quote);
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
}