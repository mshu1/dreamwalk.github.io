    // // Get the image element
    // var img = document.getElementById('sliderImage');
    // var img2 = document.getElementById('sliderImage2');

    // // Update the image source based on slider value
    // function updateImage(value) {
    //   var paddedValue = String(value).padStart(5, '0');
    //   img.src = 'static/images/SlideBars/01/campsite_Hokusai_Picasso_' + paddedValue + '.png';
    // }
    
    // function updateImage2(value) {
    //   var paddedValue = String(value).padStart(5, '0');
    //   img2.src = 'static/images/SlideBars/01/campsite_Hokusai_Picasso_' + paddedValue + '.png';
    // }

    // // Add event listener to the slider
    // var slider = document.getElementById('myRange');
    // slider.addEventListener('input', function() {
    //   updateImage(this.value);
    // });

    // var slider2 = document.getElementById('myRange2');
    // slider2.addEventListener('input', function() {
    //   updateImage2(this.value);
    // });

// Update the image source based on slider value and folder


// Add event listeners to all sliders
var sliders = document.querySelectorAll('.slider');
sliders.forEach(
  function(slider) {
  slider.addEventListener('input', function() {
    updateImage(this.value, this.dataset.prefix, this.dataset.imgid);
  });
});

function updateImage(value, prefix, imgid) {
  var img = document.getElementById(imgid);
  var paddedValue = String(value).padStart(5, '0');
  img.src = prefix + paddedValue + '.png';
  console.log(img.src)
}


