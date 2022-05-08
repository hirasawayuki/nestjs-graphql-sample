import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo, TodoStatus } from './models/todo.models';
import { v4 } from 'uuid';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
  }

  findOneById(id: string): Todo {
    const result = this.todos.find((todo) => id === todo.id);
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  create(title: string, description: string): Todo {
    const todo: Todo = {
      title,
      description,
      id: v4(),
      status: TodoStatus.NEW,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.todos.push(todo);
    return todo;
  }
}
