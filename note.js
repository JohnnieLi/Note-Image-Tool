(function ($) {
   
    $(function () {
		
		$('#description').on('change', function(){
			$('.curly-quotes').html($(this).val());
		})
		
		
		$('#download').on('click', function(){
			var imageName  = $('#imageName').val() == '' ? 'note' : $('#imageName').val()+'.jpeg';
			
			domtoimage.toJpeg(document.getElementById('note'), { quality: 0.90 })
				.then(function (dataUrl) {
					var link = document.createElement('a');
					link.download = imageName;
					link.href = dataUrl;
					link.click();
				});
		})
    });
    
})(jQuery)


