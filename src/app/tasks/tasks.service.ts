import { Injectable } from '@angular/core'
import { type NewTaskData, type Task } from './task/task.model'

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basics and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  constructor() {
    const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') ?? '[]')

    if (tasks.length) {
      this.tasks = tasks
    }

    this.storeTasks()
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId)
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({ id: new Date().getTime().toString(), userId, ...taskData })
    this.storeTasks()
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId)
    this.storeTasks()
  }

  private storeTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
