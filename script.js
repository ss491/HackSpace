function fetchRandomImage(){
    var xhrRequest=new XMLHttpRequest();

    xhrRequest.onload=function(){
        console.log(xhrRequest.response)
        var responseJSON=JSON.parse(xhrRequest.response);
        var imageUrl=responseJSON.url;
        // $('#dog-image').attr('src',imageUrl);
        document.getElementById('image-space').setAttribute("src",imageUrl)
    };
    xhrRequest.open('get','https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',true)
    xhrRequest.send();
}

fetchRandomImage();
// document.getElementById('fetch-dog-image-button').addEventListener('click',fetchRnadomDogImage)