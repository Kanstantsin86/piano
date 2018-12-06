'use strict';

const piano = document.getElementsByClassName('set')[0];
const pianoKeys = piano.getElementsByTagName('li');
const sounds = ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3', 'fifth.mp3'];
let tonality = 'middle';

for(let pianoKey of pianoKeys) {
  pianoKey.addEventListener('click', pressPianoKey);
}

document.addEventListener('keydown', tonalityUpdate);
document.addEventListener('keyup', tonalityUpdate);

function pressPianoKey() {
  linkUpdate();
  const pianoKey = event.target;
  const note = pianoKey.getElementsByTagName('audio')[0];
  note.currentTime = 0;
  note.play();
}

function linkUpdate() {
  for(let i = 0; i < pianoKeys.length; i++) {
    pianoKeys[i].getElementsByTagName('audio')[0].src = `https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/${tonality}/${sounds[i]}`;
  } 
};

function tonalityUpdate(event) {
  event.preventDefault(); 
  
  if (event.shiftKey) {
    tonality = 'lower';
  } else if (event.altKey) {
    tonality = 'higher';
  } else {
    tonality = 'middle';
  }  
  piano.classList.remove('lower', 'middle', 'higher');
  piano.classList.add(tonality);
}