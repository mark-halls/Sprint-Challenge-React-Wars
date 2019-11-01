# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a javascript library for building user interfaces. It's component
based meaning we can break our code into smaller pieces of functionality that is
composed together to create our final web page. This also allows us to pass data
throughout our app in a intuitive parent/child manner.

1. What does it mean to think in react?

Thinking in react is a way to take a website from concept to completion. It's a
series of steps that allow us to create meaningful code without a lot of effort.
It generally starts with a mockup, then a component heirarchy, then a static
page, then you identify what state your app needs and where it should live,
finally adding an inverse data flow so your app can update data based on
interaction with the user.

1. Describe state.

State is a persistent dataset that can be manipulated. When it's manipulated it
causes a rerender of the appropriate app components based on what's changed.

1. Describe props.

Props are how we pass data from parent component to child. They are similar to
html attributes.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are any code that is executed after react finished updating the
dom. Side effects are called using the useEffect hook and can be synced to
certain changes through the dependency array parameter.
