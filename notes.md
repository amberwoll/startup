if there are conflicts in a file compared to the github version of the file, when you commit and push you can resolve merge issues and create a merge commit

http://3.227.196.38

simon css and simon html added using command:
./deployFiles.sh -k ~/Downloads/production.pem -h shadeseeker.click -s simon

midterm review:

In the following code, what does the link element do?
Answer: The link element is used to link an external resource, such as a stylesheet, to an HTML document.

In the following code, what does a div tag do?
Answer: A div tag is a block-level HTML element that is typically used to group and structure content on a web page. It is often used for layout and styling purposes.

In the following code, what is the difference between the #title and .grid selector?
Answer: The #title selector targets an HTML element with the "id" attribute of "title," while the .grid selector targets HTML elements with the "class" attribute of "grid."

In the following code, what is the difference between padding and margin?
Answer: Padding is the space inside an element between its content and its border, while margin is the space outside an element, affecting its positioning relative to other elements.

Given this HTML and this CSS, how will the images be displayed using flex?
Answer: 
Flex Container: Designate a container as a flex container using display: flex;.
Main Axis and Cross Axis: Determine the main axis (e.g., horizontal or vertical) and cross axis within the flex container.
Justify Content: Use justify-content to control item distribution along the main axis (e.g., flex-start, center, space-between).
Align Items: Utilize align-items to align items along the cross axis (e.g., center, stretch).
Align Self: Override the cross-axis alignment for individual items using align-self.
Flex Direction: Set flex-direction to control the layout direction (e.g., row, column).

What does the following padding CSS do?
Answer: 
Padding: Padding in CSS is used to create space inside an element.
Padding Properties: The padding property is used to set padding for all sides, while padding-top, padding-right, padding-bottom, and padding-left can be used for individual sides.
Shorthand: You can use shorthand properties like padding to set padding for all sides at once (e.g., padding: 10px;) or specify individual sides (e.g., padding: 10px 20px; for top/bottom and left/right).
Box Model: Padding is part of the CSS box model and affects the space between an element's content and its border.
Percentage Values: Padding can be set using percentage values, which are relative to the width of the containing element.

What does the following code using arrow syntax function declaration do?
Answer: Arrow functions also have special rules for the return keyword. The return keyword is optional if no curly braces are provided for the function and it contains a single expression. In that case the result of the expression is automatically returned. If curly braces are provided then the arrow function behaves just like a standard function.

() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3

What does the following code using map with an array output?
Answer: 
| Function | Meaning                                     | Example                                       |
| -------- | ------------------------------------------- | --------------------------------------------- |
| push     | Add an item to the end of the array         | `a.push(4)`                                   |
| pop      | Remove an item from the end of the array   | `x = a.pop()`                                |
| slice    | Return a sub-array                         | `a.slice(1, -1)`                             |
| sort     | Run a function to sort an array in place   | `a.sort((a, b) => b - a)`                     |
| values   | Creates an iterator for use with a for... | `for (i of a.values()) {...}`                |
| find     | Find the first item satisfied by a tes... | `a.find(i => i < 2)`                         |
| forEach  | Run a function on each array item          | `a.forEach(console.log)`                     |
| reduce   | Run a function to reduce each array it... | `a.reduce((a, c) => a + c)`                  |
| map      | Run a function to map an array to a ne... | `a.map(i => i + i)`                          |
| filter   | Run a function to remove items             | `a.filter(i => i % 2)`                      |
| every    | Run a function to test if all items ma... | `a.every(i => i < 3)`                        |
| some     | Run a function to test if any items match  | `a.some(i => i > 1)`                         |

What does the following code output using getElementByID and addEventListener?
Answer: 
getElementById: This is a JavaScript method used to select and access an HTML element by its unique "id" attribute. For example, if you have an element with the id "myElement," you can use document.getElementById("myElement") to obtain a reference to that specific element. This method is handy for manipulating or modifying the content and attributes of the selected element.
addEventListener: This is a method used to attach event handlers to HTML elements, allowing you to define what happens when specific events occur on the element, such as a click, input, or mouseover event. For example, you can use element.addEventListener("click", myFunction) to execute "myFunction" when the specified element is clicked. This enables you to add interactivity and functionality to your web pages.

What does the following line of Javascript do using a # selector?
Answer: A line of JavaScript using a # selector might select an element with a specific ID using the document.querySelector('#id') method.

Which of the following are true? (mark all that are true about the DOM)
Answer: 

By default, the HTML span element has a default CSS display property value of:
Answer: By default, the HTML span element has a display property value of "inline."

How would you use CSS to change all the div elements to have a background color of red?
Answer: You can use the following CSS rule: div { background-color: red; }.

How would you display an image with a hyperlink in HTML?
Answer: You can use the <a> (anchor) element to create a hyperlink and include an <img> (image) element within it, specifying the image source using the "src" attribute.

In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
Answer: The ordering of box layers in the CSS box model, from the inside out, is Content, Padding, Border, Margin.

Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?


What will the following code output when executed using a for loop and console.log?

How would you use JavaScript to select an element with the id of "byu" and change the text color of that element to green?
Answer: 
const element = document.getElementById("byu");
element.style.color = "green";

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
Answer:
Paragraph: <p>
Ordered List: <ol>
Unordered List: <ul>
Second Level Heading: <h2>
First Level Heading: <h1>
Third Level Heading: <h3>

How do you declare the document type to be HTML?
Answer: You can declare the document type for HTML by using the following DOCTYPE declaration at the beginning of your HTML document: <!DOCTYPE html>

What is valid JavaScript syntax for if, else, for, while, switch statements?
Answer:
if statement: if (condition) { /* code to execute if condition is true */ }
else statement: if (condition) { /* code for true condition */ } else { /* code for false condition */ }
for loop: for (initialization; condition; iteration) { /* loop code */ }
while loop: while (condition) { /* loop code */ }
switch statement: switch (expression) { case value1: /* code */ break; case value2: /* code */ break; default: /* default code */ }

What is the correct syntax for creating a JavaScript object?
Answer: JavaScript objects can be created using object literal notation, like this:
javascript
const myObject = { key1: value1, key2: value2 };

Is it possible to add new properties to JavaScript objects?
Answer: Yes, you can add new properties to JavaScript objects dynamically. For example: myObject.newProperty = "new value";

If you want to include JavaScript on an HTML page, which tag do you use?
Answer: You can include JavaScript on an HTML page using the <script> tag.

Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

Which of the following correctly describes JSON?
Answer: JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is often used for data exchange between a server and a web application.

What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?
Answer:
chmod: Change file permissions.
pwd: Print the current working directory.
cd: Change the current directory.
ls: List directory contents.
vim: A text editor.
nano: A text editor.
mkdir: Create a new directory.
mv: Move or rename files/directories.
rm: Remove files or directories.
man: Display manual pages for commands.
ssh: Secure Shell, used for remote access.
ps: List running processes.
wget: Retrieve files from the internet.
sudo: Execute a command with superuser privileges.

Which of the following console command creates a remote shell session?
Answer: The ssh command is used to create a remote shell session.

Which of the following is true when the -la parameter is specified for the ls console command?
Answer: When you use ls -la, it lists all files (including hidden files) in long format, showing detailed information about each file and directory.

Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
Answer:
Top Level Domain (TLD): "click"
Subdomain: "bozo"
Root Domain: "fruit"

Is a web certificate is necessary to use HTTPS?
Answer: Yes, a web certificate (SSL/TLS certificate) is necessary to use HTTPS. It encrypts data transmitted between the web server and the user's browser, ensuring secure communication.

Can a DNS A record point to an IP address or another A record?
Answer: A DNS A record directly points to an IP address and not to another A record. However, you can create a CNAME (Canonical Name) record to point to another domain or subdomain, which may have its own A record.

Port 443, 80, 22 is reserved for which protocol?
Answer:
Port 443: Reserved for HTTPS (SSL/TLS).
Port 80: Reserved for HTTP.
Port 22: Reserved for SSH (Secure Shell).

What will the following code using Promises output when executed?
Answer: Example with comments-
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate a network request (e.g., fetching data from an API)
    setTimeout(() => {
      const data = { message: "Data fetched successfully" };
      const error = null; // No error

      if (error) {
        reject(error); // Reject the promise if there is an error
      } else {
        resolve(data); // Resolve the promise with the data
      }
    }, 2000); // Simulate a 2-second delay
  });
}

// Using the fetchData function with Promises
fetchData()
  .then((data) => {
    // This block is executed when the promise is resolved (data fetched successfully)
    console.log(data.message);
  })
  .catch((error) => {
    // This block is executed when the promise is rejected (an error occurred)
    console.error("Error:", error);
  });


The ports used for various protocols are as follows:

HTTP (Hypertext Transfer Protocol): Uses port 80. It's the foundation of data communication for the World Wide Web.
HTTPS (HTTP Secure): Uses port 443. It's the secure version of HTTP, used for secure communication over a computer network.
SSH (Secure Shell): Uses port 22. It's a cryptographic network protocol for operating network services securely over an unsecured network.

1xx - Informational.
2xx - Success.
3xx - Redirect to some other location, or that the previously cached resource is still valid.
4xx - Client errors. The request is invalid.
5xx - Server errors. The request cannot be satisfied due to an error on the server.

Code	Text	Meaning
100	Continue	The service is working on the request
200	Success	The requested resource was found and returned as appropriate.
201	Created	The request was successful and a new resource was created.
204	No Content	The request was successful but no resource is returned.
304	Not Modified	The cached version of the resource is still valid.
307	Permanent redirect	The resource is no longer at the requested location. The new location is specified in the response location header.
308	Temporary redirect	The resource is temporarily located at a different location. The temporary location is specified in the response location header.
400	Bad request	The request was malformed or invalid.
401	Unauthorized	The request did not provide a valid authentication token.
403	Forbidden	The provided authentication token is not authorized for the resource.
404	Not found	An unknown resource was requested.
408	Request timeout	The request takes too long.
409	Conflict	The provided resource represents an out of date version of the resource.
418	I'm a teapot	The service refuses to brew coffee in a teapot.
429	Too many requests	The client is making too many requests in too short of a time period.
500	Internal server error	The server failed to properly process the request.
503	Service unavailable	The server is temporarily down. The client should try again with an exponential back off.

HTTP status codes are grouped into classes of responses. The meanings of the 300, 400, and 500 ranges are:

300 Range (Redirection Messages): These codes indicate that the client must take additional action to complete the request. For example, 301 is "Moved Permanently," and 302 is "Found" (previously "Moved temporarily").
400 Range (Client Error Responses): These codes signify that the client seems to have erred. For example, 404 is "Not Found," and 401 is "Unauthorized."
500 Range (Server Error Responses): These indicate that the server failed to fulfill an apparently valid request. For example, 500 is "Internal Server Error," and 503 is "Service Unavailable."
The Content-Type HTTP header is used to indicate the media type of the resource. In responses, a Content-Type header tells the client what the content type of the returned content actually is. This helps the client to understand how to process the response. For example, Content-Type: text/html; charset=UTF-8 tells the browser that the content is HTML with UTF-8 encoding. It's crucial for handling and displaying content correctly on the web.

Verb	Meaning
GET	Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.
POST	Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.
PUT	Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource.
DELETE	Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.
OPTIONS	Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.


Domain: This attribute specifies the domain for which the cookie is valid and to which the cookie can be sent from the client. If not specified, it defaults to the domain of the document setting the cookie. For example, if a cookie is set by example.com, it can't be read by subdomain.example.com unless the domain attribute is set to .example.com (the leading dot allows subdomains to access the cookie).
Path: This attribute defines the path within the domain for which the cookie is valid. The browser will only send the cookie for requests to resources within the specified path. For example, if Path=/foo is set, the cookie is sent for requests to example.com/foo and its subdirectories, such as example.com/foo/bar, but not for requests to example.com/bar.
SameSite: This attribute is used to assert that a cookie must not be sent along with cross-site requests. It provides some protection against cross-site request forgery attacks (CSRF). It has three values:
SameSite=Strict: The cookie will only be sent along with "same-site" requests.
SameSite=Lax: The cookie will be sent with top-level navigations and allowed in a same-site context.
SameSite=None: The cookie will be sent with both cross-site and same-site requests, but only if the Secure attribute is also set (requires a secure context/HTTPS).
HTTPOnly: This attribute is used to help prevent attacks such as cross-site scripting, since it does not allow the cookie to be accessed via JavaScript. If HttpOnly is set, the cookie cannot be accessed through client-side scripts, making the cookie less of a risk to malicious scripts. This is particularly important for cookies containing sensitive data, like session identifiers.

7.
MongoDB Query Breakdown
The given query is:

json
{ cost: { $gt: 10 }, name: /fran.*/ }
Understanding the Query Structure:
cost: { $gt: 10 } - This part of the query filters documents where the cost field has a value greater than 10.
name: /fran.*/ - This part uses a regular expression to filter documents where the name field matches the pattern. The pattern /fran.*/ will match any string that starts with "fran" and may be followed by zero or more characters. The . represents any character, and * means zero or more times.
Apply to a MongoDB Collection:
To select all documents matching this query, you would use it in a find operation on your MongoDB collection. Assuming your collection is named items, the command in a MongoDB shell or a similar interface would be:
javascript
db.items.find({ cost: { $gt: 10 }, name: /fran.*/ });
This command will return all documents in the items collection where the cost is greater than 10 and the name starts with "fran", followed by any set of characters.
Interpreting the Results:
The documents returned will only be those that satisfy both conditions simultaneously.
It's important to remember that MongoDB queries are case sensitive by default. So, fran will not match Fran unless you use the i flag in the regex (/fran.*/i).
Executing the Query:
You would typically execute this query within a MongoDB client – this could be a command-line shell, a GUI tool like MongoDB Compass, or within a server-side script (using a MongoDB driver appropriate to the server's programming language).
Testing and Validation:
If you're unsure about the query results, it's often helpful to test the query on a subset of data, or use tools that can visualize the query results for easier inspection.

8. 
So instead of storing the password directly, we want to cryptographically hash the password so that we never store the actual password. When we want to validate a password during login, we can hash the login password and compare it to our stored hash of the password.

9. 
WebSockets provide a bi-directional, full-duplex communication channel that allows for real-time data exchange between a client and a server over a single, persistent connection. This is different from the traditional HTTP request-response model, which requires a new connection for each exchange. Once the WebSocket connection is established through an initial HTTP handshake upgraded with Upgrade and Sec-WebSocket-Key headers, both the client and server can send data directly to each other. This process reduces overhead, enhances performance, and is particularly effective for applications requiring frequent, small data exchanges, like chat apps or live updates.

For example, consider a simple WebSocket server in Node.js using the ws library and a client in JavaScript:

javascript
// Node.js Server
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});

// JavaScript Client
const socket = new WebSocket('ws://localhost:8080');

socket.onopen = function(e) {
  console.log("Connection established");
  socket.send("Hello Server!");
};

socket.onmessage = function(event) {
  console.log("Message from server: " + event.data);
};
When this code is executed, the server listens for connections and messages. When a client connects and sends "Hello Server!", the server logs "received: Hello Server!" to its console. The server then sends "something" to the client, which logs "Message from server: something" to the browser's console. This exemplifies the real-time, two-way communication capability of WebSockets.


### 10. What is the WebSocket protocol used for?
The WebSocket protocol provides a full-duplex communication channel over a single, long-lived connection. It's used primarily for interactive applications where real-time data exchange is crucial, such as in chat applications, live sports updates, online gaming, or financial trading platforms. Unlike HTTP, WebSocket allows continuous two-way communication between the client and the server.

### 11. What is JSX and how are the curly braces rendered?
JSX (JavaScript XML) is a syntax extension for JavaScript, often used with React to describe the UI structure. JSX looks like HTML but allows you to embed JavaScript expressions inside curly braces `{}`. These braces can contain any JavaScript expression, which will be evaluated and its result will be rendered in the UI. For example, `{props.name}` in JSX would display the value of `props.name`.

### 12. What content will the following React component generate?
The provided React component will render the following HTML content:
```html
<div>
  <h1>Hello, Sara</h1>
  <h1>Hello, Cahal</h1>
  <h1>Hello, Edite</h1>
</div>
```
Each `Welcome` component call renders an `<h1>` element with a greeting message personalized with the provided name prop.

### 13. What content will the React component `Numbers` generate?
The `Numbers` component will render an unordered list (`<ul>`) with list items (`<li>`) for each number in the `numbers` array. The output will be:
```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>
```

### 14. What does the following React component do?
The `Example` component is a simple counter. It declares a state variable `count`, initialized to 0. The component renders a paragraph showing the current count and a button. Clicking the button increments `count` by 1. This component demonstrates basic state management and event handling in React.

### 15. What are React Hooks used for?
React Hooks are functions that let you “hook into” React state and lifecycle features from function components. They are used for managing state, handling side effects, context, refs, and more, without writing a class.

### 16. What is the useEffect hook used for?
The `useEffect` hook is used to perform side effects in function components. Side effects can be data fetching, subscriptions, or manually changing the DOM. It can replace several lifecycle methods in class components like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

### 17. What does the provided React Router code do?
The provided code sets up routing for a React application using React Router. It defines several routes within a `BrowserRouter`:
- `/` renders a `Layout` component.
- `/blogs` renders a `Blogs` component.
- `/contact` renders a `Contact` component.
- Any other path (`*`) renders a `NoPage` component.
This setup allows for navigable pages without full page refreshes, enabling a smoother user experience.

### 18. What role does npm play in web development?
npm (Node Package Manager) is a package manager for JavaScript. It is used to manage dependencies for an application, allowing developers to install, update, and manage packages from the npm registry. It's essential for managing libraries, frameworks, and other tools in web development projects.

### 19. What does package.json do in an npm project?
`package.json` is a file in npm projects that holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project and handle its dependencies. It can include things like project description, version, author, license, scripts, and a list of dependencies required by the project.

### 20. What does the fetch function do?
The `fetch` function is used to make network requests. It is a modern, promise-based way to make HTTP requests in JavaScript. It is commonly used for API calls and supports both GET and POST methods, among others. It returns a promise that resolves to the `Response` object representing the response to the request.

### 21. What does Node.js do?
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It enables JavaScript to be used for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web application development around a single programming language, rather than different languages for server-side and client-side scripts.

### 22. What does Vite do?
Vite is a modern frontend build tool that significantly improves

 the frontend development experience. It provides fast cold server start, instantaneous hot module replacement (HMR), and true on-demand compilation without bundling. This results in a faster development environment, making it easier and more efficient to build web applications. Vite is designed to work out of the box with Vue, React, and other modern web frameworks.


MIDDLEWARE

Defining routes

HTTP endpoints are implemented in Express by defining routes that call a function based upon an HTTP path. The Express app object supports all of the HTTP verbs as functions on the object. For example, if you want to have a route function that handles an HTTP GET request for the URL path /store/provo you would call the get method on the app.

app.get('/store/provo', (req, res, next) => {
  res.send({name: 'provo'});
});
The get function takes two parameters, a URL path matching pattern, and a callback function that is invoked when the pattern matches. The path matching parameter is used to match against the URL path of an incoming HTTP request.

The callback function has three parameters that represent the HTTP request object (req), the HTTP response object (res), and the next routing function that Express expects to be called if this routing function wants another function to generate a response.

The Express app compares the routing function patterns in the order that they are added to the Express app object. So if you have two routing functions with patterns that both match, the first one that was added will be called and given the next matching function in the next parameter.

In our example above we hard coded the store name to be provo. A real store endpoint would allow any store name to be provided as a parameter in the path. Express supports path parameters by prefixing the parameter name with a colon (:). Express creates a map of path parameters and populates it with the matching values found in the URL path. You then reference the parameters using the req.params object. Using this pattern you can rewrite our getStore endpoint as follows.

app.get('/store/:storeName', (req, res, next) => {
  res.send({name: req.params.storeName});
});
If we run our JavaScript using node we can see the result when we make an HTTP request using curl.

➜ curl localhost:8080/store/orem
{"name":"orem"}
If you wanted an endpoint that used the POST or DELETE HTTP verb then you just use the post or delete function on the Express app object.

The route path can also include a limited wildcard syntax or even full regular expressions in path pattern. Here are a couple route functions using different pattern syntax.

// Wildcard - matches /store/x and /star/y
app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

// Pure regular expression
app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));
Notice that in these examples the next parameter was omitted. Since we are not calling next we do not need to include it as a parameter. However, if you do not call next then no following middleware functions will be invoked for the request.

Using middleware

📖 Deeper dive reading: Express Middleware

The standard Mediator/Middleware design pattern has two pieces: a mediator and middleware. Middleware represents componentized pieces of functionality. The mediator loads the middleware components and determines their order of execution. When a request comes to the mediator it then passes the request around to the middleware components. Following this pattern, Express is the mediator, and middleware functions are the middleware components.

Express comes with a standard set of middleware functions. These provide functionality like routing, authentication, CORS, sessions, serving static web files, cookies, and logging. Some middleware functions are provided by default, and other ones must be installed using NPM before you can use them. You can also write your own middleware functions and use them with Express.

A middleware function looks very similar to a routing function. That is because routing functions are also middleware functions. The only difference is that routing functions are only called if the associated pattern matches. Middleware functions are always called for every HTTP request unless a preceding middleware function does not call next. A middleware function has the following pattern:

function middlewareName(req, res, next)
The middleware function parameters represent the HTTP request object (req), the HTTP response object (res), and the next middleware function to pass processing to. You should usually call the next function after completing processing so that the next middleware function can execute.


