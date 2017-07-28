/* KaManTravel.js is for KaMan's Travel website, including:
index.html,  KaManTravle_about.html,
KaManTravle_tokyo.html (later) , KaManTravle_taipei.html (later),
KaManTravle_seoul.html (later) , KaManTravle_contact.html.*/

/* all photos were taken by me */

$(document).ready(function(){
	// check name
	$('#name').focusout(function(event){
		$('#name + .error').html('');
		if ($('#name').val().length == 0) {
			$('#name, label[for="name"]').attr({
				class: 'error'
			}); //end attr
			$('#name + .error').html('Please enter your name.');
			event.preventDefault();
		} else {
			$('#name, label[for="name"]').attr({
				class: 'none'
			});
			$('#name + .error').html('');
		}
	}); //end focusout

	// check comment
	$('#comments').focusout(function(event){
		$('#comments').html('');
		if ($('#comments').val().length != 0){
			$('.thankYouMessage').html ("Thank you for your comments and suggestions!")
		} //end if
	}); //end focusout

	// check city visit quantity
	$('#qty').change(function(){
		if ($('#qty').val()=='0') {
			$('div.visitMessage').html("Please take some time off to travel! It is fun!")
		} else if ($('#qty').val()=='1') {
			$('div.visitMessage').html("Great! Glad that you've been to one of these places!")
		}else if ($('#qty').val()=='2') {
			$('div.visitMessage').html("Awesome! I hope you like these two cities!")
		}else if ($('#qty').val()=='3') {
			$('div.visitMessage').html("Excellent! These three cities are fun to visit!")
		}
	}); //end change

	// click Tokyo Photo
	$('#Tokyo_Photo1').click(function(){
		$('#Taipei_Photo1').hide(1000);
		$('#Taipei_Photo1').show(1000);
		$('#Seoul_Photo1').hide(1000);
		$('#Seoul_Photo1').show(1000);
	}); // end click

	// click Taipei Photo
	$('#Taipei_Photo1').click(function(){
		$('#Tokyo_Photo1').hide(1000);
		$('#Tokyo_Photo1').show(1000);
		$('#Seoul_Photo1').hide(1000);
		$('#Seoul_Photo1').show(1000);
	}); // end click

	// click Seoul Photo
	$('#Seoul_Photo1').click(function(){
		$('#Tokyo_Photo1').hide(1000);
		$('#Tokyo_Photo1').show(1000);
		$('#Taipei_Photo1').hide(1000);
		$('#Taipei_Photo1').show(1000);
	}); // end click

	// hover Tokyo title
	$('#TokyoTitle').hover(function(){
		$('#TokyoTitle').css({
			backgroundColor: 'red'
		}); // end css
		$('#TaipeiTitle').animate({
			opacity: '0.25'
		}); // end css
		$('#SeoulTitle').animate({
			opacity: '0.25'
		}); // end css
	},
	function(){
		//leaving the element
		$('#TokyoTitle').css({
			backgroundColor: '#E8FFFF'
		}); //end css
		$('#TaipeiTitle').animate({
			opacity: '1'
		}); // end css
		$('#SeoulTitle').animate({
			opacity: '1'
		}); // end css
	}); // end hover

	// hover Taipei title
	$('#TaipeiTitle').hover(function(){
		$('#TaipeiTitle').css({
			backgroundColor: 'red'
		}); // end css
		$('#TokyoTitle').animate({
			opacity: '0.25'
		}); // end css
		$('#SeoulTitle').animate({
			opacity: '0.25'
		}); // end css
	},
	function(){
		//leaving the element
		$('#TaipeiTitle').css({
			backgroundColor: '#E8FFFF'
		}); //end css
		$('#TokyoTitle').animate({
			opacity: '1'
		}); // end css
		$('#SeoulTitle').animate({
			opacity: '1'
		}); // end css
	}); // end hover

	// hover Seoul title
	$('#SeoulTitle').hover(function(){
		$('#SeoulTitle').css({
			backgroundColor: 'red'
		}); // end css
		$('#TokyoTitle').animate({
			opacity: '0.25'
		}); // end css
		$('#TaipeiTitle').animate({
			opacity: '0.25'
		}); // end css
	},
	function(){
		//leaving the element
		$('#SeoulTitle').css({
			backgroundColor: '#E8FFFF'
		}); //end css
		$('#TokyoTitle').animate({
			opacity: '1'
		}); // end css
		$('#TaipeiTitle').animate({
			opacity: '1'
		}); // end css
	}); // end hover

	// hover aboutArticleHeading
	$('#aboutArticleHeading').hover(function(){
		$('#aboutArticleHeading').css({
			backgroundColor: 'red'
		}); // end css
		$('#aboutArticle p:even').css({
			fontWeight: 'bold',
			color: 'green'
		}); // end css
	},
	function(){
		//leaving the element
		$('#aboutArticleHeading').css({
			backgroundColor: '#E8FFFF'
		}); //end css
		$('#aboutArticle p:even').css({
			fontWeight: 'normal',
			color: 'black'
		}); // end css
	}); // end hover

	// slide up and down home page article title
	$('.articleTitle').slideUp(1000).slideDown(1000);
	
	// fade out and in about page article title
	$('#aboutArticleHeading').fadeOut(1000).fadeIn(1000);

	// click createPostcardButton
	$('#createPostcardButton').click(function(){
		// check postcardBackgroundColor value
		var colorsrc = $('#postcardBackgroundColor').val();
		switch (colorsrc){
			case '#F5A7F0':
				colorsrc="#F5A7F0";
				break;
			case '#09DE00':
				colorsrc="#09DE00";
				break;
			case '#FEF546':
				colorsrc="#FEF546";
				break;
			default:
				colorsrc="#E8FFFF";
				break;
		} //end switch

		// drawRect in canvas1 and canvas2
		$('#canvas1').drawRect({
  			fillStyle: colorsrc,
  			x: 1, y: 1,
  			width: 800,
  			height: 300
		}); // end drawRect

		$('#canvas2').drawRect({
  			fillStyle: colorsrc,
  			x: 1, y: 1,
  			width: 800,
  			height: 300
		}); // end drawRect

		// addSmile in canvas1
		if ($('#addSmile').val()=='Yes'){
			//drawArc-eyes 
			$('#canvas1').drawArc({
			  	strokeStyle: '#909',
			  	strokeWidth: 2,
			  	x: 100, y: 60,
			  	radius: 15,
			  	fillStyle: '#000'
			})
			.drawArc({	
			  	strokeStyle: '#909',
			  	strokeWidth: 2,
			  	x: 200, y: 60,
			  	radius: 15,
			  	fillStyle: '#000'
	  		}) //end drawArc-eyes

	  		// drawArc-hair
	  		.drawArc({
				fillStyle: 'orange',
				x: 25,
				y: 10,
				radius: 25
			})
			.drawArc({
				fillStyle: 'maroon',
				x: 75,
				y: 10,
				radius: 25
			})
			.drawArc({
				fillStyle: 'orange',
				x: 125,
				y: 10,
				radius: 25
			})
			.drawArc({
				fillStyle: 'maroon',
				x: 175,
				y: 10,
				radius: 25
			})
			.drawArc({
				fillStyle: 'orange',
				x: 225,
				y: 10,
				radius: 25
			})
			.drawArc({
				fillStyle: 'maroon',
				x: 275,
				y: 10,
				radius: 25
			}); //end drawArc-hair

			// drawQuadratic-smile
			$('#canvas1').drawQuadratic({
			  strokeStyle: '#000',
			  strokeWidth: 2,
			  x1: 70, y1: 100, // Start point
			  cx1: 150, cy1: 150, // Control point
			  x2: 230, y2: 100 // End point
			}); //end drawQuadratic-smile
		} // end if

		// get postcardImage value
		var imgsrc = $('#postcardImage').val();
		switch (imgsrc){
			case 'Tokyo':
				imgsrc="img/rsz_tokyo_350.jpg";
				break;
			case 'Taipei':
				imgsrc="img/rsz_taipei_350.jpg";
				break;
			case 'Seoul':
				imgsrc="img/rsz_seoul_350.jpg";
				break;	
			default:
				imgsrc="";
				break;
		} //end switch

		// get postcardText
		function memetext(){
			var shorttext = $('#postcardText').val().toUpperCase();

			$('#canvas2').drawText({
				fillStyle: '#fff',
				strokeStyle: 'blue',
				strokeWidth: 1.3,
				x: 150,
				y: 130,
				fontSize: '1.5em',
				fontFamily: 'Impact, sans-serif',
				text: shorttext
			}); 
		} //end memetext
		
		// drawImage and memetext in canvas2
		$('#canvas2').drawImage({
  			source: imgsrc,
  			x: 150, y: 70,
  			width: 400,
  			height: 180,
  			load: memetext
		}); // end drawImage
	}); // end click

	// clear canvases
	$('#clearCanvasButton').click(function(){
		$('#canvas1').clearCanvas();
		$('#canvas2').clearCanvas();
	}); //end click clear

}); //end ready