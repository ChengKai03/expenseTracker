import Navbar from '../components/navbar.jsx'
import Panel from '../components/panel.jsx'

export default function Entry(){
    return(
        <>
            <Navbar/>
            <content id="tracker-content">
                <Panel toShow={2}/>


            </content>
        </>
        
    )
}