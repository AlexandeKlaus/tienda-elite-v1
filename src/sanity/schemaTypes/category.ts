export default {
    name: 'category',
    title: 'Categoría',
    type: 'document',
    fields: [
        { name: 'title', title: 'Nombre', type: 'string' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }
    ]
}