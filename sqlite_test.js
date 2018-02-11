'use strict';

/*
查询数据库 并返回一行数据
*/
module.exports = function get_string(){
    var Database = require('better-sqlite3');
    var db = new Database('/Users/Anhedonia/Documents/Work/ts_task/1.db');
    var row = db.prepare('SELECT name FROM test').all();
    console.log(row);
    return row;
};