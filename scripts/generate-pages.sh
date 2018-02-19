#!/bin/bash

for FILE in `ls content/*.md`;
do
  cat assets/fork-template.html | sed "s#REPLACE_ME#$FILE#g" > tmp.html
  pandoc -f markdown -t html $FILE -o $FILE.html --css=../assets/styles.css -B tmp.html
  rm tmp.html
done
