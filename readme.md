<div align="center">
	<h1>split-css-value</h1>
	<p>Split a comma-separated CSS value into an array of single values</p>
</div>

[![NPM Version](https://img.shields.io/npm/v/split-css-value.svg)](https://www.npmjs.com/package/split-css-value)
[![Weekly downloads](https://img.shields.io/npm/dw/split-css-value.svg)](https://www.npmjs.com/package/split-css-value)
[![Build Status](https://travis-ci.org/bartveneman/split-css-value.svg?branch=master)](https://travis-ci.org/bartveneman/split-css-value)
[![Known Vulnerabilities](https://snyk.io/test/github/bartveneman/split-css-value/badge.svg)](https://snyk.io/test/github/bartveneman/split-css-value)
![Dependencies Status](https://img.shields.io/david/bartveneman/split-css-value.svg)
![Dependencies Status](https://img.shields.io/david/dev/bartveneman/split-css-value.svg)
[![Project: Wallace](https://img.shields.io/badge/Project-Wallace-29c87d.svg)](https://www.projectwallace.com/oss)

## Installation

```sh
npm install split-css-value
```

## Usage

```js
const splitValue = require('split-css-value')
const values = splitValue('color 2s, background 4s linear 1s')

console.log(values)
//=> ['color 2s', 'background 4s linear 1s']
```
