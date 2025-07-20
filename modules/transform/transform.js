/**
 *	modules/transform/transform.js
 *	Frontend code for general object properties
 *
 *	Copyright Gottfried Haider, Danja Vasiliev 2010.
 *	This source code is licensed under the GNU General Public License.
 *	See the file COPYING for more details.
 */

/*
function matrixToArray(m) {
	var c = m.substr(7);
	c = c.substr(0, c.length - 1);

	return c.split(', ');
}
*/

$(document).ready(function() {
	//
	// register menu items
	//
	var elem;
	elem = $('<div class="elemcustom">🥋 Flip object</div>');
	$(elem).bind('click', function(e) {
		var that = this;
		var obj = $(this).data('owner');
/*
		if ($(obj).css('-moz-transform') != '') {
			var o = $(obj).css('-moz-transform');
		} else { var o = $(obj).css('-webkit-transform'); }

		if (o == null || o.length < 6) {
			o = 'matrix(1, 0, 0, 1, 0, 0)';
		}
		var o = matrixToArray(o);
	
		$(obj).transform({reflectX: true, matrix: ''+o+''}, {forceMatrix: true});
*/
		if ($(obj).css('-moz-transform') != '') {
			var val = $(obj).css('-moz-transform');
			if (val == 'matrix(-1, 0, 0, -1, 0, 0)') {
				$(obj).css('-moz-transform', 'matrix(1, 0, 0, -1, 0, 0)');
			} else if (val == 'matrix(1, 0, 0, -1, 0, 0)') {
				$(obj).css('-moz-transform', 'matrix(-1, 0, 0, 1, 0, 0)');
			} else if (val == 'matrix(-1, 0, 0, 1, 0, 0)') {
				$(obj).css('-moz-transform', '');
			} else {
				$(obj).css('-moz-transform', 'matrix(-1, 0, 0, -1, 0, 0)');
			}
		}
		if ($(obj).css('-webkit-transform') != '') {
			var val = $(obj).css('-webkit-transform');
			if (val == 'matrix(-1, 0, 0, -1, 0, 0)') {
				$(obj).css('-webkit-transform', 'matrix(1, 0, 0, -1, 0, 0)');
			} else if (val == 'matrix(1, 0, 0, -1, 0, 0)') {
				$(obj).css('-webkit-transform', 'matrix(-1, 0, 0, 1, 0, 0)');
			} else if (val == 'matrix(-1, 0, 0, 1, 0, 0)') {
				$(obj).css('-webkit-transform', '');
			} else {
				$(obj).css('-webkit-transform', 'matrix(-1, 0, 0, -1, 0, 0)');
			}
		}
		$.glue.object.save(obj);
		});
	$.glue.contextmenu.register('object', 'object-transform-flip', elem, 5);

	elem = $('<div class="elemcustom">↩️ Rotate object</div>');
	$(elem).bind('click', function(e) {
		var obj = $(this).data('owner');
		console.log($(obj).css('transform'));
		// got value for 10 degrees rotate transform
		if ($(obj).css('transform') == 'matrix(0.984808, 0.173648, -0.173648, 0.984808, 0, 0)') {
			$(obj).css('transform', 'rotate(20deg)');
		// value for 20 degrees rotate transform
		} else if ($(obj).css('transform') == 'matrix(0.939693, 0.34202, -0.34202, 0.939693, 0, 0)') {
			$(obj).css('transform', 'rotate(30deg)');
		// value for 30 degrees rotate transform
		} else if ($(obj).css('transform') == 'matrix(0.866025, 0.5, -0.5, 0.866025, 0, 0)') {
			$(obj).css('transform', 'rotate(110deg)');
		// value for 110 degrees rotate transform
		} else if ($(obj).css('transform') == 'matrix(-0.34202, 0.939693, -0.939693, -0.34202, 0, 0)') {
			$(obj).css('transform', 'rotate(225deg)');
		// value for 225 degrees rotate transform
		} else if ($(obj).css('transform') == 'matrix(-0.707107, -0.707107, 0.707107, -0.707107, 0, 0)') {
			$(obj).css('transform', 'rotate(330deg)');
		// value for 330 degrees rotate transform
		} else if ($(obj).css('transform') == 'matrix(0.866025, -0.5, 0.5, 0.866025, 0, 0)') {
			$(obj).css('transform', 'rotate(340deg)');
		// value for 340 degrees rotate transform
		} else if ($(obj).css('transform') == 'matrix(0.939693, -0.34202, 0.34202, 0.939693, 0, 0)') {
			$(obj).css('transform', 'rotate(350deg)');
		// value for 350 degrees rotate transform
		} else if ($(obj).css('transform') == 'matrix(0.984808, -0.173648, 0.173648, 0.984808, 0, 0)') {
			$(obj).css('transform', 'none');
		} else {
			$(obj).css('transform', 'rotate(10deg)');
		}
		$.glue.object.save(obj);
	});
	$.glue.contextmenu.register('object', 'object-transform-rotate', elem, 6);
});
