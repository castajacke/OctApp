  function leapYear()
  {
    var yr=document.getElementById('year').value;
    x = (yr % 100 === 0) ? (yr % 400 === 0) : (yr % 4 === 0); 
     
    if(x==true)
    {
      document.getElementById('res').innerHTML="Leap Year";
    }
    else{
      document.getElementById('res').innerHTML="Not a Leap Year";
    }
  }