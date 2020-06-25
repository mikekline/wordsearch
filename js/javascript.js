/*
	program heading: word Search
	author name: Mike Kline
	version: 1.0
	description: Input a word to find all, then input another word to replace all
	*/

function findReplaceWord() {
  let textBox = document.getElementById('textArea').value;
  let textFind = document.getElementById('find').value;
  let toConvert = new RegExp("\\b" + textFind + "\\b", "g");
  let count = textBox.match(toConvert);
  let howMany = document.getElementById('display');

  //method to find and display the results of the word to be found
  this.findAndDisplayResults = () => {
    if(count == null){let setCountLengthToZero = function () {count = []}; setCountLengthToZero();}
    if (textFind != "") {
      $(howMany).addClass('howMany');
      howMany.innerHTML = "The word '" + textFind + "' shows up " + count.length + " times.";
      setTimeout(
          () => {howMany.innerHTML ='', $(howMany).removeClass('howMany');}, 4000
        );
      }
    }

  //method to replace the found word(s)
  this.replaceWord = () => {
    if (textFind != "") {
      let replaceWith = document.getElementById('replaceText').value;
      let output = textBox.replace(toConvert, replaceWith);
      document.getElementById('textArea').value = output;
    }
  };
}


//to press the find all/replace all buttons down with the enter key instead of clicking
//refactor the two into one if possible with objects
window.onload = () => {
$('#find').keydown( (e) => {
  if (e.keyCode === 13) {
    $('#findButton').click();
    $('#findButton').addClass('buttonToggle');
    $('#find').keyup( () => {
      $('#findButton').removeClass('buttonToggle');
    });
  }
});
$('#replaceText').keydown( (e) => {
  if (e.keyCode === 13) {
    $('#relplaceButton').click();
    $('#relplaceButton').addClass('buttonToggle');
    $('#replaceText').keyup( () => {
      $('#relplaceButton').removeClass('buttonToggle');
    });
  }
});
}
