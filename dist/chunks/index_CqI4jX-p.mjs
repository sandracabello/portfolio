/* empty css                         */

function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="public/images/icon.png">
    <title>Hamburguesería</title>

    <link href="https://fonts.googleapis.com/css?family=Fjalla+One&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    <link rel="stylesheet" href="public/css/bootstrap.min.css">
    <link rel="stylesheet" href="public/css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="public/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="public/css/styles.css">

</head>

<body>

    <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">Hamburguesería</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#header">Inicio <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#menu">Menu</a>
                <a class="nav-item nav-link" href="#nosotros">Nosotros</a>
                <a class="nav-item nav-link" href="#contacto">Contacto</a>
            </div>
        </div>
    </nav>
    <div class="container-fluid" id="header">
        <section class="cover">
            <div class="container">
                <div class="text-center">
                    <h1>Hamburguesería</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque itaque aspernatur eius eligendi minus est tempore ipsum sapiente cum et aut, molestiae dicta. Reiciendis quisquam dolore laudantium id et quam?</p>
                    <button class="btn bt-call-to-action">Llámanos</button>
                </div>
            </div>
        </section>
    </div>
    <div class="container">
        <section id="menu" class="text-center">
            <h2>Menú</h2>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="card">
                        <img src="public/images/default.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">PLATO 1</h5>
                            <div class="card-text">
                                <ul>
                                    <li>Ingrediente 1</li>
                                    <li>Ingrediente 2</li>
                                    <li>Ingrediente 3</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-footer"><i class="fas fa-coins"></i> 3,5€</div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="card">
                        <img src="public/images/default.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">PLATO 2</h5>
                            <div class="card-text">
                                <ul>
                                    <li>Ingrediente 1</li>
                                    <li>Ingrediente 2</li>
                                    <li>Ingrediente 3</li>
                                    <li>Ingrediente 4</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-footer"><i class="fas fa-coins"></i> 4,5€</div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card">
                        <img src="public/images/default.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">PLATO 3</h5>
                            <div class="card-text">
                                <ul>
                                    <li>Ingrediente 1</li>
                                    <li>Ingrediente 2</li>
                                    <li>Ingrediente 3</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-footer"><i class="fas fa-coins"></i> 6,5€</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div class="container-fluid" id="nosotros">
        <section class="cover text-center">            
            <div class="description">
                <h2>Quiénes somos</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque itaque aspernatur eius eligendi minus est tempore ipsum sapiente cum et aut, molestiae dicta. Reiciendis quisquam dolore laudantium id et quam?</p>
            </div>
        </section>
    </div>    
    <footer class="container-fluid" id="contacto">
    	<div class="row">
    		<div class="col-sm-12 col-md-6">
    			<h2>Contacto</h2>
    			<p><span class="fas fa-map-marker-alt"></span> Calle de la hamburgues 2 Ciudad 12345</p>
    			<p><span class="fas fa-phone"></span> <a href="tel:123456789">123-456-789</a></p>
    			<p><span class="fas fa-clock"></span> Lu-Jv 11:00-00:00, Vi-Do 15:00-00:00</p>
    			<p><span class="fas fa-envelope"></span> <a href="mailto:hola@hamburgues.co">hola@hamburgues.com</a></p>
    		</div>
    		<div class="col-sm-12 col-md-6">
    			<h2>Siguenos</h2>
    			<a href="" target="_blank"><span class="fab fa-facebook-f"></span></a>
    			<a href="" target="_blank"><span class="fab fa-instagram"></span></a>
    			<a href="" target="_blank"><span class="fab fa-tripadvisor"></span></a>
    			<a href="" target="_blank"><span class="fab fa-twitter"></span></a>
            </div>
            <div class="col col-12 copy">Copyright © 2018 - <a href="http://www.sandracabello.com" target="_blank">Sandra Cabello</a></div>
    	</div>    
    </footer>
    
    <script src="public/js/jquery-3.3.1.min.js"></script>
    <script src="public/js/bootstrap.min.js"></script>
    <script src="public/js/bootstrap.bundle.min.js"></script>
    <script src="public/js/jquery.waypoints.min.js"></script>
    <script src="public/js/function.js"></script>

</body>

</html>`
	}
render["astro:html"] = true;

export { render as default };
