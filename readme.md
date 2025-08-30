#### What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById("id")
Selects only one element by its unique id.
Always returns a single element or null if not found.

getElementsByClassName("class")
Selects all elements that have the given class name.
Returns an HTMLCollection like an array, but not exactly.

querySelector("selector")
Selects the first element that matches a CSS selector.
Works with #id, .class, tag, or even more selectors

querySelectorAll("selector")
Selects all elements that match a CSS selector.
Returns a NodeList.

getElementById ==> returns one element (id must be unique).
getElementsByClassName ==> returns multiple elements by class, in an HTMLCollection.
querySelector ==> returns the first matching element using CSS selector.
querySelectorAll ==> returns all matching elements in a NodeList.

#### How do you create and insert a new element into the DOM?

In JavaScript, we can create a new element and insert it into the DOM using these main steps:
Create the element with document.createElement().
Add content or attributes (like textContent, id, class, etc.).
Insert it into the DOM using methods like appendChild(), append().

#### What is Event Bubbling and how does it work?

Event Bubbling is a concept in JavaScript where an event starts from the innermost (child) element and then "bubbles up" to its parent elements in the DOM hierarchy.
This means if you click on a child element, the event will first trigger on that child, then move up to its parent, then grandparent, and so on until it reaches the document.

#### What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a JavaScript technique where instead of adding event listeners to multiple child elements, we add a single event listener to their parent element. The parent uses event bubbling to "delegate" the event to the correct child.

#### What is the difference between preventDefault() and stopPropagation() methods?

event.preventDefault()

Purpose: Prevents the default action/behavior of an element.
Example: Stops a form from submitting, stops a link (<a>) from navigating, stops right-click context menu, etc.
It does not stop the event from bubbling or propagating.

event.stopPropagation()

Purpose: Stops the event from bubbling up (or trickling down) the DOM tree.
The event will only run on the current target, not on parent elements.
It does not stop the default behavior of the element.
