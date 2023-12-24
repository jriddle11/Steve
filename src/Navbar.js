import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div>
            <div className="steveType">
                <Link to="/" className='steveButton' onClick={() => {window.scroll(0, 0); }}><span className='link'>Badass</span></Link>
                <Link to="/santa" className='steveButton' onClick={() => {window.scroll(0, 0); }}><span className='link double'>Merry<br/> Christmas</span></Link>
                <br />
                <Link to="/trump" className='steveButton' onClick={() => {window.scroll(0, 0); }}><span className='link triple'>2024</span></Link>
                <Link to="/elon" className='steveButton' onClick={() => {window.scroll(0, 0); }}><span className='link triple'>Tesla</span></Link>
            </div>
        </div>
     );
}
 
export default Navbar;