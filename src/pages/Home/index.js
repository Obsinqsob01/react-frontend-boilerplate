import React from "react"
import { NavigationBar } from "../../Components/NavigationBar"

const HomePage = () => {
    return (
        <>
            <NavigationBar />
            <h1>Home page my friend</h1>
        </>        
    )
}

export const Home = React.memo(HomePage)
