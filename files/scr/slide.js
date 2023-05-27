		window.addEvent('load', function () {
			myTabs = new SlidingTabs('buttons', 'panes');
			
			// this sets up the previous/next buttons, if you want them
			$('previous').addEvent('click', myTabs.previous.bind(myTabs));
			$('next').addEvent('click', myTabs.next.bind(myTabs));
			
			// this sets it up to work even if it's width isn't a set amount of pixels
			window.addEvent('resize', myTabs.recalcWidths.bind(myTabs));
		});
