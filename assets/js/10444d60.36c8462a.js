"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[750],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var s=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=s.createContext({}),m=function(e){var t=s.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return s.createElement(o.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,c=u["".concat(o,".").concat(d)]||u[d]||h[d]||r;return a?s.createElement(c,l(l({ref:t},p),{},{components:a})):s.createElement(c,l({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var m=2;m<r;m++)l[m]=a[m];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1102:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var s=a(7462),n=(a(7294),a(3905));const r={title:"Samarth - Backend",sidebar_position:3,sidebar_label:"Backend"},l=void 0,i={unversionedId:"tech/system/backend",id:"tech/system/backend",title:"Samarth - Backend",description:"Introduction",source:"@site/docs/tech/system/backend.md",sourceDirName:"tech/system",slug:"/tech/system/backend",permalink:"/docs/tech/system/backend",draft:!1,editUrl:"https://github.com/Samarth-HP/docs/tree/master/docs/tech/system/backend.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Samarth - Backend",sidebar_position:3,sidebar_label:"Backend"},sidebar:"overview",previous:{title:"Android Apps",permalink:"/docs/tech/system/android"},next:{title:"Admin Panel",permalink:"/docs/tech/system/admin-panel"}},o={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Repos",id:"repos",level:2},{value:"Important modules",id:"important-modules",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Assessment Module",id:"assessment-module",level:3},{value:"Assessment Creation",id:"assessment-creation",level:4},{value:"Assessment Listing",id:"assessment-listing",level:4},{value:"Assessment Submissions",id:"assessment-submissions",level:4},{value:"Student Enrollment Module",id:"student-enrollment-module",level:3},{value:"SLC Module",id:"slc-module",level:3},{value:"SMS Module",id:"sms-module",level:3}],p={toc:m},u="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"The backend system consists of mainly the REST APIs written in Python Django framework to power\nEsamwad, Shiksha Saathi & NLA for Parents Application. It internally uses User Service, Yaus,\nDoc Generator, Templator, ODK Aggregate, etc. as the core building blocks (open source & built\nby Samagra). It also uses various open source 3rd party tools like Hasura, Posthog, Sentry, Fusion\nAuth, Grafana, Vault, Airflow etc."),(0,n.kt)("p",null,"A brief overview of all the services is shown below:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"System Overview",src:a(1709).Z,width:"1971",height:"942"})),(0,n.kt)("h2",{id:"repos"},"Repos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Esamwad Backend: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Samarth-HP/esamwad-backend"},"https://github.com/Samarth-HP/esamwad-backend")),(0,n.kt)("li",{parentName:"ul"},"User Service: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Samagra-Development/user-service"},"https://github.com/Samagra-Development/user-service")),(0,n.kt)("li",{parentName:"ul"},"Yaus: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Samagra-Development/yaus"},"https://github.com/Samagra-Development/yaus")),(0,n.kt)("li",{parentName:"ul"},"Doc Generator: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Samagra-Development/Doc-Generator"},"https://github.com/Samagra-Development/Doc-Generator")),(0,n.kt)("li",{parentName:"ul"},"Templater: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Samagra-Development/templater"},"https://github.com/Samagra-Development/templater")),(0,n.kt)("li",{parentName:"ul"},"ODK: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/samagra-comms/odk"},"https://github.com/samagra-comms/odk")),(0,n.kt)("li",{parentName:"ul"},"ODK UCI Adapter: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Samarth-HP/odk-uci-adapter"},"https://github.com/Samarth-HP/odk-uci-adapter")),(0,n.kt)("li",{parentName:"ul"},"Posthog: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Samagra-Development/posthog-deploy"},"https://github.com/Samagra-Development/posthog-deploy")),(0,n.kt)("li",{parentName:"ul"},"Airflow: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Samagra-Development/airflow"},"https://github.com/Samagra-Development/airflow"))),(0,n.kt)("h2",{id:"important-modules"},"Important modules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Assessment Module"),(0,n.kt)("li",{parentName:"ul"},"Student Enrollment Module"),(0,n.kt)("li",{parentName:"ul"},"SLC Module"),(0,n.kt)("li",{parentName:"ul"},"SMS Module")),(0,n.kt)("h2",{id:"implementation"},"Implementation"),(0,n.kt)("h3",{id:"assessment-module"},"Assessment Module"),(0,n.kt)("p",null,"There are 4 types of assessments:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"LO(Learning objective)"),(0,n.kt)("li",{parentName:"ul"},"Unit"),(0,n.kt)("li",{parentName:"ul"},"Question"),(0,n.kt)("li",{parentName:"ul"},"None")),(0,n.kt)("p",null,"And each assessment can be evaluated based on 4 types of evaluation parameters on which we assess students'\nsubmissions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Grade"),(0,n.kt)("li",{parentName:"ul"},"Marks"),(0,n.kt)("li",{parentName:"ul"},"Percentage"),(0,n.kt)("li",{parentName:"ul"},"None")),(0,n.kt)("p",null,"The final submission results can be evaluated based on 3 outcomes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"TSP(Total Studnet Passing)"),(0,n.kt)("li",{parentName:"ul"},"Boolean"),(0,n.kt)("li",{parentName:"ul"},"Marks")),(0,n.kt)("p",null,"There are a total of 32 possible combinations from the above divisions and out of those assessments,\nwe support the Grade and Marks evaluation parameter, LO, Unit, Questions, None assessment type,\nand TSP outcome."),(0,n.kt)("h4",{id:"assessment-creation"},"Assessment Creation"),(0,n.kt)("p",null,"An assessment creation starts by filling out an ",(0,n.kt)("a",{target:"_blank",href:a(2904).Z},"Enketo form"),",\nwhich on submission to ODK Aggregate returns an XML. This XML is fed to parseForm API\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Samarth-HP/esamwad-backend/blob/master/app/server/urls.py#L85"},(0,n.kt)("inlineCode",{parentName:"a"},"POST /api/v4/form/submit"))," which actually creates an assessment for the combination in our main\nPostgres Database."),(0,n.kt)("p",null,"The backend maintains two levels of caching: one in Redis, which is extremely fast, and the other\none is the database (which is not comparatively fast) that acts as a fallback mechanism just in case\nRedis isn\u2019t available. On each CRUD operation, we clear the cache at both levels."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Assessment Create diagram",src:a(3624).Z,width:"681",height:"331"})),(0,n.kt)("h4",{id:"assessment-listing"},"Assessment Listing"),(0,n.kt)("p",null,"When the user opens the homepage of the E-samwad Android app it hits the getAllAssessments API\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Samarth-HP/esamwad-backend/blob/master/app/server/v5/urls.py#L25"},(0,n.kt)("inlineCode",{parentName:"a"},"GET /api/v5/assessment/all/"))," for fetching all the assessments available for the school along with\ntheir submissions using getStudentSubmissionData API ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Samarth-HP/esamwad-backend/blob/master/app/server/v5/urls.py#L29"},(0,n.kt)("inlineCode",{parentName:"a"},"GET /api/v5/assessment/submission/student/")),"\nand getClassSubmissionData API ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Samarth-HP/esamwad-backend/blob/master/app/server/v5/urls.py#L30"},(0,n.kt)("inlineCode",{parentName:"a"},"GET /api/v5/assessment/submission/class/")),"."),(0,n.kt)("p",null,"User requests go to the backend then the backend finds data in the Redis cache if it didn\u2019t find there\nthen it goes to the Database cache if still assessments are not present there then at last it pulls from\nthe database. There is one more level of cache present which is at the Android level (E-tag) where if\ndata has not been changed at the backend then it uses the same data as it is which reduces our network\ncalls."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Assessment Listing diagram",src:a(5979).Z,width:"601",height:"301"})),(0,n.kt)("h4",{id:"assessment-submissions"},"Assessment Submissions"),(0,n.kt)("p",null,"When the teacher fills in the marks for the assessment then from the Android we hit saveStudentSubmission\nAPI ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Samarth-HP/esamwad-backend/blob/master/app/server/v5/urls.py#L29"},(0,n.kt)("inlineCode",{parentName:"a"},"POST /api/v5/assessment/submission/student/")),"\nif it was a student-level assessment or\nsaveClassSubmission API ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Samarth-HP/esamwad-backend/blob/master/app/server/v5/urls.py#L30"},(0,n.kt)("inlineCode",{parentName:"a"},"POST /api/v5/assessment/submission/class/")),"\nif it was a class-level assessment.\nAfter successful submission, the cache gets automatically refreshed for the given assessment for further\nAPI calls to respond faster."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Assessment Submission diagram",src:a(4302).Z,width:"561",height:"301"})),(0,n.kt)("h3",{id:"student-enrollment-module"},"Student Enrollment Module"),(0,n.kt)("p",null,"This module has 2 parts:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"New Student Registration: when a student enrolled as entirely new student."),(0,n.kt)("li",{parentName:"ol"},"School Transfer (within State): when a student is transferred from another school within the state."),(0,n.kt)("li",{parentName:"ol"},"School Transfer (Other States): when a student is transferred from a school from other state.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Student Enrollment Module",src:a(1160).Z,width:"605",height:"868"})),(0,n.kt)("p",null,"References:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST /api/v5/student/"),": ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Samarth-HP/esamwad-backend/blob/master/app/server/v5/urls.py#L41"},"https://github.com/Samarth-HP/esamwad-backend/blob/master/app/server/v5/urls.py#L41")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST /api/v5/vc/verify"),": ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Samarth-HP/esamwad-backend/blob/master/app/server/v5/urls.py#L40"},"https://github.com/Samarth-HP/esamwad-backend/blob/master/app/server/v5/urls.py#L40")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET /api/v5/student/$vcId"),": ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Samarth-HP/esamwad-backend/blob/master/app/server/v5/urls.py#L38"},"https://github.com/Samarth-HP/esamwad-backend/blob/master/app/server/v5/urls.py#L38"))),(0,n.kt)("h3",{id:"slc-module"},"SLC Module"),(0,n.kt)("p",null,"App requests to remove student from the school. Backend generates an School Leaving\nCertificate along with a QR code, which can then be used to transfer student within\nthe state under ",(0,n.kt)("strong",{parentName:"p"},"Student Enrollment Module"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SLC Module",src:a(7662).Z,width:"602",height:"200"})),(0,n.kt)("p",null,"References:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST /api/v5/student/transfer/$studentId"),": ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Samarth-HP/esamwad-backend/blob/master/app/server/v5/urls.py#L39"},"https://github.com/Samarth-HP/esamwad-backend/blob/master/app/server/v5/urls.py#L39"))),(0,n.kt)("h3",{id:"sms-module"},"SMS Module"),(0,n.kt)("p",null,"SMS Module is responsible for sending SMS to parents for various events e.g."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"School Holidays"),(0,n.kt)("li",{parentName:"ul"},"Parents Meeting"),(0,n.kt)("li",{parentName:"ul"},"Exam Announcement"),(0,n.kt)("li",{parentName:"ul"},"Result Announcement"),(0,n.kt)("li",{parentName:"ul"},"Homework")),(0,n.kt)("p",null,"Form templates are stored on ODK server. Application fetches forms from ODK\nand teachers can choose to send SMS from the list of templates.\nWhen the form is submitted, an insertion is made into Hasura table, which then\ntriggers a webhook to ",(0,n.kt)("strong",{parentName:"p"},"SMS Adapter Nest Application"),".\nThe ",(0,n.kt)("strong",{parentName:"p"},"Nest Application")," is responsible for:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Receiving Requests & queue them."),(0,n.kt)("li",{parentName:"ol"},"Workers then picks the jobs in a sequential manner."),(0,n.kt)("li",{parentName:"ol"},"Based on template & business logic, receiver's information is grabbed from\nEsamwad Database."),(0,n.kt)("li",{parentName:"ol"},"Finally, SMS are sent to CDAC Service provider, which then actually delivers the SMSes.")),(0,n.kt)("p",null,"Nest Application also keeps a track on the progress of the queued jobs & SMS sending failures."),(0,n.kt)("p",null,"A high level diagram of the flow is shown below:\n",(0,n.kt)("img",{alt:"SMS Module",src:a(5241).Z,width:"892",height:"672"})),(0,n.kt)("p",null,"Refer: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Samarth-HP/odk-uci-adapter"},"https://github.com/Samarth-HP/odk-uci-adapter")))}h.isMDXComponent=!0},2904:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/files/samarth-assessment-enketo-form-d42516c8c2d0b5f285640a1da519aaf5.xml"},3624:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/assessment-create-5738772630d2fb94a93142b6e5b2b376.png"},5979:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/assessment-listing-4b193ad702674182085cb715e12bcc52.png"},4302:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/assessment-submissions-e9bd156b933dcadedf406b3fd35c78d9.png"},7662:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/samarth-hp-backend-SLC-Module-a470f89810586741313afb5d6761d3ba.png"},5241:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/samarth-hp-backend-SMS-Adapter-09f85e919c13e01c330bb5693a7efd97.png"},1709:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/samarth-hp-backend-Services-99a611e2d9fcedda092e7b799ab5d8aa.jpg"},1160:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/samarth-hp-backend-Student-Enrollment-f1f7c8f8059b44c9d074f8157c93f55e.png"}}]);