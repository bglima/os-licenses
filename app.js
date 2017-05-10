var main = function() {
	
	var totalQuestions = $('.questions').size();
	var currentQuestion = 0;
	$questions = $('.questions');
	
	
	answers = new Object();
	$('.option').change(function(){
		var answer = ($(this).attr('value'))
		answers[currentQuestion] = answer
	})
	
	$questions.hide();
	$($questions.get(currentQuestion)).fadeIn();
		
	
	$('#next').click(function(){
		$($questions.get(currentQuestion)).fadeOut(function(){
			var answer = answers[currentQuestion];
			var suggestion = "";
			
			if ( currentQuestion == 0) {
					 if( answer == 1) {currentQuestion = 1; }
				else if( answer == 2) {suggestion = "GNU LGPLv3"; }
				else if( answer == 3) {suggestion = "Mozilla Public License 2.0"; }
				else if( answer == 4) {currentQuestion = 2; };
			}
			else if ( currentQuestion == 1) {
					 if( answer == 1) {suggestion = "GNU AGPLv3"; }
				else if( answer == 2) {suggestion = "GNU GPLv3"; };
			}
			else if ( currentQuestion == 2) {
					 if( answer == 1) {suggestion = "Apache License 2.0"; }
				else if( answer == 2) {currentQuestion = 3; };
			}
			else if ( currentQuestion == 3) {
					 if( answer == 1) {suggestion = "MIT License"; }
				else if( answer == 2) {suggestion = "The Unlicense"; };
			};
		
			console.log(suggestion);
			if( suggestion == "" ) $($questions.get(currentQuestion)).fadeIn();
			else {
				alert("A licença opensource que mais se adequa é " + suggestion);
				location.reload();
			}
	
		})
	});

}

$(document).ready(main);

