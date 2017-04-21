var g_bFullscreen = false;
var _gaudio = null;
function init() {
    _gaudio = document.getElementById('myAudio');
    _gaudio.play();
    _gaudio.pause();
}
function showFullscreen() {

    //    var width = 1024;j
    //    var sideMenuWidth = 150;
    //    if (g_bFullscreen) {
    //        $(".sidemenu").css('width', sideMenuWidth + 'px');
    //        $(".sidemenu").css('height', '623px');
    //        $(".content").css('width', (width - sideMenuWidth) + 'px');
    //        $(".content").css('height', '623px');
    //        $(".bottommenu").css('height', '68px');

    //    }
    //    else {
    //        $(".sidemenu").css('width', '0px');
    //        $(".content").css('width', width + 'px');
    //        $(".content").css('height', '768px');
    //        $(".bottommenu").css('height', '0px');
    //        $(".sidemenu").css('height', '768px');
    //    }
    //    g_bFullscreen = !g_bFullscreen;
    
    

}

var g_Pages = null;
var g_activePage = null;
var g_activeAnnotation = null;
var g_Annotation = null;
// function    : showPage
// parameter   : element to zoom 
// description : It will load annotations and show the full page.
function showPage(ele) {
    $('#info').removeClass('active');
    $('#quiz').removeClass('active');
       if (g_zoom) {
        var ani = $('.zoomarea');
        $(ani).removeClass("zoom");
        $(ani).trigger("zoom.destroy");
        $(ani).css("cursor", " -webkit-zoom-in");
        $(ani).css("cursor", " -moz-zoom-in;");
        g_zoom = false;
    }
    gotoInitialPageView();
    var title = document.getElementById("title");
    g_isAnnotationView = false;
    title.innerHTML = "";
    var img = document.getElementById("zoomImage");
    g_activePage = g_Pages[ele.id];
    $('.page').removeClass("pageborder");
    $('#' + ele.id).addClass("pageborder");
    img.src = g_activePage.image;
    title.innerHTML = "<h3 class='titleposition'>" + g_activePage.title + "</h3>";
    loadAnnotations(g_activePage.annotations);
    showFullscreen();
    showFullscreen();

}


function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "data.xml", false);
    xhttp.send();
    var Content = xhttp.responseXML;
    var pageList = "";
    if (null != Content) {
        g_Pages = {};
        var pages = Content.getElementsByTagName("page");
        for (var index = 0; index < pages.length; index++) {
            var page = {};
            for (var eIndex = 0; eIndex < pages[index].attributes.length; eIndex++)
                page[pages[index].attributes[eIndex].name] = pages[index].attributes[eIndex].value;
            page["annotations"] = {};
            var annotations = pages[index].getElementsByTagName("annotation");
            for (var aIndex = 0; aIndex < annotations.length; aIndex++) {
                var annotation = {};
                for (var eIndex = 0; eIndex < annotations[aIndex].attributes.length; eIndex++)
                    annotation[annotations[aIndex].attributes[eIndex].name] = annotations[aIndex].attributes[eIndex].value;
                page.annotations[annotation.id] = annotation;
            }
            g_Pages[page.id] = page;
            pageList += "<div id='" + page.id + "' class='page shadow' onclick='showPage(this);playpausepage(\"" + page.id + "\");' style='background-image:url(\"" + page.thumbimage + "\")'  ></div><p class='heading'>" + page.no + "</p>";
        }
        var pptdiv = document.getElementById('ppt');
        pptdiv.innerHTML = pageList;
    }
    showPage(document.getElementById('page1'));
      window.event.stopPropagation();
}
function loadAnnotations(annotations) {
    var anadiv = document.getElementById('annotationbar');
    var anamap = document.getElementById('annotationmap');
    anamap.innerHTML = "";
    anadiv.innerHTML = "";
    var annotationsCount = Object.keys(annotations).length;
    var bargap = parseInt(anadiv.style.width) / (annotationsCount - 1);
    var pos = -20;
    var index = 1;
    var str = "";
        for (var key in annotations) {
        var annotation = annotations[key];
        anadiv.innerHTML += "<span style='left:" + pos + "px;' class='annotation'><img  id='" + annotation.id + "' onclick='showAnnotation(\"" + annotation.id + "\");annot();playpausepage(\"" + annotation.id + "\");' src='img/stepgreybg.png' class='stepprogress'/><span class='annotationtext' onclick='showAnnotation(\"" + annotation.id + "\", false);annot();playpausepage(\"" + annotation.id + "\")'>" + index++ + "</span><span>";
        anamap.innerHTML += "<area  shape='rect' coords='" + annotation.dx + "," + annotation.dy + "," + annotation.dx1 + "," + annotation.dy1 + "' onclick='showAnnotation(\"" + annotation.id + "\", false);'/>";
        pos += bargap - 38;
        }

}

function gotoInitialPageView() {
    var img = document.getElementById("zoomImage");
    img.style.position = "inherit";
    img.style.top = "0px";
    img.style.left = "0px";
    img.style.width = "initial";
    img.style.height = "586px";
}

function hideAnnotation() {
        if (g_isAnnotationView && !g_zoom) {
        gotoInitialPageView();
        g_isAnnotationView = false;
        $(".annotation").find(":first-child").attr("src", "img/stepgreybg.png");
    }
}

function showAnnotation(eleid, useMap) {
        if (g_isAnnotationView && useMap) {
        gotoInitialPageView();
        return;
    }
    var ele = document.getElementById(eleid);
    g_activeAnnotation = ele.id;
    var curannot = g_activePage.annotations[g_activeAnnotation];
    g_activeAnnotation = curannot;
    if (g_activeAnnotation.hasslide == "true")
        $("#info").addClass("active");
    else 
        $("#info").removeClass("active");
    if (g_activeAnnotation.hasquestion == "true")
        $("#quiz").addClass("active");
    else
        $("#quiz").removeClass("active");
     $(".annotation").find(":first-child").attr("src", "img/stepgreybg.png");
    ele.src = "img/stepbluebg.png";
    var img = document.getElementById("zoomImage");
    var height = parseInt(img.style.height);
    /* Commented based on feedback to avoid going back to normal page view between two annotation
    gotoInitialPageView();
    */
    if (g_zoom) {
        var ani = $('.zoomarea');
        $(ani).removeClass("zoom");
        $(ani).trigger("zoom.destroy");
        $(ani).css("cursor", " -webkit-zoom-in");
        $(ani).css("cursor", " -moz-zoom-in;");
        g_zoom = false;
        return;
    }
    setTimeout(function () {
        g_activeAnnotation = ele.id;
        var curannot = g_activePage.annotations[g_activeAnnotation];
        g_activeAnnotation = curannot;
     var a = document.getElementById('zoomImage');
        if (a.height != a.naturalHeight) {
            var percent = curannot.percent / 100;
            a.style.left = -curannot.x + 'px';
            a.style.top = -curannot.y + 'px';
            a.style.width = a.naturalWidth * percent + 'px';
            a.style.height = a.naturalHeight * percent + 'px';
            a.style.position = "relative";
        }
        else {
            //a.style.width = a.clientWidth;
            a.style.height = a.clientHeight;
        }
    }, (height <= 586 || g_isAnnotationView) ? 0 : 1500);
    g_isAnnotationView = true;
    window.event.stopPropagation();
    //if (evt.cancelBubble != null) evt.cancelBubble = true;
        closeTab();
    return annot();
}
var g_zoom = false;
var g_isAnnotationView = false;

function magnifierZoom() {
    if (g_isAnnotationView)
        return;
    g_isAnnotationView = false;
    var ani = $('.zoomarea');
    $(ani).find('#zoomImage').css("position", "inherit");
    if (!g_zoom) {
        $(ani).addClass("zoom");
        $(ani).zoom();
        $(ani).css("cursor", " -webkit-zoom-out");
        $(ani).css("cursor", " -moz-zoom-out;");
    }
    else {
        $(ani).removeClass("zoom");
        $(ani).trigger("zoom.destroy");
        $(ani).css("cursor", " -webkit-zoom-in");
        $(ani).css("cursor", " -moz-zoom-in;");
    }
    g_zoom = !g_zoom;
    return disableEnable();
}

var g_activePopupid = "";
var g_morePopupid = "";
function showInfoPopup() {
       if (g_activeAnnotation != null && g_activeAnnotation.hasslide == "true") {
        _gaudio.pause();
        document.getElementById('playpause').src = 'img/play.png';
        g_activePopupid = g_activeAnnotation.slideid;
        $('#' + g_activeAnnotation.slideid).show();
          }
    return g_activePopupid;
    return popupSwipe();
}
//start of slides
function nextPage() {
    var n = document.getElementById(showInfoPopup() + '_s1');
    if (n == null) {
        return;
    }
            if (document.getElementById(showInfoPopup()).style.display == "block" && document.getElementById(showInfoPopup() + '_s1').style.display == "none" && document.getElementById(showInfoPopup() + '_s2').style.display == "none") {
            document.getElementById(showInfoPopup() + '_s1').style.display = "block";
            document.getElementById(showInfoPopup()).style.display = "none";
            return;
        }
            if (document.getElementById(showInfoPopup() + '_s1').style.display == "block" && document.getElementById(showInfoPopup() + '_s2').style.display == "none") {
            document.getElementById(showInfoPopup() + '_s2').style.display = "block";
            document.getElementById(showInfoPopup() + '_s1').style.display = "none";
            return;
        }
        if (document.getElementById(showInfoPopup() + '_s2').style.display == "block" && document.getElementById(showInfoPopup() + '_s1').style.display == "none") {
            document.getElementById(showInfoPopup() + '_s3').style.display = "block";
            return;
        }
    }
function prevPage() {
       if (document.getElementById(showInfoPopup() + '_s3') != null) {
        if (document.getElementById(showInfoPopup() + '_s3').style.display == "block") {
            document.getElementById(showInfoPopup() + '_s2').style.display = "block";
            document.getElementById(showInfoPopup() + '_s3').style.display = "none";
            return;
        }
    }
    if (document.getElementById(showInfoPopup() + '_s2') != null) {
        if (document.getElementById(showInfoPopup() + '_s2').style.display == "block") {
            document.getElementById(showInfoPopup() + '_s1').style.display = "block";
            document.getElementById(showInfoPopup() + '_s2').style.display = "none";
            return;
        }
    }
    if (document.getElementById(showInfoPopup() + '_s1') != null) {
        if (document.getElementById(showInfoPopup() + '_s1').style.display == "block") {
            document.getElementById('page2annot4').style.display = "block";
            document.getElementById('page2annot4_s1').style.display = "none";
            return;
        }
    }
}
//End of slides
function onMoreInfo(id) {
    if (g_activeAnnotation != null && g_activeAnnotation.hasslide == "true") {
        g_morePopupid = id;
        $('#' + id).show();
    }
   }

function showQuizPopup1() {
    if (g_activeAnnotation != null && g_activeAnnotation.hasquestion == "true") {
        _gaudio.pause();
        document.getElementById('playpause').src = 'img/play.png';
        g_activePopupid = g_activeAnnotation.qid;
        $('#' + g_activeAnnotation.qid).show();
         }
}
function closeQuizPopup() {
    $('.modal').hide();
 }
function nextQuizpage() {
    $('#Quizpop2').show();
    $('#Quizpop1').hide();
   }
function prevQuizpage() {
    $('#Quizpop1').show();
    $('#Quizpop2').hide();
}
function nextQuizpageQ2() {
    $('#Quizpop4').show();
    $('#Quizpop3').hide();
}
function prevQuizpageQ2() {
    $('#Quizpop3').show();
    $('#Quizpop4').hide();
}
function nextQuizpageQ3() {
    $('#Quizpop6').show();
    $('#Quizpop5').hide();
}
function prevQuizpageQ3() {
    $('#Quizpop5').show();
    $('#Quizpop6').hide();
}

function closePopup() {
    $('#' + g_activePopupid).hide();
    $(".active").find("#button").hide();
    $('.answer').hide();
    document.getElementById(g_activePopupid + '_s1').style.display = "none";
    document.getElementById(g_activePopupid + '_s2').style.display = "none";
    document.getElementById(g_activePopupid + '_s3').style.display = "none";

}

    function closeInfoPopup() {
        $('#' + g_morePopupid).hide();
        //$(".active").find("#button").hide();
        //$('.answer').hide();
    }
    function onclickClose() {
        $('#ShowDiv').fadeOut('slow', function () {
            var elements = $(document).find(".ImgCCC");
            for (var i = 0; i < elements.length; i++) {
                if ($(elements[i]).css("display") == "block") {
                    $(elements[i]).find('.pt-page-current').removeClass('pt-page-current');
                    $(elements[i]).find('#Content1').addClass('pt-page-current');
                    $(elements[i]).find('#currentContent').val(1);
                    $(elements[i]).find("#btnnext").find("span").css("background-color", "rgba(169, 169, 169, 0.99)");

                    $(elements[i]).find("#btnnext").find("span").css("color", "black");
                    $(elements[i]).find("#btnprev").find("span").css("background-color", "transparent");
                    $(elements[i]).find("#btnprev").find("span").css("color", "transparent");
                }
            }
        });



    }

    var g_activePopUp = null;
    function slideInfo(ele, modalid) {
        g_activePopUp = $(ele).parent();
        g_activePopUp.css("display", "none");
        $('#' + modalid).show();
    } loadData();


    var node = document.getElementById("master");
    node.addEventListener('gestureend', function (e) {
        if (e.scale < 1.0) {
            // User moved fingers closer together
            g_bFullscreen = true;
            showFullscreen();

        } else if (e.scale > 1.0) {
            // User moved fingers further apart
            g_bFullscreen = false;
            showFullscreen();
        }
    }, false);
    var g_Answer = 0;
    function onclickRadio(ans) {
        $(".active").find("#button").show();
        $(".answer").hide();
        g_Answer = ans;
        $('input[type="button"]').removeAttr('disabled');
    }

    function onclickAnswer(but) {
        $('.answer').find('.correct').hide();
        $('.answer').find('.Incorrect').hide();

        var showAnswer = $(but).parent().parent().find(".answer");

        if (g_Answer == true) {
            $(showAnswer).prepend("<div class='correct'><p style='padding-left:60px;'>Correct Answer</p></div>");
            $(showAnswer).show();
        }
        else {
            $(showAnswer).prepend("<div class='Incorrect'><p style='padding-left:60px;'>Incorrect Answer</p></div>");
            $(showAnswer).show();

        }
        $("input[type='radio']").removeAttr('checked');
        $('input[type="button"]').attr('disabled', 'disabled');

    }
    function helpTab() {
        closeTab();
        document.getElementById('helpTab').style.display = "block";
        document.getElementById('arrowHelp').style.display = "block";
        annot();
        _gaudio.pause();
        document.getElementById('playpause').src = 'img/play.png';
    }

    function referenceTab() {
        closeTab();
        document.getElementById('referTab').style.display = "block";
        document.getElementById('arrowRefer').style.display = "block";
        annot();
        _gaudio.pause();
        document.getElementById('playpause').src = 'img/play.png';
    }


    function closeTab() {
        if (document.getElementById("helpTab").style.display == "block") {
            document.getElementById("helpTab").style.display = "none";
            document.getElementById("arrowHelp").style.display = "none";
        }
        if (document.getElementById("referTab").style.display == "block") {
            document.getElementById("referTab").style.display = "none";
            document.getElementById("arrowRefer").style.display = "none";
        }
        return;
    }
    function preloadimages()
    {
        Quizimg = new Image();
        Infoimg = new Image();
        Quizimg.src = "img/quiz_disabled.png";
        Infoimg.src = "img/menu_disabled.png";
    }
   