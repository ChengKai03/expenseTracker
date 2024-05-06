import React, { useState } from "react"


export default function Entryfield(){

  const [details, setDetails] = useState({
    date : "",
    cost : 0,
    description : ""
  })

  const handlechange = (event) =>{
    const name = event.target.name
    const value = event.target.value
    console.log(name, value)

    setDetails((prev) =>{
      return {...prev, [name]: value}
    })
  }
  // console.log(details)

  function inputDB(formData){
    console.log(details)
  }
  return( 

      
    <>
      <span className="heading">Enter an Expense</span>

      <form onSubmit={inputDB}>
        <div className="expense-input-container">
          <label htmlFor="expense-date" className="expense-label">Date</label>
          <div className="input-element">
            <input type="date" className="expense-input" name="date" onChange={handlechange}/> 
          </div>         
        </div>

        <div className="expense-input-container">
          <label htmlFor="expense-cost" className="expense-label">Cost</label>
          <div className="input-element">
            <input type="number" name="cost" id="expense-input-cost" className="expense-input" min="0" step="0.01" onChange={handlechange}/> 
          </div>         

        </div>
        <div className="expense-input-container">
          <label htmlFor="expense-description" className="expense-label">Description</label>
          <div className="input-element">
            <input type="text" name="description" id="expense-input-description" className="expense-input" onChange={handlechange}/> 
          </div>         
        </div>
        <button type="submit">Add Expense</button>
      </form>
      
      

    </>
  )
}
