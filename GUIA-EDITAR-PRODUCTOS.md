# Cómo cambiar nombres, precios y descripciones

El archivo principal es:

`js/products.js`

Dentro encontrarás `const PRODUCTS = [` y luego un bloque por producto. Por ejemplo:

```js
{
  "id": "artesania-01",
  "name": "Cuchara de Madera Clásica",
  "description": "Descripción del producto.",
  "retail": null,
  "wholesale": null
}
```

Cambia únicamente estos campos:
- `name`: nombre que verá el cliente.
- `description`: descripción.
- `retail`: precio al detal, por ejemplo `18000`.
- `wholesale`: precio por unidad al mayor, por ejemplo `15000`.
- `dimensions`: medidas, cuando corresponda a una artesanía.

**Importante:** no pongas `$` ni puntos en los precios. Escribe solo el número. La página se encarga de mostrarlo como moneda colombiana.

El precio mayorista se considera desde **24 unidades**. La cantidad se controla desde el producto y el mensaje de WhatsApp cambia automáticamente entre detal y mayorista.

## Fotos

No cambies `images` ni `measure` si no estás seguro de que la fotografía corresponde exactamente al producto. Las fotografías de medidas deben pertenecer al mismo modelo mostrado.
