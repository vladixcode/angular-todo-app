import { Component, EventEmitter, Output, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { type NewTaskData } from '../task/task.model'

@Component({
  selector: 'app-add-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.css',
})
export class AddNewTaskComponent {
  @Output() cancelAddNewTask = new EventEmitter<void>()
  @Output() addNewTask = new EventEmitter<NewTaskData>()
  enteredTitle = signal('') // Example: Two-way binding with Signals
  enteredSummary = ''
  enteredDate = ''
  onCancle() {
    this.cancelAddNewTask.emit()
  }

  onSubmit() {
    this.addNewTask.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    })
  }
}
