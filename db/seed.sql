-- auth
-- checkForUsername
SELECT * FROM users
WHERE username = $1;
-- registerUser
INSERT INTO users
(first_name, last_name, email, username, hash, has_dog)
VALUES ($1, $2, $3, $4, $5, false)
RETURNING *;

-- Create users table
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  age INT NOT NULL,
  email VARCHAR(255) NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  hash TEXT NOT NULL
)

-- add has_dog
ALTER TABLE users
ADD COLUMN has_dog BOOL;

-- Create dogalogue table
CREATE TABLE dogalogue (
  dog_id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  img TEXT NOT NULL,
  price INT NOT NULL,
  breed VARCHAR(50) NOT NULL,
  size VARCHAR(20) NOT NULL,
  description VARCHAR(500) NOT NULL
)

-- Create cart table
CREATE TABLE cart (
  cart_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES user_id(users),
  dog_id INT NOT NULL REFERENCES dog_id(dogalogue)
)

-- Create orders table
CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  date INT NOT NULL,
  user_id INT NOT NULL REFERENCES user_id(users);
  cart_id INT NOT NULL REFERENCES cart_id(cart);
  dog_id INT NOT NULL REFERENCES dog_id(dogalogue)
)

-- Create dog_stats table
CREATE TABLE dog_stats (
  dog_id INT NOT NULL REFERENCES dog_id(dogalogue),
  user_id INT NOT NULL REFERENCES user_id(users),
  overall_health INT NOT NULL,
  hunger INT NOT NULL,
  hygience INT NOT NULL,
  affection INT NOT NULL,
  hydration INT NOT NULL,
  exercise INT NOT NULL,
  mood INT NOT NULL,
  age INT NOT NULL
)