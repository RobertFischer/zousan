!function(t){"use strict";function e(t){if(this.state=r,this.clients=[],t){var e=this;t(function(t){e.resolve(t)},function(t){e.reject(t)})}}function n(t,e){if("function"==typeof t.y)try{var n=t.y.call(void 0,e);t.p.resolve(n)}catch(i){t.p.reject(i)}else t.p.resolve(e)}function i(t,e){if("function"==typeof t.n)try{var n=t.n.call(void 0,e);t.p.resolve(n)}catch(i){t.p.reject(i)}else t.p.reject(e)}var o=function(){function t(){for(;e.length-n;)e[n](),n++,n>1024&&(e.splice(0,n),n=0)}var e=[],n=0,i=function(){if("undefined"!=typeof MutationObserver){var e=document.createElement("div"),n=new MutationObserver(t);return n.observe(e,{attributes:!0}),function(){e.setAttribute("a",0)}}return"undefined"!=typeof setImmediate?function(){setImmediate(t)}:function(){setTimeout(t,0)}}();return function(t){e.push(t),e.length-n==1&&i()}}(),r="pending",s="fulfilled",c="rejected";e.prototype={resolve:function(t){if(this.state===r){if(t===this)return this.reject(new TypeError("Attempt to resolve promise with self"));if(t&&("function"==typeof t||"object"==typeof t))try{var e=!0,i=t.then;if("function"==typeof i){var c=this;return void i.call(t,function(t){e&&(e=!1,c.resolve(t))},function(t){e&&(e=!1,c.reject(t))})}}catch(u){return void(e&&this.reject(u))}this.state=s,this.argReason=t;var f=this.clients;o(function(){for(var e=0,i=f.length;i>e;e++)n(f[e],t)})}},reject:function(t){if(this.state===r){this.state=c,this.argReason=t;var n=this.clients;o(function(){0!==n.length||e.suppressUncaughtRejectionError||console.log("You upset Zousan. Please catch rejections: ",t),n.forEach(function(e){i(e,t)})})}},then:function(t,c){var u=new e,f={y:t,n:c,p:u};if(this.state===r)this.clients.push(f);else{var a=this.state,l=this.argReason;o(function(){a===s?n(f,l):i(f,l)})}return u},"catch":function(t){this.then(null,t)}},e.all=function(t){function n(e,n){e.then(function(e){i[n]=e,o++,o==t.length&&r.resolve(i)},function(t){r.reject(t)})}for(var i=[],o=0,r=new e,s=0;s<t.length;s++)n(t[s],s);return r},"undefined"!=typeof module&&module.exports&&(module.exports=e),t.Zousan=e,t.soon=o}("undefined"!=typeof global?global:this);