INSERT INTO users
(first_name, last_name, age, email, username, hash, has_dog)
VALUES ($1, $2, $3, $4, $5, $6, false)
RETURNING *;