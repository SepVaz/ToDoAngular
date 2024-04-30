import { Injectable } from '@angular/core';
import { Todo } from '../../core/models/todos.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todoList: Todo[] = []

  constructor() { }

  getTodos =  () => {
    return this.todoList;
  }

  addTodo = (todo: Todo) => {
    this.todoList.push(todo);
  }

  removeTodo(todo: Todo) {
    const index = this.todoList.indexOf(todo);
    if (index !== -1) {
      this.todoList.splice(index, 1);
    }
  }
  
}
