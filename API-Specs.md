# SUSHEE's API Spec
## Food
---
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
**URL:** /api/v1/foods/{foodID}

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
---
### Update Food
---
## Reservation
---
## Order Queue
---
## Purchase
---
## Admin
---
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
---
### Reservation Ticket
---
## Login Form
---
### Login
### Register
### Logout
---
## Reservation Form