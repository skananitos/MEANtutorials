(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['pageContent'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<li>"
    + container.escapeExpression(((helper = (helper = helpers.tech || (depth0 != null ? depth0.tech : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"tech","hash":{},"data":data}) : helper)))
    + "</li>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.myRep,depth0,{"name":"myRep","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "	"
    + ((stack1 = ((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ",	\r\n	"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ",\r\n	"
    + ((stack1 = ((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "        Yes\r\n        Somewhat\r\n        No\r\n    ";
},"9":function(container,depth0,helpers,partials,data) {
    return "    Thank you for your feedback!\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "    Please send me your feedback.\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h3>About me</h3>\r\n\r\n	<p class=\"greenText\">"
    + ((stack1 = ((helper = (helper = helpers.bio || (depth0 != null ? depth0.bio : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bio","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n\r\n	<p>"
    + alias4(((helper = (helper = helpers.sayHello || (depth0 != null ? depth0.sayHello : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sayHello","hash":{},"data":data}) : helper)))
    + "! My name is "
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " and I am a  "
    + alias4(((helper = (helper = helpers.job || (depth0 != null ? depth0.job : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"job","hash":{},"data":data}) : helper)))
    + ". I am specialized on:</p>\r\n\r\n	<ol>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.techs : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ol>	\r\n\r\n	<p>GitHub selected repositories: \r\n	<br />\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.projects : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</p>\r\n\r\n	<p>Publications:\r\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.papers : depth0),{"name":"with","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</p>\r\n	\r\n	\r\n    <p>Follow "
    + ((stack1 = container.invokePartial(partials.myName,depth0,{"name":"myName","hash":{"tagName":"em"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " \r\n\r\n    on "
    + alias4((helpers.twitterLink || (depth0 && depth0.twitterLink) || alias2).call(alias1,"Twitter","http://twitter.com/skananitos",{"name":"twitterLink","hash":{},"data":data}))
    + "</p>\r\n\r\n	"
    + alias4((helpers.myColor || (depth0 && depth0.myColor) || alias2).call(alias1,"Was this tutorial helpful?",{"name":"myColor","hash":{"color":"blue"},"data":data}))
    + "<br />\r\n	\r\n\r\n"
    + ((stack1 = (helpers.radioBtn || (depth0 && depth0.radioBtn) || alias2).call(alias1,"answers",{"name":"radioBtn","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<br />\r\n    \r\n"
    + ((stack1 = (helpers.inputCheck || (depth0 && depth0.inputCheck) || alias2).call(alias1,"no-feedback",{"name":"inputCheck","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();