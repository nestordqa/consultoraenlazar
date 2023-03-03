export default {
    name: 'category',
    type: 'document',
    title: 'Categorias',
    fields: [
      {name: 'categoryName', type: 'string', title: 'Nombre de la categoria, ej. Individuos'},
      {
        name: 'slug',
        title: 'Identificador',
        type: 'slug',
        options: {
          source: 'categoryName',
          maxLength: 96,
        },
      },
      {name: 'description', type: 'text', title: 'Descripción'},
    ],
  }
  