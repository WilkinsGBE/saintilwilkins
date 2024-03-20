var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
 }



var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var formData = new FormData(this);
  fetch('https://script.google.com/macros/s/AKfycbyjaaIXAVQ-BQWWcSueG7JPoN2K0ykzjEXGAzGffmCZKZvxf-U7YX1yx68tLOIPcIh2/exec', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('Form submitted successfully!');
      document.getElementById("contactForm").reset();
      document.getElementById("successMessage").style.display = "block";
    } else {
      throw new Error('Form submission failed!');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Form submission failed!');
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const people = ['dear Friend', 'dear Visitor', 'dear Manager', 'Everybody'];
  const greetingElement = document.getElementById('greeting');
  const personElement = document.getElementById('person');
  let index = 0;

  function displayPerson() {
      const person = people[index];
      const span = document.createElement('span');
      span.textContent = `Hi ${person} `;
      span.classList.add('greeting-span');
      greetingElement.insertBefore(span, greetingElement.firstChild);
      
      while (greetingElement.childNodes.length > 2) { 
          greetingElement.removeChild(greetingElement.childNodes[1]); 
      }

      index++;
      if (index >= people.length) {
          index = 0; 
      }
  }
  displayPerson();
  
  const interval = setInterval(displayPerson, 2000); 
});
