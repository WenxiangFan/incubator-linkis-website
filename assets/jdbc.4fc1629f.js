import{_ as n}from"./jdbc-conf.7cf06ba9.js";import{o as e,c as i,b as l,e as t,r as o,l as s,u as a}from"./vendor.1180558b.js";const u={class:"markdown-body"},r=[l("h1",null,"JDBC engine usage documentation",-1),l("p",null,"This article mainly introduces the configuration, deployment and use of JDBC engine in Linkis1.0.",-1),l("h2",null,"1. Environment configuration before using the JDBC engine",-1),l("p",null,"If you want to use the JDBC engine on your server, you need to prepare the JDBC connection information, such as the connection address, user name and password of the MySQL database, etc.",-1),l("h2",null,"2. JDBC engine configuration and deployment",-1),l("h3",null,"2.1 JDBC version selection and compilation",-1),l("p",null,"The JDBC engine does not need to be compiled by the user, and the compiled JDBC engine plug-in package can be used directly. Drivers that have been provided include MySQL, PostgreSQL, etc.",-1),l("h3",null,"2.2 JDBC engineConn deployment and loading",-1),l("p",null,"Here you can use the default loading method to use it normally, just install it according to the standard version.",-1),l("h3",null,"2.3 JDBC engine tags",-1),l("p",null,"Here you can use the default dml.sql to insert it and it can be used normally.",-1),l("h2",null,"3. The use of JDBC engine",-1),l("h3",null,"Ready to operate",-1),l("p",null,"You need to configure JDBC connection information, including connection address information and user name and password.",-1),l("p",null,[l("img",{src:n,alt:""})],-1),l("p",null,"Figure 3-1 JDBC configuration information",-1),l("h3",null,"3.1 How to use Scriptis",-1),l("p",null,"The way to use Scriptis is the simplest. You can go directly to Scriptis, right-click the directory and create a new JDBC script, write JDBC code and click Execute.",-1),l("p",null,"The execution principle of JDBC is to load the JDBC Driver and submit sql to the SQL server for execution and obtain the result set and return.",-1),l("p",null,[l("img",{src:"/assets/jdbc-run.b39db252.png",alt:""})],-1),l("p",null,"Figure 3-2 Screenshot of the execution effect of JDBC",-1),l("h3",null,"3.2 How to use workflow",-1),l("p",null,"DSS workflow also has a JDBC node, you can drag into the workflow node, then double-click to enter and edit the code, and then execute it in the form of a workflow.",-1),l("h3",null,"3.3 How to use Linkis Client",-1),l("p",null,[t("Linkis also provides a client way to call JDBC tasks, the way to call is through the SDK provided by LinkisClient. We provide java and scala two ways to call, the specific usage can refer to <"),l("a",{href:"https://github.com/WeBankFinTech/Linkis/wiki/Linkis1.0%E7%94%A8%E6%88%B7%E4"},"https://github.com/WeBankFinTech/Linkis/wiki/Linkis1.0用户�"),t(" %BD%BF%E7%94%A8%E6%96%87%E6%A1%A3>.")],-1),l("h2",null,"4. JDBC engine user settings",-1),l("p",null,"JDBC user settings are mainly JDBC connection information, but it is recommended that users encrypt and manage this password and other information.",-1)],c={setup:(n,{expose:l})=>(l({frontmatter:{}}),(n,l)=>(e(),i("div",u,r)))},d={class:"markdown-body"},h=[l("h1",null,"JDBC 引擎使用文档",-1),l("p",null,"本文主要介绍在Linkis1.0中，JDBC引擎的配置、部署和使用。",-1),l("h2",null,"1.JDBC引擎使用前的环境配置",-1),l("p",null,"如果您希望在您的服务器上使用JDBC引擎，您需要准备JDBC连接信息，如MySQL数据库的连接地址、用户名和密码等",-1),l("h2",null,"2.JDBC引擎的配置和部署",-1),l("h3",null,"2.1 JDBC版本的选择和编译",-1),l("p",null,"JDBC引擎不需要用户自行编译，直接使用编译好的JDBC引擎插件包即可。已经提供的Driver包括有MySQL，PostgreSQL等",-1),l("h3",null,"2.2 JDBC engineConn部署和加载",-1),l("p",null,"此处可以使用默认的加载方式即可正常使用，按照标准版本安装即可。",-1),l("h3",null,"2.3 JDBC引擎的标签",-1),l("p",null,"此处可以使用默认的dml.sql进行插入即可正常使用。",-1),l("h2",null,"3.JDBC引擎的使用",-1),l("h3",null,"准备操作",-1),l("p",null,"您需要配置JDBC的连接信息，包括连接地址信息和用户名以及密码。",-1),l("p",null,[l("img",{src:n,alt:""})],-1),l("p",null,"图3-1 JDBC配置信息",-1),l("h3",null,"3.1 Scriptis的使用方式",-1),l("p",null,"Scriptis的使用方式是最简单的，您可以直接进入Scriptis，右键目录然后新建JDBC脚本并编写JDBC代码并点击执行。",-1),l("p",null,"JDBC的执行原理是通过加载JDBC的Driver然后提交sql到SQL的server去执行并获取到结果集并返回。",-1),l("p",null,[l("img",{src:"/assets/jdbc-run.b39db252.png",alt:""})],-1),l("p",null,"图3-2 JDBC的执行效果截图",-1),l("h3",null,"3.2工作流的使用方式",-1),l("p",null,"DSS工作流也有JDBC的节点，您可以拖入工作流节点，然后双击进入然后进行编辑代码，然后以工作流的形式进行执行。",-1),l("h3",null,"3.3 Linkis Client的使用方式",-1),l("p",null,[t("Linkis也提供了client的方式进行调用JDBC的任务，调用的方式是通过LinkisClient提供的SDK的方式。我们提供了java和scala两种方式进行调用，具体的使用方式可以参考"),l("a",{href:"https://github.com/WeBankFinTech/Linkis/wiki/Linkis1.0%E7%94%A8%E6%88%B7%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3"},"https://github.com/WeBankFinTech/Linkis/wiki/Linkis1.0用户使用文档"),t("。")],-1),l("h2",null,"4.JDBC引擎的用户设置",-1),l("p",null,"JDBC的用户设置是主要是的JDBC的连接信息，但是建议用户将此密码等信息进行加密管理。",-1)],p={setup:(n,{expose:l})=>(l({frontmatter:{}}),(n,l)=>(e(),i("div",d,h)))},B={setup(n){const i=o(localStorage.getItem("locale")||"en");return(n,l)=>"en"===i.value?(e(),s(a(c),{key:0})):(e(),s(a(p),{key:1}))}};export{B as default};