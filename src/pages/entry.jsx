import Navbar from '../components/navbar.jsx'
import Panel from '../components/panel.jsx'

export default function Entry(){
    return(
        <>
            <Navbar/>
            <div id="tracker-content">
                <Panel toShow={2}/>


            </div>
        </>
        
    )
}