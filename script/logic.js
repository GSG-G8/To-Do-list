let todoFunctions = {
  generateId: (function() {
    let idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
    return todoFunctions.cloneArrayOfObjects(todos).concat(newTodo);
  },

  deleteTodo: function(todos, idToDelete) {
    return todoFunctions
      .cloneArrayOfObjects(todos)
      .filter(val => val.id != idToDelete);
  },
  markTodo: function(todos, idToMark) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map

    return todos.map(todo => ({
      id: todo.id,
      description: todo.description,
      done: todo.id == idToMark ? !todo.done : todo.done
    }));
  }
};

// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== "undefined") {
  module.exports = todoFunctions;
}
