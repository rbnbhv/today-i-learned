# Style (scss) hinzufügen 
* Wenn in einem Plugin für ein Twig File Styles (SCSS) erstellt werden sollen, muss unter dem Pfad:
```
*pluginName*/src/Resources/app/storefront/src/scss
``` 
die Datei `base.scss` erstellt werden

* In dieser Datei können dann Imports für andere scss Datein erstellt werden.
```
@import 'reviews';
```

	* Die Datei `reviews.scss` kann dann z.B. so aussehen:

```
@for $i from 0 through 5 {
  .comment-depth-#{$i} {
    margin-left: #{20px * $i};
  }
}
```

* Nun muss nur noch die Klasse in dem twig mitangegeben. Es ist *_nicht_* notwendig, die Dateien in dem `.twig`-File mit einzubinden.
