var yo = require('yo-yo');
var landing = require('../landing');

var signupForm = yo`<div class="col s12 m7">
                        <div class="row">
                            <div class="signup-box">
                                <h1 class="sgn">Spirit Growth Network </h1>
                                <form class="signup-form">
                                    <h2> En Dios estuvo, están y estarán mis proyectos, planes, sueños y anhelos.
                                    </h2>
                                <div class="section">
                                    <a class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
                                    <a class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
                                </div>
                                <div class="divider"></div>
                                <div class="section signupformm">           
                                    <div class="input-field col s6">
                                        <input id="first_name" type="text" class="validate">
                                        <label for="first_name">Nombres</label>
                                    </div>
            
                                    <div class="input-field col s6">
                                        <input id="last_name" type="text" class="validate">
                                        <label for="last_name">Apellidos</label>
                                    </div>
            
                                    <div class="input-field col s12">
                                        <input id="username" type="text" class="validate">
                                        <label for="username">Nombre de Usuario</label>
                                    </div>
            
                                    <div class="input-field col s12">
                                        <input id="email" type="email" class="validate">
                                        <label for="email" data-error="¡Oh oh!, Email no válido" data-success="¡Email válido!">Correo electrónico</label>
                                    </div>
            
                                    <div class="input-field col s12">
                                        <input id="password" type="password" class="validate">
                                        <label for="password">Contraseña</label>
                                    </div>
            
                                    <button class="btn waves-effect waves-light btn-signup" type="submit">Regístrate</button>
                                </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="login-box">
                                ¿Tienes una cuenta en SGN?
                                <a href="/signin">Entra aquí.</a>
                            </div>
                        </div>
                    </div>`;
module.exports = landing(signupForm);