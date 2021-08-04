import React, { useContext } from 'react';
import {Context} from '../context/context'

export default function TransationHistory() {
    let {transations, deleteHistory}=useContext(Context)
    console.log(transations)
    return (
        <div>
        <h3>Transation History</h3>      
        <ul className="list">
        {
            transations.map((item , index)=>{
                return(
                    <li className="plus">
                {item.description}
                <span>${item.amount}</span>
                <button className="delete-btn" 
                onClick={()=>{
                    deleteHistory(item.id)
                }}>X</button>
            </li>
                )
            })
        }
           
          
        </ul>    
        </div>
    )
}
