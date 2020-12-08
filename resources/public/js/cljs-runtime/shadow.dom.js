goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33297 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33297(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33309 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33309(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32454 = coll;
var G__32455 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32454,G__32455) : shadow.dom.lazy_native_coll_seq.call(null,G__32454,G__32455));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32481 = arguments.length;
switch (G__32481) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32485 = arguments.length;
switch (G__32485) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32488 = arguments.length;
switch (G__32488) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32504 = arguments.length;
switch (G__32504) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32511 = arguments.length;
switch (G__32511) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32529 = arguments.length;
switch (G__32529) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32530){if((e32530 instanceof Object)){
var e = e32530;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32530;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32541 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32542 = null;
var count__32543 = (0);
var i__32544 = (0);
while(true){
if((i__32544 < count__32543)){
var el = chunk__32542.cljs$core$IIndexed$_nth$arity$2(null,i__32544);
var handler_33337__$1 = ((function (seq__32541,chunk__32542,count__32543,i__32544,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32541,chunk__32542,count__32543,i__32544,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33337__$1);


var G__33339 = seq__32541;
var G__33340 = chunk__32542;
var G__33341 = count__32543;
var G__33342 = (i__32544 + (1));
seq__32541 = G__33339;
chunk__32542 = G__33340;
count__32543 = G__33341;
i__32544 = G__33342;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32541);
if(temp__5735__auto__){
var seq__32541__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32541__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32541__$1);
var G__33344 = cljs.core.chunk_rest(seq__32541__$1);
var G__33345 = c__4556__auto__;
var G__33346 = cljs.core.count(c__4556__auto__);
var G__33347 = (0);
seq__32541 = G__33344;
chunk__32542 = G__33345;
count__32543 = G__33346;
i__32544 = G__33347;
continue;
} else {
var el = cljs.core.first(seq__32541__$1);
var handler_33348__$1 = ((function (seq__32541,chunk__32542,count__32543,i__32544,el,seq__32541__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32541,chunk__32542,count__32543,i__32544,el,seq__32541__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33348__$1);


var G__33350 = cljs.core.next(seq__32541__$1);
var G__33351 = null;
var G__33352 = (0);
var G__33353 = (0);
seq__32541 = G__33350;
chunk__32542 = G__33351;
count__32543 = G__33352;
i__32544 = G__33353;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32566 = arguments.length;
switch (G__32566) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32567 = cljs.core.seq(events);
var chunk__32568 = null;
var count__32569 = (0);
var i__32570 = (0);
while(true){
if((i__32570 < count__32569)){
var vec__32589 = chunk__32568.cljs$core$IIndexed$_nth$arity$2(null,i__32570);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32589,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32589,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33361 = seq__32567;
var G__33362 = chunk__32568;
var G__33363 = count__32569;
var G__33364 = (i__32570 + (1));
seq__32567 = G__33361;
chunk__32568 = G__33362;
count__32569 = G__33363;
i__32570 = G__33364;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32567);
if(temp__5735__auto__){
var seq__32567__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32567__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32567__$1);
var G__33365 = cljs.core.chunk_rest(seq__32567__$1);
var G__33366 = c__4556__auto__;
var G__33367 = cljs.core.count(c__4556__auto__);
var G__33368 = (0);
seq__32567 = G__33365;
chunk__32568 = G__33366;
count__32569 = G__33367;
i__32570 = G__33368;
continue;
} else {
var vec__32592 = cljs.core.first(seq__32567__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32592,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32592,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33370 = cljs.core.next(seq__32567__$1);
var G__33371 = null;
var G__33372 = (0);
var G__33373 = (0);
seq__32567 = G__33370;
chunk__32568 = G__33371;
count__32569 = G__33372;
i__32570 = G__33373;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32595 = cljs.core.seq(styles);
var chunk__32596 = null;
var count__32597 = (0);
var i__32598 = (0);
while(true){
if((i__32598 < count__32597)){
var vec__32605 = chunk__32596.cljs$core$IIndexed$_nth$arity$2(null,i__32598);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32605,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32605,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33374 = seq__32595;
var G__33375 = chunk__32596;
var G__33376 = count__32597;
var G__33377 = (i__32598 + (1));
seq__32595 = G__33374;
chunk__32596 = G__33375;
count__32597 = G__33376;
i__32598 = G__33377;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32595);
if(temp__5735__auto__){
var seq__32595__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32595__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32595__$1);
var G__33379 = cljs.core.chunk_rest(seq__32595__$1);
var G__33380 = c__4556__auto__;
var G__33381 = cljs.core.count(c__4556__auto__);
var G__33382 = (0);
seq__32595 = G__33379;
chunk__32596 = G__33380;
count__32597 = G__33381;
i__32598 = G__33382;
continue;
} else {
var vec__32619 = cljs.core.first(seq__32595__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32619,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32619,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33385 = cljs.core.next(seq__32595__$1);
var G__33386 = null;
var G__33387 = (0);
var G__33388 = (0);
seq__32595 = G__33385;
chunk__32596 = G__33386;
count__32597 = G__33387;
i__32598 = G__33388;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32627_33390 = key;
var G__32627_33391__$1 = (((G__32627_33390 instanceof cljs.core.Keyword))?G__32627_33390.fqn:null);
switch (G__32627_33391__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33398 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33398,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33398,"aria-");
}
})())){
el.setAttribute(ks_33398,value);
} else {
(el[ks_33398] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32668){
var map__32669 = p__32668;
var map__32669__$1 = (((((!((map__32669 == null))))?(((((map__32669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32669):map__32669);
var props = map__32669__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32669__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32671 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32671,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32671,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32671,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32680 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32680,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32680;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32685 = arguments.length;
switch (G__32685) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32714){
var vec__32715 = p__32714;
var seq__32716 = cljs.core.seq(vec__32715);
var first__32717 = cljs.core.first(seq__32716);
var seq__32716__$1 = cljs.core.next(seq__32716);
var nn = first__32717;
var first__32717__$1 = cljs.core.first(seq__32716__$1);
var seq__32716__$2 = cljs.core.next(seq__32716__$1);
var np = first__32717__$1;
var nc = seq__32716__$2;
var node = vec__32715;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32718 = nn;
var G__32719 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32718,G__32719) : create_fn.call(null,G__32718,G__32719));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32720 = nn;
var G__32721 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32720,G__32721) : create_fn.call(null,G__32720,G__32721));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32730 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32730,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32730,(1),null);
var seq__32733_33410 = cljs.core.seq(node_children);
var chunk__32734_33411 = null;
var count__32735_33412 = (0);
var i__32736_33413 = (0);
while(true){
if((i__32736_33413 < count__32735_33412)){
var child_struct_33414 = chunk__32734_33411.cljs$core$IIndexed$_nth$arity$2(null,i__32736_33413);
var children_33415 = shadow.dom.dom_node(child_struct_33414);
if(cljs.core.seq_QMARK_(children_33415)){
var seq__32752_33416 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33415));
var chunk__32754_33417 = null;
var count__32755_33418 = (0);
var i__32756_33419 = (0);
while(true){
if((i__32756_33419 < count__32755_33418)){
var child_33420 = chunk__32754_33417.cljs$core$IIndexed$_nth$arity$2(null,i__32756_33419);
if(cljs.core.truth_(child_33420)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33420);


var G__33421 = seq__32752_33416;
var G__33422 = chunk__32754_33417;
var G__33423 = count__32755_33418;
var G__33424 = (i__32756_33419 + (1));
seq__32752_33416 = G__33421;
chunk__32754_33417 = G__33422;
count__32755_33418 = G__33423;
i__32756_33419 = G__33424;
continue;
} else {
var G__33425 = seq__32752_33416;
var G__33426 = chunk__32754_33417;
var G__33427 = count__32755_33418;
var G__33428 = (i__32756_33419 + (1));
seq__32752_33416 = G__33425;
chunk__32754_33417 = G__33426;
count__32755_33418 = G__33427;
i__32756_33419 = G__33428;
continue;
}
} else {
var temp__5735__auto___33429 = cljs.core.seq(seq__32752_33416);
if(temp__5735__auto___33429){
var seq__32752_33430__$1 = temp__5735__auto___33429;
if(cljs.core.chunked_seq_QMARK_(seq__32752_33430__$1)){
var c__4556__auto___33431 = cljs.core.chunk_first(seq__32752_33430__$1);
var G__33432 = cljs.core.chunk_rest(seq__32752_33430__$1);
var G__33433 = c__4556__auto___33431;
var G__33434 = cljs.core.count(c__4556__auto___33431);
var G__33435 = (0);
seq__32752_33416 = G__33432;
chunk__32754_33417 = G__33433;
count__32755_33418 = G__33434;
i__32756_33419 = G__33435;
continue;
} else {
var child_33436 = cljs.core.first(seq__32752_33430__$1);
if(cljs.core.truth_(child_33436)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33436);


var G__33437 = cljs.core.next(seq__32752_33430__$1);
var G__33438 = null;
var G__33439 = (0);
var G__33440 = (0);
seq__32752_33416 = G__33437;
chunk__32754_33417 = G__33438;
count__32755_33418 = G__33439;
i__32756_33419 = G__33440;
continue;
} else {
var G__33441 = cljs.core.next(seq__32752_33430__$1);
var G__33442 = null;
var G__33443 = (0);
var G__33444 = (0);
seq__32752_33416 = G__33441;
chunk__32754_33417 = G__33442;
count__32755_33418 = G__33443;
i__32756_33419 = G__33444;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33415);
}


var G__33445 = seq__32733_33410;
var G__33446 = chunk__32734_33411;
var G__33447 = count__32735_33412;
var G__33448 = (i__32736_33413 + (1));
seq__32733_33410 = G__33445;
chunk__32734_33411 = G__33446;
count__32735_33412 = G__33447;
i__32736_33413 = G__33448;
continue;
} else {
var temp__5735__auto___33449 = cljs.core.seq(seq__32733_33410);
if(temp__5735__auto___33449){
var seq__32733_33450__$1 = temp__5735__auto___33449;
if(cljs.core.chunked_seq_QMARK_(seq__32733_33450__$1)){
var c__4556__auto___33451 = cljs.core.chunk_first(seq__32733_33450__$1);
var G__33452 = cljs.core.chunk_rest(seq__32733_33450__$1);
var G__33453 = c__4556__auto___33451;
var G__33454 = cljs.core.count(c__4556__auto___33451);
var G__33455 = (0);
seq__32733_33410 = G__33452;
chunk__32734_33411 = G__33453;
count__32735_33412 = G__33454;
i__32736_33413 = G__33455;
continue;
} else {
var child_struct_33456 = cljs.core.first(seq__32733_33450__$1);
var children_33457 = shadow.dom.dom_node(child_struct_33456);
if(cljs.core.seq_QMARK_(children_33457)){
var seq__32772_33458 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33457));
var chunk__32774_33459 = null;
var count__32775_33460 = (0);
var i__32776_33461 = (0);
while(true){
if((i__32776_33461 < count__32775_33460)){
var child_33462 = chunk__32774_33459.cljs$core$IIndexed$_nth$arity$2(null,i__32776_33461);
if(cljs.core.truth_(child_33462)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33462);


var G__33463 = seq__32772_33458;
var G__33464 = chunk__32774_33459;
var G__33465 = count__32775_33460;
var G__33466 = (i__32776_33461 + (1));
seq__32772_33458 = G__33463;
chunk__32774_33459 = G__33464;
count__32775_33460 = G__33465;
i__32776_33461 = G__33466;
continue;
} else {
var G__33467 = seq__32772_33458;
var G__33468 = chunk__32774_33459;
var G__33469 = count__32775_33460;
var G__33470 = (i__32776_33461 + (1));
seq__32772_33458 = G__33467;
chunk__32774_33459 = G__33468;
count__32775_33460 = G__33469;
i__32776_33461 = G__33470;
continue;
}
} else {
var temp__5735__auto___33471__$1 = cljs.core.seq(seq__32772_33458);
if(temp__5735__auto___33471__$1){
var seq__32772_33472__$1 = temp__5735__auto___33471__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32772_33472__$1)){
var c__4556__auto___33473 = cljs.core.chunk_first(seq__32772_33472__$1);
var G__33474 = cljs.core.chunk_rest(seq__32772_33472__$1);
var G__33475 = c__4556__auto___33473;
var G__33476 = cljs.core.count(c__4556__auto___33473);
var G__33477 = (0);
seq__32772_33458 = G__33474;
chunk__32774_33459 = G__33475;
count__32775_33460 = G__33476;
i__32776_33461 = G__33477;
continue;
} else {
var child_33478 = cljs.core.first(seq__32772_33472__$1);
if(cljs.core.truth_(child_33478)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33478);


var G__33479 = cljs.core.next(seq__32772_33472__$1);
var G__33480 = null;
var G__33481 = (0);
var G__33482 = (0);
seq__32772_33458 = G__33479;
chunk__32774_33459 = G__33480;
count__32775_33460 = G__33481;
i__32776_33461 = G__33482;
continue;
} else {
var G__33483 = cljs.core.next(seq__32772_33472__$1);
var G__33484 = null;
var G__33485 = (0);
var G__33486 = (0);
seq__32772_33458 = G__33483;
chunk__32774_33459 = G__33484;
count__32775_33460 = G__33485;
i__32776_33461 = G__33486;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33457);
}


var G__33487 = cljs.core.next(seq__32733_33450__$1);
var G__33488 = null;
var G__33489 = (0);
var G__33490 = (0);
seq__32733_33410 = G__33487;
chunk__32734_33411 = G__33488;
count__32735_33412 = G__33489;
i__32736_33413 = G__33490;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32837 = cljs.core.seq(node);
var chunk__32838 = null;
var count__32839 = (0);
var i__32840 = (0);
while(true){
if((i__32840 < count__32839)){
var n = chunk__32838.cljs$core$IIndexed$_nth$arity$2(null,i__32840);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33491 = seq__32837;
var G__33492 = chunk__32838;
var G__33493 = count__32839;
var G__33494 = (i__32840 + (1));
seq__32837 = G__33491;
chunk__32838 = G__33492;
count__32839 = G__33493;
i__32840 = G__33494;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32837);
if(temp__5735__auto__){
var seq__32837__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32837__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32837__$1);
var G__33495 = cljs.core.chunk_rest(seq__32837__$1);
var G__33496 = c__4556__auto__;
var G__33497 = cljs.core.count(c__4556__auto__);
var G__33498 = (0);
seq__32837 = G__33495;
chunk__32838 = G__33496;
count__32839 = G__33497;
i__32840 = G__33498;
continue;
} else {
var n = cljs.core.first(seq__32837__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33499 = cljs.core.next(seq__32837__$1);
var G__33500 = null;
var G__33501 = (0);
var G__33502 = (0);
seq__32837 = G__33499;
chunk__32838 = G__33500;
count__32839 = G__33501;
i__32840 = G__33502;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32860 = arguments.length;
switch (G__32860) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32862 = arguments.length;
switch (G__32862) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32864 = arguments.length;
switch (G__32864) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33506 = arguments.length;
var i__4737__auto___33507 = (0);
while(true){
if((i__4737__auto___33507 < len__4736__auto___33506)){
args__4742__auto__.push((arguments[i__4737__auto___33507]));

var G__33508 = (i__4737__auto___33507 + (1));
i__4737__auto___33507 = G__33508;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32879_33509 = cljs.core.seq(nodes);
var chunk__32880_33510 = null;
var count__32881_33511 = (0);
var i__32882_33512 = (0);
while(true){
if((i__32882_33512 < count__32881_33511)){
var node_33513 = chunk__32880_33510.cljs$core$IIndexed$_nth$arity$2(null,i__32882_33512);
fragment.appendChild(shadow.dom._to_dom(node_33513));


var G__33514 = seq__32879_33509;
var G__33515 = chunk__32880_33510;
var G__33516 = count__32881_33511;
var G__33517 = (i__32882_33512 + (1));
seq__32879_33509 = G__33514;
chunk__32880_33510 = G__33515;
count__32881_33511 = G__33516;
i__32882_33512 = G__33517;
continue;
} else {
var temp__5735__auto___33518 = cljs.core.seq(seq__32879_33509);
if(temp__5735__auto___33518){
var seq__32879_33519__$1 = temp__5735__auto___33518;
if(cljs.core.chunked_seq_QMARK_(seq__32879_33519__$1)){
var c__4556__auto___33520 = cljs.core.chunk_first(seq__32879_33519__$1);
var G__33521 = cljs.core.chunk_rest(seq__32879_33519__$1);
var G__33522 = c__4556__auto___33520;
var G__33523 = cljs.core.count(c__4556__auto___33520);
var G__33524 = (0);
seq__32879_33509 = G__33521;
chunk__32880_33510 = G__33522;
count__32881_33511 = G__33523;
i__32882_33512 = G__33524;
continue;
} else {
var node_33525 = cljs.core.first(seq__32879_33519__$1);
fragment.appendChild(shadow.dom._to_dom(node_33525));


var G__33526 = cljs.core.next(seq__32879_33519__$1);
var G__33527 = null;
var G__33528 = (0);
var G__33529 = (0);
seq__32879_33509 = G__33526;
chunk__32880_33510 = G__33527;
count__32881_33511 = G__33528;
i__32882_33512 = G__33529;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32878){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32878));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32895_33530 = cljs.core.seq(scripts);
var chunk__32896_33531 = null;
var count__32897_33532 = (0);
var i__32898_33533 = (0);
while(true){
if((i__32898_33533 < count__32897_33532)){
var vec__32905_33534 = chunk__32896_33531.cljs$core$IIndexed$_nth$arity$2(null,i__32898_33533);
var script_tag_33535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32905_33534,(0),null);
var script_body_33536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32905_33534,(1),null);
eval(script_body_33536);


var G__33537 = seq__32895_33530;
var G__33538 = chunk__32896_33531;
var G__33539 = count__32897_33532;
var G__33540 = (i__32898_33533 + (1));
seq__32895_33530 = G__33537;
chunk__32896_33531 = G__33538;
count__32897_33532 = G__33539;
i__32898_33533 = G__33540;
continue;
} else {
var temp__5735__auto___33541 = cljs.core.seq(seq__32895_33530);
if(temp__5735__auto___33541){
var seq__32895_33542__$1 = temp__5735__auto___33541;
if(cljs.core.chunked_seq_QMARK_(seq__32895_33542__$1)){
var c__4556__auto___33543 = cljs.core.chunk_first(seq__32895_33542__$1);
var G__33544 = cljs.core.chunk_rest(seq__32895_33542__$1);
var G__33545 = c__4556__auto___33543;
var G__33546 = cljs.core.count(c__4556__auto___33543);
var G__33547 = (0);
seq__32895_33530 = G__33544;
chunk__32896_33531 = G__33545;
count__32897_33532 = G__33546;
i__32898_33533 = G__33547;
continue;
} else {
var vec__32908_33548 = cljs.core.first(seq__32895_33542__$1);
var script_tag_33549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32908_33548,(0),null);
var script_body_33550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32908_33548,(1),null);
eval(script_body_33550);


var G__33551 = cljs.core.next(seq__32895_33542__$1);
var G__33552 = null;
var G__33553 = (0);
var G__33554 = (0);
seq__32895_33530 = G__33551;
chunk__32896_33531 = G__33552;
count__32897_33532 = G__33553;
i__32898_33533 = G__33554;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32914){
var vec__32915 = p__32914;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32915,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32915,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32923 = arguments.length;
switch (G__32923) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32933 = cljs.core.seq(style_keys);
var chunk__32934 = null;
var count__32935 = (0);
var i__32936 = (0);
while(true){
if((i__32936 < count__32935)){
var it = chunk__32934.cljs$core$IIndexed$_nth$arity$2(null,i__32936);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33556 = seq__32933;
var G__33557 = chunk__32934;
var G__33558 = count__32935;
var G__33559 = (i__32936 + (1));
seq__32933 = G__33556;
chunk__32934 = G__33557;
count__32935 = G__33558;
i__32936 = G__33559;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32933);
if(temp__5735__auto__){
var seq__32933__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32933__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32933__$1);
var G__33560 = cljs.core.chunk_rest(seq__32933__$1);
var G__33561 = c__4556__auto__;
var G__33562 = cljs.core.count(c__4556__auto__);
var G__33563 = (0);
seq__32933 = G__33560;
chunk__32934 = G__33561;
count__32935 = G__33562;
i__32936 = G__33563;
continue;
} else {
var it = cljs.core.first(seq__32933__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33564 = cljs.core.next(seq__32933__$1);
var G__33565 = null;
var G__33566 = (0);
var G__33567 = (0);
seq__32933 = G__33564;
chunk__32934 = G__33565;
count__32935 = G__33566;
i__32936 = G__33567;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32946,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32955 = k32946;
var G__32955__$1 = (((G__32955 instanceof cljs.core.Keyword))?G__32955.fqn:null);
switch (G__32955__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32946,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32961){
var vec__32962 = p__32961;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32962,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32962,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32945){
var self__ = this;
var G__32945__$1 = this;
return (new cljs.core.RecordIter((0),G__32945__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32947,other32948){
var self__ = this;
var this32947__$1 = this;
return (((!((other32948 == null)))) && ((this32947__$1.constructor === other32948.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32947__$1.x,other32948.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32947__$1.y,other32948.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32947__$1.__extmap,other32948.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32945){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32984 = cljs.core.keyword_identical_QMARK_;
var expr__32985 = k__4388__auto__;
if(cljs.core.truth_((pred__32984.cljs$core$IFn$_invoke$arity$2 ? pred__32984.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32985) : pred__32984.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32985)))){
return (new shadow.dom.Coordinate(G__32945,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32984.cljs$core$IFn$_invoke$arity$2 ? pred__32984.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32985) : pred__32984.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32985)))){
return (new shadow.dom.Coordinate(self__.x,G__32945,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32945),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32945){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32945,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32949){
var extmap__4419__auto__ = (function (){var G__32993 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32949,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32949)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32993);
} else {
return G__32993;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32949),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32949),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32999,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33006 = k32999;
var G__33006__$1 = (((G__33006 instanceof cljs.core.Keyword))?G__33006.fqn:null);
switch (G__33006__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32999,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33007){
var vec__33008 = p__33007;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33008,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33008,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32998){
var self__ = this;
var G__32998__$1 = this;
return (new cljs.core.RecordIter((0),G__32998__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33000,other33001){
var self__ = this;
var this33000__$1 = this;
return (((!((other33001 == null)))) && ((this33000__$1.constructor === other33001.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33000__$1.w,other33001.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33000__$1.h,other33001.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33000__$1.__extmap,other33001.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32998){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33014 = cljs.core.keyword_identical_QMARK_;
var expr__33015 = k__4388__auto__;
if(cljs.core.truth_((pred__33014.cljs$core$IFn$_invoke$arity$2 ? pred__33014.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33015) : pred__33014.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33015)))){
return (new shadow.dom.Size(G__32998,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33014.cljs$core$IFn$_invoke$arity$2 ? pred__33014.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33015) : pred__33014.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33015)))){
return (new shadow.dom.Size(self__.w,G__32998,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32998),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32998){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32998,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33002){
var extmap__4419__auto__ = (function (){var G__33034 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33002,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33002)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33034);
} else {
return G__33034;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33002),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33002),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__33577 = (i + (1));
var G__33578 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33577;
ret = G__33578;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33063){
var vec__33064 = p__33063;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33064,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33064,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33068 = arguments.length;
switch (G__33068) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33587 = ps;
var G__33588 = (i + (1));
el__$1 = G__33587;
i = G__33588;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33086 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33086,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33086,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33086,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33093_33591 = cljs.core.seq(props);
var chunk__33094_33592 = null;
var count__33095_33593 = (0);
var i__33096_33594 = (0);
while(true){
if((i__33096_33594 < count__33095_33593)){
var vec__33108_33595 = chunk__33094_33592.cljs$core$IIndexed$_nth$arity$2(null,i__33096_33594);
var k_33596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33108_33595,(0),null);
var v_33597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33108_33595,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33596);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33596),v_33597);


var G__33598 = seq__33093_33591;
var G__33599 = chunk__33094_33592;
var G__33600 = count__33095_33593;
var G__33601 = (i__33096_33594 + (1));
seq__33093_33591 = G__33598;
chunk__33094_33592 = G__33599;
count__33095_33593 = G__33600;
i__33096_33594 = G__33601;
continue;
} else {
var temp__5735__auto___33602 = cljs.core.seq(seq__33093_33591);
if(temp__5735__auto___33602){
var seq__33093_33610__$1 = temp__5735__auto___33602;
if(cljs.core.chunked_seq_QMARK_(seq__33093_33610__$1)){
var c__4556__auto___33611 = cljs.core.chunk_first(seq__33093_33610__$1);
var G__33612 = cljs.core.chunk_rest(seq__33093_33610__$1);
var G__33613 = c__4556__auto___33611;
var G__33614 = cljs.core.count(c__4556__auto___33611);
var G__33615 = (0);
seq__33093_33591 = G__33612;
chunk__33094_33592 = G__33613;
count__33095_33593 = G__33614;
i__33096_33594 = G__33615;
continue;
} else {
var vec__33111_33616 = cljs.core.first(seq__33093_33610__$1);
var k_33617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33111_33616,(0),null);
var v_33618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33111_33616,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33617);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33617),v_33618);


var G__33619 = cljs.core.next(seq__33093_33610__$1);
var G__33620 = null;
var G__33621 = (0);
var G__33622 = (0);
seq__33093_33591 = G__33619;
chunk__33094_33592 = G__33620;
count__33095_33593 = G__33621;
i__33096_33594 = G__33622;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33130 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33130,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33130,(1),null);
var seq__33133_33623 = cljs.core.seq(node_children);
var chunk__33135_33624 = null;
var count__33136_33625 = (0);
var i__33137_33626 = (0);
while(true){
if((i__33137_33626 < count__33136_33625)){
var child_struct_33627 = chunk__33135_33624.cljs$core$IIndexed$_nth$arity$2(null,i__33137_33626);
if((!((child_struct_33627 == null)))){
if(typeof child_struct_33627 === 'string'){
var text_33628 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33628),child_struct_33627].join(''));
} else {
var children_33629 = shadow.dom.svg_node(child_struct_33627);
if(cljs.core.seq_QMARK_(children_33629)){
var seq__33164_33630 = cljs.core.seq(children_33629);
var chunk__33166_33631 = null;
var count__33167_33632 = (0);
var i__33168_33633 = (0);
while(true){
if((i__33168_33633 < count__33167_33632)){
var child_33634 = chunk__33166_33631.cljs$core$IIndexed$_nth$arity$2(null,i__33168_33633);
if(cljs.core.truth_(child_33634)){
node.appendChild(child_33634);


var G__33635 = seq__33164_33630;
var G__33636 = chunk__33166_33631;
var G__33637 = count__33167_33632;
var G__33638 = (i__33168_33633 + (1));
seq__33164_33630 = G__33635;
chunk__33166_33631 = G__33636;
count__33167_33632 = G__33637;
i__33168_33633 = G__33638;
continue;
} else {
var G__33639 = seq__33164_33630;
var G__33640 = chunk__33166_33631;
var G__33641 = count__33167_33632;
var G__33642 = (i__33168_33633 + (1));
seq__33164_33630 = G__33639;
chunk__33166_33631 = G__33640;
count__33167_33632 = G__33641;
i__33168_33633 = G__33642;
continue;
}
} else {
var temp__5735__auto___33643 = cljs.core.seq(seq__33164_33630);
if(temp__5735__auto___33643){
var seq__33164_33644__$1 = temp__5735__auto___33643;
if(cljs.core.chunked_seq_QMARK_(seq__33164_33644__$1)){
var c__4556__auto___33645 = cljs.core.chunk_first(seq__33164_33644__$1);
var G__33646 = cljs.core.chunk_rest(seq__33164_33644__$1);
var G__33647 = c__4556__auto___33645;
var G__33648 = cljs.core.count(c__4556__auto___33645);
var G__33649 = (0);
seq__33164_33630 = G__33646;
chunk__33166_33631 = G__33647;
count__33167_33632 = G__33648;
i__33168_33633 = G__33649;
continue;
} else {
var child_33650 = cljs.core.first(seq__33164_33644__$1);
if(cljs.core.truth_(child_33650)){
node.appendChild(child_33650);


var G__33651 = cljs.core.next(seq__33164_33644__$1);
var G__33652 = null;
var G__33653 = (0);
var G__33654 = (0);
seq__33164_33630 = G__33651;
chunk__33166_33631 = G__33652;
count__33167_33632 = G__33653;
i__33168_33633 = G__33654;
continue;
} else {
var G__33655 = cljs.core.next(seq__33164_33644__$1);
var G__33656 = null;
var G__33657 = (0);
var G__33658 = (0);
seq__33164_33630 = G__33655;
chunk__33166_33631 = G__33656;
count__33167_33632 = G__33657;
i__33168_33633 = G__33658;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33629);
}
}


var G__33659 = seq__33133_33623;
var G__33660 = chunk__33135_33624;
var G__33661 = count__33136_33625;
var G__33662 = (i__33137_33626 + (1));
seq__33133_33623 = G__33659;
chunk__33135_33624 = G__33660;
count__33136_33625 = G__33661;
i__33137_33626 = G__33662;
continue;
} else {
var G__33663 = seq__33133_33623;
var G__33664 = chunk__33135_33624;
var G__33665 = count__33136_33625;
var G__33666 = (i__33137_33626 + (1));
seq__33133_33623 = G__33663;
chunk__33135_33624 = G__33664;
count__33136_33625 = G__33665;
i__33137_33626 = G__33666;
continue;
}
} else {
var temp__5735__auto___33667 = cljs.core.seq(seq__33133_33623);
if(temp__5735__auto___33667){
var seq__33133_33668__$1 = temp__5735__auto___33667;
if(cljs.core.chunked_seq_QMARK_(seq__33133_33668__$1)){
var c__4556__auto___33669 = cljs.core.chunk_first(seq__33133_33668__$1);
var G__33670 = cljs.core.chunk_rest(seq__33133_33668__$1);
var G__33671 = c__4556__auto___33669;
var G__33672 = cljs.core.count(c__4556__auto___33669);
var G__33673 = (0);
seq__33133_33623 = G__33670;
chunk__33135_33624 = G__33671;
count__33136_33625 = G__33672;
i__33137_33626 = G__33673;
continue;
} else {
var child_struct_33674 = cljs.core.first(seq__33133_33668__$1);
if((!((child_struct_33674 == null)))){
if(typeof child_struct_33674 === 'string'){
var text_33675 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33675),child_struct_33674].join(''));
} else {
var children_33676 = shadow.dom.svg_node(child_struct_33674);
if(cljs.core.seq_QMARK_(children_33676)){
var seq__33174_33677 = cljs.core.seq(children_33676);
var chunk__33176_33678 = null;
var count__33177_33679 = (0);
var i__33178_33680 = (0);
while(true){
if((i__33178_33680 < count__33177_33679)){
var child_33681 = chunk__33176_33678.cljs$core$IIndexed$_nth$arity$2(null,i__33178_33680);
if(cljs.core.truth_(child_33681)){
node.appendChild(child_33681);


var G__33682 = seq__33174_33677;
var G__33683 = chunk__33176_33678;
var G__33684 = count__33177_33679;
var G__33685 = (i__33178_33680 + (1));
seq__33174_33677 = G__33682;
chunk__33176_33678 = G__33683;
count__33177_33679 = G__33684;
i__33178_33680 = G__33685;
continue;
} else {
var G__33686 = seq__33174_33677;
var G__33687 = chunk__33176_33678;
var G__33688 = count__33177_33679;
var G__33689 = (i__33178_33680 + (1));
seq__33174_33677 = G__33686;
chunk__33176_33678 = G__33687;
count__33177_33679 = G__33688;
i__33178_33680 = G__33689;
continue;
}
} else {
var temp__5735__auto___33690__$1 = cljs.core.seq(seq__33174_33677);
if(temp__5735__auto___33690__$1){
var seq__33174_33691__$1 = temp__5735__auto___33690__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33174_33691__$1)){
var c__4556__auto___33692 = cljs.core.chunk_first(seq__33174_33691__$1);
var G__33693 = cljs.core.chunk_rest(seq__33174_33691__$1);
var G__33694 = c__4556__auto___33692;
var G__33695 = cljs.core.count(c__4556__auto___33692);
var G__33696 = (0);
seq__33174_33677 = G__33693;
chunk__33176_33678 = G__33694;
count__33177_33679 = G__33695;
i__33178_33680 = G__33696;
continue;
} else {
var child_33697 = cljs.core.first(seq__33174_33691__$1);
if(cljs.core.truth_(child_33697)){
node.appendChild(child_33697);


var G__33698 = cljs.core.next(seq__33174_33691__$1);
var G__33699 = null;
var G__33700 = (0);
var G__33701 = (0);
seq__33174_33677 = G__33698;
chunk__33176_33678 = G__33699;
count__33177_33679 = G__33700;
i__33178_33680 = G__33701;
continue;
} else {
var G__33706 = cljs.core.next(seq__33174_33691__$1);
var G__33707 = null;
var G__33708 = (0);
var G__33709 = (0);
seq__33174_33677 = G__33706;
chunk__33176_33678 = G__33707;
count__33177_33679 = G__33708;
i__33178_33680 = G__33709;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33676);
}
}


var G__33710 = cljs.core.next(seq__33133_33668__$1);
var G__33711 = null;
var G__33712 = (0);
var G__33713 = (0);
seq__33133_33623 = G__33710;
chunk__33135_33624 = G__33711;
count__33136_33625 = G__33712;
i__33137_33626 = G__33713;
continue;
} else {
var G__33714 = cljs.core.next(seq__33133_33668__$1);
var G__33715 = null;
var G__33716 = (0);
var G__33717 = (0);
seq__33133_33623 = G__33714;
chunk__33135_33624 = G__33715;
count__33136_33625 = G__33716;
i__33137_33626 = G__33717;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33718 = arguments.length;
var i__4737__auto___33719 = (0);
while(true){
if((i__4737__auto___33719 < len__4736__auto___33718)){
args__4742__auto__.push((arguments[i__4737__auto___33719]));

var G__33720 = (i__4737__auto___33719 + (1));
i__4737__auto___33719 = G__33720;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33193){
var G__33194 = cljs.core.first(seq33193);
var seq33193__$1 = cljs.core.next(seq33193);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33194,seq33193__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33239 = arguments.length;
switch (G__33239) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__30127__auto___33722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_33254){
var state_val_33255 = (state_33254[(1)]);
if((state_val_33255 === (1))){
var state_33254__$1 = state_33254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33254__$1,(2),once_or_cleanup);
} else {
if((state_val_33255 === (2))){
var inst_33251 = (state_33254[(2)]);
var inst_33252 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33254__$1 = (function (){var statearr_33259 = state_33254;
(statearr_33259[(7)] = inst_33251);

return statearr_33259;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33254__$1,inst_33252);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29937__auto__ = null;
var shadow$dom$state_machine__29937__auto____0 = (function (){
var statearr_33261 = [null,null,null,null,null,null,null,null];
(statearr_33261[(0)] = shadow$dom$state_machine__29937__auto__);

(statearr_33261[(1)] = (1));

return statearr_33261;
});
var shadow$dom$state_machine__29937__auto____1 = (function (state_33254){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_33254);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e33274){var ex__29940__auto__ = e33274;
var statearr_33275_33726 = state_33254;
(statearr_33275_33726[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_33254[(4)]))){
var statearr_33278_33727 = state_33254;
(statearr_33278_33727[(1)] = cljs.core.first((state_33254[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33728 = state_33254;
state_33254 = G__33728;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
shadow$dom$state_machine__29937__auto__ = function(state_33254){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29937__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29937__auto____1.call(this,state_33254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29937__auto____0;
shadow$dom$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29937__auto____1;
return shadow$dom$state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_33285 = f__30128__auto__();
(statearr_33285[(6)] = c__30127__auto___33722);

return statearr_33285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
