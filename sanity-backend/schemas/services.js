export default {
    name: 'services',
    type: 'document',
    title: 'Servicios',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Título',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Identificador',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'mainImage',
        type: 'image',
        title: 'Imagen',
        options: {hotspot: true},
      },
      {
        name: 'provider',
        type: 'reference',
        title: 'Proveedor',
        to: {type: 'provider'},
      },
      {
        name: 'categories',
        type: 'array',
        title: 'Categorias',
        of: [{type: 'reference', to: {type: 'category'}}],
      },
      {
        name: 'description',
        type: 'text',
        title: 'Descripción',
      },
      {
        name: 'publishedAt',
        type: 'datetime',
        title: 'Fecha de publicación',
      },
    ],
  }
  