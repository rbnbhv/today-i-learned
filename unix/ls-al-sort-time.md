# ls -al Sortierung nach Zeit

Um Dateien in einem Verzeichnis nach Datum sortiert aufzulisten, kann der Befehl  `ls` mit den Optionen `-l`, `-h` und `-t` verwendet werden. Der `-t` Schalter sortiert die Ausgabe nach dem letzten Änderungsdatum. Der Befehl sieht wie folgt aus:

```bash
ls -lht
```

Hier bedeuten die Optionen:

- `-l` : Zeigt die Dateien im langen Listenformat an.
- `-h` : Macht die Dateigröße menschenlesbar (zeigt die Größe in KB, MB, etc. an).
- `-t` : Sortiert die Dateien nach dem letzten Änderungsdatum.

Fallsdie Dateien in umgekehrter Reihenfolge anzeigt werden sollen (neueste Dateien zuletzt), muss der `-r` Schalter hinzugefügt werden:

```bash
ls -lhtr
```
