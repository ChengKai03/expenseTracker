import Navbar from '../components/navbar.jsx'
import Panel from '../components/panel.jsx'

export default function Home(){
    return(
        <>
            <Navbar/>
            <content id="tracker-content">
                <Panel toShow={0}/>
                <Panel toShow={1}/>


            </content>
        </>
        
    )
}