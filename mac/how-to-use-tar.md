# HowTo .tar
* Um ein tar-Archiv auf einem Mac zu erstellen, können Sie das Terminal verwenden und den folgenden Befehl eingeben:

```bash
tar -cvf archivname.tar /pfad/zum/verzeichnis
```

Ersetze „archivname.tar“ mit dem gewünschten Namen für das tar-Archiv und „/pfad/zum/verzeichnis“ mit dem Pfad zum Verzeichnis, das archiviert werde soll. Der Befehl funktioniert wie folgt:

- `tar`: Das Kommando zum Arbeiten mit tar-Archiven.
- `-c`: Steht für „create“, um ein neues Archiv zu erstellen.
- `-v`: Steht für „verbose“. Damit wird der Fortschritt des Archivierungsvorgangs angezeigt.
- `-f`: Steht für „file“. Damit geben Sie an, dass das nächste Argument der Name der Datei ist, die Sie erstellen möchten.

Nachdem der Befehl ausgeführt wurde, sollte eine neue tar-Datei im aktuellen Verzeichnis einsehbar sein.


# HowTo .tar and untar .tar
* Um ein tar-Archiv auf einem Mac zu entpacken, muss folgendener Befehl eingeben werden:

```bash
tar -xvf /pfad/zur/datei.tar
```

Ersetze dann „/pfad/zur/datei.tar“ mit dem tatsächlichen Pfad zur tar-Datei, die entpackt werden soll. Der Befehl funktioniert wie folgt:

- `tar`: Das Kommando zum Arbeiten mit tar-Archiven.
- `-x`: Steht für „extrahieren“.
- `-v`: Steht für „verbose“. Damit wird der Fortschritt des Entpackvorgangs angezeigt.
- `-f`: Steht für „file“. Damit geben Sie an, dass das nächste Argument der Name der Datei ist, die Sie entpacken möchten.

* Nun sollte der Inhalt des tar-Archivs im aktuellen Verzeichnis einsehbar sein.

