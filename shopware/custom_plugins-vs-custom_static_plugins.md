# Shopware 6 - Custom plugins vs custom static plugins

- Zu Beginn hatten wir nur den plugin Folder in der shopware/development Projektstruktur
- Eine normale Projektstruktur arbeitet mit dem "static-plugins" folder für projektspezifische Plugins
- (siehe https://github.com/shopware/production#require-project-plugins)
- Wenn man ein Plugin erstellt, dann unter custom/static-plugins/{pluginame} 
- und in der composer.json eintragen mit ```composer require "exampleorg/myplugin" 

### TL;DR
- custom/static-plugins - for project-specific custom-built plugins
- custom/plugins - for plugins bought in the Shopware Store and installed manually