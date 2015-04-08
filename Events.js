    var Location = window.Note;
    var noteList = document.getElementById('location-list');
    var locationForm = document.getElementById('new-location-form');
    var clearLocationForm = document.getElementById('clear-all-locations');
    var locationData = [];

    var renderAllLocations = function()  {
        locationList.textContent = '';
        locationData.forEach(function(note)  {
            locationList.appendChild(note.render());
        });
    };

    var handleLocationFormSubmit = function(event)  {
        event.preventDefault();

        if (!event.target.location.value)  {
            return alert('location cannot be blank');
        }

      var newLocation = new Location(event.target.minNumCust.value, event.target.maxNumCust.value, event.target.avgDnutsCust.value, event.target.location.value);
      console.log('new object');
      event.target.location.value = null;
      event.target.minNumCust.value = null;
      event.target.maxNumCust.value = null;
      event.target.avgDnutsCust.value = null;
      locationData.push(newLocation);
      newLocation.render();
      //renderAllLocations();
    }

  locationForm.addEventListener('submit', handleLocationFormSubmit);
  // clearLocationsButton.addEventListener('click', function()  {
  //   noteList.textContent = '';
  //   locationData = '';
  // })
