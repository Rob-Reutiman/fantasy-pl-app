# fantasyPL

Patrick Bald - @patrickbald  
Rob Reutiman - @Rob-Reutiman

## Complexity

Our project was rather complex. We used React to build the front end, which included a login/authentication portal, and then 3 sections where users could see featured pics, look at detailed analysis of players, and create their own teams. These were built with an assortment of nested components which used props and state to support our needs. We also used CSS to style our UI to make it appealing and user friendly. As for the back end, we built our server with cherrypy and included a library where we fetched all our data from the Fantasy Premier League API (multiple endpoints) and then modified it to fit our needs. We then used a controller to handle the RESTful API calls made to our server which interfaced with our library. 

# To Run:

### Server:
python3 ./server.py localhost 8000

### Note:
If UI is being blocked by CORS, run this command (if Mac User) to disable web security:   
open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security

Then open GitLab pages link.

# Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
