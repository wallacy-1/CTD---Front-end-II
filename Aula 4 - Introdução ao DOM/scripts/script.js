/* 
    caso queira saber qual elemento esta usando altere a cor dele :)
*/

//body
document.querySelector('body').style = "border: 2px solid red";

// h1
document.querySelector('h1').style = "color: darkgreen";

//div .conteudo
// h5
document.querySelector('h5').style = "color: darkred";

// ul
document.querySelector('ul').style = "border: 3px solid darkgreen"

// li item 1
document.getElementById("item1").style = "color: darkgray";

// li item 1 > a
document.getElementById("item1").firstChild.style = "color: red";

// li item 2
document.getElementById("item2").style = "color: darkorchid";

// li item 2 > a
document.getElementById("item2").firstChild.style = "color: blue";

// li item 3
document.getElementById("item3").style = "color: darkolivegreen";

// li item 3 > a
document.getElementById("item3").firstChild.style = "color:orange";


//section
document.querySelector('section').style = 'border: 3px solid blue;';

//articles

//article 1
document.getElementById("card1").style = 'border: 3px solid red;';
let article_1_children = document.getElementById("card1").children; // pegando child
article_1_children[0].style = 'color: palegreen'; // 1 children h2 titulo
article_1_children[1].style = 'color: green'; // 2 children p 

/* console logs
console.log(document.getElementById("card1"));
console.log(document.getElementById("card1").children);
*/

//article 2
document.querySelector('article:nth-of-type(2)').style = 'border: 3px solid blue;';
let article_2_children = document.querySelector("article:nth-of-type(2)").children; // pegando child
article_2_children[0].style = 'color: rosybrown'; // 1 children h2 titulo
article_2_children[1].style = 'color: royalblue'; // 2 children p 

/* console logs
console.log(document.queryselector("article:nth-of-type(2)"));
console.log(document.querySelector("article:nth-of-type(2)").children);
*/

//article 3
document.querySelector('.animado').style = 'border: 3px solid aqua;';
let article_3_children = document.querySelector(".animado").children; // pegando child
article_3_children[0].style = 'color: palevioletred'; // 1 children h2 titulo
article_3_children[1].style = 'color: peru'; // 2 children p 

/* console logs
console.log(document.queryselector(".animado"));
console.log(document.querySelector(".animado").children);
*/

//article 4
document.querySelector('.diferente').style = 'border: 3px solid orange;';
let article_4_children = document.querySelector(".diferente").children; // pegando child
article_4_children[0].style = 'color: pink'; // 1 children h2 titulo
article_4_children[1].style = 'color: purple'; // 2 children p 

/* console logs
console.log(document.queryselector(".diferente"));
console.log(document.querySelector(".diferente").children);
*/

//article 5
document.querySelector('article:nth-of-type(5)').style = 'border: 3px solid rebeccapurple;';
let article_5_children = document.querySelector("article:nth-of-type(5)").children; // pegando child
article_5_children[0].style = 'color: yellow'; // 1 children h2 titulo
article_5_children[1].style = 'color: yellowgreen'; // 2 children p 

/* console logs
console.log(document.queryselector("article:nth-of-type(5)"));
console.log(document.querySelector("article:nth-of-type(5)").children);
*/

//article 6 ultimo
document.querySelector('article:last-child').style = 'border: 3px solid teal;';
let article_6_children = document.querySelector("article:last-child").children; // pegando child
article_6_children[0].style = 'color: darkgoldenrod'; // 1 children h2 titulo
article_6_children[1].style = 'color: darkslategray'; // 2 children p 

/* console logs
console.log(document.queryselector("article:last-child"));
console.log(document.querySelector("article:last-child").children);
*/

