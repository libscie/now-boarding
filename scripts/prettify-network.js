#!/bin/node

const fs = require('fs')

function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
}

let res = fs.readFileSync('assets/graphFile.json', 'utf-8')
let out = JSON.parse(res)

out.nodes.forEach(node => {
    node.name = capitalizeFirstLetter(node.name.replace('.md', '').replace(/-/gm, ' '))
})

console.log(out)

fs.writeFile('assets/graphFile.json', JSON.stringify(out), (err) => {
    if (err) throw err
})
