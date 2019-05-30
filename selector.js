var titleElem = menuElem.querySelector('.title');
   function optCl() {
    var menuElem = document.getElementById('Countries');
    
      menuElem.classList.toggle('open');
     
    }

    
    
    function chClick() {
      
      //var a= document.getElementsByClassName('name')[0].textContent;
      //document.getElementsByClassName('title')[0].textContent = a;
      document.getElementsByClassName('name')[0].classList.remove('nameVisible');
   document.getElementsByClassName('title')[0].textContent = event.target.textContent;
    
      
     
  }