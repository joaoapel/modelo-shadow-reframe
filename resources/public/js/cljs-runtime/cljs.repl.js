goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36298){
var map__36299 = p__36298;
var map__36299__$1 = (((((!((map__36299 == null))))?(((((map__36299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36299):map__36299);
var m = map__36299__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36299__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36299__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36302_36515 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36303_36516 = null;
var count__36304_36517 = (0);
var i__36305_36518 = (0);
while(true){
if((i__36305_36518 < count__36304_36517)){
var f_36519 = chunk__36303_36516.cljs$core$IIndexed$_nth$arity$2(null,i__36305_36518);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36519], 0));


var G__36520 = seq__36302_36515;
var G__36521 = chunk__36303_36516;
var G__36522 = count__36304_36517;
var G__36523 = (i__36305_36518 + (1));
seq__36302_36515 = G__36520;
chunk__36303_36516 = G__36521;
count__36304_36517 = G__36522;
i__36305_36518 = G__36523;
continue;
} else {
var temp__5735__auto___36524 = cljs.core.seq(seq__36302_36515);
if(temp__5735__auto___36524){
var seq__36302_36525__$1 = temp__5735__auto___36524;
if(cljs.core.chunked_seq_QMARK_(seq__36302_36525__$1)){
var c__4556__auto___36528 = cljs.core.chunk_first(seq__36302_36525__$1);
var G__36529 = cljs.core.chunk_rest(seq__36302_36525__$1);
var G__36530 = c__4556__auto___36528;
var G__36531 = cljs.core.count(c__4556__auto___36528);
var G__36532 = (0);
seq__36302_36515 = G__36529;
chunk__36303_36516 = G__36530;
count__36304_36517 = G__36531;
i__36305_36518 = G__36532;
continue;
} else {
var f_36535 = cljs.core.first(seq__36302_36525__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36535], 0));


var G__36536 = cljs.core.next(seq__36302_36525__$1);
var G__36537 = null;
var G__36538 = (0);
var G__36539 = (0);
seq__36302_36515 = G__36536;
chunk__36303_36516 = G__36537;
count__36304_36517 = G__36538;
i__36305_36518 = G__36539;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36540 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36540], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36540)))?cljs.core.second(arglists_36540):arglists_36540)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36310_36545 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36311_36546 = null;
var count__36312_36547 = (0);
var i__36313_36548 = (0);
while(true){
if((i__36313_36548 < count__36312_36547)){
var vec__36326_36549 = chunk__36311_36546.cljs$core$IIndexed$_nth$arity$2(null,i__36313_36548);
var name_36550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36326_36549,(0),null);
var map__36329_36551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36326_36549,(1),null);
var map__36329_36552__$1 = (((((!((map__36329_36551 == null))))?(((((map__36329_36551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36329_36551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36329_36551):map__36329_36551);
var doc_36553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36329_36552__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36329_36552__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36550], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36554], 0));

if(cljs.core.truth_(doc_36553)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36553], 0));
} else {
}


var G__36555 = seq__36310_36545;
var G__36556 = chunk__36311_36546;
var G__36557 = count__36312_36547;
var G__36558 = (i__36313_36548 + (1));
seq__36310_36545 = G__36555;
chunk__36311_36546 = G__36556;
count__36312_36547 = G__36557;
i__36313_36548 = G__36558;
continue;
} else {
var temp__5735__auto___36559 = cljs.core.seq(seq__36310_36545);
if(temp__5735__auto___36559){
var seq__36310_36560__$1 = temp__5735__auto___36559;
if(cljs.core.chunked_seq_QMARK_(seq__36310_36560__$1)){
var c__4556__auto___36561 = cljs.core.chunk_first(seq__36310_36560__$1);
var G__36562 = cljs.core.chunk_rest(seq__36310_36560__$1);
var G__36563 = c__4556__auto___36561;
var G__36564 = cljs.core.count(c__4556__auto___36561);
var G__36565 = (0);
seq__36310_36545 = G__36562;
chunk__36311_36546 = G__36563;
count__36312_36547 = G__36564;
i__36313_36548 = G__36565;
continue;
} else {
var vec__36331_36566 = cljs.core.first(seq__36310_36560__$1);
var name_36567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36331_36566,(0),null);
var map__36334_36568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36331_36566,(1),null);
var map__36334_36569__$1 = (((((!((map__36334_36568 == null))))?(((((map__36334_36568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36334_36568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36334_36568):map__36334_36568);
var doc_36570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36334_36569__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36334_36569__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36567], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36571], 0));

if(cljs.core.truth_(doc_36570)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36570], 0));
} else {
}


var G__36572 = cljs.core.next(seq__36310_36560__$1);
var G__36573 = null;
var G__36574 = (0);
var G__36575 = (0);
seq__36310_36545 = G__36572;
chunk__36311_36546 = G__36573;
count__36312_36547 = G__36574;
i__36313_36548 = G__36575;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36338 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36339 = null;
var count__36340 = (0);
var i__36341 = (0);
while(true){
if((i__36341 < count__36340)){
var role = chunk__36339.cljs$core$IIndexed$_nth$arity$2(null,i__36341);
var temp__5735__auto___36576__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36576__$1)){
var spec_36577 = temp__5735__auto___36576__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36577)], 0));
} else {
}


var G__36578 = seq__36338;
var G__36579 = chunk__36339;
var G__36580 = count__36340;
var G__36581 = (i__36341 + (1));
seq__36338 = G__36578;
chunk__36339 = G__36579;
count__36340 = G__36580;
i__36341 = G__36581;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36338);
if(temp__5735__auto____$1){
var seq__36338__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36338__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36338__$1);
var G__36582 = cljs.core.chunk_rest(seq__36338__$1);
var G__36583 = c__4556__auto__;
var G__36584 = cljs.core.count(c__4556__auto__);
var G__36585 = (0);
seq__36338 = G__36582;
chunk__36339 = G__36583;
count__36340 = G__36584;
i__36341 = G__36585;
continue;
} else {
var role = cljs.core.first(seq__36338__$1);
var temp__5735__auto___36586__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36586__$2)){
var spec_36587 = temp__5735__auto___36586__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36587)], 0));
} else {
}


var G__36588 = cljs.core.next(seq__36338__$1);
var G__36589 = null;
var G__36590 = (0);
var G__36591 = (0);
seq__36338 = G__36588;
chunk__36339 = G__36589;
count__36340 = G__36590;
i__36341 = G__36591;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36593 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36594 = cljs.core.ex_cause(t);
via = G__36593;
t = G__36594;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36355 = datafied_throwable;
var map__36355__$1 = (((((!((map__36355 == null))))?(((((map__36355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36355):map__36355);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36355__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36355__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36355__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36356 = cljs.core.last(via);
var map__36356__$1 = (((((!((map__36356 == null))))?(((((map__36356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36356):map__36356);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36356__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36356__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36356__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36357 = data;
var map__36357__$1 = (((((!((map__36357 == null))))?(((((map__36357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36357):map__36357);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36357__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36357__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36357__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36358 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36358__$1 = (((((!((map__36358 == null))))?(((((map__36358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36358):map__36358);
var top_data = map__36358__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36358__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36383 = phase;
var G__36383__$1 = (((G__36383 instanceof cljs.core.Keyword))?G__36383.fqn:null);
switch (G__36383__$1) {
case "read-source":
var map__36391 = data;
var map__36391__$1 = (((((!((map__36391 == null))))?(((((map__36391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36391):map__36391);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36391__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36391__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36396 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36396__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36396,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36396);
var G__36396__$2 = (cljs.core.truth_((function (){var fexpr__36405 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36405.cljs$core$IFn$_invoke$arity$1 ? fexpr__36405.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36405.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36396__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36396__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36396__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36396__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36413 = top_data;
var G__36413__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36413,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36413);
var G__36413__$2 = (cljs.core.truth_((function (){var fexpr__36423 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36423.cljs$core$IFn$_invoke$arity$1 ? fexpr__36423.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36423.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36413__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36413__$1);
var G__36413__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36413__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36413__$2);
var G__36413__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36413__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36413__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36413__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36413__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36424 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36424,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36424,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36424,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36424,(3),null);
var G__36427 = top_data;
var G__36427__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36427,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36427);
var G__36427__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36427__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36427__$1);
var G__36427__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36427__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36427__$2);
var G__36427__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36427__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36427__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36427__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36427__$4;
}

break;
case "execution":
var vec__36440 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36440,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36440,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36440,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36440,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36346_SHARP_){
var or__4126__auto__ = (p1__36346_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__36453 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36453.cljs$core$IFn$_invoke$arity$1 ? fexpr__36453.cljs$core$IFn$_invoke$arity$1(p1__36346_SHARP_) : fexpr__36453.call(null,p1__36346_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36462 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36462__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36462,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36462);
var G__36462__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36462__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36462__$1);
var G__36462__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36462__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36462__$2);
var G__36462__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36462__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36462__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36462__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36462__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36383__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36471){
var map__36472 = p__36471;
var map__36472__$1 = (((((!((map__36472 == null))))?(((((map__36472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36472):map__36472);
var triage_data = map__36472__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36472__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36472__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36472__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36472__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36472__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36472__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36472__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36472__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36475 = phase;
var G__36475__$1 = (((G__36475 instanceof cljs.core.Keyword))?G__36475.fqn:null);
switch (G__36475__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36476 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36477 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36478 = loc;
var G__36479 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36480_36599 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36481_36600 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36482_36601 = true;
var _STAR_print_fn_STAR__temp_val__36483_36602 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36482_36601);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36483_36602);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36468_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36468_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36481_36600);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36480_36599);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36476,G__36477,G__36478,G__36479) : format.call(null,G__36476,G__36477,G__36478,G__36479));

break;
case "macroexpansion":
var G__36485 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36486 = cause_type;
var G__36487 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36488 = loc;
var G__36489 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36485,G__36486,G__36487,G__36488,G__36489) : format.call(null,G__36485,G__36486,G__36487,G__36488,G__36489));

break;
case "compile-syntax-check":
var G__36491 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36492 = cause_type;
var G__36493 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36494 = loc;
var G__36495 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36491,G__36492,G__36493,G__36494,G__36495) : format.call(null,G__36491,G__36492,G__36493,G__36494,G__36495));

break;
case "compilation":
var G__36496 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36497 = cause_type;
var G__36498 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36499 = loc;
var G__36500 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36496,G__36497,G__36498,G__36499,G__36500) : format.call(null,G__36496,G__36497,G__36498,G__36499,G__36500));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36501 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36502 = symbol;
var G__36503 = loc;
var G__36504 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36505_36607 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36506_36608 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36507_36609 = true;
var _STAR_print_fn_STAR__temp_val__36508_36610 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36507_36609);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36508_36610);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36470_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36470_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36506_36608);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36505_36607);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36501,G__36502,G__36503,G__36504) : format.call(null,G__36501,G__36502,G__36503,G__36504));
} else {
var G__36509 = "Execution error%s at %s(%s).\n%s\n";
var G__36510 = cause_type;
var G__36511 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36512 = loc;
var G__36513 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36509,G__36510,G__36511,G__36512,G__36513) : format.call(null,G__36509,G__36510,G__36511,G__36512,G__36513));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36475__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
