document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const navbarHeight = 200;
    const distanceFromTop = Math.abs(
      document.body.getBoundingClientRect().top
    );
    if (distanceFromTop >= navbarHeight) navbar.classList.add("fixed-top");
    else navbar.classList.remove("fixed-top");
  });

  const about = document.querySelector("#about");
  const AboutDiv = document.querySelector("#aboutDiv")




  about.addEventListener("click", AboutClick)
  function AboutClick() {
    console.log("clicked");
    document.getElementById("aboutDiv").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

  }
  

  const projects = document.querySelector("#projects");
  const projectsDiv = document.querySelector("#ProjectsSection")




  projects.addEventListener("click", projectClick)
  function projectClick() {
    console.log("clicked");
    document.getElementById("ProjectsSection").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }

  const contact = document.querySelector("#contact");
  const contactDiv = document.querySelector("#contactDiv")




  contact.addEventListener("click", contactClick)
  function contactClick() {
    console.log("clicked");
    document.getElementById("contactDiv").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }

  const darkMode = document.querySelector("#darkmode")

  darkMode.addEventListener("click", darkModeClick)
  function darkModeClick() {
    document.body.style.backgroundColor = "gray";
    console.log("clicked");
  }

  const text1 = document.querySelector("#text1");
const project1 = document.querySelector("#project1");
project1.addEventListener("mouseover", hovered5)
function hovered5() {
   console.log("hovered5");
   
   text1.style.display = "flex";
   
}

project1.addEventListener("mouseleave", exit5)
function exit5() {
   console.log("hovered5");
   text1.style.display = "none";
}

const text2 = document.querySelector("#text2");
const project2 = document.querySelector("#project2");
project2.addEventListener("mouseover", hovered2)
function hovered2() {
   console.log("hovered2");
   
   text2.style.display = "flex";
   
}

project2.addEventListener("mouseleave", exit2)
function exit2() {
   console.log("hovered2");
   text2.style.display = "none";
}

   