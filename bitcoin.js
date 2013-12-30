$(function() {
	$.getJSON("http://data.mtgox.com/api/2/BTCUSD/money/ticker_fast", function(json) {
		var bitcoin_value = Math.floor(json.data.last.value);
		$("[data-bitcoin-value]").each(function() {
			$(this).text("$" + ($(this).attr("data-bitcoin-value") * bitcoin_value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		});
	});
});
