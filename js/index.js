$(document).ready(function () {
	$('.sidenav').sidenav();

	checkMobile();

	$('#fullpage').fullpage({
		//options here
		autoScrolling: true,
		scrollHorizontally: true,
		verticalCentered: false,
		navigation: true,
		slidesNavigation: true,
		dragAndMove: true,
		showActiveTooltip: true,
		anchors: ['section1', 'section2', 'section3', 'section4', 'section5']
	});

	AOS.init();

});

function checkMobile() {
	if ($(window).width() < 600) {
		// Mobile
		$('#projects-main').html(
			`
				<!-- For mobile -->
				<div class="slide container hide-on-med-and-up">
					<div class="row">
						<div class="col s12">
							<div class="card large hoverable">
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" data-src="assets/img/progetti/load-cell-calibration.jpg">
								</div>
								<div class="card-content">
									<span class="card-title activator white-text">Load Cell Calibration<i
											class="material-icons right">more_vert</i></span>
								</div>
								<div class="card-action">
									<a class="activator" style="cursor: pointer; color: #16a085;">Scopri di più</a>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Load Cell Calibration<i
											class="material-icons right">close</i></span>
									<p>Taratura di una cella di carico sfruttando LabVIEW e Arduino</p>
									<a class="waves-effect waves-light btn right activator"
										href="https://github.com/Mackerkun/Load_cell_calibration">Vai</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="slide container hide-on-med-and-up">
					<div class="row">
						<div class="col s12">
							<div class="card large hoverable">
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" data-src="assets/img/progetti/control-methods-project.jpg">
								</div>
								<div class="card-content">
									<span class="card-title activator white-text">360 Video Analysis<i
											class="material-icons right">more_vert</i></span>
								</div>
								<div class="card-action">
									<a class="activator" style="cursor: pointer; color: #16a085;">Scopri di più</a>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">360 Video Analysis<i
											class="material-icons right">close</i></span>
									<p>Creazione di una piattaforma web che permette la visione di video a 360° con successiva raccolta di
										informazioni come latitudine e longitudine e visualizzazione di grafici</p>
									<a class="waves-effect waves-light btn right activator"
										href="https://www.mackerkun.it/projects/controlmethods">Vai</a>
								</div>
							</div>
					</div>
					</div>
				</div>
				<div class="slide container hide-on-med-and-up">
					<div class="row">
						<div class="col s12">
							<div class="card large hoverable">
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" data-src="assets/img/progetti/mackerkun-logo.png">
								</div>
								<div class="card-content">
									<span class="card-title activator white-text">Blog<i
											class="material-icons right">more_vert</i></span>
								</div>
								<div class="card-action">
									<a class="activator" style="cursor: pointer; color: #16a085;">Scopri di più</a>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Blog<i class="material-icons right">close</i></span>
									<p>Blog contenente le principali notizie su Star Wars e qualche curiosità su Game of Thrones</p>
									<a class="waves-effect waves-light btn right activator" href="https://www.mackerkun.it/blog">Vai</a>
								</div>
							</div>
					</div>
					</div>
				</div>
				<div class="slide container hide-on-med-and-up">
					<div class="row">
						<div class="col s12">
							<div class="card large hoverable">
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" data-src="assets/img/progetti/cimeli-di-attimi.jpg">
								</div>
								<div class="card-content">
									<span class="card-title activator white-text">Cimeli di attimi<i
											class="material-icons right">more_vert</i></span>
								</div>
								<div class="card-action">
									<a class="activator" style="cursor: pointer; color: #16a085;">Scopri di più</a>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Cimeli di attimi<i
											class="material-icons right">close</i></span>
									<p>Ho una sola, grande paura: dimenticare. La storia di come ho conosciuto la compagna della mia vita.
									</p>
									<a class="waves-effect waves-light btn right activator"
										href="https://www.mackerkun.it/blog/cimeli-di-attimi">Vai</a>
								</div>
							</div>
					</div>
					</div>
				</div>
				<div class="slide container hide-on-med-and-up">
					<div class="row">
						<div class="col s12">
							<div class="card large hoverable">
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" data-src="assets/img/progetti/selfieoftheday.jpg">
								</div>
								<div class="card-content">
									<span class="card-title activator white-text">SelfieOfTheDay<i
											class="material-icons right">more_vert</i></span>
								</div>
								<div class="card-action">
									<a class="activator" style="cursor: pointer; color: #16a085;">Scopri di più</a>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">SelfieOfTheDay<i
											class="material-icons right">close</i></span>
									<p>2015. Un selfie al giorno, con descrizione, per 365 giorni, su ciò che ha reso la giornata
										"felice".</p>
									<a class="waves-effect waves-light btn right activator"
										href="https://www.facebook.com/Mackerkun/media_set?set=a.821948347865904&amp;type=3">Vai</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			`
		)
	} else {
		// Desktop
		$('#projects-main').html(
			`
				<div class="slide hide-on-small-only">
					<div class="container">
						<div class="row">
							<div class="col s12 m4">
								<div class="card large hoverable">
									<div class="card-image waves-effect waves-block waves-light">
										<img class="activator" data-src="assets/img/progetti/load-cell-calibration.jpg">
									</div>
									<div class="card-content">
										<span class="card-title activator white-text">Load Cell Calibration<i
												class="material-icons right">more_vert</i></span>
									</div>
									<div class="card-action">
										<a class="activator" style="cursor: pointer; color: #16a085;">Scopri di più</a>
									</div>
									<div class="card-reveal">
										<span class="card-title grey-text text-darken-4">Load Cell Calibration<i
												class="material-icons right">close</i></span>
										<p>Taratura di una cella di carico sfruttando LabVIEW e Arduino</p>
										<a class="waves-effect waves-light btn right activator"
											href="https://github.com/Mackerkun/Load_cell_calibration">Vai</a>
									</div>
								</div>
							</div>
							<div class="col s12 m4">
								<div class="card large hoverable">
									<div class="card-image waves-effect waves-block waves-light">
										<img class="activator" data-src="assets/img/progetti/control-methods-project.jpg">
									</div>
									<div class="card-content">
										<span class="card-title activator white-text">360 Video Analysis<i
												class="material-icons right">more_vert</i></span>
									</div>
									<div class="card-action">
										<a class="activator" style="cursor: pointer; color: #16a085;">Scopri di più</a>
									</div>
									<div class="card-reveal">
										<span class="card-title grey-text text-darken-4">360 Video Analysis<i
												class="material-icons right">close</i></span>
										<p>Creazione di una piattaforma web che permette la visione di video a 360° con successiva raccolta di
											informazioni come latitudine e longitudine e visualizzazione di grafici</p>
										<a class="waves-effect waves-light btn right activator"
											href="https://www.mackerkun.it/projects/controlmethods">Vai</a>
									</div>
								</div>
							</div>
							<div class="col s12 m4">
								<div class="card large hoverable">
									<div class="card-image waves-effect waves-block waves-light">
										<img class="activator" data-src="assets/img/progetti/mackerkun-logo.png">
									</div>
									<div class="card-content">
										<span class="card-title activator white-text">Blog<i
												class="material-icons right">more_vert</i></span>
									</div>
									<div class="card-action">
										<a class="activator" style="cursor: pointer; color: #16a085;">Scopri di più</a>
									</div>
									<div class="card-reveal">
										<span class="card-title grey-text text-darken-4">Blog<i class="material-icons right">close</i></span>
										<p>Blog contenente le principali notizie su Star Wars e qualche curiosità su Game of Thrones</p>
										<a class="waves-effect waves-light btn right activator" href="https://www.mackerkun.it/blog">Vai</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="slide hide-on-small-only">
					<div class="container">
						<div class="row">
							<div class="col s12 m4">
								<div class="card large hoverable">
									<div class="card-image waves-effect waves-block waves-light">
										<img class="activator" data-src="assets/img/progetti/cimeli-di-attimi.jpg">
									</div>
									<div class="card-content">
										<span class="card-title activator white-text">Cimeli di attimi<i
												class="material-icons right">more_vert</i></span>
									</div>
									<div class="card-action">
										<a class="activator" style="cursor: pointer; color: #16a085;">Scopri di più</a>
									</div>
									<div class="card-reveal">
										<span class="card-title grey-text text-darken-4">Cimeli di attimi<i
												class="material-icons right">close</i></span>
										<p>Ho una sola, grande paura: dimenticare. La storia di come ho conosciuto la compagna della mia vita.
										</p>
										<a class="waves-effect waves-light btn right activator"
											href="https://www.mackerkun.it/blog/cimeli-di-attimi">Vai</a>
									</div>
								</div>
							</div>
							<div class="col s12 m4">
								<div class="card large hoverable">
									<div class="card-image waves-effect waves-block waves-light">
										<img class="activator" data-src="assets/img/progetti/selfieoftheday.jpg">
									</div>
									<div class="card-content">
										<span class="card-title activator white-text">SelfieOfTheDay<i
												class="material-icons right">more_vert</i></span>
									</div>
									<div class="card-action">
										<a class="activator" style="cursor: pointer; color: #16a085;">Scopri di più</a>
									</div>
									<div class="card-reveal">
										<span class="card-title grey-text text-darken-4">SelfieOfTheDay<i
												class="material-icons right">close</i></span>
										<p>2015. Un selfie al giorno, con descrizione, per 365 giorni, su ciò che ha reso la giornata
											"felice".</p>
										<a class="waves-effect waves-light btn right activator"
											href="https://www.facebook.com/Mackerkun/media_set?set=a.821948347865904&amp;type=3">Vai</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`
		)
	}
}