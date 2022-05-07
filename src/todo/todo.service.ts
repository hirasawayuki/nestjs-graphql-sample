import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './models/todo.models';

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
}
