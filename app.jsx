import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './app.css';

export default function App() {
    return (
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              Shade Seeker<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='login.html'>
                  Login
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='play.html'>
                  Play the Game
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='leaderboard.html'>
                  Leaderboard
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='help.html'>
                  Help
                </a>
              </li>
            </menu>
          </nav>
        </header>
  
        <main>App components go here</main>
  
        <footer>
            <hr />
            <span class="text-reset">Created by Amber Woll, 2023</span>
            <br />
            <a href="https://github.com/amberwoll/startup">GitHub</a>
        </footer>
      </div>
    );
  }