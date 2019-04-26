import React from 'react';
import {Icon} from 'antd';
const nunoLogo = require('./img/nuno.png');

function App() {
  return (
    <React.Fragment>
      <div id="home">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="/"><img src={nunoLogo} /></a>
        </nav>
        <div className="landing">
          <div className="home-wrap">
            <div className="home-inner">
            
            </div>
          </div>
        </div>
      </div>
      <div className="caption text-center">
        <h1>upiko</h1>
        <h3>great web products, without the evil</h3>
        <a className="btn btn-outline-light btn-lg" href="#overview">Learn More</a>
      </div>
      <div id="overview" className="offset">
        <div className="col-12 narrow text-center">
          <h1>great apps, no evil. the way it should be</h1>
          <p className="lead">By employing decentralized blockchain and leading edge privacy technology, we are
          developing great web based apps without you having to give away your data for evil (for some comglomorate to sell). 
          We are launching our first product, sos.upiko in the summer, so sign up for the mailing list. 
          </p>
          <a className="btn btn-secondary btn-md" href="/" target="_blank">Join Mailing List</a>
        </div>
      </div>
      <div id="products" className="offset">
        <div className="jumbotron">
          <div className="narrow">
            <div className="col-12">
              <h3 className="heading">Products</h3>
              <div className="heading-underline"></div>
            </div>
            <div className="row text-center">
              <div class="col-md-4">
                <div class="product">
                  <i class="fas fa-magic fa-4x" data-fa-transform="shrink-3 up-5"></i>
                  <h3>sos.upiko</h3>
                  <p>upiko.sos upiko.sos upiko.sos upiko.sos upiko.sos upiko.sos</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="product">
                  <i class="fas fa-hand-holding-heart fa-4x" data-fa-transform="shrink-4.5 up-4.5"></i>
                  <h3>patron.upiko</h3>
                  <p>upiko.sos upiko.sos upiko.sos upiko.sos upiko.sos upiko.sos</p>

                </div>
              </div>
              <div class="col-md-4">
                <div class="product">
                  <i class="fas fa-briefcase fa-4x" data-fa-transform="shrink-4 up-5"></i>
                  <h3>services.upiko</h3>
                  <p>upiko.sos upiko.sos upiko.sos upiko.sos upiko.sos upiko.sos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="offset">
           
      </div>
    </React.Fragment>
  );
}

export default App;


//<Icon style={{ fontSize: '16px'}} type="property-safety" theme="twoTone" twoToneColor="#3fb1b7"/>