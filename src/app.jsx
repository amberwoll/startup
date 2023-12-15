import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export default function App() {
    return (
      <div>
        <header>
            <div className="title-line" >
                <h1 className="top">Shade Seeker<sup>&reg;</sup></h1>  
            </div>

            <nav>
                <menu>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="play.html">The Game</a></li>
                    <li><a href="leaderboard.html">Leaderboard</a></li>
                    <li><a href="help.html">Help</a></li>
                </menu>
            </nav>
        </header>
  
        <main>App components go here</main>
  
        <footer>
            <hr />
            <span className="text-reset">Created by Amber Woll, 2023</span>
            <br />
            <a href="https://github.com/amberwoll/startup">GitHub</a>
        </footer>
      </div>
    );
  }