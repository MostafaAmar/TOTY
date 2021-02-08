        // Set the date we're counting down to
        var countDownDate = new Date("Feb 11, 2021 21:00:00").getTime();
        let days;
        var remainEnergy;
        var totalAds;
        var totalPacks;
        var totalCoins;
        var totalPass;

        // Update the count down every 1 second
        var x = setInterval(function () {
          // Get today's date and time
          var now = new Date().getTime();
  
          // Find the distance between now and the count down date
          var distance = countDownDate - now;
  
          // Time calculations for days, hours, minutes and seconds
          days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
          // Output the result in an element with id="demo"
          document.getElementById("demo").innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
          //var ads =( days *3 ) + 3
          remainEnergy = (Math.floor((days * 48 + hours * 2) / 6))*20;
          document.getElementById("demo1").innerHTML = " باقي  "+remainEnergy+ " نقطه من الانرجي اليومي ";
          // If the count down is over, write some text
          
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
          }
        }, 1000);
  
  
  
  
        function myFunction() {
          var rPack = document.getElementById("packs").value;
          if(rPack>15){
              document.getElementById("demo3").innerHTML = " مينفعش تفتح اكتر من 15 باك :)"    
          }
          else{
          var packs = 15 - rPack;
          totalPacks=packs*50
          document.getElementById("demo3").innerHTML = " باقي " + totalPacks + " نقطه من الباكات ";
        }
      }
  
        function myFunction2() {
          var rads = document.getElementById("ads").value;
          if(rads>3){
              document.getElementById("demo4").innerHTML = "مينفعش تشوف اكتر من 3 اعلانات :)"
          } 
          else {
          var radsPerday= 3 - rads;
          totalAds = Math.floor(((days*3 + radsPerday)*5)/6)*20;
                   
          document.getElementById("demo4").innerHTML = " باقي " + totalAds + " نقطه من الاعلانات ";
        }
      }
      function myFunction3() {
      document.getElementById("TT").innerHTML= totalAds + totalPacks + remainEnergy + totalCoins + totalPass
      }

      function myFunction4() {
        var coinspack = document.getElementById("week1").value;
        var rCoins = 80;
        totalCoins= Math.floor((rCoins-(coinspack*10))/6)*20
        if(coinspack>8) {
            document.getElementById("demo5").innerHTML= "مينفعش تفتح اكتر من 8 باكات :)"
        }
        else{

        document.getElementById("demo5").innerHTML="باقي " + totalCoins + " نقطه من باكات الكوينز"
        }
    }


    function myFunction7() {
        var starPoints = document.getElementById("star").value
        if(starPoints==50){
            totalPass = 150 - starPoints
       document.getElementById("demo6").innerHTML= "باقي " + totalPass + " من الفري باس "
        }
       
        else if (starPoints==150){
            totalPass = 150 - starPoints
            document.getElementById("demo6").innerHTML=  "باقي " + totalPass + " من الفري باس "

        }
        else if (starPoints==0){
            totalPass = 150 - starPoints
            document.getElementById("demo6").innerHTML=  "باقي " + totalPass + " من الفري باس "

            
        }
        else{
            document.getElementById("demo6").innerHTML="مينفعش لازم 50 او 150"

        }
    }
