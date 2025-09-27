import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'projets', component: Projects},
    { path: 'competences', component: Skills },
    { path: 'about', component: About },
    { path: 'contact', component: Contact }
];
