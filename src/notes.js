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

            let newLeft = l + (e.pageX - startX);
            let newTop = t + (e.pageY - startY);

            const containerRect = container.getBoundingClientRect();

            const maxLeft = containerRect.width - note.offsetWidth;
            const maxTop = containerRect.height - note.offsetHeight;

            newLeft = Math.max(0, Math.min(newLeft, maxLeft));
            newTop = Math.max(0, Math.min(newTop, maxTop));

            note.style.left = newLeft + "px";
            note.style.top = newTop + "px";
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