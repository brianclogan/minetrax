import{l as h,q as w,o as n,c as o,w as f,b as x,u as s,_ as k,a as t,t as e,j as g,d as r,f as _,e as d,g as v,F as p,k as j}from"./app-2128deda.js";import{u as C}from"./AppLayout-2410b8b9.js";import{_ as D}from"./AdminLayout-2447e652.js";import{_ as N,a as T,b as B}from"./CustomFormIntelListChart-4367bfe7.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useAuthorizable-dcdf76ce.js";import"./use-resolve-button-type-de49e2d2.js";import"./CloudArrowDownIcon-edb27db4.js";import"./index-83b1c527.js";import"./Chart-81933dd3.js";const S={class:"p-4 px-10 mx-auto space-y-4"},V={class:"py-3 flex justify-between"},$={class:"text-xl font-extrabold text-gray-800 dark:text-gray-200"},F={class:"flex gap-4"},I={class:"p-2 overflow-hidden bg-white rounded shadow max-w-none dark:bg-cool-gray-800"},L={class:"px-3 pt-2 font-bold text-gray-700 dark:text-white"},M={class:"mt-3 grid grid-cols-2 gap-2"},O={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},U={class:"flex items-center justify-between w-full"},q={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},A={class:"flex items-center justify-between w-full"},E={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},H={class:"flex items-center justify-between w-full"},W={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},z={class:"flex items-center justify-between w-full"},G={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},J={class:"flex items-center justify-between w-full"},K={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},P={class:"flex items-center justify-between w-full"},Q={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},R={class:"flex items-center justify-between w-full"},X={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},Y={class:"flex items-center justify-between w-full"},Z={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},tt={class:"flex items-center justify-between w-full"},et=["title"],st={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},it={class:"flex items-center justify-between w-full"},lt=["title"],at={key:0},nt={class:"grid grid-cols-2 gap-4"},yt={__name:"ShowCustomForm",props:{form:{type:Object},intel:{type:Object}},setup(i){const{__:l}=j(),{formatTimeAgoToNow:m,formatToDayDateString:c}=C();return(y,rt)=>{const b=h("InertiaLink"),u=w("tippy");return n(),o(D,null,{default:f(()=>[x(k,{title:s(l)(":formtitle Intel - Custom Forms",{formtitle:i.form.title})},null,8,["title"]),t("div",S,[t("div",V,[t("h3",$,e(s(l)(":formtitle - Intel",{formtitle:i.form.title})),1),t("div",F,[x(b,{href:y.route("admin.custom-form.index"),class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-400 border border-transparent rounded-md hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-400 focus:shadow-outline-gray dark:bg-gray-800 dark:hover:bg-gray-700 dark:active:bg-gray-900 dark:focus:border-gray-700"},{default:f(()=>[t("span",null,e(s(l)("Back")),1)]),_:1},8,["href"])])]),t("div",I,[t("h3",L,e(s(l)("Details")),1),t("ul",M,[t("li",O,[t("div",U,[t("span",null,e(s(l)("Title")),1),t("div",null,e(i.form.title),1)])]),t("li",q,[t("div",A,[t("span",null,e(s(l)("Url Slug")),1),t("div",null,e(i.form.slug),1)])]),t("li",E,[t("div",H,[t("span",null,e(s(l)("Status")),1),t("span",null,e(i.form.status.value),1)])]),t("li",W,[t("div",z,[t("span",null,e(s(l)("Visible in Listing")),1),t("span",null,e(i.form.is_visible_in_listing),1)])]),t("li",G,[t("div",J,[t("span",null,e(s(l)("Who can submit?")),1),t("span",null,e(i.form.can_create_submission),1)])]),t("li",K,[t("div",P,[t("span",null,e(s(l)("Max submission per user")),1),t("span",null,e(i.form.max_submission_per_user?i.form.max_submission_per_user:s(l)("not applicable")),1)])]),t("li",Q,[t("div",R,[t("span",null,e(s(l)("Minimum staff role weight to view submissions")),1),t("span",null,e(i.form.min_role_weight_to_view_submission?i.form.min_role_weight_to_view_submission:s(l)("none")),1)])]),t("li",X,[t("div",Y,[t("span",null,e(s(l)("Notify staff on new submission")),1),t("span",null,e(i.form.is_notify_staff_on_submission),1)])]),t("li",Z,[t("div",tt,[t("span",null,e(s(l)("Created")),1),g((n(),r("span",{title:s(m)(i.form.created_at)},[_(e(s(c)(i.form.created_at))+" ("+e(s(l)("by :username",{username:i.form.creator.username}))+") ",1)],8,et)),[[u]])])]),t("li",st,[t("div",it,[t("span",null,e(s(l)("Updated")),1),g((n(),r("span",{title:s(m)(i.form.updated_at)},[_(e(s(c)(i.form.updated_at))+" ",1),i.form.updater?(n(),r("span",at," ("+e(s(l)("by :username",{username:i.form.updater.username}))+") ",1)):d("",!0)],8,lt)),[[u]])])])])]),t("div",nt,[(n(!0),r(p,null,v(i.intel,a=>(n(),r(p,{key:a.label},[["select","radio","multiselect","checkbox"].includes(a.type)?(n(),o(N,{key:0,title:a.label,data:a.data},null,8,["title","data"])):d("",!0),["datetime-local","date","time","month","week"].includes(a.type)?(n(),o(T,{key:1,title:a.label,data:a.data},null,8,["title","data"])):d("",!0),["text","textarea","email","number","password","tel","url"].includes(a.type)?(n(),o(B,{key:2,title:a.label,data:a.data},null,8,["title","data"])):d("",!0)],64))),128))])])]),_:1})}}};export{yt as default};
