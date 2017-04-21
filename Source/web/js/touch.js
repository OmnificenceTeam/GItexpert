function whiteBoard() {
    var a = document.getElementById('my').style.zIndex;
    divimg();
    deactivate();
   
    if (a == -1|| a==!-1) {
        document.getElementById('my').style.zIndex = 2;
            document.getElementById('my').style.visibility = 'visible';
           fortouch();
    }
    else {
        document.getElementById('my').style.zIndex=-1;
        document.getElementById('my').style.visibility = 'hidden';
             erase();
        
    }
}
function annot() {
    document.getElementById('my').style.zIndex = -1;
    document.getElementById('my').style.visibility = 'hidden';
    document.getElementById('drawPen').className = 'pen';
    document.getElementById('drawPen').style.pointerEvents = 'initial';
    document.getElementById('magnifier').style.pointerEvents = 'initial';
    erase();
}

function disableEnable() {
      var a = document.getElementById('drawPen').style.pointerEvents;
    if (a == !'initial' || a == 'initial') {
        document.getElementById('drawPen').style.pointerEvents = 'none';
    }
    else {
        document.getElementById('drawPen').style.pointerEvents = 'initial';
    }
}
function deactivate() {
    var a = document.getElementById('magnifier').style.pointerEvents;
        if (a == !'initial'|| a=='initial') {
        document.getElementById('magnifier').style.pointerEvents = 'none';
    }
    else {
        document.getElementById('magnifier').style.pointerEvents = 'initial';
    }
}
function divimg() {
    var a = document.getElementById('drawPen').className;
    if (a == 'pen' || a == !'pen') {
        document.getElementById('drawPen').className = 'greenPen';
    }
    else
        document.getElementById('drawPen').className = 'pen';
}


function fortouch() {
    canvas = document.getElementById('can');
       var context = canvas.getContext('2d');
        var drawer = {
        isDrawing: false,
        touchstart: function (coors) {
            context.beginPath();
            context.moveTo(coors.x - 191, coors.y - 95);
            this.isDrawing = true;
        },
        touchmove: function (coors) {
            if (this.isDrawing) {
                context.lineTo(coors.x - 191, coors.y - 95);
                context.stroke();
            }
        },
        touchend: function (coors) {
            if (this.isDrawing) {
                this.touchmove(coors);
                this.isDrawing = false;
            }
        }
    };
    function draw(event) {
             var coors = {
            x: event.targetTouches[0].pageX,
            y: event.targetTouches[0].pageY
            
        };
              drawer[event.type](coors);
    }
          canvas.addEventListener('touchstart', draw, false);
    canvas.addEventListener('touchmove', draw, false);
    canvas.addEventListener('touchend', draw, false);
   }
function erase() {
     var canvas = document.getElementById("can");
    var context = canvas.getContext("2d");
     context.clearRect(0, 0, canvas.width, canvas.height);
}
function downloadAll(files) {
    if (files.length == 0) return;
    file = files.pop();
    var theAnchor = $('<a />')
        .attr('href', file[1])
        .attr('download', file[0]);
    theAnchor[0].click();
    theAnchor.remove();
    downloadAll(files);
}   
function files() {
    $('#download').click(function () {
        download('http//pdf/pdf1/Fontfaces(1).pdf', 'http//pdf/pdf1/Fontfaces.pdf');
    });
    var download = function () {
        for (var i = 0; i < arguments.length; i++) {
            var iframe = $('<iframe style="visibility: collapse;"></iframe>');
            $('body').append(iframe);
            var content = iframe[0].contentDocument;
            var form = '<form action="' + arguments[i] + '" method="GET"></form>';
            content.write(form);
            $('form', content).submit();
            setTimeout((function (iframe) {
                return function () {
                    iframe.remove();
                }
            })(iframe), 2000);
        }
    }
}


function downLoad() {
    alert("download");
      downloadAll([
  ['pdf/pdf1/f1.pdf', 'data:text/pdf;charset=utf8,' ],
  ['pdf/pdf1/f1.pdf', 'data:text/pdf;charset=utf8,' ],
  ['pdf/pdf1/f1.pdf', 'data:text/pdf=utf8,' ]
    ]);

    function downloadAll(files) {
        if (files.length == 0) return;
        file = files.pop();
        var theAnchor = $('<a />')
            .attr('href', file[1])
            .attr('download', file[0]);
        theAnchor[0].click();
        theAnchor.remove();
        downloadAll(files);
    }
}
function downloadPDF() {
    myAudio.pause();
    document.getElementById('playpause').src = 'img/play.png';
    var aTag = document.createElement('a');
    var file = "pdf/pdf1/f1.pdf";
    aTag.setAttribute('href', file);
    aTag.setAttribute('ping', "f");
    aTag.setAttribute('id', "click");
    aTag.click();
    aTag.saveas();
}

function FunctionElements()
{
    this.time = 0;
    this.id = "";
    this.call = true;
}

var _gCollection = new Array();
var _time = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,131,132,135,140,145,150,155,160,165,170,175,179,180,185,190,195,200,205,210,215,220,225,230,235,240,245,250,255,260,265,
             270,275,280,285,290,295,300,305,310,315,320,325,330,335,339,340,341,345,350,355,359,360,361,362,363,365,370];
//var _time = [0, 1, 6, 11, 12, 17, 22, 27, 32, 33, 38, 43, 48, 53, 54, 59, 60, 65, 70, 75, 80, 81, 86, 91, 96, 101, 106, 111, 112, 113, 114, 119, 124, 129, 130, 135, 140, 145, 146, 151, 156, 161, 162, 167, 172, 177, 178, 183, 188, 193, 198, 199, 204, 209, 214, 219, 224, 229, 230, 235, 240, 245, 250, 251, 256, 261, 266, 271, 272, 277, 282, 287,
//    292, 293, 294, 295, 300, 301, 306, 307, 308, 309, 310, 311];
var _ids = ['page1','a1','a2', 'page2', 'a3', 'a4', 'a5', 'a6', 'page3', 'a7', 'a8', 'a9', 'a9a', 'page4', 'a10', 'page5', 'a11', 'a12', 'a13', 'a14', 'page6', 'a15', 'a16', 'a17',
'a18', 'a19', 'a20','page7','page8', 'page9', 'a21', 'a22', 'a23', 'page10', 'a24', 'a25', 'a26', 'a27','page11', 'page12', 'a28', 'page13', 'a29', 'a30', 'a31', 'page14', 'a32', 'a33', 'a34',
'a35', 'page15', 'a36', 'a37', 'a38', 'a39', 'a40', 'a49', 'page16', 'a41', 'a42', 'a43', 'a44', 'page17', 'a45', 'a46', 'a47', 'a48', 'page18', 'a50', 'a51', 'a52',
'a53','page19','page20','page21','a54','page22','a55','page23','page24','page25','page26','page27','a56'];

for (var j = 0; j < _time.length; j++) {
    var t = new FunctionElements();
    t.time = _time[j];
    t.id = _ids[j];
    _gCollection.push(t);
}

function aud_play_pause() {
    try {
        if (_gaudio == null)
            var myAudio1 = _gaudio = document.getElementById("myAudio");
        else
            myAudio1 = _gaudio;
        deactivate_whiteboard();
        if (myAudio.currentTime == 0) {
            showPage(page1);
                     for (var i = 0; i < _gCollection.length; i++) {
                _gCollection[i].call = true;
            }
                 }

        if (myAudio1.paused) {
            document.getElementById('playpause').src = 'img/pause.png';
            myAudio1.addEventListener("ended", function (e) {
             document.getElementById('playpause').src = 'img/play.png';
                for (var i = 0; i < _gCollection.length; i++) {
                    _gCollection[i].call = true;
                }
            });
          
            myAudio1.ontimeupdate = function (e) {
                 
                $("#timeE").html(e.currentTarget.currentTime);
                var time = e.currentTarget.currentTime;
                for (var i = 0; i < _gCollection.length; i++) {          
                    if (time >= _gCollection[i].time && _gCollection[i].call) {
                      console.log(time + " " + _gCollection[i].time + " " + _gCollection[i].id + " " + _gCollection[i].call);
                        if (_gCollection[i].id.indexOf("page") >= 0) {
                            showPage(document.getElementById(_gCollection[i].id));
                        }
                        else {
                            showAnnotation(_gCollection[i].id, false); annot();
                        }
                        _gCollection[i].call = false;
                    }
                }
            };
            myAudio1.play();
        }
        else {
            myAudio1.pause();
            document.getElementById('playpause').src = 'img/play.png';
        }
    }
    catch (ex) {
    }
}
function deactivate_whiteboard() {
    var a = document.getElementById('drawPen').style.zIndex;
    var b = document.getElementById('drawPen').style.pointerEvents;
    if (a == 1 && b == 'initial') {
        document.getElementById('drawPen').style.zIndex = -1;
        document.getElementById('drawPen').style.pointerEvents = 'none';
    }
    else {
        document.getElementById('drawPen').style.zIndex = 1;
        document.getElementById('drawPen').style.pointerEvents = 'initial';
    }
}

function playpausepage(ele) {
    try {      
        _gaudio.pause();
        document.getElementById('playpause').src = 'img/play.png';
        for (var i = 0; i < _gCollection.length; i++) {
            _gCollection[i].call = false;
        }
        var id = ele;
        var string = id.toString();
        for (var i = 0; i < _gCollection.length; i++) {
        if (_gCollection[i].id == string) {
             _gaudio.currentTime = _gCollection[i].time;
              for (var k = i; k < _gCollection.length; k++) {
                 _gCollection[k].call = true;
                }
            }
        }
    return
    }
    catch (ex) {
    }
}

function submitQuizans(ele)
{
    var parent = $(ele).parent().parent();
    var answer = $(parent).find('#Answer').val();
    var Answer = "";
    var elements = $(parent).find("input");
    for (var index = 0; index < elements.length ; index++) {
        if (elements[index].type == "radio" && elements[index].checked) {
            Answer = elements[index].value;
        }
    }

    if (Answer == "")
        alert("Please select an option")
    
    else if (Answer == answer) {
        
        var cHtml = ' <strong>Congrats !</strong><br /><br /> <div class="ImgAns"><span class="glyphicon glyphicon-ok"></span></div> <p style="margin-top:10px"> Correct answer</p> <br/>'
        '</div>';
        $(parent).find('#AnswerDisp').html(cHtml);
        $(parent).find('#AnswerDisp').show();
    }

    else {
        var cHtml = ' <strong>Sorry !</strong><br /><br /> <div class="ImgAns"><span class="glyphicon glyphicon-remove"></span></div> Incorrect answer ' +
                                       '<p>The correct answer is <span><strong>' + answer + '</strong></span></p>' +
                                     '</div>';
        $(parent).find('#AnswerDisp').html(cHtml);
        $(parent).find('#AnswerDisp').show();
    }
    window.setTimeout(function () { $(parent).find('#AnswerDisp').hide(); }, 10000);
}


function submitQuizans1(ele) {
    var parent = $(ele).parent().parent();
    var answer = $(parent).find('#Answer1').val();
    var Answer = "";
    var elements = $(parent).find("input");
    for (var index = 0; index < elements.length ; index++) {
        if (elements[index].type == "radio" && elements[index].checked) {
            Answer = elements[index].value;
        }
    }
    if (Answer == "")
        alert("Please select an option")
    else if (Answer == answer) {
        var cHtml = ' <strong>Congrats !</strong><br /><br /> <div class="ImgAns"><span class="glyphicon glyphicon-ok"></span></div> <p style="margin-top:10px"> Correct answer</p> <br/>'
        '</div>';
        $(parent).find('#AnswerDisp').html(cHtml);
        $(parent).find('#AnswerDisp').show();
    }
    else {
        var cHtml = ' <strong>Sorry !</strong><br /><br /> <div class="ImgAns"><span class="glyphicon glyphicon-remove"></span></div> Incorrect answer ' +
                                       '<p>The correct answer is <span><strong>' + answer + '</strong></span></p>' +
                                     '</div>';
        $(parent).find('#AnswerDisp').html(cHtml);
        $(parent).find('#AnswerDisp').show();
    }
    window.setTimeout(function () { $(parent).find('#AnswerDisp').hide(); }, 10000);
}
function submitQuizans2(ele) {
    var parent = $(ele).parent().parent();
    var answer = $(parent).find('#Answer2').val();
    var Answer = "";
    var elements = $(parent).find("input");
    for (var index = 0; index < elements.length ; index++) {
        if (elements[index].type == "radio" && elements[index].checked) {
            Answer = elements[index].value;
        }
    }
    if (Answer == "")
        alert("Please select an option")
    else if (Answer == answer) {
         var cHtml = ' <strong>Congrats !</strong><br /><br /> <div class="ImgAns"><span class="glyphicon glyphicon-ok"></span></div> <p style="margin-top:10px"> Correct answer</p> <br/>'
        '</div>';
        $(parent).find('#AnswerDisp').html(cHtml);
        $(parent).find('#AnswerDisp').show();
    }
    else {
        var cHtml = ' <strong>Sorry !</strong><br /><br /> <div class="ImgAns"><span class="glyphicon glyphicon-remove"></span></div> Incorrect answer ' +
                                       '<p>The correct answer is <span><strong>' + answer + '</strong></span></p>' +
                                     '</div>';
        $(parent).find('#AnswerDisp').html(cHtml);
        $(parent).find('#AnswerDisp').show();
    }
    window.setTimeout(function () { $(parent).find('#AnswerDisp').hide(); }, 10000);
 }
function submitQuizans3(ele) {
   var parent = $(ele).parent().parent();
    var answer = $(parent).find('#Answer3').val();
    var Answer = "";
    var elements = $(parent).find("input");
    for (var index = 0; index < elements.length ; index++) {
        if (elements[index].type == "radio" && elements[index].checked) {
            Answer = elements[index].value;
        }
    }
        if (Answer == "")
        alert("Please select an option")
    else if (Answer == answer) {
                var cHtml = ' <strong>Congrats !</strong><br /><br /> <div class="ImgAns"><span class="glyphicon glyphicon-ok"></span></div> <p style="margin-top:10px"> Correct answer</p> <br/>'
        '</div>';
        $(parent).find('#AnswerDisp').html(cHtml);
        $(parent).find('#AnswerDisp').show();
    }
    else {
        var cHtml = ' <strong>Sorry !</strong><br /><br /> <div class="ImgAns"><span class="glyphicon glyphicon-remove"></span></div> Incorrect answer ' +
                                       '<p>The correct answer is <span><strong>' + answer + '</strong></span></p>' +
                                     '</div>';
        $(parent).find('#AnswerDisp').html(cHtml);
        $(parent).find('#AnswerDisp').show();
    }
        window.setTimeout(function () { $(parent).find('#AnswerDisp').hide(); }, 10000);
    }
function submitQuizans4(ele) {
    var parent = $(ele).parent().parent();
    var answer = $(parent).find('#Answer4').val();
    var Answer = "";
    var elements = $(parent).find("input");
    for (var index = 0; index < elements.length ; index++) {
        if (elements[index].type == "radio" && elements[index].checked) {
            Answer = elements[index].value;
        }
    }
     if (Answer == "")
        alert("Please select an option")
    else if (Answer == answer) {
        var cHtml = ' <strong>Congrats !</strong><br /><br /> <div class="ImgAns"><span class="glyphicon glyphicon-ok"></span></div> <p style="margin-top:10px"> Correct answer</p> <br/>'
        '</div>';
        $(parent).find('#AnswerDisp').html(cHtml);
        $(parent).find('#AnswerDisp').show();
    }
    else {
        var cHtml = ' <strong>Sorry !</strong><br /><br /> <div class="ImgAns"><span class="glyphicon glyphicon-remove"></span></div> Incorrect answer ' +
                                       '<p>The correct answer is <span><strong>' + answer + '</strong></span></p>' +
                                     '</div>';
        $(parent).find('#AnswerDisp').html(cHtml);
        $(parent).find('#AnswerDisp').show();
    }
    window.setTimeout(function () { $(parent).find('#AnswerDisp').hide(); }, 10000);
    }
function submitQuizans5(ele) {
    var parent = $(ele).parent().parent();
    var answer = $(parent).find('#Answer5').val();
    var Answer = "";
    var elements = $(parent).find("input");
    for (var index = 0; index < elements.length ; index++) {
        if (elements[index].type == "radio" && elements[index].checked) {
            Answer = elements[index].value;
        }
    }
    if (Answer == "")
        alert("Please select an option")
    else if (Answer == answer) {
        var cHtml = ' <strong>Congrats !</strong><br /><br /> <div class="ImgAns"><span class="glyphicon glyphicon-ok"></span></div> <p style="margin-top:10px"> Correct answer</p> <br/>'
        '</div>';
        $(parent).find('#AnswerDisp').html(cHtml);
        $(parent).find('#AnswerDisp').show();
    }
    else {
        var cHtml = ' <strong>Sorry !</strong><br /><br /> <div class="ImgAns"><span class="glyphicon glyphicon-remove"></span></div> Incorrect answer ' +
                                       '<p>The correct answer is <span><strong>' + answer + '</strong></span></p>' +
                                     '</div>';
        $(parent).find('#AnswerDisp').html(cHtml);
       $(parent).find('#AnswerDisp').show();
    }
    window.setTimeout(function () { $(parent).find('#AnswerDisp').hide(); }, 10000);
}