const cheerio = require("cheerio")

// const getData = html => {
// 	const $ = cheerio.load(html)
// 	const scripts = $("script:not([src]):not([id]):not([type])")

// 	let preloadedState
// 	for (var i = 0; i < scripts.length; i++) {
// 		let script = $(scripts[i]).html().toString().trim()
// 		if (script.startsWith("window.__PRELOADED_STATE_")) preloadedState = script
// 	}
// 	// remove window.preloadedState stuff and just keep the stuff after first '{'
// 	preloadedState = preloadedState.substring(preloadedState.indexOf("{"))

// 	let lastIndexOfSemiColon = preloadedState.lastIndexOf(``)
// 	preloadedState =
// 		preloadedState.substring(0, lastIndexOfSemiColon) +
// 		preloadedState.substring(lastIndexOfSemiColon + 1)

// 	preloadedState = JSON.parse(preloadedState)
// 	// return JSON.stringify(preloadedState)
// 	return preloadedState
// }

// const getProductDetails = preloadedState => {
// 	return preloadedState.product.productDetails
// }

const scrape = async url => {
	const res = await fetch(url, {
		Headers: {
			"Access-Control-Allow-Origin": "*",
			"User-Agent": ",",
			Accept:
				"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
			"Accept-Language": "en-US,en;q=0.5",
			"Accept-Encoding": "gzip, deflate, br",
			Connection: "keep-alive",
		},
	})
	const html = await res.text()
	return html
}

export default function getData(productName){
	let imageUrl = `https://www.google.com/search?q=${productName}&tbm=isch`
	let shopUrl = `https://www.google.com/search?q=${productName}&tbm=shop`
	let imageRes = scrape(imageUrl)
	let shopRes = scrape(shopUrl)
	console.log(imageRes);

}
