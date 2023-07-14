# HowTo move Directory to parent folder
* Um alle Dateien aus einem Verzeichnis in ein anderes zu verschieben wird folgender Befehl ausgeführt:

```bash
mv shopware/_backups/* shopware/
```

Dieser Befehl verschiebt alle Dateien und Verzeichnisse aus dem `_backups` Verzeichnis in das `shopware` Verzeichnis. 

#### Hint: Beachte, dass dies nicht die versteckten Dateien (Dateien, deren Name mit einem Punkt beginnt) verschiebt. 
	* Wenn auch versteckte Dateien verschieben werden sollen, kann folgender Befehl verwendet werden:

```bash
mv shopware/_backups/{,.[^.]}* shopware/
```

Dieser Befehl wählt alle Dateien aus, auch diejenigen, deren Name mit einem Punkt beginnt, und verschiebt sie in das `shopware` Verzeichnis.
