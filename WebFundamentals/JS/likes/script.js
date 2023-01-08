function like(id){
    var element = document.querySelector('#'+id);
    var currentNumber = element.innerHTML;
    currentNumber++;
    element.innerHTML = currentNumber;
}