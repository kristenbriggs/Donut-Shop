var DSM = function(minNumCust, maxNumCust, avgDnutsCust, shopLocation)  {
       this.minNumCust = minNumCust;
       this.maxNumCust = maxNumCust;
       this.avgDnutsCust = avgDnutsCust;
       this.hourlyTotals = [];
       this.dailyTotal = 0;
       this.shopLocation = shopLocation;
     }

     var downtown = new DSM(8, 43, 4.50, "downtown");
     var capitolHill = new DSM(4, 37, 2.00, "capitolHill");
     var southLakeUnion = new DSM(9, 23, 6.33, "southLakeUnion");
     var wedgewood = new DSM(2, 28, 1.25, "wedgewood");
     var ballard = new DSM(8, 58, 3.75, "ballard");

 DSM.prototype.totalDnutsHr = function()  {
   var custPerHour = Math.floor(Math.random() * (this.maxNumCust - this.minNumCust + 1)) + this.minNumCust;
   return Math.round(custPerHour * this.avgDnutsCust);
     }

 DSM.prototype.hourlyPurchases = function()  {
     var totalDays = 0;
   for (var i = 7; i < 18; i++)  {
     var hourTotal = this.totalDnutsHr();
     this.hourlyTotals.push(hourTotal);
     totalDays += hourTotal;
   }
   return totalDays;
 }

 DSM.prototype.render = function()  {
   var dailyTotal = this.hourlyPurchases();
   // var Tr = document.getElementById(this.shopLocation);
   var Tr = document.createElement('tr');
   var elTd = document.createElement('td');
   elTd.textContent = this.shopLocation;
   Tr.appendChild(elTd);
   for (var i = 0; i < 12; i++)  {
     var elTd = document.createElement('td');
     elTd.textContent = this.hourlyTotals[i];
     Tr.appendChild(elTd);
   };

   elTd.textContent = dailyTotal;
   Tr.appendChild(elTd);
       console.log(Tr);
       document.getElementById('tablebody').appendChild(Tr);

 };

 downtown.render();
 southLakeUnion.render();
 capitolHill.render();
 wedgewood.render();
 ballard.render();

 window.Note = DSM;
