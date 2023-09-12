"use strict";(self.webpackChunkreact_map_gl_website=self.webpackChunkreact_map_gl_website||[]).push([[4221],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7499:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>E,contentTitle:()=>b,default:()=>L,frontMatter:()=>y,metadata:()=>_,toc:()=>x});var n=r(7462),o=r(3366),a=r(7294),i=r(3905),s=(r(745),r(945)),u=/(^|[A-Z])[a-z]*/g;function c(e){return e.match(u).join(" ")}function l(e){var t=e.name,r=e.value,n=e.onChange;return a.createElement("div",{className:"input"},a.createElement("label",null,c(t)),a.createElement("input",{type:"checkbox",checked:r,onChange:function(e){return n(t,e.target.checked)}}))}function f(e){var t=e.name,r=e.value,n=e.onChange;return a.createElement("div",{className:"input"},a.createElement("label",null,c(t)),a.createElement("input",{type:"number",value:r,onChange:function(e){return n(t,Number(e.target.value))}}))}function p(e){var t=e.settings,r=e.onChange;return a.createElement("div",{className:"control-panel"},a.createElement("h3",null,"Limit Map Interaction"),a.createElement("p",null,"Turn interactive features off/on."),a.createElement("div",{className:"source-link"},a.createElement("a",{href:"https://github.com/visgl/react-map-gl/tree/7.1-release/examples/interaction",target:"_new"},"View Code \u2197")),a.createElement("hr",null),Object.keys(t).map((function(e){return function(e,t){switch(typeof t){case"boolean":return a.createElement(l,{key:e,name:e,value:t,onChange:r});case"number":return a.createElement(f,{key:e,name:e,value:t,onChange:r});default:return null}}(e,t[e])})),a.createElement("hr",null))}const d=a.memo(p);var m="",v={latitude:37.729,longitude:-122.36,zoom:11,bearing:0,pitch:50};function g(){var e=(0,a.useState)({scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,touchPitch:!0,minZoom:0,maxZoom:20,minPitch:0,maxPitch:85}),t=e[0],r=e[1],o=(0,a.useCallback)((function(e,t){return r((function(r){var n;return Object.assign({},r,((n={})[e]=t,n))}))}),[]);return a.createElement(a.Fragment,null,a.createElement(s.ZP,(0,n.Z)({initialViewState:v},t,{mapStyle:"mapbox://styles/mapbox/dark-v9",mapboxAccessToken:m})),a.createElement(d,{settings:t,onChange:o}))}var h=["components"],y={},b="Limit Map Interaction",_={unversionedId:"interaction",id:"interaction",title:"Limit Map Interaction",description:"",source:"@site/src/examples/interaction.mdx",sourceDirName:".",slug:"/interaction",permalink:"/react-map-gl/examples/interaction",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"examplesSidebar",previous:{title:"Clusters",permalink:"/react-map-gl/examples/clusters"},next:{title:"Camera Transition",permalink:"/react-map-gl/examples/viewport-animation"}},E={},x=[],w={toc:x},C="wrapper";function L(e){var t=e.components,r=(0,o.Z)(e,h);return(0,i.kt)(C,(0,n.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"limit-map-interaction"},"Limit Map Interaction"),(0,i.kt)(g,{mdxType:"App"}))}L.isMDXComponent=!0},945:(e,t,r)=>{r.d(t,{ot:()=>$,$j:()=>te,mh:()=>ne,D5:()=>X,Jx:()=>K,Pv:()=>ee,GI:()=>Y,jf:()=>re,Hw:()=>oe,ZP:()=>ae,PE:()=>Z});var n=r(7294),o=n.createContext(null);var a=r(1202);function i(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!i(e[r],t[r]))return!1;return!0}if(Array.isArray(t))return!1;if("object"==typeof e&&"object"==typeof t){var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var a=0,s=n;a<s.length;a++){var u=s[a];if(!t.hasOwnProperty(u))return!1;if(!i(e[u],t[u]))return!1}return!0}return!1}function s(e,t){if(e.getProjection){var r=e.getProjection();i(r,t.getProjection())||t.setProjection(r)}}function u(e){return{longitude:e.center.lng,latitude:e.center.lat,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing,padding:e.padding}}function c(e,t){var r=t.viewState||t,n=!1;if("longitude"in r&&"latitude"in r){var o=e.center;e.center=new o.constructor(r.longitude,r.latitude),n=n||o!==e.center}if("zoom"in r){var a=e.zoom;e.zoom=r.zoom,n=n||a!==e.zoom}if("bearing"in r){var i=e.bearing;e.bearing=r.bearing,n=n||i!==e.bearing}if("pitch"in r){var s=e.pitch;e.pitch=r.pitch,n=n||s!==e.pitch}return r.padding&&!e.isPaddingEqual(r.padding)&&(n=!0,e.padding=r.padding),n}var l=r(7855),f=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function p(e){if(!e)return null;if("string"==typeof e)return e;if("toJS"in e&&(e=e.toJS()),!e.layers)return e;for(var t,r={},n=(0,l.Z)(e.layers);!(t=n()).done;){var o=t.value;r[o.id]=o}var a=e.layers.map((function(e){var t=null;"interactive"in e&&delete(t=Object.assign({},e)).interactive;var n=r[e.ref];if(n){delete(t=t||Object.assign({},e)).ref;for(var o,a=(0,l.Z)(f);!(o=a()).done;){var i=o.value;i in n&&(t[i]=n[i])}}return t||e}));return Object.assign({},e,{layers:a})}var d={version:8,sources:{},layers:[]},m={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},v={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},g={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},h=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],y=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"],b=function(){function e(e,t,r){var n=this;this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=function(e){var t=n.props[g[e.type]];t?t(e):"error"===e.type&&console.error(e.error)},this._onPointerEvent=function(e){"mousemove"!==e.type&&"mouseout"!==e.type||n._updateHover(e);var t=n.props[m[e.type]];t&&(n.props.interactiveLayerIds&&"mouseover"!==e.type&&"mouseout"!==e.type&&(e.features=n._hoveredFeatures||n._queryRenderedFeatures(e.point)),t(e),delete e.features)},this._onCameraEvent=function(e){if(!n._internalUpdate){var t=n.props[v[e.type]];t&&t(e)}e.type in n._deferredEvents&&(n._deferredEvents[e.type]=!1)},this._MapClass=e,this.props=t,this._initialize(r)}var t=e.prototype;return t.setProps=function(e){var t=this.props;this.props=e;var r=this._updateSettings(e,t);r&&this._createShadowTransform(this._map);var n=this._updateSize(e),o=this._updateViewState(e,!0);this._updateStyle(e,t),this._updateStyleComponents(e,t),this._updateHandlers(e,t),(r||n||o&&!this._map.isMoving())&&this.redraw()},e.reuse=function(t,r){var n=e.savedMaps.pop();if(!n)return null;var o=n.map,a=o.getContainer();for(r.className=a.className;a.childNodes.length>0;)r.appendChild(a.childNodes[0]);o._container=r;var i=o._resizeObserver;i&&(i.disconnect(),i.observe(r)),n.setProps(Object.assign({},t,{styleDiffing:!1})),o.resize();var s=t.initialViewState;return s&&(s.bounds?o.fitBounds(s.bounds,Object.assign({},s.fitBoundsOptions,{duration:0})):n._updateViewState(s,!1)),o.isStyleLoaded()?o.fire("load"):o.once("styledata",(function(){return o.fire("load")})),o._update(),n},t._initialize=function(e){var t=this,r=this.props,n=r.mapStyle,o=void 0===n?d:n,a=Object.assign({},r,r.initialViewState,{accessToken:r.mapboxAccessToken||_()||null,container:e,style:p(o)}),i=a.initialViewState||a.viewState||a;if(Object.assign(a,{center:[i.longitude||0,i.latitude||0],zoom:i.zoom||0,pitch:i.pitch||0,bearing:i.bearing||0}),r.gl){var u=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(){return HTMLCanvasElement.prototype.getContext=u,r.gl}}var c=new this._MapClass(a);i.padding&&c.setPadding(i.padding),r.cursor&&(c.getCanvas().style.cursor=r.cursor),this._createShadowTransform(c);var l=c._render;c._render=function(e){t._inRender=!0,l.call(c,e),t._inRender=!1};var f=c._renderTaskQueue.run;c._renderTaskQueue.run=function(e){f.call(c._renderTaskQueue,e),t._onBeforeRepaint()},c.on("render",(function(){return t._onAfterRepaint()}));var h=c.fire;for(var y in c.fire=this._fireEvent.bind(this,h),c.on("resize",(function(){t._renderTransform.resize(c.transform.width,c.transform.height)})),c.on("styledata",(function(){t._updateStyleComponents(t.props,{}),s(c.transform,t._renderTransform)})),c.on("sourcedata",(function(){return t._updateStyleComponents(t.props,{})})),m)c.on(y,this._onPointerEvent);for(var b in v)c.on(b,this._onCameraEvent);for(var E in g)c.on(E,this._onEvent);this._map=c},t.recycle=function(){var t=this.map.getContainer().querySelector("[mapboxgl-children]");null==t||t.remove(),e.savedMaps.push(this)},t.destroy=function(){this._map.remove()},t.redraw=function(){var e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())},t._createShadowTransform=function(e){var t,r,n=(t=e.transform,(r=t.clone()).pixelsToGLUnits=t.pixelsToGLUnits,r);e.painter.transform=n,this._renderTransform=n},t._updateSize=function(e){var t=e.viewState;if(t){var r=this._map;if(t.width!==r.transform.width||t.height!==r.transform.height)return r.resize(),!0}return!1},t._updateViewState=function(e,t){if(this._internalUpdate)return!1;var r=this._map,n=this._renderTransform,o=n.zoom,a=n.pitch,i=n.bearing,s=r.isMoving();s&&(n.cameraElevationReference="sea");var l=c(n,Object.assign({},u(r.transform),e));if(s&&(n.cameraElevationReference="ground"),l&&t){var f=this._deferredEvents;f.move=!0,f.zoom||(f.zoom=o!==n.zoom),f.rotate||(f.rotate=i!==n.bearing),f.pitch||(f.pitch=a!==n.pitch)}return s||c(r.transform,e),l},t._updateSettings=function(e,t){for(var r=this._map,n=!1,o=0,a=h;o<a.length;o++){var s=a[o];if(s in e&&!i(e[s],t[s])){n=!0;var u=r["set"+s[0].toUpperCase()+s.slice(1)];null==u||u.call(r,e[s])}}return n},t._updateStyle=function(e,t){if(e.cursor!==t.cursor&&(this._map.getCanvas().style.cursor=e.cursor||""),e.mapStyle!==t.mapStyle){var r=e.mapStyle,n=void 0===r?d:r,o=e.styleDiffing,a={diff:void 0===o||o};return"localIdeographFontFamily"in e&&(a.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(p(n),a),!0}return!1},t._updateStyleComponents=function(e,t){var r=this._map,n=!1;return r.isStyleLoaded()&&("light"in e&&r.setLight&&!i(e.light,t.light)&&(n=!0,r.setLight(e.light)),"fog"in e&&r.setFog&&!i(e.fog,t.fog)&&(n=!0,r.setFog(e.fog)),"terrain"in e&&r.setTerrain&&!i(e.terrain,t.terrain)&&(e.terrain&&!r.getSource(e.terrain.source)||(n=!0,r.setTerrain(e.terrain)))),n},t._updateHandlers=function(e,t){for(var r=this._map,n=!1,o=0,a=y;o<a.length;o++){var s,u,c=a[o],l=null==(s=e[c])||s;i(l,null==(u=t[c])||u)||(n=!0,l?r[c].enable(l):r[c].disable())}return n},t._queryRenderedFeatures=function(e){var t=this._map,r=t.transform,n=this.props.interactiveLayerIds,o=void 0===n?[]:n;try{return t.transform=this._renderTransform,t.queryRenderedFeatures(e,{layers:o.filter(t.getLayer.bind(t))})}catch(a){return[]}finally{t.transform=r}},t._updateHover=function(e){var t=this.props;if(t.interactiveLayerIds&&(t.onMouseMove||t.onMouseEnter||t.onMouseLeave)){var r,n=e.type,o=(null==(r=this._hoveredFeatures)?void 0:r.length)>0,a=this._queryRenderedFeatures(e.point),i=a.length>0;!i&&o&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=a,i&&!o&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=n}else this._hoveredFeatures=null},t._fireEvent=function(e,t,r){var n=this._map,o=n.transform,a="string"==typeof t?t:t.type;return"move"===a&&this._updateViewState(this.props,!1),a in v&&("object"==typeof t&&(t.viewState=u(o)),this._map.isMoving())?(n.transform=this._renderTransform,e.call(n,t,r),n.transform=o,n):(e.call(n,t,r),n)},t._onBeforeRepaint=function(){var e=this,t=this._map;for(var r in this._internalUpdate=!0,this._deferredEvents)this._deferredEvents[r]&&t.fire(r);this._internalUpdate=!1;var n=this._map.transform;t.transform=this._renderTransform,this._onAfterRepaint=function(){s(e._renderTransform,n),t.transform=n}},(0,a.Z)(e,[{key:"map",get:function(){return this._map}},{key:"transform",get:function(){return this._renderTransform}}]),e}();function _(){var e=null;if("undefined"!=typeof location){var t=/access_token=([^&\/]*)/.exec(location.search);e=t&&t[1]}try{e=e||"pk.eyJ1IjoidWNmLW1hcGJveCIsImEiOiJja2tyNHQzdnIzYmNnMndwZGI3djNzdjVyIn0.xgCXV9mLZ47q7easx6WLCQ"}catch(r){}try{e=e||process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}catch(n){}return e}b.savedMaps=[];var E=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function x(e){if(!e)return null;for(var t,r=e.map,n={getMap:function(){return r},getCenter:function(){return e.transform.center},getZoom:function(){return e.transform.zoom},getBearing:function(){return e.transform.bearing},getPitch:function(){return e.transform.pitch},getPadding:function(){return e.transform.padding},getBounds:function(){return e.transform.getBounds()},project:function(t){var n=r.transform;r.transform=e.transform;var o=r.project(t);return r.transform=n,o},unproject:function(t){var n=r.transform;r.transform=e.transform;var o=r.unproject(t);return r.transform=n,o},queryTerrainElevation:function(t,n){var o=r.transform;r.transform=e.transform;var a=r.queryTerrainElevation(t,n);return r.transform=o,a},queryRenderedFeatures:function(t,n){var o=r.transform;r.transform=e.transform;var a=r.queryRenderedFeatures(t,n);return r.transform=o,a}},o=(0,l.Z)(function(e){var t=new Set,r=e;for(;r;){for(var n,o=(0,l.Z)(Object.getOwnPropertyNames(r));!(n=o()).done;){var a=n.value;"_"!==a[0]&&"function"==typeof e[a]&&"fire"!==a&&"setEventedParent"!==a&&t.add(a)}r=Object.getPrototypeOf(r)}return Array.from(t)}(r));!(t=o()).done;){var a=t.value;a in n||E.includes(a)||(n[a]=r[a].bind(r))}return n}const w="undefined"!=typeof document?n.useLayoutEffect:n.useEffect;var C=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];var L=n.createContext(null);function P(e,t,r){var a=(0,n.useContext)(o),i=(0,n.useState)(null),s=i[0],u=i[1],c=(0,n.useRef)(),f=(0,n.useRef)({mapLib:null,map:null}).current;(0,n.useEffect)((function(){var t,n=e.mapLib,o=!0;return Promise.resolve(n||r).then((function(r){if(o){if(!r)throw new Error("Invalid mapLib");var n="Map"in r?r:r.default;if(!n.Map)throw new Error("Invalid mapLib");if(function(e,t){for(var r,n=(0,l.Z)(C);!(r=n()).done;){var o=r.value;o in t&&(e[o]=t[o])}var a=t.RTLTextPlugin,i=void 0===a?"https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js":a;i&&e.getRTLTextPluginStatus&&"unavailable"===e.getRTLTextPluginStatus()&&e.setRTLTextPlugin(i,(function(e){e&&console.error(e)}),!1)}(n,e),n.supported&&!n.supported(e))throw new Error("Map is not supported by this browser");e.reuseMaps&&(t=b.reuse(e,c.current)),t||(t=new b(n.Map,e,c.current)),f.map=x(t),f.mapLib=n,u(t),null==a||a.onMapMount(f.map,e.id)}})).catch((function(t){var r=e.onError;r?r({type:"error",target:null,originalEvent:null,error:t}):console.error(t)})),function(){o=!1,t&&(null==a||a.onMapUnmount(e.id),e.reuseMaps?t.recycle():t.destroy())}}),[]),w((function(){s&&s.setProps(e)})),(0,n.useImperativeHandle)(t,(function(){return f.map}),[s]);var p=(0,n.useMemo)((function(){return Object.assign({position:"relative",width:"100%",height:"100%"},e.style)}),[e.style]);return n.createElement("div",{id:e.id,ref:c,style:p},s&&n.createElement(L.Provider,{value:f},n.createElement("div",{"mapboxgl-children":"",style:{height:"100%"}},e.children)))}var S=r(3935),O=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function M(e,t){if(e&&t){var r=e.style;for(var n in t){var o=t[n];Number.isFinite(o)&&!O.test(n)?r[n]=o+"px":r[n]=o}}}function j(e,t){var r=(0,n.useContext)(L),o=r.map,a=r.mapLib,i=(0,n.useRef)({props:e});i.current.props=e;var s=(0,n.useMemo)((function(){var t=!1;n.Children.forEach(e.children,(function(e){e&&(t=!0)}));var r=Object.assign({},e,{element:t?document.createElement("div"):null}),o=new a.Marker(r);return o.setLngLat([e.longitude,e.latitude]),o.getElement().addEventListener("click",(function(e){null==i.current.props.onClick||i.current.props.onClick({type:"click",target:o,originalEvent:e})})),o.on("dragstart",(function(e){var t=e;t.lngLat=s.getLngLat(),null==i.current.props.onDragStart||i.current.props.onDragStart(t)})),o.on("drag",(function(e){var t=e;t.lngLat=s.getLngLat(),null==i.current.props.onDrag||i.current.props.onDrag(t)})),o.on("dragend",(function(e){var t=e;t.lngLat=s.getLngLat(),null==i.current.props.onDragEnd||i.current.props.onDragEnd(t)})),o}),[]);(0,n.useEffect)((function(){return s.addTo(o.getMap()),function(){s.remove()}}),[]);var u,c,l,f,p,d,m=e.longitude,v=e.latitude,g=e.offset,h=e.style,y=e.draggable,b=void 0!==y&&y,_=e.popup,E=void 0===_?null:_,x=e.rotation,w=void 0===x?0:x,C=e.rotationAlignment,P=void 0===C?"auto":C,O=e.pitchAlignment,j=void 0===O?"auto":O;return(0,n.useEffect)((function(){M(s.getElement(),h)}),[h]),(0,n.useImperativeHandle)(t,(function(){return s}),[]),s.getLngLat().lng===m&&s.getLngLat().lat===v||s.setLngLat([m,v]),g&&(u=s.getOffset(),c=g,l=Array.isArray(u)?u[0]:u?u.x:0,f=Array.isArray(u)?u[1]:u?u.y:0,p=Array.isArray(c)?c[0]:c?c.x:0,d=Array.isArray(c)?c[1]:c?c.y:0,l!==p||f!==d)&&s.setOffset(g),s.isDraggable()!==b&&s.setDraggable(b),s.getRotation()!==w&&s.setRotation(w),s.getRotationAlignment()!==P&&s.setRotationAlignment(P),s.getPitchAlignment()!==j&&s.setPitchAlignment(j),s.getPopup()!==E&&s.setPopup(E),(0,S.createPortal)(e.children,s.getElement())}const T=(0,n.memo)((0,n.forwardRef)(j));function k(e){return new Set(e?e.trim().split(/\s+/):[])}function R(e,t){var r=(0,n.useContext)(L),o=r.map,a=r.mapLib,s=(0,n.useMemo)((function(){return document.createElement("div")}),[]),u=(0,n.useRef)({props:e});u.current.props=e;var c=(0,n.useMemo)((function(){var t=Object.assign({},e),r=new a.Popup(t);return r.setLngLat([e.longitude,e.latitude]),r.once("open",(function(e){null==u.current.props.onOpen||u.current.props.onOpen(e)})),r}),[]);if((0,n.useEffect)((function(){var e=function(e){null==u.current.props.onClose||u.current.props.onClose(e)};return c.on("close",e),c.setDOMContent(s).addTo(o.getMap()),function(){c.off("close",e),c.isOpen()&&c.remove()}}),[]),(0,n.useEffect)((function(){M(c.getElement(),e.style)}),[e.style]),(0,n.useImperativeHandle)(t,(function(){return c}),[]),c.isOpen()&&(c.getLngLat().lng===e.longitude&&c.getLngLat().lat===e.latitude||c.setLngLat([e.longitude,e.latitude]),e.offset&&!i(c.options.offset,e.offset)&&c.setOffset(e.offset),c.options.anchor===e.anchor&&c.options.maxWidth===e.maxWidth||(c.options.anchor=e.anchor,c.setMaxWidth(e.maxWidth)),c.options.className!==e.className)){for(var f,p=k(c.options.className),d=k(e.className),m=(0,l.Z)(p);!(f=m()).done;){var v=f.value;d.has(v)||c.removeClassName(v)}for(var g,h=(0,l.Z)(d);!(g=h()).done;){var y=g.value;p.has(y)||c.addClassName(y)}c.options.className=e.className}return(0,S.createPortal)(e.children,s)}const z=(0,n.memo)((0,n.forwardRef)(R));const Z=function(e,t,r,o){var a=(0,n.useContext)(L),i=(0,n.useMemo)((function(){return e(a)}),[]);return(0,n.useEffect)((function(){var e=o||r||t,n="function"==typeof t&&"function"==typeof r?t:null,s="function"==typeof r?r:"function"==typeof t?t:null,u=a.map;return u.hasControl(i)||(u.addControl(i,null==e?void 0:e.position),n&&n(a)),function(){s&&s(a),u.hasControl(i)&&u.removeControl(i)}}),[]),i};function I(e){var t=Z((function(t){return new t.mapLib.FullscreenControl({container:e.containerId&&document.getElementById(e.containerId)})}),{position:e.position});return(0,n.useEffect)((function(){M(t._controlContainer,e.style)}),[e.style]),null}const A=(0,n.memo)(I);function N(e,t){var r=(0,n.useRef)({props:e}),o=Z((function(t){var n=new t.mapLib.GeolocateControl(e),o=n._setupUI;return n._setupUI=function(e){n._container.hasChildNodes()||o(e)},n.on("geolocate",(function(e){null==r.current.props.onGeolocate||r.current.props.onGeolocate(e)})),n.on("error",(function(e){null==r.current.props.onError||r.current.props.onError(e)})),n.on("outofmaxbounds",(function(e){null==r.current.props.onOutOfMaxBounds||r.current.props.onOutOfMaxBounds(e)})),n.on("trackuserlocationstart",(function(e){null==r.current.props.onTrackUserLocationStart||r.current.props.onTrackUserLocationStart(e)})),n.on("trackuserlocationend",(function(e){null==r.current.props.onTrackUserLocationEnd||r.current.props.onTrackUserLocationEnd(e)})),n}),{position:e.position});return r.current.props=e,(0,n.useImperativeHandle)(t,(function(){return o}),[]),(0,n.useEffect)((function(){M(o._container,e.style)}),[e.style]),null}const D=(0,n.memo)((0,n.forwardRef)(N));function F(e){var t=Z((function(t){return new t.mapLib.NavigationControl(e)}),{position:e.position});return(0,n.useEffect)((function(){M(t._container,e.style)}),[e.style]),null}const U=(0,n.memo)(F);function B(e){var t=Z((function(t){return new t.mapLib.ScaleControl(e)}),{position:e.position}),r=(0,n.useRef)(e),o=r.current;r.current=e;var a=e.style;return void 0!==e.maxWidth&&e.maxWidth!==o.maxWidth&&(t.options.maxWidth=e.maxWidth),void 0!==e.unit&&e.unit!==o.unit&&t.setUnit(e.unit),(0,n.useEffect)((function(){M(t._container,a)}),[a]),null}const W=(0,n.memo)(B);function H(e,t){if(!e)throw new Error(t)}var q=0;const V=function(e){var t=(0,n.useContext)(L).map.getMap(),r=(0,n.useRef)(e),o=(0,n.useState)(0)[1],a=(0,n.useMemo)((function(){return e.id||"jsx-layer-"+q++}),[]);if((0,n.useEffect)((function(){if(t){var e=function(){return o((function(e){return e+1}))};return t.on("styledata",e),e(),function(){t.off("styledata",e),t.style&&t.style._loaded&&t.getLayer(a)&&t.removeLayer(a)}}}),[t]),t&&t.style&&t.getLayer(a))try{!function(e,t,r,n){if(H(r.id===n.id,"layer id changed"),H(r.type===n.type,"layer type changed"),"custom"!==r.type&&"custom"!==n.type){var o=r.layout,a=void 0===o?{}:o,s=r.paint,u=void 0===s?{}:s,c=r.filter,l=r.minzoom,f=r.maxzoom,p=r.beforeId;if(p!==n.beforeId&&e.moveLayer(t,p),a!==n.layout){var d=n.layout||{};for(var m in a)i(a[m],d[m])||e.setLayoutProperty(t,m,a[m]);for(var v in d)a.hasOwnProperty(v)||e.setLayoutProperty(t,v,void 0)}if(u!==n.paint){var g=n.paint||{};for(var h in u)i(u[h],g[h])||e.setPaintProperty(t,h,u[h]);for(var y in g)u.hasOwnProperty(y)||e.setPaintProperty(t,y,void 0)}i(c,n.filter)||e.setFilter(t,c),l===n.minzoom&&f===n.maxzoom||e.setLayerZoomRange(t,l,f)}}(t,a,e,r.current)}catch(s){console.warn(s)}else!function(e,t,r){if(e.style&&e.style._loaded&&(!("source"in r)||e.getSource(r.source))){var n=Object.assign({},r,{id:t});delete n.beforeId,e.addLayer(n,r.beforeId)}}(t,a,e);return r.current=e,null};var G=0;const J=function(e){var t=(0,n.useContext)(L).map.getMap(),r=(0,n.useRef)(e),o=(0,n.useState)(0)[1],a=(0,n.useMemo)((function(){return e.id||"jsx-source-"+G++}),[]);(0,n.useEffect)((function(){if(t){var e=function(){return setTimeout((function(){return o((function(e){return e+1}))}),0)};return t.on("styledata",e),e(),function(){if(t.off("styledata",e),t.style&&t.style._loaded&&t.getSource(a)){var r,n=null==(r=t.getStyle())?void 0:r.layers;if(n)for(var o,i=(0,l.Z)(n);!(o=i()).done;){var s=o.value;s.source===a&&t.removeLayer(s.id)}t.removeSource(a)}}}}),[t]);var s=t&&t.style&&t.getSource(a);return s?function(e,t,r){H(t.id===r.id,"source id changed"),H(t.type===r.type,"source type changed");var n="",o=0;for(var a in t)"children"===a||"id"===a||i(r[a],t[a])||(n=a,o++);if(o){var s=t.type;if("geojson"===s)e.setData(t.data);else if("image"===s)e.updateImage({url:t.url,coordinates:t.coordinates});else if("setCoordinates"in e&&1===o&&"coordinates"===n)e.setCoordinates(t.coordinates);else if("setUrl"in e)switch(n){case"url":e.setUrl(t.url);break;case"tiles":e.setTiles(t.tiles)}else console.warn("Unable to update <Source> prop: "+n)}}(s,e,r.current):s=function(e,t,r){if(e.style&&e.style._loaded){var n=Object.assign({},r);return delete n.id,delete n.children,e.addSource(t,n),e.getSource(t)}return null}(t,a,e),r.current=e,s&&n.Children.map(e.children,(function(e){return e&&(0,n.cloneElement)(e,{source:a})}))||null};var Q=r.e(8539).then(r.t.bind(r,8539,23)),X=n.forwardRef((function(e,t){return P(e,t,Q)})),K=T,Y=z,$=A,ee=U,te=D,re=W,ne=V,oe=J;const ae=X},745:(e,t,r)=>{var n=r(3935);n.createRoot,n.hydrateRoot},1202:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(1002);function o(e){var t=function(e,t){if("object"!==(0,n.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==(0,n.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,n.Z)(t)?t:String(t)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,o(n.key),n)}}function i(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}}}]);