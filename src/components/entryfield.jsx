
export default function Entryfield(){
  function inputDB(formData){
    console.log("submitting")
  }
  return( 

      
    <>
      <span className="heading">Enter an Expense</span>

      <form action={inputDB}>
        <div className="expense-input-container">
          <label htmlFor="expense-date" className="expense-label">Date</label>
          <div className="input-element">
            <input type="date" name="expense-date" id="expense-input-date" className="expense-input"/> 
          </div>         
        </div>

        <div className="expense-input-container">
          <label htmlFor="expense-cost" className="expense-label">Cost</label>
          <div className="input-element">
            <input type="number" name="expense-cost" id="expense-input-cost" className="expense-input" min="0"/> 
          </div>         

        </div>
        <div className="expense-input-container">
          <label htmlFor="expense-description" className="expense-label">Description</label>
          <div className="input-element">
            <input type="text" name="expense-description" id="expense-input-description" className="expense-input"/> 
          </div>         
        </div>
        <button type="submit">Add Expense</button>
      </form>
      
      

    </>
  )
}
