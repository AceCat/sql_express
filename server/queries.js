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

console.log(db.connect())
module.exports = {
  importCSV: importCSV,
  CSVtoJSON: CSVtoJSON
};

function CSVtoJSON(req, res, next) {
  db.any('select * from rental_rate_houston_woodlands')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function (tableName, csvLocation) {
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
}