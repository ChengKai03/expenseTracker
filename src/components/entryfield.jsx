
export default function Entryfield(){
    return( 
    <>
      <div className="expense-input-container">
        <label for="expense-date" className="expense-label">Date</label>
        <div className="input-element">
          <input type="text" name="expense-date" id="expense-input-date" className="expense-input"/> 
        </div>         
      </div>

      <div className="expense-input-container">
        <label for="expense-cost" className="expense-label">Cost</label>
        <div className="input-element">
          <input type="number" name="expense-cost" id="expense-input-cost" className="expense-input"/> 
        </div>         

      </div>
      <div className="expense-input-container">
        <label for="expense-description" className="expense-label">Description</label>
        <div className="input-element">
          <input type="text" name="expense-description" id="expense-input-description" className="expense-input"/> 
        </div>         
      </div>
    </>
  )
}
