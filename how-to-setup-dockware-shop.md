# Docker setup

To set up the docker setup run the following commands:

### Start docker container
``` bash
docker compose up -d
```

### Make sure .env is correct inside the container
- log into the new created docker-container
``` bash
docker exec -it backend-stock bash
```
``` bash
vim .env
```
- press ```i``` to insert the new link
<details>
    <summary style="font-size:12px">View .env</summary>
    <p>
    APP_ENV=dev<br>
    APP_SECRET=1<br>
    INSTANCE_ID=1<br>
    DATABASE_URL=mysql://root:root@mariadb:3306/shopware<br>
    APP_URL=http://backend-stock.local.pttde.de<br>
    MAILER_URL=smtp://localhost:1025<br>
    COMPOSER_HOME=/var/www/html/var/cache/composer<br>
    SHOPWARE_ES_ENABLED=0<br>
    SHOPWARE_HTTP_CACHE_ENABLED="1"
    </p>
</details>

- press ```esc```

- type ```:wq``` and press enter
- exit the container
``` bash
exit
```

### Copy all folder structure from the container /var/www/html/
``` bash
docker cp backend-stock:/var/www/html/. .
```

### Add entry in /etc/hosts (127.0.0.1       backend-stock.local.pttde.de)
``` bash
sudo vim /etc/hosts
```

### Log into the new created docker-container
``` bash
docker exec -it backend-stock bash
```

### Install shopware

default language german via CLI Installer
``` bash
bin/console system:install --create-database --shop-locale=de-DE --shop-currency=EUR --basic-setup
```
Basic-setup installs automatically administration user with standard credentials

hint: ```—force``` at the end

### Create jwt secret --if not already created--
``` bash
bin/console system:generate-jwt-secret
```
### Storefront-channel create new sale-channel with given link
``` bash
bin/console sales-channel:create:storefront --url=http://backend-stock.local.pttde.de
```
delete old sales-channel

### Connect database in phpStorm
- open DataBase from the far right corner
- click on + -> DataSource -> MySQL
- add the credentials for MySQL from the following link: https://docs.dockware.io/use-dockware/default-credentials
- type "shopware" DataBase field

### Create admin
``` bash
bin/console user:create --admin --email=admin@doe.com --firstName="john" --lastName="Doe" --password=shopware --no-interaction johndoe
```

### Hints

The dockware setup offers a few benefits:

* Mailcatcher: [http://localhost/mailcatcher](http://localhost/mailcatcher)
* Adminer: [http://localhost/adminer.php](http://localhost/adminer.php)
* Logs: [http://localhost/logs](http://localhost/logs)

SW Swagger: [http://phishop.local.pttde.de/api/_info/swagger.html?type=jsonapi](http://phishop.local.pttde.de/api/_info/swagger.html?type=jsonapi)
SW Component Lib: [https://component-library.shopware.com/](https://component-library.shopware.com/)

#

# Watcher During development
- Clear cache of your container
``` bash
bin/console cache:clear
```
Makefile is to be found in /var/www in the project container:
``` bash
cd /var/www
```

- Start frontend dev with hot-reload and file-watcher
``` bash
make watch-storefront
```
- Start admin watcher
``` bash
make watch-admin
```
- Stop frontend dev hot-reload and file-watcher
``` bash
make stop-watch-storefront
```
Accessable through http://backen-stock.local.pttde.de:9998

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


### For themes
install/activate theme
``` bash
bin/console plugin:refresh
``` 

### compile theme
``` bash
bin/console theme:compile
```
``` bash
bin/console theme:refresh
```

# IDE SFTP settings
Syncing local environment with docker container

PhpStorm preferences->Build, Execution, Deployment->Deployment->+
- Name: ```SFTP```
- Host: ```localhost```
- Root path: ```/var/www/html/```
- Web server URL: ```http://backend-stock.local.pttde.de```

SSH Configurations->```...```
- Host: ```localhost```
- Username: ```dockware```
- Password: ```dockware```
- Port: ```22```

Test connections

PhpStorm->Tools->Deployment->Options->Skip external changes ```off```->Delete remote files when local are deleted ```on```

# Adding plugin icon in administration

- navigate to custom/static-plugins/<pluginName>/src/Resources/config
- add the image in .png format in the folder above
- the picture should be visible in the administration page under my extensions