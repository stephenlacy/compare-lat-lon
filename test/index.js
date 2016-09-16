'use strict';

const lab = exports.lab = require('lab').script();
const code = require('code');
const PROJECT_NAME = 'compare-lat-lon';
const project = require('..');

lab.experiment(PROJECT_NAME, () => {
  lab.test('valid distance', (done) => {
    code
      .expect(project('37.795831', '-122.396472', '40.767904', '-73.975448'))
      .to.equal(4127.676959594074);
    done();
  })

  lab.test('error', (done) => {
    code.expect(project(12, 23, 24)).to.be.an.error();
    done();
  });
});
