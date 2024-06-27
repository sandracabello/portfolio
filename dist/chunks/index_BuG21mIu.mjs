/* empty css                         */

function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clases Particulares</title>

    <link rel="stylesheet" href="css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/estilos.css">

    <link rel="shortcut icon" href="images/icon.png">

    <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">


</head>

<body>

    <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">CLASES PARTICULARES</a>
        <button class="navbar-toggler boton-movil" type="button" data-toggle="collapse" data-target="#menu"
            aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><img src="images/menu.svg" title="menú"></span>
        </button>
        <div class="collapse navbar-collapse" id="menu">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" data-id="contacto" href="#">Contacto <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" data-id="metodologia" href="#">Metodología</a>
                <a class="nav-item nav-link" data-id="precios" href="#">Precios</a>
            </div>
        </div>
    </nav>



    <header>
        <div class="jumbotron" id="contacto">
            <div class="content">         
            <h1 class="display-4 tituloJum">¡HOLA, soy Ana Martín!</h1>
            <p class="lead">Soy especialista en Matemáticas, controlo de todo, derivadas, funciones, trigonomietría e incluso conozco a la incoginta X. Si necesitas adquirir estos conocimientos, yo soy la persona adecuada para ayudarte a conseguirlos.</p>
            <p>¡Venga, animate!, utiliza este formulario para contactar contigo y si aún eres mas atrevid@ llámame y nos ponemos manos a la obra con las Matemáticas.</p>
            <form action="enviar.php" method="post">
                <div class="form-group mx-auto">
                    <div class="row">
                        <input type="text" class="form-control col col-11 col-md-2 m-3" placeholder="Nombre" required name="nombre">
                        <input type="tel" class="form-control col col-11 col-md-2 m-3" placeholder="Teléfono" required name="telefono">
                        <button type="submit" class="btn btn-primary col col-11 col-md-2 m-3" id="btn-enviar">Llámame</button>
                        <a class="m-4" href="tel:" role="button">Te llamo</a>
                    </div>                    
                </div>
            </form>
            <p class="redes-sociales">También estoy disponible en: 
                <a href="" target="_blank"><img src="images/twitter.svg"></a>
                <a href="" target="_blank"><img src="images/facebook.svg"></a>
                <a href="" target="_blank"><img src="images/instagram.svg"></a>
                <a href="" target="_blank"><img src="images/youtube.svg"></a>
            </p>
            </div>
        </div>
    </header>


    <div class="container">

        <section id="metodologia">

            <h2 class="titulo-section">Metodolía de trabajo</h2>

            <div class="row">
                <div class="col col-12 col-md-4 metodo">
                    <div class="head">
                        <img src="images/tomar-nota.svg" alt="Tomar notas">
                        <h4 class="titulo">Tomar notas</h4>
                    </div>
                    <div class="body">
                        <p class="info">En las clases se explica toda la teoría y se pone en práctica con una gran variadad de ejercicios.</p>
                    </div>
                </div>
                <div class="col col-12 col-md-4 metodo">
                    <div class="head">
                        <img src="images/estudiar.svg" alt="Estudiar">
                        <h4 class="titulo">Estudiar</h4>
                    </div>
                    <div class="body">
                        <p class="info">Todo lo el material trabajado en clase te lo puedes llevar a casa y seguir practicando.</p>
                    </div>
                </div>
                <div class="col col-12 col-md-4 metodo">
                    <div class="head">
                        <img src="images/aprobar.svg" alt="Aprobar">
                        <h4 class="titulo">Aprobar</h4>
                    </div>
                    <div class="body">
                        <p class="info">Si has asistido a clase, atendido y practicado, el exámen está más que aprobado.</p>
                    </div>
                </div>
            </div>
        </section>


        <section id="precios">
            <h2 class="titulo-section">Precios</h2>
            <div class="row">
                <div class="col col-12 col-md-4">
                    <div class="card suficiente">
                        <img src="images/bronce.svg" alt="Suficente">
                        <div class="card-body">
                            <h5 class="card-title">Suficiente</h5>
                            <p class="card-text">Eres una persona que solo desea aprobar.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">2 día a la semana de clase</li>
                            <li class="list-group-item">Acceso a teoría y práctica</li>
                            <li class="list-group-item"><br></li>
                        </ul>
                        <div class="card-footer">
                            <div class="dinero">4 €</div>
                        </div>
                    </div>
                </div>

                <div class="col col-12 col-md-4">
                    <div class="card notable">
                        <img src="images/plata.svg" alt="Notable">
                        <div class="card-body">
                            <h5 class="card-title">Notable</h5>
                            <p class="card-text">Eres una persona valiosas y lo sabes demostrar.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">3 días a la semana de clase</li>
                            <li class="list-group-item">Acceso a teoría y práctica</li>
                            <li class="list-group-item">Ejercicios extra para practicar en casa</li>
                        </ul>
                        <div class="card-footer">
                            <div class="dinero">8 €</div>
                        </div>
                    </div>
                </div>

                <div class="col col-12 col-md-4">
                    <div class="card sobresaliente">
                        <img src="images/oro.svg" alt="Sobresaliente">
                        <div class="card-body">
                            <h5 class="card-title">Sobresaliente</h5>
                            <p class="card-text">Eres una persona exelente y te mereces la excelencia.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">5 días a la semana de clase</li>
                            <li class="list-group-item">Acceso a teoría y práctica</li>
                            <li class="list-group-item">Ejercicios extra para practicar en casa</li>
                        </ul>
                        <div class="card-footer">
                            <div class="dinero">12 €</div>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    </div>


    <footer>
        <p>Copyright © 2020 - <a href="https://sandracabello.com" target="_blank">Sandra Cabello</a></p>
    </footer>


    <!-- Modal -->
    <div class="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="modalCenterTitle">Mensaje enviado</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
            <p>
                Mensaje enviado correctamente, no dejes de mirar la pantalla de tu teléfono porque te voy ha llamar.<br>
                ¡Juntos vamos ha conserguir un aprobado!
            </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>            
            </div>
        </div>
        </div>
    </div>


    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/funciones.js"></script>

</body>

</html>`
	}
render["astro:html"] = true;

export { render as default };
