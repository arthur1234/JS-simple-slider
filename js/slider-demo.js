		var slideIndex = 1;

		var sliderContent   = [
			{ img: "images/national-park.jpg",  string: "Let it be"},
			{ img: "images/Nature.jpg",         string: "Just do it"},
			{ img: "images/bee-on-Ribes-1.jpg", string: "We will rock you"}
		];

		var init = function(){

			for (var i = 0; i < sliderContent.length; i++){
				var slideObject  = document.createElement('div');
				var imgElement   = document.createElement('img');
				var outputString = document.createElement('div');

				slideObject.className = 'slide-object';

			    imgElement.setAttribute('src',sliderContent[i].img);

				outputString.className = 'output-string';

				outputString.innerText = sliderContent[i].string;

				slideObject.appendChild(imgElement);
				slideObject.appendChild(outputString);

				document.getElementsByClassName('create-slider-exercise')[0].
					appendChild(slideObject);
			}
			
		}


		var plusSlides = function(num) {
		  activateSlider(slideIndex += num);
		}

		var currentSlide = function(num) {
		  activateSlider(slideIndex = num);
		}

		var activateSlider = function(num){

			var slides = document.getElementsByClassName('slide-object');
			var dots   = document.getElementsByClassName('dot');

			if(num > slides.length ){
				slideIndex = 1;
			}

			if(num < 1){
				slideIndex = slides.length;
			}

			for(var i = 0, len = slides.length; i < len; i++){
				slides[i].style.display = 'none';
			}

			for (var j = 0, len =  dots.length; j < len; j++) {
			    dots[j].className = dots[j].className.replace(" active", "");
			}
			
			slides[slideIndex-1].style.display = "block";  
  			dots[slideIndex-1].className += " active";
		}

		init();
		
		activateSlider(slideIndex);