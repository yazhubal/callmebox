// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

    	$(function(){
		
			$(document.body).on('click', '.changeType' ,function(){
				$(this).closest('.phone-input').find('.type-text').text($(this).text());
				$(this).closest('.phone-input').find('.type-input').val($(this).data('type-value'));
			});
			
			$(document.body).on('click', '.btn-remove-phone' ,function(){
				$(this).closest('.phone-input').remove();
			});
			
			
			$('.btn-add-phone').click(function(){

				var index = $('.phone-input').length + 1;
				
				$('.phone-list').append(''+
						'<div class="input-group phone-input">'+
							'<span class="input-group-btn">'+
								'<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="type-text">Type</span> <span class="caret"></span></button>'+
								'<ul class="dropdown-menu" role="menu">'+
									'<li><a class="changeType" href="javascript:;" data-type-value="phone">Stacjonarny</a></li>'+
									'<li><a class="changeType" href="javascript:;" data-type-value="mobile">Komórka</a></li>'+
								'</ul>'+
							'</span>'+
							'<input type="text" name="phone['+index+'][number]" class="form-control" placeholder="+48 111 222 333" />'+
							'<input type="hidden" name="phone['+index+'][type]" class="type-input" value="" />'+
							'<span class="input-group-btn">'+
								'<button class="btn btn-danger btn-remove-phone" type="button"><span class="glyphicon glyphicon-remove"></span></button>'+
							'</span>'+
						'</div>'
				);

			});
			
		});
