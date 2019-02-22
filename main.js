const { BrowserWindow, app,  } = require('electron');

function createWindow () {
    let win = new BrowserWindow(
        {
            width: 1200,
            minWidth: 800,
            height: 800,
            minHeight: 600
        }
    )

    win.loadFile('./dist/index.html')
}

app.on('ready', createWindow)
