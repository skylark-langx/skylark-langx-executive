/**
 * skylark-langx-executive - The skylark executive library for javacript language extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./WorkerTask"],function(t){"use strict";function s(t,s){this.size=s,this.file=t,this.workers=[],this.next=0,this.createWorkers(),this.tasks={}}return s.prototype.createWorkers=function(){for(var t=0;t<this.workers.length;t++)this.workers[t].terminate();var s=this;function e(t){var e=t.data.uuid;if(void 0===s.tasks[e])throw new Error("Unknown worker task "+e);s.tasks[e].callback(t.data.data),delete s.tasks[e]}this.workers=[],this.next=0;for(t=0;t<this.size;t++){var r=new Worker(this.file);r.onmessage=e,this.workers.push(r)}},s.prototype.runTask=function(s,e){var r=new t(s,e);this.tasks[r.uuid]=r,this.workers[this.next].postMessage({data:r.data,uuid:r.uuid}),this.next++,this.next>=this.workers.length&&(this.next=0)},s});
//# sourceMappingURL=sourcemaps/worker-pool.js.map
