var percent = document.querySelector('.percent');
var progress = document.querySelector('.progress');
var count = 4;
var per = 16;
var loading = setInterval(animate, 50);
function animate(){
    if(count == 80 && per == 320){
        setTimeout(() => {
            count=4;
            per=16;
        },1000)
    }
    else{
        per = per + 4;
        count = count + 1;
        progress.style.width = per + 'px';
        percent.textContent = count + '%';
    }
}

console.log(percent);
console.log(progress);
