# compare-lat-lon

[![Build Status](https://travis-ci.org/stevelacy/bump-regex.png?branch=master)](https://travis-ci.org/stevelacy/compare-lat-lon)
[![NPM version](https://badge.fury.io/js/bump-regex.png)](http://badge.fury.io/js/compare-lat-lon)

> Compares the distance between two sets of coordinates

> adapted from http://stackoverflow.com/a/18170277

## Information

<table>
<tr>
<td>Package</td><td>compare-lat-lon</td>
</tr>
<tr>
<td>Description</td>
<td>
  Compares the distance between two sets of coordinates
  <br />
  Also calculates the radius of the earth</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 4</td>
</tr>
</table>

## Usage

#### Install

```sh
$ npm install --save compare-lat-lon
```

```js

var compare = require('compare-lat-lon');

compare('37.795831', '-122.396472', '40.767904', '-73.975448'); // => 4127.676959594074
```

## LICENSE [MIT](LICENSE)
