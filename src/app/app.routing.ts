import { RouterModule, Routes } from "@angular/router";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { UserComponent } from "./components/user/user.component";

const APP_ROUTES: Routes = 
[
    { path: 'user', component: UserComponent },
    { path: 'user-details', component: UserDetailsComponent },
    { path: 'user-details/:id', component: UserDetailsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'user' }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);