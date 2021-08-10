"use strict";

import { Readable } from "stream";

import { requestUtilities } from "necessary";

const { post: postEx } = requestUtilities;

import { END, DATA, OKAY_200, EMPTY_STRING, CONTENT_LENGTH } from "../constants";

export function post(host, uri, parameters, json, callback) {
	const content = JSON.stringify(json),	///
				contentLength = content.length,
				headers = {};

	headers[CONTENT_LENGTH] = contentLength;

	const request = postEx(host, uri, parameters, headers, (error, response) => {
					const { statusCode } = response;

					error = error || (statusCode !== OKAY_200);

					if (error) {
						const json = null;

						callback(json);

						return;
					}

					bodyFromResponse(response, (body) => {
						let json = null;

						try {
							json = JSON.parse(body);
						} catch (error) {}	///

						callback(json);
					});
				}),
				readable = Readable.from(content);

	readable.pipe(request);
}

export default {
	post
};

function bodyFromResponse(response, callback) {
	let body = EMPTY_STRING;

	response.on(DATA, (data) => {
		body += data;
	});

	response.on(END, () => {
		callback(body);
	});
}
