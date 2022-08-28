- # Was ist der DAL?
- Der DAL (Data Abstraction Layer) soll Zugriff auf die Datenbank geben
  - Dadurch sind CRUD Operationen sind möglich!


- Vorteile:
    - Indexing (regelmäßige automatische Abfragen —> schnellerer Zugriff auf die einzelnen Produkte
    - Language (Sprache —> Current Language / Parent Language / System Language)
    - Versionierng (Die Versionierung ist in der Datenbank ebenfalls wiedergespielt mit versions_id)
    - Inheritance (Bedarf) —> Falls ein Kindprodukt z.B. keine Categorys oder Images hat, werden diese vom Elternprodukt genommen


- Wenn ein anderer Typ in der Klasse benutzt wird, muss er auch im Konstruktor initialisiert werden:

```bash
public function __construct (EntityRepositoryInterface $productRepository)
{
    $this->productRepository = $productRepository;
}
```


- Alles, was im Konstruktor als Service genutzt wird, muss auch in den services.xml als Service deklariert werden.

```bash
<service id="Swag\ExamplePlugin\Service\DalExampleService">
  <argument type="service" id="product.repository"/>
</service>
```