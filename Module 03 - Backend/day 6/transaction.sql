
-- 1 function menciptakan/insert 2 table. 
        -- 1 data transaction
        -- bbrp data transaction_detail


-- transaction (id,order_number,date,user_id)
-- transaction_detail (product_id,qty, transaction_id)
BEGIN;

with new_actor as (
insert into actor (first_name,last_name) VALUES('rudy','tabuti') returning  actor_id)


-- 300, rudy,tabuti, 2025-01-15
-- select actor_id from new_actor -> 300


insert into film_actor (film_id,actor_id) VALUES(5, (select actor_id from inserted));
COMMIT;
END;

BEGIN;
TRUNCATE film_actor;
ROLLBACK;
END;

select * from film_actor;
select * from actor order by actor_id DESC limit 1;
-- 
-- select * from actor order by actor_id DESC limit 1;

-- COMMIT;

transaction_header id, order_number, purchase_date, total
        1, 'trx001', '2025-01-15', 65000

transaction_detail id, product_id, product_price, qty, transaction_id
                1,1,5000,3 , 1
                2, 3, 10000, 5, 1

insert transaction 

insert transaction_detail sebanyak barang

-- transaction



