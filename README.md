# Occam Entities

Parts of [Occam](https://github.com/djalbat/occam)'s model.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Building](#building)
- [Contact](#contact)

## Introduction

Parts of Occam's model, such as files, projects, versions and so on.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-model

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/occam-model.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Usage

The exported classes are:

* `File`
* `Files`
* `Version`
* `Entries`
* `Project`
* `Release`
* `Projects`
* `Releases`
* `Dependency`
* `Dependencies`
* `ShortenedVersion`

There are also some utilities:

* `contentUtilities`
* `filePathUtilities`
* `metaJSONUtilities`

The classes have factory methods, see the source for details. Typical usage is:

```
const { File }} = require('occam-model');

const json = ... ,
      file = file.fromJSON(json);

...
```

See the source for further information on the utilities.

In short, this package has little of use and only a little more of interest. 

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com

