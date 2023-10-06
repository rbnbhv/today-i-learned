# Mysterious Login Issue with Shopware Commercial in Test Environments via Administration

- This mysterious problem occasionally appears, and its exact cause is still unclear.
- However, it almost always occurs in connection with Shopware Commercial and test environments.
- For some reason, the Shop Secret is not set correctly.
- This leads to a situation where you can seemingly log in to your Shopware account, but then receive an error message stating that the session has expired.

## Common Solution

- The most common solution is to go through the Initial Setup Assistant again under **Settings -> System -> Initial Setup Assistant**. This sets a new Shop Secret.
- If this doesn't solve the problem, try installing Shopware Commercial, then uninstall it immediately and delete all data if prompted.
- After that, go through the Initial Setup Assistant again and install Shopware Commercial.
