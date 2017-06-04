const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
     .then(createWindowsInstaller)
     .catch((error) => {
     console.error(error.message || error)
     process.exit(1)
 })

function getInstallerConfig () {
    console.log('creating windows installer')
    const rootPath = path.join('./')
    const outPath = path.join(rootPath, 'release-builds')

    return Promise.resolve({
       appDirectory: path.join(outPath, '/Snipper-win32-ia32/'),
       authors: 'Coding Blocks',
       noMsi: true,
       outputDirectory: path.join(outPath, 'windows-installer'),
       exe: 'Snipper.exe',
       setupExe: 'SnipperInstaller.exe',
	   description: 'A simple desktop app that lets you save your most frequently used Code Snippets with syntax highlighting.'
   })
}