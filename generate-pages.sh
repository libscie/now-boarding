#!/bin/bash

for FILE in `ls content/*.md`;
do
  pandoc -f markdown -t html content/$FILE -o content/$OUT --css=assets/styles.css
done
