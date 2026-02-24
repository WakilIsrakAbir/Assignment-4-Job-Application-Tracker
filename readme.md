### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

=> getElementById() is used when we want to select a single element using its unique ID. getElementsByClassName() is used to select multiple elements that share the same class name. querySelector() allows to select the first element using any CSS selector such as an ID, class, or tag name. querySelectorAll() selects all elements that match a CSS selector.

### 2. How do you create and insert a new element into the DOM?

=> Use document.createElement() to make the element. insert the element into the webpage using methods such as appendChild() or append().

### 3. What is Event Bubbling? And how does it work?

=> Event Bubbling is a process where an event starts from the element that was clicked or triggered and then moves upward through its parent elements. For example, if a button is inside a div and the button is clicked, the event first happens on the button and then continues to the div and other parent elements. This happens automatically unless the event propagation is stopped.

### 4. What is Event Delegation in JavaScript? Why is it useful?

=> Event Delegation is a technique where you add a single event listener to a parent element instead of adding separate listeners to many child elements. Because events bubble up through the DOM, the parent element can detect which child element triggered the event.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

=> The preventDefault() method is used to stop the browser’s normal behavior, such as preventing a form from submitting or stopping a link from opening another page. On the other hand, stopPropagation() prevents the event from moving to parent elements during event bubbling. Simply put, preventDefault() stops the browser’s default action, while stopPropagation() controls how the event travels through the DOM.