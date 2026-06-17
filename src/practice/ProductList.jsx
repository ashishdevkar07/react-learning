import { useState } from "react";

function ElectronicGadgetsLists() {

    const [gadgets, setGadgets] = useState([
        { id: 1, name: "Smart-phone", price: 20000, category: "Electronics" },
        { id: 2, name: "Laptop", price: 60000, category: "Electronics" },
        { id: 3, name: "Washing-Maching", price: 70000, category: "Electronics" },
        { id: 4, name: "Computer", price: 80000, category: "Electronics" }
    ])

    return (
        <div>
            <h2>Electronic Gadgets :</h2>

            <ul>
                {gadgets.map((gadget) => (
                    <li key={gadget.id} >
                        <h3>{gadget.name}</h3>
                        <p>{gadget.price}</p>
                        <p>{gadget.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ElectronicGadgetsLists 