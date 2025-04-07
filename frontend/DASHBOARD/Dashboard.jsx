import './Dashboard.css'
import Header from '../COMPONENTS/HEADER/Header'
import Footer from '../COMPONENTS/FOOTER/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faGithub, } from '@fortawesome/free-brands-svg-icons';

const Dashboard = () => {
    return(
        <div className="mainDbContainer">
            <Header/>
            <div className="dBContentContainer">
                <div className="dBPortfolioCard">
                    <div className="dBPortfolioCardContent">
                        <FontAwesomeIcon icon={faUser}/>
                        <h1 className="dBPortfolioName">Beryl Rose</h1>
                        <hr />
                        <h1 className="dBPortfolioJob">Backend Developer</h1>
                    </div>
                    <div className="dBPortfolioFollow">
                        <h1 className="dBPortFollowTxt">Follow On</h1>
                        <div className="dBPortFollowSocials">
                            <FontAwesomeIcon icon={faFacebook}/>
                            <FontAwesomeIcon icon={faInstagram}/>
                            <FontAwesomeIcon icon={faGithub}/>
                        </div>
                    </div>
                </div>
                <div className="dBContentSubContainer">
                    <p className='head'>Hello</p>
                    <p className='head'>Everyone</p>
                    <p className='subtext'>Here's Who I am & What I do.</p>
                    <div className="dBContentBtns">
                        <button className="dBContentBtn">Resume</button>
                        <button className="dBContentBtn">Projects</button>
                    </div>
                    <p className="dBContentText">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi blanditiis incidunt sit reiciendis a quas fugiat sunt magni culpa voluptatibus debitis unde accusamus necessitatibus rem voluptatum, doloribus mollitia eligendi dicta. Nam laborum voluptate ipsa vero quod deleniti laboriosam et recusandae?
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Dashboard