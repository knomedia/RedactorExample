$(document).ready( function () {
	$('#editor').redactor({ fullscreen: true });
});

function setHTML( value ) {
	$("#editor").setCode( value );
}
function getHTML() {
	return $('#editor').getCode();
}
