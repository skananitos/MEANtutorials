# Jade Tutorial

*Node template engine*

## Prerequisites

- Install [Node.js](https://nodejs.org/en/download/)

- Use Git Bash (cmd or terminal) on your project's directory to install jade globally. 
Type `npm install jade -g`

- Continue by typing `jade index.jade` to compile Jade code and the `index.html` file will be created automatically

- There is a posibility to compile to JavaScript with `jade --client --no-debug index.jade`


## Doctypes

There are many doctypes available. 

| Jade                 | Description                                           |
| -------------------- |:----------------------------------------------------: |
| doctype              | default                                               |
| doctype xml          | XML documents                                         |
| doctype transitional | Contains presentational or deprecated elements        |
| doctype strict       | Doesn't include presentational or deprecated elements |
| doctype frameset     | Like transitional with frameset content               |
| doctype basic        | For devices like PDAs, pagers, settop boxes           |
| doctype mobile       | XHTML documents specifically aimed at mobile devices  |


## Extra mini project

As you can see, there are two extra files: `islands.jade` and `islandBlock.jade`. The reason is to show how we can work with extends. 

Extends allows us to replace blocks in a template. Blocks are containers that can be replaced, appended, or prepended.

Compile Jade code of `islands.jade` by typing `jade islands.jade`.