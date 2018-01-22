const { app, BrowserWindow } = require('electron');

let mainWindow = null; // #A

app.on('ready', () => {
  console.log('Hello from Electron.');
  mainWindow = new BrowserWindow();
  mainWindow.webContents.loadURL(`file://${__dirname}/index.html`); // #A
});

