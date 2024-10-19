CREATE TABLE IF NOT EXISTS "rooms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(100) NOT NULL,
	"description" varchar(500) NOT NULL,
	"address" varchar(250) NOT NULL,
	"availability" varchar(100) NOT NULL,
	"sqft" varchar(25),
	"capacity" varchar(25),
	"location" varchar(250),
	"price_per_hour" varchar(25) NOT NULL,
	"amenities" varchar(500),
	"image" varchar(2048) NOT NULL
);
