# What I Learned Today - Python Imports

Python imports have always been a godawful pain... On the other hand, I
understood how to use ES6 'imports' and Node 'require' in...pretty much the same
day, and I have never had any trouble. It works as expected, and nothing about
it is in the least bit mysterious or confusing.

Python, on the other hand... I've been using Python for years now...casually for
many years, and for work lately... And Python imports have continued to be a
pain. Apparently, I'm not the only one
[who feels this way](https://uberpython.wordpress.com/2011/09/01/import-complex-or-complicated/):

> "For the 6 years of keyboard tapping I’ve done in C and Python, I never once
> was confused as to how to access code between directories in C; Python on the
> other hand has gotten me quite a few times and I always need to rertfm. And I
> consider myself far more interested and fluent in Python than in C/C++. This
> may be just a problem with my head, but I’d like to vent either way."

Nice to know I'm at least not the only one. Like him, I feel the need to vent,
and maybe I can solidify what I've learned and maybe help others at the same
time.

So what's the "trick"?

Here's what you need to know:

- "module" = Python file
- "package" = directory that contains one or more modules

Not completely understanding this distinction and its implications may have been
one source of confusion, since in the systems I'm used to, your files reside in
directories, which are...just directories. You never import a directory, because
that wouldn't make any sense. Directories are just used to specify the path to
the file, either relative or absolute. It works just like file paths always work
on any normal operating system since practically... Did ENIAC have file paths?

Importing a module is basically what you'd expect: The file is executed, and any
objects that are imported are now available.

When you import a package, however, it's basically as if you had imported the
`__init__.py` file that is in that package. Note that this file is optional
in >=3.4, which leads to additional complications.

So basically, you don't specify a path to a file. It's more like typing a
command in a Unix CLI: (Don't know about the rest of you, but that really helps
me.) When you import X, Python will look for a module or package called X in
each directory in your Python path in turn, which you can inspect with sys.path.
