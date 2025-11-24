import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Hobbies } from './pages/hobbies/hobbies';

export const routes: Routes = [
    { 
        path: '', 
        component: Home, 
        data: { animation: 'HomePage' } 
    },
    { 
        path: 'projets', 
        component: Projects, 
        data: { animation: 'ProjectsPage' } 
    },
    { 
        path: 'competences', 
        component: Skills, 
        data: { animation: 'SkillsPage' } 
    },
    { 
        path: 'about', 
        component: About, 
        data: { animation: 'AboutPage' } 
    },
    { 
        path: 'hobbies', 
        component: Hobbies, 
        data: { animation: 'HobbiesPage' } 
    },
    { 
        path: 'contact', 
        component: Contact, 
        data: { animation: 'ContactPage' } 
    }
];