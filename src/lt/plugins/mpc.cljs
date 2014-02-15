(ns lt.plugins.mpc
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))


(def config
  {:mpclib "mpd"
   :connection {:host "localhost"
                :port  6600}})


(defn get-js-lib [path]
  (js/require (:mpclib config)))


(defn mpclib []
  (get-js-lib (:mpclib config)))

; (defn )


; (.log js/console (.cmd (mpclib)))


(cmd/command {:command ::mpc-play
              :desc "mpc: play"
              :exec (.log js/console "asdf")})
