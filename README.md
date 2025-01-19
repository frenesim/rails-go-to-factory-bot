
# Rails Go to Factory Bot

A VS Code extension to navigate to Factory Bot definitions in Rails projects.

## Features

This extension allows you to quickly navigate to Factory Bot definitions in your Rails project. When your cursor is on a `create` or `build` method call, the extension will open the corresponding factory file in the `./test/factories/` folder.

## Usage

1. Place your cursor on a line containing a `create` or `build` method call, such as `create(:user)` or `build("user")`.
2. Run the command `Rails Go to Factory` from the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
3. Alternatively, use the keybinding chord `Ctrl+g Ctrl+f` on Windows/Linux or `Cmd+g Cmd+f` on macOS to trigger the command.

The extension will open the corresponding factory file in the `./test/factories/` folder if it exists. If the file does not exist, an error message will be displayed.

## Installation

1. Install the extension from the VS Code Marketplace.
2. Ensure your Rails project has Factory Bot installed and configured.

## Configuration

No additional configuration is required.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on the [GitHub repository](https://github.com/frenesim/rails-go-to-factory-bot).

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/frenesim/rails-go-to-factory-bot/blob/main/LICENSE) file for details.
