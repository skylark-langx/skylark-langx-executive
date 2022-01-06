/**
 * skylark-langx-executive - The skylark executive library for javacript language extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,r){var t=r.define,require=r.require,n="function"==typeof t&&t.amd,o=!n&&"undefined"!=typeof exports;if(!n&&!t){var i={};t=r.define=function(e,r,t){"function"==typeof t?(i[e]={factory:t,deps:r.map(function(r){return function(e,r){if("."!==e[0])return e;var t=r.split("/"),n=e.split("/");t.pop();for(var o=0;o<n.length;o++)"."!=n[o]&&(".."==n[o]?t.pop():t.push(n[o]));return t.join("/")}(r,e)}),resolved:!1,exports:null},require(e)):i[e]={factory:null,resolved:!0,exports:t}},require=r.require=function(e){if(!i.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var module=i[e];if(!module.resolved){var t=[];module.deps.forEach(function(e){t.push(require(e))}),module.exports=module.factory.apply(r,t)||null,module.resolved=!0}return module.exports}}if(!t)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,require){e("skylark-langx-executive/executive",["skylark-langx-ns"],function(e){return e.attach("langx.executive")}),e("skylark-langx-executive/process",["./executive"],function(e){var r,t,n={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{t="function"==typeof clearTimeout?clearTimeout:i}catch(e){t=i}}();var c,s=[],a=!1,l=-1;function f(){a&&c&&(a=!1,c.length?s=c.concat(s):l=-1,s.length&&p())}function p(){if(!a){var e=u(f);a=!0;for(var r=s.length;r;){for(c=s,s=[];++l<r;)c&&c[l].run();l=-1,r=s.length}c=null,a=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===i||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(r){try{return t.call(null,e)}catch(r){return t.call(this,e)}}}(e)}}function h(e,r){this.fun=e,this.array=r}function d(){}return n.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];s.push(new h(e,r)),1!==s.length||a||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0},e.process=n}),e("skylark-langx-executive/main",["./executive","./process"],function(e){return e}),e("skylark-langx-executive",["skylark-langx-executive/main"],function(e){return e})}(t),!n){var u=require("skylark-langx-ns");o?module.exports=u:r.skylarkjs=u}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-langx-executive.js.map
