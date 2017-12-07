#!/bin/node

const fs = require('fs')
var outFile = 'assets/graphFile.json'
var outObj = {"nodes": [], "links": []}

function findTopics (dir, out) {
  fs.readdir(dir, function (err, files) {
    if (err) {
      console.log(err)
    }

    files.forEach( function (file) {
      pushTopics(file, out)
      findRefs(file, out)
    })
  })
}

function pushTopics (file, out) {
  out.nodes.push({"name": file, "group": 1})
}

function findRefs (file, out) {
  fs.readFile(`content/${file}`, function (err, contents) {
    if (err) {
      return console.log(err)
    }
    const txt = contents.toString()
    const refs = txt.match(/(\w-?)+.md/g)
    const toLink = coArray(refs, arrayTopics(out))
    const source = file.replace('content/', '')
    console.log(source)
    toLink.forEach( function (link) {
      pushLinks(source, link, 1, out)
    })
  })
}

// https://stackoverflow.com/questions/12433604/how-can-i-find-matching-values-in-two-arrays#12433654
function coArray (array1, array2) {
  var ret = []
  array1.sort()
  array2.sort()
  for(var i = 0; i < array1.length; i += 1) {
      if(array2.indexOf( array1[i] ) > -1){
          ret.push(array1[i])
      }
  }
  return ret
}

function pushLinks (source, target, weight, out) {
  out.links.push({"source": indexTopic(source, out),
  "target": indexTopic(target, out),
  "weight": weight})
}

function indexTopic (topic, out) {
  return arrayTopics(out).indexOf(topic)
}

function arrayTopics (out) {
  return out.nodes.map(function (value) {return value['name']})
}

findTopics('content/', outObj)

// Write out JSON object
fs.writeFile(outFile, JSON.stringify(outObj), function(err) {
    if(err) {
        return console.log(err);
    }
})