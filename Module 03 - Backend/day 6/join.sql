-- Active: 1736650816665@@aws-0-ap-southeast-1.pooler.supabase.com@5432@sakila

SELECT * from customer

SELECT * from address

SELECT first_name, last_name, city, address from customer c
JOIN address a on a.address_id = c.address_id and c.active = 1
JOIN city ct on ct.city_id = a.city_id

SELECT first_name, last_name,address from customer c
JOIN address a on a.address_id = c.address_id
WHERE c.active = 1

SELECT c.first_name, c.last_name, a.first_name, a.last_name from customer c
left join actor a on a.last_name = c.last_name

SELECT c.customer_id , a.actor_id from customer c
left join actor a on a.first_name = c.first_name

SELECT c.customer_id , a.actor_id from customer c
join actor a on a.first_name = c.first_name

SELECT c.customer_id , a.actor_id from customer c
right join actor a on a.first_name = c.first_name