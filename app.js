
let incItems = document.querySelectorAll('.increase');
let decItems = document.querySelectorAll('.decrease');
incItems = Array.from(incItems);
decItems = Array.from(decItems);

incItems.forEach(function (item) {

    item.addEventListener('click', function () {
        let counter = item.previousElementSibling;
        let itemCount = counter.textContent;
        itemCount++;
        counter.textContent = itemCount;
    })
})
decItems.forEach(function (item) {

    item.addEventListener('click', function () {
        let counter = item.nextElementSibling;
        let itemCount = counter.textContent;

        itemCount--;
        if (itemCount === -1) {
            itemCount = 0;
        }
        counter.textContent = itemCount;


    })
})
const shippingForm = document.getElementById('shippingForm');
const usermail = document.getElementById('usermail');
const usercontact = document.getElementById('usercontact');
const fullname = document.getElementById('fullname');
const useraddr = document.getElementById('useraddr');
const usercity = document.getElementById('city');
const userpostal = document.getElementById('postal');
const usercountry = document.getElementById('userCountry');

const userInputs = [usermail, usercontact, fullname, useraddr, usercity, usercountry, userpostal];
shippingForm.addEventListener('submit', e => {
    e.preventDefault();
    validateForm();
    validOrNot();

});
//function to check if all the input fields are valid
validOrNot = () => {
    const isCorrect = userInputs.every(item => item.parentElement.classList.contains('success'));

    if (isCorrect) {
        alert('The form is submitted');
    }
}

//function to validate an input field
validateForm = () => {
    let email = usermail.value.trim();
    let contact = usercontact.value.trim();
    let fname = fullname.value.trim();
    let address = useraddr.value.trim();
    let city = usercity.value.trim();
    let postal = userpostal.value.trim();
    let country = usercountry.value;
    setSuccess = (inp, message) => {
        let parent = inp.parentElement;
        let smallTag = parent.querySelector('small');
        //add success class to the inp parent
        parent.classList.add('success');
        parent.classList.remove('error');
        //add message to the small tag
        smallTag.textContent = message;
    }
    setError = (inp, message) => {
        let parent = inp.parentElement;
        let smallTag = parent.querySelector('small');
        //add error class to the parent
        parent.classList.add('error');
        parent.classList.remove('success');
        smallTag.textContent = message;
    }


    email === '' ? setError(usermail, 'email must not be empty') : setSuccess(usermail, 'looks like a valid email');

    contact === '' ? setError(usercontact, 'contact number not entered') : setSuccess(usercontact, 'looks alright');


    fname === '' ? setError(fullname, 'please enter your full name') : setSuccess(fullname, `hello ${fname}`);

    address === '' ? setError(useraddr, 'plz enter your full address') : setSuccess(useraddr, 'address is entered');

    city === '' ? setError(usercity, 'please enter your city name') : setSuccess(usercity, `great to see someone from ${city}`);

    country === '' ? setError(usercountry, 'please select a country') : setSuccess(usercountry, 'selected');
    postal === '' ? setError(userpostal, 'postal code can not be empty') : setSuccess(userpostal, 'done!!');





}