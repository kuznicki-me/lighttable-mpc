(ns lt.plugins.mpc
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.proc :as proc]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn shell-mpc
  "Pass commands to shell mpc"
  [cmd]
  (partial proc/exec
    {:command "mpc" :args #js [cmd]}))



(cmd/command {:command ::mpc-play
              :desc "mpc: play"
              :exec (shell-mpc "play")})

(cmd/command {:command ::mpc-pause
              :desc "mpc: pause"
              :exec (shell-mpc "pause")})

(cmd/command {:command ::mpc-toggle
              :desc "mpc: toggle"
              :exec (shell-mpc "toggle")})

(cmd/command {:command ::mpc-next
              :desc "mpc: next"
              :exec (shell-mpc "next")})

(cmd/command {:command ::mpc-prev
              :desc "mpc: prev"
              :exec (shell-mpc "prev")})
