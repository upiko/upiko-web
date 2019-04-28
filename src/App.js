import React from 'react';
import {Icon} from 'antd';
//const nunoLogo = require('./img/nuno.png');

function App() {
  return (
    <React.Fragment>
      <div id="home">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="/"><p class="logo-text"><Icon style={{ fontSize: '1.5rem', paddingRight: '.25rem'}} type="property-safety" theme="twoTone" twoToneColor="#3fb1b7"/>upiko</p></a>
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
          <h1>the way it should be, just great apps. </h1>
          <p className="lead">By employing decentralized blockchain technology, upiko is
          developing great decentralized apps (dapps) without you having to give away your data for some comglomorate to sell. Community focused,
          decentralized, trustless, open source and with the lowest fees in the industry plus all the while you earn crypto. 
          We are launching our first product, <span class="strong-p">sos.upiko</span> in the summer, so sign up for the mailing list. 
          </p>
          <a className="btn btn-secondary btn-md" 
            onClick={() => {
              alert("Coming soon :)");
            }}
          >
          Join Mailing List</a>
        </div>
      </div>
      <div id="products" className="offset">
        <div className="jumbotron">
          <div className="narrow">
            <div className="col-12">
              <h3 className="heading text-center">Products</h3>
              <div className="heading-underline"></div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <div className="product">
                  <i className="fas fa-magic fa-4x" data-fa-transform="shrink-3 up-5"></i>
                  <h3>sos.upiko</h3>
                  <p>Summer 2019</p> 
                  <p>Find help immediately from experts online. Registered experts are waiting to help
                    you with your quick challenges - from 10 mins to a less than a day of work - post the help you need and someone will help you right away
                    in exchange for some crypto.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product">
                  <i className="fas fa-hand-holding-heart fa-4x" data-fa-transform="shrink-4.5 up-4.5"></i>
                  <h3>patron.upiko</h3>
                  <p>Coming soon</p> 
                  <p>Be a patron via cryptocurrency. You can provide patronage to your favorite registered
                    thinkers and entertainers.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product">
                  <i className="fas fa-briefcase fa-4x" data-fa-transform="shrink-4 up-5"></i>
                  <h3>services.upiko</h3>
                  <p>Coming soon</p> 
                  <p>Cryptocurrency based projects and services. Talented people are waiting to provide services online
                    and help you execute your projects via our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="offset">
           <footer>
             <div className="row justify-content-center">
                <div className="col-md-5 text-center">
                  <h3>upiko</h3>
                  <p> the future of decentralized web products
                  </p>
                  <a href="http://github.com/upiko/" target="_blank"><i class="fab fa-github"></i></a>
                  <a href="/" target="_blank"><i class="fab fa-facebook-square"></i></a>
                  <a href="/" target="_blank"><i class="fab fa-twitter-square"></i></a>
                  <a href="/" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>

                <hr className="socket"/>&copy; upiko.com

             </div>
           </footer>
      </div>
    </React.Fragment>
  );
}

export default App;


//<Icon style={{ fontSize: '16px'}} type="property-safety" theme="twoTone" twoToneColor="#3fb1b7"/>
//<img src={nunoLogo} />