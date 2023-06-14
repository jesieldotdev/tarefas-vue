import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDDQXepg6eW_fygTg6_LM9t1eVPhTvULDc",
  authDomain: "lista-de-tarefas-c7323.firebaseapp.com",
  databaseURL: "https://lista-de-tarefas-c7323-default-rtdb.firebaseio.com",
  projectId: "lista-de-tarefas-c7323",
  storageBucket: "lista-de-tarefas-c7323.appspot.com",
  messagingSenderId: "302470237725",
  appId: "1:302470237725:web:f0e82f04371de15a4e40f4",
  measurementId: "G-RR9LLY7NB2"
};



export const app = initializeApp(firebaseConfig);
export const firebaseApp = initializeApp(firebaseConfig);