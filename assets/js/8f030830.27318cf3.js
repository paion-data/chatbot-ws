"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[423],{2184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(8040),s=t(5246);const a={sidebar_position:3,title:"Development"},o=void 0,r={id:"development",title:"Development",description:"The following guide is intended to help developers who maintain or want to make changes to the Jersey Webservice",source:"@site/docs/development.md",sourceDirName:".",slug:"/development",permalink:"/docs/development",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/chatbot-ws/tree/master/docs/docs/development.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Development"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Configuration",permalink:"/docs/configuration"}},l={},c=[{value:"Preparing for Local Development",id:"preparing-for-local-development",level:2},{value:"Installing Java &amp; Maven (on Mac)",id:"installing-java--maven-on-mac",level:3},{value:"Installing Docker Engine",id:"installing-docker-engine",level:3},{value:"Getting Source Code",id:"getting-source-code",level:2},{value:"Syncing up with ChatbotWS&#39;s Code Styles with IntelliJ",id:"syncing-up-with-chatbotwss-code-styles-with-intellij",level:3},{value:"Running Tests",id:"running-tests",level:2},{value:"Packaging",id:"packaging",level:2},{value:"Running Webservice in Docker",id:"running-webservice-in-docker",level:2},{value:"Getting the Image",id:"getting-the-image",level:3},{value:"Docker Hub",id:"docker-hub",level:4},{value:"GitHub",id:"github",level:4},{value:"Standing up a Container",id:"standing-up-a-container",level:3},{value:"Running Webservice in Standalone Jetty",id:"running-webservice-in-standalone-jetty",level:2},{value:"Download Jetty",id:"download-jetty",level:3},{value:"Setting Up Standalone Jetty",id:"setting-up-standalone-jetty",level:3},{value:"Running Webservice",id:"running-webservice",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"IntelliJ",id:"intellij",level:3},{value:"IntelliJ Cannot READ Resource File",id:"intellij-cannot-read-resource-file",level:4},{value:"Tab Width",id:"tab-width",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The following guide is intended to help developers who maintain or want to make changes to the Jersey Webservice\nTemplate."}),"\n",(0,i.jsx)(n.h2,{id:"preparing-for-local-development",children:"Preparing for Local Development"}),"\n",(0,i.jsx)(n.p,{children:"This section discusses the one-time setup in order to develop ChatbotWS."}),"\n",(0,i.jsx)(n.h3,{id:"installing-java--maven-on-mac",children:"Installing Java & Maven (on Mac)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"brew update\nbrew install openjdk@17\n"})}),"\n",(0,i.jsx)(n.p,{children:"At the end of the last command prompt, something like the below will show up:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'For the system Java wrappers to find this JDK, symlink it with\n  sudo ln -sfn ...openjdk@17/libexec/openjdk.jdk .../JavaVirtualMachines/openjdk-17.jdk\n\nopenjdk@17 is keg-only, which means it was not symlinked into /usr/local,\nbecause this is an alternate version of another formula.\n\nIf you need to have openjdk@17 first in your PATH, run:\n  echo \'export PATH=".../openjdk@17/bin:$PATH"\' >> .../.bash_profile\n\nFor compilers to find openjdk@17 you may need to set:\n  export CPPFLAGS="-I.../openjdk@17/include"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Make sure to execute the ",(0,i.jsx)(n.code,{children:"sudo ln -sfn"}),", ",(0,i.jsx)(n.code,{children:"echo 'export PATH=..."}),", and the ",(0,i.jsx)(n.code,{children:"export CPPFLAGS="})," commands above"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["ChatbotWS is built using maven. Maven uses a separate JDK version, which can be seen via ",(0,i.jsx)(n.code,{children:"mvn -v"}),". If it's not JDK 17, we\nshould have Maven point to our JDK 17 using ",(0,i.jsx)(n.a,{href:"https://stackoverflow.com/a/2503679",children:"JAVA_HOME"}),":"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ /usr/libexec/java_home\n/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home\n\n$ export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home\n"})})]}),"\n",(0,i.jsx)(n.p,{children:"If we see something similar after typing the command with the version flag below we're good to go"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ java --version\nopenjdk 17.0.10 2021-01-19\nOpenJDK Runtime Environment (build 17.0.10+9)\nOpenJDK 64-Bit Server VM (build 17.0.10+9, mixed mode)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"installing-docker-engine",children:"Installing Docker Engine"}),"\n",(0,i.jsxs)(n.p,{children:["ChatbotWS has ",(0,i.jsx)(n.a,{href:"https://github.com/paion-data/chatbot-ws/blob/master/src/test/groovy/com/paiondata/chatbotws/DockerITSpec.groovy",children:"Docker-based integration tests"}),"; it also supports\n",(0,i.jsx)(n.a,{href:"https://github.com/paion-data/chatbot-ws/blob/master/Dockerfile",children:"running template webserivce in Docker"}),". Docker can be installed by following its\n",(0,i.jsx)(n.a,{href:"https://docs.docker.com/desktop/install/mac-install/",children:"official instructions"})]}),"\n",(0,i.jsx)(n.h2,{id:"getting-source-code",children:"Getting Source Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:paion-data/chatbot-ws.git\ncd chatbot-ws\n"})}),"\n",(0,i.jsx)(n.h3,{id:"syncing-up-with-chatbotwss-code-styles-with-intellij",children:"Syncing up with ChatbotWS's Code Styles with IntelliJ"}),"\n",(0,i.jsxs)(n.p,{children:["For the moment, we have distilled the most important code style conventions with respect to ChatbotWS's code as IntelliJ\nsettings. If IntelliJ is used for IDE, we may import these code style settings by importing the\n",(0,i.jsx)(n.a,{href:"https://github.com/paion-data/chatbot-ws/blob/master/ChatbotWS-Project-intellij-code-style.xml",children:"ChatbotWS-Project-intellij-code-style.xml"}),' file in the root of the repo. The setting for the project will\nappear as a new Scheme named "chatbot-ws-Project" under IDE\'s ',(0,i.jsx)(n.strong,{children:"Editor"})," -> ",(0,i.jsx)(n.strong,{children:"Code Style"})," section."]}),"\n",(0,i.jsxs)(n.p,{children:['Please also enable "remove unused imports" by ',(0,i.jsx)(n.strong,{children:"Editor"})," -> ",(0,i.jsx)(n.strong,{children:"General"})," -> ",(0,i.jsx)(n.strong,{children:"Auto Import"})," -> ",(0,i.jsx)(n.strong,{children:"Optimize Imports on the\nFly"}),", which will automatically remove unused imports."]}),"\n",(0,i.jsx)(n.h2,{id:"running-tests",children:"Running Tests"}),"\n",(0,i.jsx)(n.p,{children:"The following commands runs both unit and integration tests:"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"If tests fail with 404 or endpoint-not-working, make sure the port 8080 is not occupied. All integration tests runs\nagainst webservice running at that port."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mvn clean verify\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For IT tests, we use ",(0,i.jsx)(n.a,{href:"https://testcontainers-java.paion-data.dev",children:"Testcontainers"})," instead of ",(0,i.jsx)(n.a,{href:"https://mysql.jcabi.com/",children:"jcabi-mysql"})," because the latter is hard to configure and debug and\n",(0,i.jsx)(n.a,{href:"https://testcontainers-java.paion-data.dev",children:"Testcontainers"})," support more types of databases, such as mongo"]}),"\n",(0,i.jsx)(n.h2,{id:"packaging",children:"Packaging"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/WAR_(file_format)",children:"WAR file"})," named ",(0,i.jsx)(n.strong,{children:"chatbot-ws-1.0-SNAPSHOT.war"})," will\nbe generated under ",(0,i.jsx)(n.em,{children:"target"})," directory for ",(0,i.jsx)(n.a,{href:"#running-webservice-in-standalone-jetty-production",children:"running in Jetty"})," with\nthe command below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mvn clean package\n"})}),"\n",(0,i.jsx)(n.h2,{id:"running-webservice-in-docker",children:"Running Webservice in Docker"}),"\n",(0,i.jsxs)(n.p,{children:["Please make sure Docker is installed\n(",(0,i.jsx)(n.a,{href:"https://docs.docker.com/desktop/setup/install/mac-install/",children:(0,i.jsx)(n.em,{children:"Installing Docker"})}),"), then execute the following\ncommands:"]}),"\n",(0,i.jsx)(n.h3,{id:"getting-the-image",children:"Getting the Image"}),"\n",(0,i.jsx)(n.p,{children:"We can obtain the image in one of the 2 approaches below:"}),"\n",(0,i.jsx)(n.h4,{id:"docker-hub",children:"Docker Hub"}),"\n",(0,i.jsxs)(n.p,{children:["We can pull the image from ",(0,i.jsx)(n.a,{href:"https://hub.docker.com/r/jack20191124/chatbot-ws/",children:"Paion Data's docker hub"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker pull paiondatahub/chatbot-ws\n"})}),"\n",(0,i.jsx)(n.h4,{id:"github",children:"GitHub"}),"\n",(0,i.jsxs)(n.p,{children:["We could also build the image from ",(0,i.jsx)(n.a,{href:"https://github.com/paion-data/chatbot-ws/blob/master/Dockerfile",children:"source"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/paion-data/chatbot-ws.git\ncd chatbot-ws\ndocker build -t paiondatahub/chatbot-ws .\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Please note that the ",(0,i.jsx)(n.code,{children:"paiondatahub/chatbot-ws"})," in the last command is the image name; we could replace\nthat value with anything preferred"]}),"\n",(0,i.jsx)(n.h3,{id:"standing-up-a-container",children:"Standing up a Container"}),"\n",(0,i.jsx)(n.p,{children:"When image is built, we can spin up an instance with"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run --name=chatbot-ws -it -p 8080:8080 paiondatahub/chatbot-ws\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"name=chatbot-ws"}),': the container is named "chatbot-ws". We can change it\naccordingly.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"-p 8080:8080"}),": 8080 is the port where webservice will listen on. With this port forwarding, we will be able to\naccess webservice from host machine web browser at ",(0,i.jsx)(n.code,{children:"localhost:8080"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If we see the following output, it means the container is running properly and ready to accept request such as\n",(0,i.jsx)(n.code,{children:"http://localhost:8080/v1/healthcheck"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"...\n\n2023-10-24 05:21:46.032:INFO :oejss.DefaultSessionIdManager:main: Session workerName=node0\n2023-10-24 05:21:46.977:INFO :oejsh.ContextHandler:main: Started o.e.j.w.WebAppContext@2892dae4{ROOT.war,/,file:///tmp/jetty-0_0_0_0-8080-ROOT_war-_-any-13760845903749066689/webapp/,AVAILABLE}{/jetty-base/webapps/ROOT.war}\n2023-10-24 05:21:46.994:INFO :oejs.AbstractConnector:main: Started ServerConnector@5c8dfc08{HTTP/1.1, (http/1.1)}{0.0.0.0:8080}\n2023-10-24 05:21:47.009:INFO :oejs.Server:main: Started Server@71d44a3{STARTING}[11.0.15,sto=5000] @2947ms\n"})}),"\n",(0,i.jsx)(n.h2,{id:"running-webservice-in-standalone-jetty",children:"Running Webservice in Standalone Jetty"}),"\n",(0,i.jsx)(n.h3,{id:"download-jetty",children:"Download Jetty"}),"\n",(0,i.jsxs)(n.p,{children:["For JDK ",(0,i.jsx)(n.strong,{children:"17"}),", which is the version ChatbotWS runs on, it's been tested that Jetty ",(0,i.jsx)(n.em,{children:"11.0.15"})," worked. Hence, we will use\n",(0,i.jsx)(n.a,{href:"https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-home/11.0.15/jetty-home-11.0.15.tar.gz",children:'"11.0.15" release'})," as\nan example:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Error loading download-jetty.png",src:t(5385).A+""})}),"\n",(0,i.jsxs)(n.p,{children:["Put the ",(0,i.jsx)(n.code,{children:"tar.gz"})," file into a location of your choice as the installation path and extract the Jetty binary using"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"tar -xzvf jetty-home-11.0.15.tar.gz\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The extracted directory ",(0,i.jsx)(n.em,{children:"jetty-home-11.0.15"})," is the Jetty distribution. We call this directory ",(0,i.jsx)(n.strong,{children:"$JETTY_HOME"}),", which\nshould not be modified."]}),"\n",(0,i.jsx)(n.h3,{id:"setting-up-standalone-jetty",children:"Setting Up Standalone Jetty"}),"\n",(0,i.jsxs)(n.p,{children:["Our ",(0,i.jsx)(n.a,{href:"#packaging",children:"WAR file"})," will be dropped to a directory where Jetty can pick up and run. We call this directory\n",(0,i.jsx)(n.strong,{children:"$JETTY_BASE"}),", which is usually different from the ",(0,i.jsx)(n.em,{children:"$JETTY_HOME"}),". The ",(0,i.jsx)(n.em,{children:"$JETTY_BASE"})," also contains container runtime\nconfigs. In short, the Standalone Jetty container will be setup with"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export JETTY_HOME=/path/to/jetty-home-11.0.15\nmkdir -p /path/to/jetty-base\ncd /path/to/jetty-base\njava -jar $JETTY_HOME/start.jar --add-module=annotations,server,http,deploy,servlet,webapp,resources,jsp\n"})}),"\n",(0,i.jsxs)(n.p,{children:["where ",(0,i.jsx)(n.code,{children:"/path/to/"})," is the ",(0,i.jsx)(n.em,{children:"absolute"})," path to the directory containing the ",(0,i.jsx)(n.code,{children:"jetty-home-11.0.15"})," directory"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"--add-module=annotations,server,http,deploy,servlet,webapp,resources,jsp"})," is how we configure the Jetty\ncontainer."]}),"\n",(0,i.jsxs)(n.p,{children:["Lastly, drop the ",(0,i.jsx)(n.a,{href:"#packaging",children:"WAR file"})," into ",(0,i.jsx)(n.strong,{children:"/path/to/jetty-base/webapps"})," directory and rename the WAR file to\n",(0,i.jsx)(n.strong,{children:"ROOT.war"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mv /path/to/war-file /path/to/jetty-base/webapps/ROOT.war\n"})}),"\n",(0,i.jsx)(n.h3,{id:"running-webservice",children:"Running Webservice"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"java -jar $JETTY_HOME/start.jar\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The webservice will run on port ",(0,i.jsx)(n.strong,{children:"8080"}),", and you will see the data you inserted"]}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(n.h3,{id:"intellij",children:"IntelliJ"}),"\n",(0,i.jsx)(n.h4,{id:"intellij-cannot-read-resource-file",children:"IntelliJ Cannot READ Resource File"}),"\n",(0,i.jsx)(n.p,{children:'We sometimes see errors when we run unit tests in IntelliJ, saying "some resource file" cannot be found. We know the\npath is absolutely right. If this is the case, it\'s simply a IntelliJ issue which is solved by simply loading those\nresources explicitly by telling IntelliJ where those resources are:'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Error loading intelliJ-find-resource.png",src:t(2466).A+""})}),"\n",(0,i.jsx)(n.h4,{id:"tab-width",children:"Tab Width"}),"\n",(0,i.jsxs)(n.p,{children:["We use 4-space as tab. This can be configured at ",(0,i.jsx)(n.strong,{children:"Code Style"})," -> ",(0,i.jsx)(n.strong,{children:"Java"})," -> ",(0,i.jsx)(n.strong,{children:"Tabs and Indents"})," with the following\nsettings:"]}),"\n",(0,i.jsx)(n.p,{children:"Tab size: 4\nIndent: 4\nContinuation indent: 8"}),"\n",(0,i.jsx)(n.p,{children:"If tabs still come out at 2 spaces when hitting TAB or Enter, not 4 spaces, try:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'"Settings | Editor | Code Style" -- try disabling "Detect and use existing file indents for editing" in case if you\nhave it enabled (it is by default). NOTE: re-opening file in editor may be required.'}),"\n",(0,i.jsx)(n.li,{children:'Do you have any .editorconfig files anywhere in the path of that file? Settings from .editorconfig\n("Settings | Editor | Code Style") have priority (will overwrite) over your IDE settings.'}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5385:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/download-jetty-edc103f9f296011d2a6f18b625bff490.png"},2466:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/intelliJ-find-resource-3f94d06504aac240f01fcde613894835.png"},5246:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(2340);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);