(
	function ($) {
		$(".paging").each(function () {
			$(this).prepend("<div class='pagePrev' onclick='prevPage()'></div>");
			$(this).prepend("<div class='pageNext' onclick='nextPage()'></div>");
		}
		);
		
        
		$(".paging .pagePrev").each(function () {
			$(this).click(function () {
			    var current = $(this).parent().find(".page.active");
			    if (current.prev().length != 0 && current.prev().hasClass("page")) {
				    current.prev().addClass("active");
				    current.removeClass("active");
				    $(".answer").hide();
				}
				else
				    current.prev().css("display","none");
			});
		}
		);

		$(".paging .pageNext").each(function () {
			$(this).click(function () {
			    var current = $(this).parent().find(".page.active");
			    current.prev().css("display", "block");
			    if (current.next().length != 0) {
			        current.removeClass("active");
			        current.next().addClass("active");
			        $(".answer").hide();
			    }
			    
			   
			});

		}
		);
		}
(jQuery));
(
	function ($) {
	    $(".Quizpaging").each(function () {
	        $(this).prepend("<div class='QuizpagePrev' onclick='prevQuizpage()'></div>");
	        $(this).prepend("<div class='QuizpageNext' onclick='nextQuizpage()'></div>");
	    }
		); 


	    $(".Quizpaging .pagePrev").each(function () {
	        $(this).click(function () {
	            var current = $(this).parent().find(".page.active");
	            if (current.prev().length != 0 && current.prev().hasClass("page")) {
	                current.prev().addClass("active");
	                current.removeClass("active");
	                $(".answer").hide();
	            }
	            else
	                current.prev().css("display", "none");
	        });
	    }
		);

	    $(".Quizpaging .pageNext").each(function () {
	        $(this).click(function () {
	            var current = $(this).parent().find(".page.active");
	            current.prev().css("display", "block");
	            if (current.next().length != 0) {
	                current.removeClass("active");
	                current.next().addClass("active");
	                $(".answer").hide();
	            }


	        });

	    }
		);
	}
(jQuery));

(
	function ($) {
	    $(".QuizpagingQ2").each(function () {
	        $(this).prepend("<div class='QuizpagePrev' onclick='prevQuizpageQ2()'></div>");
	        $(this).prepend("<div class='QuizpageNext' onclick='nextQuizpageQ2()'></div>");
	    }
		);


	    $(".QuizpagingQ2 .pagePrev").each(function () {
	        $(this).click(function () {
	            var current = $(this).parent().find(".page.active");
	            if (current.prev().length != 0 && current.prev().hasClass("page")) {
	                current.prev().addClass("active");
	                current.removeClass("active");
	                $(".answer").hide();
	            }
	            else
	                current.prev().css("display", "none");
	        });
	    }
		);

	    $(".QuizpagingQ2 .pageNext").each(function () {
	        $(this).click(function () {
	            var current = $(this).parent().find(".page.active");
	            current.prev().css("display", "block");
	            if (current.next().length != 0) {
	                current.removeClass("active");
	                current.next().addClass("active");
	                $(".answer").hide();
	            }


	        });

	    }
		);
	}
(jQuery));

(
	function ($) {
	    $(".QuizpagingQ3").each(function () {
	        $(this).prepend("<div class='QuizpagePrev' onclick='prevQuizpageQ3()'></div>");
	        $(this).prepend("<div class='QuizpageNext' onclick='nextQuizpageQ3()'></div>");
	    }
		);


	    $(".QuizpagingQ3 .pagePrev").each(function () {
	        $(this).click(function () {
	            var current = $(this).parent().find(".page.active");
	            if (current.prev().length != 0 && current.prev().hasClass("page")) {
	                current.prev().addClass("active");
	                current.removeClass("active");
	                $(".answer").hide();
	            }
	            else
	                current.prev().css("display", "none");
	        });
	    }
		);

	    $(".QuizpagingQ3 .pageNext").each(function () {
	        $(this).click(function () {
	            var current = $(this).parent().find(".page.active");
	            current.prev().css("display", "block");
	            if (current.next().length != 0) {
	                current.removeClass("active");
	                current.next().addClass("active");
	                $(".answer").hide();
	            }


	        });

	    }
		);
	}
(jQuery));






