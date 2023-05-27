		/**
		* Change the currently selected tab
		* @param {DomNode} anchor The tab link the user clicked
		* @returns {Boolean} Always FALSE
		*/
		function changeTab(anchor){
			
			var tabbox = anchor;
			var target;
			
			// Get tabbox container
			while(tabbox != null && (tabbox.className == null || tabbox.className.indexOf("tabbox") == -1)){
				tabbox = tabbox.parentNode;
				
				// Is H1 - Hx tag
				if(tabbox.nodeName.search(/^h[0-9]$/i) == 0){
					target = tabbox.parentNode;
				}
			}
			if(tabbox == null || target == null){
				return false;
			}
						
			
			// Find and unselect Current Tab
			var tag;
			for(var i = 0; i < tabbox.childNodes.length; i++){
				tag = tabbox.childNodes[i];
				
				// Selected Div
				if(tag.nodeName.toLowerCase() == "div" && tag.className != null && tag.className.indexOf("selected") > -1){
					tag.className = tag.className.replace("selected", "");
					break;
				}
			}
			
			// Select Tag
			if(target != null){
				target.className = (target.className || "") +" selected";
			}
			
			return false;
		}
