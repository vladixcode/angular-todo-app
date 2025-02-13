import { Component, Input } from '@angular/core'

import { TasksService } from './tasks.service'

import { type User } from '../user/user.model'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User
  renderAddTaskComponent = false

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user.id)
  }

  onOpenAddTask() {
    this.renderAddTaskComponent = true
  }
  onCloseAddTask() {
    this.renderAddTaskComponent = false
  }
}
