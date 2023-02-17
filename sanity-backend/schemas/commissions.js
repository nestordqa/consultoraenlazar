export default {
  name: 'commission',
  type: 'document',
  title: 'Comisiones',
  fields: [
    {name: 'commissionName', type: 'string', title: 'Nombre de la comisión, ej. Comision Abril'},
    {name: 'duration', type: 'string', title: 'Fecha de inicio y fin'},
    {name: 'classes', type: 'number', title: 'Clases'},
    {name: 'dates', type: 'string', title: 'Días de cursada'},
    {
      name: 'slug',
      title: 'Identificador',
      type: 'slug',
      options: {
        source: 'commissionName',
        maxLength: 96,
      },
    },
    {name: 'modality', type: 'string', title: 'Modalidad de cursada'},
  ],
}
