goog.provide('app.core');
app.core.main_component = (function app$core$main_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-4xl font-bold"], null),"Primeiro componente !!"], null)], null);
});
app.core.mount = (function app$core$mount(c){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null),document.getElementById("root"));
});
app.core.init = (function app$core$init(){
return app.core.mount(app.core.main_component);
});

//# sourceMappingURL=app.core.js.map
