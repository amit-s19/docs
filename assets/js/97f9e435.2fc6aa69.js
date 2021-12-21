"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8363],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=i,p=u["".concat(c,".").concat(m)]||u[m]||h[m]||o;return a?n.createElement(p,r(r({ref:t},d),{},{components:a})):n.createElement(p,r({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},84399:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=["components"],s={id:"cachingdesigns",title:"E-Samwad Caching Designs",sidebar_label:"E-Samwad Caching Designs",sidebar_position:6},c=void 0,l={unversionedId:"E-Samwad/cachingdesigns",id:"E-Samwad/cachingdesigns",isDocsHomePage:!1,title:"E-Samwad Caching Designs",description:"1. Caching",source:"@site/docs/E-Samwad/E-Samwad-Caching-Designs.md",sourceDirName:"E-Samwad",slug:"/E-Samwad/cachingdesigns",permalink:"/docs/docs/E-Samwad/cachingdesigns",editUrl:"https://github.com/Samarth-HP/docs/docs/E-Samwad/E-Samwad-Caching-Designs.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"cachingdesigns",title:"E-Samwad Caching Designs",sidebar_label:"E-Samwad Caching Designs",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Deploy Samwad",permalink:"/docs/docs/E-Samwad/deploysamwad"},next:{title:"Docusaurus Introduction",permalink:"/docs/docs/mermaid"}},d=[{value:"1. Caching",id:"1-caching",children:[]},{value:"2. Analysis",id:"2-analysis",children:[]},{value:"3. Design for current caching implementation in eSamwad:",id:"3-design-for-current-caching-implementation-in-esamwad",children:[{value:"Problems Faced and Learnings",id:"problems-faced-and-learnings",children:[]}]},{value:"4. Improvements",id:"4-improvements",children:[]},{value:"5. Ongoing",id:"5-ongoing",children:[]}],h={toc:d};function u(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-caching"},"1. Caching"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"caching_flow",src:a(93030).Z})),(0,o.kt)("p",null,"Caching Design proved to be one of the most important aspect in esamwad's applcation layer to maintain application performance, high availibility and high tolerance. It helped in our scaling decisions too.\nWhen pondering around the use cases of esamwad around the schools in Himachal Pradesh and amount of load it will be creating, different designs for caching was considered."),(0,o.kt)("h2",{id:"2-analysis"},"2. Analysis"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We knew that recently requested data is likely to be requested again by many different users, so by taking advantage of the locality of reference principle we leveraged this to reduce our API response time and improve applications performance.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7301).Z})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Then, it was the decision on which layer to apply caching on. Ex- client, web server, application or on database.\nWhile there were pros and cons for every decision that could have been taken. The important part was to decide what will be best suited for our use case, i.e. to serve APIs which return repititive data and are stable on high load.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Though we do have a MongoDB Realm SDK used on our Android App used for caching and offline support, but it has dependencies on phone memory and third party permissions. So client side caching was not the optimal solution.")),(0,o.kt)("p",null,"To tackle this issue we decided to leverage django signals for updating our cache tables on event signals without adding extra dependencies on invalidating and hydrating the cache from time to time. We are also using redis for caching static queries and maintaining keys for cache invalidation and hydration purpose."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"django_signals",src:a(24778).Z})),(0,o.kt)("p",null,"Django includes a \u201csignal dispatcher\u201d which helps decoupled applications get notified when actions occur elsewhere in the framework. In a nutshell, signals allow certain senders to notify a set of receivers that some action has taken place. They\u2019re especially useful when many pieces of code may be interested in the same events.\nDjango provides a set of built-in signals that let user code get notified by Django itself of certain actions."),(0,o.kt)("h2",{id:"3-design-for-current-caching-implementation-in-esamwad"},"3. Design for current caching implementation in eSamwad:"),(0,o.kt)("p",null,"We decided on this design for caching in our current application version to store our cache globally in our main database and have added a feature flag ",(0,o.kt)("em",{parentName:"p"},"IS_CACHE_ENABLED")," to control the caching in the application in a more modular way without hindering with overall application code structure."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"caching-esamwad",src:a(90392).Z})),(0,o.kt)("p",null,"We started our implementation around the signals and developed logics to revalidate our cache on each signal triggers by sending tasks through celery to a queue manager which would asyncronously update the cache tables. Though it seemed to work properly but these also had their own challenges."),(0,o.kt)("h3",{id:"problems-faced-and-learnings"},"Problems Faced and Learnings"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The workers on queue manager (RabbitMQ in our case) runs the task asynchronous so when a task is sent to the queue manager there is no callback for the  responses of the task, i.e if it failed or completed successfully. So in cases if there is too much lag on the queue manager it would take uncertain amount of time to determine when the task will get completed or even if it got completed or not. "),(0,o.kt)("li",{parentName:"ol"},"Other issue was the performance of the application, as signals themselves are synchronous in nature so it affected the API performance causing a little overtime on APIs response time when a signal event was triggered. It caused lag in the admin console too, on updating the entries in table through admin console it didn't ensure if the queue manager will update the cache in realtime and user may still seem to see older data for a certain time. The major challenge here that we faced was having a good performance on the broker side so that tasks sent could be executed in realtime and should be fast. One of the ways to improve the performance that we figured out was internal query optimisations in API logic layer which in turn made the API calls very slow and workers performance seem to be affected with this causing the little lags in the tasks getting executed."),(0,o.kt)("li",{parentName:"ol"},"To ensure no duplicate tasks are sent to the broker or to ensure if other parallel task on the broker does not interfere with the previous queued tasks we used redis for maintaining keys to ensure no duplicate task gets added to perform the same task."),(0,o.kt)("li",{parentName:"ol"},"Even after maintaining the number of tasks being sent to the broker for cache invalidation and hydration, we saw issues on queries which took slighlty longer time to execute (i.e. around 300-600ms). These queries started creating lags on the queue manager when the load increased on the application and load on the database increased too much to execute so many queued queries. This again caused the failure of as application became very slow as the number of users increased and we started facing server timeout issues. To this problem we found out that the query which was taking so much time was returning mostly static data and it can be cached as its not updated too frequntly in the application, i.e. the query bringed meta data information on a particular assessments which rarely gets changed once the assessment is created, so we decided to cache this query too using redis keys and decided to flush these keys if any changes are made to these meta data. Currently we decided to flush the keys manually if any requirements come from the field to change the assessment meta data and decided to rethink and test on scenarios over time to add automatic cache validation and hydration on these event changes.")),(0,o.kt)("h2",{id:"4-improvements"},"4. Improvements"),(0,o.kt)("p",null,"Facing challenges on improving the API performance and broker issues, we decided to first start from optimising our internal queries and bussiness logics."),(0,o.kt)("p",null,"We did manage to optimise our API and internal database calls by caching static queries and assessment data to achieve the maximum performance in least time and were able to bring down the average time on the main assessment meta data API. The average time taken to execute the big static query was cut down from 300-400ms to 30-40ms which was 100x faster."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Benchmarks results before optimisation:")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(89065).Z})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Benchmarks results before optimisation:")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(30410).Z})),(0,o.kt)("h2",{id:"5-ongoing"},"5. Ongoing"),(0,o.kt)("p",null,"So we achived the best performance for our APIs from this, now the task remained to increase the performance and availibility of the broker and properly leverage the django signals so that no tasks are skipped and the caches are updated automatically on signal calls."),(0,o.kt)("p",null,"We are considering to have periodic celery beat tasks which after specified amount of time goes and revalidate the caches even if no triggers occur to ensure that caches are always updated and we get better benchmarks."),(0,o.kt)("p",null,"We are also creating a list of use cases for each signals from the django-dispatcher and how it should be interpreted to update the cache. We planned to enable these signals over time when we see the requirements to update the caches on these event triggers frequently. Its not done straightaway because the use case for such events are very less right now and it will only cause more load on queue manager, workers and database to perform so many asynchronous tasks and queries."))}u.isMDXComponent=!0},30410:function(e,t,a){t.Z=a.p+"assets/images/benchmarks_after_optimisation-e1c63c3817002e66953ee62d563b9b07.PNG"},89065:function(e,t,a){t.Z=a.p+"assets/images/benchmarks_before_optimisation-e826169cd2c8b977cdca2a1bab3ee326.PNG"},90392:function(e,t,a){t.Z=a.p+"assets/images/caching-esamwad-959d207161b19a2aa9f9c36c916c05ca.PNG"},93030:function(e,t,a){t.Z=a.p+"assets/images/caching-layer-dd04dcf2bf14f1eb903977e0310c405e.png"},7301:function(e,t,a){t.Z=a.p+"assets/images/caching-635732290e7882c27826f35b12cfaae7.png"},24778:function(e,t,a){t.Z=a.p+"assets/images/signals-django-8d528ee5536a325df3a3c2b1b628f467.png"}}]);