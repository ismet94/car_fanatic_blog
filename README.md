# car_fanatic_blog
Car Enthusiast Blog

Hyped by the engine that roars, energized by the wheels that spin, moved by the speed of the force. An all time blog website to surely get you off your seat and into the garage. The blog is aimed at high performance vehicles to your everyday car gadgets. Focused on latest blogs and a constant updates of the best trends. 

The website was aimed at vehicles reason being my passion for any mechanical and technological. I started off with a wirefram layout using a parallax effect to split each blog apart from each other. The color scheme had a cream, brown, white effect to it. By this I added gradients to most images to fit the theming. All images are photoshoped by compressing the size to adding effects and cropping. Next was pull the website dynamically, all information was stored in the db.json a database where data can be pulled from. 


## Setting up my workspace

- Created a new repository on the Github named ismet94/car_fanatic_blog
- Save to desired directory
- Created a base folder structure this included the images folder, icons, file, css, js and scss using the make directory command as seen below:
```
mkdir "name of folder being created"
```
also used the touch command to create my files.
```
touch "name of file being created"
```
- Cloned the furniture-shop to the desktop uising gitBash command as seen below:
```
git clone https://github.com/ismet94/car_fanatic_blog.git

```
- Pushed all code to the Github and adding a message to keep track of the code im uploading, below are these commands:
```
cd car_fanatic_blog
git add .
git commit -m "Message to display on the github website"
git push -u origin master

```
- When working on another workbench the git pull function was used.
```
cd car_fanatic_blog
git pull

```
- Installed nodejs into repo adn started when working
```
npm install express-generator -g
express --view=ejs
npm install -g json-server --save
touch posts.json
npm install

```
- Install 
```
npm install jquery --save
npm install popper.js@^1.12.3 --save
npm install bootstrap --save
npm install nodemon --save

```
- Watch app / Start App with eithr:
```
 npm start

```
or

```
 nodemon app.js

```
- Watch db.json with port (Database)
```
 json-server --watch db.json --port 3004

```
- Updated Readme file on a regular bases.
- Created Live Link as listed below.


## Live Link

- https://ismet94.github.io/car_fanatic_blog/

## Prevalent Technologies Used

- HTML
- CSS
- SASS
- Javascript
- GitBash

### Other Technologies Used

- Photoshop CS6
- Macromedia Freehand 11
 

Technologies and Tools Used:

- HTML5 Guide Book
- Google Research
- GitHub Articles
- W3schools
- Coolers.co

Languages:

- HTML
- CSS
- SASS
- Javascript


Tools:

- GitBash
- Github
- Visual Studio Code
- Google Chrome
- Microsoft Edge
- WordPad
- Photoshop CS6
- Macrodmedia Freehand

### Changelog

2019-04-01:
- Changed port to 8080 to run app
- Created hero section for index.ejs
- Used CSS for the mean time

2019-04-02:
- Added bootstrap Navbar
- Selected main image
- Created first blog and added colour
- Made grid layout for blog 1
- Added delete.js with code

2019-04-03:
- Added create.js with code
- Completed structure for index.ejs
- Added footer and copyright
- Incorporated parallax layout

2019-04-04:
- Created the register.js with code
- Styled Navbar
- Edited sections

2019-04-05:
- Created sign-out js file 
- Created archive ejs
- Edited navbar hover effects
- Uploaded file to Openshift (Red Hat)

2019-04-06:
- Added regsiter ejs file
- Completed footer with details
- Edited app.js so that the ports run on both 3000 and 8080
- Added code for each js file in routes

2019-04-07:
- Pulled page dynamically but kept getting an error
- Glowing effect added to main heading and sub heading
- Started on responsiveness

## Contributors

Ismet Samsodien - 2019







