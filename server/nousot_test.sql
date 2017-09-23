DROP DATABASE IF EXISTS nousot_test;
CREATE DATABASE nousot_test;

\c nousot_test;

CREATE TABLE rental_rate_houston_woodlands (real_estate_date VARCHAR(10), rental_rate DOUBLE PRECISION);

CREATE TABLE rental_rate_houston_woodlands_forecast (real_estate_date VARCHAR(10), rental_rate DOUBLE PRECISION, confidence_6 DOUBLE PRECISION, confidence_12 DOUBLE PRECISION, confidence_18 DOUBLE PRECISION)