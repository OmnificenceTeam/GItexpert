$(function () {
        $(".anot").swipe({
               swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                    if (direction == "left") {
                            $(event.currentTarget).find(".pageNext").click();
                         }
            if (direction == "right") {
                                return prevPage();
            }
            if (direction == "up") {
                                if (document.getElementById('help').style.display == "block") {
                    closeBlock();
                    return;
                }
                if (document.getElementById('reference').style.display == "block") {
                    closeBlock1();
                    return;
                }
                                    closePopup();
                    return;
            
            }
        },
             
        });

        $(".quiz").swipe({
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                if (direction == "left") {
                    return nextQuizpage();
                }
                if (direction == "right") {
                    return prevQuizpage();
                }
                if (direction == "up") {
                    return closeQuizPopup();
                }
            },
            
        });
        $(".quizQ2").swipe({
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                if (direction == "left") {
                    return nextQuizpageQ2();
                }
                if (direction == "right") {
                    return prevQuizpageQ2();
                }
                if (direction == "up") {
                    return closeQuizPopup();
                }
            },

        });
        $(".quizQ3").swipe({
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                if (direction == "left") {
                    return nextQuizpageQ3();
                }
                if (direction == "right") {
                    return prevQuizpageQ3();
                }
                if (direction == "up") {
                    return closeQuizPopup();
                }
            },

        });
});