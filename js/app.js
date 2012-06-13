$(document).ready( function () {
	$('#editor').redactor({ fullscreen: true });
	var data = window.location.hash.replace('#', '');
	window.setTimeout( setHTML, 300, data);
});

function setHTML( value ) {
	$("#editor").setCode( value );
}
function getHTML() {
	return $('#editor').getCode();
}
