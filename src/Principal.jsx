import { Navbar } from "./components/Navbar"
import './index.css'
import {personajes} from './utils/personajes'
import {Card} from "./components/Card"

export const Principal = () => {
    return (
        <main>
            <Navbar></Navbar>
            <h1>Mi Primer Aplicativo Certus</h1>
            
            {
                personajes.map((personajes)=>(
                    <Card 
                        key={personajes.nombre}
                    {...personajes}
                    ></Card>
                ))
            }
        </main>
    )
}