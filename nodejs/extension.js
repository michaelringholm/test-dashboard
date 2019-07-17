// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.clear();
	console.log('Congratulations, your extension "XUnit Dashboard" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.xunitDashboard', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('XUnit Dashboard is now active!');

		// Custom
		// https://code.visualstudio.com/api/extension-capabilities/common-capabilities
		var outputChannel = vscode.window.createOutputChannel("XUnit Dashboard");
		outputChannel.show();
		outputChannel.appendLine("Welcome!");
		outputChannel.appendLine("Run your xunit tests by pressing ...");		
		vscode.window.showInformationMessage("Let's start testing!");
		var term = vscode.window.createTerminal("my term", "/c/data/github/");
		term.show(true);
		term.sendText("dotnet test");
		
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
