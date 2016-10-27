$(document).ready(init);

function init() {
	$("p").click(changeText);
}

function changeText() {
  //$(this).text("This is the new text for Paragraph!");
  $("h1").text("This is the new title!");
  console.log($("h1").text());
}
