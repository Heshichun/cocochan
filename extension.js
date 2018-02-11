'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "cocochan" is now active!');
    
    // function talkMod_Start(){
    //     talkBox();
    // }
    // talkMod_Start();

    // var get_words = require('./sqlite_test.js');
    var Database = require('better-sqlite3');
    var db = new Database('/Users/Anhedonia/Documents/Work/ts_task/1.db');
    var row = db.prepare('SELECT name FROM test').all();
    console.log(row);
    // var keys = Object.keys(row);

    function talkBox(word){
        var i = 0;
        function talk_func(message){
            vscode.window.showInformationMessage(message, 'next').then(()=>{
                setTimeout(talk_func,1000,word[++i].name);
            })
        }
        talk_func(word[0].name);
    }
    talkBox(row);
    
    // vscode.window.showInformationMessage(row[1].name);
    


    // var word = require('./sqlite_test.js');
    // var welcome = word();
    // console.log(welcome);
    


    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sayHello', function () {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;