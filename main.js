const rootElement = document.querySelector("#root");

const authors = ["author-1.jpg", "author-2.jpg", "author-3.jpg", "author-4.jpg", "author-5.jpg", "author-6.jpg", "author-7.jpg", "author-8.jpg", "author-9.jpg", "author-10.webp"];

const generateBackgroundColor = () => {
    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);

    const result = `rgb(${color1}, ${color2}, ${color3})`;

    return result;
}

const createBubble = (event) => {
    const bubbleElement = document.createElement("div");
    bubbleElement.classList.add("author");

    const authorImage = document.createElement("img");
    authorImage.classList.add("author_image")

    const index = Math.floor(Math.random() * authors.length);
    authorImage.src = `../Event Quotes/img/${authors[index]}`;

    const xPos = event.clientX;
    const yPos = event.clientY;

    bubbleElement.style.left = `${xPos - 40}px`;
    bubbleElement.style.top = `${yPos - 40}px`;

    const result = generateBackgroundColor();
    bubbleElement.style.border = `4px solid ${result}`;

    bubbleElement.appendChild(authorImage);
    rootElement.appendChild(bubbleElement);
    
    
    setTimeout(() => {
        bubbleElement.remove();
    }, 2000)
}

rootElement.addEventListener("click", createBubble);