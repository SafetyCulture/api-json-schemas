SafetyCulture API JSON schemas
==============================

## Usage

```sh
npm install @safetyculture/api-json-schemas
```

```js
const safetyCultureApiJsonSchemas = require('@safetyculture/api-json-schemas');

// Outputs the audit public JSON schema
console.log(safetyCultureApiJsonSchemas.audit);

// Outputs common definition schemas used in the audit public JSON schema
console.log(safetyCultureApiJsonSchemas.definitions);

// Outputs the geometry schema used to represent audit location properties
console.log(safetyCultureApiJsonSchemas.geometry);

```
