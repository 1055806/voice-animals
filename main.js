

function startClassification() 
{
 navigator.mediaDevices.getUserMedia({ audio: true});
 classfier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VcLImUs27/model.json', modelReady);    
}




function modelReady()
{
    classfier.classify(gotResults);
}

var dog = 0;
var cat = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Barking") {
      img.src = 'https://pngimg.com/uploads/dachshund/dachshund_PNG29.png';
      dog = dog+1;
    } else if (results[0].label == "Meowing") {
      img.src = 'https://tse4.mm.bing.net/th?id=OIP.ycmO391pwLrpGmn_L2HpyAHaIn&pid=Api&P=0&w=144&h=168';
      cat = cat + 1;
    } else{
      img.src = 'https://freepngimg.com/thumb/machine/55225-4-earmuffs-download-free-hq-image.png';
    }
  }
}