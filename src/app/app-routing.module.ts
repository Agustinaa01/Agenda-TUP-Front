import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/pages/home/home.module').then(m => m.HomeModule),
    //canActivate: [LoggedUserGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./public/pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./public/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./public/pages/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'popup',
    loadChildren: () => import('./public/pages/addcontact/pop-up.module').then(m => m.PopUpModule)
  },
  {
    path: 'deletecontact',
    loadChildren: () => import('./public/pages/deletecontact/deletecontact.module').then(m => m.DeletecontactModule)
  },
  {
    path: 'grupo',
    loadChildren: () => import('./public/pages/grupo/grupo.module').then(m => m.GrupoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
