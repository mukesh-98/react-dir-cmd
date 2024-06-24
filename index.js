/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const readline = require('readline')

// Function to create folder structure
function createFolderStructure(rootPath, mainFolderName) {
  try {
    // Define the main folder name
    const mainFolder = mainFolderName || 'main-folder'

    // Create root path for main folder
    const mainFolderPath = path.join(rootPath, mainFolder)

    // Check if main folder exists, if not create it
    if (!fs.existsSync(mainFolderPath)) {
      fs.mkdirSync(mainFolderPath)
      console.log(`Created main folder: ${mainFolderPath}`)

      // Create subfolders within main folder
      const subfolders = ['components', 'interfaces', 'utils', 'widgets', 'view', 'export', 'data']
      subfolders.forEach((subfolder) => {
        const subfolderPath = path.join(mainFolderPath, subfolder)
        fs.mkdirSync(subfolderPath)
        console.log(`Created subfolder: ${subfolderPath}`)
      })

      // Create index.js file within main folder
      const indexPath = path.join(mainFolderPath, 'index.js')
      fs.writeFileSync(indexPath, '// Index.js file')
      console.log(`Created file: ${indexPath}`)
    } else {
      console.log(`Main folder '${mainFolder}' already exists at: ${mainFolderPath}`)
    }

    console.log('Folder structure creation completed.')
  } catch (err) {
    console.error(`An error occurred: ${err}`)
  }
}

// Function to ask user for input
function askUserInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.question('Enter the root folder name: ', (rootFolderName) => {
    rl.question('Enter the path where you want to create the folder structure: ', (rootPath) => {
      createFolderStructure(rootPath, rootFolderName)
      rl.close()
    })
  })
}

// Example usage:
askUserInput()
