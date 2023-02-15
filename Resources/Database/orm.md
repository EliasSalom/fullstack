# ORM system


## Introduction
Object-Relational Mapping (ORM) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. When talking about ORM, most people are referring to a library that implements the Object-Relational Mapping technique, hence the phrase "an ORM".

Pros and Cons
Using ORM saves a lot of time because:

DRY: You write your data model in only one place, and it's easier to update, maintain, and reuse the code.
A lot of stuff is done automatically, from database handling to I18N.
It forces you to write MVC code, which, in the end, makes your code a little cleaner.
You don't have to write poorly-formed SQL (most Web programmers really suck at it, because SQL is treated like a "sub" language, when in reality it's a very powerful and complex one).
Sanitizing; using prepared statements or transactions are as easy as calling a method.
Using an ORM library is more flexible because:

It fits in your natural way of coding (it's your language!).
It abstracts the DB system, so you can change it whenever you want.
The model is weakly bound to the rest of the application, so you can change it or use it anywhere else.
It lets you use OOP goodness like data inheritance without a headache.
But ORM can be a pain:

You have to learn it, and ORM libraries are not lightweight tools;
You have to set it up. Same problem.
Performance is OK for usual queries, but a SQL master will always do better with his own SQL for big projects.
It abstracts the DB. While it's OK if you know what's happening behind the scene, it's a trap for new programmers that can write very greedy statements, like a heavy hit in a for loop.
How to learn about ORM?
Well, use one. Whichever ORM library you choose, they all use the same principles. There are a lot of ORM libraries around here:


- prisma
- sequilize
- typeorm