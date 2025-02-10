import { Component, EventEmitter, Input, Output, output } from '@angular/core'

import { User } from '../../types'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Input Decorator
  // @Input({ required: true }) id!: string
  // @Input({ required: true }) avatar!: string
  // @Input({ required: true }) name!: string

  @Input({ required: true }) user!: User

  // @Output() select = new EventEmitter()
  select = output<string>()

  // Using Signals
  // avatar = input.required<string>()
  // name = input.required<string>()

  get imagePath() {
    return `/assets/users/${this.user.avatar}`
  }

  // Using Signals
  // imagePath = computed(() => `/assets/users/${this.avatar()}`)

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
