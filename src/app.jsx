import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Leaderboard } from './leaderboard/leaderboard';
import { Help } from './help/help';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div>
        <header>
            <div className="title-line" >
                <h1 className="top">Shade Seeker<sup>&reg;</sup></h1>  
            </div>

            <nav>
                <menu>
                    <li><NavLink className='nav-link' to='login'>Login</NavLink></li>
                    <li><NavLink className='nav-link' to='play'>Play the Game</NavLink></li>
                    <li><NavLink className='nav-link' to='leaderboard'>Leaderboard</NavLink></li>
                    <li><NavLink className='nav-link' to='help'>Help</NavLink></li>
                </menu>
            </nav>
        </header>
  
        <Routes>
            <Route path='/login' element={<Login />} exact />
            <Route path='/play' element={<Play />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
            <Route path='/help' element={<Help />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
  
        <footer>
            <hr />
            <span className="text-reset">Created by Amber Woll, 2023</span>
            <br />
            <a href="https://github.com/amberwoll/startup">GitHub</a>
        </footer>
      </div>
  </BrowserRouter>
);

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }

export default App;