MPD client for LightTable
=========================
It's very simple and currently shell based <br>
(but future plans are huge!)


Usage
-----
### Loading MPC with LightTable
add :mpc/init *&lt;path to your mpc&gt;* **[commands you would like to use]** to your *app* user behaviors <br>
for example my user behavior:

    {:+ {
         :app [
             (:lt.plugins.mpc/mpc-init "/usr/bin/mpc" [:play :pause :stop :toggle :next :prev :status :update])
         ]
    }}


### Adding keyboard shortcuts
example in user keymap

    {:+ {
         :app {"alt-shift-t" [:lt.plugins.mpc/mpc-toggle]}
    }}
