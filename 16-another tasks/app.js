const toDoList = {
    
    tasks : [],
    idTask : 0,

    addTask(data){
        this.idTask += 1;
        const newTask = {...data, id: this.idTask};
        this.tasks.push(newTask);
        
        console.log(`Добавлина задача '${data.title}' `);
        },

    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    },

    removeTask(id){
            if (this.getTaskById(id)){
            console.log(`Задача '${this.getTaskById(id).title}' c ${id} id удалена!`);
            return this.tasks = this.tasks.filter(task => task.id !== id);
        }else {
            console.log('Нету задачи с таким id.');
            return null;
        };
        
    },

    updateTask(id,data){
        const taskToUpdate = this.getTaskById(id)
        if(taskToUpdate){
            taskToUpdate.title =  data.title;
            taskToUpdate.priority = data.priority;
            taskToUpdate.description = data.description;
            console.log(`Задача с id ${id} обновлена. Новое название: '${data.title}', новый приоритет: ${data.priority}`);

        }else {
            console.log(`Нету задачи с таким ${id} id.`)
        }
    },
    sortTask(sortBy,reverse=false){
        if(sortBy === 'id' || sortBy==='priority'){
            this.tasks.sort((a,b) =>{
                if(reverse){
                    return b[sortBy] - a[sortBy];
                } else {
                    return a[sortBy] - b[sortBy];
                }
            })
            console.log(`Задачи сортированы были по ${sortBy} и отсаритрованы было по ${!reverse ? 'возвростанию' : 'убыванию'}! `)
        }else{
            console.log('Ошибка напишите по какому параметру сортировать id или priority')
        }
    }

    

}
//Данные для проверки 
const someData ={
    title : "Улица",
    priority : 2,
    description : "Вынести мусор!"
};

const someData2 ={
    title : "Дом",
    priority : 1,
    description : "Помыть посуду"
};

const someData3 ={
    title : "Улица",
    priority : 3,
    description : "Выгулять собаку"
};
//********************************************************************************************/
const newTask = {
    tasks : [],
    idTask : 0,

};

newTask.getTaskById = toDoList.getTaskById;

const newTaskAddTask = toDoList.addTask.bind(newTask);

newTaskAddTask(someData);
newTaskAddTask(someData2);
newTaskAddTask(someData3)

const newTaskRemoveTask = toDoList.removeTask.bind(newTask);
newTaskRemoveTask(2);
const updateNewTask = toDoList.updateTask.bind(newTask);
updateNewTask(1,someData2);
const sortNewTask = toDoList.sortTask.bind(newTask);
sortNewTask('id',true)
console.log(newTask)
sortNewTask('id')
console.log(newTask)