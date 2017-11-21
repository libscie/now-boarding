#!/bin/bash

for FILE in `ls content/*.md`;
do
  pandoc -f markdown -t html $FILE -o $FILE.html --css=assets/styles.css
done
