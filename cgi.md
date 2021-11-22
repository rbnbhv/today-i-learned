## what is cgi ?

- Das Common Gateway Interface (CGI) ist ein Standard für den Datenaustausch zwischen einem Webserver und 
dritter Software, die Anfragen bearbeitet. CGI ist eine Variante, Webseiten dynamisch bzw. interaktiv zu machen, deren erste 
Überlegungen auf das Jahr 1993 zurückgehen.
- Sie gehört zu den ältesten Schnittstellentechnologien des Internets und wird bis heute häufig verwendet
- Mit CGI müssen HTML-Seiten nicht vollständig auf dem Server bereitstehen, sondern werden dynamisch erzeugt, sobald ein 
Nutzer eine passende Anfrage über die Website stellt.


### Funktionsweise:
- Wenn ein Nutzer eine Eingabe auf einer Webseite vornimmt, werden diese Daten nicht direkt an den Server weitergeleitet, sondern 
müssen zunächst noch bearbeitet werden. 
Diese Bearbeitung erfolgt über eine externe Software (bzw. ein CGI-Skript), nicht über den Webserver direkt. Das Programm 
übermittelt die Daten über die standardisierte CGI-Schnittstelle an den Server, der daraufhin die neu erzeugten Informationen 
in HTML darstellen kann. CGI-Programme liegen in der Regel in einem eigenen Ordner auf dem Webserver
