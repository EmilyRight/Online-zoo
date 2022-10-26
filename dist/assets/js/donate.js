const amountsList = document.querySelectorAll('.amount-label');
const customAmount = document.querySelector('.custom-amount__input');
const inputList = document.querySelectorAll('.feed-choice');


const changeValue = function() {
    for (let i = 0; i < inputList.length; i++) {
    if (inputList[i].checked) {
        customAmount.value = inputList[i].id;
        customAmount.classList.add('active')
        console.log(customAmount.value);
    }

    }
}

const customValue = function() {
    const maxValue = 4;
    if (customAmount.value.length > maxValue){
		customAmount.value = customAmount.value.slice(0, maxValue);
	}

    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i].checked && customAmount.value !== inputList[i].id) {
        inputList[i].checked = false;
     } else if (customAmount.value == inputList[i].id) {
            inputList[i].checked = true;
     }
    };


}

inputList.forEach((item) => item.addEventListener('input', changeValue))
customAmount.addEventListener('input', customValue);
window.onload = changeValue;
