import React,{useContext} from 'react'
import {Context} from '../context/context'


export default function Balance() {
    let {transations}=useContext(Context)
    const getIncome=()=>{
        let income= 0;
        for(var i= 0; i<transations.length; i++ ){
            if(transations[i].amount>0)
                income= income + transations[i].amount
            }
            console.log(income)
            return income;
    }
    const getExpense=()=>{
        let expence= 0;
        for(var i=0; i<transations.length; i++){
            if(transations[i].amount<0)
            expence= expence+transations[i].amount
        }
        return expence;
    }
  
    return (
        <div className="balance-container">
            <h4>Current Balance</h4>
            <h1 id="balance">{getIncome()+getExpense()}</h1>
        </div>
    )
}
