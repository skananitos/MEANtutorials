# Handlebars Tutorial

Handlebars provides the power necessary to let you build semantic templates effectively with no frustration. 

In this tutorial, we'll learn Handlebars by walking through with numerous examples, including how to dynamically place data, templates, working with arrays, helper functions, passing attributes, escaping strings for safety, block helpers, fn, inverse, partials, precompiling templates and much more.

There are two versions of the project:

1. **Compiling templates at runtime (v1):** [handlebars-v1.html](https://github.com/skananitos/MEANtutorials/blob/master/handlebars-tutorial/handlebars-v1.html) The usage of handlebars consists of three steps: (1) reading a raw-template, (2) compiling it into a javascript function and (3) running the compiled-template with the desired arguments. This is suited for development, where raw templates are edited all the time.

2. **Precompiling templates (v2):** [handlebars-v2.html](https://github.com/skananitos/MEANtutorials/blob/master/handlebars-tutorial/handlebars-v2.html) The idea of precompiling templates is to eliminate step (2) from runtime. We do this by performing step (2) in an earlier build step called *precompilation*. When you precompile a template, the raw template must reside in its own file with the *.handlebars* extension. For this project is the file [pageContent.handlebars](https://github.com/skananitos/MEANtutorials/blob/master/handlebars-tutorial/pageContent.handlebars). Then, we have to run the handlebars compiler from the terminal:

`handlebars pageContent.handlebars -f pageContent.js`

The output script [pageContent.js](https://github.com/skananitos/MEANtutorials/blob/master/handlebars-tutorial/pageContent.js) is stored automatically in the project's directory. The templates are attached to the handlebars.templates object. Since my file was named pageContent.handlebars, it will set the compiled template as the value of the "pageContent" key. 


*For both versions you need to save [handlebars-v4.0.5.js](https://github.com/skananitos/MEANtutorials/blob/master/handlebars-tutorial/handlebars-v4.0.5.js) in project's directory.*
