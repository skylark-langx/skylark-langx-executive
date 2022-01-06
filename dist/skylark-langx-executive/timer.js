/**
 * skylark-langx-executive - The skylark executive library for javacript language extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define([],function(){"use strict";function i(i,t){this.callback=i,this.time=t,this.running=!1,this.id=-1}return i.prototype.start=function(){if(!this.running){this.running=!0;var i=this;!function t(){i.callback(),i.running&&(i.id=setTimeout(t,i.time))}()}},i.prototype.stop=function(){this.running=!1,clearTimeout(self.id)},i});
//# sourceMappingURL=sourcemaps/timer.js.map
