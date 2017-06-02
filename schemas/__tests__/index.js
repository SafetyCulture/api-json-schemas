const Validator = require('jsonschema').Validator;

function createValidator() {
  let validator = new Validator();

  const SCHEMAS = [
    '../../schemas/definitions.json',
    '../../schemas/geometry.json'
  ];

  SCHEMAS.forEach((schema) => {
    validator.addSchema(require(`${schema}`));
  });

  return validator;
}

/**
 * Checks if 'doc' is in a valid API audit JSON format.
 * @param doc {Object} to check
 * @param options {Object} see json-schema.org for configuration options
 * @return {void|ValidatorResult|Array} true if the 'doc' is valid
 */
module.exports = function (doc, options) {
  if (!doc || typeof doc !== 'object') {
    throw new Error('Input to validateApiAudit is not an object');
  }

  let validator = createValidator();
  return validator.validate(doc, require('../../schemas/audit.json'), options);
};
