/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[0],{363:function(ha,ea,f){f.r(ea);f.d(ea,"ByteRangeRequest",function(){return ia});var ba=f(2),z=f(0);f.n(z);var fa=f(1),da=f(124);ha=f(78);var ca=f(205),y=f(60),x=f(56),w=f(204),e=f(140);f=f(318);var h=[],r=[],aa=window,ja=function(){return function(){this.kl=1}}(),n;(function(e){e[e.UNSENT=0]="UNSENT";e[e.DONE=4]="DONE"})(n||(n={}));var ia=function(){function f(e,f,h,r){var x=this;this.url=e;this.range=f;this.nf=h;this.withCredentials=
r;this.cY=n;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);aa.Uint8Array&&(this.request.responseType="arraybuffer");r&&(this.request.withCredentials=r);na.DISABLE_RANGE_HEADER||(Object(z.isUndefined)(f.stop)?this.request.setRequestHeader("Range","bytes="+f.start):this.request.setRequestHeader("Range",["bytes=",f.start,"-",f.stop-1].join("")));this.request.setRequestHeader("X-Requested-With","XMLHttpRequest");h&&Object.keys(h).forEach(function(e){x.request.setRequestHeader(e,
h[e])});this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=w.a.NOT_STARTED}f.prototype.start=function(e){var f=this,h=this.request;h.onreadystatechange=function(){if(f.aborted)return f.status=w.a.ABORTED,e({code:w.a.ABORTED});if(this.readyState===f.cY.DONE){f.Pz();var n=0===window.document.URL.indexOf("file:///");200===h.status||206===h.status||n&&0===h.status?(n=aa.TP(this),
f.ys(n,e)):(f.status=w.a.ERROR,e({code:f.status,status:f.status}))}};this.request.send(null);this.status=w.a.STARTED};f.prototype.ys=function(e,f){this.status=w.a.SUCCESS;if(f)return f(!1,e)};f.prototype.abort=function(){this.Pz();this.aborted=!0;this.request.abort()};f.prototype.Pz=function(){var n=Object(e.c)(this.url,this.range,r);-1!==n&&r.splice(n,1);if(0<h.length){n=h.shift();var w=new f(n.url,n.range,this.nf,this.withCredentials);n.request=w;r.push(n);w.start(Object(e.d)(n))}};f.prototype.extend=
function(e){var f=Object.assign({},this,e.prototype);f.constructor=e;return f};return f}(),na=function(f){function n(e,h,n,r,w){n=f.call(this,e,n,r)||this;n.ml={};n.sy=h;n.url=e;n.DISABLE_RANGE_HEADER=!1;n.Nv=ia;n.nK=3;n.nf=w||{};return n}Object(ba.c)(n,f);n.prototype.Wt=function(e,f,h){var n=-1===e.indexOf("?")?"?":"&";switch(h){case !1:case x.a.NEVER_CACHE:e=e+n+"_="+Object(z.uniqueId)();break;case !0:case x.a.CACHE:e=e+n+"_="+f.start+","+(Object(z.isUndefined)(f.stop)?"":f.stop)}return e};n.prototype.gO=
function(e,f,h,n){void 0===h&&(h={});return new this.Nv(e,f,h,n)};n.prototype.Z3=function(e,f,n,w,x){for(var aa=0;aa<h.length;aa++)if(Object(z.isEqual)(h[aa].range,f)&&Object(z.isEqual)(h[aa].url,e))return h[aa].og.push(w),h[aa].PA++,null;for(aa=0;aa<r.length;aa++)if(Object(z.isEqual)(r[aa].range,f)&&Object(z.isEqual)(r[aa].url,e))return r[aa].og.push(w),r[aa].PA++,null;n={url:e,range:f,sy:n,og:[w],PA:1};if(0===h.length&&r.length<this.nK)return r.push(n),n.request=this.gO(e,f,x,this.withCredentials),
n;h.push(n);return null};n.prototype.Qm=function(f,n,w){var x=this.Wt(f,n,this.sy);(f=this.Z3(x,n,this.sy,w,this.nf))&&f.request.start(Object(e.d)(f));return function(){var f=Object(e.c)(x,n,r);if(-1!==f){var w=--r[f].PA;0===w&&r[f].request&&r[f].request.abort()}else f=Object(e.c)(x,n,h),-1!==f&&(w=--h[f].PA,0===w&&h.splice(f,1))}};n.prototype.zP=function(){return{start:-da.a}};n.prototype.c7=function(){var e=-(da.a+da.e);return{start:e-da.d,end:e}};n.prototype.Er=function(e){var f=this;this.xy=!0;
var h=da.a;this.Qm(this.url,this.zP(),function(n,r,w){function x(){var h=f.Md.wP();f.Qm(f.url,h,function(n,r){if(n)return Object(fa.i)("Error loading central directory: "+n),e(n);r=Object(y.a)(r);if(r.length!==h.stop-h.start)return e("Invalid XOD file: Zip central directory data is wrong size! Should be "+(h.stop-h.start)+" but is "+r.length);f.Md.NS(r);f.BE=!0;f.xy=!1;return e(!1)})}if(n)return Object(fa.i)("Error loading end header: "+n),e(n,r,w);r=Object(y.a)(r);if(r.length!==h)return e("Invalid XOD file: Zip end header data is wrong size!");
try{f.Md=new ca.a(r)}catch(ya){return e(ya)}f.Md.w8?f.Qm(f.url,f.c7(),function(h,n){if(h)return Object(fa.i)("Error loading zip64 header: "+h),e(h);n=Object(y.a)(n);f.Md.O8(n);x()}):x()})};n.prototype.QP=function(e){e(Object.keys(this.Md.rm))};n.prototype.mI=function(e,f){var h=this;if(this.Md.VN(e)){var n=this.Md.Hz(e);if(n in this.ml){var r=this.th[e];r.Aq=this.ml[n];r.Aq.kl++;r.cancel=r.Aq.cancel}else{var w=this.Md.B5(e),x=this.Qm(this.url,w,function(r,x){r?(Object(fa.i)('Error loading part "'+
e+'": '+r),h.Qm(h.url,w,function(r,x){if(r)return f(r,e);h.RS(x,w,n,e,f)})):h.RS(x,w,n,e,f)}),aa=this.th[e];aa&&(aa.XU=!0,aa.cancel=function(){aa.Aq.kl--;0===aa.Aq.kl&&(x(),delete h.ml[n])},this.ml[n]=new ja(n),aa.Aq=this.ml[n],aa.Aq.cancel=aa.cancel)}}else delete this.th[e],f(Error('File not found: "'+e+'"'),e)};n.prototype.RS=function(e,f,h,n,r){if(e.length!==f.stop-f.start)r(Error("Part data is wrong size!"),n);else{do{if(!this.ml[h])return;n=this.ml[h].kl;for(var w=f.qp.length,x=0;x<w;++x){var aa=
f.qp[x];r(!1,aa.mp,e["string"===typeof e?"substring":"subarray"](aa.start,aa.stop),this.Md.PQ(aa.mp));aa.mp in this.th&&delete this.th[aa.mp]}}while(n!==this.ml[h].kl);delete this.ml[h]}};n.DISABLE_RANGE_HEADER=!1;n.nK=3;return n}(ha.a);(function(e){function f(f,h,n){var r=e.call(this)||this,w;for(w in f)r[w]=f[w];r.ria=f;r.startOffset=h;r.endOffset=n;r.gO=function(e,h,n,w){Object(z.isUndefined)(h.stop)?(h.start+=r.endOffset,h.stop=r.endOffset):(h.start+=r.startOffset,h.stop+=r.startOffset);e=r.Wt(r.url,
h,r.sy);return new f.Nv(e,h,n,w)};return r}Object(ba.c)(f,e);return f})(na);Object(f.a)(na);Object(f.b)(na);ea["default"]=na}}]);}).call(this || window)
