"use strict";

import { Readable } from "stream";

import { requestUtilities } from "necessary";

const { request: makeRequest } = requestUtilities;

import { POST_METHOD } from "../methods";
import { OKAY_200_STATUS_CODE } from "../statusCodes";
import { END, DATA, EMPTY_STRING, CONTENT_TYPE } from "../constants";
import { APPLICATION_JSON_CHARSET_UTF8_CONTENT_TYPE } from "../contentTypes"

export function post(host, uri, query, json, callback) {
	const content = JSON.stringify(json),	///
				method = POST_METHOD,
				headers = {},
				contentType = APPLICATION_JSON_CHARSET_UTF8_CONTENT_TYPE;

	headers[CONTENT_TYPE] = contentType;

	const request = makeRequest(host, uri, query, method, headers, (error, response) => {
					if (response === null) {
						error = true;
					} else {
						const { statusCode } = response;

						if (statusCode !== OKAY_200_STATUS_CODE) {
							error = true;
						}
					}

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
