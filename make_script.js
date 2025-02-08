const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
const bg3 = document.getElementById("bg3");
const bg4 = document.getElementById("bg4");
const big = document.getElementById("color")
const clr1 = document.getElementById("clr1")
const clr2 = document.getElementById("clr2")
const halfcircle = document.getElementById("halfcircle")
const allBgs = document.querySelectorAll('.bg')
const inputButton = document.querySelector('.submit_message');
const textarea_message = document.querySelector('.textarea_message');
/*
bg1.addEventListener("mouseover", event =>{
    bg1.style.backgroundColor = "pink";
});

bg1.addEventListener("mouseout", event =>{
    bg1.style.backgroundColor = 'red';
});

bg2.addEventListener("mouseover", event =>{
    bg2.style.backgroundColor = "pink";
});

bg2.addEventListener("mouseout", event =>{
    bg2.style.backgroundColor = 'yellow';
});

bg3.addEventListener("mouseover", event =>{
    bg3.style.backgroundColor = "pink";
});

bg3.addEventListener("mouseout", event =>{
    bg3.style.backgroundColor = 'yellowgreen';
});

bg4.addEventListener("mouseover", event =>{
    bg4.style.backgroundColor = "pink";
});

bg4.addEventListener("mouseout", event =>{
    bg4.style.backgroundColor = 'blue';
});

*/

function changeImage(){
    let displayImage = document.getElementById('')
}
allBgs.forEach((bg)=>{
    bg.addEventListener('click', () => {
        document.querySelectorAll('.active').forEach((obj)=>{obj.classList.remove('active');});
        halfcircle.style.backgroundImage = 'url('+bg.src+')';
        bg.classList.add('active');
    })
})
inputButton.addEventListener('click', ()=> {
    if(document.querySelector('.active') && textarea_message.value.length > 0) {
    const currentImage = document.querySelector('.active').src;
    localStorage.setItem("message", textarea_message.value);
    console.log(textarea_message.value, currentImage)
    window.location.href = "MySnowball.html?m="+textarea_message.value+'&i='+currentImage;

    } else {
        alert('You need to select an image and add text')
    }
})
/*bg1.addEventListener("click", event =>{
    big.style.backgroundColor = 'red';
    clr1.style.backgroundColor = "red";
    clr2.style.backgroundColor = "darkred";
    halfcircle.style.backgroundColor = "red";
    clr2.addEventListener("click", event =>{
        big.style.backgroundColor = 'darkred';
        halfcircle.style.backgroundColor = "darkred";
    });
    clr1.addEventListener("click", event =>{
        big.style.backgroundColor = 'red';
        halfcircle.style.backgroundColor = "red";
    });
});
bg2.addEventListener("click", event =>{
    big.style.backgroundColor = 'yellow';
    clr1.style.backgroundColor = "yellow";
    clr2.style.backgroundColor = "brown";
    halfcircle.style.backgroundColor = "yellow";
    clr2.addEventListener("click", event =>{
        big.style.backgroundColor = 'brown';
        halfcircle.style.backgroundColor = "brown";
    });
    clr1.addEventListener("click", event =>{
        big.style.backgroundColor = 'red';
        halfcircle.style.backgroundColor = "red";
    });
});
bg3.addEventListener("click", event =>{
    big.style.backgroundColor = 'yellowgreen';
    clr1.style.backgroundColor = "yellowgreen";
    clr2.style.backgroundColor = "green";
    halfcircle.style.backgroundColor = "yellowgreen";
    clr2.addEventListener("click", event =>{
        big.style.backgroundColor = 'green';
        halfcircle.style.backgroundColor = "green";
    });
    clr1.addEventListener("click", event =>{
        big.style.backgroundColor = 'yellowgreen';
        halfcircle.style.backgroundColor = "yellowgreen";
    });
});
bg4.addEventListener("click", event =>{
    big.style.backgroundColor = 'blue';
    clr1.style.backgroundColor = "blue";
    clr2.style.backgroundColor = "purple";
    halfcircle.style.backgroundColor = "blue";
    clr2.addEventListener("click", event =>{
        big.style.backgroundColor = 'purple';
        halfcircle.style.backgroundColor = "purple";
    });
    clr1.addEventListener("click", event =>{
        big.style.backgroundColor = 'blue';
        halfcircle.style.backgroundColor = "blue";
    });
});*/
