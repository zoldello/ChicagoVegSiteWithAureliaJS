##Who are we?

**We are ChicagoVeg**

ChicagoVeg – Chicagoland Vegetarian, Vegan, & Raw Foodist Community is non-for-profit organization to support all vegans/vegetarians and educate the public about advantageous of a plant-based diet. Join us for delicious meals, share your favorite recipes, discuss living a healthy (vegetarian - vegan - raw food) lifestyle, support green movement, conscious living, and make new friends! We regularly meet in the city and suburbs for dining, picnics, lectures, movies, visiting local expos, and other events.

##What is this code meant for?

**ChiagoVeg New Homepage**

This is the codebase for our new and forthcoming homepage redesign. It is in beta. You can see a demo of it at: 

Demo site: http://www.chicagoveg.com/dev/new-main-site-staging/

##How do I install
**Typical modern JavaScript Development setup**

1. Install supporting frameworks: node, npm, jspm and git. 

2. Download the code locally by your favorite means. An example of a means is: https://zoldello.wordpress.com/2015/01/08/pulling-down-code-from-github/

3. Download npm dependencies: **npm install**

4. Download JSPM dependencies: **jspm install -y**

5. To run locally, download these local servers from npm: "live-server" or "http-server". You can anyone one you like or even a handmade one if in the mood

##UnBundle

1. To unbundle, run this command: **jspm unbundle**
  
This will unbundle and unminify the numerous files. It is good for development but not for deployment

##Bundling and Deployment

**It is based on Aurelia.js' bundling system**


1. Install gulp via npm IF NOT ALREADY DONE PRIOR: **npm install --save-dev gulp**

2. Run this command in a command line prompt to both bundle and minify code and markup: **gulp bundle** <br>
  <i>Note: You may need to prefix this with "sudo" on linux</i>

3. If deploying to a server, copy these files to the server:
  - dist folder
  - config.js
  - image folder
  - src folder
  - style folder
  
##What is your licensing
**Contact us about that. You can reach us on: http://www.chicagoveg.com/contact.htm**
