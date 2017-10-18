function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested').querySelector('.target');
}

function increaseRankBy(n){
  var rankedList = document.querySelectorAll('ul.ranked-list li');

  for(let i=0; i<rankedList.length; i++){
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
  }
}

function deepestChild() {
  var nest = document.getElementById('grand-node');

  while (nest.querySelector('div')) {
      nest = nest.querySelector('div');
  }

  return nest;
}
