/* 
	Author: Eftychia Koletsou
	version: 0.0.1
*/

# Aggregation Commands


## Aggregate

*Calculates aggregate values for the data in a collection.*


Go through all pizzerias and GROUP everything based first on city and then the total number of pizzerias they have:

`db.pizzeria.aggregate([{$group: {_id: "$city", pizzerias: {$sum: 1}}}])`



Make the same and sort the results from highest to lowest:

`db.pizzeria.aggregate([{$group: {_id: "$city", pizzerias: {$sum: 1}}}, {$sort: {pizzerias:-1}}])`



And now, sort based on points:

`db.pizzeria.aggregate([{$group: {_id: "$city", total_points: {$sum: "$points"}}}, {$sort: {total_points:-1}}])`



Group by pizzeria's name and average of pizza's prices and sort based on pizza's prices:

```
db.pizzeria.aggregate(
	[
		{
			$unwind : "$pizza"
		}, 
		{
			$group: {
				_id: "$name", 
				avg_price: {
					$avg: "$pizza.price"
				}
			}
		}, 
		{
			$sort: {
				avg_price:-1
			}
		}
	]
)
```



Group by pizzeria's name and minimum pizza's prices and sort based on pizza's prices:

```
db.pizzeria.aggregate(
	[
		{
			$unwind : "$pizza"
		},
		{
			$group: {
				_id: "$name", 
				min_price: {
					$min: "$pizza.price"
				}
			}
		}, 
		{
			$sort: {
				min_price:1
			}
		}
	]
)
```



Group by pizzeria's name and maximum pizza's prices and sort based on pizza's prices and return only the first 3 results:

```
db.pizzeria.aggregate(
	[
		{
			$unwind : "$pizza"
		}, 
		{
			$group: {
				_id: "$name", 
				max_price: {
					$max: "$pizza.price"
				}
			}
		}, 
		{
			$sort: {
				max_price:-1
			}
		},
		{
			$limit: 3
		}
	]
)
```



Match only pizzerias that do not offer take away service, GROUP the results by pizzeria's name and number of pizzas they offer:

```
db.pizzeria.aggregate(
	[
		{
			$unwind : "$pizza"
		}, 
		{
			$match : {
				takeaway: "N"
			}
		}, 
		{
			$group: {
				_id: "$name", 
				num_pizzas: {
					$sum: 1
				}
			}
		}
	]
)
```



Provide a list of all pizzerias using the name "Pizzeria" instead of "name" and year of establishment:

```
db.pizzeria.aggregate(
	{
		$project: {
			"Pizzaria": "$name", 
			"Established": {
				$year: "$doe"
			}, 
			"_id":0
		}
	}
)
```



Suppose that the calculation formula: (("points"+1)*0.3)/years_of_opperation) returns pizzerias' special score. Provide this score:

```
db.pizzeria.aggregate(
	{
		$project: {
			"Pizzaria": "$name", 
			"Score": {
				$divide: [
					{
						$multiply: [
							{	
								$add: ["$points",1]
							}, 0.3
						]
					}, 
					{
						$subtract: [
							{
								$year: new Date()
							}, 
							{
								$year: "$doe"
							}
						]
					}
				]
			}, 
			"_id":0
		}
	}, 
	{
		$sort: {
			Score:-1
		}
	}
)
```



List each pizzeria using a substring which contains the first 2 characters on lower case of pizzeria's name:

```
db.pizzeria.aggregate(
	{
		$project: {
			"Pizzaria": {
				"$substr":[
					{
						$toLower:"$name"
					},0,2
				]
			}, 
			"_id":0
		}
	}
)
```



Combine pizzeria's and city's name:

```
db.pizzeria.aggregate(
	{
		$project: {
			"Info": {
				"$concat":[
					"$name", " IN ", { $toUpper:"$city" }
				]
			}, 
			"_id":0
		}
	}
)
```



*Receive different output based on conditions:* If pizzeria's points are greater than or equal to 4.5 print "Super!", else print "I'll think about it!":

```
db.pizzeria.aggregate(
	{
		$project: {
			"Message": {
				"$cond": {
					if: {
						$gte:["$points", 4.5]
					}, 
					then: "Super!", 
					else: "I'll think about it!"
				}
			}, 
			"name":1, 
			"_id":0
		}
	}
)
```



*Compare values:* If pizzeria's points are greater than 3.9 returns 1, if they're less returns 0 and if they're equal to 3.9 returns 0:

```
db.pizzeria.aggregate(
	{
		$project: {
			"Result": {
				"$cmp": ["$points", 3.9]
			},
			"name":1, 
			"_id":0
		}
	}
)
```



## Distinct

*Returns all distinct values for a given key.*


Return the distinct values for the pizza's name from all documents in the pizzeria collection:

`db.runCommand({"distinct":"pizzeria", "key":"pizza.name"})`



Return the distinct values for the pizza's name from all documents in the pizzeria collection located in Volos:

`db.runCommand({"distinct":"pizzeria", "key":"pizza.name", query: {city:"Volos"}})`




# Count

*Counts the number of documents in a collection. Returns a document that contains this count and as well as the command status.*


Count the number of all documents in the pizzeria collection:

`db.runCommand({count: "pizzeria"})`



Count of the documents in the pizzeria collection where the value of the doe field is greater than Date('01/01/2000'):

`db.runCommand({count: "pizzeria", query: {doe: {"$gt": new Date("01/01/2000")}}})`



Count of the documents in the pizzeria collection where the value of the doe field is greater than Date('01/01/2000') and skip the first 2 matching documents:

`db.runCommand({count: "pizzeria", query: {doe: {"$gt": new Date("01/01/2000")}}, skip: 2})`




# Group

*Groups documents in a collection by the specified key and performs simple aggregation functions, such as computing counts and sums.*


Group by the points and name fields those documents that have points greater than 4:

```
db.runCommand(
	{
		"group": {
			ns: "pizzeria", 
			key: {
				"points": 1, 
				"name": 1
			}, 
		cond: {
			"points": {
				$gt: 4
			}
		}, 
		$reduce: function (curr, result){}, 
		initial: {} 
		}
	}
)
```


Calculate the total points for each city:

```
db.runCommand(
	{
		"group": {
			ns: "pizzeria", 
			key: {
				"city": 1
			}, 
		cond: {}, 
		$reduce: function (curr, result){
			result.total += curr.points
		}, 
		initial: {
			total : 0
			} 
		}
	}
)
```


[Back](https://github.com/skananitos/mongodb-tutorial)