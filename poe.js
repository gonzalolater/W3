var aside = document.querySelector("aside");
aside.remove();
var nodes = document.getElementsByClassName("PageWithSidebarLayout_mainSection__i1yOg");
for (var i = 0; i < nodes.length; i++) {
  nodes[i].style.maxWidth = "1248px";
};

var nodes = document.getElementsByClassName("Message_botMessageBubble__CPGMI");
for (var i = 0; i < nodes.length; i++) {
  nodes[i].style.maxWidth = "1248px";
// node.classList.remove("Message_botMessageBubble__CPGMI");
};

var nodes = document.getElementsByClassName("markdown-body");
for (var i = 0; i < nodes.length; i++) {
  nodes[i].style.fontSize = "15px";
};
