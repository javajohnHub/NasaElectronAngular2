const electron = require('electron');
const { app, BrowserWindow } = electron;

let win: any = null;

function createWindow(): void {
  win = new BrowserWindow({
    width: 500,
    height: 900
  });

  win.setMenu(null);

  win.loadURL(`file://${__dirname}/index.html`);

  win.on('closed', () => {
    win = null;
  });

  //win.webContents.openDevTools()
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
