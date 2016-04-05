# Query

Find all pizzerias and show only their names (with 0 we indicate which fields we want to hide):

```
db.pizzeria.find(
	{},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info":0
	}
).pretty()
```



Find all pizzerias which offer SPECIAL pizza and show only their names:

```
db.pizzeria.find(
	{
		"pizza.name":"SPECIAL"
	},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info":0
	}
).pretty()
```



Find all pizzerias which offer SPECIAL you can take away, sorts the records in ascending order by pizza's price and show only their names:

```
db.pizzeria.find(
	{
		"pizza.name":"SPECIAL", 
		"takeaway":"Y"
	},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info":0
	}
).sort({"pizza.price":1})
```



Find all pizzerias got points greater than or equal to ($gte) 3.5 and less than or equal to ($lte) 4.5:

```
db.pizzeria.find(
	{
		"points": {"$gte":3.5, "$lte":4.5}
	},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info":0
	}
)
```

*Use $gt for 'greater than' and $lt for 'less than'.*



Find all pizzerias established before 2000:

```
yearLimit = new Date ("01/01/2000")
db.pizzeria.find(
	{
		"doe":{"$lt":yearLimit}
	},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info":0
	}
)
```



Find all pizzerias that don't offer take away service and are located in Ioannina city:

```
db.pizzeria.find(
	{
		"takeaway":{"$ne":"Y"}, 
		"city":"Ioannina"
	},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info":0
	}
)
```

*$ne* is used to define 'not equal' values



Find all pizzerias that have review "excellent" and "very good":

```
db.pizzeria.find(
	{
		"review": {
			"$in":["excellent", "very good"]
		}
	},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info":0
	}
)
```

*$in* is used to define 'inequivalance' (opposite: *$nin*)



Find all pizzerias that have review "average" and "poor":

```
db.pizzeria.find(
	{
		"review": {
		"$nin": ["excellent", "very good"]
		}
	},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info":0
	}
)
```



Find all pizzerias that got greater than 4.8 points OR have pizza price greater than or equal to 17.0:

```
db.pizzeria.find(
	{
		"$or":[
			{
				"points": {"$gt":4.8}
			}, 
			{
				"pizza.price":{"$gte":17.0}
			}
		]
	},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info":0
	}
)
```



Find all pizzerias that got NOT greater than 2.5 points:

```
db.pizzeria.find(
	{
		"points": {
			"$not":{"$gt":2.5}
		}
	},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info":0
	}
)
```



Find all pizzerias located in Ioannina city, but show only the first two records:

```
db.pizzeria.find(
	{
		"city":"Ioannina"
	},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info":0
	}
).limit(2)
```



Find all pizzerias located in Ioannina city, but skip the first three records:

```
db.pizzeria.find(
	{
		"city":"Ioannina"
	},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info":0
	}
).skip(3)
```



Find all pizzerias located in Ioannina city and sort them with descending order by points:

```
db.pizzeria.find(
	{
		"city":"Ioannina"
	},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info":0
	}
).sort({"points":-1})
```



Search for every pizzeria which first name begins with 'R':

```
db.pizzeria.find(
	{
		"name":/^R.*$/
	},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info":0
	}
)
```


Search for every pizzeria which have at least one 5 at the rating array:

```
db.pizzeria.find(
	{
		"rating":5
	},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info":0
	}
)
```



Find pizzerias that have 2 AND 5 at the rating array:

```
db.pizzeria.find(
	{
		"rating":{
			"$all":[2,5]
		}
	},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info":0
	}
)
```



Search pizzerias that got 5 as first voting at the rating array:

```
db.pizzeria.find(
	{
		"rating.0":5
	},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info":0
	}
)
```



Find pizzerias that 6 votings at the rating array:

```
db.pizzeria.find(
	{
		"rating":{
			"$size":6
		}
	},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info":0
	}
)
```



Show the first 2 pizza records for pizzeria FRATELLO:

`db.pizzeria.find({"name":"FRATELLO"},{"pizza":{"$slice":2}})`



Show the last 2 pizza records for pizzeria FRATELLO:

`db.pizzeria.find({"name":"FRATELLO"},{"pizza":{"$slice":-2}})`



Show the 2nd and 3rd pizza records for pizzeria FRATELLO:

`db.pizzeria.find({"name":"FRATELLO"},{"pizza":{"$slice":[1,2]}})`


Find pizzeria SAN REMO email:

```
db.pizzeria.find(
	{
		"name":"SAN REMO",
	},
	{
		"_id":0,
		"street":0,
		"city":0,
		"doe":0,
		"takeaway":0,
		"points":0,
		"review":0,
		"rating":0,
		"pizza":0,
		"contact info.phone":0
	}
)
```


[Back](https://github.com/skananitos/MEANtutorials/tree/master/mongodb-tutorial)
