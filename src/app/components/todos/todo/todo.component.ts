import { Component, Input } from '@angular/core';
import { Todo } from '../../../core/models/todos.model';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../../services/todos/todos.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  @Input() todo: Todo;

  constructor(private todosService: TodosService) {}

  removeTodo() {
    this.todosService.removeTodo(this.todo);
  }

}
