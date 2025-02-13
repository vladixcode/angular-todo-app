import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { UserComponent } from './user/user.component'
import { TasksComponent } from './tasks/tasks.component'
import { CardComponent } from './shared/card/card.component'
import { TaskComponent } from './tasks/task/task.component'
import { AddNewTaskComponent } from './tasks/add-new-task/add-new-task.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    CardComponent,
    TaskComponent,
    AddNewTaskComponent,
    CardComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
