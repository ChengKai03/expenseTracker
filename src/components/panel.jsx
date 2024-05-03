import ExpenseTable from './table.jsx'
import EntryField from './entry.jsx'
import Breakdown from './breakdown.jsx'



export default function Panel({toShow}) {

  let content;
  if(toShow === 0){
    content = <ExpenseTable/>;
  }
  else if (toShow === 1){
    content = <Breakdown/>;
  }

  return(
    <div className="panel">
      {content}

    </div>
  );
}