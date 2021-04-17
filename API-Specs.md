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
**URL:** /api/v1/food/{id}

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
	"path": "/api/v1/food/{id}"
}
```
---
### Post Food
**Method:** POST
**URL:** /api/v1/food/{id}

**Description:** 
This endpoint will posts a food object to the server. If the id are matched, the matched food object will be updated. If the id are not matched, a new food object will be created.

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
### Get Reservation
**Method:** GET
**URL:** /api/v1/reservation

**Description:** 
This endpoint will send a token to get current user's reservation ticket

**Request's Body**
```json
body: {

}
```

**Success Response**
```json
response: {
	status: 200,
	message: "OK",
	"reservation": {
		"validDate": "2020-11-30",
		"validTime": "02:00",
		"person": 2,
		"seat": 6,
		"qr": "null"
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
	"path": "/api/v1/reservation"
}
```
---
### Post Reservation
**Method:** POST
**URL:** /api/v1/reservation

**Description:** 
This endpoint will send a token and reservation details

**Request's Body**
```json
body: {
	"reservation": {
		"date": "2020-11-30",
		"time": "09:56",
		"seat": 6,
		"person": 2
	}
}
```

**Success Response**
```json
response: {
	"status": 200,
	"message": "OK"
}
```

**Failed Response**   
```json
 response: {
	"timestamp": "2020-11-30T09:56:35.815+0000" ,
	"status": 400 ,
	"error": "Bad Request" ,
	"message": "Request body has invalid type or missing field" ,
	"path": "/api/v1/reservation"
}
```
---
## Price
### Get Price
**Method:** GET
**URL:** /api/v1/

**Description:** 
This endpoint will send 

**Request's Body**
```json
body: {
	"reservation": {
		"person": 2
	}
}
```

**Success Response**
```json
response: {
	"status": 200,
	"message": "OK",
	"reservation": {
		"person": 2,
		"priceDetail": {
			"price": 400000,
			"tax": 40000
		}
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
	"path": "/api/v1/reservation"
}
```

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
	
}
```

**Success Response**
```json
response: {
	"status": 200,
	"message": "OK",
	"orders": [
		{
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
## Purchase History
### Get All Purchase History
**Method:** GET
**URL:** /api/v1/purchases

**Description:** 
This endpoint will return a list of all purchase history

**Success Response**
```json
response: {
	"status": 200,
	"message": "OK",
	"data": [
		{
			"id": 123,
			"email": "abc@a.com",
			"date": "2020-04-11",
			"time": "09:56",
			"table": 06,
			"status": "accepted"
		},
		{
			"id": 124,
			"email": "bcd@a.com",
			"date": "2020-04-11",
			"time": "09:56",
			"table": 03,
			"status": "denied"
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
	"path": "/api/v1/purchases"
}
```
---
### Get Purchase History By Id
**Method:** GET
**URL:** /api/v1/purchase/{id}

**Description:** 
This endpoint will return a purchase history detail with an ID of {purchaseID} integer.

**Success Response**
```json
response: {
	"status": 200,
	"message": "OK",
	"data": {
		"id": 123,
		"person": 2,
		"orders": [
			{
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
}
```

**Failed Response**   
```json
 response: {
	"timestamp": "2020-11-30T09:56:35.815+0000" ,
	"status": 400 ,
	"error": "Bad Request" ,
	"message": "Request body has invalid type or missing field" ,
	"path": "/api/v1/purchase/{id}"
}
```
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
	"password": "*******",
	"dateAdded": "2010-04-11",
	"image": "https://linktoimage"
}
```

**Success Response**
```json
response: {
	status: 200,
	message: "OK",
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
## Seat
### Get All Seat
**Method:** GET
**URL:** /api/v1/admin/table

**Description:** 
This endpoint will 

**Success Response**
```json
response: {
	status: 200,
	message: "OK",
	data: [
		"id": 12,
		"capacity": 2,
		"status": "available"
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
### Post Seat
**Method:** POST
**URL:** /api/v1/admin/{id}

**Description:** 
This endpoint will posts 

**Request's Body**
```json
body: {
	"id": 12,
	"capacity": 2,
	"status": "available"
}
```

**Success Response**
```json
response: {
	status: 200,
	message: "OK",
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
## Profile
### Profile
**Method:** GET
**URL:** /api/v1/profile

**Description:** 
This endpoint will 

**Request's Body**
```json
body: {

}
```

**Success Response**
```json
response: {
	status: 200,
	message: "OK",
	data: {
		"email": "bcd@a.com",
		"firstName": "John",
		"lastName": "Doe",
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
	"path": "/api/v1/login"
}
```
---
## Password
### Password
**Method:** POST
**URL:** /api/v1/profile/password

**Description:** 
This endpoint will 

**Request's Body**
```json
body: {
	"oldPassword": "******",
	"newPassword": "******"
}
```

**Success Response**
```json
response: {
	status: 200,
	message: "OK",
	data: {

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
	"password": "******",
	"firstName": "John",
	"lastName": "Doe"
}
```

**Success Response**
```json
response: {
	status: 200,
	message: "OK",
	data: {
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
