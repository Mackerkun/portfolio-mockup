$(document).ready(function () {
	$('.sidenav').sidenav({
		onOpenEnd: function() {
			$('.sidenav .navbar-item').on('click', function() {
				M.Sidenav.getInstance($('.sidenav')).close();
			})
		}
	});

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
		// Projects
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
									<a class="activator" style="cursor: pointer; color: white;">Scopri di più</a>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Load Cell Calibration<i
											class="material-icons right">close</i></span>
									<p>Taratura di una cella di carico sfruttando LabVIEW e Arduino</p>
									<a class="waves-effect waves-light new-btn right activator"
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
									<a class="activator" style="cursor: pointer; color: white;">Scopri di più</a>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">360 Video Analysis<i
											class="material-icons right">close</i></span>
									<p>Creazione di una piattaforma web che permette la visione di video a 360° con successiva raccolta di
										informazioni come latitudine e longitudine e visualizzazione di grafici</p>
									<a class="waves-effect waves-light new-btn right activator"
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
									<a class="activator" style="cursor: pointer; color: white;">Scopri di più</a>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Blog<i class="material-icons right">close</i></span>
									<p>Blog contenente le principali notizie su Star Wars e qualche curiosità su Game of Thrones</p>
									<a class="waves-effect waves-light new-btn right activator" href="https://www.mackerkun.it/blog">Vai</a>
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
									<a class="activator" style="cursor: pointer; color: white;">Scopri di più</a>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Cimeli di attimi<i
											class="material-icons right">close</i></span>
									<p>Ho una sola, grande paura: dimenticare. La storia di come ho conosciuto la compagna della mia vita.
									</p>
									<a class="waves-effect waves-light new-btn right activator"
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
									<a class="activator" style="cursor: pointer; color: white;">Scopri di più</a>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">SelfieOfTheDay<i
											class="material-icons right">close</i></span>
									<p>2015. Un selfie al giorno, con descrizione, per 365 giorni, su ciò che ha reso la giornata
										"felice".</p>
									<a class="waves-effect waves-light new-btn right activator"
										href="https://www.facebook.com/Mackerkun/media_set?set=a.821948347865904&amp;type=3">Vai</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			`
		);
		// Contacts
		$('#section-5').html(
			`
				<h3 class="subtitle center">Contatti</h3>
				<div class="slide">
					<div class="container">
						<div class="row">
							<div class="col s12">
								<a href="tel:3930110010">
									<div class="card small hoverable" style="background-color: transparent;">
										<div class="card-content white-text center">
											<i class="material-icons small-medium">phone</i>
											<span class="card-title">Telefono</span>
											<p>+39 393 011 0010</p>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="slide">
					<div class="container">
						<div class="row">
							<div class="col s12">
								<a href="mailto:fiore.marco@outlook.it">
									<div class="card small hoverable" style="background-color: transparent;">
										<div class="card-content white-text center">
											<i class="material-icons small-medium">mail</i>
											<span class="card-title">E-mail</span>
											<p>fiore.marco@outlook.it</p>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="slide">
					<div class="container">
						<div class="row">
							<div class="col s12">
								<a href="https://t.me/mackerkun" target="_blank">
									<div class="card small hoverable" style="background-color: transparent;">
										<div class="card-content white-text center">
											<img src="assets/img/social/iconmonstr-telegram.png" alt="Telegram" height="33px" class="small-medium">
											<span class="card-title">Telegram</span>
											<p>Contattami su Telegram, ti risponderò quanto prima!</p>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="slide">
					<div class="container">
						<div class="row">
							<div class="col s12 m6">
								<div class="card small hoverable" style="background-color: transparent;">
									<div class="card-content white-text center">
										<i class="material-icons small-medium">query_builder</i>
										<span class="card-title">Orari di lavoro</span>
										<p>Dal lunedì al venerdì</p>
										<p>Dalle 17 alle 20</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="slide">
					<div class="container">
						<div class="row">
							<div class="col s12">
								<div class="card large hoverable" style="background-color: transparent;">
									<div class="card-content white-text center">
										<i class="material-icons small-medium" style="margin-bottom: 5%;">format_quote</i>
										<span class="card-title" style="margin-bottom: 5% !important;">Form diretto</span>
										<div class="row">
											<form class="col s12" id="form-contact-me">
												<div class="row">
													<div class="input-field col s6">
														<input id="form_first_name" type="text" class="validate white-text">
														<label for="form_first_name">Nome</label>
													</div>
													<div class="input-field col s6">
														<input id="form_email" type="text" class="validate white-text">
														<label for="form_email">Indirizzo mail</label>
													</div>
													<div class="input-field col s12">
														<input id="form_object" type="text" class="validate white-text">
														<label for="form_object">Oggetto</label>
													</div>
													<div class="input-field col s12">
														<input id="form_message" type="text" class="validate white-text">
														<label for="form_message">Messaggio</label>
													</div>
												</div>
												<button type="submit" id="form-button">Invia</button>
											</form>
										</div>	
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`
		);

		$('#form-contact-me').submit(function() {
			var form_first_name = this.form_first_name.value;
			var form_email = this.form_email.value;
			var form_object = this.form_object.value;
			var form_message = this.form_message.value;

			sendTelegramMessage(form_first_name, form_email, form_object, form_message);
		})
	} else {
		// Desktop
		// Projects
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
										<a class="activator" style="cursor: pointer; color: white;">Scopri di più</a>
									</div>
									<div class="card-reveal">
										<span class="card-title grey-text text-darken-4">Load Cell Calibration<i
												class="material-icons right">close</i></span>
										<p>Taratura di una cella di carico sfruttando LabVIEW e Arduino</p>
										<a class="waves-effect waves-light new-btn right activator"
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
										<a class="activator" style="cursor: pointer; color: white;">Scopri di più</a>
									</div>
									<div class="card-reveal">
										<span class="card-title grey-text text-darken-4">360 Video Analysis<i
												class="material-icons right">close</i></span>
										<p>Creazione di una piattaforma web che permette la visione di video a 360° con successiva raccolta di
											informazioni come latitudine e longitudine e visualizzazione di grafici</p>
										<a class="waves-effect waves-light new-btn right activator"
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
										<a class="activator" style="cursor: pointer; color: white;">Scopri di più</a>
									</div>
									<div class="card-reveal">
										<span class="card-title grey-text text-darken-4">Blog<i class="material-icons right">close</i></span>
										<p>Blog contenente le principali notizie su Star Wars e qualche curiosità su Game of Thrones</p>
										<a class="waves-effect waves-light new-btn right activator" href="https://www.mackerkun.it/blog">Vai</a>
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
										<a class="activator" style="cursor: pointer; color: white;">Scopri di più</a>
									</div>
									<div class="card-reveal">
										<span class="card-title grey-text text-darken-4">Cimeli di attimi<i
												class="material-icons right">close</i></span>
										<p>Ho una sola, grande paura: dimenticare. La storia di come ho conosciuto la compagna della mia vita.
										</p>
										<a class="waves-effect waves-light new-btn right activator"
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
										<a class="activator" style="cursor: pointer; color: white;">Scopri di più</a>
									</div>
									<div class="card-reveal">
										<span class="card-title grey-text text-darken-4">SelfieOfTheDay<i
												class="material-icons right">close</i></span>
										<p>2015. Un selfie al giorno, con descrizione, per 365 giorni, su ciò che ha reso la giornata
											"felice".</p>
										<a class="waves-effect waves-light new-btn right activator"
											href="https://www.facebook.com/Mackerkun/media_set?set=a.821948347865904&amp;type=3">Vai</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`
		);
		// Contacts
		$('#section-5').html(
			`
				<h3 class="subtitle center">Contatti</h3>
				<div class="slide">
					<div class="container">
						<div class="row">
							<div class="col s12 m6">
								<a href="tel:3930110010">
									<div class="card small hoverable" style="background-color: transparent;">
										<div class="card-content white-text center">
											<i class="material-icons small-medium">phone</i>
											<span class="card-title">Telefono</span>
											<p>+39 393 011 0010</p>
										</div>
									</div>
								</a>
							</div>
							<div class="col s12 m6">
								<a href="mailto:fiore.marco@outlook.it">
									<div class="card small hoverable" style="background-color: transparent;">
										<div class="card-content white-text center">
											<i class="material-icons small-medium">mail</i>
											<span class="card-title">E-mail</span>
											<p>fiore.marco@outlook.it</p>
										</div>
									</div>
								</a>
							</div>
							<div class="col s12 m6">
								<a href="https://t.me/mackerkun" target="_blank">
									<div class="card small hoverable" style="background-color: transparent;">
										<div class="card-content white-text center">
											<img src="assets/img/social/iconmonstr-telegram.png" alt="Telegram" height="33px" class="small-medium">
											<span class="card-title">Telegram</span>
											<p>Contattami su Telegram, ti risponderò quanto prima!</p>
										</div>
									</div>
								</a>
							</div>
							<div class="col s12 m6">
								<div class="card small hoverable" style="background-color: transparent;">
									<div class="card-content white-text center">
										<i class="material-icons small-medium">query_builder</i>
										<span class="card-title">Orari di lavoro</span>
										<p>Dal lunedì al venerdì</p>
										<p>Dalle 17 alle 20</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="slide">
					<div class="container">
						<div class="row">
							<div class="col s12">
								<div class="card hoverable" style="background-color: transparent;">
									<div class="card-content white-text center">
										<i class="material-icons small-medium" style="margin-bottom: 5%;">format_quote</i>
										<span class="card-title" style="margin-bottom: 5% !important;">Form diretto</span>
										<div class="row">
											<form class="col s12" id="form-contact-me">
												<div class="row">
													<div class="input-field col s6">
														<input id="form_first_name" type="text" class="validate white-text">
														<label for="form_first_name">Nome</label>
													</div>
													<div class="input-field col s6">
														<input id="form_email" type="text" class="validate white-text">
														<label for="form_email">Indirizzo mail</label>
													</div>
													<div class="input-field col s12">
														<input id="form_object" type="text" class="validate white-text">
														<label for="form_object">Oggetto</label>
													</div>
													<div class="input-field col s12">
														<input id="form_message" type="text" class="validate white-text">
														<label for="form_message">Messaggio</label>
													</div>
												</div>
												<button type="submit" id="form-button">Invia</button>
											</form>
										</div>	
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`
		);

		$('#form-contact-me').submit(function() {
			var form_first_name = this.form_first_name.value;
			var form_email = this.form_email.value;
			var form_object = this.form_object.value;
			var form_message = this.form_message.value;

			sendTelegramMessage(form_first_name, form_email, form_object, form_message);
		})
	}
}

function sendTelegramMessage(par_name, par_email, par_object, par_message) {
	var telegram_bot_id = '1371710247:AAENJc5OjAajGQs3n2NLSlDM8r1qgeMF3F8';
	var chat_id = ['null', '184819809'];
	var message = `
			Nuovo messaggio da 
			${par_name}, indirizzo mail ${par_email}.

			Oggetto del messaggio: 
			${par_object}

			Corpo del messaggio: 
			${par_message}
	`;
	chat_id.forEach(function(elem) {
			var settings = {
					"async": true,
					"crossDomain": true,
					"url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
					"method": "POST",
					"headers": {
						"Content-Type": "application/json",
						"cache-control": "no-cache"
					},
					"data": JSON.stringify({
						"chat_id": elem,
						"text": message
					})
				}
				
				$.ajax(settings).done(function (response) {
					console.log(response);
					M.toast({ html: 'Messaggio inviato' });
				});     
	})
}