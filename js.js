$(document).ready(function() {
    $("#to_top").hide();
    $("#tab_content_downloads").hide();
    $("#tab_content_news").hide();
    $("#tab_content_about").hide();
    $("#navigationBar").hide();
    
    $(window).scroll(function(e) {
        if ($(window).scrollTop() >= 100) {
            $("#to_top").show();
            $("#navigationBar").slideDown();
        } else {
            $("#to_top").hide();
            $("#navigationBar").slideUp();
        }
    });
  
    $("#to_top").click(function(e) {
        e.preventDefault();
        scrollToTop();
    });
  
    $('.nav_tabs').click(function(e) {
        e.preventDefault();
        var selectedTabs = document.getElementsByClassName($(this).attr('href'));
        for (var i=0;i<selectedTabs.length;i++) {
            $(selectedTabs[i]).addClass('active').siblings().removeClass('active');
        }
        $('#'+$(this).attr('href')).slideDown(400).siblings().slideUp(400);
    });
    
    $('#navigationLogo').click(function(e) {
        e.preventDefault();
        $('#'+$(this).attr('href')).slideDown(400).siblings().slideUp(400);
        var selectedTabs = document.getElementsByClassName($(this).attr('href'));
        for (var tab in selectedTabs) {
            $(tab).addClass('active').siblings().removeClass('active');
        }
    });
});

function scrollToTop() {
    $('html, body').animate({
          scrollTop: 0
    }, $(window).scrollTop()/2);
}

function newDownload(name, description, downloadUrl) {
  //$("#tab_")
}