let names = ['Aden', 'Ben', 'Cayden', 'Dick']
for (let name of names) {
    let emailTemplate = 
    `
    Dear ${name},

    You owe me money. Return please. 
    I'm broke. 
    I'm very broke.
    `
    console.log(emailTemplate)
}