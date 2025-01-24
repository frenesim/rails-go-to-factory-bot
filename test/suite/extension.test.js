const assert = require('assert');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require('vscode');
const myExtension = require('../../extension');


suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('Sample test', () => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
  });

  test('Command registration', async () => {
    const commands = await vscode.commands.getCommands(true);
    assert.ok(commands.includes('rails-go-to-factory-bot.goTo'), 'Command rails-go-to-factory-bot.goTo should be registered');
  });

  test('Go to factory file', async () => {
    const editor = await vscode.workspace.openTextDocument({ content: 'create :user' });
    await vscode.window.showTextDocument(editor);

    await vscode.commands.executeCommand('rails-go-to-factory-bot.goTo');

    const activeEditor = vscode.window.activeTextEditor;
    assert.ok(activeEditor, 'There should be an active editor');
    assert.strictEqual(activeEditor.document.uri.fsPath.endsWith('test/factories/users.rb'), true, 'The opened file should be the factory file');
  });
});
