MPD client for LightTable
=========================
It's very simple and currently shell based <br>
(but future plans are huge!)


Usage
-----
add :mpc/init *&lt;path to your mpc&gt;* **[commands you would like to use]** to your *app* user behaviors <br>
for example my user behavior:

    {:+ {
         :app [
             (:lt.plugins.mpc/mpc-init "/usr/bin/mpc" [:play :pause :stop :toggle :next :prev :status :update])
         ]
    }}
