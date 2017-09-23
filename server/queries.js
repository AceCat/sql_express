var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/nousot_test';
var db = pgp(connectionString);

// add query functions

db.connect()

module.exports = {
  importCSV: importCSV,
  CSVtoJSON: CSVtoJSON,
  importForecastCSV: importForecastCSV,
  forecastCSVtoJSON: forecastCSVtoJSON
};

function CSVtoJSON(req, res, next) {
  db.any('select * from rental_rate_houston_woodlands')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved actual data'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function importCSV(req, res, next) {
  db.any("\COPY rental_rate_houston_woodlands FROM '/Users/bennjaminmyers/codingChallenges/nousot/server/csv/actuals.csv' WITH (FORMAT csv)")
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Imported CSV'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function importForecastCSV(req, res, next) {
  db.any("\COPY rental_rate_houston_woodlands_forecast FROM '/Users/bennjaminmyers/codingChallenges/nousot/server/csv/forecast.csv' WITH (FORMAT csv)")
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Imported forecast CSV'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function forecastCSVtoJSON(req, res, next) {
  db.any('select * from rental_rate_houston_woodlands_forecast')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved forecast data'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}