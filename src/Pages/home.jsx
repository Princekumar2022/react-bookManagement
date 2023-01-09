import { Link } from "react-router-dom"
// import './home.css'

const HomePage = () => {

    return (
        <div className="link">

            <ul>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to="/signup" >SignUp</Link></li>
            </ul>
        </div>
    )
}

export default HomePage