// window resizing for a mobile viewport
// this messes up the editing mode position values, so it's turned off on edit mode

function dynamicResponsiveWindow() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  const container = document.getElementById('objects-container');
  var minusmarginleft = 0;
  // windowsize 414px to 1024px
  // 229 width
  // -315 answer
  // scale 0.55
  if (windowWidth < 414) {
    zoomFactor = windowWidth / 414;
    container.style.transform = 'scale(' + zoomFactor + ')';

    minusmarginleft = -0.5*(1024 - 414) - (10/zoomFactor/zoomFactor);
    container.style.marginLeft = minusmarginleft + 'px';
    
    containerWidth = (windowWidth / zoomFactor) - minusmarginleft;
    containerHeight = windowHeight / zoomFactor + 300;
    container.style.width = containerWidth + 'px';
    container.style.maxWidth = containerWidth + 'px';
    document.body.style.maxWidth = containerWidth + 'px';
    container.style.height = containerHeight + 'px';
    console.log(windowWidth);
  } else if (windowWidth < 1024) {
    minusmarginleft = -0.5*(1024 - windowWidth);
    container.style.marginLeft = minusmarginleft + 'px';
    containerWidth = windowWidth - minusmarginleft;
    container.style.width = containerWidth + 'px';
  // windowsize above 1024
  } else {
    minusmarginleft = 0.5*(windowWidth - 1024);
    container.style.marginLeft = minusmarginleft + 'px';
    containerWidth = windowWidth - minusmarginleft;
    container.style.width = containerWidth + 'px';
  }      
}

window.addEventListener("load", function() {
  // Get the container div
  const objscontainer = document.getElementById('objects-container');
  // Get all divs with class 'object'
  const objectDivs = document.querySelectorAll('div.object');
  // Move all object divs into the container
  objectDivs.forEach(div => {
  objscontainer.appendChild(div);
  });
  dynamicResponsiveWindow();
});

window.addEventListener('resize', function(event) {
  dynamicResponsiveWindow();
}, true);
