(function() {
  // This is the dom node where we will keep our todo
  const container = document.getElementById("todo-container");
  const addTodoForm = document.getElementById("add-todo");

  let state = [
    { id: -3, description: "first todo" },
    { id: -2, description: "second todo" },
    { id: -1, description: "third todo" }
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  const createTodoNode = function(todo) {
    const todoNode = document.createElement("li");

    // you will need to use addEventListener

    // add span holding description
    const todoNodeSpan = document.createElement("span");
    todoNodeSpan.textContent = todo.description;

    // this adds the delete button
    const deleteButtonNode = document.createElement("button");
    deleteButtonNode.textContent = "Delete";
    deleteButtonNode.addEventListener("click", function(event) {
      const newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });

    // add markTodo button
    const markTodo = document.createElement("input");
    markTodo.setAttribute("type", "checkbox");
    if (todo.done) {
      markTodo.checked = true;
      markTodo.setAttribute("style", "text-decoration: line-through;");
    }
    markTodo.addEventListener("click", function(event) {
      let newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
      console.log(newState);
    });
    todoNode.appendChild(markTodo);
    todoNode.appendChild(todoNodeSpan);
    todoNode.appendChild(deleteButtonNode);
    // add classes for css

    return todoNode;
  };

  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      let text = event.target.elements[0];
      if (text.value != "") {
        const newTodo = {
          id: todoFunctions.generateId(),
          description: text.value,
          done: false
        };
        const newState = todoFunctions.addTodo(state, newTodo);
        update(newState);
        console.log(newState);
        text.value = "";
      }
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement("ul");

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
