import './Header.css'

const Header = () =>{
    return(
        <div className="mainHeaderContainer">
            <div className="headerName">
                <h1 className="headerNameText">Beryl Rose / <span className="headerNameJob">Backend Developer</span></h1>
            </div>
            <ul className="headerNavigation">
                <li className="headerNav">About Me</li>
                <li className="headerNav">Resume</li>
                <li className="headerNav">Projects</li>
                <li className="headerNav">Contact</li>
            </ul>
        </div>
    )
}

export default Header