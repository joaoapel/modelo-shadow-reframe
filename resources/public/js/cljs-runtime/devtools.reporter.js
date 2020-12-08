goog.provide('devtools.reporter');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___25890 = arguments.length;
var i__4737__auto___25891 = (0);
while(true){
if((i__4737__auto___25891 < len__4736__auto___25890)){
args__4742__auto__.push((arguments[i__4737__auto___25891]));

var G__25892 = (i__4737__auto___25891 + (1));
i__4737__auto___25891 = G__25892;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__25864){
var vec__25865 = p__25864;
var context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25865,(0),null);
var footer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25865,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__4126__auto__ = e.message;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",devtools.util.get_lib_info(),(cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):"."),"\n\n"].join('');
var footer_msg = (((!((footer == null))))?footer:["\n\n","---\n","Please report the issue here: ",devtools.reporter.issues_url].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = (c["groupCollapsed"]);
var log = (c["log"]);
var group_end = (c["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e25868){var e__$1 = e25868;
return console.error("FATAL: report-internal-error! failed",e__$1);
}}));

(devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq25860){
var G__25861 = cljs.core.first(seq25860);
var seq25860__$1 = cljs.core.next(seq25860);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25861,seq25860__$1);
}));


//# sourceMappingURL=devtools.reporter.js.map
