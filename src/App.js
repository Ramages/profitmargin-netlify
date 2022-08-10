import React from "react";
import Navbar from "./components/Navbar"
import Companies from "./components/Companies"

export default function App(){
    return(
        <div>
            <Navbar />
            <section className="cards-list">
                <Companies />
            </section>
        </div>
    )
}