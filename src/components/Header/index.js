// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-mobile-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="website-logo"
          alt="website logo"
        />
        <button type="button" className="nav-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="nav-bar-image"
          />
        </button>
      </div>

      <div className="nav-content-large-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <ul className="nav-menu">
          <li className="nav-menu">Home</li>
          <li className="nav-menu">Products</li>
          <li className="nav-menu">Cart</li>
        </ul>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-mobile">
      <ul className="nav-menu-mobile">
        <li className="nav-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav-bar-image"
          />

          <li className="nav-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="nav-bar-image"
            />
          </li>

          <li className="nav-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="nav-bar-image"
            />
          </li>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
