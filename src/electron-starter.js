// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')
const expensesDB = require("./databases/expensesManager")
const descriptionDB = require("./databases/descManager");
const isDev = require('is-dev');

let date = {
  month: "",
  year: ""
};


const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 910,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: false,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  // const startUrl = process.env.ELECTRON_START_URL || url.format({
  //           pathname: path.join(__dirname, '/../build/index.html'),
  //           protocol: 'file:',
  //           slashes: true
  //       });

  const startUrl = (
    isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`
  )
  // and load the index.html of the app.
  mainWindow.loadURL(startUrl);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.handle('get-data', async (event, newMonth, newYear) =>{
  date = {month: newMonth, year:newYear}
  console.log(date)
  const fetchData = await expensesDB.readMonthExpenses(newMonth, newYear)
  console.log(fetchData)

  event.sender.send('signal-month-summary',"signal me back")

  return fetchData
})

ipcMain.handle('add-data', async (event, details) => {
  console.log("details: ", details)

  const fullDate = details.date.split("-")
  const year = Number(fullDate[0])
  const month = Number(fullDate[1]) - 1
  const day = Number(fullDate[2])
  
  const cost = Number(details.cost)
  const description = details.description.toLowerCase()

  console.log(year, month, day, cost, description)

  await expensesDB.addExpense(year, month, day, cost, description)
  return 
})

ipcMain.handle('month-summary', async (event) => {
  // console.log("summary of: ", date.year, date.month)
  const summary = await expensesDB.getMonthSummary(date.year, date.month)
  console.log(summary)
  return summary
})


ipcMain.handle('get-description' , async (event) =>{
  const descriptions = await descriptionDB.getDescriptions()
  console.log(descriptions)
  return descriptions
})

ipcMain.handle('add-description', async (event, newDescription) => {
  console.log("add-description", newDescription)
  const formatted = newDescription.toLowerCase()
  await descriptionDB.addDescription(formatted)
  return
})