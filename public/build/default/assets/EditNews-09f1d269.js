import{_ as k}from"./InputError-3eff692a.js";import{_ as P}from"./SecondaryButton-2e4cf60f.js";import{L as N}from"./LoadingButton-b2be779b.js";import{X as V}from"./XInput-7bbb2115.js";import{E}from"./easymde-8d469b7c.js";import{X as C}from"./XSelect-5a367d80.js";import{T as j,l,o as U,c as A,w as c,b as i,a as e,t as n,i as u,j as m,v as D,m as M,p as S,f as _,Q as p}from"./app-87ee86a0.js";import{_ as L}from"./AdminLayout-ac8a2ff9.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import"./AppLayout-0d1451ad.js";import"./Icon-a0b9d412.js";import"./useAuthorizable-b419fead.js";import"./use-resolve-button-type-2f64af67.js";import"./open-closed-4a951f7a.js";import"./CloudArrowDownIcon-b5c4422d.js";import"./index-e4c90479.js";const T={components:{AdminLayout:L,XSelect:C,JetInputError:k,LoadingButton:N,JetSecondaryButton:P,XInput:V},props:{news:Object},data(){return{form:j({title:this.news.title,body:this.news.body,type:this.news.type.value,is_published:!!this.news.published_at,is_pinned:this.news.is_pinned,is_commentable:this.news.is_commentable,photo:null,_method:"PUT"}),photoPreview:null,easyMDE:null}},mounted(){this.easyMDE=new E({previewClass:"editor-preview prose max-w-none"})},methods:{addNews(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.body=this.easyMDE.value(),this.form.post(route("admin.news.update",this.news.id),{})},updatePhotoPreview(){const o=new FileReader;o.onload=t=>{this.photoPreview=t.target.result},o.readAsDataURL(this.$refs.photo.files[0])},selectNewPhoto(){this.$refs.photo.click()}}},I={class:"py-12 px-10 max-w-6xl mx-auto"},X={class:"flex justify-between mb-8"},z={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},J={class:"mt-10 sm:mt-0"},O={class:"mt-5 md:mt-0"},R={class:"shadow overflow-hidden sm:rounded-md"},F={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},G={class:"grid grid-cols-6 gap-6"},Q={class:"col-span-6 sm:col-span-6"},q={class:"col-span-6 sm:col-span-6"},H={class:"col-span-6 sm:col-span-6"},K={class:"col-span-6 sm:col-span-3"},W={for:"photo",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},Y={class:"mt-2"},Z={class:"flex items-center col-span-6 sm:col-span-3"},$={class:"text-base font-medium text-gray-900 dark:text-gray-400"},ee={class:"mt-4 flex space-x-4"},se={class:"flex items-start"},oe={class:"flex items-center h-5"},te={class:"ml-3 text-sm"},re={for:"is_published",class:"font-medium text-gray-700 dark:text-gray-300"},ie={class:"flex items-start"},ne={class:"flex items-center h-5"},le={class:"ml-3 text-sm"},de={for:"is_pinned",class:"font-medium text-gray-700 dark:text-gray-300"},ae={class:"flex items-start"},me={class:"flex items-center h-5"},ce={class:"ml-3 text-sm"},pe={for:"is_commentable",class:"font-medium text-gray-700 dark:text-gray-300"},ue={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"};function _e(o,t,h,he,s,d){const f=l("app-head"),b=l("inertia-link"),g=l("x-select"),y=l("x-input"),a=l("jet-input-error"),w=l("jet-secondary-button"),x=l("loading-button"),v=l("AdminLayout");return U(),A(v,null,{default:c(()=>[i(f,{title:`Edit News #${h.news.id}`},null,8,["title"]),e("div",I,[e("div",X,[e("h1",z,n(o.__("Edit News")),1),i(b,{href:o.route("admin.news.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:c(()=>[e("span",null,n(o.__("Cancel")),1)]),_:1},8,["href"])]),e("div",J,[e("div",O,[e("form",{onSubmit:t[7]||(t[7]=u((...r)=>d.addNews&&d.addNews(...r),["prevent"]))},[e("div",R,[e("div",F,[e("div",G,[e("div",Q,[i(g,{id:"type",modelValue:s.form.type,"onUpdate:modelValue":t[0]||(t[0]=r=>s.form.type=r),name:"type",error:s.form.errors.type,label:o.__("News Category"),"select-list":{0:o.__("General"),1:o.__("Announcement"),2:o.__("Event")}},null,8,["modelValue","error","label","select-list"])]),e("div",q,[i(y,{id:"title",modelValue:s.form.title,"onUpdate:modelValue":t[1]||(t[1]=r=>s.form.title=r),label:o.__("Title"),error:s.form.errors.title,type:"text",name:"title","help-error-flex":"flex-row"},null,8,["modelValue","label","error"])]),e("div",H,[m(e("textarea",{id:"body","onUpdate:modelValue":t[2]||(t[2]=r=>s.form.body=r),"aria-label":"body",name:"body",class:"mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[D,s.form.body]]),i(a,{message:s.form.errors.body,class:"mt-2"},null,8,["message"])]),e("div",K,[e("input",{id:"photo",ref:"photo",type:"file",class:"hidden",onChange:t[3]||(t[3]=(...r)=>d.updatePhotoPreview&&d.updatePhotoPreview(...r))},null,544),e("label",W,n(o.__("Image")),1),m(e("div",Y,[e("span",{class:"block rounded w-48 h-32",style:S("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+s.photoPreview+"');")},null,4)],512),[[M,s.photoPreview]]),i(w,{class:"mt-2 mr-2",type:"button",onClick:u(d.selectNewPhoto,["prevent"])},{default:c(()=>[_(n(o.__("Select A New Image")),1)]),_:1},8,["onClick"]),i(a,{message:s.form.errors.photo,class:"mt-2"},null,8,["message"])]),e("div",Z,[e("fieldset",null,[e("legend",$,n(o.__("Options")),1),e("div",ee,[e("div",se,[e("div",oe,[m(e("input",{id:"is_published","onUpdate:modelValue":t[4]||(t[4]=r=>s.form.is_published=r),name:"is_published",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 rounded dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[p,s.form.is_published]])]),e("div",te,[e("label",re,n(o.__("Published")),1)])]),e("div",ie,[e("div",ne,[m(e("input",{id:"is_pinned","onUpdate:modelValue":t[5]||(t[5]=r=>s.form.is_pinned=r),name:"is_pinned",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 rounded dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[p,s.form.is_pinned]])]),e("div",le,[e("label",de,n(o.__("Pinned")),1)])]),e("div",ae,[e("div",me,[m(e("input",{id:"is_commentable","onUpdate:modelValue":t[6]||(t[6]=r=>s.form.is_commentable=r),name:"is_commentable",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 rounded dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[p,s.form.is_commentable]])]),e("div",ce,[e("label",pe,n(o.__("Allow Comments")),1)])])]),i(a,{message:s.form.errors.is_pinned,class:"mt-2"},null,8,["message"]),i(a,{message:s.form.errors.is_published,class:"mt-2"},null,8,["message"]),i(a,{message:s.form.errors.is_commentable,class:"mt-2"},null,8,["message"])])])])]),e("div",ue,[i(x,{loading:s.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:c(()=>[_(n(o.__("Update News")),1)]),_:1},8,["loading"])])])],32)])])])]),_:1})}const De=B(T,[["render",_e]]);export{De as default};
