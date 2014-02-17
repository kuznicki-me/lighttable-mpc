if(!lt.util.load.provided_QMARK_('lt.plugins.mpc')) {
goog.provide('lt.plugins.mpc');
goog.require('cljs.core');
goog.require('lt.objs.tabs');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');
lt.plugins.mpc.__BEH__shell_mpc__DOT__out = (function __BEH__shell_mpc__DOT__out(obj,data){return lt.objs.notifos.set_msg_BANG_.call(null,data.toString());
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mpc","shell-mpc.out","lt.plugins.mpc/shell-mpc.out",2280790932),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mpc.__BEH__shell_mpc__DOT__out,new cljs.core.Keyword(null,"desc","desc",1016984067),"When mpc command is executed, show its out",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.mpc.shell_mpc_out = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mpc","shell-mpc-out","lt.plugins.mpc/shell-mpc-out",2280826605),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shell-mpc-out","shell-mpc-out",1758412790)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.mpc","shell-mpc.out","lt.plugins.mpc/shell-mpc.out",2280790932)], null)));
/**
* Pass commands to shell mpc
* @param {...*} var_args
*/
lt.plugins.mpc.shell_mpc = (function() { 
var shell_mpc__delegate = function (mpc_path,cmds){return cljs.core.partial.call(null,lt.objs.proc.exec,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),mpc_path,new cljs.core.Keyword(null,"args","args",1016906831),cmds,new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.mpc.shell_mpc_out], null));
};
var shell_mpc = function (mpc_path,var_args){
var cmds = null;if (arguments.length > 1) {
  cmds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return shell_mpc__delegate.call(this,mpc_path,cmds);};
shell_mpc.cljs$lang$maxFixedArity = 1;
shell_mpc.cljs$lang$applyTo = (function (arglist__8213){
var mpc_path = cljs.core.first(arglist__8213);
var cmds = cljs.core.rest(arglist__8213);
return shell_mpc__delegate(mpc_path,cmds);
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
* Make LT commad that is visible for LT
*/
lt.plugins.mpc.mk_cmd = (function mk_cmd(mpc_path,kywrd){var str_kywrd = cljs.core.name.call(null,kywrd);var new_kywrd = lt.plugins.mpc.mk_key.call(null,str_kywrd);var desc = [cljs.core.str("mpc: "),cljs.core.str(str_kywrd)].join('');var shell = lt.plugins.mpc.shell_mpc.call(null,mpc_path,str_kywrd);return lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new_kywrd,new cljs.core.Keyword(null,"desc","desc",1016984067),desc,new cljs.core.Keyword(null,"exec","exec",1017031683),shell], null));
});
lt.plugins.mpc.__BEH__mpc_init = (function __BEH__mpc_init(this$,mpc_path,commands){var seq__8199 = cljs.core.seq.call(null,commands);var chunk__8200 = null;var count__8201 = 0;var i__8202 = 0;while(true){
if((i__8202 < count__8201))
{var kywrd = cljs.core._nth.call(null,chunk__8200,i__8202);lt.plugins.mpc.mk_cmd.call(null,mpc_path,kywrd);
{
var G__8214 = seq__8199;
var G__8215 = chunk__8200;
var G__8216 = count__8201;
var G__8217 = (i__8202 + 1);
seq__8199 = G__8214;
chunk__8200 = G__8215;
count__8201 = G__8216;
i__8202 = G__8217;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8199);if(temp__4092__auto__)
{var seq__8199__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8199__$1))
{var c__7497__auto__ = cljs.core.chunk_first.call(null,seq__8199__$1);{
var G__8218 = cljs.core.chunk_rest.call(null,seq__8199__$1);
var G__8219 = c__7497__auto__;
var G__8220 = cljs.core.count.call(null,c__7497__auto__);
var G__8221 = 0;
seq__8199 = G__8218;
chunk__8200 = G__8219;
count__8201 = G__8220;
i__8202 = G__8221;
continue;
}
} else
{var kywrd = cljs.core.first.call(null,seq__8199__$1);lt.plugins.mpc.mk_cmd.call(null,mpc_path,kywrd);
{
var G__8222 = cljs.core.next.call(null,seq__8199__$1);
var G__8223 = null;
var G__8224 = 0;
var G__8225 = 0;
seq__8199 = G__8222;
chunk__8200 = G__8223;
count__8201 = G__8224;
i__8202 = G__8225;
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mpc","mpc-init","lt.plugins.mpc/mpc-init",2904919510),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mpc.__BEH__mpc_init,new cljs.core.Keyword(null,"desc","desc",1016984067),"Init mpc with your beloved commands, ie: \"/usr/bin/mpc\" [:play :pause :toggle :next :prev :status :update]",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
}

//# sourceMappingURL=mpc_compiled.js.map