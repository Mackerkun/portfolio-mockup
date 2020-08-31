$(document).ready(function () {
	$('.sidenav').sidenav();

	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		verticalCentered: false,
		navigation: true,
		dragAndMove: true,
		showActiveTooltip: true,
		anchors: ['section1', 'section2', 'section3', 'section4', 'section5']
	});

	AOS.init();
	
});