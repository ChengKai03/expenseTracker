import ExpenseTable from './table.jsx'
import Entryfield from './entryfield.jsx'
import Breakdown from './breakdown.jsx'



export default function Panel({toShow}) {

  let content;
  if(toShow === 0){
    content = <ExpenseTable/>;
  }
  else if (toShow === 1){
    content = <Breakdown/>;
  }
  else if (toShow === 2){
    content = <Entryfield/>;
  }

  return(
    <div className="panel">
      {content}

    </div>
  );
}