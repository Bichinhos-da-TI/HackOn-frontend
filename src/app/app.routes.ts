import { Routes } from '@angular/router';
import { CadAdminPageComponent } from './features/cad-admin-page/cad-admin-page.component';
import { ConfirmationAdminPageComponent } from './features/confirmation-admin-page/confirmation-admin-page.component';
import { AdminLoginComponent } from './features/admin-login/admin-login.component';

export const routes: Routes = [
  //essa pagina aqui vai ser a default por enquanto posteriormente devemos mudar
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => CadAdminPageComponent,
  },
  {
    path: 'admin/confirmation',
    pathMatch: 'full',
    loadComponent: () => ConfirmationAdminPageComponent,
  },
  {
    path: 'admin/login',
    pathMatch: 'full',
    loadComponent: () => AdminLoginComponent,
  },
];
