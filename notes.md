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