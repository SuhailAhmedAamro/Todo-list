import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([{
            name: "todo",
            type: "input",
            message: "Eid ki Shoping ki hi"
        },
        {
            name: "Addmore",
            type: "confirm",
            message: "Aur kya khareeda",
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.Addmore;
    console.log(todos);
}
