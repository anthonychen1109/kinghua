import React, { Component } from 'react';
import $ from 'jquery';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.dropDownMenu = this.dropDownMenu.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    this.goToByScroll = this.goToByScroll.bind(this);
  }

  dropDownMenu() {
    const x = document.getElementById('dropdownclick')
    if (x.className === 'navbar') {
      x.className = 'responsive';
    } else {
      x.className = "navbar";
    }
  }

  refreshPage() {
    window.location.reload();
  }

  goToByScroll(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
  }

  render() {
    return (
      <div id="dropdownclick" className="navbar">
        <ul className="topNav">
          <li
            onClick={this.refreshPage}
            >
            King Hua Chinese Restaurant
          </li>
          <li onClick={() => this.goToByScroll('about')}>About</li>
          <li>Order Online</li>
          <li onClick={() => this.goToByScroll('contact')}>Contact</li>
          <li
            className="dropDownIcon"
            onClick={this.dropDownMenu}
            >
            &#9776;
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
