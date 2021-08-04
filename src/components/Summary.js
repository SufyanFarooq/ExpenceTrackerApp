import React,{useContext} from 'react'
import {Context} from '../context/context'

export default function Summary() {
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
        <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus">{getIncome()}</p>
        </div>
        <hr/>
        <div>
            <h4>Expence</h4>
            <p className="money minus">{getExpense()}</p>
        </div>
        </div>
    )
}
