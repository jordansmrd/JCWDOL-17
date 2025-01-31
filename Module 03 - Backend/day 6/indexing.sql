CREATE INDEX idx_firstname ON actor (first_name);

SELECT * from actor WHERE first_name = 'NICK';

SELECT * from actor WHERE first_name like 'N%';

SELECT count(*) from actor 