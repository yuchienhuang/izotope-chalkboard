function main() {
    get('/api/whoami', {}).then(function(user) {
    console.log(user);


    });
}




function getStoryCard(storyText){

    const newline = document.createElement('p');
    newline.innerHTML = storyText;
    newline.style.color = 'white';
    newline.style.fontSize = fontSize;
    newline.style.fontFamily = fontFamily;

    return newline;

}

const postButton = document.getElementById('new-status-btn');
postButton.addEventListener('click', function(){
	const textInput = document.getElementById('new-status-text');
	const newStatus = textInput.value;
    const storiesDiv = document.getElementById('zone'+zoneNumber);

	storiesDiv.appendChild(getStoryCard(newStatus));

    textInput.value = '';

});

const eraseButton = document.getElementById('earase-status-btn');
eraseButton.addEventListener('click',function(){


        let section = document.getElementById('zone'+zoneNumber);

        while (section.firstChild) {
            section.removeChild(section.firstChild);
        }


});



let zoneNumber = 1;
$(document).ready(function(){
    $('input[name=zone]').click(function(){
        zoneNumber= this.value;
    });
});


let fontSize = '20px';
$(document).ready(function(){
    $('input[name=size]').click(function(){
        fontSize= this.value;
    });
});
let fontFamily = 'Open Sans';
$(document).ready(function(){
    $('input[name=family]').click(function(){
        fontFamily= this.value;
    });
});



main();
