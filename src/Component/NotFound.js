import { Link } from "react-router-dom"

const NotFound = () => {
    return (  
        <div className="not-found">
            <h1>404 Error</h1>
            <p>That page cannot be found</p>
            <Link to="/" >Bck to the homepage...</Link>
        </div>
    );
}
 
export default NotFound;