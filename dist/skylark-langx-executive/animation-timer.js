/**
 * skylark-langx-executive - The skylark executive library for javacript language extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define([],function(){"use strict";function n(n){this.callback=n,this.running=!1,this.id=-1}return n.prototype.start=function(){if(!this.running){this.running=!0;var n=this;!function i(){n.callback(),n.running&&(n.id=requestAnimationFrame(i))}()}},n.prototype.stop=function(){this.running=!1,cancelAnimationFrame(this.id)},n});
//# sourceMappingURL=sourcemaps/animation-timer.js.map
