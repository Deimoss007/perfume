var yo = require('yo-yo');
var landing = require('../landing');

var signinForm = yo`<div class="col s12 m7">
                        <div class="row">
                            <div class="signup-box">
                                <h1 class="sgn">Spirit Growth Network </h1>
                                <form class="signup-form">
                                <div class="section">
                                    <a class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
                                    <a class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
                                </div>
                                <div class="divider"></div>
                                <div class="section signupformm">           
                                    <div class="input-field col s12">
                                        <input id="username" type="text" class="validate">
                                        <label for="username">Nombre de Usuario</label>
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
                                ¿No tienes una cuenta?
                                <a href="/signup">Regístrate aquí.</a>
                            </div>
                        </div>
                    </div>`;
module.exports = landing(signinForm);