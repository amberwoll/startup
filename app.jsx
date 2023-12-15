import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <div class="title-line" >
                        <h1 class="top">Shade Seeker<sup>&reg;</sup></h1>  
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
                    <span class="text-reset">Created by Amber Woll, 2023</span>
                    <br />
                    <a href="https://github.com/amberwoll/startup">GitHub</a>
                </footer>
            </div>
        </BrowserRouter>
    );
  }