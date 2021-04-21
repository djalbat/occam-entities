"use strict";

const request = require("request");

const { POST, ACCEPT, OKAY_200, CONTENT_TYPE, APPLICATION_JSON } = require("../constants");

function post(host, uri, parameters, json, callback) {
	const url = urlFromHostURIAndParameters(host, uri, parameters),
				method = POST,
				encoding = null,
				headers = {},
				options = {
					json,
					url,
					method,
					encoding,
					headers
				};

	headers[ACCEPT] = APPLICATION_JSON;

	headers[CONTENT_TYPE] = APPLICATION_JSON;

	request(options, (error, response) => {
		const { statusCode } = response;

		error = error || (statusCode !== OKAY_200);

		if (error) {
			callback(null);
		} else {
			const { body } = response,
						json = body;  ///

			callback(json);
		}
	});
}

module.exports = {
	post
};

function queryStringFromParameters(parameters) {
	const names = Object.keys(parameters),
				namesLength = names.length,
				lastIndex = namesLength - 1,
				queryString = names.reduce((queryString, name, index) => {
					const value = parameters[name],
								encodedName = encodeURIComponent(name),
								encodedValue = encodeURIComponent(value),
								ampersandOrNothing = (index !== lastIndex) ? "&" : "";

					queryString += `${encodedName}=${encodedValue}${ampersandOrNothing}`;

					return queryString;
				}, "");

	return queryString;
}

function urlFromHostURIAndParameters(host, uri, parameters) {
	const queryString = queryStringFromParameters(parameters),
				url = (queryString === "") ?
								`${host}${uri}` :
									`${host}${uri}?${queryString}`;

	return url;
}
