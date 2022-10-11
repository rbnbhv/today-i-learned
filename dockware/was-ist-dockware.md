# Dockware
https://docs.dockware.io/

Dockware ist ein Docker Setup für Shopware 6. Es bietet gegenüber Docker den Vorteil, dass es die DevOps Komplexität nehmen soll.
Es werden hierfür drei Images von Dockware bereitgestellt:

### Dockware/play:
- Einfach zum testen / erforschen in einer Shopware6 Umgebung

### Dockware/dev:
- Wie der Name schon sagt, ist das der perfekte Weg, um in Shopware6 zu entwickeln. Hier werden viele Developer-Tools (Bsp: Xdebug, Adminer) bereitgestellt

### Dockware/contribute:
- Docker/contribute ist eine einfache Plug and Play Lösung. Wenn man etwas am Code in kurzer Zeit ausprobieren möchte, kann das hier getan werden. Über einen aufgesetzten Demoshop, der in kurzer Zeit zur Verfügung steht, kann über einen bereits vorbereiteten Pull Request direkt getestet werden.


## Easy Start für die play Variante:

- Mit dem Command: „docker run --rm -p 80:80 dockware/play:latest“ wird das Play Image einmalig heruntergeladen und das Image gestartet. Bei erneutem ausführen ist das starten wesentlich schneller.
- Die bereitgestellten URLs für Adminer, Mailcatcher, Shop und Administration werden im Terminal angezeigt.
- Bei Schließung des Images lässt sich über den Command: „docker ps“ der Container entfernen mit: „docker rm -f NAME“

## Advanced Start:
- Es wird ein neues Projekt angelegt, in der wir nur die Datei: „docker-compose.yml“ erstellen. Diese sieht wie folgt aus:

```
version: "3"

services:

shopware:
image: dockware/play:latest
container_name: shopware
ports:
- "80:80"
networks:
- web

networks:
web:
external: false
```
- Über den Befehl „docker-compose up -d“ im Projektverzeichnis lässt sich dockware nun starten. Es wird das Image aus dem „docker-compose.yml“ File gelesen.



Es ist auch möglich, verschiedene Versionen in Shopware oder PHP zu starten:
- Eine gewünschte Shopware Version: „docker run --rm -p 80:80 dockware/play:6.1.3“
- Eine gewünschte PHP Version „docker run --rm -p 80:80 --env PHP_VERSION=7.2 dockware/play:latest“