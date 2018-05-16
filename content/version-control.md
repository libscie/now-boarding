# [Version control](https://github.com/libscie/now-boarding/edit/master/content/version-control.md)

<div id='container'>
  <div id='col1'>
In every project, much content is created and revised. Often, we do not want to lose our previous versions just in case we might need them --- but this can also [create a clutter of versions in your folder](http://phdcomics.com/comics/archive.php?comicid=1531). Cluttered folders can make it difficult to understand which file is the latest version and what changed over the versions (even more so when collaborating with other people).

Version control tracks files over time instead of over copies. Often, researchers unfamiliar with version control stack revisions, resulting in highly confusing amounts of copies:

```bash
fake-directory/
├── 20170819manuscript.txt
├── 20170820manuscript FINAL.txt
├── manuscript FINAL.txt
└── manuscript.txt
```

Some knowledge is needed to understand which of these files is truly the most recent. The dated versions can easily be sorted (YYYYMMDD) and from that it would seem that `20170820manuscript FINAL.txt` would be the most recent version. However, `manuscript FINAL.txt` might also be considered the most recent version, depending on when it was last changed.

Version control would prevent all this confusion by allowing us to have just one file (`manuscript.txt`) and explore versions across time. Such time based storing of revisions declutters your project folders, but can also be extended to provide additional benefits. Further structure can be facilitated with [Project structuring](project-structuring.md) and [File naming](file-naming.md).

Many cloud based storage services use automatic version control: For each change they save a copy of the file. However, cloud based services do this automatically, for all files, and for each small change. As such, it is not uncommon to have thousands of revisions at the end of the project. Moreover, there is little information about each change except a timestamp. If you use services like the Open Science Framework, Google Drive, Dropbox, etc., you are already using this kind of automatic version control (limitations vary across services though).

Manual version control systems provide the ability for the user to create snapshots of files over time and add "commit" messages to create a logbook of changes. The metadata produced in such a logbook is valuable when retracing steps in the research process when you've forgotten when you did what. If manual version control is used with clear-text files (files you can open in notepad without problems; e.g., scripts and Markdown files), it also provides the possibility to do track changes between any two versions you specify. One way of doing manual version control is [Git](git.md).

![](../assets/figs/version-control-diff.png)

**Example of tracked changes in manual version control.**

Automatic version control is easy to use but can provide excessive information because each change is stored with a timestamp. It does allow you to declutter your project folder considerably. Manual version control provides more control to the user and a more informative logbook, plus the ability to track changes within a file over time --- but requires a bit more training to use.

</div>

<div id='col2'>
# Exercises

* Look at one of your current projects: Are there multiple versions of a similar document (e.g., manuscript) stored in the same folder?
* Evaluate what kind of version control fits your needs better: Automatic (no logbook) or manual (with logbook)? Note: Consider whether your institution or journals you publish in require you to provide an account of published results.
* Do you know anyone who uses a form of version control actively in their research? Consider having a chat with them about it.
</div>
</div>