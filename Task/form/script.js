const form=document.querySelector('form');
const cardContainer=document.getElementById('card');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const name=form.companyName.value;
    const motto=form.motto.value;
    const logo=form.logo.value;
    const card=document.createElement('div');
    card.classList='card';
    card.innerHTML=`
    <h2>${name}</h2>
    <p>${motto}</p>
    <img src="${logo}" alt="Company Logo">
`; cardContainer.appendChild(card);
form.reset();
});
