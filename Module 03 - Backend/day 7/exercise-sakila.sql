
-- Show all data using IN, and display the country_id and country columns of the following countries: China, Bangladesh, and India
select country_id, country from country where country in ('China', 'Bangladesh', 'India');
-- Find every actors whose last names contain the letters OD. Order the rows by last name and first name, in that order
select * from actor where last_name LIKE '%OD%' ORDER BY last_name, first_name;
-- Modify table actors. Add a middle_name column to the table actor. Position it between first_name and last_name. Hint: you will need to specify the data type.
alter TABLE actor add COLUMN middle_name VARCHAR(50);
select actor_id,first_name,middle_name,last_name from actor;
-- List every last names of actors and the number of actors who have that last name, but only for names that are shared by at least two actors

select last_name,count(last_name) from actor GROUP BY last_name HAVING count(last_name) >= 2;

-- Join the table and display the first and last names, as well as the address, of each staff member.
select first_name,last_name,address from staff s
join address a on a.address_id = s.address_id;

-- Find out how many copies of the film “Hunchback Impossible” exist in the inventory system
select count(*) from film f
join inventory i on i.film_id = f.film_id
where f.title = 'ACADEMY DINOSAUR';
-- Find and display the most frequently rented movies in descending order.
select count(i.film_id), f.title from rental r
join inventory i on i.inventory_id = r.inventory_id
join film f on f.film_id = i.film_id
GROUP BY i.film_id,title
ORDER BY count(i.film_id) desc;
-- Write down a query in order to display each store its store ID, city, and country
select store_id,city,country from store s
join address a on a.address_id = s.address_id
join city ct on ct.city_id = a.city_id
join country c on c.country_id = ct.country_id;
-- Use subqueries to display every actors who appear in the film Alone Trip.
select (select concat(first_name,' ',last_name) from actor where actor_id = fm.actor_id) as fullname, f.title from film f
join film_actor fm on fm.film_id = f.film_id
where f.title = 'ALAMO VIDEOTAPE';
-- Delete the middle_name column from table actors

alter Table actor DROP COLUMN if exists middle_name;
select * from actor;