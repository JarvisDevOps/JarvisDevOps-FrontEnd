import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ContactsHomeComponent } from './contacts-home/contacts-home.component'
import { ContactsRoutingModule } from './contacts-routing.module'

@NgModule({
  imports: [CommonModule, ContactsRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [ContactsHomeComponent],
})
export class ContactsModule {}
