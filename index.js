const fs = require('fs')

// Create file

fs.writeFile(
  'employees.json',
  '{"name": "Employee 1 Name", "salary": 2000}',
  'utf8',
  (err) => {
    if (err) console.log(err)
    console.log('created')
  }
)

// Read file

fs.readFile('employees.json', 'utf8', (err, data) => {
  if (err) console.log(err)
  console.log(data)
  console.log('read')
})

// Update file

fs.appendFile(
  'employees.json',
  '\n{"name": "Employee 2 Name", "salary": 5000}',
  'utf8',
  (err) => {
    if (err) console.log(err)
    console.log('updated')
  }
)

// Delete file

fs.unlink('employees.json', (err) => {
  if (err) console.log(err)
  console.log('deleted')
})
