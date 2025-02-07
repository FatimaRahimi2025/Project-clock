// const SelectMenu = document.querySelectorAll('select');
// const timeBox = document.querySelector('.time');


// for(let i = 23; i >=0; i--){
//     if(i < 10) i= '0' + i;
//  let option = `<option value="${i}">${i}</option`;
//  SelectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option)
// }

// for(let i = 59; i>=0; i--){
//     if(i < 10 )i= '0' + i;
//     let option = `<option vlaue="${i}">${i}</option>`;
//     SelectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option)
// }

// setInterval(() => {
//     let date = new Date();
//     let h = date.getHours();
//     let m = date.getMinutes();
//     let s = date.getSeconds();

//     h = h < 10 ? '0' + 'h' : h;
//     m = m < 10 ? '0' + 'm' : m;
//     s = s < 10 ? '0' + 's' : s;
    
//     timeBox.innerHTML = `${h}:${m}:${s}`;
// }, 1000);

const SelectMenu = document.querySelectorAll('select');
const timeBox = document.querySelector('.time');
const SetAlramBtn = document.querySelector('button');
const content = document.querySelector('.content');
let AlramTime ; alramState = 'noset';

const ringtone = new Audio('./file/ringtone.mp3.mp3');

for(let i = 23; i >=0; i--){
    if(i < 10) i = '0' + i 
    else i = i;
    let option = `<option value="${i}">${i}</option>`
    SelectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option);
}
for(let i= 59; i >=0 ; i--){
    if(i < 10) i = '0' + i
    else i = i;
    let option = `<option value="${i}">${i}</option>`;
    SelectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option);
}

setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    
    timeBox.innerHTML = `${h}:${m}:${s}`;
    if(AlramTime == `${h}:${m}`){
        ringtone.play();
        ringtone.loop= true;
    }
}, 1000);

SetAlramBtn.addEventListener('click', () =>{
    AlramTime = `${SelectMenu[0].value}:${SelectMenu[1].value}`;
    if(AlramTime.includes('Hour') || AlramTime.includes('Minut')){
        return alert('زمان هشدار را به درستی مشخس کنید')
    }
    CheckState(alramState)
})
function CheckState(state){
    if(state == 'noset'){
        content.classList.add('disable');
        SetAlramBtn.innerHTML = 'clear alarm';
        alramState = 'Set';
    }else{
        content.classList.remove('disable');
        AlramTime = '';
        ringtone.pause();
        alramState = 'noset'
        SetAlramBtn.innerHTML = 'Set Alram';
    }
}
// const SelectMenu = document.querySelectorAll('select');
// const timeBox = document.querySelector('.time');
// const SetAlramBtn = document.querySelector('button');
// const content = document.querySelector('.content');
// let AlramTime; 
// let alramState = 'noset';

// const ringtone = new Audio('./file/ringtone.mp3.mp3');

// for (let i = 23; i >= 0; i--) {
//     let formatted = i < 10 ? '0' + i : i;
//     let option = `<option value="${formatted}">${formatted}</option>`;
//     SelectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option);
// }
// for (let i = 59; i >= 0; i--) {
//     let formatted = i < 10 ? '0' + i : i;
//     let option = `<option value="${formatted}">${formatted}</option>`;
//     SelectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option);
// }

// setInterval(() => {
//     let date = new Date();
//     let h = date.getHours();
//     let m = date.getMinutes();
//     let s = date.getSeconds();

//     h = h < 10 ? '0' + h : h;
//     m = m < 10 ? '0' + m : m;
//     s = s < 10 ? '0' + s : s;

//     timeBox.innerHTML = `${h}:${m}:${s}`;
//     if (AlramTime === `${h}:${m}`) {
//         ringtone.play();
//         ringtone.loop = true;
//     }
// }, 1000);



// SetAlramBtn.addEventListener('click', () => {
//     AlramTime = `${SelectMenu[0].value}:${SelectMenu[1].value}`;
//     if (AlramTime.includes('Hour') || AlramTime.includes('Minut')) {
//         return alert('زمان هشدار را به درستی مشخص کنید');
//     }
//     CheckState(alramState);
// });

// function CheckState(state) {
//     if (state === 'noset') {
//         content.classList.add('disable');
//         SetAlramBtn.innerHTML = 'Clear Alarm';
//         alramState = 'set';
//     } else {
//         content.classList.remove('disable');
//         AlramTime = '';
//         ringtone.pause();
//         ringtone.currentTime = 0; // برای توقف کامل صدا
//         alramState = 'noset';
//         SetAlramBtn.innerHTML = 'Set Alarm';
//     }
// }
