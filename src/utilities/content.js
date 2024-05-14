"use strict";

import { DOUBLE_SPACE, EMPTY_STRING, ESCAPED_AMPERSAND, ESCAPED_LESS_THAN, ESCAPED_GREATER_THAN } from "../constants";

export function sanitiseContent(content) {
  const sanitisedContent = content
                             .replace(/&/g, ESCAPED_AMPERSAND)
                             .replace(/</g, ESCAPED_LESS_THAN)
                             .replace(/>/g, ESCAPED_GREATER_THAN);

  return sanitisedContent;
}

export function trimDoubleQuotes(content) { return content.replace(/(^"|"$)/g, EMPTY_STRING); } ///

export function convertContentTabsToWhitespace(content) { return content.replace(/\t/g, DOUBLE_SPACE); } ///

export default {
  sanitiseContent,
  trimDoubleQuotes,
  convertContentTabsToWhitespace
};
