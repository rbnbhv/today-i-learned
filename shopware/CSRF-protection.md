# What is CSRF protection?

## CSRF - Cross Site Request Forgery
- Cross Site Request Forgery is an attack that forces an end user to execute unwanted actions on a web application in which they’re currently authenticated
- If the victim is a normal user, a successful CSRF attack can force the user to perform state changing requests like transferring funds, changing their email address, and so forth. 
- If the victim is an administrative account, CSRF can compromise the entire web application.

### Secure the forms with shopware tools

- CSRF protection is to secure the forms in the storefront
- especially needed for custom forms like:

```bash
<form action="{{ path('some.action') }}"
    method="post"
    class="some-form-class">
    <div class="some-container-class">
        <button type="submit" class="btn btn-primary btn-block">Some button</button>
        <input type="hidden" name="mayNotBeManipulated" value="sensible value">
    </div>
</form>
```

- its a basic form with a submit button and a hidden input
- Every storefront ```POST``` request is checked for a valid CSRF token to prevent Cross Site Request Forgery attacks, since by default every Storefront route is automatically looking for a CSRF token
- Its possible to whether disable the CSRF Protection (which makes no sense) or add an CSRF Token
- Protecting it now with the built-in tools requires you to add two new lines:


```bash
<form action="{{ path('some.action') }}"
    method="post"
    class="some-form-class">
    <div class="some-container-class">
        <button type="submit" class="btn btn-primary btn-block">Some button</button>
        <input type="hidden" name="mayNotBeManipulated" value="sensible value">

        {{ sw_csrf('some.action') }}
    </div>
</form>
```

- With the twig function ```sw_csrf``` a server side call will generate and create a token 
- the given parameters have to match the parameters from the route path

- CSRF protection can be configured via Symfony configuration files: ```src/Storefront/Resources/config/packages/storefront.yaml```
