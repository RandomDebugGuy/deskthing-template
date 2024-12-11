import React, { useEffect } from 'react'
import { DeskThing } from 'deskthing-client'
import { SocketData } from 'deskthing-client/dist/types'

const App: React.FC = () => {
    const deskthing = DeskThing.getInstance()

    useEffect(() => {
        const onAppData = async (data: SocketData) => {
            console.log('Received data from the server!')
        }
        
        const myListener = deskthing.on('myAppID', onAppData)

        return () => {
            //Call the listener to remove it
            myListener()
        }
    })

    return (
        <div className="bg-slate-800 w-screen h-screen flex justify-center items-center">
            <p className="font-bold text-5xl text-white">My DeskThing app</p>
            <p className="font-bold text-4xl text-white">Change this in yourProjectRoot/src/App.tsx</p>
        </div>
    )
}

export default App
