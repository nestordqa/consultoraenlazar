export default {
  name: 'provider',
  type: 'document',
  title: 'Proveedor',
  fields: [
    {name: 'providerName', type: 'string', title: 'Nombre del proveedor, ej. Consultora Enlazar'},
    {
      name: 'slug',
      title: 'Identificador',
      type: 'slug',
      options: {
        source: 'providerName',
        maxLength: 96,
      },
    },
  ],
  /*   preview: {
      select: {
        title: 'username',
        media: 'avatar',
      },
    }, */
}
