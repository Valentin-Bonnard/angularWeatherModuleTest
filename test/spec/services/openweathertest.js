'use strict';

describe('Service: openWeatherTest', function () {

  // load the service's module
  beforeEach(module('weatherTestApp'));

  // instantiate service
  var openWeatherTest;
  beforeEach(inject(function (_openWeatherTest_) {
    openWeatherTest = _openWeatherTest_;
  }));

  it('should do something', function () {
    expect(!!openWeatherTest).toBe(true);
  });

});
