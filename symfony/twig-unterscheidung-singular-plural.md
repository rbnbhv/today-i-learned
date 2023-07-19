# Unterscheidung zwischen Singular und Plural

**Twig kann zwischen Singular und Plural wie folgt unterscheiden:**

```twig
{% block interaction_form %}
    <div class="interaction-form">
        ...
        <div class="interaction-count">
            {{ '%count% Person fand die Bewertung hilfreich|%count% Personen fanden die Bewertung hilfreich'|trans({'%count%': review.totalInteractions}) }}
        </div>
    </div>
{% endblock %}
```

Es wird die `trans` Funktion verwendet, um die korrekte Form basierend auf der Anzahl der hilfreichen Interaktionen anzuzeigen. Die `trans` Funktion nimmt einen String mit zwei Teilen, getrennt durch das Pipe-Symbol (`|`). Der erste Teil ist die Singularform und der zweite Teil ist die Pluralform. Die Funktion ersetzt dann `%count%` im String durch den tatsächlichen Wert von `review.totalInteractions`.
