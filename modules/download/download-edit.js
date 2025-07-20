/**
 *	modules/download/download-edit.js
 *	Frontend code for download objects
 *
 *	Copyright Gottfried Haider, Danja Vasiliev 2010.
 *	This source code is licensed under the GNU General Public License.
 *	See the file COPYING for more details.
 * 
 */

$('.download').live('glue-upload-dynamic-early', function(e, mode, target_x, target_y) {
	// there probably is no load event for our div, so make it available 
	// right away
	// position object
	if (mode == 'center') {
		$(this).css('left', (target_x-$(this).outerWidth()/2)+'px');
		$(this).css('top', (target_y-$(this).outerHeight()/2)+'px');
	} else {
		$(this).css('left', target_x+'px');
		$(this).css('top', target_y+'px');
	}
	// restore visibility
	$(this).css('visibility', $(this).data('orig_visibility'));
	$(this).removeData('orig_visibility');
	// register object
	$.glue.object.register(this);
	// save object
	$.glue.object.save(this);
});

$(document).ready(function() {
	$.glue.contextmenu.veto('download', 'object-link');
	//
	// register menu items
	//
	var elem;
	elem = $('<div class="elemcustom">💾 Download file</div>');
	$(elem).bind('click', function(e) {
		var obj = $(this).data('owner');
		// initite download
		window.location = $.glue.base_url+'?'+$(obj).attr('id')+'&download=1';
	});
	$.glue.contextmenu.register('download', 'download-download', elem);
	
	elem = $('<div class="elemcustom">🫥 This object is only shown while editing (click to make public)</div>');
	$(elem).bind('glue-menu-activate', function(e) {
		var obj = $(this).data('owner');
		var that = this;
		// check if object is public
		$.glue.backend({ method: 'glue.load_object', name: $(obj).attr('id') }, function(data) {
			if (data['download-public'] == 'public') {
				$(that).text('😐 This object is shown publicly (click to make private)');
				$(that).addClass('glue-menu-enabled');
				$(that).removeClass('glue-menu-disabled');
				//$(that).attr('title', 'this object is shown to everyone - click to make it private');
			} else {
				$(that).text('🫥 This object is only shown while editing (click to make public)');
				$(that).removeClass('glue-menu-enabled');
				$(that).addClass('glue-menu-disabled');
				//$(that).attr('title', 'this object is only shown while editing - click to make it public');
			}
		});
	});
	$(elem).bind('click', function(e) {
		var obj = $(this).data('owner');
		// toggle setting
		if ($(this).hasClass('glue-menu-enabled')) {
			$(this).removeClass('glue-menu-enabled');
			$(this).addClass('glue-menu-disabled');
			//$(this).attr('title', 'this object is only shown while editing - click to make it public');
			$(this).text('🫥 This object is only shown while editing (click to make public)');
			// clear public attribute
			$.glue.backend({ method: 'glue.object_remove_attr', name: $(obj).attr('id'), attr: 'download-public' });
		} else if ($(this).hasClass('glue-menu-disabled')) {
			$(this).addClass('glue-menu-enabled');
			$(this).removeClass('glue-menu-disabled');
			//$(this).attr('title', 'this object is shown to everyone - click to make it private');
			$(this).text('😐 This object is shown publicly (click to make private)');
			// set public attribute

			$.glue.backend({ method: 'glue.update_object', name: $(obj).attr('id'), 'download-public': 'public' });
		}
	});
	$.glue.contextmenu.register('download', 'download-public', elem);
	
	// make sure we don't send to much over the wire for every save
	$.glue.object.register_alter_pre_save('download', function(obj, orig) {
		$(obj).children('.download-ext').remove();
	});
});
