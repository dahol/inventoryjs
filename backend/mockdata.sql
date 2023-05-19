-- Insert data

insert into items(
    name, description)
select
    left(md5(i::text), 10),
    left(md5(random()::text), 4)
from generate_series(1, 1000000) s(i)

-- Check db size


SELECT pg_size_pretty( pg_database_size('inventory') );