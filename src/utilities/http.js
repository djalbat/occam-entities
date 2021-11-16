"use strict";

import { Readable } from "stream";

import { requestUtilities } from "necessary";

const { request: makeRequest } = requestUtilities;

import { POST_METHOD } from "../methods";
import { OKAY_200_STATUS_CODE } from "../statusCodes";
import { APPLICATION_JSON_CHARSET_UTF8_CONTENT_TYPE } from "../contentTypes"
import { END, DATA, EMPTY_STRING, CONTENT_TYPE, CONTENT_LENGTH } from "../constants";

export function post(host, uri, query, json, callback) {
	const content = JSON.stringify(json),	///
				method = POST_METHOD,
				headers = {},
				contentType = APPLICATION_JSON_CHARSET_UTF8_CONTENT_TYPE,
				contentLength = content.length;

	headers[CONTENT_TYPE] = contentType;

	headers[CONTENT_LENGTH] = contentLength;

	const request = makeRequest(host, uri, query, method, headers, (error, response) => {
					const { statusCode } = response;

					error = error || (statusCode !== OKAY_200_STATUS_CODE);

					if (error) {
						const json = null;

						callback(json);

						return;
					}

					contentFromResponse(response, (content) => {
						let json = null;

						try {
							json = JSON.parse(content);
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

function contentFromResponse(response, callback) {
	let content = EMPTY_STRING;

	response.on(DATA, (data) => {
		content += data;
	});

	response.on(END, () => {
		callback(content);
	});
}
