(function($){
	var defaultVal = {
		layerHeight : "200px",				
	};
	
	$.fn.floatLayer =function(options){
		

		if(!options.$btn || !options.keyEvent) {
			return console.log('need param $btn or keyEvent')
		}

		var settings = $.extend(defaultVal, options);
		// $('.float-container')
		this.each(function(){
			var self = this;			// 每一个jquery浮层
			self.isShow = false;

			if(settings.$btn) {
				settings.$btn.click(showOrHide.bind(null, self));

			}

			if(settings.keyEvent) {
				$(document).on('keydown', function(e) {
					// 判断是否是菜单按键事件
					console.log(e.keyCode);

					if(e.keyCode === settings.keyEvent) {
						showOrHide(self);
					}

				})
			} 

		});

		// 显示或隐藏浮层
		function showOrHide(targetDom) {
			var isShow = targetDom.isShow;
			if(!isShow){
				$(targetDom).addClass("hid");
			}else{
				$(targetDom).removeClass("hid");
			}

			targetDom.isShow = !isShow;
		}

	};
})(jQuery);
