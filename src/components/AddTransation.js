import React, { useState, useContext } from 'react'
import {Context} from '../context/context'

export default function AddTransation() {
    let [description, setDescription]=useState('');
    let [amount, setamount]=useState('');
    let {addTransation}=useContext(Context)
         
    function submitData(e){
        e.preventDefault();
        if(Number(amount)===0){
            alert("Enter Correct amount")
            return false;
        }
        let transation={
            id:new Date().getTime(),
            description,
            amount:+amount
        }
        addTransation(transation)
        setDescription("");
        setamount("")
            }
    return (
        <div>
            <h3>Add New Transation</h3>
            <form onSubmit={submitData}>
                <div className="form-control">
                <label htmlFor="description">
                    Description
                </label>
                    <input type="text" 
                    id="discription"
                    value={description}
                    required="required" 
                    onChange={(e)=>{
                        setDescription(e.target.value)
                    }}
                    placeholder="Add descrption" />
                </div>
                <div className="form-control">
                <label htmlFor="transationamount">
                    Transation Amount
                </label>
                    <input type="number"
                    id="amount"
                    value={amount}
                    required="required"
                    onChange={(e)=>{
                        setamount(e.target.value)
                    }}

                     placeholder="Add amount" />
                </div>
                <button className="btn">Add Transation</button>
            </form>
        </div>
    )
}
