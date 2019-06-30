Instructions for running the code:

Install live-server: npm install -g live-server
Move your terminal to where your pages live: cd <path-to-content>
Start the server: live-server .
Open localhost:8080 in a browser.
Click on dashboard.html



Technologies used and architectural choices made:

- Javascript, HTML, CSS, and AJAX fetch API are the core technologies in use.
- I chose to include the student names, attendance percentage, guidance counselor, and home phone number, as these seem like the key pieces of information for putting an intervention in motion.
- I chose to use the fetch API as it is a quick and efficient way to get data from a local json file.  Javascript's filter function makes it easy to pull out the requested data according to the user define threshold.  
