$(document).ready(function(){	
	//create variables
	var seats = [];
	var seat = {};
	var selectedSeat = {};
	
	//call functions and event handlers
	addSeats();
	$('.seat').click(selectSeat);
	$('#submit-btn').click(reserveSeat);
	$('#submit-btn').click(clearForm);
	
	//create seat objects and push, with props, into seats array
	function addSeats() {
		for (i=1; i<25; i++) {
			seat = {
				number: i,
				status: 'a',
				firstName: '',
				lastName: '',
				phoneNumber: '',
				email: '',
				request: '',
			}
			seats.push(seat);
		}
	}
	
	//select seat, change status prop in object, change class and color of div
	function selectSeat(e){
		e = event.target;
		seats.forEach(function(seat) {
			if (e.innerText == seat.number && seat.status==='a') {
				seat.status = 's';
			} else if (e.innerText == seat.number && seat.status==='s') {
				seat.status = 'a';
			}
		})
		if ($(this).hasClass('availible')) {
			$(this).removeClass('availible').addClass('selected');
			$(this).css('background-color', '#646362');
		} else if ($(this).hasClass('selected')) { 
			$(this).removeClass('selected').addClass('availible');
			$(this).css('background-color', '#E5E7E6')
		}
		console.log(this);
	}
	
	//reserve seat, change props of object, change class and text of div
	function reserveSeat() {
		seats.forEach(function(seat) {
			if(seat.status === 's') {
				seat.status = 'r';
				seat.firstName = $('#first-name').val();
				seat.lastName = $('#last-name').val();
				seat.phoneNumber = $('#phone').val();
				seat.email = $('#email').val();
				seat.request = $('#request').val();
			}
		});
		if ($('.seat').hasClass('selected')) {
			$('.selected').removeClass('selected').addClass('reserved');
			$('.reserved p').text('Reserved');
		};
		console.log(seats);
	};
	
	//clear form
	function clearForm() {
		$('#first-name').val('');
		$('#last-name').val('');
		$('#phone').val('');
		$('#email').val('');
		$('#request').val('');
	}
	
	//dropdown form when seat selected
	$('#seating-area').click(function(){
		$('#reservation-form').slideDown('slow');

	})
	
});
