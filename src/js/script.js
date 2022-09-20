import { Book } from "./object";
import {container, addBookBtn, form, cancel, body, submit, tt, au, pg, rd} from './dom';
import '../css/style.scss'

// events and styling
addBookBtn.addEventListener('click', ()=>{
    form.style.display = "block";
})

cancel.addEventListener('click', ()=>{
    form.style.display = "none"
})

submit.addEventListener('click', ()=>{
    const fourthBook = new Book(`${tt.value}`, `${au.value}`, `${pg.value}`, `${rd.value}`)
    fourthBook.createBook();
    form.style.display = "none"
})

// script
const newBook = new Book('The power of habit', "Charles Duhigg", 247, "read");
newBook.createBook();

const anotherBook = new Book('Poor dad rich dad', "Robert kiozaky", 183, "read")
anotherBook.createBook();

const third = new Book('something', 'someone',123, 'read' )
third.createBook();
