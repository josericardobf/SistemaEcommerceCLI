import {Routes, RouterModule } from '@angular/router'
import { ClienteListComponent } from './cliente-list/cliente-list.component';

const CLIENTES_ROUTES: Routes = [
    {
        path: '',
        component: ClienteListComponent
    }
];

export const clientesRouting = RouterModule.forChild(CLIENTES_ROUTES);