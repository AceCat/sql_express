var axios = require('axios');

module.exports = {
	makeAPICall: function(queryString, csv) {
		const URI = window.encodeURI('http://localhost:3000/' + queryString)
		return axios.get(URI)
		.then(function (response) {
			console.log(response.data.data)
			return response.data.data
		})
	}
};