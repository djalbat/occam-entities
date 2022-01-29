"use strict";

import { Readable } from "stream";

import { methods, headers, contentTypes, statusCodes, requestUtilities } from "necessary";

import { END, DATA, EMPTY_STRING } from "../constants";

const { POST_METHOD } = methods,
      { createRequest } = requestUtilities,
      { OK_200_STATUS_CODE } = statusCodes,
      { CONTENT_TYPE_HEADER } = headers,
      { APPLICATION_JSON_CHARSET_UTF8_CONTENT_TYPE } = contentTypes;

export function post(host, uri, query, json, callback) {
	const content = JSON.stringify(json),	///
				method = POST_METHOD,
				headers = {},
				contentType = APPLICATION_JSON_CHARSET_UTF8_CONTENT_TYPE;

	headers[CONTENT_TYPE_HEADER] = contentType;

	const request = createRequest(host, uri, query, method, headers, (error, response) => {
					if (response === null) {
						error = true;
					} else {
						const { statusCode } = response;

						if (statusCode !== OK_200_STATUS_CODE) {
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
