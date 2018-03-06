import React, { Component } from 'react';
import $ from 'jquery';

// Components
import Navbar from './navbar';
import Header from './header';
import About from './about';
import Contact from './contact';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.goToByScroll = this.goToByScroll.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
  }

  refreshPage() {
    window.location.reload();
  }

  goToByScroll(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
  }

  scrollTop() {
    $('html, body').animate({
      scrollTop: "0px"
    }, 500);
  }

  render() {
    return (
      <div>
        <button
          className="to-top btn btn-btn-secondary"
          onClick={this.scrollTop}
          >
           &#9650;
        </button>
        <div className="app-nav">
          <h5 onClick={this.refreshPage}>King Hua Chinese Restaurant</h5>
          <h5 onClick={() => this.goToByScroll('about')}>About</h5>
          <h5>Order Online</h5>
          <h5 onClick={() => this.goToByScroll('contact')}>Contact</h5>
        </div>
        <Navbar />
        <Header />
        <About />
        <Contact />
      </div>
    )
  }
}

export default App;
