# startup cs 260 project
# Shade Seeker
## Elevator Pitch
In shade seeker, you identify which of 4 squares is a different color from the rest. 4 squares of a random color are always on the screen, with 3 of them the same color. The 4th is a slightly off shade. If the user chooses the right ("wrong") shade, they're given a new random color, yet again with one different square, only this time they're even more similar than before. The levels get harder and harder. Beat the high score! 
## Key Features
### Game
The game includes the main 4 squares that change color with every click and a high score box that resets whenever a wrong color is chosen and increments by one whenever a correct color is chosen. This box turns red before resetting so a player can know they made a mistake.
### Leaderboard
The leaderboard updates with the highest score of global players and includes the top 10 high scores. In the background of the leaderboard is a leaderboard image.
### High Score Boxes
The global and personal high score boxes are updated with their respective high scores. The personal high score can only be updated if the player is logged in. These are off to the right of the game. These are updated using JavaScript.
### Login Page
The login page takes a player's username and password then gives additional access to seeing one's own high score on the main page. It also allows the user to make it on the global leaderboard if they beat the global high score.
### Help Page
The help page contains 3 main sections. 1 has the game instructions, 1 has the background for the creation of the game, and 1 has contact info in case there are issues with the game.
### Simon Page
The simon section of the page, accessible with simon.shadeseeker.click, allows you to see a CSS styled Simon game as a sample.
### Other Features
There is a menu that allows access to each of the pages off to the right of the game at all times. Each page of the application shares a title, the logo of the game, with a magnifying glass.
## Using Each Technology
### Authentication
The game with have a login page that requests a username and password. These will be necessary to save personal high scores and to show up on the leaderboard. If they have not logged in before, a register page is shown instead.
### Database Data
High scores will be associated with a username and a high score. These will all be stored in a database and show up on the user's main game page if they are logged in. Users, after logging in, can view their previous scores.
### Websocket Data
A list of high scores, with highest at the top, and usernames will constitute a leaderboard on the leaderboard section of the website. The top scorer's username and high score will also be featured on the main game section of the website. JavaScript sets each player's username with their high score and compares it against other user's data.
## Photos
![Home Page](/images/shadeseekerhome.png)

![Leaderboard](/images/leaderboard.png)

## CSS Deliverable
Header, footer, and main content body - consistent style applied throughout pages

Navigation elements - styled sidebar on each page and updated title upon navigation

Responsive to window resizing- used flex containers and widths that are a percentage of page to make page responsive to resizing

Application elements - game boxes styled to be various colors and 4 square buttons

Application text content - consistent and distinct font and colors

Application images - image on background of leaderboard and as part of logo

## JavaScript Deliverable
JavaScript support for future login - functions to save username and password and display it on game page, toggle between login and register pages

JavaScript support for future database data - leaderboard updated initially with database scores, passwords and usernames with high scores saved to database

JavaScript support for future WebSocket - leaderboard regularly updated via function that will call websocket data

JavaScript support for your application's interaction logic - buttons and gameplay change colors each round and accumulate scores

## Service Deliverable
Created an HTTP service using Node.js and Express: initiated node in project and downloaded express, used both in index.js file for server

Frontend served up using express static middleware: middleware included in service via static file middleware

Frontend calls third party service endpoints: help page includes a random fact section from third party service endpoints

Backend provides service endpoints: scores array saved to a service endpoint on backend to be used in leaderboard and game page

Frontend calls your service endpoints: functions call this array to get it and later update it

## DB Deliverable
MongoDB Atlas database created - initiated and instantiated on the website

Provides backend endpoints for manipulating application data- in database.js file

Stores application data in MongoDB- currently holds scores info on the web

## Login Deliverable
25% - Supports new user registration
25% - Supports existing user authentication
20% - Stores and retrieves credentials in MongoDB
20% - Restricts application functionality based upon authentication