import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Delete } from './components/delete/delete';
import { LoginRegister } from './components/login-register/login-register';
import { Profile } from './components/profile/profile';
import { RoomForm } from './components/room-form/room-form';
import { Room } from './components/room/room';
import { UpdateUser } from './components/update-user/update-user';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'StudyBuddy - Find study partners around the world!'
    },
    {
        path: 'delete',
        component: Delete,
    },
    {
        path: 'login',
        component: LoginRegister
    },
    {
        path: 'register',
        component: LoginRegister,
    },
    {
        path: "details/:id",
        component: Profile,
    },
    {
        path: 'create-room',
        component: RoomForm,
    },
    {
        path: 'room/:id',
        component: Room,
    },
    {
        path: 'update-user',
        component: UpdateUser,
    }
];
