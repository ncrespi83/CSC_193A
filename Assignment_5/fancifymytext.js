function alertMessage() {
    alert('Hello, world!');
    document.getElementById('userTextarea').style.fontSize='24px';
}

function toggleBold(){
    const fancyRadio = document.getElementById('fancyRadio');
    const boringRadio = document.getElementById('boringRadio');
    alert('radio button selected');
    
    if(fancyRadio.checked) {
        document.getElementById('userTextarea').style.fontWeight = 'bold';
        document.getElementById('userTextarea').style.color = 'blue';
        document.getElementById('userTextarea').style.textDecoration = 'underline';
    }  
    if(boringRadio.checked)
    {
        document.getElementById('userTextarea').style.fontWeight = 'normal';
        document.getElementById('userTextarea').style.color = 'black';
        document.getElementById('userTextarea').style.textDecoration = 'none';
    }
}

function mooText(){
    const textArea = document.getElementById('userTextarea');
    textArea.value = textArea.value.toUpperCase() + '-Moo';
    let text = textArea.value; 

    let sentence = text.split(' ');    //split text into array of sentences by space
    sentence = sentence.filter(sentence => sentence.trim() !== '')  //remove empty strings
    
    text = sentence.join('_');  //join modified sentence into single string with "_"

    textArea.value = text;  //set modified text back into text area
}
