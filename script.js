//==========home==========//
//**video**
const slide = document.querySelector(".slide");
const arrowBtns = document.querySelectorAll(".video-materi i");
const firstCardWidth = slide.querySelector(".card").offsetWidth;

let isDragging = false, startX, startSrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        slide.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth; 
    })
});

const dragStart = (e) => {
    isDragging = true;
    slide.classList.add("dragging");
    startX = e.pageX;
    startSrollLeft = slide.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return;
    slide.scrollLeft = startSrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    slide.classList.remove("dragging");
}

slide.addEventListener("mousedown", dragStart);
slide.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);