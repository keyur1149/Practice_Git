

// for side bar toggaling 
$('.toggalbtn').click(function () {
    console.log("runnning");
    $(this).toggleClass("click");
    if($(window).width()<992){
        if ($('#sidebarMenu').hasClass('xyz')) {
        $('#sidebarMenu').removeClass(" xyz");
        $('#sidebarMenu').addClass("d-none d-lg-block d-xl-block d-xxl-block");
        $('#mainContent').removeClass("col-lg-12");
        $('#mainContent').addClass("col-lg-10");
    } else {
        $('#sidebarMenu').removeClass("d-none d-lg-block d-xl-block d-xxl-block");
        $('#sidebarMenu').addClass(" xyz");
        $('#mainContent').removeClass("col-lg-10");
        $('#mainContent').addClass("col-lg-12");
    }
}
    
    if ($(window).width() < 570) {
        

        if ($('#sidebarMenu').hasClass('xyz')) {
            $('#sidebarxyz').removeClass("d-none d-lg-block d-xl-block d-xxl-block");
            $('#sidebarMenu').removeClass("d-none d-lg-block d-xl-block d-xxl-block");
            $('#sidebarMenu').addClass("show d-sm-block xyz");
        } 
        else {
            
            $('#sidebarxyz').addClass("d-none d-lg-block d-xl-block d-xxl-block");
            $('#sidebarMenu').addClass("d-none d-lg-block d-xl-block d-xxl-block");
            $('#sidebarMenu').removeClass("show d-sm-block xyz");
        }
      
        
    }
});