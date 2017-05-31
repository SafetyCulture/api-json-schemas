SafetyCulture API JSON schemas
==============================

## Usage

```sh
npm install @safetyculture/api-json-schemas
```

```js
const validateApiAudit = require('@safetyculture/api-json-schemas');

var result = validateApiAudit(require('./api-audit.json'), options);
console.log(result.errors);
```

Possible `options` are:
* propertyName
* base
* skipAttributes
* allowUnknownAttributes
* rewrite
