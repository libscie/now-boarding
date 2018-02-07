# File naming

Projects can create many files; good file naming can help find the file(s) you're looking for much faster. How files are named in a project or across collaborators often remains undefined and can cause hard to find files. For example, imagine you'd want to sort files by date: How do you name files that are sortable that way? It's not DDMMYYYY or MMDDYYYY (they don't sort well, try it out), but YYYYMMDD ([which is actually a standard](https://en.wikipedia.org/wiki/ISO_8601); e.g., `20180904manuscript.docx`). If not made explicit, one person in a project might do this and others not.

File naming might seem like an irrelevant part of [Project management](project-management.md), but as you saw above it can do just enough to make your life easier in finding files. The most important aspect to file naming is to **be consistent**. There is nothing worse than inconsistent filenaming, because it increases confusion instead of decreasing it. An example of inconsistent and confusing filenaming is the dreaded `manuscript_FINAL.docx`, `manuscript_FINALFINAL.docx` and `manuscript_REALLYFINAL.docx`. If the filenaming was consistent and adds `FINAL` each time a new version was made (`manuscript_FINALFINALFINAL.docx`) it would be easier to find the most recent file (but see also [Version control](version-control.md) on why copies of the same file over time might not be needed to begin with).

There is no ultimate way to name your files, but there are worthwhile conventions that you can use as for your own projects. You of course can pick and choose, but if you code and use commandlines it is highly recommended to follow the first two.

  * Do not use spaces; replace with `-` or `_`
  * Do not use special characters; replace with regular characters (e.g., &euml; becomes `e`)
  * Files that should be sorted by date follow format YYYYMMDD at the beginning of the filename
  * Use all lowercase (Windows computers are not case sensitive, Macs are; you can also make all uppercase BUT THEN THE FILES WOULD SCREAM AT YOU)

## Exercises

* What are file naming 'conventions' that you often see happening in your projects? Try to figure out what goal it has and whether it achieves that goal (suggest an improvement if it doesn't).
* Did you consider file naming important before reading this section? If not, has this changed your perspective or not, and why?
 
