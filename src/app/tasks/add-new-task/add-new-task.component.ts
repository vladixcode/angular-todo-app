import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { TasksService } from '../tasks.service'

@Component({
  selector: 'app-add-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.css',
})
export class AddNewTaskComponent {
  @Input({ required: true }) userId!: string
  @Output() closeAddNewTask = new EventEmitter<void>()
  enteredTitle = signal('') // Example: Two-way binding with Signals
  enteredSummary = ''
  enteredDate = ''

  private tasksService = inject(TasksService)

  onCancle() {
    this.closeAddNewTask.emit()
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId,
    )
    this.onCancle()
  }
}
