goog.provide('reagent.dom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if((!((reagent.dom.imported == null)))){
return reagent.dom.imported;
} else {
if((typeof ReactDOM !== 'undefined')){
return (reagent.dom.imported = ReactDOM);
} else {
if((typeof require !== 'undefined')){
var or__4126__auto__ = (reagent.dom.imported = require("react-dom"));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module()["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__27297 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__27298 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__27298);

try{return (reagent.dom.module()["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__27299 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__27300 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__27300);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__27299);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__27297);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__27302 = arguments.length;
switch (G__27302) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module()["findDOMNode"])(this$);
});
(reagent.impl.template.find_dom_node = reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__27304_27330 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__27305_27331 = null;
var count__27306_27332 = (0);
var i__27307_27333 = (0);
while(true){
if((i__27307_27333 < count__27306_27332)){
var v_27349 = chunk__27305_27331.cljs$core$IIndexed$_nth$arity$2(null,i__27307_27333);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_27349);


var G__27351 = seq__27304_27330;
var G__27352 = chunk__27305_27331;
var G__27353 = count__27306_27332;
var G__27354 = (i__27307_27333 + (1));
seq__27304_27330 = G__27351;
chunk__27305_27331 = G__27352;
count__27306_27332 = G__27353;
i__27307_27333 = G__27354;
continue;
} else {
var temp__5735__auto___27355 = cljs.core.seq(seq__27304_27330);
if(temp__5735__auto___27355){
var seq__27304_27356__$1 = temp__5735__auto___27355;
if(cljs.core.chunked_seq_QMARK_(seq__27304_27356__$1)){
var c__4556__auto___27357 = cljs.core.chunk_first(seq__27304_27356__$1);
var G__27358 = cljs.core.chunk_rest(seq__27304_27356__$1);
var G__27359 = c__4556__auto___27357;
var G__27360 = cljs.core.count(c__4556__auto___27357);
var G__27361 = (0);
seq__27304_27330 = G__27358;
chunk__27305_27331 = G__27359;
count__27306_27332 = G__27360;
i__27307_27333 = G__27361;
continue;
} else {
var v_27362 = cljs.core.first(seq__27304_27356__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_27362);


var G__27363 = cljs.core.next(seq__27304_27356__$1);
var G__27364 = null;
var G__27365 = (0);
var G__27366 = (0);
seq__27304_27330 = G__27363;
chunk__27305_27331 = G__27364;
count__27306_27332 = G__27365;
i__27307_27333 = G__27366;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=reagent.dom.js.map
