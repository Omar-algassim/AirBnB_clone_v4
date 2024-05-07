$(document).ready(function (){
    const amenity_list = {};
    $("li input[type=checkbox]").change(function () {
        if (this.checked) {
        amenity_list[($(this).attr("data-name"))] = $(this).attr("data-id");
    }
    else {
        delete amenity_list[$(this).attr("data-name")];
    }
    $(".amenities h4").text(Object.keys(amenity_list).sort().join(", "));
});
});
