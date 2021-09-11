/*
At the end of the day. 
When we are writing TypeScript, we are really just writing JavaScript. 
Thats what's really happing there. 

All that knowledge that you have destructuring, spread operators, arrow functions, closures, classes,async await, and more still applies to the TypeScript World as well. 

The only thing we are that we are doing with TS is adding in a little bit addictional syntax to the code to handle something called a type system.

This is what TS is.

The Type System: 
- The goal of the type system is to help us catch errors during development.
    In other words when we are actually writing our code in our favorite code editor.

Think about how we catch errors right now with JavaScript. 
Imagine that you are writing some amount if JavaScript in your editor and maybe there is a bug inside of it.

How would you find that bug.

Well, with JavaScript, the only way to do that is to actually execute your code and see that error appear and thats not super efficient.
 So, as am improvement to the development workflow we use the type system to help us catch errors during development.

While you write code TS will keep constantly analyzing it and looking for bugs. If it finds a bug its then going to pop open an error message inside of your code editor until you fix it. 

To do this error checking, the TS compiler is going to use something called Type annotations to analyze out code based.
You will be responsible for adding Type Annotations.

You can kind of think of this type annotations as little comments to describe the purpose of our code or the information that is flowing through our program.

The Type System is only active during development, so in other words once we go to deploy our application or even run it inside a browser in a developmene environmant the entire type system falls away.
Your browser has no idea what typescript is.
and Node.js likewise node.js has no idea what ts is either.
So, all this extra syntax that we are going to write in our code never makes it into the browser, it never makes into node.js.

We are going to first compile our typescript and we are going to get JavaScript out of that. That javascript is what we are going to actually execute.

Finally.
This is something i want to point out. Its because it is little bit different than other languages that are strongly typed.
The TS compiler does not do any performance optimization whatsoever.
This is very different than msny other languages.
In many other languages, the type system can  be used to optimise  some code that you write using the compiler that is not the case here with typescript.

*/
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Interfaces in TS are used to define the structure of an object.
// The goal of typescript is to help us catch errors during development. 
axios({
  url,
}).then(res => {
  /*
  res.data has properties of:
  id
  title
  completed
  */
  const todo = res.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
}
);
const logTodo = (id: number, title: string, completed: boolean) => {
  //                   ^^ -> type annotation
  console.log(
    `The Todo with ID: ${id}.
     Has a title of: ${title}
     Is it finished? ${completed}
    `
  );
};
