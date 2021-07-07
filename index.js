const { app, BrowserWindow } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
        width: 700,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        },
        icon: __dirname + '/icon/Jeybek-news.jpg'
    })

    win.loadFile('index.html')

    // win.webContents.openDevTools()

}


app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    } 
})

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})