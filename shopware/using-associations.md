# Associations in Shopware 6

- Wenn ich in Shopware 6 eine API Anfrage mit anknüpfenden Bedingungen machen möchte, funktioniert dies über Assoziationen


**Beispiel:**
- customer + customer address soll abgefragt werden

```
https://localhost/api/customer/018a4a8da7d973b6aaa8575942822e74?associations[defaultBillingAddress][]=&associations[defaultShippingAddress][]&associations[salutation][]&associations[defaultPaymentMethod][]
```

**Weitere Beispiele:**

`https://localhost/api/customer/018a4a8da7d973b6aaa8575942822e74?associations[defaultBillingAddress][]=&associations[defaultShippingAddress][]=&associations[salutation][]=&associations[defaultPaymentMethod][]=`

- Nun wird noch zusätzlich die defaultPaymentMethod mit ausgegeben
