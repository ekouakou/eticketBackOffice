import React from 'react';
import { useTheme } from '../../components/ThemeProvider';
import { NavLink } from 'react-router-dom';
import  Login  from './Login';


const tickets = [
    { id: 1, title: 'Concert de Rock', date: '2023-05-01', price: 50, currency: 'FCFA', quantity: 2, image: 'assets/images/event01.jpg' },
    { id: 2, title: 'Festival de Jazz', date: '2023-06-15', price: 70, currency: 'FCFA', quantity: 1, image: 'assets/images/event02.jpg' },
    { id: 3, title: 'Match de Football', date: '2023-07-20', price: 100, currency: 'FCFA', quantity: 3, image: 'assets/images/event05.jpg' },
  ];

function MonProfile() {
    const { theme } = useTheme();

    //alert(localStorage.getItem("totalAmount"));
    console.log(localStorage.getItem("totalAmount"));
    console.log(localStorage.getItem("cartItems"));

    return (
      <div className={` mt-5 pt-5  content ${theme}`}>
        {/* <section class="details-banner hero-area bg_img seat-plan-banner" data-background="assets/images/banner/banner04.jpg">
            <div class="container">
                <div class="details-banner-wrapper">
                    <div class="details-banner-content style-two">
                        <h3 class="title">Venus</h3>
                        <div class="tags">
                            <a href="#0">City Walk</a>
                            <a href="#0">English - 2D</a>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

        {/* <section class="page-title bg-one">
            <div class="container">
                <div class="page-title-area">
                    <div class="item md-order-1">
                        <NavLink to="/detail-event" >
                          <a href="movie-ticket-plan.html" class="custom-button back-button">
                              <i class="flaticon-double-right-arrows-angles"></i>back
                          </a>
                        </NavLink>
                    </div>
                    <div class="item date-item">
                        <span class="date">MON, SEP 09 2020</span>
                        <select class="select-bar">
                            <option value="sc1">09:40</option>
                            <option value="sc2">13:45</option>
                            <option value="sc3">15:45</option>
                            <option value="sc4">19:50</option>
                        </select>
                    </div>
                    <div class="item">
                        <h5 class="title">05:00</h5>
                        <p>Mins Left</p>
                    </div>


                </div>
            </div>
        </section> */}

        <Login />

      </div>
    );
}

export default MonProfile;
