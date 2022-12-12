import '../App.css';
import clayton from '../graphics/claytonwhite.svg';

export function Navbar() {
  return (
    <div className="navbar">
      <div>
        <a href='https://claytoncountyga.gov'>
          <img src={clayton} alt='County Logo' />
        </a>
      </div>
      <ul className="navbar__menu-items">
      {/* <li><a href="#">Clayton County Permitting</a></li> */}
      <li><a href="https://claytoncountyga.gov/">Go to Claytoncountyga.gov</a></li>
      <li></li>
      <li></li>
      </ul>
        
      
    </div>
  )
}
