define(["l/jquery","l/mustache","c/tpl"],function(t,o,e){var i=function(o){var i={top:void 0,left:void 0,autoHide:void 0,title:"提示",frameTPL:e.dialogTPL,content:"",showClose:!0};return o=t.extend(i,o),this._opts=o,this._ready(),this._constructFrame(),YYMG._tp.dialog=this,this};return i.prototype._ready=function(){var t=YYMG._tp.dialog;t&&t.close(),this._dialogEl=document.createElement("div"),this._dialogEl.className="dialog"},i.prototype._constructFrame=function(){var e=this._opts,i=t(this._dialogEl),n=o.render(e.frameTPL,{title:e.title,content:e.content});i.html(n),t(document.body).append(i),this.resetPos(),this._footerEl=i.find(".dialog-footer");var s=this._closeEl=i.find(".close"),l=this;e.showClose?s.bind("click",function(){l.close()}):s.remove();var r=e.autoHide;r&&"number"==typeof r&&(this.autoHide=window.setTimeout(function(){l.close()},1e3*r))},i.prototype.setWidth=function(){return this},i.prototype.setContent=function(){return this},i.prototype.addButton=function(){var t=document.createElement("a");if(t.className="button",t.href="#nogo","function"==typeof callback){var o=this;t.bind("click",function(){callback.call(o)})}return this._footerEl.append(t),this},i.prototype.resetPos=function(){var o=t(this._dialogEl),e=o.css("width"),i=o.css("height"),n=t(window),s=this._opts.left||(n.width()-parseInt(e,10))/2,l=this._opts.top||n.scrollTop()+(n.height()-parseInt(i,10))/2;return o.css({top:l+"px",left:s+"px"}),this},i.prototype.close=function(){t(this._dialogEl).remove(),this.autoHide&&clearTimeout(this.autoHide),YYMG._tp.dialog=null},{Dialog:i}});