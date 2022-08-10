### Hints for creating a static plugin

create a plugin in the container
``` bash
bin/console plugin:create name
bin/console plugin:refresh
```

# Usefull commands

### For creating a plugin and moving it in static-folder
- create the plugin in the container custom->plugin
```bash
bin/console plugin:create <NameOfPluginClass>  
```
(<NameOfPluginClass>: no symbols, spaces or small letters && "Reply" at the beginning)

- download from the container via right-click on the plugin folder
- the plugin is now in the custom->plugin locally
- move the plugin (locally) to static-plugins
- the Automatic Upload in the deployment tool will automatically upload the plugin to the static folder in the container
- add a version to the plugin's composer.json after "type:..."
```bash
"version": "0.0.0",
```
- require the plugin in the container
```bash
composer require <reply/name>
```
(<reply/name>: first line from the composer.json of the plugin)
- make sure all changes are noted in composer.json and composer.lock files and always download from SFTP after changes in the container
```bash
composer update
```
- refresh plugin list to check if plugin is there
```bash
bin/console plugin:refresh
```
- install and activate the plugin
```bash
bin/console plugin:install --activate <NameOfPluginClass>
```
- check if installed (refresh plugin list)