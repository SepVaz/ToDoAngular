import { Component, inject } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { CommonModule } from '@angular/common';
import { Todo } from '../../core/models/todos.model';
import { FormsModule } from '@angular/forms';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodosService } from '../../services/todos/todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoComponent, CommonModule, FormsModule, TodoInputComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  todos: Todo[] = [];

  todoMessage: string = "";

  todosService: TodosService = inject(TodosService);
$index: number;

  get todosList(){
    return this.todosService.getTodos();
  }

  onTodoSubmit = (todo: Todo) => {
    this.todos.push(todo)
  }



}
