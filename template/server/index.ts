import { DeskThing as DK } from 'deskthing-server';
// Doing this is required in order for the server to link with DeskThing
const DeskThing = DK.getInstance();
export { DeskThing }

async function start() {

    // One of many ways to sync data from the server
    let Data = await DeskThing.getData()

    // An example on how to add settings
    if (!Data?.settings?.theme) {
        DeskThing.addSettings({
          "theme": { 
              label: "Theme Choice", 
              value: 'dark', 
              options: [
                  { 
                      label: 'Dark Theme', 
                      value: 'dark' 
                  }, 
                  { 
                      label: 'Light Theme', 
                      value: 'light' 
                  }
              ] 
          },
        })
      }

    // DO NOT use setInterval() to create a loop. Instead use addBackgroundTaskLoop()
    const myLoop = DeskThing.addBackgroundTaskLoop(async () => { // having an asynchronous function is required
      await new Promise(resolve => setTimeout(resolve, 5000));
      console.log('Executing background task!');
      return false; // Return false to continue the loop, true to stop it
    })
    
    // Call the loop to stop it
    myLoop()
} 

async function stop() {
    // Function called when the server is stopped. Use this for process cleanup if you have a complex app.
}

// Main Entrypoint of the server
DeskThing.on('start', start)

// Main exit point of the server
DeskThing.on('stop', stop)
