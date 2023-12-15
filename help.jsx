import React from 'react';

export function Help() {
  return (
    <main>
        <h1>Help</h1>
        <div class="text">
            <div class="sections">
                <h2>Game Instructions</h2>
                <p>To play the game, click the square that is different. The shades will get more and more difficult to distinguish between from round to round. Try to get as many right as you can and beat your own high score or make it on the leaderboard!</p>
            </div>
            <div class="sections">
                <h2>Information about the Game</h2>
                <p>This game is a semester long project created within a BYU class, CS 260. Code for the game can be found by following the GitHub link at the bottom of the page.</p>
            </div>
            <div class="sections">
                <h2>Random Quote</h2>
                <pre></pre>
            </div>
            <div class="sections">
                <h2>Contact for Help</h2>
                <p>If there are problems with the actual function of the game, please contact <a href="mailto:woll.ambermadison@gmail.com">the author.</a></p>
            </div>
        </div>
    </main>
  );
}