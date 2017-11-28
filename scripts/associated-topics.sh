#!/bin/bash

# Extension is the first argument (include the dot)
EXT=$1
# Files to check (one or more)
FILES=$2
# Hard code output file
OUT=links.csv

echo 'topic,link' > $OUT

for FILE in $FILES;
do
  LINKS=`grep -Eo "(\w+-?)+$EXT" $FILE`
  for LINK in $LINKS;
  do
    echo "$FILE,$LINK" >> $OUT
  done
  echo "Extracted topics for $FILE."
done

echo "View the resulting data in $OUT"
echo "Please run SCRIPT to update the visualisation."