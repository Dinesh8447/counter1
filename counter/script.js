let count = 0;


//decrease starts
document.querySelector('.low').onclick = function () {
    count--;
    document.querySelector('p').innerHTML = count;

    if (count <= -1) {                                   //increase color change    
        document.querySelector('p').style.color = 'rgb(155, 255, 56)';
        document.querySelector('#txt').innerHTML = `this is:${count}`;
        document.querySelector('.low').style.color='red';
document.querySelector('body').style.backgroundColor='red';
      
    }
}

//reset
document.querySelector('.reset').onclick = function () {
    count = 0;
    document.querySelector('p').innerHTML = count;

    if (count == 0) {                                          //reset color
        document.querySelector('p').style.color = 'white'
        document.querySelector('#txt').innerHTML = `your counter is reset`;
        document.querySelector('.reset').style.color='black';
document.querySelector('body').style.backgroundColor='black';


    }
}

//increase 
document.querySelector('.high').onclick = function () {
    count++;
    document.querySelector('p').innerHTML = count;
    if (count >= 1) {                                   //color change
        document.querySelector('p').style.color = 'rgb(255, 102, 102)';
        document.querySelector('#txt').innerHTML = `your counter is increse:${count}`
        document.querySelector('.high').style.color='green';
document.querySelector('body').style.backgroundColor='green';

    }
}

const clickme=document.querySelector('.clickme');
const hidden=document.querySelector('.hidden');

clickme.addEventListener('click',function(){
 hidden.classList.remove('hidden') 
 const cls=document.querySelector('.closebtn');
 cls.addEventListener('click',function(){
     hidden.classList.add('hidden');
 })
})





