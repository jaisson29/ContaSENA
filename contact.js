const contacts = [
  {
    id: 1,
    name: 'Jaisson Valbuena',
    subject: 'Test',
  },
  {
    id: 2,
    name: 'Robinson Rincon',
    subject: 'Bacca Test',
  },
  {
    id: 3,
    name: 'Duvan Forero',
    subject: 'Support',
  },
  {
    id: 4,
    name: 'Luis Tegua',
    subject: 'Meet',
  },
  {
    id: 5,
    name: 'Julian MArtin',
    subject: 'Meet',
  },

  {
    id: 6,
    name: 'Olga Salcedo',
    subject: 'Meet',
  },
  {
    id: 7,
    name: 'Jeremy Jimenez',
    subject: 'Support',
  },
  {
    id: 8,
    name: 'Camilo Gordillo',
    subject: 'Support',
  },
  {
    id: 9,
    name: 'Angie Chacon',
    subject: 'assistance',
  },
  {
    id: 10,
    name: 'Daniel Gomez',
    subject: 'Assistance',
  },
  {
    id: 11,
    name: 'Kevin Predraza',
    subject: 'Test',
  },
]

const showContact = () => {
  let datum = ''

  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i]
    datum += `
      <tr>
        <td>${contact.id}</td>
        <td>${contact.name}</td>
        <td>${contact.subject}</td>
        <td><i class="bi bi-pencil-square"></i><i class="bi bi-trash-fill"></i></td>
      </tr>
    `
  }
  $('#tableBody').html(datum)
}



$(document).ready(function () {
  $('#contactsTable').DataTable({
    paging: true,
    pagingType: 'full_numbers',
  })
})

showContact()