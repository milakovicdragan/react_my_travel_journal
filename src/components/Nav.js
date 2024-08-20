import React from "react"
import Globe from "../images/Globe.png"
import Fuji from "../images/mount_fuji.png"

export default function Nav(){
    return (
        <div className="nav">
            <img className="nav-img" src={Globe} alt="Earth" />
            <h1 className="nav-title">my travel journal.</h1>
        </div>
    )
}