(function($) {
	$.fn.reveal = function() {
		return this.each(function() {
			var field = $(this);
			var fieldname = 'reveal';

			if(field.data( fieldname )) {
				return true;
			} else {
				field.data( fieldname, true );
			}

			RevealActions.init( field, RevealData.get( field ) );
		});
	};
})(jQuery);