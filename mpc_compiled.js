if(!lt.util.load.provided_QMARK_('lt.plugins.mpc')) {
goog.provide('lt.plugins.mpc');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.mpc.config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mpclib","mpclib",4240972503),"mpd",new cljs.core.Keyword(null,"connection","connection",4533219920),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",1017112858),"localhost",new cljs.core.Keyword(null,"port","port",1017351155),6600], null)], null);
lt.plugins.mpc.get_js_lib = (function get_js_lib(path){return require(new cljs.core.Keyword(null,"mpclib","mpclib",4240972503).cljs$core$IFn$_invoke$arity$1(lt.plugins.mpc.config));
});
lt.plugins.mpc.mpclib = (function mpclib(){return lt.plugins.mpc.get_js_lib.call(null,new cljs.core.Keyword(null,"mpclib","mpclib",4240972503).cljs$core$IFn$_invoke$arity$1(lt.plugins.mpc.config));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.mpc","mpc-play","lt.plugins.mpc/mpc-play",2898949298),new cljs.core.Keyword(null,"desc","desc",1016984067),"mpc: play",new cljs.core.Keyword(null,"exec","exec",1017031683),console.log("asdf")], null));
}

//# sourceMappingURL=mpc_compiled.js.map