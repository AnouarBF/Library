// grabing the elements.
const container = document.getElementById('container')
const addBookBtn = document.getElementById('new-book')
const form = document.getElementById('form');
const cancel = document.getElementById('close');
const body = document.getElementsByTagName('body');
const submit = document.querySelector('.submit');
const tt = document.getElementById('title');
const au = document.getElementById('author');
const pg = document.getElementById('pages');
const rd = document.getElementById('status');

// The book object that identify the book's caracteristics

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.createBook = function(){
        const div = document.createElement('div');
        div.setAttribute('id','book');
        container.appendChild(div);
        
        const ul = document.createElement('ul');
        ul.classList.add('.list');
        div.appendChild(ul)
        
        const bookTitle = document.createElement('li')
        bookTitle.classList.add('.bookTitle')
        ul.appendChild(bookTitle)
        
        const bookPages = document.createElement('li')
        bookPages.classList.add('.bookPages')
        ul.appendChild(bookPages)
    
        const bookAuthor = document.createElement('li');
        bookAuthor.classList.add('.bookAuthor');
        ul.appendChild(bookAuthor)
        
        const bookStatus = document.createElement('li');
        bookStatus.classList.add('.bookStatus');
        ul.appendChild(bookStatus)

        const rmvBtn = document.createElement('button');
        rmvBtn.classList.add('rmv-btn');
        rmvBtn.innerText = "Remove";
        div.appendChild(rmvBtn);
        rmvBtn.addEventListener('click', ()=>{
            div.remove();
        })

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.innerText = "Edit";
        div.appendChild(editBtn);
        editBtn.addEventListener('click', ()=>{
            form.style.display = "block";
            tt.value = this.title;
            au.value = this.author;
            pg.value = this.pages;
            rd.value = this.read;
            submit.addEventListener('click', ()=>{
                div.remove();
                div.createBook();
            })
        })
        
        bookTitle.innerText = `Title ${title}`;
        bookAuthor.innerText = `Author ${author}`;
        bookPages.innerText = `pages ${pages}`;
        bookStatus.innerText = `status ${read}`;

        // myLibrary.push(this);
    }
}

const newBook = new Book('The power of habit', "Charles Duhigg", 247, "read");
newBook.createBook();

const anotherBook = new Book('Poor dad rich dad', "Robert kiozaky", 183, "read")
anotherBook.createBook();

const third = new Book('something', 'someone',123, 'read' )
third.createBook();

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