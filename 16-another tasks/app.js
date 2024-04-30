import { toDoList } from "../15-task-object/app.js"

const newTask = {
    tasks : [],
    idTask : 1,
    addTask: function(title, priority, description) {
        const task = {
            title,
            id: this.idTask++, 
            priority,
            description
        };
        console.log(`Добавлена задача '${task.title}' с id ${task.id} и описанием ${task.description} `);
        this.tasks.push(task);
    }
};


newTask.removeTask = toDoList.removeTask;
newTask.updateTask = toDoList.updateTask;
newTask.getTaskById = toDoList.getTaskById;
newTask.sortTask = toDoList.sortTask;
newTask.addTask('Тест',11,'Описание')
newTask.removeTask(1)
