import { Component, signal, computed } from '@angular/core'

import { DUMMY_USERS } from '../dummy-users'

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Zone
  // selectedUser = DUMMY_USERS[randomIndex]

  // Singal
  selectedUser = signal(DUMMY_USERS[randomIndex])

  // Computed value using Zone
  // get imagePath() {
  //   return `assets/users/${this.selectedUser.avatar}`
  // }

  // Computed value using Signals
  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`)

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

    // Zone
    // this.selectedUser = DUMMY_USERS[randomIndex]

    // Signal
    this.selectedUser.set(DUMMY_USERS[randomIndex])
  }
}
