# todo-app-crud

Todo app with create/edit/delete features. Todo items are saved in LocalStorage.
This app is based on 03-todo-app-crud.

## How to run

Run http server like this:

```bash
npx http-server
```

Or use [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) in VSCode.

Note that you can't directly open `index.html` with a web browser such as Chrome, because of a CORS error. Please see [MDN doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#:~:text=You%20need%20to%20pay%20attention%20to%20local%20testing%20%E2%80%94%20if%20you%20try%20to%20load%20the%20HTML%20file%20locally%20(i.e.%20with%20a%20file%3A//%20URL)%2C%20you%27ll%20run%20into%20CORS%20errors%20due%20to%20JavaScript%20module%20security%20requirements.%20You%20need%20to%20do%20your%20testing%20through%20a%20server.) for more detail.
