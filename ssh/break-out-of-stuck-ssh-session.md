# Breakout of Stuck SSH Sessions

- SSH sessions frequently get stuck due to network disruptions, an out-of-hand program, or certain terminal escape sequences that freeze keyboard input.

- The escape character ~ is included in ssh by default. The command ~. terminates an active connection and returns you to the terminal. (Escape sequences can only be input on a new line.) ~? displays all the commands available for use during a session. On international keyboards, it may be necessary to hit the ~ key twice to send the ~ character.
