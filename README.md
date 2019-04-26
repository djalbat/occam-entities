# File system

[Occam](https://github.com/jecs-imperial/occam)'s file system functionality.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Building](#building)
- [Contact](#contact)

## Introduction

This package provides a consistent interface for the [`open`](https://github.com/jecs-imperial/occam-open-cli) command line tool's own file and project functionality, as well as providing additional functionality to move and remove project entries.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-file-system

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/jecs-imperial/occam-file-system.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

## Usage

```js
const filesystem = require('occam-file-system');

const { loadFiles } = filesystem;

const paths = ...,
      projectsDirectoryPath = ...;

loadFiles(paths, projectsDirectoryPath, function(files) {
 ...
});
```

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
