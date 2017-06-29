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

## Validation example

Add a file to your project that exposes a validator like this:

``` js
const Validator = require('jsonschema').Validator;
const publicApiJsonSchema = require('@safetyculture/api-json-schemas');

function createValidator() {
  const validator = new Validator();

  const SUB_SCHEMAS = [
    publicApiJsonSchema.definitions,
    publicApiJsonSchema.geometry
  ];

  SUB_SCHEMAS.forEach((subSchema) => {
    validator.addSchema(subSchema);
  });

  return validator;
}

/**
 * Checks if 'doc' is in a valid API audit JSON format.
 *
 * @param doc {Object} to check
 * @param options {Object} see json-schema.org for configuration options
 * @return {ValidatorResult} the result of validation against the schema (see the jsonschema NPM module for details)
 */
module.exports = function validate(doc, options) {
  if (!doc || typeof doc !== 'object') {
    throw new Error('Input to API schema validation function is not an object');
  }

  const validator = createValidator();
  return validator.validate(doc, publicApiJsonSchema.audit, options);
};
```