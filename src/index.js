// a preloader to make the user experience better and smoother
function showPreloader() {
    document.getElementById('preloader').style.display = 'flex';
  }
  function hidePreloader() {
    document.getElementById('preloader').style.display = 'none';
  }

// a function to show on the gallery by clicking a button but calling the showPreloader function first
  document.getElementById('load-button').addEventListener('click', function() {
    showPreloader();
    setTimeout (function(){
      showGallery();
      hidePreloader();
    }, 3000);
  });

  function showGallery() {
    document.querySelector('.gallery').classList.remove('hidden');
    document.querySelector('.heading').classList.add('hidden');
    document.querySelector('.close').classList.remove('hidden');
  
    
    setTimeout(function() {
      document.querySelector('.gallery').style.display = 'block';
      document.querySelector('.heading').style.display = 'none';
      document.querySelector('.close').style.display = 'block';
    }, 500); 
  }
  
  function hideGallery() {
    document.querySelector('.gallery').classList.add('hidden');
    document.querySelector('.heading').classList.remove('hidden');
    document.querySelector('.close').classList.add('hidden');
  
    
    setTimeout(function() {
      document.querySelector('.gallery').style.display = 'none';
      document.querySelector('.heading').style.display = 'block';
      document.querySelector('.close').style.display = 'none';
    }, 500);
  }  