(ns lt.plugins.mpc
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.proc :as proc]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn shell-mpc
  "Pass commands to shell mpc"
  [ & cmds ]
  (partial proc/exec
    {:command "mpc" :args cmds}))


(defn- mk-key
  "Make local keyword from string"
  [n]
  (keyword
   "lt.plugins.mpc"
   (str "mpc-" n)))


(defn- mk-cmd
  "Make LT commad that is visible "
  [kywrd]
  (let [str-kywrd (name kywrd)
        new-kywrd (mk-key str-kywrd)
        desc      (str "mpc: " str-kywrd)
        shell     (shell-mpc str-kywrd)]
    (cmd/command
     {:command  new-kywrd
      :desc     desc
      :exec     shell})))

(defn main- []
  ; make LT command for those keywords
  (doseq [kywrd [:play :pause :stop :toggle :next :prev]]
    (mk-cmd kywrd)))


(main-)

