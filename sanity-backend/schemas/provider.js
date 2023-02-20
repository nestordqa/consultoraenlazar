export default {
  name: 'provider',
  type: 'document',
  title: 'Proveedor',
  fields: [
    {name: 'providerName', type: 'string', title: 'Nombre del proveedor, ej. Consultora Enlazar'},
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'username',
        maxLength: 96,
      },
    },
    /* {name: 'bio', type: 'text', title: 'Bio'}, */
  ],
  /*   preview: {
      select: {
        title: 'username',
        media: 'avatar',
      },
    }, */
}
