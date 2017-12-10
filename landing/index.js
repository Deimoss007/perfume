var yo = require('yo-yo');

module.exports = function landing(box) {
    return yo`  <div class="container">
                    <div class="row">
                        <div class="col s10 push-s4">
                            <div class="row">
                                <div class="col s5 pull-s8">
                                    <div class="container">
                                        <iframe width="780" height="480" src="https://www.youtube.com/embed/dhzv1NDjIog" frameborder="0" allowfullscreen></iframe>
                                    </div>
                                    ${box}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
}

