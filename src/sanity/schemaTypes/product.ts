import { defineField, defineType } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'price',
      title: 'Precio',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: (rule) => rule.min(0).integer(),
    }),
    defineField({
      name: 'supplierUrl',
      title: 'URL del proveedor',
      type: 'url',
    }),
  ],
})
