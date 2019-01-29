$(document).ready(function(){

	function Controller(){

		this.MyEvents = function(){

			$(".go_to").on('click',function(e){
				e.preventDefault();
				var target = $(this).attr('href');
				$('html, body').animate({
					scrollTop: ($(target).offset().top) - 50
				}, 700);
			});

			$(".go_to_up").on('click',function(){
				$('html, body').animate({
					scrollTop: ($("body").offset().top) - 60
				}, 700);
			});

			$(".one_tab").click(function(){
				$(".one_tab").toggleClass("active")
				$(".tab").toggle()

			})

		}()

		this.write_code = function(){
			var my_start = new Date('2017.01.06').getTime() 
			var just_now = new Date().getTime() -  24 * 60 * 60 * 1000 // last day 
			var count = (just_now - my_start) / 1000 /  60 / 2

			count = Math.round(count)
			$("#number_of_code").html(count)
		}()

	};





	var app = new Controller()




















})