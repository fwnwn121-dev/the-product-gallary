
let ip = document.querySelector(".ip");
let sam = document.querySelector(".sam");
let hon = document.querySelector(".hon");


let iphoneSlider = document.querySelector(".iphone-slider");
let samsungSlider = document.querySelector(".samsung-slider");
let honorSlider = document.querySelector(".honor-slider");



ip.onclick=()=>{


iphoneSlider.style.display="flex";
samsungSlider.style.display="none";
honorSlider.style.display="none";


}
sam.onclick=()=>{
    
samsungSlider.style.display="flex";
iphoneSlider.style.display="none";
honorSlider.style.display="none";


}

hon.onclick=()=>{

honorSlider.style.display="flex";
iphoneSlider.style.display="none";
samsungSlider.style.display="none";
    

}

// navigationbar animation 💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨
let na1 =document.querySelector(".na1");
let na2 =document.querySelector(".na2");
let na3 =document.querySelector(".na3");
let na4 =document.querySelector(".na4");

// na1 animation

na1.onclick=()=>{
na1.style.backgroundColor="#fff";
na1.style.color="rgb(61, 152, 255)";


na2.style.backgroundColor="transparent";
na2.style.width="23%";
na2.style.color="#fff";


na3.style.backgroundColor="transparent";
na3.style.color="#fff";


na4.style.backgroundColor="transparent";
na4.style.color="#fff";

setTimeout(() => {
    
na1.style.backgroundColor="transparent";
na1.style.color="#fff";
}, 1000);

}

// na2 animation

na2.onclick=()=>{
na2.style.backgroundColor="#fff";
na2.style.width="25%";
na2.style.color="rgb(61, 152, 255)";


na1.style.backgroundColor="transparent";
na1.style.color="#fff";


na3.style.backgroundColor="transparent";
na3.style.color="#fff";


na4.style.backgroundColor="transparent";
na4.style.color="#fff";


setTimeout(() => {
    
na2.style.backgroundColor="transparent";
na2.style.color="#fff";
}, 1000);
}

// na3 animation

na3.onclick=()=>{
na3.style.backgroundColor="#fff";
na3.style.color="rgb(61, 152, 255)";


na2.style.backgroundColor="transparent";
na2.style.width="23%";
na2.style.color="#fff";


na1.style.backgroundColor="transparent";
na1.style.color="#fff";


na4.style.backgroundColor="transparent";
na4.style.color="#fff";


setTimeout(() => {
    
na3.style.backgroundColor="transparent";
na3.style.color="#fff";
}, 1000);
}

// na4 animation


na4.onclick=()=>{
na4.style.backgroundColor="#fff";
na4.style.color="rgb(61, 152, 255)";


na2.style.backgroundColor="transparent";
na2.style.width="23%";
na2.style.color="#fff";


na3.style.backgroundColor="transparent";
na3.style.color="#fff";


na1.style.backgroundColor="transparent";
na1.style.color="#fff";


setTimeout(() => {
    
na4.style.backgroundColor="transparent";
na4.style.color="#fff";
}, 1000);
}


// delaying the scroll animation on the links
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    setTimeout(() => {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }, 500); // delay in milliseconds
  });
});

// navigation bar animation end ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪

// ac  start 💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨
// .chargers,.covers,.head-phones
// the covers
let chargers_guide_cover = document.querySelector(".chargers-guide-cover");
let head_phones_guide_cover = document.querySelector(".head-phones-guide-cover");
let covers_guide_cover = document.querySelector(".covers-guide-cover");
// covers btns co-cover
let ch_cover = document.querySelector(".ch-cover");
let he_cover = document.querySelector(".he-cover");
let co_cover = document.querySelector(".co-cover");
// allowing the over-flow to scroll after clicking the button
let chargers = document.querySelector(".chargers");
let covers = document.querySelector(".covers");
let head_phones = document.querySelector(".head-phones");



ch_cover.onclick=()=>{
  
  chargers_guide_cover.style.opacity="0";
  setTimeout(()=>{

  chargers_guide_cover.style.display="none";
  chargers.style.overflowX="scroll";


  },300)
}


he_cover.onclick=()=>{
  
  head_phones_guide_cover.style.opacity="0";
  setTimeout(()=>{

  head_phones_guide_cover.style.display="none";
  head_phones.style.overflowX="scroll";


  },300)
}


co_cover.onclick=()=>{
  
  covers_guide_cover.style.opacity="0";
  setTimeout(()=>{

  covers_guide_cover.style.display="none";
  covers.style.overflowX="scroll";


  },300)
}


// the up button
 const up = document.querySelector(".up");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      up.classList.add("show");
    } else {
      up.classList.remove("show");
    }
  });

  up.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
