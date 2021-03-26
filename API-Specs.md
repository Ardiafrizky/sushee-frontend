# SUSHEE's API Spec
## Food
### Get All Foods
**Method:** GET
**URL:** /api/v1/foods

**Description:** 
This endpoint will return a list of food object

**Success Response**
```json
response: {
	status: 200,
	message: "OK",
	data: [
		{
			"id": 123,
			"name": "Salmon Maki Roll",
			"description": "Rolled rice with salmon and cucumber, wrapped inside a nori maki",
			"stock": 84,
			"image": "https://linktoimage"
		},
		{
			"id": 124,
			"name": "Tuna Nigiri",
			"description": "Rice with a topping of a fresh tuna slice",
			"stock": 34,
			"image": "https://linktoimage"
		},
		...
	]
}
```

**Failed Response**   
```json
 response: {
	"timestamp": "2020-11-30T09:56:35.815+0000" ,
	"status": 400 ,
	"error": "Bad Request" ,
	"message": "Request body has invalid type or missing field" ,
	"path": "/api/v1/foods"
}
```
---
### Get Food By Id
**Method:** GET
**URL:** /api/v1/foods/{id}

**Description:** 
This endpoint will return a food object with an ID of {foodID} integer.

**Success Response**
```json
response: {
	status: 200,
	message: "OK",
	data: {
		"id": 123,
		"name": "Salmon Maki Roll",
		"description": "Rolled rice with salmon and cucumber, wrapped inside a nori maki",
		"stock": 84,
		"image": "https://linktoimage"
	}
}
```

**Failed Response**   
```json
 response: {
	"timestamp": "2020-11-30T09:56:35.815+0000" ,
	"status": 400 ,
	"error": "Bad Request" ,
	"message": "Request body has invalid type or missing field" ,
	"path": "/api/v1/foods/{foodID}"
}
```
---
### Post Food
**Method:** POST
**URL:** /api/v1/food/{id}

**Description:** 
This endpoint will posts a food object to the server. If the id are matched, the mathced food object will be updated. If the id are not matched, a new food object will be created.

**Request's Body**
```json
body: {
	"id": 123,
	"name": "Salmon Maki Roll",
	"description": "Rolled rice with salmon and cucumber, wrapped inside a nori maki",
	"stock": 84,
	"image": "https://linktoimage"
}
```

**Success Response**
```json
response: {
	status: 200,
	message: "OK",
	data: {
		"id": 123,
		"name": "Salmon Maki Roll",
		"description": "Rolled rice with salmon and cucumber, wrapped inside a nori maki",
		"stock": 84,
		"image": "https://linktoimage"
	}
}
```

**Failed Response**   
```json
 response: {
	"timestamp": "2020-11-30T09:56:35.815+0000" ,
	"status": 400 ,
	"error": "Bad Request" ,
	"message": "Request body has invalid type or missing field" ,
	"path": "/api/v1/food/{id}"
}
```
---
## Reservation
---
## Order
### Get Order
**Method:** GET
**URL:** /api/v1/order

**Description:** 
This endpoint will send a token to get current user's order list

**Request's Body**
```json
body: {
	"user": {
		"email": user@future.com,
		"password": "******"
	},
	"token": "13HI786YFU8P"
}
```

**Success Response**
```json
response: {
	status: 200,
	message: "OK",
	"order": {
		"token": "123OIH87H9",
		"order-list": [
			"id": 123,
			"name": "Salmon Maki Roll",
			"quantity": 3
		},
		{
			"id": 131,
			"name": "Nigiri Maki Roll",
			"quantity": 5
		},
		...
	]
}
```

**Failed Response**   
```json
 response: {
	"timestamp": "2020-11-30T09:56:35.815+0000" ,
	"status": 400 ,
	"error": "Bad Request" ,
	"message": "Request body has invalid type or missing field" ,
	"path": "/api/v1/order"
}
```
---
### Post Order
**Method:** POST
**URL:** /api/v1/order

**Description:** 
This endpoint will send a token and an order to be added to the user's order list

**Request's Body**
```json
body: {
	"user": {
		"email": user@future.com,
		"password": "******"
	},
	"token": "13HI786YFU8P",
	"order": {
		"id": 123,
		"name": "Salmon Nigiri",
		"quantity": "3"
	}
}
```

**Failed Response**   
```json
 response: {
	"timestamp": "2020-11-30T09:56:35.815+0000" ,
	"status": 400 ,
	"error": "Bad Request" ,
	"message": "Request body has invalid type or missing field" ,
	"path": "/api/v1/order"
}
```
---
## Purchase
---
## Admin
### Get All Admins
**Method:** GET
**URL:** /api/v1/admins

**Description:** 
This endpoint will return a list of admin object

**Success Response**
```json
response: {
	status: 200,
	message: "OK",
	data: [
		{
			"id": 123,
			"email": "abc@a.com",
			"dateAdded": "2020-04-11",
			"image": "https://linktoimage"
		},
		{
			"id": 124,
			"email": "bcd@a.com",
			"dateAdded": "2010-04-11",
			"image": "https://linktoimage"
		},
		...
	]
}
```

**Failed Response**   
```json
 response: {
	"timestamp": "2020-11-30T09:56:35.815+0000" ,
	"status": 400 ,
	"error": "Bad Request" ,
	"message": "Request body has invalid type or missing field" ,
	"path": "/api/v1/admins"
}
```
---
### Post Admin
**Method:** POST
**URL:** /api/v1/admin/{id}

**Description:** 
This endpoint will posts an admin object to the server. If the id are matched, the mathced admin object will be updated. If the id are not matched, a new admin object will be created.

**Request's Body**
```json
body: {
	"id": 124,
	"email": "bcd@a.com",
	"dateAdded": "2010-04-11",
	"image": "https://linktoimage"
}
```

**Success Response**
```json
response: {
	status: 200,
	message: "OK",
	data: {
		"id": 124,
		"email": "bcd@a.com",
		"dateAdded": "2010-04-11",
		"image": "https://linktoimage"
	}
}
```

**Failed Response**   
```json
 response: {
	"timestamp": "2020-11-30T09:56:35.815+0000" ,
	"status": 400 ,
	"error": "Bad Request" ,
	"message": "Request body has invalid type or missing field" ,
	"path": "/api/v1/admin/{id}"
}
```
---
## Ticket
### Reservation Ticket
---
## Login Form
### Login
**Method:** GET
**URL:** /api/v1/login

**Description:** 
This endpoint will post email and password value to the back-end which will returns a JWT Token if the query posted are valid

**Request's Body**
```json
body: {
	"email": user@future.com,
	"password": "******"
}
```

**Success Response**
```json
response: {
	status: 200,
	message: "OK",
	data: {
		"user": {
			"email": user@future.com,
			"password": "******"
		},
		"token": "13HI786YFU8P"
	}
}
```

**Failed Response**   
```json
 response: {
	"timestamp": "2020-11-30T09:56:35.815+0000" ,
	"status": 400 ,
	"error": "Bad Request" ,
	"message": "Request body has invalid type or missing field" ,
	"path": "/api/v1/login"
}
```
---
### Register
**Method:** GET
**URL:** /api/v1/register

**Description:** 
This endpoint will post email and password value to the back-end which will returns a JWT Token if the query posted are valid. The email and password sent will be used to generate a new User object in the database.

**Request's Body**
```json
body: {
	"email": user@future.com,
	"password": "******"
}
```

**Success Response**
```json
response: {
	status: 200,
	message: "OK",
	data: {
		"user": {
			"email": user@future.com,
			"password": "******"
		},
		"token": "13HI786YFU8P"
	}
}
```

**Failed Response**   
```json
 response: {
	"timestamp": "2020-11-30T09:56:35.815+0000" ,
	"status": 400 ,
	"error": "Bad Request" ,
	"message": "Request body has invalid type or missing field" ,
	"path": "/api/v1/register"
}
```
---
### Logout
**Method:** GET
**URL:** /api/v1/logout

**Description:** 
This endpoint will sent a token to be deactivated

**Request's Body**
```json
body: {
	"user": {
		"email": user@future.com,
		"password": "******"
	},
	"token": "13HI786YFU8P"
}
```

**Failed Response**   
```json
 response: {
	"timestamp": "2020-11-30T09:56:35.815+0000" ,
	"status": 400 ,
	"error": "Bad Request" ,
	"message": "Request body has invalid type or missing field" ,
	"path": "/api/v1/login"
}
```
---
## Reservation Form