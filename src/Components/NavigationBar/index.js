import React from "react"
import { Navigation, Link } from "./styles"
import { Burger } from "./Burger"

export const NavigationBar = () => {
    return <Navigation>
        <Link className="logo" to="/">
            MetaTeams
        </Link>
        <Burger />
    </Navigation>
}
