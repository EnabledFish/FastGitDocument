(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{356:function(t,e,a){"use strict";a.r(e);var s=a(43),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"user-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-guide"}},[t._v("#")]),t._v(" User Guide")]),t._v(" "),a("p",[t._v("Please read and accept our Term of Service and Privacy Statement then go to the next step. Once you done so, it means that you agree with our Term of Service and Privacy Statement.")]),t._v(" "),a("p",[t._v("The usage of FastGit is basically relied on "),a("code",[t._v("git")]),t._v(" . For common GitHub operations, you can use the command "),a("code",[t._v("clone")]),t._v(" like:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/author/repo\n")])])]),a("p",[t._v("To use FastGit, you need to change it into:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://hub.fastgit.org/author/repo\n")])])]),a("p",[t._v("Just like what you see, FastGit is physically a proxy of GitHub, and what you need to do is just replacing the URL.")]),t._v(" "),a("p",[t._v("You can also edit "),a("code",[t._v("git")]),t._v(" configurations to take an easier way to use our service.")]),t._v(" "),a("p",[t._v("You can also change the configuration of "),a("code",[t._v("git")]),t._v(" directly, replacing the link of GitHub entirely with FastGit:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global url."),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://hub.fastgit.org/"')]),t._v(".insteadOf "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" protocol.http.allow always\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Don't forget to check if FastGit is down when you are troubleshooting network errors, even though we offer SLA guarantees of up to 0% availability.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("You will fail to push or to do other operations which need your authorization after you turn FA2 on. (Whatever you use access token as your password) This is caused by the standardization of GitHub.")])]),t._v(" "),a("p",[t._v("With the growth of FastGit, we will deploy more resources to support our speed-up service. You can find the list of our nodes in the chapter "),a("RouterLink",{attrs:{to:"/en-us/node.html"}},[t._v("Nodes")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"the-usage-of-web"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-usage-of-web"}},[t._v("#")]),t._v(" The Usage of Web")]),t._v(" "),a("p",[t._v("FastGit also supplies basic supports for the common GitHub Web operations. You can directly access nodes with Web supports.")]),t._v(" "),a("p",[t._v("Due to the safety concerns, we banned sensitive things, like "),a("code",[t._v("Cookie")]),t._v(" and "),a("code",[t._v("Session")]),t._v(" . That means you are not able to do sensitive operations such as signing in GitHub via FastGit.")]),t._v(" "),a("h2",{attrs:{id:"download-releases-or-source-code-archives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-releases-or-source-code-archives"}},[t._v("#")]),t._v(" Download Releases or Source Code Archives")]),t._v(" "),a("p",[t._v("For common "),a("code",[t._v("clone")]),t._v(" and "),a("code",[t._v("push")]),t._v(" operations, FastGit already has provided perfect support. We can use the command below to download releases & source code archives.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Release")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If your downalod link is: https://github.com/A/A/releases/download/1.0/1.0.tar.gz , then you use:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://download.fastgit.org/A/A/releases/download/1.0/1.0.tar.gz\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Codeload")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If your download link is: https://hub.fastgit.org/A/A/archive/master.zip")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or https://codeload.github.com/A/A/zip/master")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://download.fastgit.org/A/A/archive/master.zip\n")])])]),a("h2",{attrs:{id:"ssh-clone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-clone"}},[t._v("#")]),t._v(" SSH Clone")]),t._v(" "),a("p",[a("s",[t._v("We also support SSH clone. Just replace github.com to fastgit.org to enjoy.")])]),t._v(" "),a("p",[t._v("Due to some unresistible factors, we are no longer to provide SSH clone service.")]),t._v(" "),a("h2",{attrs:{id:"for-the-raw-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-the-raw-proxy"}},[t._v("#")]),t._v(" For the Raw Proxy")]),t._v(" "),a("p",[t._v("We also have proxy for "),a("a",{attrs:{href:"https://raw.githubusercontent.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://raw.githubusercontent.com/"),a("OutboundLink")],1),t._v("."),a("br"),t._v("\nThe URL is: "),a("a",{attrs:{href:"https://raw.fastgit.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://raw.fastgit.org/"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"what-to-do-if-you-have-problems-with-fastgit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-to-do-if-you-have-problems-with-fastgit"}},[t._v("#")]),t._v(" What to do if you have problems with FastGit")]),t._v(" "),a("ol",[a("li",[t._v("Make sure your network and DNS are working properly")]),t._v(" "),a("li",[t._v("Please check "),a("a",{attrs:{href:"https://status.fastgit.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://status.fastgit.org"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/FastGitORG/uptime",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/FastGitORG/uptime"),a("OutboundLink")],1),t._v(" to confirm if FastGit is facing potential service unavailability")]),t._v(" "),a("li",[t._v("Change your DNS to AliPublic public DNS to avoid potential DNS pollution issues")]),t._v(" "),a("li",[t._v("Try to communicate with the FastGit IP via Tcpping")])]),t._v(" "),a("p",[t._v("When you have confirm that FastGit is or is potentially unavailable, please contact us.\nYou can communicate us by sending an email to "),a("a",{attrs:{href:"mailto:admin@fastgit.org"}},[t._v("admin@fastgit.org")]),t._v(", opening an issue to our discussion "),a("a",{attrs:{href:"https://github.com/FastGitORG/discussion",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/FastGitORG/discussion"),a("OutboundLink")],1),t._v(", or via the Telegram instant messaging group "),a("a",{attrs:{href:"https://t.me/fastgit",target:"_blank",rel:"noopener noreferrer"}},[t._v("@FastGit"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Tip")]),t._v(" "),a("p",[t._v("It is important to note that PING does not determine if a server is unavailable. We recommend using Tcpping to detect port 443.")])])])}),[],!1,null,null,null);e.default=o.exports}}]);