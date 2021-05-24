let input = prompt("what would you like to do");
const todos = ['Collect Chicken ', 'clean Litter box'];
while (input !== 'quit' && input !== 'close') {
    if (input === 'list') {
        console.log('*********************')
        for (let i = 0; i < todos.length; i++) {
            console.log(` ${i}: ${todos[i]}`)
        }
    } else if (input === 'new') {
        const newTodo = prompt('Ok , what is the new todo');
        todos.push(newTodo);
        console.log(`${newTodo} added to list`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('ok enter the index to delete'))
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1)
            console.log(`ok delested ${ deleted[0]}`)
        } else {
            console.log('unknown')
        }
    }
    console.log('**********************');
    input = prompt("would you like to do?")
}
console.log("ok quite the app")