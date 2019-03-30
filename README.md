# Media Tracker

Track owned media across disparate platforms

## Back-End API

| Resource   | GET (200)        | POST (201)          | PUT       | DELETE              |
| ---------- | ---------------- | ------------------- | --------- | ------------------- |
| /api/login | Get login status | Create user session | N/A (405) | Delete user session |

| /api/register

### User Login

- [] A user can log in by passing `username` and `password` in a `POST` request to `/api/login`. An object should be returned that contains success value and user data.
- [] A user can test their logged in status by sending a `GET` request to `/api/login`. A boolean value will be returned, `true` if user is currently logged in, else `false`

### Server

- [] Static can be served from `public` directory
- [] Server starts successfully

## Front-End

## Testing

## Accessibility

## Notes

### Commonly Used HTTP Codes

- `200 OK` — This is most commonly used HTTP code to show that the operation performed is successful.
- `201 CREATED` — This can be used when you use POST method to create a new resource.
- `202 ACCEPTED` — This can be used to acknowledge the request sent to the server.
- `400 BAD REQUEST` — This can be used when client side input validation fails.
- `401 UNAUTHORIZED` / `403 FORBIDDEN` — This can be used if the user or the system is not authorized to perform certain operation.
- `404 NOT FOUND` — This can be used if you are looking for certain resource and it is not available in the system.
- `405 METHOD NOT ALLOWED` - A request method is not supported for the requested resource; for example, a GET request on a form that requires data to be presented via POST, or a PUT request on a read-only resource.
- `500 INTERNAL SERVER ERROR` — This should never be thrown explicitly but might occur if the system fails.
- `502 BAD GATEWAY` — This can be used if server received an invalid response from the upstream server.
