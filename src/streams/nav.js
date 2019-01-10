import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return <div>

<div className="top-menu" tabIndex="1">
<div className="container">
<div className="row">
<div className="col-md-6 text-left">
  <Link to="/"><img src="/images/nottc-logo-noshadow.png" className="img-fluid" alt=""/></Link><br />
</div>
<div className="col-md-6 text-right">
  <a id="hamburger-icon" href="/" title="Menu">
    <span className="line line-1"></span>
    <span className="line line-2"></span>
    <span className="line line-3"></span>
  </a>
</div>
</div>
<div className="row menu-links"> 
<div className="col-md-12 text-right">
      <Link to="https://www.nottc.org/index.php" className="active">Home</Link>
      <a href="https://www.nottc.org/ott_rights.php" className="">Ott rights</a>
      <a href="https://www.nottc.org/use_cases.php" className="">Use cases</a>
      <a href="https://www.nottc.org/partners.php" className="">Partners</a>
      <a href="https://www.nottc.org/contact_us.php" className="">Contact us</a>
</div>
</div>
</div>
</div>

    </div>
};

export default NavMenu;