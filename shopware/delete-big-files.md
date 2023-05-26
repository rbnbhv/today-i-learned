# Große Dateien/pdfs aus Media Ordner löschen

- Zuerst einmal suchen wir nach den Dateien mit dem Befehl:
- find /path/to/product/media -type f -iname "*.pdf" -size +4M


- Mit diesem Befehl werden alle Verzeichnisse durchsucht auf Dateien, die größer als 4Mb sind und mit .pdf enden.
- Zudem wird für jede gefundene ein Verzeichnis angelegt, dass den gleichen Pfad hat, wie das Verzeichnis der aktuellen Datei. (Bsp /media/h1/h2/h515/bild1.pdf —> /tmp/media/h1/h2/h515/bild1.pdf)
- Die Datei wird verschoben in das erstellte Verzeichnis.

```
	find . -type f -iname "*.pdf" -size +4M -exec bash -c 'mkdir -p ./tmpBigPictures/$(dirname ${1#./}); mv "$1" ./tmpBigPictures/${1#./}' _ {} \;
```


1. `_`: Platzhalter-Argument für die `bash -c`-Option. Wenn Sie `bash -c` verwenden, um einen Befehl auszuführen, wird das erste Argument nach dem Befehlsstring als `$0` in der Befehlszeile behandelt. In diesem Fall verwenden wir `_` als Platzhalter, um klarzustellen, dass wir `$0` nicht benötigen und es keine Bedeutung hat. Sie könnten hier auch einen anderen Platzhalter wie `placeholder` oder `dummy` verwenden.

2. `{}`: Platzhalter für den Dateinamen, der von `find` gefunden wurde. Wenn `find` eine Datei findet, die den angegebenen Kriterien entspricht (in diesem Fall PDF-Dateien, die größer als 4 MB sind), ersetzt es `{}` durch den relativen Pfad der gefundenen Datei.

3. `\;`: Dies ist das Ende der `-exec`-Option für den `find`-Befehl. Es zeigt an, dass der Befehl, der mit `-exec` ausgeführt wird, hier endet. Der umgekehrte Schrägstrich `\` ist notwendig, um das Semikolon `;` vor der Shell zu schützen, da es sonst als Befehlstrennzeichen interpretiert wird. Das Semikolon `;` zeigt `find` an, dass es den angegebenen Befehl für jede gefundene Datei einzeln ausführen soll.
