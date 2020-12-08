goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30239 = arguments.length;
switch (G__30239) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30240 = (function (f,blockable,meta30241){
this.f = f;
this.blockable = blockable;
this.meta30241 = meta30241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30242,meta30241__$1){
var self__ = this;
var _30242__$1 = this;
return (new cljs.core.async.t_cljs$core$async30240(self__.f,self__.blockable,meta30241__$1));
}));

(cljs.core.async.t_cljs$core$async30240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30242){
var self__ = this;
var _30242__$1 = this;
return self__.meta30241;
}));

(cljs.core.async.t_cljs$core$async30240.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30240.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30241","meta30241",-1622455866,null)], null);
}));

(cljs.core.async.t_cljs$core$async30240.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30240");

(cljs.core.async.t_cljs$core$async30240.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30240");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30240.
 */
cljs.core.async.__GT_t_cljs$core$async30240 = (function cljs$core$async$__GT_t_cljs$core$async30240(f__$1,blockable__$1,meta30241){
return (new cljs.core.async.t_cljs$core$async30240(f__$1,blockable__$1,meta30241));
});

}

return (new cljs.core.async.t_cljs$core$async30240(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30251 = arguments.length;
switch (G__30251) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30253 = arguments.length;
switch (G__30253) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30272 = arguments.length;
switch (G__30272) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32431 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32431) : fn1.call(null,val_32431));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32431) : fn1.call(null,val_32431));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30274 = arguments.length;
switch (G__30274) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32433 = n;
var x_32434 = (0);
while(true){
if((x_32434 < n__4613__auto___32433)){
(a[x_32434] = x_32434);

var G__32435 = (x_32434 + (1));
x_32434 = G__32435;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30304 = (function (flag,meta30305){
this.flag = flag;
this.meta30305 = meta30305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30306,meta30305__$1){
var self__ = this;
var _30306__$1 = this;
return (new cljs.core.async.t_cljs$core$async30304(self__.flag,meta30305__$1));
}));

(cljs.core.async.t_cljs$core$async30304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30306){
var self__ = this;
var _30306__$1 = this;
return self__.meta30305;
}));

(cljs.core.async.t_cljs$core$async30304.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30304.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30304.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30304.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30305","meta30305",920475258,null)], null);
}));

(cljs.core.async.t_cljs$core$async30304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30304");

(cljs.core.async.t_cljs$core$async30304.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30304.
 */
cljs.core.async.__GT_t_cljs$core$async30304 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30304(flag__$1,meta30305){
return (new cljs.core.async.t_cljs$core$async30304(flag__$1,meta30305));
});

}

return (new cljs.core.async.t_cljs$core$async30304(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30315 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30315 = (function (flag,cb,meta30316){
this.flag = flag;
this.cb = cb;
this.meta30316 = meta30316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30317,meta30316__$1){
var self__ = this;
var _30317__$1 = this;
return (new cljs.core.async.t_cljs$core$async30315(self__.flag,self__.cb,meta30316__$1));
}));

(cljs.core.async.t_cljs$core$async30315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30317){
var self__ = this;
var _30317__$1 = this;
return self__.meta30316;
}));

(cljs.core.async.t_cljs$core$async30315.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30315.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30316","meta30316",640732658,null)], null);
}));

(cljs.core.async.t_cljs$core$async30315.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30315");

(cljs.core.async.t_cljs$core$async30315.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30315");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30315.
 */
cljs.core.async.__GT_t_cljs$core$async30315 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30315(flag__$1,cb__$1,meta30316){
return (new cljs.core.async.t_cljs$core$async30315(flag__$1,cb__$1,meta30316));
});

}

return (new cljs.core.async.t_cljs$core$async30315(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30346_SHARP_){
var G__30348 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30346_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30348) : fret.call(null,G__30348));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30347_SHARP_){
var G__30349 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30347_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30349) : fret.call(null,G__30349));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32448 = (i + (1));
i = G__32448;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32449 = arguments.length;
var i__4737__auto___32450 = (0);
while(true){
if((i__4737__auto___32450 < len__4736__auto___32449)){
args__4742__auto__.push((arguments[i__4737__auto___32450]));

var G__32451 = (i__4737__auto___32450 + (1));
i__4737__auto___32450 = G__32451;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30362){
var map__30363 = p__30362;
var map__30363__$1 = (((((!((map__30363 == null))))?(((((map__30363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30363):map__30363);
var opts = map__30363__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30360){
var G__30361 = cljs.core.first(seq30360);
var seq30360__$1 = cljs.core.next(seq30360);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30361,seq30360__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30366 = arguments.length;
switch (G__30366) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30127__auto___32453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_30411){
var state_val_30412 = (state_30411[(1)]);
if((state_val_30412 === (7))){
var inst_30407 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
var statearr_30425_32456 = state_30411__$1;
(statearr_30425_32456[(2)] = inst_30407);

(statearr_30425_32456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (1))){
var state_30411__$1 = state_30411;
var statearr_30426_32457 = state_30411__$1;
(statearr_30426_32457[(2)] = null);

(statearr_30426_32457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (4))){
var inst_30384 = (state_30411[(7)]);
var inst_30384__$1 = (state_30411[(2)]);
var inst_30391 = (inst_30384__$1 == null);
var state_30411__$1 = (function (){var statearr_30427 = state_30411;
(statearr_30427[(7)] = inst_30384__$1);

return statearr_30427;
})();
if(cljs.core.truth_(inst_30391)){
var statearr_30428_32458 = state_30411__$1;
(statearr_30428_32458[(1)] = (5));

} else {
var statearr_30429_32459 = state_30411__$1;
(statearr_30429_32459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (13))){
var state_30411__$1 = state_30411;
var statearr_30430_32460 = state_30411__$1;
(statearr_30430_32460[(2)] = null);

(statearr_30430_32460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (6))){
var inst_30384 = (state_30411[(7)]);
var state_30411__$1 = state_30411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30411__$1,(11),to,inst_30384);
} else {
if((state_val_30412 === (3))){
var inst_30409 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30411__$1,inst_30409);
} else {
if((state_val_30412 === (12))){
var state_30411__$1 = state_30411;
var statearr_30439_32465 = state_30411__$1;
(statearr_30439_32465[(2)] = null);

(statearr_30439_32465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (2))){
var state_30411__$1 = state_30411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30411__$1,(4),from);
} else {
if((state_val_30412 === (11))){
var inst_30400 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
if(cljs.core.truth_(inst_30400)){
var statearr_30444_32467 = state_30411__$1;
(statearr_30444_32467[(1)] = (12));

} else {
var statearr_30445_32468 = state_30411__$1;
(statearr_30445_32468[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (9))){
var state_30411__$1 = state_30411;
var statearr_30446_32469 = state_30411__$1;
(statearr_30446_32469[(2)] = null);

(statearr_30446_32469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (5))){
var state_30411__$1 = state_30411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30447_32470 = state_30411__$1;
(statearr_30447_32470[(1)] = (8));

} else {
var statearr_30448_32471 = state_30411__$1;
(statearr_30448_32471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (14))){
var inst_30405 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
var statearr_30449_32472 = state_30411__$1;
(statearr_30449_32472[(2)] = inst_30405);

(statearr_30449_32472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (10))){
var inst_30397 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
var statearr_30450_32473 = state_30411__$1;
(statearr_30450_32473[(2)] = inst_30397);

(statearr_30450_32473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (8))){
var inst_30394 = cljs.core.async.close_BANG_(to);
var state_30411__$1 = state_30411;
var statearr_30451_32474 = state_30411__$1;
(statearr_30451_32474[(2)] = inst_30394);

(statearr_30451_32474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29937__auto__ = null;
var cljs$core$async$state_machine__29937__auto____0 = (function (){
var statearr_30452 = [null,null,null,null,null,null,null,null];
(statearr_30452[(0)] = cljs$core$async$state_machine__29937__auto__);

(statearr_30452[(1)] = (1));

return statearr_30452;
});
var cljs$core$async$state_machine__29937__auto____1 = (function (state_30411){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_30411);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e30453){var ex__29940__auto__ = e30453;
var statearr_30454_32475 = state_30411;
(statearr_30454_32475[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_30411[(4)]))){
var statearr_30455_32476 = state_30411;
(statearr_30455_32476[(1)] = cljs.core.first((state_30411[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32477 = state_30411;
state_30411 = G__32477;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$state_machine__29937__auto__ = function(state_30411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29937__auto____1.call(this,state_30411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29937__auto____0;
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29937__auto____1;
return cljs$core$async$state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_30456 = f__30128__auto__();
(statearr_30456[(6)] = c__30127__auto___32453);

return statearr_30456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30458){
var vec__30459 = p__30458;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30459,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30459,(1),null);
var job = vec__30459;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30127__auto___32478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_30470){
var state_val_30471 = (state_30470[(1)]);
if((state_val_30471 === (1))){
var state_30470__$1 = state_30470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30470__$1,(2),res,v);
} else {
if((state_val_30471 === (2))){
var inst_30467 = (state_30470[(2)]);
var inst_30468 = cljs.core.async.close_BANG_(res);
var state_30470__$1 = (function (){var statearr_30477 = state_30470;
(statearr_30477[(7)] = inst_30467);

return statearr_30477;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30470__$1,inst_30468);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____0 = (function (){
var statearr_30479 = [null,null,null,null,null,null,null,null];
(statearr_30479[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__);

(statearr_30479[(1)] = (1));

return statearr_30479;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____1 = (function (state_30470){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_30470);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e30480){var ex__29940__auto__ = e30480;
var statearr_30481_32489 = state_30470;
(statearr_30481_32489[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_30470[(4)]))){
var statearr_30482_32490 = state_30470;
(statearr_30482_32490[(1)] = cljs.core.first((state_30470[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32491 = state_30470;
state_30470 = G__32491;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__ = function(state_30470){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____1.call(this,state_30470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_30483 = f__30128__auto__();
(statearr_30483[(6)] = c__30127__auto___32478);

return statearr_30483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30484){
var vec__30486 = p__30484;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30486,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30486,(1),null);
var job = vec__30486;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32492 = n;
var __32493 = (0);
while(true){
if((__32493 < n__4613__auto___32492)){
var G__30489_32494 = type;
var G__30489_32495__$1 = (((G__30489_32494 instanceof cljs.core.Keyword))?G__30489_32494.fqn:null);
switch (G__30489_32495__$1) {
case "compute":
var c__30127__auto___32497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32493,c__30127__auto___32497,G__30489_32494,G__30489_32495__$1,n__4613__auto___32492,jobs,results,process,async){
return (function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = ((function (__32493,c__30127__auto___32497,G__30489_32494,G__30489_32495__$1,n__4613__auto___32492,jobs,results,process,async){
return (function (state_30502){
var state_val_30503 = (state_30502[(1)]);
if((state_val_30503 === (1))){
var state_30502__$1 = state_30502;
var statearr_30504_32499 = state_30502__$1;
(statearr_30504_32499[(2)] = null);

(statearr_30504_32499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (2))){
var state_30502__$1 = state_30502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30502__$1,(4),jobs);
} else {
if((state_val_30503 === (3))){
var inst_30500 = (state_30502[(2)]);
var state_30502__$1 = state_30502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30502__$1,inst_30500);
} else {
if((state_val_30503 === (4))){
var inst_30492 = (state_30502[(2)]);
var inst_30493 = process(inst_30492);
var state_30502__$1 = state_30502;
if(cljs.core.truth_(inst_30493)){
var statearr_30518_32500 = state_30502__$1;
(statearr_30518_32500[(1)] = (5));

} else {
var statearr_30519_32501 = state_30502__$1;
(statearr_30519_32501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (5))){
var state_30502__$1 = state_30502;
var statearr_30521_32502 = state_30502__$1;
(statearr_30521_32502[(2)] = null);

(statearr_30521_32502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (6))){
var state_30502__$1 = state_30502;
var statearr_30522_32505 = state_30502__$1;
(statearr_30522_32505[(2)] = null);

(statearr_30522_32505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30503 === (7))){
var inst_30498 = (state_30502[(2)]);
var state_30502__$1 = state_30502;
var statearr_30523_32506 = state_30502__$1;
(statearr_30523_32506[(2)] = inst_30498);

(statearr_30523_32506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32493,c__30127__auto___32497,G__30489_32494,G__30489_32495__$1,n__4613__auto___32492,jobs,results,process,async))
;
return ((function (__32493,switch__29936__auto__,c__30127__auto___32497,G__30489_32494,G__30489_32495__$1,n__4613__auto___32492,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____0 = (function (){
var statearr_30524 = [null,null,null,null,null,null,null];
(statearr_30524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__);

(statearr_30524[(1)] = (1));

return statearr_30524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____1 = (function (state_30502){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_30502);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e30525){var ex__29940__auto__ = e30525;
var statearr_30526_32507 = state_30502;
(statearr_30526_32507[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_30502[(4)]))){
var statearr_30527_32508 = state_30502;
(statearr_30527_32508[(1)] = cljs.core.first((state_30502[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32509 = state_30502;
state_30502 = G__32509;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__ = function(state_30502){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____1.call(this,state_30502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__;
})()
;})(__32493,switch__29936__auto__,c__30127__auto___32497,G__30489_32494,G__30489_32495__$1,n__4613__auto___32492,jobs,results,process,async))
})();
var state__30129__auto__ = (function (){var statearr_30530 = f__30128__auto__();
(statearr_30530[(6)] = c__30127__auto___32497);

return statearr_30530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
});})(__32493,c__30127__auto___32497,G__30489_32494,G__30489_32495__$1,n__4613__auto___32492,jobs,results,process,async))
);


break;
case "async":
var c__30127__auto___32512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32493,c__30127__auto___32512,G__30489_32494,G__30489_32495__$1,n__4613__auto___32492,jobs,results,process,async){
return (function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = ((function (__32493,c__30127__auto___32512,G__30489_32494,G__30489_32495__$1,n__4613__auto___32492,jobs,results,process,async){
return (function (state_30545){
var state_val_30546 = (state_30545[(1)]);
if((state_val_30546 === (1))){
var state_30545__$1 = state_30545;
var statearr_30551_32513 = state_30545__$1;
(statearr_30551_32513[(2)] = null);

(statearr_30551_32513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (2))){
var state_30545__$1 = state_30545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30545__$1,(4),jobs);
} else {
if((state_val_30546 === (3))){
var inst_30543 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30545__$1,inst_30543);
} else {
if((state_val_30546 === (4))){
var inst_30533 = (state_30545[(2)]);
var inst_30536 = async(inst_30533);
var state_30545__$1 = state_30545;
if(cljs.core.truth_(inst_30536)){
var statearr_30555_32514 = state_30545__$1;
(statearr_30555_32514[(1)] = (5));

} else {
var statearr_30556_32515 = state_30545__$1;
(statearr_30556_32515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (5))){
var state_30545__$1 = state_30545;
var statearr_30557_32516 = state_30545__$1;
(statearr_30557_32516[(2)] = null);

(statearr_30557_32516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (6))){
var state_30545__$1 = state_30545;
var statearr_30560_32517 = state_30545__$1;
(statearr_30560_32517[(2)] = null);

(statearr_30560_32517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (7))){
var inst_30541 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
var statearr_30562_32518 = state_30545__$1;
(statearr_30562_32518[(2)] = inst_30541);

(statearr_30562_32518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32493,c__30127__auto___32512,G__30489_32494,G__30489_32495__$1,n__4613__auto___32492,jobs,results,process,async))
;
return ((function (__32493,switch__29936__auto__,c__30127__auto___32512,G__30489_32494,G__30489_32495__$1,n__4613__auto___32492,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____0 = (function (){
var statearr_30563 = [null,null,null,null,null,null,null];
(statearr_30563[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__);

(statearr_30563[(1)] = (1));

return statearr_30563;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____1 = (function (state_30545){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_30545);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e30564){var ex__29940__auto__ = e30564;
var statearr_30565_32519 = state_30545;
(statearr_30565_32519[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_30545[(4)]))){
var statearr_30567_32520 = state_30545;
(statearr_30567_32520[(1)] = cljs.core.first((state_30545[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32521 = state_30545;
state_30545 = G__32521;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__ = function(state_30545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____1.call(this,state_30545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__;
})()
;})(__32493,switch__29936__auto__,c__30127__auto___32512,G__30489_32494,G__30489_32495__$1,n__4613__auto___32492,jobs,results,process,async))
})();
var state__30129__auto__ = (function (){var statearr_30568 = f__30128__auto__();
(statearr_30568[(6)] = c__30127__auto___32512);

return statearr_30568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
});})(__32493,c__30127__auto___32512,G__30489_32494,G__30489_32495__$1,n__4613__auto___32492,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30489_32495__$1)].join('')));

}

var G__32522 = (__32493 + (1));
__32493 = G__32522;
continue;
} else {
}
break;
}

var c__30127__auto___32523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_30592){
var state_val_30593 = (state_30592[(1)]);
if((state_val_30593 === (7))){
var inst_30588 = (state_30592[(2)]);
var state_30592__$1 = state_30592;
var statearr_30594_32524 = state_30592__$1;
(statearr_30594_32524[(2)] = inst_30588);

(statearr_30594_32524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (1))){
var state_30592__$1 = state_30592;
var statearr_30595_32525 = state_30592__$1;
(statearr_30595_32525[(2)] = null);

(statearr_30595_32525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (4))){
var inst_30571 = (state_30592[(7)]);
var inst_30571__$1 = (state_30592[(2)]);
var inst_30572 = (inst_30571__$1 == null);
var state_30592__$1 = (function (){var statearr_30598 = state_30592;
(statearr_30598[(7)] = inst_30571__$1);

return statearr_30598;
})();
if(cljs.core.truth_(inst_30572)){
var statearr_30599_32526 = state_30592__$1;
(statearr_30599_32526[(1)] = (5));

} else {
var statearr_30602_32527 = state_30592__$1;
(statearr_30602_32527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (6))){
var inst_30571 = (state_30592[(7)]);
var inst_30576 = (state_30592[(8)]);
var inst_30576__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30578 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30579 = [inst_30571,inst_30576__$1];
var inst_30580 = (new cljs.core.PersistentVector(null,2,(5),inst_30578,inst_30579,null));
var state_30592__$1 = (function (){var statearr_30603 = state_30592;
(statearr_30603[(8)] = inst_30576__$1);

return statearr_30603;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30592__$1,(8),jobs,inst_30580);
} else {
if((state_val_30593 === (3))){
var inst_30590 = (state_30592[(2)]);
var state_30592__$1 = state_30592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30592__$1,inst_30590);
} else {
if((state_val_30593 === (2))){
var state_30592__$1 = state_30592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30592__$1,(4),from);
} else {
if((state_val_30593 === (9))){
var inst_30584 = (state_30592[(2)]);
var state_30592__$1 = (function (){var statearr_30604 = state_30592;
(statearr_30604[(9)] = inst_30584);

return statearr_30604;
})();
var statearr_30605_32531 = state_30592__$1;
(statearr_30605_32531[(2)] = null);

(statearr_30605_32531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (5))){
var inst_30574 = cljs.core.async.close_BANG_(jobs);
var state_30592__$1 = state_30592;
var statearr_30606_32532 = state_30592__$1;
(statearr_30606_32532[(2)] = inst_30574);

(statearr_30606_32532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (8))){
var inst_30576 = (state_30592[(8)]);
var inst_30582 = (state_30592[(2)]);
var state_30592__$1 = (function (){var statearr_30610 = state_30592;
(statearr_30610[(10)] = inst_30582);

return statearr_30610;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30592__$1,(9),results,inst_30576);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____0 = (function (){
var statearr_30612 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30612[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__);

(statearr_30612[(1)] = (1));

return statearr_30612;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____1 = (function (state_30592){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_30592);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e30616){var ex__29940__auto__ = e30616;
var statearr_30617_32533 = state_30592;
(statearr_30617_32533[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_30592[(4)]))){
var statearr_30618_32534 = state_30592;
(statearr_30618_32534[(1)] = cljs.core.first((state_30592[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32535 = state_30592;
state_30592 = G__32535;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__ = function(state_30592){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____1.call(this,state_30592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_30619 = f__30128__auto__();
(statearr_30619[(6)] = c__30127__auto___32523);

return statearr_30619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));


var c__30127__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_30661){
var state_val_30662 = (state_30661[(1)]);
if((state_val_30662 === (7))){
var inst_30657 = (state_30661[(2)]);
var state_30661__$1 = state_30661;
var statearr_30663_32536 = state_30661__$1;
(statearr_30663_32536[(2)] = inst_30657);

(statearr_30663_32536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (20))){
var state_30661__$1 = state_30661;
var statearr_30664_32537 = state_30661__$1;
(statearr_30664_32537[(2)] = null);

(statearr_30664_32537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (1))){
var state_30661__$1 = state_30661;
var statearr_30665_32538 = state_30661__$1;
(statearr_30665_32538[(2)] = null);

(statearr_30665_32538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (4))){
var inst_30622 = (state_30661[(7)]);
var inst_30622__$1 = (state_30661[(2)]);
var inst_30623 = (inst_30622__$1 == null);
var state_30661__$1 = (function (){var statearr_30666 = state_30661;
(statearr_30666[(7)] = inst_30622__$1);

return statearr_30666;
})();
if(cljs.core.truth_(inst_30623)){
var statearr_30667_32539 = state_30661__$1;
(statearr_30667_32539[(1)] = (5));

} else {
var statearr_30668_32540 = state_30661__$1;
(statearr_30668_32540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (15))){
var inst_30636 = (state_30661[(8)]);
var state_30661__$1 = state_30661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30661__$1,(18),to,inst_30636);
} else {
if((state_val_30662 === (21))){
var inst_30652 = (state_30661[(2)]);
var state_30661__$1 = state_30661;
var statearr_30669_32545 = state_30661__$1;
(statearr_30669_32545[(2)] = inst_30652);

(statearr_30669_32545[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (13))){
var inst_30654 = (state_30661[(2)]);
var state_30661__$1 = (function (){var statearr_30671 = state_30661;
(statearr_30671[(9)] = inst_30654);

return statearr_30671;
})();
var statearr_30672_32546 = state_30661__$1;
(statearr_30672_32546[(2)] = null);

(statearr_30672_32546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (6))){
var inst_30622 = (state_30661[(7)]);
var state_30661__$1 = state_30661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30661__$1,(11),inst_30622);
} else {
if((state_val_30662 === (17))){
var inst_30646 = (state_30661[(2)]);
var state_30661__$1 = state_30661;
if(cljs.core.truth_(inst_30646)){
var statearr_30676_32547 = state_30661__$1;
(statearr_30676_32547[(1)] = (19));

} else {
var statearr_30677_32548 = state_30661__$1;
(statearr_30677_32548[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (3))){
var inst_30659 = (state_30661[(2)]);
var state_30661__$1 = state_30661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30661__$1,inst_30659);
} else {
if((state_val_30662 === (12))){
var inst_30632 = (state_30661[(10)]);
var state_30661__$1 = state_30661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30661__$1,(14),inst_30632);
} else {
if((state_val_30662 === (2))){
var state_30661__$1 = state_30661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30661__$1,(4),results);
} else {
if((state_val_30662 === (19))){
var state_30661__$1 = state_30661;
var statearr_30678_32549 = state_30661__$1;
(statearr_30678_32549[(2)] = null);

(statearr_30678_32549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (11))){
var inst_30632 = (state_30661[(2)]);
var state_30661__$1 = (function (){var statearr_30679 = state_30661;
(statearr_30679[(10)] = inst_30632);

return statearr_30679;
})();
var statearr_30680_32550 = state_30661__$1;
(statearr_30680_32550[(2)] = null);

(statearr_30680_32550[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (9))){
var state_30661__$1 = state_30661;
var statearr_30682_32551 = state_30661__$1;
(statearr_30682_32551[(2)] = null);

(statearr_30682_32551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (5))){
var state_30661__$1 = state_30661;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30684_32552 = state_30661__$1;
(statearr_30684_32552[(1)] = (8));

} else {
var statearr_30685_32553 = state_30661__$1;
(statearr_30685_32553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (14))){
var inst_30636 = (state_30661[(8)]);
var inst_30636__$1 = (state_30661[(2)]);
var inst_30637 = (inst_30636__$1 == null);
var inst_30639 = cljs.core.not(inst_30637);
var state_30661__$1 = (function (){var statearr_30686 = state_30661;
(statearr_30686[(8)] = inst_30636__$1);

return statearr_30686;
})();
if(inst_30639){
var statearr_30687_32554 = state_30661__$1;
(statearr_30687_32554[(1)] = (15));

} else {
var statearr_30688_32555 = state_30661__$1;
(statearr_30688_32555[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (16))){
var state_30661__$1 = state_30661;
var statearr_30689_32556 = state_30661__$1;
(statearr_30689_32556[(2)] = false);

(statearr_30689_32556[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (10))){
var inst_30629 = (state_30661[(2)]);
var state_30661__$1 = state_30661;
var statearr_30690_32557 = state_30661__$1;
(statearr_30690_32557[(2)] = inst_30629);

(statearr_30690_32557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (18))){
var inst_30643 = (state_30661[(2)]);
var state_30661__$1 = state_30661;
var statearr_30692_32558 = state_30661__$1;
(statearr_30692_32558[(2)] = inst_30643);

(statearr_30692_32558[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (8))){
var inst_30626 = cljs.core.async.close_BANG_(to);
var state_30661__$1 = state_30661;
var statearr_30693_32559 = state_30661__$1;
(statearr_30693_32559[(2)] = inst_30626);

(statearr_30693_32559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____0 = (function (){
var statearr_30694 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30694[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__);

(statearr_30694[(1)] = (1));

return statearr_30694;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____1 = (function (state_30661){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_30661);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e30695){var ex__29940__auto__ = e30695;
var statearr_30696_32560 = state_30661;
(statearr_30696_32560[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_30661[(4)]))){
var statearr_30697_32561 = state_30661;
(statearr_30697_32561[(1)] = cljs.core.first((state_30661[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32562 = state_30661;
state_30661 = G__32562;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__ = function(state_30661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____1.call(this,state_30661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29937__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_30698 = f__30128__auto__();
(statearr_30698[(6)] = c__30127__auto__);

return statearr_30698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));

return c__30127__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30701 = arguments.length;
switch (G__30701) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30717 = arguments.length;
switch (G__30717) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30721 = arguments.length;
switch (G__30721) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30127__auto___32572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_30751){
var state_val_30752 = (state_30751[(1)]);
if((state_val_30752 === (7))){
var inst_30746 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
var statearr_30754_32573 = state_30751__$1;
(statearr_30754_32573[(2)] = inst_30746);

(statearr_30754_32573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (1))){
var state_30751__$1 = state_30751;
var statearr_30755_32574 = state_30751__$1;
(statearr_30755_32574[(2)] = null);

(statearr_30755_32574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (4))){
var inst_30726 = (state_30751[(7)]);
var inst_30726__$1 = (state_30751[(2)]);
var inst_30727 = (inst_30726__$1 == null);
var state_30751__$1 = (function (){var statearr_30760 = state_30751;
(statearr_30760[(7)] = inst_30726__$1);

return statearr_30760;
})();
if(cljs.core.truth_(inst_30727)){
var statearr_30761_32575 = state_30751__$1;
(statearr_30761_32575[(1)] = (5));

} else {
var statearr_30764_32576 = state_30751__$1;
(statearr_30764_32576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (13))){
var state_30751__$1 = state_30751;
var statearr_30769_32577 = state_30751__$1;
(statearr_30769_32577[(2)] = null);

(statearr_30769_32577[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (6))){
var inst_30726 = (state_30751[(7)]);
var inst_30732 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30726) : p.call(null,inst_30726));
var state_30751__$1 = state_30751;
if(cljs.core.truth_(inst_30732)){
var statearr_30770_32578 = state_30751__$1;
(statearr_30770_32578[(1)] = (9));

} else {
var statearr_30771_32579 = state_30751__$1;
(statearr_30771_32579[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (3))){
var inst_30748 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30751__$1,inst_30748);
} else {
if((state_val_30752 === (12))){
var state_30751__$1 = state_30751;
var statearr_30774_32580 = state_30751__$1;
(statearr_30774_32580[(2)] = null);

(statearr_30774_32580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (2))){
var state_30751__$1 = state_30751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30751__$1,(4),ch);
} else {
if((state_val_30752 === (11))){
var inst_30726 = (state_30751[(7)]);
var inst_30736 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30751__$1,(8),inst_30736,inst_30726);
} else {
if((state_val_30752 === (9))){
var state_30751__$1 = state_30751;
var statearr_30780_32581 = state_30751__$1;
(statearr_30780_32581[(2)] = tc);

(statearr_30780_32581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (5))){
var inst_30729 = cljs.core.async.close_BANG_(tc);
var inst_30730 = cljs.core.async.close_BANG_(fc);
var state_30751__$1 = (function (){var statearr_30781 = state_30751;
(statearr_30781[(8)] = inst_30729);

return statearr_30781;
})();
var statearr_30782_32582 = state_30751__$1;
(statearr_30782_32582[(2)] = inst_30730);

(statearr_30782_32582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (14))){
var inst_30744 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
var statearr_30787_32608 = state_30751__$1;
(statearr_30787_32608[(2)] = inst_30744);

(statearr_30787_32608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (10))){
var state_30751__$1 = state_30751;
var statearr_30788_32609 = state_30751__$1;
(statearr_30788_32609[(2)] = fc);

(statearr_30788_32609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (8))){
var inst_30738 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
if(cljs.core.truth_(inst_30738)){
var statearr_30789_32610 = state_30751__$1;
(statearr_30789_32610[(1)] = (12));

} else {
var statearr_30790_32611 = state_30751__$1;
(statearr_30790_32611[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29937__auto__ = null;
var cljs$core$async$state_machine__29937__auto____0 = (function (){
var statearr_30792 = [null,null,null,null,null,null,null,null,null];
(statearr_30792[(0)] = cljs$core$async$state_machine__29937__auto__);

(statearr_30792[(1)] = (1));

return statearr_30792;
});
var cljs$core$async$state_machine__29937__auto____1 = (function (state_30751){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_30751);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e30795){var ex__29940__auto__ = e30795;
var statearr_30796_32612 = state_30751;
(statearr_30796_32612[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_30751[(4)]))){
var statearr_30798_32613 = state_30751;
(statearr_30798_32613[(1)] = cljs.core.first((state_30751[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32614 = state_30751;
state_30751 = G__32614;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$state_machine__29937__auto__ = function(state_30751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29937__auto____1.call(this,state_30751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29937__auto____0;
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29937__auto____1;
return cljs$core$async$state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_30799 = f__30128__auto__();
(statearr_30799[(6)] = c__30127__auto___32572);

return statearr_30799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30127__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_30839){
var state_val_30840 = (state_30839[(1)]);
if((state_val_30840 === (7))){
var inst_30818 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30850_32615 = state_30839__$1;
(statearr_30850_32615[(2)] = inst_30818);

(statearr_30850_32615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (1))){
var inst_30801 = init;
var inst_30802 = inst_30801;
var state_30839__$1 = (function (){var statearr_30851 = state_30839;
(statearr_30851[(7)] = inst_30802);

return statearr_30851;
})();
var statearr_30852_32616 = state_30839__$1;
(statearr_30852_32616[(2)] = null);

(statearr_30852_32616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (4))){
var inst_30805 = (state_30839[(8)]);
var inst_30805__$1 = (state_30839[(2)]);
var inst_30806 = (inst_30805__$1 == null);
var state_30839__$1 = (function (){var statearr_30856 = state_30839;
(statearr_30856[(8)] = inst_30805__$1);

return statearr_30856;
})();
if(cljs.core.truth_(inst_30806)){
var statearr_30857_32617 = state_30839__$1;
(statearr_30857_32617[(1)] = (5));

} else {
var statearr_30858_32618 = state_30839__$1;
(statearr_30858_32618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (6))){
var inst_30802 = (state_30839[(7)]);
var inst_30809 = (state_30839[(9)]);
var inst_30805 = (state_30839[(8)]);
var inst_30809__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30802,inst_30805) : f.call(null,inst_30802,inst_30805));
var inst_30810 = cljs.core.reduced_QMARK_(inst_30809__$1);
var state_30839__$1 = (function (){var statearr_30864 = state_30839;
(statearr_30864[(9)] = inst_30809__$1);

return statearr_30864;
})();
if(inst_30810){
var statearr_30866_32628 = state_30839__$1;
(statearr_30866_32628[(1)] = (8));

} else {
var statearr_30868_32629 = state_30839__$1;
(statearr_30868_32629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (3))){
var inst_30834 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30839__$1,inst_30834);
} else {
if((state_val_30840 === (2))){
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30839__$1,(4),ch);
} else {
if((state_val_30840 === (9))){
var inst_30809 = (state_30839[(9)]);
var inst_30802 = inst_30809;
var state_30839__$1 = (function (){var statearr_30870 = state_30839;
(statearr_30870[(7)] = inst_30802);

return statearr_30870;
})();
var statearr_30882_32630 = state_30839__$1;
(statearr_30882_32630[(2)] = null);

(statearr_30882_32630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (5))){
var inst_30802 = (state_30839[(7)]);
var state_30839__$1 = state_30839;
var statearr_30887_32632 = state_30839__$1;
(statearr_30887_32632[(2)] = inst_30802);

(statearr_30887_32632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (10))){
var inst_30816 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30891_32633 = state_30839__$1;
(statearr_30891_32633[(2)] = inst_30816);

(statearr_30891_32633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (8))){
var inst_30809 = (state_30839[(9)]);
var inst_30812 = cljs.core.deref(inst_30809);
var state_30839__$1 = state_30839;
var statearr_30895_32634 = state_30839__$1;
(statearr_30895_32634[(2)] = inst_30812);

(statearr_30895_32634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29937__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29937__auto____0 = (function (){
var statearr_30900 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30900[(0)] = cljs$core$async$reduce_$_state_machine__29937__auto__);

(statearr_30900[(1)] = (1));

return statearr_30900;
});
var cljs$core$async$reduce_$_state_machine__29937__auto____1 = (function (state_30839){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_30839);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e30903){var ex__29940__auto__ = e30903;
var statearr_30904_32639 = state_30839;
(statearr_30904_32639[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_30839[(4)]))){
var statearr_30906_32640 = state_30839;
(statearr_30906_32640[(1)] = cljs.core.first((state_30839[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32642 = state_30839;
state_30839 = G__32642;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29937__auto__ = function(state_30839){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29937__auto____1.call(this,state_30839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29937__auto____0;
cljs$core$async$reduce_$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29937__auto____1;
return cljs$core$async$reduce_$_state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_30911 = f__30128__auto__();
(statearr_30911[(6)] = c__30127__auto__);

return statearr_30911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));

return c__30127__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30127__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_30979){
var state_val_30980 = (state_30979[(1)]);
if((state_val_30980 === (1))){
var inst_30974 = cljs.core.async.reduce(f__$1,init,ch);
var state_30979__$1 = state_30979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30979__$1,(2),inst_30974);
} else {
if((state_val_30980 === (2))){
var inst_30976 = (state_30979[(2)]);
var inst_30977 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30976) : f__$1.call(null,inst_30976));
var state_30979__$1 = state_30979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30979__$1,inst_30977);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29937__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29937__auto____0 = (function (){
var statearr_30989 = [null,null,null,null,null,null,null];
(statearr_30989[(0)] = cljs$core$async$transduce_$_state_machine__29937__auto__);

(statearr_30989[(1)] = (1));

return statearr_30989;
});
var cljs$core$async$transduce_$_state_machine__29937__auto____1 = (function (state_30979){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_30979);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e30991){var ex__29940__auto__ = e30991;
var statearr_30993_32657 = state_30979;
(statearr_30993_32657[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_30979[(4)]))){
var statearr_30995_32658 = state_30979;
(statearr_30995_32658[(1)] = cljs.core.first((state_30979[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32659 = state_30979;
state_30979 = G__32659;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29937__auto__ = function(state_30979){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29937__auto____1.call(this,state_30979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29937__auto____0;
cljs$core$async$transduce_$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29937__auto____1;
return cljs$core$async$transduce_$_state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_30998 = f__30128__auto__();
(statearr_30998[(6)] = c__30127__auto__);

return statearr_30998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));

return c__30127__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31006 = arguments.length;
switch (G__31006) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30127__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_31049){
var state_val_31054 = (state_31049[(1)]);
if((state_val_31054 === (7))){
var inst_31031 = (state_31049[(2)]);
var state_31049__$1 = state_31049;
var statearr_31096_32692 = state_31049__$1;
(statearr_31096_32692[(2)] = inst_31031);

(statearr_31096_32692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31054 === (1))){
var inst_31018 = cljs.core.seq(coll);
var inst_31019 = inst_31018;
var state_31049__$1 = (function (){var statearr_31098 = state_31049;
(statearr_31098[(7)] = inst_31019);

return statearr_31098;
})();
var statearr_31099_32693 = state_31049__$1;
(statearr_31099_32693[(2)] = null);

(statearr_31099_32693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31054 === (4))){
var inst_31019 = (state_31049[(7)]);
var inst_31027 = cljs.core.first(inst_31019);
var state_31049__$1 = state_31049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31049__$1,(7),ch,inst_31027);
} else {
if((state_val_31054 === (13))){
var inst_31043 = (state_31049[(2)]);
var state_31049__$1 = state_31049;
var statearr_31100_32702 = state_31049__$1;
(statearr_31100_32702[(2)] = inst_31043);

(statearr_31100_32702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31054 === (6))){
var inst_31034 = (state_31049[(2)]);
var state_31049__$1 = state_31049;
if(cljs.core.truth_(inst_31034)){
var statearr_31101_32703 = state_31049__$1;
(statearr_31101_32703[(1)] = (8));

} else {
var statearr_31102_32704 = state_31049__$1;
(statearr_31102_32704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31054 === (3))){
var inst_31047 = (state_31049[(2)]);
var state_31049__$1 = state_31049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31049__$1,inst_31047);
} else {
if((state_val_31054 === (12))){
var state_31049__$1 = state_31049;
var statearr_31103_32705 = state_31049__$1;
(statearr_31103_32705[(2)] = null);

(statearr_31103_32705[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31054 === (2))){
var inst_31019 = (state_31049[(7)]);
var state_31049__$1 = state_31049;
if(cljs.core.truth_(inst_31019)){
var statearr_31104_32706 = state_31049__$1;
(statearr_31104_32706[(1)] = (4));

} else {
var statearr_31105_32707 = state_31049__$1;
(statearr_31105_32707[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31054 === (11))){
var inst_31040 = cljs.core.async.close_BANG_(ch);
var state_31049__$1 = state_31049;
var statearr_31106_32708 = state_31049__$1;
(statearr_31106_32708[(2)] = inst_31040);

(statearr_31106_32708[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31054 === (9))){
var state_31049__$1 = state_31049;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31121_32709 = state_31049__$1;
(statearr_31121_32709[(1)] = (11));

} else {
var statearr_31124_32710 = state_31049__$1;
(statearr_31124_32710[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31054 === (5))){
var inst_31019 = (state_31049[(7)]);
var state_31049__$1 = state_31049;
var statearr_31126_32711 = state_31049__$1;
(statearr_31126_32711[(2)] = inst_31019);

(statearr_31126_32711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31054 === (10))){
var inst_31045 = (state_31049[(2)]);
var state_31049__$1 = state_31049;
var statearr_31127_32712 = state_31049__$1;
(statearr_31127_32712[(2)] = inst_31045);

(statearr_31127_32712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31054 === (8))){
var inst_31019 = (state_31049[(7)]);
var inst_31036 = cljs.core.next(inst_31019);
var inst_31019__$1 = inst_31036;
var state_31049__$1 = (function (){var statearr_31131 = state_31049;
(statearr_31131[(7)] = inst_31019__$1);

return statearr_31131;
})();
var statearr_31132_32713 = state_31049__$1;
(statearr_31132_32713[(2)] = null);

(statearr_31132_32713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29937__auto__ = null;
var cljs$core$async$state_machine__29937__auto____0 = (function (){
var statearr_31134 = [null,null,null,null,null,null,null,null];
(statearr_31134[(0)] = cljs$core$async$state_machine__29937__auto__);

(statearr_31134[(1)] = (1));

return statearr_31134;
});
var cljs$core$async$state_machine__29937__auto____1 = (function (state_31049){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_31049);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e31138){var ex__29940__auto__ = e31138;
var statearr_31139_32722 = state_31049;
(statearr_31139_32722[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_31049[(4)]))){
var statearr_31140_32723 = state_31049;
(statearr_31140_32723[(1)] = cljs.core.first((state_31049[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32724 = state_31049;
state_31049 = G__32724;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$state_machine__29937__auto__ = function(state_31049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29937__auto____1.call(this,state_31049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29937__auto____0;
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29937__auto____1;
return cljs$core$async$state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_31141 = f__30128__auto__();
(statearr_31141[(6)] = c__30127__auto__);

return statearr_31141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));

return c__30127__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31163 = arguments.length;
switch (G__31163) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32726 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32726(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32727 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32727(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32728 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32728(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32729 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32729(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31182 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31182 = (function (ch,cs,meta31183){
this.ch = ch;
this.cs = cs;
this.meta31183 = meta31183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31184,meta31183__$1){
var self__ = this;
var _31184__$1 = this;
return (new cljs.core.async.t_cljs$core$async31182(self__.ch,self__.cs,meta31183__$1));
}));

(cljs.core.async.t_cljs$core$async31182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31184){
var self__ = this;
var _31184__$1 = this;
return self__.meta31183;
}));

(cljs.core.async.t_cljs$core$async31182.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31182.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31182.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31182.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31182.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31182.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31183","meta31183",1216510202,null)], null);
}));

(cljs.core.async.t_cljs$core$async31182.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31182");

(cljs.core.async.t_cljs$core$async31182.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31182");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31182.
 */
cljs.core.async.__GT_t_cljs$core$async31182 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31182(ch__$1,cs__$1,meta31183){
return (new cljs.core.async.t_cljs$core$async31182(ch__$1,cs__$1,meta31183));
});

}

return (new cljs.core.async.t_cljs$core$async31182(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30127__auto___32758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_31329){
var state_val_31330 = (state_31329[(1)]);
if((state_val_31330 === (7))){
var inst_31323 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31332_32759 = state_31329__$1;
(statearr_31332_32759[(2)] = inst_31323);

(statearr_31332_32759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (20))){
var inst_31224 = (state_31329[(7)]);
var inst_31238 = cljs.core.first(inst_31224);
var inst_31239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31238,(0),null);
var inst_31240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31238,(1),null);
var state_31329__$1 = (function (){var statearr_31335 = state_31329;
(statearr_31335[(8)] = inst_31239);

return statearr_31335;
})();
if(cljs.core.truth_(inst_31240)){
var statearr_31336_32760 = state_31329__$1;
(statearr_31336_32760[(1)] = (22));

} else {
var statearr_31337_32761 = state_31329__$1;
(statearr_31337_32761[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (27))){
var inst_31269 = (state_31329[(9)]);
var inst_31271 = (state_31329[(10)]);
var inst_31276 = (state_31329[(11)]);
var inst_31191 = (state_31329[(12)]);
var inst_31276__$1 = cljs.core._nth(inst_31269,inst_31271);
var inst_31277 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31276__$1,inst_31191,done);
var state_31329__$1 = (function (){var statearr_31338 = state_31329;
(statearr_31338[(11)] = inst_31276__$1);

return statearr_31338;
})();
if(cljs.core.truth_(inst_31277)){
var statearr_31341_32762 = state_31329__$1;
(statearr_31341_32762[(1)] = (30));

} else {
var statearr_31343_32763 = state_31329__$1;
(statearr_31343_32763[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (1))){
var state_31329__$1 = state_31329;
var statearr_31344_32764 = state_31329__$1;
(statearr_31344_32764[(2)] = null);

(statearr_31344_32764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (24))){
var inst_31224 = (state_31329[(7)]);
var inst_31246 = (state_31329[(2)]);
var inst_31247 = cljs.core.next(inst_31224);
var inst_31200 = inst_31247;
var inst_31201 = null;
var inst_31202 = (0);
var inst_31203 = (0);
var state_31329__$1 = (function (){var statearr_31345 = state_31329;
(statearr_31345[(13)] = inst_31246);

(statearr_31345[(14)] = inst_31200);

(statearr_31345[(15)] = inst_31203);

(statearr_31345[(16)] = inst_31201);

(statearr_31345[(17)] = inst_31202);

return statearr_31345;
})();
var statearr_31346_32765 = state_31329__$1;
(statearr_31346_32765[(2)] = null);

(statearr_31346_32765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (39))){
var state_31329__$1 = state_31329;
var statearr_31354_32766 = state_31329__$1;
(statearr_31354_32766[(2)] = null);

(statearr_31354_32766[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (4))){
var inst_31191 = (state_31329[(12)]);
var inst_31191__$1 = (state_31329[(2)]);
var inst_31192 = (inst_31191__$1 == null);
var state_31329__$1 = (function (){var statearr_31362 = state_31329;
(statearr_31362[(12)] = inst_31191__$1);

return statearr_31362;
})();
if(cljs.core.truth_(inst_31192)){
var statearr_31365_32767 = state_31329__$1;
(statearr_31365_32767[(1)] = (5));

} else {
var statearr_31371_32768 = state_31329__$1;
(statearr_31371_32768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (15))){
var inst_31200 = (state_31329[(14)]);
var inst_31203 = (state_31329[(15)]);
var inst_31201 = (state_31329[(16)]);
var inst_31202 = (state_31329[(17)]);
var inst_31220 = (state_31329[(2)]);
var inst_31221 = (inst_31203 + (1));
var tmp31347 = inst_31200;
var tmp31348 = inst_31201;
var tmp31349 = inst_31202;
var inst_31200__$1 = tmp31347;
var inst_31201__$1 = tmp31348;
var inst_31202__$1 = tmp31349;
var inst_31203__$1 = inst_31221;
var state_31329__$1 = (function (){var statearr_31379 = state_31329;
(statearr_31379[(18)] = inst_31220);

(statearr_31379[(14)] = inst_31200__$1);

(statearr_31379[(15)] = inst_31203__$1);

(statearr_31379[(16)] = inst_31201__$1);

(statearr_31379[(17)] = inst_31202__$1);

return statearr_31379;
})();
var statearr_31384_32769 = state_31329__$1;
(statearr_31384_32769[(2)] = null);

(statearr_31384_32769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (21))){
var inst_31250 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31406_32770 = state_31329__$1;
(statearr_31406_32770[(2)] = inst_31250);

(statearr_31406_32770[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (31))){
var inst_31276 = (state_31329[(11)]);
var inst_31280 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31276);
var state_31329__$1 = state_31329;
var statearr_31411_32771 = state_31329__$1;
(statearr_31411_32771[(2)] = inst_31280);

(statearr_31411_32771[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (32))){
var inst_31269 = (state_31329[(9)]);
var inst_31271 = (state_31329[(10)]);
var inst_31270 = (state_31329[(19)]);
var inst_31268 = (state_31329[(20)]);
var inst_31282 = (state_31329[(2)]);
var inst_31283 = (inst_31271 + (1));
var tmp31386 = inst_31269;
var tmp31387 = inst_31270;
var tmp31388 = inst_31268;
var inst_31268__$1 = tmp31388;
var inst_31269__$1 = tmp31386;
var inst_31270__$1 = tmp31387;
var inst_31271__$1 = inst_31283;
var state_31329__$1 = (function (){var statearr_31412 = state_31329;
(statearr_31412[(9)] = inst_31269__$1);

(statearr_31412[(10)] = inst_31271__$1);

(statearr_31412[(19)] = inst_31270__$1);

(statearr_31412[(21)] = inst_31282);

(statearr_31412[(20)] = inst_31268__$1);

return statearr_31412;
})();
var statearr_31413_32794 = state_31329__$1;
(statearr_31413_32794[(2)] = null);

(statearr_31413_32794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (40))){
var inst_31295 = (state_31329[(22)]);
var inst_31299 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31295);
var state_31329__$1 = state_31329;
var statearr_31414_32800 = state_31329__$1;
(statearr_31414_32800[(2)] = inst_31299);

(statearr_31414_32800[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (33))){
var inst_31286 = (state_31329[(23)]);
var inst_31288 = cljs.core.chunked_seq_QMARK_(inst_31286);
var state_31329__$1 = state_31329;
if(inst_31288){
var statearr_31415_32808 = state_31329__$1;
(statearr_31415_32808[(1)] = (36));

} else {
var statearr_31416_32809 = state_31329__$1;
(statearr_31416_32809[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (13))){
var inst_31214 = (state_31329[(24)]);
var inst_31217 = cljs.core.async.close_BANG_(inst_31214);
var state_31329__$1 = state_31329;
var statearr_31418_32816 = state_31329__$1;
(statearr_31418_32816[(2)] = inst_31217);

(statearr_31418_32816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (22))){
var inst_31239 = (state_31329[(8)]);
var inst_31243 = cljs.core.async.close_BANG_(inst_31239);
var state_31329__$1 = state_31329;
var statearr_31421_32817 = state_31329__$1;
(statearr_31421_32817[(2)] = inst_31243);

(statearr_31421_32817[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (36))){
var inst_31286 = (state_31329[(23)]);
var inst_31290 = cljs.core.chunk_first(inst_31286);
var inst_31291 = cljs.core.chunk_rest(inst_31286);
var inst_31292 = cljs.core.count(inst_31290);
var inst_31268 = inst_31291;
var inst_31269 = inst_31290;
var inst_31270 = inst_31292;
var inst_31271 = (0);
var state_31329__$1 = (function (){var statearr_31426 = state_31329;
(statearr_31426[(9)] = inst_31269);

(statearr_31426[(10)] = inst_31271);

(statearr_31426[(19)] = inst_31270);

(statearr_31426[(20)] = inst_31268);

return statearr_31426;
})();
var statearr_31427_32818 = state_31329__$1;
(statearr_31427_32818[(2)] = null);

(statearr_31427_32818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (41))){
var inst_31286 = (state_31329[(23)]);
var inst_31301 = (state_31329[(2)]);
var inst_31302 = cljs.core.next(inst_31286);
var inst_31268 = inst_31302;
var inst_31269 = null;
var inst_31270 = (0);
var inst_31271 = (0);
var state_31329__$1 = (function (){var statearr_31429 = state_31329;
(statearr_31429[(25)] = inst_31301);

(statearr_31429[(9)] = inst_31269);

(statearr_31429[(10)] = inst_31271);

(statearr_31429[(19)] = inst_31270);

(statearr_31429[(20)] = inst_31268);

return statearr_31429;
})();
var statearr_31431_32819 = state_31329__$1;
(statearr_31431_32819[(2)] = null);

(statearr_31431_32819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (43))){
var state_31329__$1 = state_31329;
var statearr_31432_32820 = state_31329__$1;
(statearr_31432_32820[(2)] = null);

(statearr_31432_32820[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (29))){
var inst_31310 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31433_32821 = state_31329__$1;
(statearr_31433_32821[(2)] = inst_31310);

(statearr_31433_32821[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (44))){
var inst_31319 = (state_31329[(2)]);
var state_31329__$1 = (function (){var statearr_31434 = state_31329;
(statearr_31434[(26)] = inst_31319);

return statearr_31434;
})();
var statearr_31435_32822 = state_31329__$1;
(statearr_31435_32822[(2)] = null);

(statearr_31435_32822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (6))){
var inst_31260 = (state_31329[(27)]);
var inst_31259 = cljs.core.deref(cs);
var inst_31260__$1 = cljs.core.keys(inst_31259);
var inst_31261 = cljs.core.count(inst_31260__$1);
var inst_31262 = cljs.core.reset_BANG_(dctr,inst_31261);
var inst_31267 = cljs.core.seq(inst_31260__$1);
var inst_31268 = inst_31267;
var inst_31269 = null;
var inst_31270 = (0);
var inst_31271 = (0);
var state_31329__$1 = (function (){var statearr_31436 = state_31329;
(statearr_31436[(9)] = inst_31269);

(statearr_31436[(10)] = inst_31271);

(statearr_31436[(19)] = inst_31270);

(statearr_31436[(28)] = inst_31262);

(statearr_31436[(20)] = inst_31268);

(statearr_31436[(27)] = inst_31260__$1);

return statearr_31436;
})();
var statearr_31437_32823 = state_31329__$1;
(statearr_31437_32823[(2)] = null);

(statearr_31437_32823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (28))){
var inst_31286 = (state_31329[(23)]);
var inst_31268 = (state_31329[(20)]);
var inst_31286__$1 = cljs.core.seq(inst_31268);
var state_31329__$1 = (function (){var statearr_31441 = state_31329;
(statearr_31441[(23)] = inst_31286__$1);

return statearr_31441;
})();
if(inst_31286__$1){
var statearr_31442_32841 = state_31329__$1;
(statearr_31442_32841[(1)] = (33));

} else {
var statearr_31443_32842 = state_31329__$1;
(statearr_31443_32842[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (25))){
var inst_31271 = (state_31329[(10)]);
var inst_31270 = (state_31329[(19)]);
var inst_31273 = (inst_31271 < inst_31270);
var inst_31274 = inst_31273;
var state_31329__$1 = state_31329;
if(cljs.core.truth_(inst_31274)){
var statearr_31444_32843 = state_31329__$1;
(statearr_31444_32843[(1)] = (27));

} else {
var statearr_31446_32844 = state_31329__$1;
(statearr_31446_32844[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (34))){
var state_31329__$1 = state_31329;
var statearr_31449_32845 = state_31329__$1;
(statearr_31449_32845[(2)] = null);

(statearr_31449_32845[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (17))){
var state_31329__$1 = state_31329;
var statearr_31451_32847 = state_31329__$1;
(statearr_31451_32847[(2)] = null);

(statearr_31451_32847[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (3))){
var inst_31325 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31329__$1,inst_31325);
} else {
if((state_val_31330 === (12))){
var inst_31255 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31452_32848 = state_31329__$1;
(statearr_31452_32848[(2)] = inst_31255);

(statearr_31452_32848[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (2))){
var state_31329__$1 = state_31329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31329__$1,(4),ch);
} else {
if((state_val_31330 === (23))){
var state_31329__$1 = state_31329;
var statearr_31454_32849 = state_31329__$1;
(statearr_31454_32849[(2)] = null);

(statearr_31454_32849[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (35))){
var inst_31308 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31455_32850 = state_31329__$1;
(statearr_31455_32850[(2)] = inst_31308);

(statearr_31455_32850[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (19))){
var inst_31224 = (state_31329[(7)]);
var inst_31229 = cljs.core.chunk_first(inst_31224);
var inst_31230 = cljs.core.chunk_rest(inst_31224);
var inst_31231 = cljs.core.count(inst_31229);
var inst_31200 = inst_31230;
var inst_31201 = inst_31229;
var inst_31202 = inst_31231;
var inst_31203 = (0);
var state_31329__$1 = (function (){var statearr_31457 = state_31329;
(statearr_31457[(14)] = inst_31200);

(statearr_31457[(15)] = inst_31203);

(statearr_31457[(16)] = inst_31201);

(statearr_31457[(17)] = inst_31202);

return statearr_31457;
})();
var statearr_31458_32851 = state_31329__$1;
(statearr_31458_32851[(2)] = null);

(statearr_31458_32851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (11))){
var inst_31200 = (state_31329[(14)]);
var inst_31224 = (state_31329[(7)]);
var inst_31224__$1 = cljs.core.seq(inst_31200);
var state_31329__$1 = (function (){var statearr_31460 = state_31329;
(statearr_31460[(7)] = inst_31224__$1);

return statearr_31460;
})();
if(inst_31224__$1){
var statearr_31461_32853 = state_31329__$1;
(statearr_31461_32853[(1)] = (16));

} else {
var statearr_31462_32854 = state_31329__$1;
(statearr_31462_32854[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (9))){
var inst_31257 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31463_32855 = state_31329__$1;
(statearr_31463_32855[(2)] = inst_31257);

(statearr_31463_32855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (5))){
var inst_31198 = cljs.core.deref(cs);
var inst_31199 = cljs.core.seq(inst_31198);
var inst_31200 = inst_31199;
var inst_31201 = null;
var inst_31202 = (0);
var inst_31203 = (0);
var state_31329__$1 = (function (){var statearr_31464 = state_31329;
(statearr_31464[(14)] = inst_31200);

(statearr_31464[(15)] = inst_31203);

(statearr_31464[(16)] = inst_31201);

(statearr_31464[(17)] = inst_31202);

return statearr_31464;
})();
var statearr_31465_32856 = state_31329__$1;
(statearr_31465_32856[(2)] = null);

(statearr_31465_32856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (14))){
var state_31329__$1 = state_31329;
var statearr_31466_32857 = state_31329__$1;
(statearr_31466_32857[(2)] = null);

(statearr_31466_32857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (45))){
var inst_31316 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31467_32858 = state_31329__$1;
(statearr_31467_32858[(2)] = inst_31316);

(statearr_31467_32858[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (26))){
var inst_31260 = (state_31329[(27)]);
var inst_31312 = (state_31329[(2)]);
var inst_31313 = cljs.core.seq(inst_31260);
var state_31329__$1 = (function (){var statearr_31468 = state_31329;
(statearr_31468[(29)] = inst_31312);

return statearr_31468;
})();
if(inst_31313){
var statearr_31469_32865 = state_31329__$1;
(statearr_31469_32865[(1)] = (42));

} else {
var statearr_31470_32866 = state_31329__$1;
(statearr_31470_32866[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (16))){
var inst_31224 = (state_31329[(7)]);
var inst_31227 = cljs.core.chunked_seq_QMARK_(inst_31224);
var state_31329__$1 = state_31329;
if(inst_31227){
var statearr_31472_32867 = state_31329__$1;
(statearr_31472_32867[(1)] = (19));

} else {
var statearr_31473_32868 = state_31329__$1;
(statearr_31473_32868[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (38))){
var inst_31305 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31474_32869 = state_31329__$1;
(statearr_31474_32869[(2)] = inst_31305);

(statearr_31474_32869[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (30))){
var state_31329__$1 = state_31329;
var statearr_31475_32870 = state_31329__$1;
(statearr_31475_32870[(2)] = null);

(statearr_31475_32870[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (10))){
var inst_31203 = (state_31329[(15)]);
var inst_31201 = (state_31329[(16)]);
var inst_31211 = cljs.core._nth(inst_31201,inst_31203);
var inst_31214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31211,(0),null);
var inst_31215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31211,(1),null);
var state_31329__$1 = (function (){var statearr_31476 = state_31329;
(statearr_31476[(24)] = inst_31214);

return statearr_31476;
})();
if(cljs.core.truth_(inst_31215)){
var statearr_31477_32871 = state_31329__$1;
(statearr_31477_32871[(1)] = (13));

} else {
var statearr_31478_32872 = state_31329__$1;
(statearr_31478_32872[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (18))){
var inst_31253 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31479_32873 = state_31329__$1;
(statearr_31479_32873[(2)] = inst_31253);

(statearr_31479_32873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (42))){
var state_31329__$1 = state_31329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31329__$1,(45),dchan);
} else {
if((state_val_31330 === (37))){
var inst_31295 = (state_31329[(22)]);
var inst_31286 = (state_31329[(23)]);
var inst_31191 = (state_31329[(12)]);
var inst_31295__$1 = cljs.core.first(inst_31286);
var inst_31296 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31295__$1,inst_31191,done);
var state_31329__$1 = (function (){var statearr_31481 = state_31329;
(statearr_31481[(22)] = inst_31295__$1);

return statearr_31481;
})();
if(cljs.core.truth_(inst_31296)){
var statearr_31482_32874 = state_31329__$1;
(statearr_31482_32874[(1)] = (39));

} else {
var statearr_31483_32875 = state_31329__$1;
(statearr_31483_32875[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (8))){
var inst_31203 = (state_31329[(15)]);
var inst_31202 = (state_31329[(17)]);
var inst_31205 = (inst_31203 < inst_31202);
var inst_31206 = inst_31205;
var state_31329__$1 = state_31329;
if(cljs.core.truth_(inst_31206)){
var statearr_31485_32876 = state_31329__$1;
(statearr_31485_32876[(1)] = (10));

} else {
var statearr_31486_32877 = state_31329__$1;
(statearr_31486_32877[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29937__auto__ = null;
var cljs$core$async$mult_$_state_machine__29937__auto____0 = (function (){
var statearr_31487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31487[(0)] = cljs$core$async$mult_$_state_machine__29937__auto__);

(statearr_31487[(1)] = (1));

return statearr_31487;
});
var cljs$core$async$mult_$_state_machine__29937__auto____1 = (function (state_31329){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_31329);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e31488){var ex__29940__auto__ = e31488;
var statearr_31489_32883 = state_31329;
(statearr_31489_32883[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_31329[(4)]))){
var statearr_31490_32884 = state_31329;
(statearr_31490_32884[(1)] = cljs.core.first((state_31329[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32885 = state_31329;
state_31329 = G__32885;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29937__auto__ = function(state_31329){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29937__auto____1.call(this,state_31329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29937__auto____0;
cljs$core$async$mult_$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29937__auto____1;
return cljs$core$async$mult_$_state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_31491 = f__30128__auto__();
(statearr_31491[(6)] = c__30127__auto___32758);

return statearr_31491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31494 = arguments.length;
switch (G__31494) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32887 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32887(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32888 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32888(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32889 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32889(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32890 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32890(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32891 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32891(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32892 = arguments.length;
var i__4737__auto___32893 = (0);
while(true){
if((i__4737__auto___32893 < len__4736__auto___32892)){
args__4742__auto__.push((arguments[i__4737__auto___32893]));

var G__32894 = (i__4737__auto___32893 + (1));
i__4737__auto___32893 = G__32894;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31508){
var map__31509 = p__31508;
var map__31509__$1 = (((((!((map__31509 == null))))?(((((map__31509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31509):map__31509);
var opts = map__31509__$1;
var statearr_31511_32911 = state;
(statearr_31511_32911[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31512_32912 = state;
(statearr_31512_32912[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31513_32913 = state;
(statearr_31513_32913[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31504){
var G__31505 = cljs.core.first(seq31504);
var seq31504__$1 = cljs.core.next(seq31504);
var G__31506 = cljs.core.first(seq31504__$1);
var seq31504__$2 = cljs.core.next(seq31504__$1);
var G__31507 = cljs.core.first(seq31504__$2);
var seq31504__$3 = cljs.core.next(seq31504__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31505,G__31506,G__31507,seq31504__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31514 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31514 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31515){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31515 = meta31515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31516,meta31515__$1){
var self__ = this;
var _31516__$1 = this;
return (new cljs.core.async.t_cljs$core$async31514(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31515__$1));
}));

(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31516){
var self__ = this;
var _31516__$1 = this;
return self__.meta31515;
}));

(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31515","meta31515",301609692,null)], null);
}));

(cljs.core.async.t_cljs$core$async31514.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31514");

(cljs.core.async.t_cljs$core$async31514.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31514");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31514.
 */
cljs.core.async.__GT_t_cljs$core$async31514 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31514(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31515){
return (new cljs.core.async.t_cljs$core$async31514(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31515));
});

}

return (new cljs.core.async.t_cljs$core$async31514(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30127__auto___32927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_31618){
var state_val_31619 = (state_31618[(1)]);
if((state_val_31619 === (7))){
var inst_31533 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
var statearr_31620_32928 = state_31618__$1;
(statearr_31620_32928[(2)] = inst_31533);

(statearr_31620_32928[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (20))){
var inst_31545 = (state_31618[(7)]);
var state_31618__$1 = state_31618;
var statearr_31621_32929 = state_31618__$1;
(statearr_31621_32929[(2)] = inst_31545);

(statearr_31621_32929[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (27))){
var state_31618__$1 = state_31618;
var statearr_31622_32930 = state_31618__$1;
(statearr_31622_32930[(2)] = null);

(statearr_31622_32930[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (1))){
var inst_31520 = (state_31618[(8)]);
var inst_31520__$1 = calc_state();
var inst_31522 = (inst_31520__$1 == null);
var inst_31523 = cljs.core.not(inst_31522);
var state_31618__$1 = (function (){var statearr_31623 = state_31618;
(statearr_31623[(8)] = inst_31520__$1);

return statearr_31623;
})();
if(inst_31523){
var statearr_31624_32931 = state_31618__$1;
(statearr_31624_32931[(1)] = (2));

} else {
var statearr_31625_32932 = state_31618__$1;
(statearr_31625_32932[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (24))){
var inst_31569 = (state_31618[(9)]);
var inst_31578 = (state_31618[(10)]);
var inst_31592 = (state_31618[(11)]);
var inst_31592__$1 = (inst_31569.cljs$core$IFn$_invoke$arity$1 ? inst_31569.cljs$core$IFn$_invoke$arity$1(inst_31578) : inst_31569.call(null,inst_31578));
var state_31618__$1 = (function (){var statearr_31626 = state_31618;
(statearr_31626[(11)] = inst_31592__$1);

return statearr_31626;
})();
if(cljs.core.truth_(inst_31592__$1)){
var statearr_31627_32937 = state_31618__$1;
(statearr_31627_32937[(1)] = (29));

} else {
var statearr_31628_32938 = state_31618__$1;
(statearr_31628_32938[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (4))){
var inst_31536 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
if(cljs.core.truth_(inst_31536)){
var statearr_31629_32939 = state_31618__$1;
(statearr_31629_32939[(1)] = (8));

} else {
var statearr_31630_32940 = state_31618__$1;
(statearr_31630_32940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (15))){
var inst_31563 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
if(cljs.core.truth_(inst_31563)){
var statearr_31631_32941 = state_31618__$1;
(statearr_31631_32941[(1)] = (19));

} else {
var statearr_31632_32942 = state_31618__$1;
(statearr_31632_32942[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (21))){
var inst_31568 = (state_31618[(12)]);
var inst_31568__$1 = (state_31618[(2)]);
var inst_31569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31568__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31568__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31568__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31618__$1 = (function (){var statearr_31633 = state_31618;
(statearr_31633[(13)] = inst_31570);

(statearr_31633[(9)] = inst_31569);

(statearr_31633[(12)] = inst_31568__$1);

return statearr_31633;
})();
return cljs.core.async.ioc_alts_BANG_(state_31618__$1,(22),inst_31571);
} else {
if((state_val_31619 === (31))){
var inst_31600 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
if(cljs.core.truth_(inst_31600)){
var statearr_31634_32943 = state_31618__$1;
(statearr_31634_32943[(1)] = (32));

} else {
var statearr_31635_32944 = state_31618__$1;
(statearr_31635_32944[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (32))){
var inst_31577 = (state_31618[(14)]);
var state_31618__$1 = state_31618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31618__$1,(35),out,inst_31577);
} else {
if((state_val_31619 === (33))){
var inst_31568 = (state_31618[(12)]);
var inst_31545 = inst_31568;
var state_31618__$1 = (function (){var statearr_31636 = state_31618;
(statearr_31636[(7)] = inst_31545);

return statearr_31636;
})();
var statearr_31637_32950 = state_31618__$1;
(statearr_31637_32950[(2)] = null);

(statearr_31637_32950[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (13))){
var inst_31545 = (state_31618[(7)]);
var inst_31552 = inst_31545.cljs$lang$protocol_mask$partition0$;
var inst_31553 = (inst_31552 & (64));
var inst_31554 = inst_31545.cljs$core$ISeq$;
var inst_31555 = (cljs.core.PROTOCOL_SENTINEL === inst_31554);
var inst_31556 = ((inst_31553) || (inst_31555));
var state_31618__$1 = state_31618;
if(cljs.core.truth_(inst_31556)){
var statearr_31638_32951 = state_31618__$1;
(statearr_31638_32951[(1)] = (16));

} else {
var statearr_31639_32952 = state_31618__$1;
(statearr_31639_32952[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (22))){
var inst_31577 = (state_31618[(14)]);
var inst_31578 = (state_31618[(10)]);
var inst_31576 = (state_31618[(2)]);
var inst_31577__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31576,(0),null);
var inst_31578__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31576,(1),null);
var inst_31579 = (inst_31577__$1 == null);
var inst_31580 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31578__$1,change);
var inst_31581 = ((inst_31579) || (inst_31580));
var state_31618__$1 = (function (){var statearr_31640 = state_31618;
(statearr_31640[(14)] = inst_31577__$1);

(statearr_31640[(10)] = inst_31578__$1);

return statearr_31640;
})();
if(cljs.core.truth_(inst_31581)){
var statearr_31641_32954 = state_31618__$1;
(statearr_31641_32954[(1)] = (23));

} else {
var statearr_31642_32956 = state_31618__$1;
(statearr_31642_32956[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (36))){
var inst_31568 = (state_31618[(12)]);
var inst_31545 = inst_31568;
var state_31618__$1 = (function (){var statearr_31643 = state_31618;
(statearr_31643[(7)] = inst_31545);

return statearr_31643;
})();
var statearr_31645_32958 = state_31618__$1;
(statearr_31645_32958[(2)] = null);

(statearr_31645_32958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (29))){
var inst_31592 = (state_31618[(11)]);
var state_31618__$1 = state_31618;
var statearr_31646_32959 = state_31618__$1;
(statearr_31646_32959[(2)] = inst_31592);

(statearr_31646_32959[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (6))){
var state_31618__$1 = state_31618;
var statearr_31647_32960 = state_31618__$1;
(statearr_31647_32960[(2)] = false);

(statearr_31647_32960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (28))){
var inst_31588 = (state_31618[(2)]);
var inst_31589 = calc_state();
var inst_31545 = inst_31589;
var state_31618__$1 = (function (){var statearr_31648 = state_31618;
(statearr_31648[(7)] = inst_31545);

(statearr_31648[(15)] = inst_31588);

return statearr_31648;
})();
var statearr_31649_32965 = state_31618__$1;
(statearr_31649_32965[(2)] = null);

(statearr_31649_32965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (25))){
var inst_31614 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
var statearr_31650_32966 = state_31618__$1;
(statearr_31650_32966[(2)] = inst_31614);

(statearr_31650_32966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (34))){
var inst_31612 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
var statearr_31651_32967 = state_31618__$1;
(statearr_31651_32967[(2)] = inst_31612);

(statearr_31651_32967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (17))){
var state_31618__$1 = state_31618;
var statearr_31652_32968 = state_31618__$1;
(statearr_31652_32968[(2)] = false);

(statearr_31652_32968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (3))){
var state_31618__$1 = state_31618;
var statearr_31653_32969 = state_31618__$1;
(statearr_31653_32969[(2)] = false);

(statearr_31653_32969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (12))){
var inst_31616 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31618__$1,inst_31616);
} else {
if((state_val_31619 === (2))){
var inst_31520 = (state_31618[(8)]);
var inst_31525 = inst_31520.cljs$lang$protocol_mask$partition0$;
var inst_31526 = (inst_31525 & (64));
var inst_31527 = inst_31520.cljs$core$ISeq$;
var inst_31528 = (cljs.core.PROTOCOL_SENTINEL === inst_31527);
var inst_31529 = ((inst_31526) || (inst_31528));
var state_31618__$1 = state_31618;
if(cljs.core.truth_(inst_31529)){
var statearr_31654_32970 = state_31618__$1;
(statearr_31654_32970[(1)] = (5));

} else {
var statearr_31655_32971 = state_31618__$1;
(statearr_31655_32971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (23))){
var inst_31577 = (state_31618[(14)]);
var inst_31583 = (inst_31577 == null);
var state_31618__$1 = state_31618;
if(cljs.core.truth_(inst_31583)){
var statearr_31656_32972 = state_31618__$1;
(statearr_31656_32972[(1)] = (26));

} else {
var statearr_31657_32973 = state_31618__$1;
(statearr_31657_32973[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (35))){
var inst_31603 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
if(cljs.core.truth_(inst_31603)){
var statearr_31658_32974 = state_31618__$1;
(statearr_31658_32974[(1)] = (36));

} else {
var statearr_31659_32975 = state_31618__$1;
(statearr_31659_32975[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (19))){
var inst_31545 = (state_31618[(7)]);
var inst_31565 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31545);
var state_31618__$1 = state_31618;
var statearr_31660_32976 = state_31618__$1;
(statearr_31660_32976[(2)] = inst_31565);

(statearr_31660_32976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (11))){
var inst_31545 = (state_31618[(7)]);
var inst_31549 = (inst_31545 == null);
var inst_31550 = cljs.core.not(inst_31549);
var state_31618__$1 = state_31618;
if(inst_31550){
var statearr_31661_32977 = state_31618__$1;
(statearr_31661_32977[(1)] = (13));

} else {
var statearr_31669_32978 = state_31618__$1;
(statearr_31669_32978[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (9))){
var inst_31520 = (state_31618[(8)]);
var state_31618__$1 = state_31618;
var statearr_31670_32979 = state_31618__$1;
(statearr_31670_32979[(2)] = inst_31520);

(statearr_31670_32979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (5))){
var state_31618__$1 = state_31618;
var statearr_31671_32980 = state_31618__$1;
(statearr_31671_32980[(2)] = true);

(statearr_31671_32980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (14))){
var state_31618__$1 = state_31618;
var statearr_31672_32981 = state_31618__$1;
(statearr_31672_32981[(2)] = false);

(statearr_31672_32981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (26))){
var inst_31578 = (state_31618[(10)]);
var inst_31585 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31578);
var state_31618__$1 = state_31618;
var statearr_31675_32982 = state_31618__$1;
(statearr_31675_32982[(2)] = inst_31585);

(statearr_31675_32982[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (16))){
var state_31618__$1 = state_31618;
var statearr_31676_32983 = state_31618__$1;
(statearr_31676_32983[(2)] = true);

(statearr_31676_32983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (38))){
var inst_31608 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
var statearr_31677_32987 = state_31618__$1;
(statearr_31677_32987[(2)] = inst_31608);

(statearr_31677_32987[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (30))){
var inst_31570 = (state_31618[(13)]);
var inst_31569 = (state_31618[(9)]);
var inst_31578 = (state_31618[(10)]);
var inst_31595 = cljs.core.empty_QMARK_(inst_31569);
var inst_31596 = (inst_31570.cljs$core$IFn$_invoke$arity$1 ? inst_31570.cljs$core$IFn$_invoke$arity$1(inst_31578) : inst_31570.call(null,inst_31578));
var inst_31597 = cljs.core.not(inst_31596);
var inst_31598 = ((inst_31595) && (inst_31597));
var state_31618__$1 = state_31618;
var statearr_31678_32988 = state_31618__$1;
(statearr_31678_32988[(2)] = inst_31598);

(statearr_31678_32988[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (10))){
var inst_31520 = (state_31618[(8)]);
var inst_31541 = (state_31618[(2)]);
var inst_31542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31541,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31541,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31541,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31545 = inst_31520;
var state_31618__$1 = (function (){var statearr_31679 = state_31618;
(statearr_31679[(7)] = inst_31545);

(statearr_31679[(16)] = inst_31543);

(statearr_31679[(17)] = inst_31542);

(statearr_31679[(18)] = inst_31544);

return statearr_31679;
})();
var statearr_31680_32989 = state_31618__$1;
(statearr_31680_32989[(2)] = null);

(statearr_31680_32989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (18))){
var inst_31560 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
var statearr_31681_32990 = state_31618__$1;
(statearr_31681_32990[(2)] = inst_31560);

(statearr_31681_32990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (37))){
var state_31618__$1 = state_31618;
var statearr_31682_32991 = state_31618__$1;
(statearr_31682_32991[(2)] = null);

(statearr_31682_32991[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (8))){
var inst_31520 = (state_31618[(8)]);
var inst_31538 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31520);
var state_31618__$1 = state_31618;
var statearr_31683_32992 = state_31618__$1;
(statearr_31683_32992[(2)] = inst_31538);

(statearr_31683_32992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29937__auto__ = null;
var cljs$core$async$mix_$_state_machine__29937__auto____0 = (function (){
var statearr_31684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31684[(0)] = cljs$core$async$mix_$_state_machine__29937__auto__);

(statearr_31684[(1)] = (1));

return statearr_31684;
});
var cljs$core$async$mix_$_state_machine__29937__auto____1 = (function (state_31618){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_31618);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e31685){var ex__29940__auto__ = e31685;
var statearr_31686_32994 = state_31618;
(statearr_31686_32994[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_31618[(4)]))){
var statearr_31687_32995 = state_31618;
(statearr_31687_32995[(1)] = cljs.core.first((state_31618[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32996 = state_31618;
state_31618 = G__32996;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29937__auto__ = function(state_31618){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29937__auto____1.call(this,state_31618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29937__auto____0;
cljs$core$async$mix_$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29937__auto____1;
return cljs$core$async$mix_$_state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_31702 = f__30128__auto__();
(statearr_31702[(6)] = c__30127__auto___32927);

return statearr_31702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_32997 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32997(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33003 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33003(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33004 = (function() {
var G__33005 = null;
var G__33005__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33005__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33005 = function(p,v){
switch(arguments.length){
case 1:
return G__33005__1.call(this,p);
case 2:
return G__33005__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33005.cljs$core$IFn$_invoke$arity$1 = G__33005__1;
G__33005.cljs$core$IFn$_invoke$arity$2 = G__33005__2;
return G__33005;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31708 = arguments.length;
switch (G__31708) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33004(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33004(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31711 = arguments.length;
switch (G__31711) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31709_SHARP_){
if(cljs.core.truth_((p1__31709_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31709_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31709_SHARP_.call(null,topic)))){
return p1__31709_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31709_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31712 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31713){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31713 = meta31713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31714,meta31713__$1){
var self__ = this;
var _31714__$1 = this;
return (new cljs.core.async.t_cljs$core$async31712(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31713__$1));
}));

(cljs.core.async.t_cljs$core$async31712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31714){
var self__ = this;
var _31714__$1 = this;
return self__.meta31713;
}));

(cljs.core.async.t_cljs$core$async31712.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31712.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31712.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31712.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31712.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31712.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31712.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31713","meta31713",-726402632,null)], null);
}));

(cljs.core.async.t_cljs$core$async31712.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31712");

(cljs.core.async.t_cljs$core$async31712.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31712");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31712.
 */
cljs.core.async.__GT_t_cljs$core$async31712 = (function cljs$core$async$__GT_t_cljs$core$async31712(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31713){
return (new cljs.core.async.t_cljs$core$async31712(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31713));
});

}

return (new cljs.core.async.t_cljs$core$async31712(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30127__auto___33017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_31786){
var state_val_31787 = (state_31786[(1)]);
if((state_val_31787 === (7))){
var inst_31782 = (state_31786[(2)]);
var state_31786__$1 = state_31786;
var statearr_31788_33018 = state_31786__$1;
(statearr_31788_33018[(2)] = inst_31782);

(statearr_31788_33018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (20))){
var state_31786__$1 = state_31786;
var statearr_31789_33019 = state_31786__$1;
(statearr_31789_33019[(2)] = null);

(statearr_31789_33019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (1))){
var state_31786__$1 = state_31786;
var statearr_31790_33020 = state_31786__$1;
(statearr_31790_33020[(2)] = null);

(statearr_31790_33020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (24))){
var inst_31765 = (state_31786[(7)]);
var inst_31774 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31765);
var state_31786__$1 = state_31786;
var statearr_31791_33021 = state_31786__$1;
(statearr_31791_33021[(2)] = inst_31774);

(statearr_31791_33021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (4))){
var inst_31717 = (state_31786[(8)]);
var inst_31717__$1 = (state_31786[(2)]);
var inst_31718 = (inst_31717__$1 == null);
var state_31786__$1 = (function (){var statearr_31792 = state_31786;
(statearr_31792[(8)] = inst_31717__$1);

return statearr_31792;
})();
if(cljs.core.truth_(inst_31718)){
var statearr_31793_33022 = state_31786__$1;
(statearr_31793_33022[(1)] = (5));

} else {
var statearr_31794_33023 = state_31786__$1;
(statearr_31794_33023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (15))){
var inst_31759 = (state_31786[(2)]);
var state_31786__$1 = state_31786;
var statearr_31795_33024 = state_31786__$1;
(statearr_31795_33024[(2)] = inst_31759);

(statearr_31795_33024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (21))){
var inst_31779 = (state_31786[(2)]);
var state_31786__$1 = (function (){var statearr_31796 = state_31786;
(statearr_31796[(9)] = inst_31779);

return statearr_31796;
})();
var statearr_31797_33025 = state_31786__$1;
(statearr_31797_33025[(2)] = null);

(statearr_31797_33025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (13))){
var inst_31741 = (state_31786[(10)]);
var inst_31743 = cljs.core.chunked_seq_QMARK_(inst_31741);
var state_31786__$1 = state_31786;
if(inst_31743){
var statearr_31798_33026 = state_31786__$1;
(statearr_31798_33026[(1)] = (16));

} else {
var statearr_31799_33027 = state_31786__$1;
(statearr_31799_33027[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (22))){
var inst_31771 = (state_31786[(2)]);
var state_31786__$1 = state_31786;
if(cljs.core.truth_(inst_31771)){
var statearr_31800_33028 = state_31786__$1;
(statearr_31800_33028[(1)] = (23));

} else {
var statearr_31801_33029 = state_31786__$1;
(statearr_31801_33029[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (6))){
var inst_31767 = (state_31786[(11)]);
var inst_31717 = (state_31786[(8)]);
var inst_31765 = (state_31786[(7)]);
var inst_31765__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31717) : topic_fn.call(null,inst_31717));
var inst_31766 = cljs.core.deref(mults);
var inst_31767__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31766,inst_31765__$1);
var state_31786__$1 = (function (){var statearr_31802 = state_31786;
(statearr_31802[(11)] = inst_31767__$1);

(statearr_31802[(7)] = inst_31765__$1);

return statearr_31802;
})();
if(cljs.core.truth_(inst_31767__$1)){
var statearr_31803_33032 = state_31786__$1;
(statearr_31803_33032[(1)] = (19));

} else {
var statearr_31804_33033 = state_31786__$1;
(statearr_31804_33033[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (25))){
var inst_31776 = (state_31786[(2)]);
var state_31786__$1 = state_31786;
var statearr_31805_33035 = state_31786__$1;
(statearr_31805_33035[(2)] = inst_31776);

(statearr_31805_33035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (17))){
var inst_31741 = (state_31786[(10)]);
var inst_31750 = cljs.core.first(inst_31741);
var inst_31751 = cljs.core.async.muxch_STAR_(inst_31750);
var inst_31752 = cljs.core.async.close_BANG_(inst_31751);
var inst_31753 = cljs.core.next(inst_31741);
var inst_31727 = inst_31753;
var inst_31728 = null;
var inst_31729 = (0);
var inst_31730 = (0);
var state_31786__$1 = (function (){var statearr_31806 = state_31786;
(statearr_31806[(12)] = inst_31752);

(statearr_31806[(13)] = inst_31729);

(statearr_31806[(14)] = inst_31727);

(statearr_31806[(15)] = inst_31728);

(statearr_31806[(16)] = inst_31730);

return statearr_31806;
})();
var statearr_31807_33036 = state_31786__$1;
(statearr_31807_33036[(2)] = null);

(statearr_31807_33036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (3))){
var inst_31784 = (state_31786[(2)]);
var state_31786__$1 = state_31786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31786__$1,inst_31784);
} else {
if((state_val_31787 === (12))){
var inst_31761 = (state_31786[(2)]);
var state_31786__$1 = state_31786;
var statearr_31808_33037 = state_31786__$1;
(statearr_31808_33037[(2)] = inst_31761);

(statearr_31808_33037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (2))){
var state_31786__$1 = state_31786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31786__$1,(4),ch);
} else {
if((state_val_31787 === (23))){
var state_31786__$1 = state_31786;
var statearr_31809_33038 = state_31786__$1;
(statearr_31809_33038[(2)] = null);

(statearr_31809_33038[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (19))){
var inst_31767 = (state_31786[(11)]);
var inst_31717 = (state_31786[(8)]);
var inst_31769 = cljs.core.async.muxch_STAR_(inst_31767);
var state_31786__$1 = state_31786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31786__$1,(22),inst_31769,inst_31717);
} else {
if((state_val_31787 === (11))){
var inst_31741 = (state_31786[(10)]);
var inst_31727 = (state_31786[(14)]);
var inst_31741__$1 = cljs.core.seq(inst_31727);
var state_31786__$1 = (function (){var statearr_31810 = state_31786;
(statearr_31810[(10)] = inst_31741__$1);

return statearr_31810;
})();
if(inst_31741__$1){
var statearr_31811_33039 = state_31786__$1;
(statearr_31811_33039[(1)] = (13));

} else {
var statearr_31812_33040 = state_31786__$1;
(statearr_31812_33040[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (9))){
var inst_31763 = (state_31786[(2)]);
var state_31786__$1 = state_31786;
var statearr_31813_33042 = state_31786__$1;
(statearr_31813_33042[(2)] = inst_31763);

(statearr_31813_33042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (5))){
var inst_31724 = cljs.core.deref(mults);
var inst_31725 = cljs.core.vals(inst_31724);
var inst_31726 = cljs.core.seq(inst_31725);
var inst_31727 = inst_31726;
var inst_31728 = null;
var inst_31729 = (0);
var inst_31730 = (0);
var state_31786__$1 = (function (){var statearr_31814 = state_31786;
(statearr_31814[(13)] = inst_31729);

(statearr_31814[(14)] = inst_31727);

(statearr_31814[(15)] = inst_31728);

(statearr_31814[(16)] = inst_31730);

return statearr_31814;
})();
var statearr_31815_33045 = state_31786__$1;
(statearr_31815_33045[(2)] = null);

(statearr_31815_33045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (14))){
var state_31786__$1 = state_31786;
var statearr_31819_33046 = state_31786__$1;
(statearr_31819_33046[(2)] = null);

(statearr_31819_33046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (16))){
var inst_31741 = (state_31786[(10)]);
var inst_31745 = cljs.core.chunk_first(inst_31741);
var inst_31746 = cljs.core.chunk_rest(inst_31741);
var inst_31747 = cljs.core.count(inst_31745);
var inst_31727 = inst_31746;
var inst_31728 = inst_31745;
var inst_31729 = inst_31747;
var inst_31730 = (0);
var state_31786__$1 = (function (){var statearr_31820 = state_31786;
(statearr_31820[(13)] = inst_31729);

(statearr_31820[(14)] = inst_31727);

(statearr_31820[(15)] = inst_31728);

(statearr_31820[(16)] = inst_31730);

return statearr_31820;
})();
var statearr_31821_33047 = state_31786__$1;
(statearr_31821_33047[(2)] = null);

(statearr_31821_33047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (10))){
var inst_31729 = (state_31786[(13)]);
var inst_31727 = (state_31786[(14)]);
var inst_31728 = (state_31786[(15)]);
var inst_31730 = (state_31786[(16)]);
var inst_31735 = cljs.core._nth(inst_31728,inst_31730);
var inst_31736 = cljs.core.async.muxch_STAR_(inst_31735);
var inst_31737 = cljs.core.async.close_BANG_(inst_31736);
var inst_31738 = (inst_31730 + (1));
var tmp31816 = inst_31729;
var tmp31817 = inst_31727;
var tmp31818 = inst_31728;
var inst_31727__$1 = tmp31817;
var inst_31728__$1 = tmp31818;
var inst_31729__$1 = tmp31816;
var inst_31730__$1 = inst_31738;
var state_31786__$1 = (function (){var statearr_31822 = state_31786;
(statearr_31822[(17)] = inst_31737);

(statearr_31822[(13)] = inst_31729__$1);

(statearr_31822[(14)] = inst_31727__$1);

(statearr_31822[(15)] = inst_31728__$1);

(statearr_31822[(16)] = inst_31730__$1);

return statearr_31822;
})();
var statearr_31823_33048 = state_31786__$1;
(statearr_31823_33048[(2)] = null);

(statearr_31823_33048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (18))){
var inst_31756 = (state_31786[(2)]);
var state_31786__$1 = state_31786;
var statearr_31824_33049 = state_31786__$1;
(statearr_31824_33049[(2)] = inst_31756);

(statearr_31824_33049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (8))){
var inst_31729 = (state_31786[(13)]);
var inst_31730 = (state_31786[(16)]);
var inst_31732 = (inst_31730 < inst_31729);
var inst_31733 = inst_31732;
var state_31786__$1 = state_31786;
if(cljs.core.truth_(inst_31733)){
var statearr_31825_33050 = state_31786__$1;
(statearr_31825_33050[(1)] = (10));

} else {
var statearr_31826_33051 = state_31786__$1;
(statearr_31826_33051[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29937__auto__ = null;
var cljs$core$async$state_machine__29937__auto____0 = (function (){
var statearr_31827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31827[(0)] = cljs$core$async$state_machine__29937__auto__);

(statearr_31827[(1)] = (1));

return statearr_31827;
});
var cljs$core$async$state_machine__29937__auto____1 = (function (state_31786){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_31786);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e31828){var ex__29940__auto__ = e31828;
var statearr_31829_33052 = state_31786;
(statearr_31829_33052[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_31786[(4)]))){
var statearr_31830_33053 = state_31786;
(statearr_31830_33053[(1)] = cljs.core.first((state_31786[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33054 = state_31786;
state_31786 = G__33054;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$state_machine__29937__auto__ = function(state_31786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29937__auto____1.call(this,state_31786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29937__auto____0;
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29937__auto____1;
return cljs$core$async$state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_31831 = f__30128__auto__();
(statearr_31831[(6)] = c__30127__auto___33017);

return statearr_31831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31833 = arguments.length;
switch (G__31833) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31835 = arguments.length;
switch (G__31835) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31837 = arguments.length;
switch (G__31837) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30127__auto___33071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_31880){
var state_val_31881 = (state_31880[(1)]);
if((state_val_31881 === (7))){
var state_31880__$1 = state_31880;
var statearr_31882_33072 = state_31880__$1;
(statearr_31882_33072[(2)] = null);

(statearr_31882_33072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (1))){
var state_31880__$1 = state_31880;
var statearr_31883_33073 = state_31880__$1;
(statearr_31883_33073[(2)] = null);

(statearr_31883_33073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (4))){
var inst_31840 = (state_31880[(7)]);
var inst_31841 = (state_31880[(8)]);
var inst_31843 = (inst_31841 < inst_31840);
var state_31880__$1 = state_31880;
if(cljs.core.truth_(inst_31843)){
var statearr_31884_33074 = state_31880__$1;
(statearr_31884_33074[(1)] = (6));

} else {
var statearr_31885_33075 = state_31880__$1;
(statearr_31885_33075[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (15))){
var inst_31866 = (state_31880[(9)]);
var inst_31871 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31866);
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31880__$1,(17),out,inst_31871);
} else {
if((state_val_31881 === (13))){
var inst_31866 = (state_31880[(9)]);
var inst_31866__$1 = (state_31880[(2)]);
var inst_31867 = cljs.core.some(cljs.core.nil_QMARK_,inst_31866__$1);
var state_31880__$1 = (function (){var statearr_31886 = state_31880;
(statearr_31886[(9)] = inst_31866__$1);

return statearr_31886;
})();
if(cljs.core.truth_(inst_31867)){
var statearr_31887_33076 = state_31880__$1;
(statearr_31887_33076[(1)] = (14));

} else {
var statearr_31888_33077 = state_31880__$1;
(statearr_31888_33077[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (6))){
var state_31880__$1 = state_31880;
var statearr_31889_33078 = state_31880__$1;
(statearr_31889_33078[(2)] = null);

(statearr_31889_33078[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (17))){
var inst_31873 = (state_31880[(2)]);
var state_31880__$1 = (function (){var statearr_31893 = state_31880;
(statearr_31893[(10)] = inst_31873);

return statearr_31893;
})();
var statearr_31894_33079 = state_31880__$1;
(statearr_31894_33079[(2)] = null);

(statearr_31894_33079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (3))){
var inst_31878 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31880__$1,inst_31878);
} else {
if((state_val_31881 === (12))){
var _ = (function (){var statearr_31895 = state_31880;
(statearr_31895[(4)] = cljs.core.rest((state_31880[(4)])));

return statearr_31895;
})();
var state_31880__$1 = state_31880;
var ex31892 = (state_31880__$1[(2)]);
var statearr_31896_33080 = state_31880__$1;
(statearr_31896_33080[(5)] = ex31892);


if((ex31892 instanceof Object)){
var statearr_31898_33081 = state_31880__$1;
(statearr_31898_33081[(1)] = (11));

(statearr_31898_33081[(5)] = null);

} else {
throw ex31892;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (2))){
var inst_31839 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31840 = cnt;
var inst_31841 = (0);
var state_31880__$1 = (function (){var statearr_31899 = state_31880;
(statearr_31899[(11)] = inst_31839);

(statearr_31899[(7)] = inst_31840);

(statearr_31899[(8)] = inst_31841);

return statearr_31899;
})();
var statearr_31900_33082 = state_31880__$1;
(statearr_31900_33082[(2)] = null);

(statearr_31900_33082[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (11))){
var inst_31845 = (state_31880[(2)]);
var inst_31846 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31880__$1 = (function (){var statearr_31905 = state_31880;
(statearr_31905[(12)] = inst_31845);

return statearr_31905;
})();
var statearr_31906_33084 = state_31880__$1;
(statearr_31906_33084[(2)] = inst_31846);

(statearr_31906_33084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (9))){
var inst_31841 = (state_31880[(8)]);
var _ = (function (){var statearr_31907 = state_31880;
(statearr_31907[(4)] = cljs.core.cons((12),(state_31880[(4)])));

return statearr_31907;
})();
var inst_31852 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31841) : chs__$1.call(null,inst_31841));
var inst_31853 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31841) : done.call(null,inst_31841));
var inst_31854 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31852,inst_31853);
var ___$1 = (function (){var statearr_31908 = state_31880;
(statearr_31908[(4)] = cljs.core.rest((state_31880[(4)])));

return statearr_31908;
})();
var state_31880__$1 = state_31880;
var statearr_31909_33085 = state_31880__$1;
(statearr_31909_33085[(2)] = inst_31854);

(statearr_31909_33085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (5))){
var inst_31864 = (state_31880[(2)]);
var state_31880__$1 = (function (){var statearr_31910 = state_31880;
(statearr_31910[(13)] = inst_31864);

return statearr_31910;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31880__$1,(13),dchan);
} else {
if((state_val_31881 === (14))){
var inst_31869 = cljs.core.async.close_BANG_(out);
var state_31880__$1 = state_31880;
var statearr_31911_33089 = state_31880__$1;
(statearr_31911_33089[(2)] = inst_31869);

(statearr_31911_33089[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (16))){
var inst_31876 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
var statearr_31912_33090 = state_31880__$1;
(statearr_31912_33090[(2)] = inst_31876);

(statearr_31912_33090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (10))){
var inst_31841 = (state_31880[(8)]);
var inst_31857 = (state_31880[(2)]);
var inst_31858 = (inst_31841 + (1));
var inst_31841__$1 = inst_31858;
var state_31880__$1 = (function (){var statearr_31913 = state_31880;
(statearr_31913[(14)] = inst_31857);

(statearr_31913[(8)] = inst_31841__$1);

return statearr_31913;
})();
var statearr_31914_33091 = state_31880__$1;
(statearr_31914_33091[(2)] = null);

(statearr_31914_33091[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (8))){
var inst_31862 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
var statearr_31915_33092 = state_31880__$1;
(statearr_31915_33092[(2)] = inst_31862);

(statearr_31915_33092[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29937__auto__ = null;
var cljs$core$async$state_machine__29937__auto____0 = (function (){
var statearr_31916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31916[(0)] = cljs$core$async$state_machine__29937__auto__);

(statearr_31916[(1)] = (1));

return statearr_31916;
});
var cljs$core$async$state_machine__29937__auto____1 = (function (state_31880){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_31880);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e31917){var ex__29940__auto__ = e31917;
var statearr_31918_33100 = state_31880;
(statearr_31918_33100[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_31880[(4)]))){
var statearr_31919_33101 = state_31880;
(statearr_31919_33101[(1)] = cljs.core.first((state_31880[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33102 = state_31880;
state_31880 = G__33102;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$state_machine__29937__auto__ = function(state_31880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29937__auto____1.call(this,state_31880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29937__auto____0;
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29937__auto____1;
return cljs$core$async$state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_31921 = f__30128__auto__();
(statearr_31921[(6)] = c__30127__auto___33071);

return statearr_31921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31925 = arguments.length;
switch (G__31925) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30127__auto___33107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_31957){
var state_val_31958 = (state_31957[(1)]);
if((state_val_31958 === (7))){
var inst_31937 = (state_31957[(7)]);
var inst_31936 = (state_31957[(8)]);
var inst_31936__$1 = (state_31957[(2)]);
var inst_31937__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31936__$1,(0),null);
var inst_31938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31936__$1,(1),null);
var inst_31939 = (inst_31937__$1 == null);
var state_31957__$1 = (function (){var statearr_31959 = state_31957;
(statearr_31959[(7)] = inst_31937__$1);

(statearr_31959[(8)] = inst_31936__$1);

(statearr_31959[(9)] = inst_31938);

return statearr_31959;
})();
if(cljs.core.truth_(inst_31939)){
var statearr_31960_33114 = state_31957__$1;
(statearr_31960_33114[(1)] = (8));

} else {
var statearr_31961_33115 = state_31957__$1;
(statearr_31961_33115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (1))){
var inst_31926 = cljs.core.vec(chs);
var inst_31927 = inst_31926;
var state_31957__$1 = (function (){var statearr_31962 = state_31957;
(statearr_31962[(10)] = inst_31927);

return statearr_31962;
})();
var statearr_31963_33116 = state_31957__$1;
(statearr_31963_33116[(2)] = null);

(statearr_31963_33116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (4))){
var inst_31927 = (state_31957[(10)]);
var state_31957__$1 = state_31957;
return cljs.core.async.ioc_alts_BANG_(state_31957__$1,(7),inst_31927);
} else {
if((state_val_31958 === (6))){
var inst_31953 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_31964_33117 = state_31957__$1;
(statearr_31964_33117[(2)] = inst_31953);

(statearr_31964_33117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (3))){
var inst_31955 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31957__$1,inst_31955);
} else {
if((state_val_31958 === (2))){
var inst_31927 = (state_31957[(10)]);
var inst_31929 = cljs.core.count(inst_31927);
var inst_31930 = (inst_31929 > (0));
var state_31957__$1 = state_31957;
if(cljs.core.truth_(inst_31930)){
var statearr_31966_33118 = state_31957__$1;
(statearr_31966_33118[(1)] = (4));

} else {
var statearr_31967_33119 = state_31957__$1;
(statearr_31967_33119[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (11))){
var inst_31927 = (state_31957[(10)]);
var inst_31946 = (state_31957[(2)]);
var tmp31965 = inst_31927;
var inst_31927__$1 = tmp31965;
var state_31957__$1 = (function (){var statearr_31968 = state_31957;
(statearr_31968[(10)] = inst_31927__$1);

(statearr_31968[(11)] = inst_31946);

return statearr_31968;
})();
var statearr_31969_33120 = state_31957__$1;
(statearr_31969_33120[(2)] = null);

(statearr_31969_33120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (9))){
var inst_31937 = (state_31957[(7)]);
var state_31957__$1 = state_31957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31957__$1,(11),out,inst_31937);
} else {
if((state_val_31958 === (5))){
var inst_31951 = cljs.core.async.close_BANG_(out);
var state_31957__$1 = state_31957;
var statearr_31970_33121 = state_31957__$1;
(statearr_31970_33121[(2)] = inst_31951);

(statearr_31970_33121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (10))){
var inst_31949 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_31971_33122 = state_31957__$1;
(statearr_31971_33122[(2)] = inst_31949);

(statearr_31971_33122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (8))){
var inst_31937 = (state_31957[(7)]);
var inst_31936 = (state_31957[(8)]);
var inst_31927 = (state_31957[(10)]);
var inst_31938 = (state_31957[(9)]);
var inst_31941 = (function (){var cs = inst_31927;
var vec__31932 = inst_31936;
var v = inst_31937;
var c = inst_31938;
return (function (p1__31923_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31923_SHARP_);
});
})();
var inst_31942 = cljs.core.filterv(inst_31941,inst_31927);
var inst_31927__$1 = inst_31942;
var state_31957__$1 = (function (){var statearr_31972 = state_31957;
(statearr_31972[(10)] = inst_31927__$1);

return statearr_31972;
})();
var statearr_31973_33123 = state_31957__$1;
(statearr_31973_33123[(2)] = null);

(statearr_31973_33123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29937__auto__ = null;
var cljs$core$async$state_machine__29937__auto____0 = (function (){
var statearr_31974 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31974[(0)] = cljs$core$async$state_machine__29937__auto__);

(statearr_31974[(1)] = (1));

return statearr_31974;
});
var cljs$core$async$state_machine__29937__auto____1 = (function (state_31957){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_31957);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e31975){var ex__29940__auto__ = e31975;
var statearr_31976_33124 = state_31957;
(statearr_31976_33124[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_31957[(4)]))){
var statearr_31977_33125 = state_31957;
(statearr_31977_33125[(1)] = cljs.core.first((state_31957[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33126 = state_31957;
state_31957 = G__33126;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$state_machine__29937__auto__ = function(state_31957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29937__auto____1.call(this,state_31957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29937__auto____0;
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29937__auto____1;
return cljs$core$async$state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_31978 = f__30128__auto__();
(statearr_31978[(6)] = c__30127__auto___33107);

return statearr_31978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31980 = arguments.length;
switch (G__31980) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30127__auto___33129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_32004){
var state_val_32005 = (state_32004[(1)]);
if((state_val_32005 === (7))){
var inst_31986 = (state_32004[(7)]);
var inst_31986__$1 = (state_32004[(2)]);
var inst_31987 = (inst_31986__$1 == null);
var inst_31988 = cljs.core.not(inst_31987);
var state_32004__$1 = (function (){var statearr_32006 = state_32004;
(statearr_32006[(7)] = inst_31986__$1);

return statearr_32006;
})();
if(inst_31988){
var statearr_32007_33139 = state_32004__$1;
(statearr_32007_33139[(1)] = (8));

} else {
var statearr_32008_33140 = state_32004__$1;
(statearr_32008_33140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (1))){
var inst_31981 = (0);
var state_32004__$1 = (function (){var statearr_32009 = state_32004;
(statearr_32009[(8)] = inst_31981);

return statearr_32009;
})();
var statearr_32010_33147 = state_32004__$1;
(statearr_32010_33147[(2)] = null);

(statearr_32010_33147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (4))){
var state_32004__$1 = state_32004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32004__$1,(7),ch);
} else {
if((state_val_32005 === (6))){
var inst_31999 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32011_33148 = state_32004__$1;
(statearr_32011_33148[(2)] = inst_31999);

(statearr_32011_33148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (3))){
var inst_32001 = (state_32004[(2)]);
var inst_32002 = cljs.core.async.close_BANG_(out);
var state_32004__$1 = (function (){var statearr_32015 = state_32004;
(statearr_32015[(9)] = inst_32001);

return statearr_32015;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32004__$1,inst_32002);
} else {
if((state_val_32005 === (2))){
var inst_31981 = (state_32004[(8)]);
var inst_31983 = (inst_31981 < n);
var state_32004__$1 = state_32004;
if(cljs.core.truth_(inst_31983)){
var statearr_32016_33149 = state_32004__$1;
(statearr_32016_33149[(1)] = (4));

} else {
var statearr_32017_33150 = state_32004__$1;
(statearr_32017_33150[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (11))){
var inst_31981 = (state_32004[(8)]);
var inst_31991 = (state_32004[(2)]);
var inst_31992 = (inst_31981 + (1));
var inst_31981__$1 = inst_31992;
var state_32004__$1 = (function (){var statearr_32022 = state_32004;
(statearr_32022[(10)] = inst_31991);

(statearr_32022[(8)] = inst_31981__$1);

return statearr_32022;
})();
var statearr_32024_33151 = state_32004__$1;
(statearr_32024_33151[(2)] = null);

(statearr_32024_33151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (9))){
var state_32004__$1 = state_32004;
var statearr_32025_33152 = state_32004__$1;
(statearr_32025_33152[(2)] = null);

(statearr_32025_33152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (5))){
var state_32004__$1 = state_32004;
var statearr_32026_33153 = state_32004__$1;
(statearr_32026_33153[(2)] = null);

(statearr_32026_33153[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (10))){
var inst_31996 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32027_33154 = state_32004__$1;
(statearr_32027_33154[(2)] = inst_31996);

(statearr_32027_33154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (8))){
var inst_31986 = (state_32004[(7)]);
var state_32004__$1 = state_32004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32004__$1,(11),out,inst_31986);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29937__auto__ = null;
var cljs$core$async$state_machine__29937__auto____0 = (function (){
var statearr_32028 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32028[(0)] = cljs$core$async$state_machine__29937__auto__);

(statearr_32028[(1)] = (1));

return statearr_32028;
});
var cljs$core$async$state_machine__29937__auto____1 = (function (state_32004){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_32004);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e32029){var ex__29940__auto__ = e32029;
var statearr_32030_33161 = state_32004;
(statearr_32030_33161[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_32004[(4)]))){
var statearr_32031_33162 = state_32004;
(statearr_32031_33162[(1)] = cljs.core.first((state_32004[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33163 = state_32004;
state_32004 = G__33163;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$state_machine__29937__auto__ = function(state_32004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29937__auto____1.call(this,state_32004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29937__auto____0;
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29937__auto____1;
return cljs$core$async$state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_32032 = f__30128__auto__();
(statearr_32032[(6)] = c__30127__auto___33129);

return statearr_32032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32034 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32034 = (function (f,ch,meta32035){
this.f = f;
this.ch = ch;
this.meta32035 = meta32035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32036,meta32035__$1){
var self__ = this;
var _32036__$1 = this;
return (new cljs.core.async.t_cljs$core$async32034(self__.f,self__.ch,meta32035__$1));
}));

(cljs.core.async.t_cljs$core$async32034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32036){
var self__ = this;
var _32036__$1 = this;
return self__.meta32035;
}));

(cljs.core.async.t_cljs$core$async32034.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32034.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32034.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32034.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32034.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32037 = (function (f,ch,meta32035,_,fn1,meta32038){
this.f = f;
this.ch = ch;
this.meta32035 = meta32035;
this._ = _;
this.fn1 = fn1;
this.meta32038 = meta32038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32039,meta32038__$1){
var self__ = this;
var _32039__$1 = this;
return (new cljs.core.async.t_cljs$core$async32037(self__.f,self__.ch,self__.meta32035,self__._,self__.fn1,meta32038__$1));
}));

(cljs.core.async.t_cljs$core$async32037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32039){
var self__ = this;
var _32039__$1 = this;
return self__.meta32038;
}));

(cljs.core.async.t_cljs$core$async32037.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32037.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32037.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32037.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32033_SHARP_){
var G__32043 = (((p1__32033_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32033_SHARP_) : self__.f.call(null,p1__32033_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32043) : f1.call(null,G__32043));
});
}));

(cljs.core.async.t_cljs$core$async32037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32035","meta32035",-1197964615,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32034","cljs.core.async/t_cljs$core$async32034",-1365175839,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32038","meta32038",-1002366164,null)], null);
}));

(cljs.core.async.t_cljs$core$async32037.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32037");

(cljs.core.async.t_cljs$core$async32037.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32037");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32037.
 */
cljs.core.async.__GT_t_cljs$core$async32037 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32037(f__$1,ch__$1,meta32035__$1,___$2,fn1__$1,meta32038){
return (new cljs.core.async.t_cljs$core$async32037(f__$1,ch__$1,meta32035__$1,___$2,fn1__$1,meta32038));
});

}

return (new cljs.core.async.t_cljs$core$async32037(self__.f,self__.ch,self__.meta32035,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32044 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32044) : self__.f.call(null,G__32044));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32034.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32034.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32035","meta32035",-1197964615,null)], null);
}));

(cljs.core.async.t_cljs$core$async32034.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32034");

(cljs.core.async.t_cljs$core$async32034.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32034");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32034.
 */
cljs.core.async.__GT_t_cljs$core$async32034 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32034(f__$1,ch__$1,meta32035){
return (new cljs.core.async.t_cljs$core$async32034(f__$1,ch__$1,meta32035));
});

}

return (new cljs.core.async.t_cljs$core$async32034(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32046 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32046 = (function (f,ch,meta32047){
this.f = f;
this.ch = ch;
this.meta32047 = meta32047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32048,meta32047__$1){
var self__ = this;
var _32048__$1 = this;
return (new cljs.core.async.t_cljs$core$async32046(self__.f,self__.ch,meta32047__$1));
}));

(cljs.core.async.t_cljs$core$async32046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32048){
var self__ = this;
var _32048__$1 = this;
return self__.meta32047;
}));

(cljs.core.async.t_cljs$core$async32046.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32046.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32046.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32046.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32046.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32046.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32047","meta32047",1763155522,null)], null);
}));

(cljs.core.async.t_cljs$core$async32046.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32046");

(cljs.core.async.t_cljs$core$async32046.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32046");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32046.
 */
cljs.core.async.__GT_t_cljs$core$async32046 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32046(f__$1,ch__$1,meta32047){
return (new cljs.core.async.t_cljs$core$async32046(f__$1,ch__$1,meta32047));
});

}

return (new cljs.core.async.t_cljs$core$async32046(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32051 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32051 = (function (p,ch,meta32052){
this.p = p;
this.ch = ch;
this.meta32052 = meta32052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32053,meta32052__$1){
var self__ = this;
var _32053__$1 = this;
return (new cljs.core.async.t_cljs$core$async32051(self__.p,self__.ch,meta32052__$1));
}));

(cljs.core.async.t_cljs$core$async32051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32053){
var self__ = this;
var _32053__$1 = this;
return self__.meta32052;
}));

(cljs.core.async.t_cljs$core$async32051.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32051.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32051.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32051.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32051.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32051.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32051.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32052","meta32052",1744387682,null)], null);
}));

(cljs.core.async.t_cljs$core$async32051.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32051");

(cljs.core.async.t_cljs$core$async32051.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32051");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32051.
 */
cljs.core.async.__GT_t_cljs$core$async32051 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32051(p__$1,ch__$1,meta32052){
return (new cljs.core.async.t_cljs$core$async32051(p__$1,ch__$1,meta32052));
});

}

return (new cljs.core.async.t_cljs$core$async32051(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32059 = arguments.length;
switch (G__32059) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30127__auto___33171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_32080){
var state_val_32081 = (state_32080[(1)]);
if((state_val_32081 === (7))){
var inst_32076 = (state_32080[(2)]);
var state_32080__$1 = state_32080;
var statearr_32082_33172 = state_32080__$1;
(statearr_32082_33172[(2)] = inst_32076);

(statearr_32082_33172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (1))){
var state_32080__$1 = state_32080;
var statearr_32083_33173 = state_32080__$1;
(statearr_32083_33173[(2)] = null);

(statearr_32083_33173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (4))){
var inst_32062 = (state_32080[(7)]);
var inst_32062__$1 = (state_32080[(2)]);
var inst_32063 = (inst_32062__$1 == null);
var state_32080__$1 = (function (){var statearr_32084 = state_32080;
(statearr_32084[(7)] = inst_32062__$1);

return statearr_32084;
})();
if(cljs.core.truth_(inst_32063)){
var statearr_32085_33180 = state_32080__$1;
(statearr_32085_33180[(1)] = (5));

} else {
var statearr_32086_33181 = state_32080__$1;
(statearr_32086_33181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (6))){
var inst_32062 = (state_32080[(7)]);
var inst_32067 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32062) : p.call(null,inst_32062));
var state_32080__$1 = state_32080;
if(cljs.core.truth_(inst_32067)){
var statearr_32087_33182 = state_32080__$1;
(statearr_32087_33182[(1)] = (8));

} else {
var statearr_32088_33183 = state_32080__$1;
(statearr_32088_33183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (3))){
var inst_32078 = (state_32080[(2)]);
var state_32080__$1 = state_32080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32080__$1,inst_32078);
} else {
if((state_val_32081 === (2))){
var state_32080__$1 = state_32080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32080__$1,(4),ch);
} else {
if((state_val_32081 === (11))){
var inst_32070 = (state_32080[(2)]);
var state_32080__$1 = state_32080;
var statearr_32089_33184 = state_32080__$1;
(statearr_32089_33184[(2)] = inst_32070);

(statearr_32089_33184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (9))){
var state_32080__$1 = state_32080;
var statearr_32090_33185 = state_32080__$1;
(statearr_32090_33185[(2)] = null);

(statearr_32090_33185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (5))){
var inst_32065 = cljs.core.async.close_BANG_(out);
var state_32080__$1 = state_32080;
var statearr_32091_33186 = state_32080__$1;
(statearr_32091_33186[(2)] = inst_32065);

(statearr_32091_33186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (10))){
var inst_32073 = (state_32080[(2)]);
var state_32080__$1 = (function (){var statearr_32092 = state_32080;
(statearr_32092[(8)] = inst_32073);

return statearr_32092;
})();
var statearr_32093_33187 = state_32080__$1;
(statearr_32093_33187[(2)] = null);

(statearr_32093_33187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (8))){
var inst_32062 = (state_32080[(7)]);
var state_32080__$1 = state_32080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32080__$1,(11),out,inst_32062);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29937__auto__ = null;
var cljs$core$async$state_machine__29937__auto____0 = (function (){
var statearr_32094 = [null,null,null,null,null,null,null,null,null];
(statearr_32094[(0)] = cljs$core$async$state_machine__29937__auto__);

(statearr_32094[(1)] = (1));

return statearr_32094;
});
var cljs$core$async$state_machine__29937__auto____1 = (function (state_32080){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_32080);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e32095){var ex__29940__auto__ = e32095;
var statearr_32096_33188 = state_32080;
(statearr_32096_33188[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_32080[(4)]))){
var statearr_32097_33189 = state_32080;
(statearr_32097_33189[(1)] = cljs.core.first((state_32080[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33190 = state_32080;
state_32080 = G__33190;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$state_machine__29937__auto__ = function(state_32080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29937__auto____1.call(this,state_32080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29937__auto____0;
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29937__auto____1;
return cljs$core$async$state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_32099 = f__30128__auto__();
(statearr_32099[(6)] = c__30127__auto___33171);

return statearr_32099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32101 = arguments.length;
switch (G__32101) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30127__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_32165){
var state_val_32166 = (state_32165[(1)]);
if((state_val_32166 === (7))){
var inst_32161 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
var statearr_32167_33192 = state_32165__$1;
(statearr_32167_33192[(2)] = inst_32161);

(statearr_32167_33192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (20))){
var inst_32131 = (state_32165[(7)]);
var inst_32142 = (state_32165[(2)]);
var inst_32143 = cljs.core.next(inst_32131);
var inst_32117 = inst_32143;
var inst_32118 = null;
var inst_32119 = (0);
var inst_32120 = (0);
var state_32165__$1 = (function (){var statearr_32168 = state_32165;
(statearr_32168[(8)] = inst_32142);

(statearr_32168[(9)] = inst_32117);

(statearr_32168[(10)] = inst_32119);

(statearr_32168[(11)] = inst_32118);

(statearr_32168[(12)] = inst_32120);

return statearr_32168;
})();
var statearr_32169_33195 = state_32165__$1;
(statearr_32169_33195[(2)] = null);

(statearr_32169_33195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (1))){
var state_32165__$1 = state_32165;
var statearr_32170_33196 = state_32165__$1;
(statearr_32170_33196[(2)] = null);

(statearr_32170_33196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (4))){
var inst_32105 = (state_32165[(13)]);
var inst_32105__$1 = (state_32165[(2)]);
var inst_32107 = (inst_32105__$1 == null);
var state_32165__$1 = (function (){var statearr_32171 = state_32165;
(statearr_32171[(13)] = inst_32105__$1);

return statearr_32171;
})();
if(cljs.core.truth_(inst_32107)){
var statearr_32172_33197 = state_32165__$1;
(statearr_32172_33197[(1)] = (5));

} else {
var statearr_32173_33198 = state_32165__$1;
(statearr_32173_33198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (15))){
var state_32165__$1 = state_32165;
var statearr_32177_33199 = state_32165__$1;
(statearr_32177_33199[(2)] = null);

(statearr_32177_33199[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (21))){
var state_32165__$1 = state_32165;
var statearr_32178_33200 = state_32165__$1;
(statearr_32178_33200[(2)] = null);

(statearr_32178_33200[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (13))){
var inst_32117 = (state_32165[(9)]);
var inst_32119 = (state_32165[(10)]);
var inst_32118 = (state_32165[(11)]);
var inst_32120 = (state_32165[(12)]);
var inst_32127 = (state_32165[(2)]);
var inst_32128 = (inst_32120 + (1));
var tmp32174 = inst_32117;
var tmp32175 = inst_32119;
var tmp32176 = inst_32118;
var inst_32117__$1 = tmp32174;
var inst_32118__$1 = tmp32176;
var inst_32119__$1 = tmp32175;
var inst_32120__$1 = inst_32128;
var state_32165__$1 = (function (){var statearr_32179 = state_32165;
(statearr_32179[(14)] = inst_32127);

(statearr_32179[(9)] = inst_32117__$1);

(statearr_32179[(10)] = inst_32119__$1);

(statearr_32179[(11)] = inst_32118__$1);

(statearr_32179[(12)] = inst_32120__$1);

return statearr_32179;
})();
var statearr_32180_33204 = state_32165__$1;
(statearr_32180_33204[(2)] = null);

(statearr_32180_33204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (22))){
var state_32165__$1 = state_32165;
var statearr_32181_33207 = state_32165__$1;
(statearr_32181_33207[(2)] = null);

(statearr_32181_33207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (6))){
var inst_32105 = (state_32165[(13)]);
var inst_32115 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32105) : f.call(null,inst_32105));
var inst_32116 = cljs.core.seq(inst_32115);
var inst_32117 = inst_32116;
var inst_32118 = null;
var inst_32119 = (0);
var inst_32120 = (0);
var state_32165__$1 = (function (){var statearr_32182 = state_32165;
(statearr_32182[(9)] = inst_32117);

(statearr_32182[(10)] = inst_32119);

(statearr_32182[(11)] = inst_32118);

(statearr_32182[(12)] = inst_32120);

return statearr_32182;
})();
var statearr_32183_33210 = state_32165__$1;
(statearr_32183_33210[(2)] = null);

(statearr_32183_33210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (17))){
var inst_32131 = (state_32165[(7)]);
var inst_32135 = cljs.core.chunk_first(inst_32131);
var inst_32136 = cljs.core.chunk_rest(inst_32131);
var inst_32137 = cljs.core.count(inst_32135);
var inst_32117 = inst_32136;
var inst_32118 = inst_32135;
var inst_32119 = inst_32137;
var inst_32120 = (0);
var state_32165__$1 = (function (){var statearr_32185 = state_32165;
(statearr_32185[(9)] = inst_32117);

(statearr_32185[(10)] = inst_32119);

(statearr_32185[(11)] = inst_32118);

(statearr_32185[(12)] = inst_32120);

return statearr_32185;
})();
var statearr_32186_33215 = state_32165__$1;
(statearr_32186_33215[(2)] = null);

(statearr_32186_33215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (3))){
var inst_32163 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32165__$1,inst_32163);
} else {
if((state_val_32166 === (12))){
var inst_32151 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
var statearr_32188_33217 = state_32165__$1;
(statearr_32188_33217[(2)] = inst_32151);

(statearr_32188_33217[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (2))){
var state_32165__$1 = state_32165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32165__$1,(4),in$);
} else {
if((state_val_32166 === (23))){
var inst_32159 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
var statearr_32189_33224 = state_32165__$1;
(statearr_32189_33224[(2)] = inst_32159);

(statearr_32189_33224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (19))){
var inst_32146 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
var statearr_32190_33226 = state_32165__$1;
(statearr_32190_33226[(2)] = inst_32146);

(statearr_32190_33226[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (11))){
var inst_32131 = (state_32165[(7)]);
var inst_32117 = (state_32165[(9)]);
var inst_32131__$1 = cljs.core.seq(inst_32117);
var state_32165__$1 = (function (){var statearr_32191 = state_32165;
(statearr_32191[(7)] = inst_32131__$1);

return statearr_32191;
})();
if(inst_32131__$1){
var statearr_32192_33230 = state_32165__$1;
(statearr_32192_33230[(1)] = (14));

} else {
var statearr_32193_33233 = state_32165__$1;
(statearr_32193_33233[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (9))){
var inst_32153 = (state_32165[(2)]);
var inst_32154 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32165__$1 = (function (){var statearr_32194 = state_32165;
(statearr_32194[(15)] = inst_32153);

return statearr_32194;
})();
if(cljs.core.truth_(inst_32154)){
var statearr_32195_33240 = state_32165__$1;
(statearr_32195_33240[(1)] = (21));

} else {
var statearr_32197_33243 = state_32165__$1;
(statearr_32197_33243[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (5))){
var inst_32109 = cljs.core.async.close_BANG_(out);
var state_32165__$1 = state_32165;
var statearr_32198_33246 = state_32165__$1;
(statearr_32198_33246[(2)] = inst_32109);

(statearr_32198_33246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (14))){
var inst_32131 = (state_32165[(7)]);
var inst_32133 = cljs.core.chunked_seq_QMARK_(inst_32131);
var state_32165__$1 = state_32165;
if(inst_32133){
var statearr_32199_33247 = state_32165__$1;
(statearr_32199_33247[(1)] = (17));

} else {
var statearr_32200_33248 = state_32165__$1;
(statearr_32200_33248[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (16))){
var inst_32149 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
var statearr_32201_33249 = state_32165__$1;
(statearr_32201_33249[(2)] = inst_32149);

(statearr_32201_33249[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (10))){
var inst_32118 = (state_32165[(11)]);
var inst_32120 = (state_32165[(12)]);
var inst_32125 = cljs.core._nth(inst_32118,inst_32120);
var state_32165__$1 = state_32165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32165__$1,(13),out,inst_32125);
} else {
if((state_val_32166 === (18))){
var inst_32131 = (state_32165[(7)]);
var inst_32140 = cljs.core.first(inst_32131);
var state_32165__$1 = state_32165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32165__$1,(20),out,inst_32140);
} else {
if((state_val_32166 === (8))){
var inst_32119 = (state_32165[(10)]);
var inst_32120 = (state_32165[(12)]);
var inst_32122 = (inst_32120 < inst_32119);
var inst_32123 = inst_32122;
var state_32165__$1 = state_32165;
if(cljs.core.truth_(inst_32123)){
var statearr_32202_33256 = state_32165__$1;
(statearr_32202_33256[(1)] = (10));

} else {
var statearr_32203_33257 = state_32165__$1;
(statearr_32203_33257[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29937__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29937__auto____0 = (function (){
var statearr_32205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32205[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29937__auto__);

(statearr_32205[(1)] = (1));

return statearr_32205;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29937__auto____1 = (function (state_32165){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_32165);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e32207){var ex__29940__auto__ = e32207;
var statearr_32208_33258 = state_32165;
(statearr_32208_33258[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_32165[(4)]))){
var statearr_32209_33260 = state_32165;
(statearr_32209_33260[(1)] = cljs.core.first((state_32165[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33262 = state_32165;
state_32165 = G__33262;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29937__auto__ = function(state_32165){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29937__auto____1.call(this,state_32165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29937__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29937__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_32210 = f__30128__auto__();
(statearr_32210[(6)] = c__30127__auto__);

return statearr_32210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));

return c__30127__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32212 = arguments.length;
switch (G__32212) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32214 = arguments.length;
switch (G__32214) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32219 = arguments.length;
switch (G__32219) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30127__auto___33269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_32243){
var state_val_32244 = (state_32243[(1)]);
if((state_val_32244 === (7))){
var inst_32238 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
var statearr_32246_33273 = state_32243__$1;
(statearr_32246_33273[(2)] = inst_32238);

(statearr_32246_33273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (1))){
var inst_32220 = null;
var state_32243__$1 = (function (){var statearr_32247 = state_32243;
(statearr_32247[(7)] = inst_32220);

return statearr_32247;
})();
var statearr_32248_33276 = state_32243__$1;
(statearr_32248_33276[(2)] = null);

(statearr_32248_33276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (4))){
var inst_32223 = (state_32243[(8)]);
var inst_32223__$1 = (state_32243[(2)]);
var inst_32224 = (inst_32223__$1 == null);
var inst_32225 = cljs.core.not(inst_32224);
var state_32243__$1 = (function (){var statearr_32249 = state_32243;
(statearr_32249[(8)] = inst_32223__$1);

return statearr_32249;
})();
if(inst_32225){
var statearr_32250_33283 = state_32243__$1;
(statearr_32250_33283[(1)] = (5));

} else {
var statearr_32251_33284 = state_32243__$1;
(statearr_32251_33284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (6))){
var state_32243__$1 = state_32243;
var statearr_32252_33286 = state_32243__$1;
(statearr_32252_33286[(2)] = null);

(statearr_32252_33286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (3))){
var inst_32240 = (state_32243[(2)]);
var inst_32241 = cljs.core.async.close_BANG_(out);
var state_32243__$1 = (function (){var statearr_32253 = state_32243;
(statearr_32253[(9)] = inst_32240);

return statearr_32253;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32243__$1,inst_32241);
} else {
if((state_val_32244 === (2))){
var state_32243__$1 = state_32243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32243__$1,(4),ch);
} else {
if((state_val_32244 === (11))){
var inst_32223 = (state_32243[(8)]);
var inst_32232 = (state_32243[(2)]);
var inst_32220 = inst_32223;
var state_32243__$1 = (function (){var statearr_32256 = state_32243;
(statearr_32256[(10)] = inst_32232);

(statearr_32256[(7)] = inst_32220);

return statearr_32256;
})();
var statearr_32257_33291 = state_32243__$1;
(statearr_32257_33291[(2)] = null);

(statearr_32257_33291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (9))){
var inst_32223 = (state_32243[(8)]);
var state_32243__$1 = state_32243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32243__$1,(11),out,inst_32223);
} else {
if((state_val_32244 === (5))){
var inst_32223 = (state_32243[(8)]);
var inst_32220 = (state_32243[(7)]);
var inst_32227 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32223,inst_32220);
var state_32243__$1 = state_32243;
if(inst_32227){
var statearr_32259_33293 = state_32243__$1;
(statearr_32259_33293[(1)] = (8));

} else {
var statearr_32260_33294 = state_32243__$1;
(statearr_32260_33294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (10))){
var inst_32235 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
var statearr_32261_33295 = state_32243__$1;
(statearr_32261_33295[(2)] = inst_32235);

(statearr_32261_33295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (8))){
var inst_32220 = (state_32243[(7)]);
var tmp32258 = inst_32220;
var inst_32220__$1 = tmp32258;
var state_32243__$1 = (function (){var statearr_32262 = state_32243;
(statearr_32262[(7)] = inst_32220__$1);

return statearr_32262;
})();
var statearr_32263_33296 = state_32243__$1;
(statearr_32263_33296[(2)] = null);

(statearr_32263_33296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29937__auto__ = null;
var cljs$core$async$state_machine__29937__auto____0 = (function (){
var statearr_32264 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32264[(0)] = cljs$core$async$state_machine__29937__auto__);

(statearr_32264[(1)] = (1));

return statearr_32264;
});
var cljs$core$async$state_machine__29937__auto____1 = (function (state_32243){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_32243);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e32265){var ex__29940__auto__ = e32265;
var statearr_32266_33306 = state_32243;
(statearr_32266_33306[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_32243[(4)]))){
var statearr_32267_33308 = state_32243;
(statearr_32267_33308[(1)] = cljs.core.first((state_32243[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33310 = state_32243;
state_32243 = G__33310;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$state_machine__29937__auto__ = function(state_32243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29937__auto____1.call(this,state_32243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29937__auto____0;
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29937__auto____1;
return cljs$core$async$state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_32268 = f__30128__auto__();
(statearr_32268[(6)] = c__30127__auto___33269);

return statearr_32268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32270 = arguments.length;
switch (G__32270) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30127__auto___33312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_32308){
var state_val_32309 = (state_32308[(1)]);
if((state_val_32309 === (7))){
var inst_32304 = (state_32308[(2)]);
var state_32308__$1 = state_32308;
var statearr_32311_33313 = state_32308__$1;
(statearr_32311_33313[(2)] = inst_32304);

(statearr_32311_33313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32309 === (1))){
var inst_32271 = (new Array(n));
var inst_32272 = inst_32271;
var inst_32273 = (0);
var state_32308__$1 = (function (){var statearr_32312 = state_32308;
(statearr_32312[(7)] = inst_32273);

(statearr_32312[(8)] = inst_32272);

return statearr_32312;
})();
var statearr_32313_33314 = state_32308__$1;
(statearr_32313_33314[(2)] = null);

(statearr_32313_33314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32309 === (4))){
var inst_32276 = (state_32308[(9)]);
var inst_32276__$1 = (state_32308[(2)]);
var inst_32277 = (inst_32276__$1 == null);
var inst_32278 = cljs.core.not(inst_32277);
var state_32308__$1 = (function (){var statearr_32314 = state_32308;
(statearr_32314[(9)] = inst_32276__$1);

return statearr_32314;
})();
if(inst_32278){
var statearr_32315_33315 = state_32308__$1;
(statearr_32315_33315[(1)] = (5));

} else {
var statearr_32318_33316 = state_32308__$1;
(statearr_32318_33316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32309 === (15))){
var inst_32298 = (state_32308[(2)]);
var state_32308__$1 = state_32308;
var statearr_32319_33317 = state_32308__$1;
(statearr_32319_33317[(2)] = inst_32298);

(statearr_32319_33317[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32309 === (13))){
var state_32308__$1 = state_32308;
var statearr_32320_33318 = state_32308__$1;
(statearr_32320_33318[(2)] = null);

(statearr_32320_33318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32309 === (6))){
var inst_32273 = (state_32308[(7)]);
var inst_32294 = (inst_32273 > (0));
var state_32308__$1 = state_32308;
if(cljs.core.truth_(inst_32294)){
var statearr_32321_33320 = state_32308__$1;
(statearr_32321_33320[(1)] = (12));

} else {
var statearr_32322_33321 = state_32308__$1;
(statearr_32322_33321[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32309 === (3))){
var inst_32306 = (state_32308[(2)]);
var state_32308__$1 = state_32308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32308__$1,inst_32306);
} else {
if((state_val_32309 === (12))){
var inst_32272 = (state_32308[(8)]);
var inst_32296 = cljs.core.vec(inst_32272);
var state_32308__$1 = state_32308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32308__$1,(15),out,inst_32296);
} else {
if((state_val_32309 === (2))){
var state_32308__$1 = state_32308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32308__$1,(4),ch);
} else {
if((state_val_32309 === (11))){
var inst_32288 = (state_32308[(2)]);
var inst_32289 = (new Array(n));
var inst_32272 = inst_32289;
var inst_32273 = (0);
var state_32308__$1 = (function (){var statearr_32324 = state_32308;
(statearr_32324[(7)] = inst_32273);

(statearr_32324[(8)] = inst_32272);

(statearr_32324[(10)] = inst_32288);

return statearr_32324;
})();
var statearr_32325_33324 = state_32308__$1;
(statearr_32325_33324[(2)] = null);

(statearr_32325_33324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32309 === (9))){
var inst_32272 = (state_32308[(8)]);
var inst_32286 = cljs.core.vec(inst_32272);
var state_32308__$1 = state_32308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32308__$1,(11),out,inst_32286);
} else {
if((state_val_32309 === (5))){
var inst_32281 = (state_32308[(11)]);
var inst_32276 = (state_32308[(9)]);
var inst_32273 = (state_32308[(7)]);
var inst_32272 = (state_32308[(8)]);
var inst_32280 = (inst_32272[inst_32273] = inst_32276);
var inst_32281__$1 = (inst_32273 + (1));
var inst_32282 = (inst_32281__$1 < n);
var state_32308__$1 = (function (){var statearr_32328 = state_32308;
(statearr_32328[(11)] = inst_32281__$1);

(statearr_32328[(12)] = inst_32280);

return statearr_32328;
})();
if(cljs.core.truth_(inst_32282)){
var statearr_32329_33326 = state_32308__$1;
(statearr_32329_33326[(1)] = (8));

} else {
var statearr_32330_33327 = state_32308__$1;
(statearr_32330_33327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32309 === (14))){
var inst_32301 = (state_32308[(2)]);
var inst_32302 = cljs.core.async.close_BANG_(out);
var state_32308__$1 = (function (){var statearr_32332 = state_32308;
(statearr_32332[(13)] = inst_32301);

return statearr_32332;
})();
var statearr_32333_33328 = state_32308__$1;
(statearr_32333_33328[(2)] = inst_32302);

(statearr_32333_33328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32309 === (10))){
var inst_32292 = (state_32308[(2)]);
var state_32308__$1 = state_32308;
var statearr_32334_33330 = state_32308__$1;
(statearr_32334_33330[(2)] = inst_32292);

(statearr_32334_33330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32309 === (8))){
var inst_32281 = (state_32308[(11)]);
var inst_32272 = (state_32308[(8)]);
var tmp32331 = inst_32272;
var inst_32272__$1 = tmp32331;
var inst_32273 = inst_32281;
var state_32308__$1 = (function (){var statearr_32335 = state_32308;
(statearr_32335[(7)] = inst_32273);

(statearr_32335[(8)] = inst_32272__$1);

return statearr_32335;
})();
var statearr_32336_33331 = state_32308__$1;
(statearr_32336_33331[(2)] = null);

(statearr_32336_33331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29937__auto__ = null;
var cljs$core$async$state_machine__29937__auto____0 = (function (){
var statearr_32337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32337[(0)] = cljs$core$async$state_machine__29937__auto__);

(statearr_32337[(1)] = (1));

return statearr_32337;
});
var cljs$core$async$state_machine__29937__auto____1 = (function (state_32308){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_32308);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e32338){var ex__29940__auto__ = e32338;
var statearr_32339_33333 = state_32308;
(statearr_32339_33333[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_32308[(4)]))){
var statearr_32340_33334 = state_32308;
(statearr_32340_33334[(1)] = cljs.core.first((state_32308[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33335 = state_32308;
state_32308 = G__33335;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$state_machine__29937__auto__ = function(state_32308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29937__auto____1.call(this,state_32308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29937__auto____0;
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29937__auto____1;
return cljs$core$async$state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_32341 = f__30128__auto__();
(statearr_32341[(6)] = c__30127__auto___33312);

return statearr_32341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32343 = arguments.length;
switch (G__32343) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30127__auto___33338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30128__auto__ = (function (){var switch__29936__auto__ = (function (state_32387){
var state_val_32388 = (state_32387[(1)]);
if((state_val_32388 === (7))){
var inst_32383 = (state_32387[(2)]);
var state_32387__$1 = state_32387;
var statearr_32389_33343 = state_32387__$1;
(statearr_32389_33343[(2)] = inst_32383);

(statearr_32389_33343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (1))){
var inst_32344 = [];
var inst_32345 = inst_32344;
var inst_32346 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32387__$1 = (function (){var statearr_32390 = state_32387;
(statearr_32390[(7)] = inst_32345);

(statearr_32390[(8)] = inst_32346);

return statearr_32390;
})();
var statearr_32391_33349 = state_32387__$1;
(statearr_32391_33349[(2)] = null);

(statearr_32391_33349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (4))){
var inst_32349 = (state_32387[(9)]);
var inst_32349__$1 = (state_32387[(2)]);
var inst_32352 = (inst_32349__$1 == null);
var inst_32353 = cljs.core.not(inst_32352);
var state_32387__$1 = (function (){var statearr_32392 = state_32387;
(statearr_32392[(9)] = inst_32349__$1);

return statearr_32392;
})();
if(inst_32353){
var statearr_32393_33355 = state_32387__$1;
(statearr_32393_33355[(1)] = (5));

} else {
var statearr_32394_33356 = state_32387__$1;
(statearr_32394_33356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (15))){
var inst_32377 = (state_32387[(2)]);
var state_32387__$1 = state_32387;
var statearr_32395_33357 = state_32387__$1;
(statearr_32395_33357[(2)] = inst_32377);

(statearr_32395_33357[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (13))){
var state_32387__$1 = state_32387;
var statearr_32396_33358 = state_32387__$1;
(statearr_32396_33358[(2)] = null);

(statearr_32396_33358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (6))){
var inst_32345 = (state_32387[(7)]);
var inst_32372 = inst_32345.length;
var inst_32373 = (inst_32372 > (0));
var state_32387__$1 = state_32387;
if(cljs.core.truth_(inst_32373)){
var statearr_32397_33359 = state_32387__$1;
(statearr_32397_33359[(1)] = (12));

} else {
var statearr_32398_33360 = state_32387__$1;
(statearr_32398_33360[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (3))){
var inst_32385 = (state_32387[(2)]);
var state_32387__$1 = state_32387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32387__$1,inst_32385);
} else {
if((state_val_32388 === (12))){
var inst_32345 = (state_32387[(7)]);
var inst_32375 = cljs.core.vec(inst_32345);
var state_32387__$1 = state_32387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32387__$1,(15),out,inst_32375);
} else {
if((state_val_32388 === (2))){
var state_32387__$1 = state_32387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32387__$1,(4),ch);
} else {
if((state_val_32388 === (11))){
var inst_32355 = (state_32387[(10)]);
var inst_32349 = (state_32387[(9)]);
var inst_32365 = (state_32387[(2)]);
var inst_32366 = [];
var inst_32367 = inst_32366.push(inst_32349);
var inst_32345 = inst_32366;
var inst_32346 = inst_32355;
var state_32387__$1 = (function (){var statearr_32399 = state_32387;
(statearr_32399[(7)] = inst_32345);

(statearr_32399[(11)] = inst_32367);

(statearr_32399[(12)] = inst_32365);

(statearr_32399[(8)] = inst_32346);

return statearr_32399;
})();
var statearr_32400_33369 = state_32387__$1;
(statearr_32400_33369[(2)] = null);

(statearr_32400_33369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (9))){
var inst_32345 = (state_32387[(7)]);
var inst_32363 = cljs.core.vec(inst_32345);
var state_32387__$1 = state_32387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32387__$1,(11),out,inst_32363);
} else {
if((state_val_32388 === (5))){
var inst_32355 = (state_32387[(10)]);
var inst_32349 = (state_32387[(9)]);
var inst_32346 = (state_32387[(8)]);
var inst_32355__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32349) : f.call(null,inst_32349));
var inst_32356 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32355__$1,inst_32346);
var inst_32357 = cljs.core.keyword_identical_QMARK_(inst_32346,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32358 = ((inst_32356) || (inst_32357));
var state_32387__$1 = (function (){var statearr_32401 = state_32387;
(statearr_32401[(10)] = inst_32355__$1);

return statearr_32401;
})();
if(cljs.core.truth_(inst_32358)){
var statearr_32402_33378 = state_32387__$1;
(statearr_32402_33378[(1)] = (8));

} else {
var statearr_32403_33383 = state_32387__$1;
(statearr_32403_33383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (14))){
var inst_32380 = (state_32387[(2)]);
var inst_32381 = cljs.core.async.close_BANG_(out);
var state_32387__$1 = (function (){var statearr_32405 = state_32387;
(statearr_32405[(13)] = inst_32380);

return statearr_32405;
})();
var statearr_32406_33384 = state_32387__$1;
(statearr_32406_33384[(2)] = inst_32381);

(statearr_32406_33384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (10))){
var inst_32370 = (state_32387[(2)]);
var state_32387__$1 = state_32387;
var statearr_32407_33389 = state_32387__$1;
(statearr_32407_33389[(2)] = inst_32370);

(statearr_32407_33389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (8))){
var inst_32355 = (state_32387[(10)]);
var inst_32345 = (state_32387[(7)]);
var inst_32349 = (state_32387[(9)]);
var inst_32360 = inst_32345.push(inst_32349);
var tmp32404 = inst_32345;
var inst_32345__$1 = tmp32404;
var inst_32346 = inst_32355;
var state_32387__$1 = (function (){var statearr_32408 = state_32387;
(statearr_32408[(7)] = inst_32345__$1);

(statearr_32408[(14)] = inst_32360);

(statearr_32408[(8)] = inst_32346);

return statearr_32408;
})();
var statearr_32409_33397 = state_32387__$1;
(statearr_32409_33397[(2)] = null);

(statearr_32409_33397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29937__auto__ = null;
var cljs$core$async$state_machine__29937__auto____0 = (function (){
var statearr_32410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32410[(0)] = cljs$core$async$state_machine__29937__auto__);

(statearr_32410[(1)] = (1));

return statearr_32410;
});
var cljs$core$async$state_machine__29937__auto____1 = (function (state_32387){
while(true){
var ret_value__29938__auto__ = (function (){try{while(true){
var result__29939__auto__ = switch__29936__auto__(state_32387);
if(cljs.core.keyword_identical_QMARK_(result__29939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29939__auto__;
}
break;
}
}catch (e32411){var ex__29940__auto__ = e32411;
var statearr_32412_33400 = state_32387;
(statearr_32412_33400[(2)] = ex__29940__auto__);


if(cljs.core.seq((state_32387[(4)]))){
var statearr_32413_33401 = state_32387;
(statearr_32413_33401[(1)] = cljs.core.first((state_32387[(4)])));

} else {
throw ex__29940__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33403 = state_32387;
state_32387 = G__33403;
continue;
} else {
return ret_value__29938__auto__;
}
break;
}
});
cljs$core$async$state_machine__29937__auto__ = function(state_32387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29937__auto____1.call(this,state_32387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29937__auto____0;
cljs$core$async$state_machine__29937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29937__auto____1;
return cljs$core$async$state_machine__29937__auto__;
})()
})();
var state__30129__auto__ = (function (){var statearr_32414 = f__30128__auto__();
(statearr_32414[(6)] = c__30127__auto___33338);

return statearr_32414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30129__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
