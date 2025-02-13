import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { TasksComponent } from './tasks.component'
import { TaskComponent } from './task/task.component'
import { AddNewTaskComponent } from './add-new-task/add-new-task.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [TasksComponent, TaskComponent, AddNewTaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
