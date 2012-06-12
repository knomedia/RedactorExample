$(document).ready( function () {
	$('#editor').redactor();
});

function setHTML( value ) {
	$("#editor").setCode( value );
}
function getHTML() {
	return $('#editor').getCode();
}
