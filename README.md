## Reusable button component

This is an example of how you should build a reusable button component. Tailwind is used for the styling since I want to start focusing less on styling and more on functionality and best coding practices.

<hr />

### How does the reusable button work?
The reusable button is fairly straight forward. Since we are working with typescript, we can create an interface for our button component that looks like this ```interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>```. By extending this interface with ```React.HTMLAttributes<HTMLButtonElement>```, it makes our interface also include every default HTML button property. This allows us to tweek our button component wherever we render it by only passing in the specific properties we want to use. Without extending the interface like this, we could only pass in props that we manually defined ourselves in the interface, which could get very messy if we reuse this component a lot throughout our project. 

### What if we want to pass in custom properties?
Passing in custom properties in this interface is very simple, we can just define them like this, 
```
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	// Define all custom properties we want in the button here
	disabled?: boolean;
}
```
If you try this out before defining any custom properties, you'll notice that the button component will still be missing some properties not supplied by the ```React.HTMLAttributes<HTMLButtonElement>```, such as the disabled property. No worries, we can just follow the code snippet above to add any properties we want!
