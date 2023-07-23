# Große Dateien aus einem folder löschen

* **Annahme:** Die Dateien befinden sich bei im Ordner `/tmp`
* Um nur Dateien zu löschen, die größer als 4MB sind und dabei Ordner zu ignorieren, kann der `find`-Befehl verwendet werden. Dies ist der entsprechende Befehl:

```bash
find /tmp -type f -size +4M -exec rm -f {} \;
```

### Wichtig: Es sollen aber nur die unnötigen Dateien (alle Dateien sind 6 Zeichen lang) gelöscht werden
* Daher greife ich hier auf die Dateien von dem `web-user` zurück mit folgendem Befehl:

```bash
find . -maxdepth 1 -type f -user web-user -name "??????"
```

* Wenn dieser Befehl passt und genau die Dateien gefunden werden, die gelöscht werden können, können diese gelöscht werden mit folgendem Anhang:

```bash
find . -maxdepth 1 -type f -user web-user -name "??????" -exec rm -f {} \;
```

* Nun kann z.B. über das Festplattendienstprogramm `ncdu` z.B. geprüft werden, ob Speicher frei geworden ist.
