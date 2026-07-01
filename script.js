// Smooth fade-in animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
},{
    threshold:0.2
});

sections.forEach(section=>{
    section.style.opacity="0";
    section.style.transform="translateY(50px)";
    section.style.transition="all .8s ease";
    observer.observe(section);
});

// Active navigation link
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{
    let current="";

    sections.forEach(section=>{
        const top=section.offsetTop-120;
        if(pageYOffset>=top){
            current=section.getAttribute("id");
        }
    });

    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href")==="#"+current){
            link.classList.add("active");
        }
    });
});

// Typing effect
const roles=[
"Aspiring Software Engineer",
"AI & Python Developer",
"Java Developer",
"Web Developer"
];

let index=0;
const role=document.querySelector(".hero h3");

setInterval(()=>{
    role.textContent=roles[index];
    index=(index+1)%roles.length;
},2500);
