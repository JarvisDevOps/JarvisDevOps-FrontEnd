import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ContactsHomeComponent } from './contacts-home/contacts-home.component'

// const routes: Routes = [
//   { path: '', redirectTo: '/contacts/home', pathMatch: 'full' },
//   { path: 'home', component: ContactsHomeComponent },
// ]

const routes: Routes = [
  {
    path: '',
    component: ContactsHomeComponent,
    children: [
      { path: '', redirectTo: '/contacts/home', pathMatch: 'full' },
      { path: 'home', component: ContactsHomeComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
