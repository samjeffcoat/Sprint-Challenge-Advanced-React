- [ ] Why would you use class component over function components (removing hooks from the question)?


Our class components can hold state where as functional components will not. We can set initial data in our Class components. 

Functional components are the render methods of class components.  They can be used as presentational components and hold our UI. 

Class Components will hold our state and inialize our data. Class components also give us access to the react life cylce methods like componentWillMount and ComponentDidMount. Class components will be where we make most of our calls dor data. 




- [ ] Name three lifecycle methods and their purposes.///add more- unmount
render()= it handles the rendering of our component to the UI
componentDidMount()- We will use this to make our API calls and can set state after the call

componentwillUnMount()-is called when we need any cleanup to do


componentDidUpdate() - this method is invoked as soon as updating happens. The most common use case is updating the DOM in response to prop or state changes. 




- [ ] What is the purpose of a custom hook?

custom hooks allow us to apply non-visual behavior and stateful logic throughout our components by using them over and over again. We can use them for some common events like controlled inputs, managing event listeners and watching for key presses. 



- [ ] Why is it important to test our apps?

It is important for our apps to be bug free and one of the ways we can do that is by using testing. It also encourages us to write more testable and better code. It is better to spend a little extra time writing tests than it would be to go back and have to fix all of your code later on. This could be very $$$$ to your companies bottom line. 