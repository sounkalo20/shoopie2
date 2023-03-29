
$("#grid-active-btn").addClass("active-btn");

$("#grid-active-btn").click(function (e) { 
    e.preventDefault();
    $("#grid-active-btn").addClass("active-btn");
    $("#details-active-btn").removeClass("active-btn");
    $(".item-list").removeClass("details-active");
});

$("#details-active-btn").click(function (e) { 
    e.preventDefault();
    $("#details-active-btn").addClass("active-btn");
    $("#grid-active-btn").removeClass("active-btn");
    $(".item-list").addClass("details-active");
});


