CREATE TYPE "gender" AS ENUM (
  'male',
  'female'
);

CREATE TYPE "fine_status" AS ENUM (
  'lost',
  'late'
);

CREATE TYPE "stock_status" AS ENUM (
  'available',
  'rented',
  'lost'
);

CREATE TABLE "member" (
  "id" integer PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "join_date" datetime,
  "detail_id" int
);

CREATE TABLE "detail_info" (
  "id" int PRIMARY KEY,
  "id_card" varchar UNIQUE,
  "address" varchar,
  "gender" gender,
  "phone_number" varchar,
  "email" varchar UNIQUE
);

CREATE TABLE "staff" (
  "id" integer PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "is_active" bool,
  "detail_id" int
);

CREATE TABLE "staff_schedule" (
  "id" integer PRIMARY KEY,
  "start_schedule_date" timestamp,
  "end_schedule_date" timestamp,
  "staff_id" int,
  "branch_id" int
);

CREATE TABLE "book" (
  "id" integer PRIMARY KEY,
  "title" varchar,
  "author" varchar,
  "publisher" varchar,
  "release_date" timestamp
);

CREATE TABLE "branch" (
  "id" integer PRIMARY KEY,
  "branch" varchar,
  "address" varchar,
  "postal_code" int,
  "city" varchar
);

CREATE TABLE "transaction" (
  "id" integer PRIMARY KEY,
  "no_invoice" varchar,
  "transaction_date" timestamp,
  "total_price" double,
  "branch_id" int,
  "member_id" int,
  "staff_id" int
);

CREATE TABLE "transaction_detail" (
  "id" integer PRIMARY KEY,
  "book_id" int,
  "transaction_id" int,
  "rent_date" timestamp,
  "due_date" timestamp,
  "price" double
);

CREATE TABLE "fine" (
  "member_id" int,
  "transactionDetail_id" int,
  "status" fine_status,
  "is_paid" bool,
  "fine" double,
  PRIMARY KEY ("member_id", "transactionDetail_id")
);

CREATE TABLE "stock" (
  "id" int PRIMARY KEY,
  "book_id" int,
  "transaction_id" int,
  "branch_id" int,
  "status" stock_status,
  "stock" int
);

CREATE TABLE "detail_info_member" (
  "detail_info_id" int,
  "member_detail_id" int,
  PRIMARY KEY ("detail_info_id", "member_detail_id")
);

ALTER TABLE "detail_info_member" ADD FOREIGN KEY ("detail_info_id") REFERENCES "detail_info" ("id");

ALTER TABLE "detail_info_member" ADD FOREIGN KEY ("member_detail_id") REFERENCES "member" ("detail_id");


CREATE TABLE "detail_info_staff" (
  "detail_info_id" int,
  "staff_detail_id" int,
  PRIMARY KEY ("detail_info_id", "staff_detail_id")
);

ALTER TABLE "detail_info_staff" ADD FOREIGN KEY ("detail_info_id") REFERENCES "detail_info" ("id");

ALTER TABLE "detail_info_staff" ADD FOREIGN KEY ("staff_detail_id") REFERENCES "staff" ("detail_id");


ALTER TABLE "staff_schedule" ADD FOREIGN KEY ("staff_id") REFERENCES "staff" ("id");

ALTER TABLE "staff_schedule" ADD FOREIGN KEY ("branch_id") REFERENCES "branch" ("id");

ALTER TABLE "transaction" ADD FOREIGN KEY ("branch_id") REFERENCES "branch" ("id");

ALTER TABLE "transaction" ADD FOREIGN KEY ("member_id") REFERENCES "member" ("id");

ALTER TABLE "transaction" ADD FOREIGN KEY ("staff_id") REFERENCES "staff" ("id");

ALTER TABLE "transaction_detail" ADD FOREIGN KEY ("book_id") REFERENCES "book" ("id");

ALTER TABLE "transaction_detail" ADD FOREIGN KEY ("transaction_id") REFERENCES "transaction" ("id");

ALTER TABLE "fine" ADD FOREIGN KEY ("member_id") REFERENCES "member" ("id");

ALTER TABLE "fine" ADD FOREIGN KEY ("transactionDetail_id") REFERENCES "transaction_detail" ("id");

ALTER TABLE "stock" ADD FOREIGN KEY ("book_id") REFERENCES "book" ("id");

ALTER TABLE "stock" ADD FOREIGN KEY ("transaction_id") REFERENCES "transaction" ("id");

ALTER TABLE "stock" ADD FOREIGN KEY ("branch_id") REFERENCES "branch" ("id");
