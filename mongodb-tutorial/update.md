/* 
	Author: Eftychia Koletsou
	version: 0.0.1
*/

# Update a document

Pizzeria VENEZIA offers a new pizza called VESUVIOS:

```
db.pizzeria.update(
	{"name":"VENEZIA"}, 
	{"$set":
		{"pizza":[
			{
				"name":"VESUVIOS",
				"price":11.7,
				"calories":2780,
				"ingredient":[
					"Tomato",
					"Cheese",
					"Onion",
					"Hot Red Pepper"
					]
				}
			]
		}
	}
)
```


**Update multiple documents**

All pizzerias located to Athens now will be located to Mykonos:

`db.pizzeria.update({"city":"Athens"}, {"$set":{"city":"Mykonos"}}, {multi:true})`



**Update one element in an array (applied to multiple documents)**

All BACON pizzas will be renamed as CANADIAN BACON. Pay attention to the **$**:

`db.pizzeria.update({"pizza.name":"BACON"}, {"$set":{"pizza.$.name":"CANADIAN BACON"}}, {multi:true})`




## Increment and Multiply values

*Increment by one.* Pizzeria FRATELLO increases SPICY's price:

`db.pizzeria.update({"name":"FRATELLO", "pizza.name":"SPICY"}, {"$inc": {"pizza.$.price":1}})`



*Reduction by one.* Pizzeria ROMEO reduces SUPREME's price:

`db.pizzeria.update({"name":"ROMEO", "pizza.name":"SUPREME"}, {"$inc": {"pizza.$.price":-1}})`



Multiply pizzeria's AL DENTE points by 1.03:

`db.pizzeria.update({"name":"AL DENTE"}, {"$mul": {"points":1.03}})`



## Play with data

**Push** additional information to PIZZAMANIA regarding to smoking area, kids menu and pet friendly environment:

```
db.pizzeria.update(
	{"name":"PIZZAMANIA"}, 
	{"$push": 
		{"additional info":
			{
				"Smoking area":"N", 
				"Kids menu": "Y", 
				"Pet friendly":"Y"
			}
		}
	}
)
```



Having **maximum number of items** on an array we are going to have:

```
db.pizzeria.update(
	{"name":"PIZZAMANIA"}, 
	{"$push": 
		{"best pasta":
			{"$each": 
				[
					"Lasagna", 
					"Bolonese", 
					"Carbonara", 
					"Fungi", 
					"Marinara"
				], 
			"$slice":-3 
			}
		}
	}
)
```

**$slice** limits the information - only 3 items will be inserted on the document.



**Add a value only if it doesn't already exists:** Add a new pizza to ROMEO's catalog:

```
db.pizzeria.update(
	{"name":"ROMEO"}, 
	{"$addToSet": 
		{"pizza": 
			{
				"name":"4 CHEESES",
				"price":14.1,
				"calories":3500.0,
				"ingredient":[
					"EDAM Cheese",
					"ROKFOR Cheese",
					"FETA Cheese",
					"GODA Cheese",
					"Oregano",
					"Tomato Sauce"
				]
			}
		}
	}
)
```



**Commit or remove the first item in an array:** Remove "Lasania" from PIZZAMANIA's best pasta:

`db.pizzeria.update({"name":"PIZZAMANIA"}, {"$pop": {"best pasta":-1}})`



**Remove specific items:** Remove all values of 2 from ROMA's rating array:

`db.pizzeria.update({"name":"ROMA"}, {"$pull": {"rating":2}})`


[Back](https://github.com/skananitos/mongodb-tutorial)