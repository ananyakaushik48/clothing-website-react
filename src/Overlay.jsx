import { Logo } from "@pmndrs/branding"
import { AiOutlineShopping, AiOutlineHighlight } from 'react-icons/ai'
export default function  Overlay () {
    return (
        <Intro/>
    )
}

function Intro () {
    return (
        <div className="container">
        <header>
            <Logo width="40" height="40" />
        </header>
        </div>
    )
}