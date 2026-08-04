const images = [
    "YUH03603.JPG",
    "YUH03565.JPG",
    "YUH03533.JPG",
    "YUH03467.JPG",
    "YUH03330.JPG",
    "YUH03277.JPG",
    "YUH03140.JPG",
    "YUH03026.JPG",
    "YUH02941.JPG",
    "YUH02564.JPG",
    "YUH02555.JPG",
    "YUH02497.JPG",
    "YUH02448.JPG",
    "YUH02406.JPG",
    "YUH02357.JPG",
    "YUH02325.JPG",
    "YUH02232.JPG",
    "YUH02024.JPG",
    "YUH01980.JPG",
    "YUH01660.JPG",
    "YUH01642.JPG",
    "YUH01353.JPG",
    "YUH01347.JPG",
    "YUH01177.JPG",
    "YUH00387.JPG",
    "YUH00322.JPG",
    "YUH00239.JPG",
    "YUH00167.JPG",
    "YUH00087.JPG"
];

const gallery = document.getElementById("galleryGrid");
const moreBtn = document.getElementById("moreBtn");

const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");

const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const current = document.getElementById("current");
const total = document.getElementById("total");

total.textContent = images.length;

let currentIndex = 0;

let visibleCount = 6;

// 갤러리 생성
function renderGallery(){

    gallery.innerHTML = "";

    images.slice(0, visibleCount).forEach((file, index)=>{

        const div = document.createElement("div");

        div.className = "gallery-item";

        div.innerHTML =
        `<img src="images/${file}" loading="lazy">`;

        div.onclick = ()=>openViewer(index);

        gallery.appendChild(div);

    });

}

renderGallery();


// 더보기
moreBtn.onclick = ()=>{

    visibleCount = images.length;

    renderGallery();

    moreBtn.style.display = "none";

};


// 전체보기

function openViewer(index){

    currentIndex = index;

    viewer.classList.add("show");

    updateViewer();

}


function updateViewer(){

    viewerImg.src = `images/${images[currentIndex]}`;

    current.textContent = currentIndex + 1;

}


closeBtn.onclick = ()=>{

    viewer.classList.remove("show");

}


// 이전

prevBtn.onclick = ()=>{

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length-1;

    }

    updateViewer();

};


// 다음

nextBtn.onclick = ()=>{

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    updateViewer();

};


// ESC

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        viewer.classList.remove("show");

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

});


// 배경 클릭 시 닫기

viewer.addEventListener("click",(e)=>{

    if(e.target===viewer){

        viewer.classList.remove("show");

    }

});


// 모바일 스와이프

let startX = 0;

viewer.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

viewer.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX-endX>50){

        nextBtn.click();

    }

    if(endX-startX>50){

        prevBtn.click();

    }

});
