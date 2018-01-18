#!/bin/node

const fs = require('fs')
let outFile = 'assets/graphFile.json'
let outObj = { nodes: [], links: [] }


function findTopics (dir, out) {
    let files = fs.readdirSync(dir)

    files.forEach((file) => {
      out.nodes.push({ name: file, group: 1})
      findRefs(file, out)
    })
	  console.log(out)
  }

function findRefs (file, out) {
    const contents =  fs.readFileSync(`content/${file}`)
    const txt = contents.toString()
    const refs = txt.match(/(\w-?)+.md/g)
    const toLink = coArray(refs, arrayTopics(out))
    const source = file.replace('content/', '')
    toLink.forEach((link) => {
//	    console.log(source)
//	    console.log(link)
//	    console.log(out)
        pushLinks(source, link, 1, out)
      })
  }

// https://stackoverflow.com/questions/12433604/how-can-i-find-matching-values-in-two-arrays#12433654
function coArray (array1, array2) {
  var ret = []
  array1.sort()
  array2.sort()
  for(let i = 0; i < array1.length; i += 1) {
      if(array2.indexOf( array1[i] ) > -1){
          ret.push(array1[i])
      }
  }
  return ret
}

function pushLinks (source, target, weight, out) {
  out.links.push({ source: indexTopic(source, out),
    target: indexTopic(target, out),
    weight: weight})
}

function indexTopic (topic, out) {
  return arrayTopics(out).indexOf(topic)
}

function arrayTopics (out) {
  return out.nodes.map((value) => {return value['name']})
}

findTopics('content/', outObj)

console.log(outObj)
// Write out JSON object
fs.writeFile(outFile, JSON.stringify(outObj), (err) => {
    if(err) throw err
})
