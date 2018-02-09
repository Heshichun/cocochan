function get_string(){
    var Database = require('better-sqlite3');
    var db = new Database('/Users/Anhedonia/Documents/Work/ts_task/1.db');
    var row = db.prepare('SELECT name FROM test').get();
    console.log(row[1]);
};

get_string();