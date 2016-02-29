var selectDB = function(port, dbName) {
	
	if (!port) {
		port = 27017;
	}

	if (!dbName) {
		dbName = "testdb";
	}

	db = connect("localhost:" + port + "/" + dbName);

	return db;
}