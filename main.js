let slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides((slideIndex += n));
      }

      function currentSlide(n) {
        showSlides((slideIndex = n));
      }

      function showSlides(n) {
        let i;
        const slides = document.querySelectorAll(".carousel ul li");
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "flex";
      }



      const searchInput = document.getElementById('search');
      const searchIcon = document.getElementById('searchIcon');
      const closeButton = document.getElementById('closeButton');
      const menuIcon = document.getElementById('menuIcon');
      const header_right = document.getElementById('imgheader');
      const header_center = document.getElementById('headerCenter')

      searchIcon.addEventListener('click', () => {
        searchInput.style.display = 'inline-block';
        closeButton.style.display = 'contents';
        searchIcon.style.display = 'none';
        header_right.style.display = 'none';
        menuIcon.style.display = 'none';
        header_center.style.display = 'none';
      });
    
      closeButton.addEventListener('click', () => {
        searchInput.style.display = 'none';
        closeButton.style.display = 'none';
        searchIcon.style.display = 'contents';
        header_right.style.display = 'contents';
        menuIcon.style.display = 'contents';
        header_center.style.display = 'contents';
      });
    
      menuIcon.addEventListener('click', () => {
      });


      document.getElementById("mySidebar").style.display = "none";


      function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
      }
    
      function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
      }