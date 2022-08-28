## Entity vs Repository

### Entity: 
- Is a data structure. Almost never has a meaningful method that is not an accessor.
- represents an entry in the database and is a pure data container without dependencies
- describes a dataset

### Repository: 
- The only part that interacts with a DB. You use the default ones in most cases but do need one if you have 
  some special queries. Business logic should not be here either. 
- The Repository interfaces to the database.
- Repository contains queries