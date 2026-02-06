"use strict";

import { pathUtilities, arrayUtilities } from "necessary";

import File from "./file";
import Files from "./files";
import Directory from "./directory";
import bnfMixins from "./mixins/bnf";
import filesMixins from "./mixins/files";
import metaJSONMixins from "./mixins/metaJSON";
import vocabularyMixins from "./mixins/vocabulary";

const { first, filter } = arrayUtilities,
      { topmostDirectoryNameFromPath } = pathUtilities;

class Entries {
  constructor(array) {
    this.array = array;
  }

  getArray() {
    return this.array;
  }

  getTopmostDirectoryName() {
    let topmostDirectoryName = null;
    
    const firstEntry = first(this.array); ///

    if (firstEntry) { ///
      const firstEntryPath = firstEntry.getPath();

      topmostDirectoryName = topmostDirectoryNameFromPath(firstEntryPath);

      if (topmostDirectoryName === null) {
        topmostDirectoryName = firstEntryPath;  ///
      }
    }

    return topmostDirectoryName;
  }

  removeFileByPath(path) {
    filter(this.array, (entry) => {
      const entryFile = entry.isFile();

      if (entryFile) {
        const file = entry, ///
              filePath = file.getPath();

        if (filePath === path) {
          return false;
        }
      }

      return true;
    });
  }

  findFile(filePath) {
    const files = this.getFiles(),
          file = files.findFile((file) => {
            const filePathMatches = file.matchFilePath(filePath);

            if (filePathMatches) {
              return true;
            }
          }) || null;

    return file;
  }

  getFiles() {
    const files = Files.fromNothing();

    this.mapEntry((entry) => {
      const entryFile = entry.isFile();

      if (entryFile) {
        const file = entry; ///

        files.addFile(file);
      }
    });

    return files;
  }

  getFilePaths() {
    const filePaths = this.reduceEntry((filePaths, entry) => {
      const entryFile = entry.isFile();

      if (entryFile) {
        const file = entry, ///
              filePath = file.getPath();

        filePaths.push(filePath);
      }

      return filePaths;
    }, []);

    return filePaths;
  }

  getDirectoryPaths() {
    const directoryPaths = this.reduceEntry((directoryPaths, entry) => {
      const entryDirectory = entry.isDirectory();

      if (entryDirectory) {
        const directory = entry, ///
              directoryPath = directory.getPath();

        directoryPaths.push(directoryPath);
      }

      return directoryPaths;
    }, []);

    return directoryPaths;
  }

  matchShortenedVersion(shortenedVersion) {
    const version = this.getVersion(),
          versionMatchesShortenedVersion = version.matchShortenedVersion(shortenedVersion);

    return versionMatchesShortenedVersion;
  }

  addFile(file) {
    const entry = file; ///

    this.addEntry(entry);
  }

  addEntry(entry) { this.array.push(entry); }

  addDirectory(directory) {
    const entry = directory;  ///

    this.addEntry(entry);
  }

  forEachFile(callback) {
    const files = this.getFiles();

    files.forEachFile(callback);
  }

  mapEntry(callback) { return this.array.map(callback); }

  someEntry(callback) { return this.array.some(callback); }

  everyEntry(callback) { return this.array.every(callback); }

  forEachEntry(callback) { this.array.forEach(callback); }

  reduceEntry(callback, initialValue) { return this.array.reduce(callback, initialValue); }

  toJSON() {
    const entriesJSON = this.array.map((entry) => {
            const entryJSON = entry.toJSON();
  
            return entryJSON;
          }),
          json = entriesJSON; ///

    return json;
  }

  static fromJSON(json) {
    const array = [],
          entries = new Entries(array),
          entriesJSON = json; ///

    entriesJSON.map((entryJSON) => {
      const json = entryJSON, ///
            file = File.fromJSON(json),
            directory = Directory.fromJSON(json),
            entry = file || directory;  ///

      entries.addEntry(entry);
    });

    return entries;
  }

  static fromEntry(entry) {
    const array = [
            entry
          ],
          entries = new Entries(array);

    return entries;
  }

  static fromNothing() {
    const array = [],
          entries = new Entries(array);

    return entries;
  }
}

Object.assign(Entries.prototype, bnfMixins);
Object.assign(Entries.prototype, filesMixins);
Object.assign(Entries.prototype, metaJSONMixins);
Object.assign(Entries.prototype, vocabularyMixins);

export default Entries;
