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
            <div className='notes'>
                <h1>Steve:</h1><br/>
                </div>
                <div className='notes'>
                <p> &emsp;&emsp;Thank you for always being such a badass guy to work with.<br/>I hope you have a merry Christmas and a happy new year. <br></br><br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;- Josh</p>
            </div>
            </div>
     );
}
 
export default Navbar;