## How Does the Security access_control Work?


### Authorization & Roles

- There are two main ways to handle authorization: first, access_control and second, denying access in your controller. We'll see both, but I want to talk about access_control first, it's pretty cool.

- At the end of the ``config/packages/security.yaml`` file is the point ``access_control``
```php
  security:
    access_control:
      - { path: ^/admin, roles: ROLE_ADMIN }
  ```

- The path is a regular expression. So, this access control says that any URL that starts with /admin should require a role called ROLE_ADMIN. We'll talk about roles in a minute.

### Check via CLI which routes are available
```php 
php bin/console debug:router
```

#### Hint:
- if you add the path e.g. ```/edit_user``` to access_control, it automatically involves ```/edit_user{id}```  