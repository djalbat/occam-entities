# File system

[Occam](https://github.com/jecs-imperial/occam)'s file system functionality.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Building](#building)
- [Contact](#contact)

## Introduction

This package provides a consistent interface for the [`open`](https://github.com/jecs-imperial/occam-open-cli) command line tool's own file and project functionality, as well as providing additional functions to move and remove project entries. Aside from these last two functions, it is unlikely to be of interest to anyone.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-file-system

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/jecs-imperial/occam-file-system.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

## Usage

Look in the `es6/` directory for the function signatures. The exported functions are:

* `importProject()`
* `saveFiles()`
* `saveFile()`
* `loadFile()`
* `loadFiles()`
* `loadProjects()`
* `moveProjectEntries()`
* `removeProjectEntries()`

Typical usage is shown below:

```js
const open = require('occam-open-cli'), ///
      filesystem = require('occam-file-system'); ///

const { Files } = open,
      { loadFiles } = filesystem;

const filePaths = ...,
      projectsDirectoryPath = ...,
      json = {
        filePaths
      };

loadFiles(projectsDirectoryPath, json, function(json) {
 const files = (json !== null) ?
                 Files.fromJSON(json) :
                   null;

  ...
});
```

Note that you get JSON back, not an instance of the `Files` class, and that that JSON might be `null`.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
