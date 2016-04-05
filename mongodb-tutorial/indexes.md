# Indexes

Create a combound index based first on pizzeria's review and second on pizzeria's name. Then, search for all pizzerias that got "very good" as review:

```
db.pizzeria.ensureIndex({"review":1, "name":1})
db.pizzeria.find({"review":"very good"})
```

At this point, we could use the `db.pizzeria.find({"review":"very good"}).explain("executionStats")` to overview executionStats such as execution time (executionTimeMillisEstimate) and totalDocsExamined.



Create an index where all pizzerias' street is unique:

`db.pizzeria.ensureIndex({"street":1}, {"unique":true})`



Create an index with unique pizzeria's name and in case there are duplicates drop them:

`db.pizzeria.ensureIndex({"name":1}, {"unique":true, "dropdups":true})`



Create an index with unique pizzeria's email and in case is a null value ignore it:

`db.pizzeria.ensureIndex({"contact info.email":1}, {"unique":true, "sparce":true})`



Get multiple different indexes:

`db.pizzeria.getIndexes()`



Drop "review_1_pizzeria_1" index:

`db.pizzeria.dropIndex(review_1_pizzeria_1)`


[Back](https://github.com/skananitos/MEANtutorials/tree/master/mongodb-tutorial)
