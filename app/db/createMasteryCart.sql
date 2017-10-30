create table masterycart (
	id serial primary key,
    item_id integer,
    name text,
    category text,
    price integer NOT NULL
	);

/* databases can be affected by data types by way of foreign intrusion. 
if you don't limit your datatype to what you only need then you 
leave yourself open to injection attacks, or even just bad data that you
weren't expecting the user to give you.
*/
/* i used price integer because i wanted to store them as numbers instead of a string, that way i can more easily get totals of cart */
