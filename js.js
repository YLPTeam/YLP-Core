$(document).ready(function() {
    $("#tab_content_downloads").hide();
    $("#tab_content_developers").hide();
    $("#tab_content_about").hide();
    
    $('.tabs').click(function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        $($(this).attr('href')).slideDown(400).siblings().slideUp(400);
    });
});