Instructions for running the code:

Install live-server if you don't have it already by running: npm install -g live-server
Navigate in your terminal to where your pages live by running: cd <path-to-content>
Start the server with: live-server .
Open localhost:8080 in a browser.
Click on dashboard.html



Technologies used and architectural choices made:

- Javascript, HTML, CSS, and AJAX fetch API are the core technologies in use.
- I chose to include the student names, attendance percentage, guidance counselor, and home phone number, as these seem like the key pieces of information for putting an intervention in motion.
- I chose to use the fetch API as it is a quick and efficient way to get data from a local json file.  Javascript's filter function makes it easy to pull out the requested data according to the user define threshold.
