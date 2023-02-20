export default {
  name: 'benefit',
  type: 'document',
  title: 'Beneficios',
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
    /* {
      name: 'mainImage',
      type: 'image',
      title: 'Imagen',
      options: {hotspot: true},
    }, */
    {name: 'description', type: 'text', title: 'Descripción'},
  ],
}
