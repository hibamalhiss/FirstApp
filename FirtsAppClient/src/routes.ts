import { Routes } from "@angular/router";
import { HomeComponent } from './Home/Home.component';
import { ListsComponent } from './Lists/Lists.component';
import { MatchesComponent } from './Matches/Matches.component';
import { MessagesComponent } from './Messages/Messages.component';
import { AuthGuard } from 'guard/auth.guard';

export const appRoutes: Routes = [

    {path : '', component : HomeComponent},
    {path : '',
    runGuardsAndResolvers : 'always' ,
    canActivate : [ AuthGuard] ,
    children : [
        {path : 'matches', component : MatchesComponent},
        {path : 'lists', component : ListsComponent},
        {path : 'messages', component : MessagesComponent}
    ] },
    {path : '**', redirectTo : '' , pathMatch : 'full' }

]