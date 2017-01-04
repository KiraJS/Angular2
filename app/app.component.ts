import {Component} from '@angular/core';

class Todo {
  constructor( title: string, completed: boolean = false){
    this.title = title;
    this.completed = completed;
  }
}

const todos: Todo[] = [
  {
    title: 'Изучить JS',
    completed: true
  },
  {
    title: 'Изучить Angular2',
    completed: false
  },
  {
    title: 'Написть приложение',
    completed: true
  }
]

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title: string = 'Angular 2Do';
  todos: Todo[] = todos;
  newTodoTitle: string = '';

  create(){
    let todo: Todo = new Todo(this.newTodoTitle);
    this.todos.push(todo);
    this.newTodoTitle = '';
  }

  toggle(todo : Todo){
    todo.completed = !todo.completed;
  }

  delete(todo: Todo){
    let index = this.todos.indexOf(todo);
    if(index > -1){
      this.todos.splice(index, 1)
    }
  }
}
