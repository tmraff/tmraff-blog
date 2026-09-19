---
{"dg-publish":true,"permalink":"/notes/vim-is-not-that-hard-actually/","title":"Vim is not that hard, actually","created":"2026-09-18T22:25:43.024+01:00","updated":"2026-09-18T22:25:43.328+01:00","dg-note-properties":{"created":"2024-09-14T22:48","updated":"2026-09-18T20:20","title":"Vim is not that hard, actually","noteStatus":"seedling","aliases":null,"cssclasses":[]}}
---


Back to: [[Notes/Vim\|Vim]], [[Text Editors\|Text Editors]], [[Unix\|Unix]], 

# Vim is not that hard, actually

Everyone talks about Vim as if it is this incredibly difficult and mystical text editor and I think they are wrong.

You do not have to know everything about Vim to use it. I am serious. It looks intimidating because Vim is an incredibly powerful tool and it is full of things you have never heard of. You do not need to know all of them. I don't think anyone knows all of Vim. You genuinely only need a few bits to get started.

## Do `vimtutor`

This rant is not a tutorial because I am lazy and Vim already has one. You can skip it, technically, but `vimtutor` is genuinely the best way to get to grips with how Vim works. Just do it. Set aside half an hour and do `vimtutor`. 

Congratulations! You now know everything you need to know to use Vim for most non-technical use cases.

## Learn new things when you need them

If it involves text manipulation, Vim probably has an easy way to do it. If you find yourself doing a repetitive action, search online for how to do it in Vim and use it. This is the way most folk should learn Vim.

As is a massive change in mindset from the editors you may be used to, here are some examples of things Vim can do quicker than you could manually:

- Change the contents of brackets without deleting the brackets first
- Edit multiple lines at once
- Sort a selection of lines alphabetically or numerically
- Increase or decrease written numbers
- Find the next occurrence of the word under your cursor without you needing to search for it
- Repeat the same edit again
- Delete every line containing a specific pattern
- Delete every line that *doesn't* contain a specific pattern
- Select an entire paragraph
- Change the case of a selection

## You don't need to worry about `.vimrc` yet

Vim is majorly customisable. You are not obligated to immediately customise it. 

The only things I would immediately add to your `.vimrc` are `set number` and `syntax on`; the former makes the line numbers visible and the latter turns syntax highlighting on.

As you develop gripes with Vim, you can search for more customisations. 

## Do not overwhelm yourself

This is the main theme of this note. You do not need to know everything. You do not need to learn Vim before using Vim; in fact, learning Vim before using Vim is a terrible idea because you will simply never use Vim. Use Vim. 

---

## Related to

- [[WYSIWYG editors are inefficient\|WYSIWYG editors are inefficient]]
- [[WYSIWYG editors encourage users to misuse them\|WYSIWYG editors encourage users to misuse them]]
- [[Notes/Nano is worse than Vim\|Nano is worse than Vim]]

## Ideas that stand in opposition

- [[Nano is easier than Vim\|Nano is easier than Vim]]

## Further reading

- https://www.freecodecamp.org/news/vimrc-configuration-guide-customize-your-vim-editor/
- 

## References
