import{_ as p}from"./AdminLayout-ac8a2ff9.js";import{o as l,d as c,a as e,l as n,c as h,w as i,b as a,u as _,t,f as s}from"./app-87ee86a0.js";import"./AppLayout-0d1451ad.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Icon-a0b9d412.js";import"./useAuthorizable-b419fead.js";import"./use-resolve-button-type-2f64af67.js";import"./open-closed-4a951f7a.js";import"./CloudArrowDownIcon-b5c4422d.js";import"./index-e4c90479.js";function f(o,r){return l(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])}const g={class:"py-12 px-10 max-w-4xl mx-auto"},m={class:"bg-white shadow rounded p-6 dark:bg-gray-800"},y={class:"flex flex-col items-center justify-center"},v={class:"text-2xl font-bold text-green-500"},w={class:"uppercase font-bold mt-3 dark:text-gray-200 text-gray-800"},b={class:"flex flex-col space-y-4 mt-6 prose-lg prose dark:prose-dark"},x={target:"_blank",class:"text-light-blue-400 hover:text-light-blue-600 whitespace-nowrap",href:"https://github.com/MineTrax/plugin/releases/latest"},k=e("kbd",null,"plugins/Minetrax/config.yml",-1),S=e("br",null,null,-1),q={class:"dark:bg-gray-900"},C={class:"flex justify-end mt-4"},K={__name:"AfterCreateSteps",props:{server:{type:Object,required:!0},apiKey:{type:String,required:!0},apiSecret:{type:String,required:!0},apiHost:{type:String,required:!0}},setup(o){return(r,j)=>{const d=n("app-head"),u=n("InertiaLink");return l(),h(p,null,{default:i(()=>[a(d,{title:r.__("Server Created Successfully!")},null,8,["title"]),e("div",g,[e("div",m,[e("div",y,[a(_(f),{class:"h-32 text-green-500","aria-hidden":"true"}),e("h1",v,t(r.__("Server Added Successfully!")),1),e("h1",w,t(r.__("Follow below steps to add the Plugin!")),1)]),e("div",b,[e("p",null,[s(t(r.__("Download latest version of the MineTrax.jar Plugin and upload it into 'plugins' folder of your server."))+" ",1),e("a",x,t(r.__("Click here to Download")),1)]),e("p",null,[s(t(r.__("Restart your server once so that the plugin can generate the config file inside"))+" ",1),k,s(". ")]),S,e("p",null,[s(t(r.__("Open the config file and update the following details in it as provided below"))+": ",1),e("pre",q,`enabled: true
api-host: `+t(o.apiHost)+`
api-key: `+t(o.apiKey)+`
api-secret: `+t(o.apiSecret)+`
server-id: `+t(o.server.id)+`
webquery-host: 0.0.0.0
webquery-port: `+t(o.server.webquery_port),1)]),e("p",null,t(r.__("Restart your server again and you are all set!")),1)]),e("div",C,[a(u,{as:"a",class:"text-light-blue-400 hover:text-light-blue-600 whitespace-nowrap",href:r.route("admin.server.index")},{default:i(()=>[s(t(r.__("Go back to Server List")),1)]),_:1},8,["href"])])])])]),_:1})}}};export{K as default};
