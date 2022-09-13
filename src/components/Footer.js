import React from "react";
import { IconContext } from "react-icons";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


export default function Footer () {
    return (
        <IconContext.Provider value={{size:"1.7em", color:"#918E9B"}}>
            <div className="footer">
                <FaTwitterSquare />
                <FaFacebookSquare style={{marginLeft:"14px"}}/>
                <FaInstagramSquare style={{marginLeft:"14px"}}/>
                <FaGithubSquare style={{marginLeft:"14px"}}/>
            </div>
        </IconContext.Provider>
    )
}