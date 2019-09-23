// Funtion to open photo-modal on click of an image

$(function() {
		$('.open').on('click', function() {  // To execute function on click of photo
			$('.imagepreview').attr('src', $(this).find('img').attr('src')); // Dynamic to display the image that is clicked
			$('#photo-modal').modal('show');
		});
});
