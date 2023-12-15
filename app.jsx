import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login.jsx';
import { Play } from './play.jsx';
import { Leaderboard } from './leaderboard.jsx';
import { Help } from './help.jsx';
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
                            <li><NavLink className='nav-link' to='index'>Home</NavLink></li>
                            <li><NavLink className='nav-link' to='login'>Login</NavLink></li>
                            <li><NavLink className='nav-link' to='play'>Play the Game</NavLink></li>
                            <li><NavLink className='nav-link' to='leaderboard'>Leaderboard</NavLink></li>
                            <li><NavLink className='nav-link' to='help'>Help</NavLink></li>
                        </menu>
                    </nav>
                </header>
        
                <Routes>
                    <Route path='/index' element={<Home />} exact />
                    <Route path='/login' element={<Login />} exact />
                    <Route path='/play' element={<Play />} />
                    <Route path='/leaderboard' element={<Leaderboard />} />
                    <Route path='/help' element={<Help />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
        
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

  function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }
  