window.addEventListener("load", function() {
  
  // creates h1 for slightly more semantic HTML purposes
  const elements = document.querySelectorAll('.h1-title-div .glue-text-render');
  if (elements.length > 0) {
      const wrapper = document.createElement('h1');
      elements[0].parentNode.insertBefore(wrapper, elements[0]);
      elements.forEach(element => {
          wrapper.appendChild(element);
      });
  }
  // sorts div order to hopefully make it easier for screen readers
  // Select all elements with class 'object' inside body
  const sortelements = Array.from(document.querySelectorAll('body .object'));
  // Sort elements by their offsetTop property
  sortelements.sort((a, b) => a.offsetTop - b.offsetTop);
  // Append sorted elements back to body
  sortelements.forEach(el => document.body.appendChild(el));

  

});



/* original jquery 

$(window).bind("load", function() { 
  console.log("Hello World!");
  $( ".h1-title-div .glue-text-render" ).wrapAll("<h1></h1>");
});

$('body .object').sort(function(a, b) {
     return a.offsetTop > b.offsetTop;
  }).appendTo("body");

*/