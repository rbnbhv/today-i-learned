## why uuid?

- A universally unique identifier(UUID) is a128-bit label used for information in computer systems
- UUIDs are unique
- Anyone can create a UUID and use it to identify something with near certainty that the identifier does not duplicate one that has already been, or will be, created to identify something else

- Universally unique identifier(UUID) is a random string containing the numbers 0 to 9 and the characters a to f with a length of 32.


## Create UUID in Shopware 6:

### Pros:
* UUID's are great for API-first platforms because it prevents Race Condition. Data can come from all over the place such as mobile apps, marketplaces, social shopping, or local points of sale. UUID's are great to enable these channel's to generate a unique primary key by themselves, without conflicting with other channels. Simple numbers would easily conflict among themselves
* UUID's can be safe generated regardless of the database, since the primary key is not sequential
* Every table, database, and the server is distinct.


### Cons:
* UUID's take more space to be stored


```
use Shopware\Core\Framework\Uuid\Uuid;
$uuid = Uuid::randomHex();
```