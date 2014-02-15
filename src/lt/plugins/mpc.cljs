(ns lt.plugins.mpc
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.proc :as proc]
            [lt.objs.notifos :as notifos]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [behavior]]))



(behavior ::shell-mpc.out
          :desc "When mpc command is executed, show its out"
          :triggers #{:proc.out}
          :reaction (fn [ obj data ]
                      (notifos/set-msg! (.toString data))))


(def shell-mpc-out ;shell out object
  (object/create
   (object/object*
    ::shell-mpc-out
    :tags [:shell-mpc-out]
    :behaviors [::shell-mpc.out])))



(defn shell-mpc
  "Pass commands to shell mpc"
  [ mpc-path & cmds ]
  (partial proc/exec
    {:command mpc-path
     :args    cmds
     :obj     shell-mpc-out}))



(defn- mk-key
  "Make local keyword from string"
  [n]
  (keyword (str *ns*) (str "mpc-" n)))



(defn- mk-cmd
  "Make LT commad that is visible for LT"
  [mpc-path kywrd]
  (let [str-kywrd (name kywrd)
        new-kywrd (mk-key str-kywrd)
        desc      (str "mpc: " str-kywrd)
        shell     (shell-mpc mpc-path str-kywrd)]
    (cmd/command
     {:command  new-kywrd
      :desc     desc
      :exec     shell})))



(behavior ::mpc-init
          :triggers #{:object.instant}
          :desc "Init mpc with your beloved commands, ie: \"/usr/bin/mpc\" [:play :pause :toggle :next :prev :status :update]"
          :reaction (fn [this mpc-path commands]
                      (doseq [kywrd commands]
                        (mk-cmd mpc-path kywrd))))

