## Load a script

Save the *selectdb.js* file on C:\Users\user-name path. 

Load the script by using the command: `load(selectdb.js)` and now you can run any function located on the file, i.e. selectDB()


## Export data

If you wish to export your data, you have to exit from mongo shell (see the `exit` command bellow) and use the CMD window.

**Export in JSON format:** The following commant creates an export of the pizzeria collection from the MongoDB instance running on the localhost port number *27017*. This writes the export to the new-pizzeria-dataset.json file in JSON format.

`mongoexport --db testdb --collection pizzeria --out new-pizzeria-dataset.json`


## Drop collection and database

- Drop pizzeria collection: `db.pizzeria.drop()`

- Drop testdb database: 

```
use testdb
db.dropDatabase()
```

# Exit from database

Use `exit` to exit from the mongo shell

Use `Ctrl + C` to shut down the mongo server


[Back](https://github.com/skananitos/MEANtutorials/tree/master/mongodb-tutorial)
