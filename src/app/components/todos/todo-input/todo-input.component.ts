import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../../core/models/todos.model';
import { TodosService } from '../../../services/todos/todos.service';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.css'
})
export class TodoInputComponent {

  //@Output() todoSubmit = new EventEmitter<Todo>()

  todoMessage: string = "";

  todosService: TodosService = inject(TodosService)

  onSubmit = () => {
    this.todosService.addTodo(new Todo(this.todoMessage))
    this.todoMessage = "";
  }

  

}
