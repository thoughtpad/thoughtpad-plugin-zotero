thoughtpad-plugin-zotero
========================

[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

A thoughtpad plugin that adds embedded metadata to pages to be used by Zotero

## Usage

The plugin should be loaded using the [thoughtpad-plugin-manager](https://github.com/thoughtpad/thoughtpad-plugin-manager). Once this has been done then the plugin will respond to events. To use standalone:

```JavaScript
var man = require('thoughtpad-plugin-manager'),
    zotero = require('thoughtpad-plugin-zotero');

yield thoughtpad.notify("initialise-complete"); // This call will add the Zotero function call for during compile time
```

## Usage

Zotero captures information based on the [Dublin Core](http://dublincore.org/) and the [Highwire](http://scholar.google.co.uk/intl/en/scholar/inclusion.html) systems. Mixing and matching seems to lead to the best results when Zotero tries to obtain all the information. An example structure to add to the page object in the config file is as follows:

```JavaScript
pages: {
	'blog-post-1': {
		title: 'Academic article title',
		url: 'blog-post-1.html',
		date: '2001-01-01',
		zotero: {
			'dc.creator': '', // The author of the article
			'dc.title': '', // The title of the article
			'dc.date': '', // The published date of the article
			'citation_abstract': '', // A brief description of the article
			'dc.language': '', // The language of the article
			'dc.type': '', // The item type for use in Zotero (e.g. blogPost)
			'citation_journal_title': '' // The website name/title
		}
	}
}
```

All keys held in the `zotero` object can be automatically injected into the `head` html using a function that the plugin injects. If using coffeekup, this function can be called during compile time as follows:

`text @func.getZoteroMetaData(@document)`

The output of the above function will be:

```Html
<meta content="English" name="dc.language" />
...
```

Therefore it is possible to use any meta key supported by Zotero that isn't listed here. Check the appropriate documentation to find out all possible keys.

## Tests

Ensure you have globally installed mocha - `npm -g install mocha`. Then you can run:

`mocha --harmony-generators`

Alternatively if you are in a *NIX environment `npm test` will run the tests plus coverage data.

## License

The code is available under the [MIT license](http://deif.mit-license.org/).

[travis-image]: https://img.shields.io/travis/thoughtpad/thoughtpad-plugin-zotero/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/thoughtpad/thoughtpad-plugin-zotero
[coveralls-image]: https://img.shields.io/coveralls/thoughtpad/thoughtpad-plugin-zotero/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/thoughtpad/thoughtpad-plugin-zotero?branch=master