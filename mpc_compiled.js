if(!lt.util.load.provided_QMARK_('lt.plugins.mpc')) {
goog.provide('lt.plugins.mpc');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.proc');
goog.require('lt.objs.proc');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
/**
* Pass commands to shell mpc
* @param {...*} var_args
*/
lt.plugins.mpc.shell_mpc = (function() { 
var shell_mpc__delegate = function (cmds){return cljs.core.partial.call(null,lt.objs.proc.exec,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",1964298941),"mpc",new cljs.core.Keyword(null,"args","args",1016906831),cmds], null));
};
var shell_mpc = function (var_args){
var cmds = null;if (arguments.length > 0) {
  cmds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return shell_mpc__delegate.call(this,cmds);};
shell_mpc.cljs$lang$maxFixedArity = 0;
shell_mpc.cljs$lang$applyTo = (function (arglist__8402){
var cmds = cljs.core.seq(arglist__8402);
return shell_mpc__delegate(cmds);
});
shell_mpc.cljs$core$IFn$_invoke$arity$variadic = shell_mpc__delegate;
return shell_mpc;
})()
;
/**
* Make local keyword from string
*/
lt.plugins.mpc.mk_key = (function mk_key(n){return cljs.core.keyword.call(null,"lt.plugins.mpc",[cljs.core.str("mpc-"),cljs.core.str(n)].join(''));
});
/**
* Make LT commad that is visible
*/
lt.plugins.mpc.mk_cmd = (function mk_cmd(kywrd){var str_kywrd = cljs.core.name.call(null,kywrd);var new_kywrd = lt.plugins.mpc.mk_key.call(null,str_kywrd);var desc = [cljs.core.str("mpc: "),cljs.core.str(str_kywrd)].join('');var shell = lt.plugins.mpc.shell_mpc.call(null,str_kywrd);return lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new_kywrd,new cljs.core.Keyword(null,"desc","desc",1016984067),desc,new cljs.core.Keyword(null,"exec","exec",1017031683),shell], null));
});
lt.plugins.mpc.main_ = (function main_(){var seq__8398 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play","play",1017347750),new cljs.core.Keyword(null,"pause","pause",1120344424),new cljs.core.Keyword(null,"stop","stop",1017445236),new cljs.core.Keyword(null,"toggle","toggle",4440567494),new cljs.core.Keyword(null,"next","next",1017282149),new cljs.core.Keyword(null,"prev","prev",1017353637)], null));var chunk__8399 = null;var count__8400 = 0;var i__8401 = 0;while(true){
if((i__8401 < count__8400))
{var kywrd = cljs.core._nth.call(null,chunk__8399,i__8401);lt.plugins.mpc.mk_cmd.call(null,kywrd);
{
var G__8403 = seq__8398;
var G__8404 = chunk__8399;
var G__8405 = count__8400;
var G__8406 = (i__8401 + 1);
seq__8398 = G__8403;
chunk__8399 = G__8404;
count__8400 = G__8405;
i__8401 = G__8406;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8398);if(temp__4092__auto__)
{var seq__8398__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8398__$1))
{var c__7497__auto__ = cljs.core.chunk_first.call(null,seq__8398__$1);{
var G__8407 = cljs.core.chunk_rest.call(null,seq__8398__$1);
var G__8408 = c__7497__auto__;
var G__8409 = cljs.core.count.call(null,c__7497__auto__);
var G__8410 = 0;
seq__8398 = G__8407;
chunk__8399 = G__8408;
count__8400 = G__8409;
i__8401 = G__8410;
continue;
}
} else
{var kywrd = cljs.core.first.call(null,seq__8398__$1);lt.plugins.mpc.mk_cmd.call(null,kywrd);
{
var G__8411 = cljs.core.next.call(null,seq__8398__$1);
var G__8412 = null;
var G__8413 = 0;
var G__8414 = 0;
seq__8398 = G__8411;
chunk__8399 = G__8412;
count__8400 = G__8413;
i__8401 = G__8414;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.plugins.mpc.main_.call(null);
}

//# sourceMappingURL=mpc_compiled.js.map