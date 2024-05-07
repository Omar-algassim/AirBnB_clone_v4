$(document).ready(function (){
    const amenity_list = {};
    
    $("li input[type=checkbox]").change(function () {
        if (this.checked) {
            amenity_list[$(this).attr("data-name")] = $(this).attr("data-id");
        } else {
            delete amenity_list[$(this).attr("data-name")];
        }
        $(".amenities h4").text(Object.keys(amenity_list).sort().join(", "));
    });
    
    $.get("http://127.0.0.1:5001/api/v1/status/")
        .done(function (data) {
            if(data.status === "OK") {
                $("div#api_status").addClass("available");
            } else {
                $("div#api_status").removeClass("available");
            }
        })
        .fail(function() {
            alert("Error in fetching API status.");
        });
    $.ajax({
        url: "http://127.0.0.1:5001/api/v1/places_search/",
        type: "POST",
        contentType: "application/json",
        data: '{}',
        success: function (data) {
            for(let place of data) {
            const html = `<article>
            <div class="title_box">
              <h2>${place.name}</h2>
              <div class="price_by_night">$${place.price_by_night}</div>
            </div>
            <div class="information">
              <div class="max_guest">${place.max_guest} Guests</div>
                  <div class="number_rooms">${place.number_rooms}</div>
                  <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms}</div>
            </div>
            <div class="description">
              ${place.description}
                </div>
          </article>`
            $(".places").append(html);
                }
}});
        });