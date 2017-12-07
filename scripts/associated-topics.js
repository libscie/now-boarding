#!/bin/node

const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
    if (err) {
      return console.log(err)
    }

    const txt = contents.toString()
    const refs = txt.match(/(\w-?)+.md/g)
    return console.log(refs)
})