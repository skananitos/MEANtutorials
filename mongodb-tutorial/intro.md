## Start MongoDB Server

Open a new terminal/cmd window and start the server by giving the `mongod` command. 


## Import data

Retrieve the data from the **dataset.json** file and save to a file named pizzeria-dataset.json on your C:\Users\user-name path (user-name is the name that you use on your PC).

Open another terminal/cmd window and use the following commant to insert the documents into the *pizzeria* collection in the *testdb* database. If the collection already exists in the *testdb* database the operation will be **drop** the *pizzeria* collection first.

`mongoimport --db testdb --collection pizzeria --drop --file pizzeria-dataset.json`


## Start MongoDB Shell

Start the shell by typing `mongo`.

See all the databases we currently have by typing `show dbs`.

See the current database using `db` (by default is *test*)

With the `use testdb` select the *testdb* database.

See the content of *pizzeria* collection by typing: `db.pizzeria.find()` or for a better layout `db.pizzeria.find().pretty`.


## Insert a new document

We want to insert a new pizzeria called VENEZIA:

```
db.pizzeria.insert(
	{
		"name":"VENEZIA", 
		"street":"Acharnon 20", 
		"city":"Athens", 
		"doe": new Date (1993,2,4), 
		"takeaway":"Y", 
		"points":1.9, 
		"review":"poor", 
		"rating":[2, 1, 1, 1, 2],
		"pizza":[
			{
				"name":"SPECIAL", 
				"price":12.3, 
				"calories":2500, 
				"ingredient":[
					"Sausage",
					"Salami",
					"Ham",
					"Green Papper",
					"Mushroom",
					"Cheese",
					"Tomato Sauce"
				]
			}
		],
		"contact info":{
			"email":"pizza@venezia.gr",
			"phone":2103698542
		}
	}
)
```


**Insert multiple documents**

We want to insert two new pizzerias called NAPOLITANA and ITALIANO. Pay attention to the square brackets:

```
db.pizzeria.insert(
	[ 
		{
			"name":"NAPOLITANA", 
			"street":"Thivon 150", 
			"city":"Athens", 
			"doe": new Date (2003,4,19), 
			"takeaway":"N", 
			"points":4.9, 
			"review":"excellent", 
			"rating":[5, 5, 4],
			"pizza":[
				{
					"name":"SPECIAL", 
					"price":18.5, 
					"calories":2500, 
					"ingredient":[
						"Sausage",
						"Salami",
						"Ham",
						"Green Papper",
						"Mushroom",
						"Cheese",
						"Tomato Sauce"
						]
				}],
			"contact info":{
				"email":"pizza@napolitana.gr",
				"phone":2109999999
			}
		},
		{
			"name":"ITALIANO", 
			"street":"Ifestou 3", 
			"city":"Athens", 
			"doe": new Date (1991,11,7), 
			"takeaway":"Y", 
			"points":2.9, 
			"review":"average", 
			"rating":[2, 3, 3, 2], 
			"pizza":[
				{
					"name":"SPICY", 
					"price":9.8, 
					"calories":2657, 
					"ingredient":[
						"Tomato", 
						"Mozzarella", 
						"Pepperoni", 
						"Hot Green Pepper", 
						"Onion"
					]
				}],
			"contact info":{
					"email": "info@pizzaitaliano.gr",
					"phone":2107854125
			} 
		}
	]
)
```


## Remove a document

We want to delete pizzeria NAPOLITANA:

`db.pizzeria.remove({"name":"NAPOLITANA"})`


[Back](https://github.com/skananitos/MEANtutorials/tree/master/mongodb-tutorial)
