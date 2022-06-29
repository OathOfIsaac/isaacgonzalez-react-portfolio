import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}

      <footer class="section footer-classic context-dark bg-image">
        <div class="container">
          <div class="row row-30">
            <div class="col-md-4 col-xl-5">
              <div class="pr-xl-4"><a class="brand" href="index.html"><img class="brand-logo-light" src="https://imgur.com/a/w2Scje0" alt="Isaac's personal logo, a white key in a black background" width="140" height="37" srcset="https://imgur.com/a/w2Scje0 2x"></img></a>
                <p>I am a future award-winning creative agency, dedicated to the best result in web design, promotion, and business consulting.</p>
                {/* <!-- Rights--> */}
                <p class="rights"><span>©</span><span class="copyright-year">2022</span><span> Isaac Gonzalez </span><span>Company</span><span> - </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div class="col-md-4">
              <h5>Contacts</h5>
                <dl class="contact-list">
                <dt>email:</dt>
                <dd><a href="mailto:#">isaacfgnzlz@gmail.com</a></dd>
              </dl>
              <dl class="contact-list">
                <dt>phones:</dt>
                <dd><a href="tel:#">1.210.781.6626</a>
                </dd>
              </dl>
            </div>
            <div class="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul class="nav-list">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row no-gutters social-container">
          <div class="col"><a class="social-inner" href="https://github.com/OathOfIsaac"><span class="icon mdi mdi-github"></span><span>Github</span></a></div>
          <div class="col"><a class="social-inner" href="https://www.linkedin.com/in/isaac-gonzalez-6b045a110/"><span class="icon mdi mdi-linkedin"></span><span>Linkedin</span></a></div>
        </div>
      </footer>
    </div>
  );
}
