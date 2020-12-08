goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35330 = arguments.length;
var i__4737__auto___35331 = (0);
while(true){
if((i__4737__auto___35331 < len__4736__auto___35330)){
args__4742__auto__.push((arguments[i__4737__auto___35331]));

var G__35332 = (i__4737__auto___35331 + (1));
i__4737__auto___35331 = G__35332;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35174){
var G__35175 = cljs.core.first(seq35174);
var seq35174__$1 = cljs.core.next(seq35174);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35175,seq35174__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35185 = cljs.core.seq(sources);
var chunk__35186 = null;
var count__35187 = (0);
var i__35188 = (0);
while(true){
if((i__35188 < count__35187)){
var map__35196 = chunk__35186.cljs$core$IIndexed$_nth$arity$2(null,i__35188);
var map__35196__$1 = (((((!((map__35196 == null))))?(((((map__35196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35196):map__35196);
var src = map__35196__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35196__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35196__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35196__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35196__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35198){var e_35333 = e35198;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35333);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35333.message)].join('')));
}

var G__35334 = seq__35185;
var G__35335 = chunk__35186;
var G__35336 = count__35187;
var G__35337 = (i__35188 + (1));
seq__35185 = G__35334;
chunk__35186 = G__35335;
count__35187 = G__35336;
i__35188 = G__35337;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35185);
if(temp__5735__auto__){
var seq__35185__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35185__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35185__$1);
var G__35338 = cljs.core.chunk_rest(seq__35185__$1);
var G__35339 = c__4556__auto__;
var G__35340 = cljs.core.count(c__4556__auto__);
var G__35341 = (0);
seq__35185 = G__35338;
chunk__35186 = G__35339;
count__35187 = G__35340;
i__35188 = G__35341;
continue;
} else {
var map__35199 = cljs.core.first(seq__35185__$1);
var map__35199__$1 = (((((!((map__35199 == null))))?(((((map__35199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35199):map__35199);
var src = map__35199__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35199__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35199__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35199__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35199__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35201){var e_35342 = e35201;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35342);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35342.message)].join('')));
}

var G__35343 = cljs.core.next(seq__35185__$1);
var G__35344 = null;
var G__35345 = (0);
var G__35346 = (0);
seq__35185 = G__35343;
chunk__35186 = G__35344;
count__35187 = G__35345;
i__35188 = G__35346;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35203 = cljs.core.seq(js_requires);
var chunk__35204 = null;
var count__35205 = (0);
var i__35206 = (0);
while(true){
if((i__35206 < count__35205)){
var js_ns = chunk__35204.cljs$core$IIndexed$_nth$arity$2(null,i__35206);
var require_str_35347 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35347);


var G__35348 = seq__35203;
var G__35349 = chunk__35204;
var G__35350 = count__35205;
var G__35351 = (i__35206 + (1));
seq__35203 = G__35348;
chunk__35204 = G__35349;
count__35205 = G__35350;
i__35206 = G__35351;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35203);
if(temp__5735__auto__){
var seq__35203__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35203__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35203__$1);
var G__35352 = cljs.core.chunk_rest(seq__35203__$1);
var G__35353 = c__4556__auto__;
var G__35354 = cljs.core.count(c__4556__auto__);
var G__35355 = (0);
seq__35203 = G__35352;
chunk__35204 = G__35353;
count__35205 = G__35354;
i__35206 = G__35355;
continue;
} else {
var js_ns = cljs.core.first(seq__35203__$1);
var require_str_35356 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35356);


var G__35357 = cljs.core.next(seq__35203__$1);
var G__35358 = null;
var G__35359 = (0);
var G__35360 = (0);
seq__35203 = G__35357;
chunk__35204 = G__35358;
count__35205 = G__35359;
i__35206 = G__35360;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35208){
var map__35209 = p__35208;
var map__35209__$1 = (((((!((map__35209 == null))))?(((((map__35209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35209):map__35209);
var msg = map__35209__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35209__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35209__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35211(s__35212){
return (new cljs.core.LazySeq(null,(function (){
var s__35212__$1 = s__35212;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35212__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35217 = cljs.core.first(xs__6292__auto__);
var map__35217__$1 = (((((!((map__35217 == null))))?(((((map__35217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35217):map__35217);
var src = map__35217__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35217__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35217__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35212__$1,map__35217,map__35217__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35209,map__35209__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35211_$_iter__35213(s__35214){
return (new cljs.core.LazySeq(null,((function (s__35212__$1,map__35217,map__35217__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35209,map__35209__$1,msg,info,reload_info){
return (function (){
var s__35214__$1 = s__35214;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35214__$1);
if(temp__5735__auto____$1){
var s__35214__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35214__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35214__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35216 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35215 = (0);
while(true){
if((i__35215 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35215);
cljs.core.chunk_append(b__35216,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35361 = (i__35215 + (1));
i__35215 = G__35361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35216),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35211_$_iter__35213(cljs.core.chunk_rest(s__35214__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35216),null);
}
} else {
var warning = cljs.core.first(s__35214__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35211_$_iter__35213(cljs.core.rest(s__35214__$2)));
}
} else {
return null;
}
break;
}
});})(s__35212__$1,map__35217,map__35217__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35209,map__35209__$1,msg,info,reload_info))
,null,null));
});})(s__35212__$1,map__35217,map__35217__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35209,map__35209__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35211(cljs.core.rest(s__35212__$1)));
} else {
var G__35362 = cljs.core.rest(s__35212__$1);
s__35212__$1 = G__35362;
continue;
}
} else {
var G__35363 = cljs.core.rest(s__35212__$1);
s__35212__$1 = G__35363;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35219_35364 = cljs.core.seq(warnings);
var chunk__35220_35365 = null;
var count__35221_35366 = (0);
var i__35222_35367 = (0);
while(true){
if((i__35222_35367 < count__35221_35366)){
var map__35228_35368 = chunk__35220_35365.cljs$core$IIndexed$_nth$arity$2(null,i__35222_35367);
var map__35228_35369__$1 = (((((!((map__35228_35368 == null))))?(((((map__35228_35368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35228_35368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35228_35368):map__35228_35368);
var w_35370 = map__35228_35369__$1;
var msg_35371__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35228_35369__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35228_35369__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35228_35369__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35228_35369__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35374)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35372),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35373),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35371__$1)].join(''));


var G__35375 = seq__35219_35364;
var G__35376 = chunk__35220_35365;
var G__35377 = count__35221_35366;
var G__35378 = (i__35222_35367 + (1));
seq__35219_35364 = G__35375;
chunk__35220_35365 = G__35376;
count__35221_35366 = G__35377;
i__35222_35367 = G__35378;
continue;
} else {
var temp__5735__auto___35379 = cljs.core.seq(seq__35219_35364);
if(temp__5735__auto___35379){
var seq__35219_35380__$1 = temp__5735__auto___35379;
if(cljs.core.chunked_seq_QMARK_(seq__35219_35380__$1)){
var c__4556__auto___35381 = cljs.core.chunk_first(seq__35219_35380__$1);
var G__35382 = cljs.core.chunk_rest(seq__35219_35380__$1);
var G__35383 = c__4556__auto___35381;
var G__35384 = cljs.core.count(c__4556__auto___35381);
var G__35385 = (0);
seq__35219_35364 = G__35382;
chunk__35220_35365 = G__35383;
count__35221_35366 = G__35384;
i__35222_35367 = G__35385;
continue;
} else {
var map__35231_35386 = cljs.core.first(seq__35219_35380__$1);
var map__35231_35387__$1 = (((((!((map__35231_35386 == null))))?(((((map__35231_35386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35231_35386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35231_35386):map__35231_35386);
var w_35388 = map__35231_35387__$1;
var msg_35389__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35231_35387__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35231_35387__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35231_35387__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35231_35387__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35392)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35390),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35391),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35389__$1)].join(''));


var G__35393 = cljs.core.next(seq__35219_35380__$1);
var G__35394 = null;
var G__35395 = (0);
var G__35396 = (0);
seq__35219_35364 = G__35393;
chunk__35220_35365 = G__35394;
count__35221_35366 = G__35395;
i__35222_35367 = G__35396;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35207_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35207_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35233){
var map__35234 = p__35233;
var map__35234__$1 = (((((!((map__35234 == null))))?(((((map__35234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35234):map__35234);
var msg = map__35234__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35234__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35236 = cljs.core.seq(updates);
var chunk__35238 = null;
var count__35239 = (0);
var i__35240 = (0);
while(true){
if((i__35240 < count__35239)){
var path = chunk__35238.cljs$core$IIndexed$_nth$arity$2(null,i__35240);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35270_35397 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35274_35398 = null;
var count__35275_35399 = (0);
var i__35276_35400 = (0);
while(true){
if((i__35276_35400 < count__35275_35399)){
var node_35401 = chunk__35274_35398.cljs$core$IIndexed$_nth$arity$2(null,i__35276_35400);
if(cljs.core.not(node_35401.shadow$old)){
var path_match_35402 = shadow.cljs.devtools.client.browser.match_paths(node_35401.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35402)){
var new_link_35403 = (function (){var G__35282 = node_35401.cloneNode(true);
G__35282.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35402),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35282;
})();
(node_35401.shadow$old = true);

(new_link_35403.onload = ((function (seq__35270_35397,chunk__35274_35398,count__35275_35399,i__35276_35400,seq__35236,chunk__35238,count__35239,i__35240,new_link_35403,path_match_35402,node_35401,path,map__35234,map__35234__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35401);
});})(seq__35270_35397,chunk__35274_35398,count__35275_35399,i__35276_35400,seq__35236,chunk__35238,count__35239,i__35240,new_link_35403,path_match_35402,node_35401,path,map__35234,map__35234__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35402], 0));

goog.dom.insertSiblingAfter(new_link_35403,node_35401);


var G__35404 = seq__35270_35397;
var G__35405 = chunk__35274_35398;
var G__35406 = count__35275_35399;
var G__35407 = (i__35276_35400 + (1));
seq__35270_35397 = G__35404;
chunk__35274_35398 = G__35405;
count__35275_35399 = G__35406;
i__35276_35400 = G__35407;
continue;
} else {
var G__35408 = seq__35270_35397;
var G__35409 = chunk__35274_35398;
var G__35410 = count__35275_35399;
var G__35411 = (i__35276_35400 + (1));
seq__35270_35397 = G__35408;
chunk__35274_35398 = G__35409;
count__35275_35399 = G__35410;
i__35276_35400 = G__35411;
continue;
}
} else {
var G__35412 = seq__35270_35397;
var G__35413 = chunk__35274_35398;
var G__35414 = count__35275_35399;
var G__35415 = (i__35276_35400 + (1));
seq__35270_35397 = G__35412;
chunk__35274_35398 = G__35413;
count__35275_35399 = G__35414;
i__35276_35400 = G__35415;
continue;
}
} else {
var temp__5735__auto___35416 = cljs.core.seq(seq__35270_35397);
if(temp__5735__auto___35416){
var seq__35270_35417__$1 = temp__5735__auto___35416;
if(cljs.core.chunked_seq_QMARK_(seq__35270_35417__$1)){
var c__4556__auto___35418 = cljs.core.chunk_first(seq__35270_35417__$1);
var G__35419 = cljs.core.chunk_rest(seq__35270_35417__$1);
var G__35420 = c__4556__auto___35418;
var G__35421 = cljs.core.count(c__4556__auto___35418);
var G__35422 = (0);
seq__35270_35397 = G__35419;
chunk__35274_35398 = G__35420;
count__35275_35399 = G__35421;
i__35276_35400 = G__35422;
continue;
} else {
var node_35423 = cljs.core.first(seq__35270_35417__$1);
if(cljs.core.not(node_35423.shadow$old)){
var path_match_35424 = shadow.cljs.devtools.client.browser.match_paths(node_35423.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35424)){
var new_link_35425 = (function (){var G__35283 = node_35423.cloneNode(true);
G__35283.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35424),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35283;
})();
(node_35423.shadow$old = true);

(new_link_35425.onload = ((function (seq__35270_35397,chunk__35274_35398,count__35275_35399,i__35276_35400,seq__35236,chunk__35238,count__35239,i__35240,new_link_35425,path_match_35424,node_35423,seq__35270_35417__$1,temp__5735__auto___35416,path,map__35234,map__35234__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35423);
});})(seq__35270_35397,chunk__35274_35398,count__35275_35399,i__35276_35400,seq__35236,chunk__35238,count__35239,i__35240,new_link_35425,path_match_35424,node_35423,seq__35270_35417__$1,temp__5735__auto___35416,path,map__35234,map__35234__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35424], 0));

goog.dom.insertSiblingAfter(new_link_35425,node_35423);


var G__35426 = cljs.core.next(seq__35270_35417__$1);
var G__35427 = null;
var G__35428 = (0);
var G__35429 = (0);
seq__35270_35397 = G__35426;
chunk__35274_35398 = G__35427;
count__35275_35399 = G__35428;
i__35276_35400 = G__35429;
continue;
} else {
var G__35430 = cljs.core.next(seq__35270_35417__$1);
var G__35431 = null;
var G__35432 = (0);
var G__35433 = (0);
seq__35270_35397 = G__35430;
chunk__35274_35398 = G__35431;
count__35275_35399 = G__35432;
i__35276_35400 = G__35433;
continue;
}
} else {
var G__35434 = cljs.core.next(seq__35270_35417__$1);
var G__35435 = null;
var G__35436 = (0);
var G__35437 = (0);
seq__35270_35397 = G__35434;
chunk__35274_35398 = G__35435;
count__35275_35399 = G__35436;
i__35276_35400 = G__35437;
continue;
}
}
} else {
}
}
break;
}


var G__35438 = seq__35236;
var G__35439 = chunk__35238;
var G__35440 = count__35239;
var G__35441 = (i__35240 + (1));
seq__35236 = G__35438;
chunk__35238 = G__35439;
count__35239 = G__35440;
i__35240 = G__35441;
continue;
} else {
var G__35442 = seq__35236;
var G__35443 = chunk__35238;
var G__35444 = count__35239;
var G__35445 = (i__35240 + (1));
seq__35236 = G__35442;
chunk__35238 = G__35443;
count__35239 = G__35444;
i__35240 = G__35445;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35236);
if(temp__5735__auto__){
var seq__35236__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35236__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35236__$1);
var G__35446 = cljs.core.chunk_rest(seq__35236__$1);
var G__35447 = c__4556__auto__;
var G__35448 = cljs.core.count(c__4556__auto__);
var G__35449 = (0);
seq__35236 = G__35446;
chunk__35238 = G__35447;
count__35239 = G__35448;
i__35240 = G__35449;
continue;
} else {
var path = cljs.core.first(seq__35236__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35284_35450 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35288_35451 = null;
var count__35289_35452 = (0);
var i__35290_35453 = (0);
while(true){
if((i__35290_35453 < count__35289_35452)){
var node_35454 = chunk__35288_35451.cljs$core$IIndexed$_nth$arity$2(null,i__35290_35453);
if(cljs.core.not(node_35454.shadow$old)){
var path_match_35455 = shadow.cljs.devtools.client.browser.match_paths(node_35454.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35455)){
var new_link_35456 = (function (){var G__35296 = node_35454.cloneNode(true);
G__35296.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35455),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35296;
})();
(node_35454.shadow$old = true);

(new_link_35456.onload = ((function (seq__35284_35450,chunk__35288_35451,count__35289_35452,i__35290_35453,seq__35236,chunk__35238,count__35239,i__35240,new_link_35456,path_match_35455,node_35454,path,seq__35236__$1,temp__5735__auto__,map__35234,map__35234__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35454);
});})(seq__35284_35450,chunk__35288_35451,count__35289_35452,i__35290_35453,seq__35236,chunk__35238,count__35239,i__35240,new_link_35456,path_match_35455,node_35454,path,seq__35236__$1,temp__5735__auto__,map__35234,map__35234__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35455], 0));

goog.dom.insertSiblingAfter(new_link_35456,node_35454);


var G__35457 = seq__35284_35450;
var G__35458 = chunk__35288_35451;
var G__35459 = count__35289_35452;
var G__35460 = (i__35290_35453 + (1));
seq__35284_35450 = G__35457;
chunk__35288_35451 = G__35458;
count__35289_35452 = G__35459;
i__35290_35453 = G__35460;
continue;
} else {
var G__35461 = seq__35284_35450;
var G__35462 = chunk__35288_35451;
var G__35463 = count__35289_35452;
var G__35464 = (i__35290_35453 + (1));
seq__35284_35450 = G__35461;
chunk__35288_35451 = G__35462;
count__35289_35452 = G__35463;
i__35290_35453 = G__35464;
continue;
}
} else {
var G__35465 = seq__35284_35450;
var G__35466 = chunk__35288_35451;
var G__35467 = count__35289_35452;
var G__35468 = (i__35290_35453 + (1));
seq__35284_35450 = G__35465;
chunk__35288_35451 = G__35466;
count__35289_35452 = G__35467;
i__35290_35453 = G__35468;
continue;
}
} else {
var temp__5735__auto___35469__$1 = cljs.core.seq(seq__35284_35450);
if(temp__5735__auto___35469__$1){
var seq__35284_35470__$1 = temp__5735__auto___35469__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35284_35470__$1)){
var c__4556__auto___35471 = cljs.core.chunk_first(seq__35284_35470__$1);
var G__35472 = cljs.core.chunk_rest(seq__35284_35470__$1);
var G__35473 = c__4556__auto___35471;
var G__35474 = cljs.core.count(c__4556__auto___35471);
var G__35475 = (0);
seq__35284_35450 = G__35472;
chunk__35288_35451 = G__35473;
count__35289_35452 = G__35474;
i__35290_35453 = G__35475;
continue;
} else {
var node_35476 = cljs.core.first(seq__35284_35470__$1);
if(cljs.core.not(node_35476.shadow$old)){
var path_match_35477 = shadow.cljs.devtools.client.browser.match_paths(node_35476.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35477)){
var new_link_35478 = (function (){var G__35297 = node_35476.cloneNode(true);
G__35297.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35477),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35297;
})();
(node_35476.shadow$old = true);

(new_link_35478.onload = ((function (seq__35284_35450,chunk__35288_35451,count__35289_35452,i__35290_35453,seq__35236,chunk__35238,count__35239,i__35240,new_link_35478,path_match_35477,node_35476,seq__35284_35470__$1,temp__5735__auto___35469__$1,path,seq__35236__$1,temp__5735__auto__,map__35234,map__35234__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35476);
});})(seq__35284_35450,chunk__35288_35451,count__35289_35452,i__35290_35453,seq__35236,chunk__35238,count__35239,i__35240,new_link_35478,path_match_35477,node_35476,seq__35284_35470__$1,temp__5735__auto___35469__$1,path,seq__35236__$1,temp__5735__auto__,map__35234,map__35234__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35477], 0));

goog.dom.insertSiblingAfter(new_link_35478,node_35476);


var G__35479 = cljs.core.next(seq__35284_35470__$1);
var G__35480 = null;
var G__35481 = (0);
var G__35482 = (0);
seq__35284_35450 = G__35479;
chunk__35288_35451 = G__35480;
count__35289_35452 = G__35481;
i__35290_35453 = G__35482;
continue;
} else {
var G__35483 = cljs.core.next(seq__35284_35470__$1);
var G__35484 = null;
var G__35485 = (0);
var G__35486 = (0);
seq__35284_35450 = G__35483;
chunk__35288_35451 = G__35484;
count__35289_35452 = G__35485;
i__35290_35453 = G__35486;
continue;
}
} else {
var G__35487 = cljs.core.next(seq__35284_35470__$1);
var G__35488 = null;
var G__35489 = (0);
var G__35490 = (0);
seq__35284_35450 = G__35487;
chunk__35288_35451 = G__35488;
count__35289_35452 = G__35489;
i__35290_35453 = G__35490;
continue;
}
}
} else {
}
}
break;
}


var G__35491 = cljs.core.next(seq__35236__$1);
var G__35492 = null;
var G__35493 = (0);
var G__35494 = (0);
seq__35236 = G__35491;
chunk__35238 = G__35492;
count__35239 = G__35493;
i__35240 = G__35494;
continue;
} else {
var G__35495 = cljs.core.next(seq__35236__$1);
var G__35496 = null;
var G__35497 = (0);
var G__35498 = (0);
seq__35236 = G__35495;
chunk__35238 = G__35496;
count__35239 = G__35497;
i__35240 = G__35498;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35298){
var map__35299 = p__35298;
var map__35299__$1 = (((((!((map__35299 == null))))?(((((map__35299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35299):map__35299);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35299__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35301){
var map__35302 = p__35301;
var map__35302__$1 = (((((!((map__35302 == null))))?(((((map__35302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35302):map__35302);
var _ = map__35302__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35302__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35304,done,error){
var map__35305 = p__35304;
var map__35305__$1 = (((((!((map__35305 == null))))?(((((map__35305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35305):map__35305);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35305__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35307,done,error){
var map__35308 = p__35307;
var map__35308__$1 = (((((!((map__35308 == null))))?(((((map__35308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35308):map__35308);
var msg = map__35308__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35308__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35308__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35308__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35310){
var map__35311 = p__35310;
var map__35311__$1 = (((((!((map__35311 == null))))?(((((map__35311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35311):map__35311);
var src = map__35311__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35311__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35313 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35313) : done.call(null,G__35313));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35314){
var map__35315 = p__35314;
var map__35315__$1 = (((((!((map__35315 == null))))?(((((map__35315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35315):map__35315);
var msg__$1 = map__35315__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35315__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35317){var ex = e35317;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35318){
var map__35319 = p__35318;
var map__35319__$1 = (((((!((map__35319 == null))))?(((((map__35319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35319):map__35319);
var env = map__35319__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35319__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35321){
var map__35322 = p__35321;
var map__35322__$1 = (((((!((map__35322 == null))))?(((((map__35322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35322):map__35322);
var msg = map__35322__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35322__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35324){
var map__35325 = p__35324;
var map__35325__$1 = (((((!((map__35325 == null))))?(((((map__35325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35325):map__35325);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35325__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35325__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35327){
var map__35328 = p__35327;
var map__35328__$1 = (((((!((map__35328 == null))))?(((((map__35328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35328):map__35328);
var svc = map__35328__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35328__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
