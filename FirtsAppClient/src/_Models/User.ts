import { Photo } from './Photo';

export interface User
{
    id:number;
    username:string;
    knownAs:string;
    age:number;
    gender:number;
    created:Date;
    lastActive:Date;
    photoURL:string;
    city:string;
    country:string;
    interests?:string;
    intruduction?:string;
    lookingFor?:string;
    photos?:Photo[];



}