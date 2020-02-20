(function(g){var window=this;var Y4=function(a,b,c){var d=b.wa();g.M(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.pc(c?c:"mqdefault.jpg");var f=b instanceof g.vC&&b.lengthSeconds?g.cN(b.lengthSeconds):null,k=!!e;e=k&&"RD"==(new g.uE(e.substr(0,2),e.substr(2))).type;var l=b instanceof g.vC?b.ua:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:b.author,aria_label:b.nj||g.QN("Watch $TITLE",{TITLE:b.title}),duration:f,url:b.hi(),is_live:l,is_list:k,
is_mix:e,background:c?"background-image: url("+c+")":""};b instanceof g.wE&&(d.playlist_length=b.getLength());a.update(d)},Z4=function(a,b){g.T.call(this,{F:"div",
Y:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.player=a;this.created=!1},$4=function(a){g.T.call(this,{F:"div",
Y:["ytp-upnext","ytp-player-content"],O:{"aria-label":"{{aria_label}}"},L:[{F:"div",I:"ytp-cued-thumbnail-overlay-image",O:{style:"{{background}}"}},{F:"span",I:"ytp-upnext-top",L:[{F:"span",I:"ytp-upnext-header",W:"Up Next"},{F:"span",I:"ytp-upnext-title",W:"{{title}}"},{F:"span",I:"ytp-upnext-author",W:"{{author}}"}]},{F:"a",I:"ytp-upnext-autoplay-icon",O:{role:"button",href:"{{url}}","aria-label":"Play next video"},L:[{F:"svg",O:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},L:[{F:"circle",
I:"ytp-svg-autoplay-circle",O:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{F:"circle",I:"ytp-svg-autoplay-ring",O:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{F:"path",I:"ytp-svg-fill",O:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{F:"span",I:"ytp-upnext-bottom",L:[{F:"span",I:"ytp-upnext-cancel"},{F:"span",I:"ytp-upnext-paused",W:"Autoplay is paused"}]}]});
this.D=null;var b=this.u["ytp-upnext-cancel"];this.D=new g.T({F:"button",Y:["ytp-upnext-cancel-button","ytp-button"],O:{tabindex:"0","aria-label":"Cancel autoplay"},W:"Cancel"});g.B(this,this.D);this.D.ha("click",this.nJ,this);this.D.o(b);this.w=a;this.N=this.u["ytp-svg-autoplay-ring"];this.H=this.G=this.B=this.C=null;this.J=new g.J(this.Ql,5E3,this);g.B(this,this.J);this.K=0;this.M(this.u["ytp-upnext-autoplay-icon"],"click",this.WK);this.Ny();this.M(a,"autonavvisibility",this.Ny);this.M(a,"mdxnowautoplaying",
this.oK);this.M(a,"mdxautoplaycanceled",this.pK);this.M(a,"mdxautoplayupnext",this.iB);3==this.w.getPresentingPlayerType()&&(a=(a=g.kL(g.dL(this.w)))?a.LD():null)&&this.iB(a)},a5=function(a,b){if(!a.B){g.Do("a11y-announce","Up Next "+a.C.title);
a.K=(0,g.Sq)();a.B=new g.J((0,g.x)(a.To,a,b),25);a.To(b);var c=b||g.V(a.w.P().experiments,"autoplay_time")||1E4;a.w.ma("onAutonavCoundownStarted",c)}g.hn(a.element,"ytp-upnext-autoplay-paused")},c5=function(a){b5(a);
a.K=(0,g.Sq)();a.To();g.L(a.element,"ytp-upnext-autoplay-paused")},b5=function(a){a.B&&(a.B.dispose(),a.B=null)},d5=function(a,b){b=void 0===b?!1:b;
if(g.U(a.w.P().experiments,"autonav_notifications")&&b&&window.Notification&&document.hasFocus){var c=Notification.permission;"default"==c?Notification.requestPermission():"granted"!=c||document.hasFocus()||(c=a.C.wa(),a.Ql(),a.G=new Notification("Up Next",{body:c.title,icon:c.pc()}),a.H=a.M(a.G,"click",a.NK),a.J.start())}b5(a);a.w.nextVideo(!1,b)},e5=function(a){Z4.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.w=new g.T({F:"div",I:"ytp-subscribe-card",L:[{F:"img",I:"ytp-author-image",O:{src:b.Bd}},{F:"div",I:"ytp-subscribe-card-right",L:[{F:"div",I:"ytp-author-name",W:b.author},{F:"div",I:"html5-subscribe-button-container"}]}]});g.B(this,this.w);this.w.o(this.element);this.B=new g.AR("Subscribe",null,"Unsubscribe",null,!0,!1,b.Vf,b.subscribed,"trailer-endscreen",null,null,a);g.B(this,this.B);this.B.o(this.w.u["html5-subscribe-button-container"]);this.hide()},f5=function(a){var b=
a.P(),c=g.Rs||g.nh?{style:"will-change: opacity"}:void 0,d=b.u,e=["ytp-videowall-still"];
b.o&&e.push("ytp-videowall-show-text");g.T.call(this,{F:"a",Y:e,O:{href:"{{url}}",target:d?b.w:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},L:[{F:"div",I:"ytp-videowall-still-image",O:{style:"{{background}}"}},{F:"span",I:"ytp-videowall-still-info",L:[{F:"span",I:"ytp-videowall-still-info-bg",L:[{F:"span",I:"ytp-videowall-still-info-content",O:c,L:[{F:"span",I:"ytp-videowall-still-info-title",W:"{{title}}"},{F:"span",I:"ytp-videowall-still-info-author",
W:"{{author_and_views}}"},{F:"span",I:"ytp-videowall-still-info-live",W:"Live"},{F:"span",I:"ytp-videowall-still-info-duration",W:"{{duration}}"}]}]}]},{F:"span",Y:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],L:[{F:"span",I:"ytp-videowall-still-listlabel-icon"},"Playlist",{F:"span",I:"ytp-videowall-still-listlabel-length",L:[" (",{F:"span",W:"{{playlist_length}}"},")"]}]},{F:"span",Y:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],L:[{F:"span",I:"ytp-videowall-still-listlabel-mix-icon"},
"Mix",{F:"span",I:"ytp-videowall-still-listlabel-length",W:" (50+)"}]}]});this.D=d;this.w=a;this.B=null;this.C=new g.R(this);g.B(this,this.C);this.ha("click",this.H);this.ha("keypress",this.J);this.C.M(a,"videodatachange",this.G);g.EL(a,this.element,this);this.G()},Gpa=function(a){var b=a.B.wa().videoId,c=a.B.getPlaylistId();
(g.JU(a.w.app,b,a.B.Gb,c,void 0,void 0)||a.w.fa("web_player_endscreen_double_log_fix_killswitch"))&&g.GL(a.w,a.element)},g5=function(a){Z4.call(this,a,"videowall-endscreen");
this.H=a;this.G=0;this.B=[];this.J=this.T=this.D=null;this.K=this.X=!1;this.V=null;this.C=new g.R(this);g.B(this,this.C);this.N=new g.J(g.Oa(g.L,this.element,"ytp-show-tiles"),0);g.B(this,this.N);var b=new g.T({F:"button",Y:["ytp-button","ytp-endscreen-previous"],O:{"aria-label":"Previous"},L:[g.kN()]});g.B(this,b);b.o(this.element);b.ha("click",this.vG,this);this.S=new g.uu({F:"div",I:"ytp-endscreen-content"});g.B(this,this.S);this.S.o(this.element);b=new g.T({F:"button",Y:["ytp-button","ytp-endscreen-next"],
O:{"aria-label":"Next"},L:[g.lN()]});g.B(this,b);b.o(this.element);b.ha("click",this.uG,this);this.w=new $4(a);g.B(this,this.w);g.BL(this.player,this.w.element,4);this.hide()},h5=function(a){return g.CL(a.player)&&a.Eu()&&!a.J},Hpa=function(a,b){return(0,g.H)(b.suggestions,function(c){c=g.RN(a.H.P(),c);
g.B(a,c);return c})},i5=function(a){var b=a.lr();
b!=a.X&&(a.X=b,a.player.R("autonavvisibility"))},j5=function(a){g.VQ.call(this,a);
this.o=null;this.u=new g.R(this);g.B(this,this.u);this.A=a.P();Ipa(a)?this.o=new g5(this.player):this.A.Ja?this.o=new e5(this.player):this.o=new Z4(this.player);g.B(this,this.o);g.BL(this.player,this.o.element,4);this.gA();this.u.M(a,"videodatachange",this.gA,this);this.u.M(a,g.tE("endscreen"),this.AF,this);this.u.M(a,"crx_endscreen",this.BF,this)},Ipa=function(a){a=a.P();
return a.oa&&!a.Ja};
g.r(Z4,g.T);Z4.prototype.create=function(){this.created=!0};
Z4.prototype.destroy=function(){this.created=!1};
Z4.prototype.Eu=function(){return!1};
Z4.prototype.lr=function(){return!1};g.r($4,g.T);g.h=$4.prototype;g.h.Ql=function(){this.G&&(this.J.stop(),this.Ua(this.H),this.H=null,this.G.close(),this.G=null)};
g.h.Ny=function(){g.zu(this,g.eL(this.w))};
g.h.NK=function(){window.focus();this.Ql()};
g.h.hide=function(){g.T.prototype.hide.call(this)};
g.h.To=function(a){a=a||g.V(this.w.P().experiments,"autoplay_time")||1E4;var b=Math.min((0,g.Sq)()-this.K,a);a=Math.min(b/a,1);this.N.setAttribute("stroke-dashoffset",-211*(a+1));1<=a&&3!=this.w.getPresentingPlayerType()?d5(this,!0):this.B&&this.B.start()};
g.h.WK=function(a){!g.Ud(this.D.element,g.hr(a))&&g.YN(a,this.w)&&d5(this)};
g.h.nJ=function(){g.gL(this.w,!0)};
g.h.oK=function(a){this.w.getPresentingPlayerType();this.show();a5(this,a)};
g.h.iB=function(a){this.w.getPresentingPlayerType();this.C&&this.C.wa().videoId==a.wa().videoId||(this.C=a,Y4(this,a,"hqdefault.jpg"))};
g.h.pK=function(){this.w.getPresentingPlayerType();b5(this);this.hide()};
g.h.Z=function(){b5(this);this.Ql();g.T.prototype.Z.call(this)};g.r(e5,Z4);g.r(f5,g.T);f5.prototype.H=function(a){g.YN(a,this.w,this.D,this.B.Gb||void 0)&&Gpa(this)};
f5.prototype.J=function(a){switch(a.keyCode){case 13:case 32:g.mr(a)||(Gpa(this),g.lr(a))}};
f5.prototype.G=function(){var a=this.w.getVideoData(),b=this.w.P();this.D=a.dc?!1:b.u};g.r(g5,Z4);g.h=g5.prototype;g.h.create=function(){Z4.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.D=Hpa(this,a),this.T=a);this.Tf();this.C.M(this.player,"appresize",this.Tf);this.C.M(this.player,"onVideoAreaChange",this.Tf);this.C.M(this.player,"videodatachange",this.wG);this.C.M(this.player,"autonavchange",this.mr);this.C.M(this.player,"autonavcancel",this.tG);a=this.T.autonavState;a!=this.V&&this.mr(a);this.C.M(this.element,"transitionend",this.nM)};
g.h.destroy=function(){g.Zs(this.C);g.ee(this.B);this.B=[];this.D=null;Z4.prototype.destroy.call(this);g.hn(this.element,"ytp-show-tiles");this.N.stop();this.V=this.T.autonavState};
g.h.Eu=function(){return 1!=this.T.autonavState};
g.h.show=function(){Z4.prototype.show.call(this);g.hn(this.element,"ytp-show-tiles");this.player.P().o?g.Ym(this.N):this.N.start();(this.K||this.J&&this.J!=this.T.clientPlaybackNonce)&&g.gL(this.player,!1);h5(this)?(i5(this),2==this.T.autonavState?g.U(this.player.P().experiments,"fast_autonav_in_background")&&3==this.player.getVisibilityState()?d5(this.w,!0):a5(this.w):3==this.T.autonavState&&c5(this.w)):(g.gL(this.player,!0),i5(this))};
g.h.hide=function(){Z4.prototype.hide.call(this);c5(this.w);i5(this)};
g.h.nM=function(a){g.hr(a)==this.element&&this.Tf()};
g.h.Tf=function(){if(this.D&&this.D.length){g.L(this.element,"ytp-endscreen-paginate");var a=g.sL(this.H,!0,this.H.isFullscreen()),b=g.uD(this.H);b&&(b=b.Vb()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.D.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var q=b/2,t=e/2,u=b<=f-2&&n>=t*m,z=e<=k-2&&n>=q*m;if((q+1)/t*d/c>c/(q/(t+1)*d)&&z)n-=q*m,e+=2;else if(u)n-=t*m,b+=2;else if(z)n-=
q*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.kd(a.width/m||1,1,1.21);n*=g.kd(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.S.element;g.Dh(a,m,n);g.kh(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});c=this.w;f=this.D[0];c.C=f;Y4(c,f,"hqdefault.jpg");g.M(this.element,"ytp-endscreen-takeover",h5(this));i5(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(q=
c,t=0,d&&f>=b-2&&k>=e-2?t=1:0==k%2&&0==f%2&&(2>k&&2>f?0==k&&0==f&&(t=2):t=2),q=g.ld(q+this.G,l),0!=t){u=this.B[c];u||(u=new f5(this.player),this.B[c]=u,a.appendChild(u.element));z=Math.floor(n*k/e);var C=Math.floor(m*f/b),D=Math.floor(n*(k+t)/e)-z-4,G=Math.floor(m*(f+t)/b)-C-4;g.sh(u.element,C,z);g.Dh(u.element,G,D);g.kh(u.element,"transitionDelay",(k+f)/20+"s");g.M(u.element,"ytp-videowall-still-mini",1==t);g.M(u.element,"ytp-videowall-still-large",2<t);t=u;q=this.D[q];t.B!=q&&(t.B=q,Y4(t,q,g.fn(t.element,
"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg"),(q=(q=q.Gb)&&q.itct)&&g.FL(t.w,t.element,q));c++}g.M(this.element,"ytp-endscreen-paginate",c<l);for(b=this.B.length-1;b>=c;b--)e=this.B[b],g.Qd(e.element),g.de(e);this.B.length=c}};
g.h.wG=function(){var a=this.player.getVideoData();this.T!=a&&(this.G=0,this.D=Hpa(this,a),this.T=a,this.Tf())};
g.h.uG=function(){this.G+=this.B.length;this.Tf()};
g.h.vG=function(){this.G-=this.B.length;this.Tf()};
g.h.RE=function(){return!!this.w.B};
g.h.mr=function(a){1==a?(this.K=!1,this.J=this.T.clientPlaybackNonce,b5(this.w),this.Ha()&&this.Tf()):(this.K=!0,this.Ha()&&h5(this)&&(2==a?a5(this.w):3==a&&c5(this.w)))};
g.h.tG=function(a){if(a){for(a=0;a<this.B.length;a++)g.HL(this.H,this.B[a].element,!0);this.mr(1)}else this.J=null,this.K=!1;this.Tf()};
g.h.lr=function(){return this.Ha()&&h5(this)};g.r(j5,g.VQ);g.h=j5.prototype;g.h.mx=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!Ipa(this.player)||b;a=a.Th||g.ty(a.Oa);var c=g.dU(this.player.app);return b&&!a&&!c};
g.h.lx=function(){return this.o.lr()};
g.h.JE=function(){return this.lx()?this.o.RE():!1};
g.h.Z=function(){g.oS(this.player.app,"endscreen",void 0);g.VQ.prototype.Z.call(this)};
g.h.load=function(){g.VQ.prototype.load.call(this);this.o.show()};
g.h.unload=function(){g.VQ.prototype.unload.call(this);this.o.hide();this.o.destroy()};
g.h.AF=function(a){this.mx()&&(this.o.created||this.o.create(),"load"==a.getId()&&this.load())};
g.h.BF=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.gA=function(){g.oS(this.player.app,"endscreen",void 0);var a=this.player.getVideoData();a=new g.qE(Math.max(1E3*(a.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});g.B(this,a);var b=new g.qE(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.B(this,b);g.xL(this.player,[a,b])};g.kR.endscreen=j5;})(_yt_player);
