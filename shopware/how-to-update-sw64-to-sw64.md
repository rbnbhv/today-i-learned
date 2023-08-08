Update Shopware 6.4 to 6.5

## Pre-Update
1. Run the classic Process (on `6.4.20.2` image), to update to v6.4.20.2. (look at the `README.md` in the Standard template)

**Shop-Setup after git clone of the current project status:**
```shell
make docker-exec
composer install
bin/console system:setup
# delete install.lock
bin/console system:install
bin/console theme:compile && bin/console cache:clear
```

## Local Update-Process to the last 6.4 Update (v6.4.20.2)
2. Import the database
3. ~**Important:**~ Update the shopware dependencies in the `composer.json`

**Now run the following commands:**
```shell
bin/console system:update:prepare
composer update
bin/console system:update:finish
bin/build-js.sh
```

4. Now you can deploy this status to the target server
5. On the SSH now you have to update the plugins with:

```shell
bin/console plugin:update
```

## Local Update-Process to v6.5.*

1. Restart the project locally with a SW6.5 Image like `image: dockware/dev:6.5.3.3` 
2. Update your `docker-compose.yml` and mount the local volume

```yaml
volumes:
  - "./shopware:/var/www/html/"
```

4. With the image `dev/6.5.3.3`you have to update the host in the`DATABASE_URL` in the `.env` file to `127.0.0.1` 
5. Import the database backup
6. Add the domain `localhost` to the saleschannel
7. Now you are working on a `dockware/dev:6.5.3.3` Image and your shop is still on 6.4.20.2 with the real database.
8. Update plugins: -> To the newest version for all plugins and [Use this script for changing the plugin version](bear://x-callback-url/open-note?id=38068E74-1CCE-47F9-A108-0310341A474E)
9. Deactivate all plugins (via db table `plugin`: `set active = 0 where active = 1`) — (and especially change theme to default) 
10. **Run the following commands:**
```bash
nvm install 16
bin/build-js.sh
bin/console cache:clear
nvm use 18
```

11. **~Important:~** Commit the updated file `var/plugins.json` in your repository
12. Check if everything is compatible, when you want to start the update process via Administration (even plugins) 
13. **First:** Start Update via Administration
14. Even if there are some errors like internal error message, you can install now the `shopware-update-installer`
15. Download the correct `shopware-update-installer` from [Shopware Changelog](https://www.shopware.com/de/changelog/) and copy the file in the `public`folder of the shopware project
16. Call and execute the shop `website/composer-update.phar.php`
17. If the process works completely fine, all dependencies should be updated 
    1. If the process is not working to the end, you can manually finish the process via CLI 
    2. Give correct rights to the folder `bin` with `chmod u+x bin/*` for using the scripts
18. Check `composer recipes` and if you can update the recipes
    1. Run `composer update` via CLI
    2. Run `bin/console system:update:finish`

## Post-Update-Process v6.5.*
1. When your Shop is successfully running on Shopware v6.5. you have to update your plugins with `bin/console plugin:update:all`
2. Reactivate the plugins and theme
3. Put the `build.sh` script in the `bin` folder
4. Change the deployment image to a valid`sw-65` image
5. Execute local the `bin/build.sh` to get a valid `var/plugins.json` file
6. Deploy on the repository
7. Remove all plugins via `composer remove vendor/pluginname`, that are not working and write them down to find a solution
8. Deploy on the repository again
9. Check if everything is compatible (even Plugins)


## Hints:
- If you get an **oAuth-error**, run `bin/console system:generate-jwt-secret --force`
- The `build.js` files are not transferred during deployment, there is an error in triggering the theme.
