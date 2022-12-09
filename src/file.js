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

  static fromJSON(json) {
    let file = null;

    if (json !== null) {
      const { type } = json;

      if (type === FILE_TYPE) {
        let { content } = json;

        const { path, released } = json;

        content = convertContentTabsToWhitespace(content);  ///

        file = new File(path, content, released);
      }
    }

    return file;
  }

  static fromDocument(document) {
    const filePath = document.getFilePath(),
          released = document.isReleased(),
          path = filePath;  ///

    let content = document.getContent();

    content = convertContentTabsToWhitespace(content);  ///

    const file = new File(path, content, released);

    return file;
  }

  static fromPathContentAndReleased(path, content, released) {
    content = convertContentTabsToWhitespace(content);  ///

    const file = new File(path, content, released);

    return file;
  }
}
