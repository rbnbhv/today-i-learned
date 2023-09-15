# Fix  Category Error in frontend


## Categories cannot be displayed, incorrect sorting method
- name-asc is missing from the `product-sorting` database

```
INSERT INTO shopware.product_sorting (id, url_key, priority, active, fields, created_at, locked, updated_at) VALUES (0x64BD617E322E41E1BF6A5DFD37E3DFBE, 'name-desc', 3, 1, '[{"field": "product.name", "order": "desc", "priority": 1, "naturalSorting": 0}]', '2023-05-06 21:43:23.551', 0, null);
INSERT INTO shopware.product_sorting (id, url_key, priority, active, fields, created_at, locked, updated_at) VALUES (0xD5E1328E141A4EAD947F0CC0B48CC1BB, 'name-asc', 4, 1, '[{"field": "product.name", "order": "asc", "priority": 1, "naturalSorting": 0}]', '2023-05-06 21:43:23.551', 0, null);
```


- The sanitize error was also in one of the sorting options under Settings -> Shop -> Products -> Sorting options
- “Product name” was entered twice here and I deleted one
