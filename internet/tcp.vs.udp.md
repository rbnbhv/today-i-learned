## TCP vs UDP

### TCP (Transmission Control Protocol)
- Das TCP/IP beruht auf zwei Schichten. Durch die obere Schicht, das TCP, wird eine Nachricht oder Datei in kleinere Pakete zerlegt. Nachdem diese übertragen wurden, werden sie beim Empfänger ebenfalls durch eine TCP-Schicht wieder so zusammengesetzt, dass diese kleinen Päckchen schließlich wieder die ursprüngliche Nachricht oder Datei ergeben.
Die untere Schicht ist das IP (das Internet Protocol). Es sorgt dafür, dass jedes Paket auch beim richtigen Ziel ankommt.


- Datenverlust verhindern
- Dateien und Datenströme aufteilen
- Datenpakete den passenden Anwendungen zuordnen


### UDP (User Datagram Protocol)
- UDP ist ein verbindungsloses Transportprotokoll. Das UDP hat zwar ähnliche Aufgaben zu erfüllen wie das TCP, dabei arbeitet es aber – im Gegensatz zum TCP – verbindungslos und unsicher. Das heißt, als Absender weiß man hier nie, ob das versendete Datenpaket angekommen ist, da keine Empfangsbestätigungen gesendet werden. UDP wird hauptsächlich bei DNS-Anfragen, VPN-Verbindungen und Audio- und Videostreaming verwendet, da es durch seine vereinfachte Arbeitsweise schneller ist.