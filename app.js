// each button has: 
//1. it's own counter variable initially set to 0
//2, it's dislike button hidden initially
//3. Like and dislike functions
//4. click event listerners at the bottom of the file

//i'm not proud of doing it this way, but it does work, everything works accordingly.

// declare variables for each counter
let num = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;
let num7 = 0;
let num8 = 0;

// hide all the dislike buttons, only allow like buttons
document.getElementById("unlike").style.display = "none";
document.getElementById("unlike2").style.display = "none";
document.getElementById("unlike3").style.display = "none";
document.getElementById("unlike4").style.display = "none";
document.getElementById("unlike5").style.display = "none";
document.getElementById("unlike6").style.display = "none";
document.getElementById("unlike7").style.display = "none";
document.getElementById("unlike8").style.display = "none";


// like functionality for the first image
likeFunc = () => {
    document.getElementById("counter").innerHTML = num += 1;
    document.getElementById("like-btn").style.display = "none";
    document.getElementById("unlike").style.display = "initial";

    if (num === 1 ){
        document.getElementById("moreThan1").innerHTML = " Like";
    }
    else{
    document.getElementById("moreThan1").innerHTML = " Likes";
    }
}

//dislike functionality for the first image
unLikeFunc = () => {
    document.getElementById("counter").innerHTML = num -= 1;
    document.getElementById("unlike").style.display = "none";
    document.getElementById("like-btn").style.display = "initial";

    if (num === 1 ){
        document.getElementById("moreThan1").innerHTML = " Like";
    }
    else{
    document.getElementById("moreThan1").innerHTML = " Likes";
    }
}

//like funtion of the second image 
likeFunc2 = () => {
    document.getElementById("counter2").innerHTML = num2 += 1;
    document.getElementById("like-btn2").style.display = "none";
    document.getElementById("unlike2").style.display = "initial";

    if (num2 === 1 ){
        document.getElementById("moreThan2").innerHTML = " Like";
    }
    else{
    document.getElementById("moreThan2").innerHTML = " Likes";
    }
}

//disliek function for the second image
unLikeFunc2 = () => {
    document.getElementById("counter2").innerHTML = num2 -= 1;
    document.getElementById("unlike2").style.display = "none";
    document.getElementById("like-btn2").style.display = "initial";

    if (num2 === 1 ){
        document.getElementById("moreThan2").innerHTML = " Like";
    }
    else{
    document.getElementById("moreThan2").innerHTML = " Likes";
    }
}


//like functionality ofthe third image.

likeFunc3 = () => {
    document.getElementById("counter3").innerHTML = num3 += 1;
    document.getElementById("like-btn3").style.display = "none";
    document.getElementById("unlike3").style.display = "initial";

    if (num3 === 1 ){
        document.getElementById("moreThan3").innerHTML = " Like";
    }
    else{
    document.getElementById("moreThan3").innerHTML = " Likes";
    }
}

//disliek function for the second image
unLikeFunc3 = () => {
    document.getElementById("counter3").innerHTML = num3 -= 1;
    document.getElementById("unlike3").style.display = "none";
    document.getElementById("like-btn3").style.display = "initial";

    if (num3 === 1 ){
        document.getElementById("moreThan3").innerHTML = " Like";
    }
    else{
    document.getElementById("moreThan3").innerHTML = " Likes";
    }
}

likeFunc4 = () => {
    document.getElementById("counter4").innerHTML = num4 += 1;
    document.getElementById("like-btn4").style.display = "none";
    document.getElementById("unlike4").style.display = "initial";

    if (num4 === 1 ){
        document.getElementById("moreThan4").innerHTML = " Like";
    }
    else{
    document.getElementById("moreThan4").innerHTML = " Likes";
    }
}

//disliek function for the second image
unLikeFunc4 = () => {
    document.getElementById("counter4").innerHTML = num4 -= 1;
    document.getElementById("unlike4").style.display = "none";
    document.getElementById("like-btn4").style.display = "initial";

    if (num4 === 1 ){
        document.getElementById("moreThan4").innerHTML = " Like";
    }
    else{
    document.getElementById("moreThan4").innerHTML = " Likes";
    }
}

likeFunc5 = () => {
    document.getElementById("counter5").innerHTML = num5 += 1;
    document.getElementById("like-btn5").style.display = "none";
    document.getElementById("unlike5").style.display = "initial";

    if (num5 === 1 ){
        document.getElementById("moreThan5").innerHTML = " Like";
    }
    else{
    document.getElementById("moreThan5").innerHTML = " Likes";
    }
}

//disliek function for the second image
unLikeFunc5 = () => {
    document.getElementById("counter5").innerHTML = num5 -= 1;
    document.getElementById("unlike5").style.display = "none";
    document.getElementById("like-btn5").style.display = "initial";

    if (num5 === 1 ){
        document.getElementById("moreThan5").innerHTML = " Like";
    }
    else{
    document.getElementById("moreThan5").innerHTML = " Likes";
    }
}

likeFunc6 = () => {
    document.getElementById("counter6").innerHTML = num6 += 1;
    document.getElementById("like-btn6").style.display = "none";
    document.getElementById("unlike6").style.display = "initial";

    if (num6 === 1 ){
        document.getElementById("moreThan6").innerHTML = " Like";
    }
    else{
    document.getElementById("moreThan6").innerHTML = " Likes";
    }
}

//disliek function for the second image
unLikeFunc6 = () => {
    document.getElementById("counter6").innerHTML = num6 -= 1;
    document.getElementById("unlike6").style.display = "none";
    document.getElementById("like-btn6").style.display = "initial";

    if (num6 === 1 ){
        document.getElementById("moreThan6").innerHTML = " Like";
    }
    else{
    document.getElementById("moreThan6").innerHTML = " Likes";
    }
}

likeFunc7 = () => {
    document.getElementById("counter7").innerHTML = num7 += 1;
    document.getElementById("like-btn7").style.display = "none";
    document.getElementById("unlike7").style.display = "initial";

    if (num7 === 1 ){
        document.getElementById("moreThan7").innerHTML = " Like";
    }
    else{
    document.getElementById("moreThan7").innerHTML = " Likes";
    }
}

//disliek function for the seventh image
unLikeFunc7 = () => {
    document.getElementById("counter7").innerHTML = num7 -= 1;
    document.getElementById("unlike7").style.display = "none";
    document.getElementById("like-btn7").style.display = "initial";

    if (num7 === 1 ){
        document.getElementById("moreThan7").innerHTML = " Like";
    }
    else{
    document.getElementById("moreThan7").innerHTML = " Likes";
    }
}


likeFunc8 = () => {
    document.getElementById("counter8").innerHTML = num8 += 1;
    document.getElementById("like-btn8").style.display = "none";
    document.getElementById("unlike8").style.display = "initial";

    if (num8 === 1 ){
        document.getElementById("moreThan8").innerHTML = " Like";
    }
    else{
    document.getElementById("moreThan8").innerHTML = " Likes";
    }
}

//disliek function for the second image
unLikeFunc8 = () => {
    document.getElementById("counter8").innerHTML = num8 -= 1;
    document.getElementById("unlike8").style.display = "none";
    document.getElementById("like-btn8").style.display = "initial";

    if (num8 === 1 ){
        document.getElementById("moreThan8").innerHTML = " Like";
    }
    else{
    document.getElementById("moreThan8").innerHTML = " Likes";
    }
}


// click events assignments
document.getElementById("like-btn").addEventListener("click", likeFunc);
document.getElementById("unlike").addEventListener("click", unLikeFunc);

document.getElementById("like-btn2").addEventListener("click", likeFunc2);
document.getElementById("unlike2").addEventListener("click", unLikeFunc2);

document.getElementById("like-btn3").addEventListener("click", likeFunc3);
document.getElementById("unlike3").addEventListener("click", unLikeFunc3);

document.getElementById("like-btn4").addEventListener("click", likeFunc4);
document.getElementById("unlike4").addEventListener("click", unLikeFunc4);

document.getElementById("like-btn5").addEventListener("click", likeFunc5);
document.getElementById("unlike5").addEventListener("click", unLikeFunc5);

document.getElementById("like-btn6").addEventListener("click", likeFunc6);
document.getElementById("unlike6").addEventListener("click", unLikeFunc6);

document.getElementById("like-btn7").addEventListener("click", likeFunc7);
document.getElementById("unlike7").addEventListener("click", unLikeFunc7);

document.getElementById("like-btn8").addEventListener("click", likeFunc8);
document.getElementById("unlike8").addEventListener("click", unLikeFunc8);



