let containerProjects = document.getElementById("containerProjects");
let projects=[
    
    {
         title: "Portfolio",
    description: "Built with HTML, CSS, and JavaScript",
    demo: "https://dwaikat-dalia.github.io/Portfolio/",
    github: "https://github.com/dwaikat-dalia/Portfolio",
    image: "imgs/portfolioproject.png",
    year:"2025"
    },
     ,{
         title: "React Page",
    description: "Built with Jsx and React",
    demo: "https://dwaikat-dalia.github.io/ReactProfilePage/",
    github: "https://dwaikat-dalia.github.io/ReactProfilePage/",
    image: "imgs/reactWeb.png",
    year:"2025"
    }
    ,{
         title: "E-commerce Flower",
    description: "Built with HTML, CSS and Media Query",
    demo: "https://dwaikat-dalia.github.io/Website-Flower-store-/",
    github: "https://github.com/dwaikat-dalia/Website-Flower-store-",
    image: "imgs/flowers.png",
    year:"2025"
    },
     {
         title: "To do List",
    description: "Built with HTML, CSS and javascript",
    demo: "https://dwaikat-dalia.github.io/toDoList/",
    github: "https://github.com/dwaikat-dalia/toDoList",
    image: "imgs/todolist2.png",
    year:"2025"
    },
     {
         title: "Engage, Architect house",
    description: "Built with HTML, CSS and Media Query",
    demo: "https://dwaikat-dalia.github.io/engage_/",
    github: "https://github.com/dwaikat-dalia/engage_",
    image: "imgs/house.png",
    year:"2022"
    },
    ,
     {
         title: "Resturant",
    description: "Built with HTML, CSS and Media Query",
    demo: "https://dwaikat-dalia.github.io/resturent/",
    github: "https://github.com/dwaikat-dalia/resturent",
    image: "imgs/rest.png",
    year:"2022"
    },  {
         title: "Youtube",
    description: "Built with HTML, CSS, and Bootstrap",
    demo: "https://dwaikat-dalia.github.io/YouTube-Clone/",
    github: "https://github.com/dwaikat-dalia/YouTube-Clone",
    image: "imgs/youtubepage2.png",
    year:"2022"
    },
    ,{
         title: "Osaka",
    description: "Built with HTML, CSS , Bootstrap and Media Query",
    demo: "https://dwaikat-dalia.github.io/OsakaPage/",
    github: "https://github.com/dwaikat-dalia/OsakaPage",
    image: "imgs/osaka5.png",
    year:"2022"
    },
     
    
    
    
];

projects.forEach(
    (Element)=>{
const card = `
 <div class="cardd ">
                <div class="image-card">
                    <img src=${Element.image} alt=${Element.title}>
                </div>
                <div class="content">
                    <h1 class="card-title">${Element.title}</h1>
              
                <p class ="para-card">${Element.description}</p>
                <div class="button-card">
                    <a href="${Element.demo}" target="_blank" rel="noopener noreferrer">Website</a>
                    <a href="${Element.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                 <h2>${Element.year}</h2>

                </div>

            </div>
`;

containerProjects.innerHTML +=card;
    }
);

containerProjects.addEventListener("click",(event)=>{
    let crd = event.target.closest(".cardd");
    let parag=crd.querySelector(".para-card");
let buttoncard = crd.querySelector(".button-card");
  // Toggle display:
        if (parag.style.display === "block") {
            parag.style.display = "none";
            buttoncard.style.display = "none";
        } else {
            parag.style.display = "block";
            buttoncard.style.display = "block";
        }

});

/** carousel **/

let allCards = document.querySelectorAll(".cardd");
let leftArrow = document.querySelector(".left");
let rightArrow = document.querySelector(".right");
let current = 0;

   function getVisibleCount() {
  return window.innerWidth <= 900
    ? 1
    : window.innerWidth <= 1200
    ? 2
    : 3;
}


function move(index) {
    let visibleCount = getVisibleCount();
    
    allCards.forEach((el) => el.classList.remove("active"));

    for (let i = 0; i < visibleCount; i++) {
        allCards[(index + i) % allCards.length].classList.add("active");
    }
}

move(current);

leftArrow.addEventListener("click", () => {
    let visibleCount = getVisibleCount();
    current = ((current - visibleCount) + allCards.length) % allCards.length;
    move(current);
});

rightArrow.addEventListener("click", () => {
    let visibleCount = getVisibleCount();
    current = (current + visibleCount) % allCards.length;
    move(current);
});

window.addEventListener("resize", () => {
    move(current);
});

/*
let allCards = document.querySelectorAll(".cardd");
let leftArrow = document.querySelector(".left");
let RightArrow = document.querySelector(".right");

if (window.innerWidth <= 600) {
    allCards[0].classList.add("active");

}else{
allCards[0].classList.add("active");

allCards[1].classList.add("active");
allCards[2].classList.add("active");
}
let current=0;
function move(index){
       if (window.innerWidth <= 600) { // <= 600px يعني هاتف
   allCards.forEach((element)=>{element.classList.remove("active");});
    allCards[index].classList.add("active");
    
}else{
 allCards.forEach((element)=>{element.classList.remove("active");});
    allCards[index].classList.add("active");
    allCards[(index+1)%allCards.length].classList.add("active");
    allCards[(index+2)%allCards.length].classList.add("active");
 
}
     
}

leftArrow.addEventListener("click",()=>{
     if (window.innerWidth <= 600) {
        current = ((current-1)+ allCards.length )%allCards.length;

     }else{
        current = ((current-3)+ allCards.length )%allCards.length;

     }move(current);



});
RightArrow.addEventListener("click",()=>{
     if (window.innerWidth <= 600) {
current = ((current+1) % allCards.length);
     }else{
current = ((current+3) % allCards.length);
     }


 
move(current);

});*/

/***************certifcates */

certificate=[{
title:"Front End - React",
organize : "Knowledge Academy",
year: "2023",
topics:"React",
link:"https://drive.google.com/file/d/1QuQaO3Ko_7_hulEIGbu_xtWfJrqL3p3j/view"
},{
title: "BackEnd - NodeJs ",
organize : "Knowledge Academy",
year: "2023",
topics:"NodeJS",
link:"https://drive.google.com/file/d/1ulY5ou6s6FkeiMt2lBjgnM6sCOTHF-eQ/view?usp=sharing"
},{
title:"IEEE Company",
organize : "IEEE Najah  Branch",
year: "2023",
topics:"React, NodeJs,UIUX and Github",
link:"https://drive.google.com/file/d/1Y3PVLZYowim8ZvJDkd0dOsOKNtL-6dKU/edit"
},{
title:"IEEEXtreme16.0 Competition",
organize : "IEEE",
year: "2022",
topics:"Problem Solving",
link:"https://drive.google.com/file/d/1lPyjf40KEViNoYZ-Es0MN5Ixry6cdziN/view?usp=sharing"
},{
title:"IEEEXtreme15.0 Competition",
organize : "IEEE",
year: "2021",
topics:"Problem Solving",
link:"https://drive.google.com/file/d/1SYUGjBRtXmHvwLZlVpO6fzc3zgrrv1xd/view"
},{
title:"Full-Stack",
organize : "Udacity",
year: "2021",
topics:"HTML, CSS, JavaScript, React, Node.js",
link:"https://drive.google.com/file/d/1VPl3jKojmnFr-bq5MZFbAYnY5Xs1X0sS/view"
},{
title:"Intro the Web ",
organize : "Knowledge Academy",
year: "2021",
topics:"HTML, CSS and Bootstrap",
link:"https://drive.google.com/file/d/1selk-xx6KFjRPSYGry5UGxHspOTYK9iI/view"
},

];
let cer = document.getElementById("Certificates");
certificate.forEach(element=>{
  let cccard=  ` <div class="certif_card">
            <h4><i class="fa-solid fa-medal"></i>${element.title}</h4>
           <ul>
            <li><strong>Organized by: </strong>${element.organize}</li>
            <li><strong>Year: </strong>${element.year}</li>
           
           </ul>
         <div >   <button class="details"><i class="fa-solid fa-ellipsis-h"></i>
</button>
         
         </div>`;
         cer.innerHTML +=cccard;
});
let cerCards = document.querySelectorAll(".certif_card");
let detailsOpenPage = document.querySelector(".detailsOpen");

cerCards.forEach((element, index)=>{
    
    element.addEventListener("click",(event)=>{
if(event.target.closest(".details")){
    
    let det = `
               <h4>${certificate[index].title}</h4>
           <ul>
            <li><strong>Organized by: </strong>${certificate[index].organize}</li>
            <li><strong>Year: </strong>${certificate[index].year}</li>
            <li>
            <strong>Covered Topics:</strong>${certificate[index].topics}
            </li>
            <li>
               <a href=${certificate[index].link}  target="_blank"><strong> View Certificate</strong></a>
            </li>
           </ul>
            <button class="CloseDetalis"><i class="fa-solid fa-xmark"></i></button>`;
            detailsOpenPage.innerHTML =det;
 detailsOpenPage.style.display = "flex";
 document.body.style.overflow="hidden";
}}
);
});
detailsOpenPage.addEventListener("click",(event)=>{
    if(event.target.closest(".CloseDetalis")){
        detailsOpenPage.style.display="none";
        document.body.style.overflow="auto" ;
    }
});
/*****Slider***** */
let paragraphsSlider=[
    "Discussing our Hardware Graduation Project.",
    "Discussing our Hardware Graduation Project.",
     "Official graduation from the university and completion of the department requirements.",
          "Official graduation from the university and completion of the department requirements.",

       "Working on the hardware graduation project.",
        "Working on the hardware graduation project.",
         "Participation in the IEEEXtreme 16.0 competition at the university.",
          "Participation in the IEEEXtreme 15.0 competition at the university.",
           "Participation in the 'Think Like a Programmer' competition in University.",
           "IEEE Company Course in ITG Company.",
           "IEEE Company Course in University."

];
let imagesSlider= document.querySelectorAll(".imagesSlider");
let dots = document.querySelectorAll(".fa-circle");

let index=0;
let paraSlider = document.getElementById("paragraphSlider");
function ShowImage2(){

    imagesSlider.forEach((slide)=>{

        slide.classList.remove("active");

    });
    dots.forEach((dot)=>{

        dot.classList.remove("fa-solid");
        dot.classList.add("fa-regular");
        
    });

 
    paraSlider.innerHTML=" ";

    imagesSlider[index].classList.add("active");
    dots[index].classList.remove("fa-regular");
    dots[index].classList.add("fa-solid");
    paraSlider.innerHTML=paragraphsSlider[index];

}

setInterval(()=>{
    index = (index+1)% imagesSlider.length;
ShowImage2();
},5000);

