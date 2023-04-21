export default {
  name: 'company',
  type: 'document',
  title: 'Empresas',
  fields: [
    {name: 'title', type: 'string', title: 'Título'},
    {
      name: 'slug',
      title: 'Identificador',
      type: 'slug',
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
  ],
}
