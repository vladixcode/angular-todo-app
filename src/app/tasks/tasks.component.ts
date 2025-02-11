import { Component, EventEmitter, Input, Output } from '@angular/core'
import { TaskComponent } from './task/task.component'
import { type User } from '../user/user.model'
import { type Task, type NewTaskData } from './task/task.model'
import { AddNewTaskComponent } from './add-new-task/add-new-task.component'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddNewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User
  @Output() addTask = new EventEmitter()
  renderAddTaskComponent = false
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user.id)
  }
  onTaskComplete(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId)
  }
  onOpenAddTask() {
    this.renderAddTaskComponent = true
  }
  onCancelAddTask() {
    this.renderAddTaskComponent = false
  }
  onAddTask(taskData: NewTaskData) {
    this.tasks.unshift({ id: new Date().getTime().toString(), userId: this.user.id, ...taskData })
    this.onCancelAddTask()
  }
  tasks: Task[] = [
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
}
