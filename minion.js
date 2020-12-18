var button = document.querySelector("#btn-translate")
var outTxt = document.querySelector("#txt-output")
var intxt = document.querySelector("#txt-input");


var serverUrl = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverUrl + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}



function callback() {
    var inputText = intxt.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outTxt.innerText = translatedText; // output
        })
        .catch(errorHandler)


};

button.addEventListener("click", callback);