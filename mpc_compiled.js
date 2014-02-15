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
*/
lt.plugins.mpc.shell_mpc = (function shell_mpc(cmd){return cljs.core.partial.call(null,lt.objs.proc.exec,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",1964298941),"mpc",new cljs.core.Keyword(null,"args","args",1016906831),[cmd]], null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.mpc","mpc-play","lt.plugins.mpc/mpc-play",2898949298),new cljs.core.Keyword(null,"desc","desc",1016984067),"mpc: play",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.mpc.shell_mpc.call(null,"play")], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.mpc","mpc-pause","lt.plugins.mpc/mpc-pause",1463870314),new cljs.core.Keyword(null,"desc","desc",1016984067),"mpc: pause",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.mpc.shell_mpc.call(null,"pause")], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.mpc","mpc-toggle","lt.plugins.mpc/mpc-toggle",2182198482),new cljs.core.Keyword(null,"desc","desc",1016984067),"mpc: toggle",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.mpc.shell_mpc.call(null,"toggle")], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.mpc","mpc-next","lt.plugins.mpc/mpc-next",2899014641),new cljs.core.Keyword(null,"desc","desc",1016984067),"mpc: next",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.mpc.shell_mpc.call(null,"next")], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.mpc","mpc-prev","lt.plugins.mpc/mpc-prev",2898938801),new cljs.core.Keyword(null,"desc","desc",1016984067),"mpc: prev",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.mpc.shell_mpc.call(null,"prev")], null));
}

//# sourceMappingURL=mpc_compiled.js.map