import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AddNewTaskComponent } from './add-new-task.component'

describe('AddNewTaskComponent', () => {
  let component: AddNewTaskComponent
  let fixture: ComponentFixture<AddNewTaskComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewTaskComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(AddNewTaskComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
