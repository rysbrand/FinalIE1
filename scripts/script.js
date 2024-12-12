/*
    Student Name: Rebecca Ysbrand
    File Name: script.js
    Date: 20241210
*/
/*Hero image*/
    $(document).ready(function(){
    $('.hero').height($(window).height());
    });

/*Gallery*/
    document.addEventListener("DOMContentLoaded", () => {
    const lightboxLinks = document.querySelectorAll(".gallery-item a");
    const lightboxImage = document.getElementById("lightboxImage");
  
    lightboxLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const imageSrc = this.getAttribute("data-image");
        lightboxImage.setAttribute("src", imageSrc);
      });
    });
  });
