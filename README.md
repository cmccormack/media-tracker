# media-tracker
Track owned media across disparate platforms


## Task List

### Back-End
#### User Login

| Resource   | GET       | POST | PUT | DELETE |
| ---------- | --------- | ---- | --- | ------ |
| /api/login | N/A (405) |  Log user in | 


- [] A user can log in by passing `username` and `password` in a `POST` request to `/api/login`.  An object should be returned that contains success value and user data.
- [] A user can test their logged in status by sending a `GET` request to `/api/login`.  A boolean value will be returned, `true` if user is currently logged in, else `false`


#### Server
- [] Static can be served from `public` directory
- [] Server starts successfully

### Front-End

### Testing

### Accessibility