(self.webpackChunkhomeActualApp=self.webpackChunkhomeActualApp||[]).push([[120],{8120:(ee,_,m)=>{m.r(_);var u=m(1481),s=m(1423),v=m(730);const E=[];let g=(()=>{class a{}return a.\u0275fac=function(d){return new(d||a)},a.\u0275mod=s.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=s.\u0275\u0275defineInjector({imports:[v.RouterModule.forRoot(E),v.RouterModule]}),a})(),A=(()=>{class a{constructor(){this.title="home-actual-app"}}return a.\u0275fac=function(d){return new(d||a)},a.\u0275cmp=s.\u0275\u0275defineComponent({type:a,selectors:[["app-root"]],decls:0,vars:0,template:function(d,w){}}),a})();var y=m(1327);const M=[{path:"",component:(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(d){return new(d||a)},a.\u0275cmp=s.\u0275\u0275defineComponent({type:a,selectors:[["app-home-actual-app"]],decls:2,vars:0,template:function(d,w){1&d&&(s.\u0275\u0275elementStart(0,"p"),s.\u0275\u0275text(1,"home-actual-app works!"),s.\u0275\u0275elementEnd())}}),a})()}];let D=(()=>{class a{}return a.\u0275fac=function(d){return new(d||a)},a.\u0275mod=s.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=s.\u0275\u0275defineInjector({imports:[v.RouterModule.forChild(M),v.RouterModule]}),a})(),C=(()=>{class a{}return a.\u0275fac=function(d){return new(d||a)},a.\u0275mod=s.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=s.\u0275\u0275defineInjector({imports:[y.CommonModule,D]}),a})(),b=(()=>{class a{}return a.\u0275fac=function(d){return new(d||a)},a.\u0275mod=s.\u0275\u0275defineNgModule({type:a,bootstrap:[A]}),a.\u0275inj=s.\u0275\u0275defineInjector({imports:[u.b2,g,C]}),a})();(0,s.enableProdMode)(),u.q6().bootstrapModule(b).catch(a=>console.error(a))},1481:(ee,_,m)=>{m.d(_,{Dx:()=>X,b2:()=>ge,q6:()=>he});var u=m(1327),s=m(1423);class v extends u.\u0275DomAdapter{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class E extends v{static makeCurrent(){(0,u.\u0275setRootDomAdapter)(new E)}onAndCancel(t,e,r){return t.addEventListener(e,r,!1),()=>{t.removeEventListener(e,r,!1)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,e){return(e=e||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return"window"===e?window:"document"===e?t:"body"===e?t.body:null}getBaseHref(t){const e=function A(){return g=g||document.querySelector("base"),g?g.getAttribute("href"):null}();return null==e?null:function k(n){y=y||document.createElement("a"),y.setAttribute("href",n);const t=y.pathname;return"/"===t.charAt(0)?t:`/${t}`}(e)}resetBaseElement(){g=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return(0,u.\u0275parseCookieValue)(document.cookie,t)}}let y,g=null;const M=new s.InjectionToken("TRANSITION_ID"),C=[{provide:s.APP_INITIALIZER,useFactory:function D(n,t,e){return()=>{e.get(s.ApplicationInitStatus).donePromise.then(()=>{const r=(0,u.\u0275getDOM)(),o=t.querySelectorAll(`style[ng-transition="${n}"]`);for(let i=0;i<o.length;i++)r.remove(o[i])})}},deps:[M,u.DOCUMENT,s.Injector],multi:!0}];let L=(()=>{class n{build(){return new XMLHttpRequest}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const a=new s.InjectionToken("EventManagerPlugins");let c=(()=>{class n{constructor(e,r){this._zone=r,this._eventNameToPlugin=new Map,e.forEach(o=>o.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,r,o){return this._findPluginFor(r).addEventListener(e,r,o)}addGlobalEventListener(e,r,o){return this._findPluginFor(r).addGlobalEventListener(e,r,o)}getZone(){return this._zone}_findPluginFor(e){const r=this._eventNameToPlugin.get(e);if(r)return r;const o=this._plugins;for(let i=0;i<o.length;i++){const l=o[i];if(l.supports(e))return this._eventNameToPlugin.set(e,l),l}throw new Error(`No event manager plugin found for event ${e}`)}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(a),s.\u0275\u0275inject(s.NgZone))},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class d{constructor(t){this._doc=t}addGlobalEventListener(t,e,r){const o=(0,u.\u0275getDOM)().getGlobalEventTarget(this._doc,t);if(!o)throw new Error(`Unsupported event target ${o} for event ${e}`);return this.addEventListener(o,e,r)}}let w=(()=>{class n{constructor(){this._stylesSet=new Set}addStyles(e){const r=new Set;e.forEach(o=>{this._stylesSet.has(o)||(this._stylesSet.add(o),r.add(o))}),this.onStylesAdded(r)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})(),S=(()=>{class n extends w{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,r,o){e.forEach(i=>{const l=this._doc.createElement("style");l.textContent=i,o.push(r.appendChild(l))})}addHost(e){const r=[];this._addStylesToHost(this._stylesSet,e,r),this._hostNodes.set(e,r)}removeHost(e){const r=this._hostNodes.get(e);r&&r.forEach(j),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((r,o)=>{this._addStylesToHost(e,o,r)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(j))}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(u.DOCUMENT))},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function j(n){(0,u.\u0275getDOM)().remove(n)}const R={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},I=/%COMP%/g,x="%COMP%",te=`_nghost-${x}`,ne=`_ngcontent-${x}`;function T(n,t,e){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?T(n,o,e):(o=o.replace(I,n),e.push(o))}return e}function z(n){return t=>{if("__ngUnwrap__"===t)return n;!1===n(t)&&(t.preventDefault(),t.returnValue=!1)}}let N=(()=>{class n{constructor(e,r,o){this.eventManager=e,this.sharedStylesHost=r,this.appId=o,this.rendererByCompId=new Map,this.defaultRenderer=new O(e)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;switch(r.encapsulation){case s.ViewEncapsulation.Emulated:{let o=this.rendererByCompId.get(r.id);return o||(o=new ae(this.eventManager,this.sharedStylesHost,r,this.appId),this.rendererByCompId.set(r.id,o)),o.applyToHost(e),o}case 1:case s.ViewEncapsulation.ShadowDom:return new ie(this.eventManager,this.sharedStylesHost,e,r);default:if(!this.rendererByCompId.has(r.id)){const o=T(r.id,r.styles,[]);this.sharedStylesHost.addStyles(o),this.rendererByCompId.set(r.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(c),s.\u0275\u0275inject(S),s.\u0275\u0275inject(s.APP_ID))},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class O{constructor(t){this.eventManager=t,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(t,e){return e?document.createElementNS(R[e]||e,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,e){(G(t)?t.content:t).appendChild(e)}insertBefore(t,e,r){t&&(G(t)?t.content:t).insertBefore(e,r)}removeChild(t,e){t&&t.removeChild(e)}selectRootElement(t,e){let r="string"==typeof t?document.querySelector(t):t;if(!r)throw new Error(`The selector "${t}" did not match any elements`);return e||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,r,o){if(o){e=o+":"+e;const i=R[o];i?t.setAttributeNS(i,e,r):t.setAttribute(e,r)}else t.setAttribute(e,r)}removeAttribute(t,e,r){if(r){const o=R[r];o?t.removeAttributeNS(o,e):t.removeAttribute(`${r}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,r,o){o&(s.RendererStyleFlags2.DashCase|s.RendererStyleFlags2.Important)?t.style.setProperty(e,r,o&s.RendererStyleFlags2.Important?"important":""):t.style[e]=r}removeStyle(t,e,r){r&s.RendererStyleFlags2.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,r){t[e]=r}setValue(t,e){t.nodeValue=e}listen(t,e,r){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,e,z(r)):this.eventManager.addEventListener(t,e,z(r))}}function G(n){return"TEMPLATE"===n.tagName&&void 0!==n.content}class ae extends O{constructor(t,e,r,o){super(t),this.component=r;const i=T(o+"-"+r.id,r.styles,[]);e.addStyles(i),this.contentAttr=function re(n){return ne.replace(I,n)}(o+"-"+r.id),this.hostAttr=function oe(n){return te.replace(I,n)}(o+"-"+r.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,e){const r=super.createElement(t,e);return super.setAttribute(r,this.contentAttr,""),r}}class ie extends O{constructor(t,e,r,o){super(t),this.sharedStylesHost=e,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const i=T(o.id,o.styles,[]);for(let l=0;l<i.length;l++){const f=document.createElement("style");f.textContent=i[l],this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,r){return super.insertBefore(this.nodeOrShadowRoot(t),e,r)}removeChild(t,e){return super.removeChild(this.nodeOrShadowRoot(t),e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}let le=(()=>{class n extends d{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,o){return e.addEventListener(r,o,!1),()=>this.removeEventListener(e,r,o)}removeEventListener(e,r,o){return e.removeEventListener(r,o)}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(u.DOCUMENT))},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const U=["alt","control","meta","shift"],ue={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ce={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};let de=(()=>{class n extends d{constructor(e){super(e)}supports(e){return null!=n.parseEventName(e)}addEventListener(e,r,o){const i=n.parseEventName(r),l=n.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,u.\u0275getDOM)().onAndCancel(e,i.domEventName,l))}static parseEventName(e){const r=e.toLowerCase().split("."),o=r.shift();if(0===r.length||"keydown"!==o&&"keyup"!==o)return null;const i=n._normalizeKey(r.pop());let l="",f=r.indexOf("code");if(f>-1&&(r.splice(f,1),l="code."),U.forEach(q=>{const Q=r.indexOf(q);Q>-1&&(r.splice(Q,1),l+=q+".")}),l+=i,0!=r.length||0===i.length)return null;const p={};return p.domEventName=o,p.fullKey=l,p}static matchEventFullKeyCode(e,r){let o=ue[e.key]||e.key,i="";return r.indexOf("code.")>-1&&(o=e.code,i="code."),!(null==o||!o)&&(o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),U.forEach(l=>{l!==o&&(0,ce[l])(e)&&(i+=l+".")}),i+=o,i===r)}static eventCallback(e,r,o){return i=>{n.matchEventFullKeyCode(i,e)&&o.runGuarded(()=>r(i))}}static _normalizeKey(e){return"esc"===e?"escape":e}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(u.DOCUMENT))},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const he=(0,s.createPlatformFactory)(s.platformCore,"browser",[{provide:s.PLATFORM_ID,useValue:u.\u0275PLATFORM_BROWSER_ID},{provide:s.PLATFORM_INITIALIZER,useValue:function fe(){E.makeCurrent()},multi:!0},{provide:u.DOCUMENT,useFactory:function me(){return(0,s.\u0275setDocument)(document),document},deps:[]}]),K=new s.InjectionToken(""),W=[{provide:s.\u0275TESTABILITY_GETTER,useClass:class b{addToWindow(t){s.\u0275global.getAngularTestability=(r,o=!0)=>{const i=t.findTestabilityInTree(r,o);if(null==i)throw new Error("Could not find testability for element.");return i},s.\u0275global.getAllAngularTestabilities=()=>t.getAllTestabilities(),s.\u0275global.getAllAngularRootElements=()=>t.getAllRootElements(),s.\u0275global.frameworkStabilizers||(s.\u0275global.frameworkStabilizers=[]),s.\u0275global.frameworkStabilizers.push(r=>{const o=s.\u0275global.getAllAngularTestabilities();let i=o.length,l=!1;const f=function(p){l=l||p,i--,0==i&&r(l)};o.forEach(function(p){p.whenStable(f)})})}findTestabilityInTree(t,e,r){return null==e?null:t.getTestability(e)??(r?(0,u.\u0275getDOM)().isShadowRoot(e)?this.findTestabilityInTree(t,e.host,!0):this.findTestabilityInTree(t,e.parentElement,!0):null)}},deps:[]},{provide:s.\u0275TESTABILITY,useClass:s.Testability,deps:[s.NgZone,s.TestabilityRegistry,s.\u0275TESTABILITY_GETTER]},{provide:s.Testability,useClass:s.Testability,deps:[s.NgZone,s.TestabilityRegistry,s.\u0275TESTABILITY_GETTER]}],Z=[{provide:s.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:s.ErrorHandler,useFactory:function pe(){return new s.ErrorHandler},deps:[]},{provide:a,useClass:le,multi:!0,deps:[u.DOCUMENT,s.NgZone,s.PLATFORM_ID]},{provide:a,useClass:de,multi:!0,deps:[u.DOCUMENT]},{provide:N,useClass:N,deps:[c,S,s.APP_ID]},{provide:s.RendererFactory2,useExisting:N},{provide:w,useExisting:S},{provide:S,useClass:S,deps:[u.DOCUMENT]},{provide:c,useClass:c,deps:[a,s.NgZone]},{provide:u.XhrFactory,useClass:L,deps:[]},[]];let ge=(()=>{class n{constructor(e){}static withServerTransition(e){return{ngModule:n,providers:[{provide:s.APP_ID,useValue:e.appId},{provide:M,useExisting:s.APP_ID},C]}}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(K,12))},n.\u0275mod=s.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=s.\u0275\u0275defineInjector({providers:[...Z,...W],imports:[u.CommonModule,s.ApplicationModule]}),n})(),X=(()=>{class n{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(u.DOCUMENT))},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:function(e){let r=null;return r=e?new e:function ye(){return new X((0,s.\u0275\u0275inject)(u.DOCUMENT))}(),r},providedIn:"root"}),n})();typeof window<"u"&&window}}]);