const _ = require('lodash');
const expect = require('chai').expect;
const requireAll = require('require-all');
const path = require('path');
const validateApiAudit = require('./');

describe('fails validation for invalid audits', () => {
  const fixtureAudits = requireAll(path.join(__dirname, '/fixtures/fail'));
  _.forEach(fixtureAudits, (apiAudit) => {
    it('invalid audit', done => {
      expect(validateApiAudit(apiAudit).errors).to.not.be.empty;
      done();
    });
  });
});

describe('fails validation for valid audits', () => {
  const fixtureAudits = requireAll(path.join(__dirname, '/fixtures/pass'));
  _.forEach(fixtureAudits, (apiAudit) => {
    it('valid audit', done => {
      expect(validateApiAudit(apiAudit).errors).to.be.empty;
      done();
    });
  });
});

describe('API audit validation extra __tests__', () => {
  it('throws if the audit to test is not an object', () => {
    expect(() => validateApiAudit(undefined)).to.throw(/not an object/);
  });

  it('validates an API audit with weather information', () => {
    expect(validateApiAudit(require('./fixtures/pass/weather.json')).errors).to.be.empty;
  });

  it('detects the correct number of errors in an invalid audit', () => {
    const errors = validateApiAudit(require('./fixtures/fail/invalid-example.json')).errors;
    if (errors.length !== 5) {
      console.error(errors);
    }
    expect(errors).to.have.length(5);
  });
});
