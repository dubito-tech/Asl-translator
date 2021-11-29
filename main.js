
function displayLetters() {
    let letters = $('#text').val();
    let display = $('#images');
    display.html("");

    for(x=0;x<letters.length;x++){
        let letter = letters.substring(x, x+1).toLowerCase();
        console.log(letter);

        let imgdiv = $('#template').clone();

        let img = imgdiv.find(".hand-letter-img");
        console.log(img);
        if(letter == " "){
            img.attr("src", "images/space.jpg");
            imgdiv.css("display", "block");
        }
        else {
        img.attr("src", "images/" + letter + ".jpg");
        imgdiv.css("display", "inline");
        
        }
    
        display.append(imgdiv);
    }

    console.log(letters);
}
