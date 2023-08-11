# HowTo extend the SSH session

* The automatic timeout setting for SSH sessions is usually set on the server and cannot be changed from the client. Most shared hosting providers, like Mittwald, don't give you access to these settings.

* You can set an automatic ping to extend the session with the following command:

Place this in the `~/.ssh/config` 

```
Host *
      ServerAliveInterval 60
```
