const notesContainer = document.querySelector(".notes-container");
let z = 1;
export const addNoteBtn = document.querySelector(".main-content > button");

export function createNote() {
    const colors = ["#FB64B6", "#21BCFF", "#FFDF20", "#7CCF35"];
    const randIndex = Math.floor(Math.random() * 4);

    const note = document.createElement("div");
    note.classList.add("note");
    z = z + 1;
    note.style.zIndex = z;
    note.style.backgroundColor = colors[randIndex];

    const pin = document.createElement("div");
    pin.classList.add("pin");

    const noteTitle = document.createElement("input");
    noteTitle.placeholder = "Note title";

    const noteText = document.createElement("textarea");
    noteText.placeholder = "Enter text here...";

    note.appendChild(pin);
    note.appendChild(noteTitle);
    note.appendChild(noteText);

    notesContainer.appendChild(note);

    move(note);
}

export function move(note) {
    const pin = note.querySelector(".pin");
    const container = document.querySelector(".notes-container");

    note.addEventListener("mousedown", () => {
        z = z + 1;
        note.style.zIndex = z;
    })

    pin.addEventListener("mousedown", e => { 
        note.classList.add('is-dragging');

        let l = note.offsetLeft;
        let t = note.offsetTop;

        let startX = e.pageX;
        let startY = e.pageY;

        const drag = (e) => { 
            e.preventDefault();
            note.style.left = l + (e.pageX - startX) + "px";
            note.style.top = t + (e.pageY - startY) + "px";
        };
        
        const mouseup = () => { 
            note.classList.remove('is-dragging');
            container.removeEventListener("mousemove", drag);
            container.removeEventListener("mouseup", mouseup);
        };
        
        container.addEventListener("mousemove", drag);
        container.addEventListener("mouseup", mouseup);
    });
}