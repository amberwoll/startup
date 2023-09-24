# startup cs 260 project
# Shade Seeker
## Elevator Pitch
In shade seeker, you identify which of 4 squares is a different color from the rest. 4 squares of a random color are always on the screen, with 3 of them the same color. The 4th is a slightly off shade. If the user chooses the right ("wrong") shade, they're given a new random color, yet again with one different square, only this time they're even more similar than before. The levels get harder and harder. Beat the high score! 
## Using Each Technology
### Authentication
The game with have a login page that requests a username and password. These will be necessary to save personal high scores and to show up on the leaderboard.
### Database Data
High scores will be associated with a username and a high score. These will all be stored in a database and show up on the user's main game page if they are logged in.
### Websocket Data
A list of high scores, with highest at the top, and usernames will constitute a leaderboard on the leaderboard section of the website. The top scorer's username and high score will also be featured on the main game section of the website.
## Photos
![Home Page]
(/images/shadeseekerhome.png)

![Leaderboard]
(/images/leaderboard.png)

http://3.227.196.38
