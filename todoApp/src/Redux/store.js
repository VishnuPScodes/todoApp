import { legacy_createStore } from "redux";
import { todoReducer } from "./reducer";


const store=legacy_createStore(todoReducer);

console.log(store.getState());

store.subscribe(()=>{
    console.log('store has changed',store.getState());
})