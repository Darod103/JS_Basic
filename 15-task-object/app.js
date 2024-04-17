const toDoList = {
    
    tasks : [],
    idTask : 1,

    addTask(title,priority){
        const task = {
            title,
            id : this.idTask++,
            priority
        }
        console.log(`Добавлина задача '${task.title}' с id ${task.id}`);
        this.tasks.push(task);
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

    updateTask(id,newTitle,newPriority){
        const taskToUpdate = this.getTaskById(id)
        if(taskToUpdate){
            taskToUpdate.title = newTitle !== undefined ? newTitle : taskToUpdate.title;
            taskToUpdate.priority = newPriority !== undefined ? newPriority : taskToUpdate.priority;
            console.log(`Задача с id ${id} обновлена. Новое название: '${taskToUpdate.title}', новый приоритет: ${taskToUpdate.priority}`);

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

toDoList.addTask('Выгулять собаку',1)
toDoList.addTask('Помыть посуду',2)
toDoList.addTask('Заправить постель',3)
toDoList.sortTask("id",false)
toDoList.sortTask('priority',true)
toDoList.sortTask('test',)
toDoList.updateTask(2,'Помыть полы',2)
toDoList.removeTask(1)
console.log(toDoList.tasks)
