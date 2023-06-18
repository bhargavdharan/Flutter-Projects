To apply the custom UI changes in Chrome, you can create a Chrome extension. Here's an demo of how you can create a basic extension using the code provided:

1. Create a new directory for your extension and navigate to it.
2. Create a manifest file called `manifest.json` with the following content:

```json
{
  "manifest_version": 2,
  "name": "Custom Chrome Home UI",
  "version": "1.0",
  "browser_action": {
    "default_popup": "popup.html"
  },
  "permissions": [
    "activeTab"
  ]
}
```

3. Create an HTML file called `popup.html` with the following content:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Custom Chrome Home UI</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="custom-ui">
    <h1>Welcome to Custom Chrome Home</h1>
    <p>This is a customized user interface for the Chrome home page.</p>
  </div>

  <script src="popup.js"></script>
</body>
</html>
```

4. Create a CSS file called `styles.css` with the following content:

```css
/* Custom styles for the Chrome home UI */
.custom-ui {
  background-color: #f2f2f2;
  padding: 20px;
}

.custom-ui h1 {
  color: #333;
  font-family: Arial, sans-serif;
}
```

5. Create a JavaScript file called `popup.js`. You can leave it empty for now.
6. Open Chrome and go to `chrome://extensions/`.
7. Enable the "Developer mode" toggle in the top right corner.
8. Click on the "Load unpacked" button and select the directory where you saved your extension files.
9. The extension will be loaded, and you should see its icon added to the Chrome toolbar.
10. Click on the extension icon, and the custom UI with the "Welcome to Custom Chrome Home" message should appear.

By creating a Chrome extension, you can attach your custom UI code to the browser and have it displayed when you click on the extension's icon. You can further customize the UI and add functionality by modifying the HTML, CSS, and JavaScript files.

Note that this approach adds a custom UI within an extension popup, not as a replacement for the Chrome home page.
