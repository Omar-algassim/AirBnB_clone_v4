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
    
    $.get("http://0.0.0.0:5001/api/v1/status/")
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
});
