const logic = require("./script/logic");
const todoArray = [
  { id: -3, description: "first todo", done: false },
  { id: -2, description: "second todo", done: false },
  { id: -1, description: "third todo", done: false }
];

////////////////////////////////////////////////////////////////////////////////////////////////////////

test("test clone array", () => {
  const actual = logic.cloneArrayOfObjects(todoArray);
  const expected = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: false },
    { id: -1, description: "third todo", done: false }
  ];
  expect(actual).toEqual(expected);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////

test("test add function", () => {
  const actual = logic.addTodo(todoArray, {
    id: 1,
    description: "fourth todo",
    done: false
  });
  const expected = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: false },
    { id: -1, description: "third todo", done: false },
    { id: 1, description: "fourth todo", done: false }
  ];
  expect(actual).toEqual(expected);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////
const todo = [
  { id: -3, description: "first todo", done: false },
  { id: -2, description: "second todo", done: false },
  { id: -1, description: "third todo", done: false },
  { id: 1, description: "fourth todo", done: false }
];

test("test delete todo", () => {
  const actual = logic.deleteTodo(todo, 1);
  const expected = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: false },
    { id: -1, description: "third todo", done: false }
  ];
  expect(actual).toEqual(expected);
});
