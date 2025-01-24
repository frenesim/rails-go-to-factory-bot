const vscode = require('vscode');
const pluralize = require('pluralize')

const path = require('path');
const fs = require('fs');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "rails-go-to-factory-bot" is now active!');

	let disposable = vscode.commands.registerCommand('rails-go-to-factory-bot.goTo', function () {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const document = editor.document;
		const selection = editor.selection;
		const lineText = document.lineAt(selection.active.line).text;

		const regex = /\b(?:create|build|create_list|build_list)(?:\s|\()(?:\"|\:|\'|\s)(\w+)/;
		const match = lineText.match(regex);

		if (match[1]) {
			const matchedText = match[1];
			const factoryFilePath = path.join(vscode.workspace.rootPath, 'test', 'factories', `${pluralize(matchedText)}.rb`);

			if (fs.existsSync(factoryFilePath)) {
        vscode.workspace.openTextDocument(factoryFilePath).then(doc => {
          vscode.window.showTextDocument(doc, vscode.ViewColumn.One);
        });
			} else {
				vscode.window.showErrorMessage(`Factory file not found: ${factoryFilePath}`);
			}
		} else {
			vscode.window.showErrorMessage('No matching factory found under cursor.');
		}
	});

	context.subscriptions.push(disposable);
}

exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
};
