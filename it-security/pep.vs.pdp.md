## PEP vs PDP (IT-Sicherheit)

- Policies sind Regeln, die die Abläufe beeinflussen. Solche Regeln können sowohl einschränkender Natur sein, als auch erweiternder Natur. Das bedeutet, eine Policy kann zum Beispiel eine Dienstnutzung unterbinden, sie kann aber auch Maßnahmen innerhalb eines Systems anstoßen, die die Dienstnutzung beschleunigen oder vereinfachen könnten. Ein klassisches Beispiel hierfür wäre es, eine zusätzliche Außenleitung aufzubauen, sobald die bestehende Leitung ausgelastet ist. Dies würde sich dann auf die Nutzung der Außenanbindung beziehen.

### PDP (Policy Decision Point)
- Der PDP ist die Instanz, in der Policy Entscheidungen getroffen werden.
- Der Policy Decision Point (PDP) legt die zentralen Regeln vom Common Open Policy Service (COPS) in einem Netzwerk fest. Er trifft die Entscheidungen für die Autorisierung für Systemeinheiten, die entsprechende Entscheidungen anfordern.

Versucht ein Benutzer Zugang zu einer Datei oder anderen Ressourcen eines Servers oder Netzwerks zu erhalten, informiert der Policy Enforcement Point (PEP) andere Instanzen des Netzwerks über die Benutzerattribute. Die Entscheidung wird dann vom Policy Decision Point (PDP) getroffen, der letztendlich anhand der Benutzerattribute über die Autorisierung entscheidet. Der Policy Enforcement Point informiert daraufhin den Benutzer über die Entscheidung des Policy Decision Point.

Policy Decision Point ist Bestandteil eines richtlinienbasierten Zugriffskontrollsystems RBAC, das auf Grundlage der verfügbaren Informationen ( Attribute) und der geltenden Sicherheitsrichtlinien entscheidet, ob die Anfrage eines Benutzers genehmigt werden soll oder nicht.

### PEP (Policy Enforcement Point)
- Der PEP ist die Instanz, der die Implementierung zur Umsetzung der vom PDP getroffenen Policy-Entscheidung enthält.

- Der Policy Enforcement Point (PEP) ist eine logische Instanz auf einem Server mit dem die Richtlinien für die Zugangskontrollen geregelt werden. Er ist eine Art Security-Appliance mit dem einer oder mehrere Endpunkte geschützt werden.

- Der PEP-Point ist Teil des Richtlinien-Managements, wie dem Common Open Policy Service (COPS), mit dem Benutzeranfragen für die Nutzung von Server- oder Netzwerk-Ressourcen den Zugangsrichtlinien entsprechend abgearbeitet werden. 
Der Policy Enforcement Point setzt die Richtlinien durch, die in Zusammenhang mit der Authentifizierung des Teilnehmers und der Autorisierung des Zugangs zu Diensten, Buchungen, Mobilität u.a. stehen. Policy Enforcement Points sind ebenso Punkte an denen der Netzwerkstatus überwacht werden kann. Anfragen zur Nutzung einer Ressource werden an den Policy Enforcement Point (PEP) geleitet und von diesem an einen Policy Decision (PDP) Point oder Policy Decision Service (PDS) weitergeleitet, wo sie überprüft und wieder an den PEP-Point übertragen werden. Dieser erlaubt danach den Zugriff auf die gewünschte Ressource.