## the SOLID - principles

The five principles for object oriented programing and software design

* Single Responsibility Principle (SRP)
- The SRP are not just about single classes or functions. Rather it is about requirements of an actor defining collections an Funktionalitäten und Datenstrukturen.

* Open Closed Principle (OCP)
- Das OCP beschäftigt sich mit der Erweiterbarkeit von bestehender Software.
  „Module sollten sowohl offen (für Erweiterungen) als auch verschlossen (für Modifikationen) sein.“
- Mit Modulen sind hier Software-Einheiten gemeint, bei welchen es sich sowohl um Module als auch Klassen, Methode etc. handeln kann.
- Eine Erweiterung im Sinne des Open-Closed-Prinzips ist beispielsweise die Vererbung. Diese verändert das vorhandene Verhalten der Einheit nicht, erweitert aber die Einheit um zusätzliche Funktionen oder Daten.

* Liskov Substitution Principle (LSP)
  Wiederverwendbarkeit
  Dies adressiert die Wiederverwendbarkeit aber auf eine Ebene mit sehr vielen Details. Die echte Wiederverwendbarkeit eines domänespezifischen Aspekts kann zum Beispiel durch das Open Closed Principle gefördert werden.


* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)


Wartbarkeit
Wenn Änderungen oder Fehlerkorrekturen nur schwer vorgenommen werden können, spricht man von einer schlechten Wartbarkeit des Softwaresystems. Sofern die Umsetzung einer neuen User Story eine fachlich getrennte User Story beeinflusst und damit Erweiterungen nicht isoliert durchführbar sind, ist die Wartbarkeit des Programms bereits beeinflusst.
SOLID hilft, solche Seiteneffekte zu reduzieren. Zusätzlich sollten Sie bedenken: Die SOLID-Prinzipien können auf fachlicher Ebene keine Wunder bewirken. Auch sind die SOLID-Prinzipien kein Allheilmittel, wenn ein System an größeren architekturellen Problemen leidet. Wohl aber helfen die SOLID-Prinzipien, die fachlichen Anforderungen an Ihr System besser (erweiterbarer und damit auch wartbarer) zu modellieren, indem sie Prinzipien definieren, nach denen Entwickler vorgehen können, um Klassen zu modellieren.
Verständlichkeit und Verständnis
Software muss nicht immer kompliziert sein. Die SOLID-Prinzipien helfen Ihnen, Ihren Programmcode einfacher zu gestalten. Sie tragen zu einem effizienten und verständlichen Umgang mit technischen Details bei und stellen damit die für Sie wichtige Fachlichkeit in den Vordergrund. Wie Sie in den folgenden Artikeln sehen werden, ist Verständlichkeit auch automatisch eine Konsequenz aus Erweiterbarkeit und Wiederverwendbarkeit. Viele Technologien und Methodiken der objektorientierten Programmierung – wie zum Beispiel Design-Patterns oder auch die Dependency Injection (nicht mit Dependency Inversion Principle zu verwechseln) – basieren auf den SOLID-Prinzipien bzw. werden durch deren Verständnis gefördert.
