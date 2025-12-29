import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'data');
const postsFile = path.join(dataDirectory, 'posts.json');

export interface Post {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    image?: string;
    category: string;
    date: string;
    author: string;
}

export function getPosts(): Post[] {
    if (!fs.existsSync(postsFile)) {
        return [];
    }
    const fileContents = fs.readFileSync(postsFile, 'utf8');
    try {
        return JSON.parse(fileContents);
    } catch (error) {
        return [];
    }
}

export function savePost(post: Post) {
    const posts = getPosts();
    posts.push(post);
    fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
}

export function deletePost(id: string) {
    let posts = getPosts();
    posts = posts.filter((post) => post.id !== id);
    fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
}



/* Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgpBO3wZi6Hq9DVv6xQj40YvnBOJvIDuQ",
  authDomain: "cebea-5fb4d.firebaseapp.com",
  projectId: "cebea-5fb4d",
  storageBucket: "cebea-5fb4d.firebasestorage.app",
  messagingSenderId: "850489470618",
  appId: "1:850489470618:web:662817da8c4cad9a727923",
  measurementId: "G-P87SCZ67QD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/


