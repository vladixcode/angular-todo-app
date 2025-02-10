import { Component, Input } from '@angular/core'
import { User } from '../../types'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() user?: User
}
