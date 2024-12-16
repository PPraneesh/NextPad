# Nextpad
This is platform where writers can share their creative artwork such as stories, poems, songs,... anything
with this plaform writers can edit their work at anytime and, if they want they can soft delete their work.. 
The users can comment on author's work

## setup instructions
1. Clone this repo to your local desktop
2. navigate to BACKEND/api and create a ```.env``` file there, and the following
 - ```MONGODB_URI = 'YOUR MONGO DB URI'```
 - ```PORT = 5000```
3. Navigate to FRONTEND/src/components/root.jsx, change the useState of url to ```http://localhost:5000/```
4. the you will require 2 terminals, one to manage frontend and other to manage backend
5. In the first terminal run the following commands
 - ```cd FRONTEND```
 - ```npm i```
 - ```npm run dev```
6. In the second terminal run the following commands
 - ```cd BACKEND```
 - ```cd api```
 - ```npm i```
 - ```node index``` 
7. go to frontend url, you can see the nextpad is up and running...

## contributions
- Any contributions are accepted, make sure your contribution is working well and not creating an bug..
## contributors
### [karthikeya](https://karthikeyaveruturi.vercel.app)
### Rishit Sura