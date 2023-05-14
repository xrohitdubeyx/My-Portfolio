// let menu = document.querySelector('#menu-bars');
// console.log(menu);
// let header = document.querySelector('header');

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     header.classList.toggle('active');
// }

// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     header.classList.remove('active');
// }

// let cursor1 = document.querySelector('.cursor-1');
// let cursor2 = document.querySelector('.cursor-2');

// window.onmousemove = (e) =>{
//     cursor1.style.top = e.pageY + 'px';
//     cursor1.style.left = e.pageX + 'px';
//     cursor2.style.top = e.pageY + 'px';
//     cursor2.style.left = e.pageX + 'px';
// }

// document.querySelectorAll('a').forEach(links =>{

//     links.onmouseenter = () =>{
//         cursor1.classList.add('active');
//         cursor2.classList.add('active');
//     }

//     links.onmouseleave = () =>{
//         cursor1.classList.remove('active');
//         cursor2.classList.remove('active');
//     }

// });


let a = [12,14,5,63,17,11]

let temp;

for(let i=0; i<a.length; i++)
{
    for(let j=0; j<a.length; j++)
    {
        if(a[j]>a[j+1])
        {
            temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp;
        }
    }
}
console.log(a);


