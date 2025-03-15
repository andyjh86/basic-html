function fetchStockData() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/quotes?ticker=CBA.AX,WOW.AX',
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'YOUR_API_KEY',  // Replace with your actual API key
            'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        if (response && response.data && response.data.length > 0) {
            let output = "<h3>Stock Prices</h3>";
            response.data.forEach(stock => {
                output += `<p><strong>${stock.symbol}</strong>: ${stock.regularMarketPrice} AUD</p>`;
            });
            document.getElementById("stockData").innerHTML = output;
        } else {
            document.getElementById("stockData").innerHTML = "<p>No stock data available.</p>";
        }
    }).fail(function () {
        document.getElementById("stockData").innerHTML = "<p>Error fetching stock data. Please try again.</p>";
    });
}

// Attach event listener after DOM loads
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fetchStocks").addEventListener("click", fetchStockData);
});
