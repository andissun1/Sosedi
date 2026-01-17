import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

class testArray {
  id: number;
  title: string;
  isCompleted: boolean;
  description?: string;
  priority?: number;
  tags?: Object;
  password?: string;
  url?: string;
}

@Injectable()
export class TaskService {
  private tasks: testArray[] = [
    { id: 1, title: 'New Task', isCompleted: false },
    { id: 2, title: 'New Task', isCompleted: true, description: '123' },
    { id: 2, title: 'New Task', isCompleted: true, priority: 1 },
  ];

  create(taskBody: CreateTaskDto) {
    const task = {
      id: this.tasks.length + 1,
      title: taskBody.title,
      isCompleted: false,
    };

    this.tasks.push(task);
    return this.tasks.at(-1);
  }

  findAll() {
    return this.tasks;
  }

  findOne(id: number) {
    const task = this.tasks[id];
    if (!task) {
      throw new NotFoundException('Кажется что-то не так');
    }
    return task;
  }

  update(id: number, dto: UpdateTaskDto) {
    this.findOne(id);
    this.tasks[id] = {
      id: this.tasks.length + 1,
      ...dto,
    };

    return this.tasks[id];
  }

  patch(id: number, dto: Partial<UpdateTaskDto>) {
    const task = this.findOne(id);

    Object.assign(task, dto);

    this.tasks.push(task);
    return this.tasks[id];
  }

  remove(id: number) {
    this.findOne(id);
    this.tasks.splice(id, 1);
  }
}
