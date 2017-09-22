DROP DATABASE IF EXISTS nousot_test;
CREATE DATABASE nousot_test;

\c nousot_test;

CREATE TABLE rental_rate_houston_woodlands (real_estate_date DATE, rental_rate DOUBLE PRECISION);