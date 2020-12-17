console.log('Winter Break is almost here!!!');

let icons = [
    '&#x1F6F7;',
    '&#x1F328;',
    '&#x1F43B;',
    '&#x1F332;',
    '&#x1F381;',
    '&#x1F936;',
    '&#x1F9E4;',
    '&#x1F9E3;',
    '&#x1F976;',
    '&#x1F31F;',
    '&#x26F8;',
    '&#x1F36A;',
    '&#x1F98C;',
    '&#x1F3C2;',
    '&#x26F7;',
    '&#x1F3BF;',
    '&#x1F3D2;',
    '&#x1F514;',
    '&#x1F6CF;',
    '&#x1F385;',
    '&#x1F3BF;',
    '&#x1F56F;',
    '&#x26c4;'
  ];

icons = randomizeIcons(icons);

const boxes = document.querySelectorAll('.num');



function handelBoxClick(event){

  const clickedBox = event.currentTarget;
  const daysClicked = clickedBox.dataset.day;
  const today = new Date();

  if(today.getDate() >= Number(daysClicked)){

  clickedBox.innerHTML = icons[Number(daysClicked)];

  storeClickedBoxes(Number(daysClicked));

  }else{
    console.log('The is not availble yet as the day has not yet passed');

  }
}


boxes.forEach(function(box){
  box.addEventListener('click', handelBoxClick);

});

let daysOpened = JSON.parse(localStorage.getItem('daysClicked'));




function storeClickedBoxes(day){

 if(!localStorage.getItem('daysClicked')){
   daysOpened = [];
 }else{

   daysOpened = JSON.parse(localStorage.getItem('daysClicked'));
 }

 if(!daysOpened.includes(day)){

   daysOpened.push(day);
 }

 localStorage.setItem('daysClicked', JSON.stringify(daysOpened));
}




function randomizeIcons(oldList){

  let randomList = [];

  if(!localStorage.getItem('icons')){

  while(oldList.length > 0){

    const index = Math.floor(Math.random()*oldList.length);

    randomList.push(oldList[index]);
    oldList.splice(index, 1);
  }

  localStorage.setItem('icons', JSON.stringify(randomList));
} else {

  randomList = JSON.parse(localStorage.getItem('icons'));
}

return randomList;
}






function showClickedBoxes(){

    boxes.forEach(function(box){

      const day = Number(box.dataset.day);

      if(daysOpened.includes(day)){

        box.innerHTML = icons[day];

      }
    });

}


if(daysOpened !== null){

  showClickedBoxes();

}

function resetCalender(){

  const answer = confirm('Are you sure you want to reset the calender? This action cannot be undone!');

  if(answer){

    localStorage.clear();
    document.location.reload();
  }
}

const resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset Calender';
resetButton.addEventListener('click', resetCalender);

const footer = document.querySelector('footer');

footer.insertAdjacentElement('afterbegin',resetButton);

footer.style.textAlign = 'center';
footer.style.paddingtop = '20px';
