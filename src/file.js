"use strict";

import { FILE_TYPE } from "./types";
import { convertContentTabsToWhitespace } from "./utilities/content"

export default class File {
  constructor(path, content, released) {
    this.path = path;
    this.content = content;
    this.released = released;
  }

  getPath() {
    return this.path;
  }

  getContent() {
    return this.content;
  }

  isReleased() {
    return this.released;
  }

  isFile() {
    const file = true;

    return file;
  }

  isDirectory() {
    const directory = false;

    return directory;
  }

  setPath(path) {
    this.path = path;
  }

  setContent(content) {
    this.content = content;
  }

  setReleased(released) {
    this.released = released;
  }

  matchFilePath(filePath) {
    const filePathMatches = (this.path === filePath);

    return filePathMatches;
  }

  toJSON() {
    const { type } = File,
          path = this.path,
          content = this.content,
          released = this.released,
          json = {
            type,
            path,
            content,
            released
          };

    return json;
  }

  static type = FILE_TYPE;

  static fromJSON(Class, json) {
    if (json === undefined) {
      json = Class; ///

      Class = File; ///
    }

    let file = null;

    if (json !== null) {
      const { type } = json;

      if (type === FILE_TYPE) {
        let { content } = json;

        const { path, released } = json;

        content = convertContentTabsToWhitespace(content);  ///

        file = new Class(path, content, released);
      }
    }

    return file;
  }

  static fromDocument(Class, document) {
    if (document === undefined) {
      document = Class; ///

      Class = File; ///
    }

    const filePath = document.getFilePath(),
          released = document.isReleased(),
          path = filePath;  ///

    let content = document.getContent();

    content = convertContentTabsToWhitespace(content);  ///

    const file = new Class(path, content, released);

    return file;
  }

  static fromPathContentAndReleased(Class, path, content, released) {
    if (released === undefined) {
      released = content; ///

      content = path; ///

      path = Class; ///

      Class = File; ///
    }

    content = convertContentTabsToWhitespace(content);  ///

    const file = new Class(path, content, released);

    return file;
  }
}
