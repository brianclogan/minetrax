import{T as M,A as j,r as N,x as O,E as T,l as k,o as p,c as g,w as u,b as r,a as s,t as n,i as q,u as l,j as P,v as R,e as D,f as c,d as y,g as X,F as B,H,I}from"./app-87ee86a0.js";import{_ as f}from"./InputError-3eff692a.js";import{L as U}from"./LoadingButton-b2be779b.js";import{X as d}from"./XInput-7bbb2115.js";import{X as w}from"./XSelect-5a367d80.js";import{X as h}from"./XCheckbox-69f7e96f.js";import{E as W}from"./easymde-8d469b7c.js";import{_ as K}from"./AdminLayout-ac8a2ff9.js";import{I as z}from"./Icon-a0b9d412.js";import{_ as G}from"./DialogModal-3c9d0eba.js";import{_ as J}from"./SecondaryButton-2e4cf60f.js";import{u as Q}from"./useFormKit-cc6f0e5f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./AppLayout-0d1451ad.js";import"./useAuthorizable-b419fead.js";import"./use-resolve-button-type-2f64af67.js";import"./open-closed-4a951f7a.js";import"./CloudArrowDownIcon-b5c4422d.js";import"./index-e4c90479.js";import"./Modal-4f254076.js";const Y={class:"py-12 px-10 max-w-7xl mx-auto"},Z={class:"flex justify-between mb-8"},ee={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},se={class:"mt-10 sm:mt-0"},oe={class:"md:grid md:grid-cols-6 md:gap-6"},le={class:"mt-5 md:mt-0 md:col-span-6"},te=["onSubmit"],ie={class:"shadow overflow-hidden sm:rounded-md"},re={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},ae={class:"grid grid-cols-6 gap-4"},ne={class:"col-span-6 sm:col-span-6"},_e={class:"col-span-6 sm:col-span-6"},de={class:"col-span-6 sm:col-span-6"},me={class:"col-span-6 sm:col-span-6"},ue={class:"col-span-6 sm:col-span-3"},pe={class:"col-span-6 sm:col-span-3"},ce={class:"col-span-6 sm:col-span-3"},fe={class:"col-span-6 sm:col-span-3"},be={class:"col-span-6 sm:col-span-6"},he={class:"flex items-center col-span-6 sm:col-span-3"},ge={class:"mt-4 flex space-x-4"},ye={class:"flex items-center col-span-6 sm:col-span-3"},we={class:"mt-4 flex space-x-4"},ve={class:"flex items-center col-span-6 sm:col-span-3"},xe={class:"mt-4 flex space-x-4"},Ve={class:"flex items-center col-span-6 sm:col-span-3"},ke={class:"mt-4 flex space-x-4"},Ue={class:"col-span-6 sm:col-span-3"},Ae={class:"flex-col col-span-6 space-y-1 sm:col-span-6"},Fe={class:"text-base font-medium text-gray-900 dark:text-gray-300"},Se={class:"w-full space-y-1"},Ce={class:"flex space-x-4"},Ee=s("div",{class:"w-5"},null,-1),$e={class:"flex-1 block text-sm font-medium text-gray-700 dark:text-gray-400"},Le=s("span",{class:"text-red-500"},"*",-1),Me={class:"flex-1 block text-sm font-medium text-gray-700 dark:text-gray-400"},je=s("span",{class:"text-red-500"},"*",-1),Ne={class:"flex-1 block text-sm font-medium text-gray-700 dark:text-gray-400"},Oe={class:"flex-1 block text-sm font-medium text-gray-700 dark:text-gray-400"},Te={class:"flex-1 block text-sm font-medium text-gray-700 dark:text-gray-400"},qe=s("span",{class:"text-red-500"},"* ",-1),Pe=s("span",{class:"text-xs text-gray-500"},"(Eg: Options1,Option2)",-1),Re=["onClick"],De={class:"flex-1"},Xe={class:"flex-1"},Be={class:"flex-1"},He={class:"flex-1"},Ie={class:"flex-1"},We={key:1,class:"h-full text-gray-700 text-lg font-semibold dark:text-gray-300 w-full flex items-center justify-center"},Ke={class:"flex justify-end mt-1"},ze={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-between gap-2"},Ge={class:"text-lg font-bold"},bs={__name:"EditRecruitment",props:{roles:{type:Array,required:!0},recruitment:{type:Object,required:!0}},setup(v){const a=v,A={draft:"Draft - Application is under development and not visible to users",active:"Active - Application is actively accepting submissions",disabled:"Disabled - Application is disabled for new submissions",archived:"Archived - Application is archived and not visible to users"},x={text:{},textarea:{},select:{hasOptions:!0},multiselect:{hasOptions:!0},radio:{hasOptions:!0},checkbox:{},email:{},number:{},password:{},tel:{},url:{},week:{},month:{},time:{},date:{},"datetime-local":{}},e=M({_method:"PUT",title:a.recruitment.title,slug:a.recruitment.slug,status:a.recruitment.status.value,description:a.recruitment.description,max_submission_per_user:a.recruitment.max_submission_per_user,submission_cooldown_in_seconds:a.recruitment.submission_cooldown_in_seconds,is_allow_only_player_linked_users:a.recruitment.is_allow_only_player_linked_users,is_allow_only_verified_users:a.recruitment.is_allow_only_verified_users,is_allow_messages_from_users:a.recruitment.is_allow_messages_from_users,min_role_weight_to_view_submission:a.recruitment.min_role_weight_to_view_submission,min_role_weight_to_vote_on_submission:a.recruitment.min_role_weight_to_vote_on_submission,min_role_weight_to_act_on_submission:a.recruitment.min_role_weight_to_act_on_submission,is_notify_staff_on_submission:a.recruitment.is_notify_staff_on_submission,related_role_id:a.recruitment.related_role_id,fields:a.recruitment.fields});let V=null;const F=()=>{e.description=V.value(),e.fields.map(o=>{o.name=o.label.toLowerCase().replace(/ /g,"_")}),e.post(route("admin.recruitment.update",a.recruitment.id),{})};j(()=>{V=new W({previewClass:"editor-preview prose max-w-none"})});function S(){e.fields.push({type:"text",label:"",name:"",validation:"required"})}function C(o){e.fields.length!==1&&e.fields.splice(o,1)}const b=N(!1),E=O(()=>Q().generateSchemaFromFieldsArray(e.fields));return T(()=>e.title,o=>{e.slug=I.kebabCase(o)}),(o,i)=>{const $=k("app-head"),L=k("inertia-link");return p(),g(K,null,{default:u(()=>[r($,{title:"Edit Application Form"}),s("div",Y,[s("div",Z,[s("h1",ee,n(o.__("Edit Application Form")),1),r(L,{href:o.route("admin.recruitment.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:u(()=>[s("span",null,n(o.__("Cancel")),1)]),_:1},8,["href"])]),s("div",se,[s("div",oe,[s("div",le,[s("form",{onSubmit:q(F,["prevent"])},[s("div",ie,[s("div",re,[s("div",ae,[s("div",ne,[r(d,{id:"title",modelValue:l(e).title,"onUpdate:modelValue":i[0]||(i[0]=t=>l(e).title=t),label:o.__("Title of this Application"),help:o.__("Eg: Apply to be a Staff Member"),error:l(e).errors.title,type:"text",name:"title","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),s("div",_e,[r(d,{id:"slug",modelValue:l(e).slug,"onUpdate:modelValue":i[1]||(i[1]=t=>l(e).slug=t),label:o.__("Application Slug for URL"),help:o.__("Only alphabet, number and dashes. Eg: apply-to-be-a-staff-member"),error:l(e).errors.slug,type:"text",name:"slug","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),s("div",de,[r(w,{id:"status",modelValue:l(e).status,"onUpdate:modelValue":i[2]||(i[2]=t=>l(e).status=t),name:"status",label:o.__("Application Status"),placeholder:o.__("Select a status of application.."),"disable-null":!0,"select-list":A},null,8,["modelValue","label","placeholder"])]),s("div",me,[P(s("textarea",{id:"description","onUpdate:modelValue":i[3]||(i[3]=t=>l(e).description=t),"aria-label":"description",name:"description",class:"mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[R,l(e).description]]),r(f,{message:l(e).errors.description,class:"mt-2 text-right"},null,8,["message"])]),s("div",ue,[r(d,{id:"max_submission_per_user",modelValue:l(e).max_submission_per_user,"onUpdate:modelValue":i[4]||(i[4]=t=>l(e).max_submission_per_user=t),label:o.__("Max Submission Per User"),help:o.__("How many times a user can reapply after rejection. Leave empty for no limit."),error:l(e).errors.max_submission_per_user,type:"number",name:"max_submission_per_user","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),s("div",pe,[l(e).max_submission_per_user!=1?(p(),g(d,{key:0,id:"submission_cooldown_in_seconds",modelValue:l(e).submission_cooldown_in_seconds,"onUpdate:modelValue":i[5]||(i[5]=t=>l(e).submission_cooldown_in_seconds=t),label:o.__("Submission Cooldown in Seconds"),help:o.__("After how many seconds user can reapply this application. Leave empty for no cooldown."),error:l(e).errors.submission_cooldown_in_seconds,type:"number",name:"submission_cooldown_in_seconds","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])):D("",!0)]),s("div",ce,[r(d,{id:"min_role_weight_to_view_submission",modelValue:l(e).min_role_weight_to_view_submission,"onUpdate:modelValue":i[6]||(i[6]=t=>l(e).min_role_weight_to_view_submission=t),label:o.__("Min Staff Role Weight to View Submission"),help:o.__("Leave empty to allow any staff with [view recruitment_submissions] permission to view submissions."),error:l(e).errors.min_role_weight_to_view_submission,type:"number",name:"min_role_weight_to_view_submission","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),s("div",fe,[r(d,{id:"min_role_weight_to_vote_on_submission",modelValue:l(e).min_role_weight_to_vote_on_submission,"onUpdate:modelValue":i[7]||(i[7]=t=>l(e).min_role_weight_to_vote_on_submission=t),label:o.__("Min Staff Role Weight to Vote on Submission"),help:o.__("Leave empty to allow any staff with [vote recruitment_submissions] permission to vote on submissions."),error:l(e).errors.min_role_weight_to_vote_on_submission,type:"number",name:"min_role_weight_to_vote_on_submission","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),s("div",be,[r(d,{id:"min_role_weight_to_act_on_submission",modelValue:l(e).min_role_weight_to_act_on_submission,"onUpdate:modelValue":i[8]||(i[8]=t=>l(e).min_role_weight_to_act_on_submission=t),label:o.__("Min Staff Role Weight to Act on Submission"),help:o.__("Min staff role weight required to Approve/Reject on submission. Leave empty to allow any staff with [acton recruitment_submissions] permission to act on submissions."),error:l(e).errors.min_role_weight_to_act_on_submission,type:"number",name:"min_role_weight_to_act_on_submission","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),s("div",he,[s("fieldset",null,[s("div",ge,[r(h,{id:"is_allow_messages_from_users",modelValue:l(e).is_allow_messages_from_users,"onUpdate:modelValue":i[9]||(i[9]=t=>l(e).is_allow_messages_from_users=t),label:o.__("Enable Messages Feature"),help:o.__("Enable messages feature for this application. User & Staff will be able to send messages."),name:"is_allow_messages_from_users"},null,8,["modelValue","label","help"])]),r(f,{message:l(e).errors.is_allow_messages_from_users,class:"mt-2"},null,8,["message"])])]),s("div",ye,[s("fieldset",null,[s("div",we,[r(h,{id:"is_notify_staff_on_submission",modelValue:l(e).is_notify_staff_on_submission,"onUpdate:modelValue":i[10]||(i[10]=t=>l(e).is_notify_staff_on_submission=t),label:o.__("Notify Staff on Event"),help:o.__("Notify staff (with view permission) when application created/withdrawn or message from user."),name:"is_notify_staff_on_submission"},null,8,["modelValue","label","help"])]),r(f,{message:l(e).errors.is_notify_staff_on_submission,class:"mt-2"},null,8,["message"])])]),s("div",ve,[s("fieldset",null,[s("div",xe,[r(h,{id:"is_allow_only_player_linked_users",modelValue:l(e).is_allow_only_player_linked_users,"onUpdate:modelValue":i[11]||(i[11]=t=>l(e).is_allow_only_player_linked_users=t),label:o.__("Allow only Player Linked Users"),help:o.__("Allow only users who have linked player to their account to apply."),name:"is_allow_only_player_linked_users"},null,8,["modelValue","label","help"])]),r(f,{message:l(e).errors.is_allow_only_player_linked_users,class:"mt-2"},null,8,["message"])])]),s("div",Ve,[s("fieldset",null,[s("div",ke,[r(h,{id:"is_allow_only_verified_users",modelValue:l(e).is_allow_only_verified_users,"onUpdate:modelValue":i[12]||(i[12]=t=>l(e).is_allow_only_verified_users=t),label:o.__("Allow only Verified Users"),help:o.__("Allow only verified users to apply for this application."),name:"is_allow_only_verified_users"},null,8,["modelValue","label","help"])]),r(f,{message:l(e).errors.is_allow_only_verified_users,class:"mt-2"},null,8,["message"])])]),s("div",Ue,[r(w,{id:"related_role_id",modelValue:l(e).related_role_id,"onUpdate:modelValue":i[13]||(i[13]=t=>l(e).related_role_id=t),name:"related_role_id",label:o.__("This Application is Hiring for"),placeholder:o.__("Not Applicable (None)"),"disable-null":!1,"select-list":v.roles,help:o.__("If this application is for hiring of a specific role, select the role here.")},null,8,["modelValue","label","placeholder","select-list","help"])]),s("div",Ae,[s("legend",Fe,n(o.__("Fields")),1),s("div",Se,[s("div",Ce,[Ee,s("label",$e,[c(n(o.__("Name"))+" ",1),Le]),s("label",Me,[c(n(o.__("Type"))+" ",1),je]),s("label",Ne,n(o.__("Validation")),1),s("label",Oe,n(o.__("Help Text")),1),s("label",Te,[c(n(o.__("Options"))+" ",1),qe,Pe])]),(p(!0),y(B,null,X(l(e).fields,(t,_)=>(p(),y("div",{key:_,class:"flex space-x-4"},[s("button",{type:"button",class:"focus:outline-none group",onClick:m=>C(_)},[r(z,{class:"w-5 h-5 text-gray-300 group-hover:text-red-500",name:"trash"})],8,Re),s("div",De,[r(d,{modelValue:t.label,"onUpdate:modelValue":m=>t.label=m,label:o.__("Name Field :index",{index:_+1}),error:l(e).errors[`fields.${_}.label`]||l(e).errors[`fields.${_}.name`],type:"text","help-error-flex":"flex-col",required:!0},null,8,["modelValue","onUpdate:modelValue","label","error"])]),s("div",Xe,[r(w,{modelValue:t.type,"onUpdate:modelValue":m=>t.type=m,label:o.__("Page Type"),error:l(e).errors[`fields.${_}.type`],"help-error-flex":"flex-col","select-list":Object.keys(x),required:!0},null,8,["modelValue","onUpdate:modelValue","label","error","select-list"])]),s("div",Be,[r(d,{modelValue:t.validation,"onUpdate:modelValue":m=>t.validation=m,label:o.__("Validation Field :index",{index:_+1}),error:l(e).errors[`fields.${_}.validation`],type:"text","help-error-flex":"flex-col"},null,8,["modelValue","onUpdate:modelValue","label","error"])]),s("div",He,[r(d,{modelValue:t.help,"onUpdate:modelValue":m=>t.help=m,label:o.__("Help Text Field :index",{index:_+1}),error:l(e).errors[`fields.${_}.help`],type:"text","help-error-flex":"flex-col"},null,8,["modelValue","onUpdate:modelValue","label","error"])]),s("div",Ie,[x[t.type].hasOptions?(p(),g(d,{key:0,modelValue:t.options,"onUpdate:modelValue":m=>t.options=m,label:o.__("Options Field :index",{index:_+1}),error:l(e).errors[`fields.${_}.options`],type:"text","help-error-flex":"flex-col",required:!0},null,8,["modelValue","onUpdate:modelValue","label","error"])):(p(),y("div",We," - "))])]))),128)),s("div",Ke,[s("button",{type:"button",class:"p-1.5 text-xs text-light-blue-500 rounded border border-light-blue-500 focus:outline-none hover:text-light-blue-300 hover:border-light-blue-300 transition ease-in-out duration-150",onClick:S},n(o.__("Add New Field")),1)])])])])]),s("div",ze,[r(U,{class:"inline-flex justify-center py-2 px-4 border border-gray-200 shadow-sm text-sm font-medium rounded-md text-gray-600 bg-gray-50 hover:bg-white disabled:opacity-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:border-gray-600",type:"button",onClick:i[14]||(i[14]=t=>b.value=!0)},{default:u(()=>[c(n(o.__("Preview Form")),1)]),_:1}),r(U,{loading:l(e).processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:u(()=>[c(n(o.__("Update Application Form")),1)]),_:1},8,["loading"])])])],40,te)])])]),r(G,{show:b.value,onClose:i[16]||(i[16]=t=>b.value=!1)},{title:u(()=>[s("h3",Ge,n(o.__("Form Preview")),1)]),content:u(()=>[r(l(H),{schema:E.value},null,8,["schema"])]),footer:u(()=>[r(J,{onClick:i[15]||(i[15]=t=>b.value=!1)},{default:u(()=>[c(n(o.__("Close")),1)]),_:1})]),_:1},8,["show"])])]),_:1})}}};export{bs as default};
