import{_ as k}from"./SecondaryButton-2e4cf60f.js";import{L as x}from"./LoadingButton-b2be779b.js";import{X as w}from"./XInput-7bbb2115.js";import{X as B}from"./XCheckbox-69f7e96f.js";import{_ as V}from"./InputError-3eff692a.js";import{T as P,l as i,o as S,c as j,w as d,b as a,a as e,t as n,f as m,i as p,j as E,m as I,p as N}from"./app-87ee86a0.js";import{_ as U}from"./AdminLayout-ac8a2ff9.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import"./AppLayout-0d1451ad.js";import"./Icon-a0b9d412.js";import"./useAuthorizable-b419fead.js";import"./use-resolve-button-type-2f64af67.js";import"./open-closed-4a951f7a.js";import"./CloudArrowDownIcon-b5c4422d.js";import"./index-e4c90479.js";const C={components:{AdminLayout:U,JetInputError:V,LoadingButton:x,JetSecondaryButton:k,XInput:w,XCheckbox:B},props:{badge:Object},data(){return{form:P({name:this.badge.name,shortname:this.badge.shortname,sort_order:this.badge.sort_order,is_sticky:this.badge.is_sticky,photo:null,_method:"PUT"}),photoPreview:null}},methods:{updateBadge(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.post(route("admin.badge.update",this.badge.id),{preserveScroll:!0})},updatePhotoPreview(){const o=new FileReader;o.onload=s=>{this.photoPreview=s.target.result},o.readAsDataURL(this.$refs.photo.files[0])},selectNewPhoto(){this.$refs.photo.click()}}},L={class:"max-w-6xl px-10 py-12 mx-auto"},T={class:"flex justify-between mb-8"},D={class:"text-3xl font-bold text-gray-500 dark:text-gray-300"},X={class:"mt-10 sm:mt-0"},M={class:"md:grid md:grid-cols-3 md:gap-6"},O={class:"md:col-span-1"},z={class:"px-4 sm:px-0"},J={class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"},R={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},q=e("br",null,null,-1),F={class:"mt-3 text-sm text-gray-600 dark:text-gray-500"},Y={class:"mt-5 md:mt-0 md:col-span-2"},G={class:"overflow-hidden shadow sm:rounded-md"},H={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},K={class:"grid grid-cols-6 gap-6"},Q={class:"col-span-6 sm:col-span-4"},W={class:"col-span-6 sm:col-span-2"},Z={class:"col-span-6 sm:col-span-3"},$={class:"flex items-center col-span-6 sm:col-span-3"},ee={class:"col-span-6 sm:col-span-6"},oe={for:"badge_img",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},te={class:"mt-2"},se={class:"flex justify-end px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6"};function re(o,s,_,ae,t,l){const u=i("app-head"),g=i("inertia-link"),c=i("x-input"),h=i("x-checkbox"),f=i("jet-secondary-button"),b=i("jet-input-error"),y=i("loading-button"),v=i("AdminLayout");return S(),j(v,null,{default:d(()=>[a(u,{title:`Edit Badge: #${_.badge.id}`},null,8,["title"]),e("div",L,[e("div",T,[e("h1",D,n(o.__("Edit Badge")),1),a(g,{href:o.route("admin.badge.index"),class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-400 border border-transparent rounded-md dark:bg-gray-600 hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray"},{default:d(()=>[e("span",null,n(o.__("Cancel")),1)]),_:1},8,["href"])]),e("div",X,[e("div",M,[e("div",O,[e("div",z,[e("h3",J,n(o.__("Overview")),1),e("p",R,[m(n(o.__("Badges are something you assign to users for some achievements.")),1),q,m(n(o.__("Eg: You can create a badge for Special User, Top Donator, Most Active etc.")),1)]),e("p",F,n(o.__("By default badges are marked non sticky. Means it will only show when you visit user's profile page. If you want the badge to always display beside username tick the 'Is Sticky' checkbox.")),1)])]),e("div",Y,[e("form",{onSubmit:s[5]||(s[5]=p((...r)=>l.updateBadge&&l.updateBadge(...r),["prevent"]))},[e("div",G,[e("div",H,[e("div",K,[e("div",Q,[a(c,{id:"name",modelValue:t.form.name,"onUpdate:modelValue":s[0]||(s[0]=r=>t.form.name=r),label:o.__("Badge Name"),help:o.__("Eg: Special"),error:t.form.errors.name,type:"text",name:"name"},null,8,["modelValue","label","help","error"])]),e("div",W,[a(c,{id:"shortname",modelValue:t.form.shortname,"onUpdate:modelValue":s[1]||(s[1]=r=>t.form.shortname=r),label:o.__("Short Name"),help:o.__("Eg: special"),error:t.form.errors.shortname,type:"text",name:"shortname"},null,8,["modelValue","label","help","error"])]),e("div",Z,[a(c,{id:"sort_order",modelValue:t.form.sort_order,"onUpdate:modelValue":s[2]||(s[2]=r=>t.form.sort_order=r),label:o.__("Sort Order"),error:t.form.errors.sort_order,type:"number",name:"sort_order"},null,8,["modelValue","label","error"])]),e("div",$,[a(h,{id:"is_sticky",modelValue:t.form.is_sticky,"onUpdate:modelValue":s[3]||(s[3]=r=>t.form.is_sticky=r),label:o.__("Is Sticky"),help:o.__("Tick if you want this badge to always appear with username"),name:"is_sticky",error:t.form.errors.is_sticky},null,8,["modelValue","label","help","error"])]),e("div",ee,[e("input",{id:"badge_img",ref:"photo",type:"file",class:"hidden",onChange:s[4]||(s[4]=(...r)=>l.updatePhotoPreview&&l.updatePhotoPreview(...r))},null,544),e("label",oe,n(o.__("Badge Icon Image (A small square(Eg: 50x50) image is recomended)")),1),E(e("div",te,[e("span",{class:"block w-20 h-20",style:N("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+t.photoPreview+"');")},null,4)],512),[[I,t.photoPreview]]),a(f,{class:"mt-2 mr-2",type:"button",onClick:p(l.selectNewPhoto,["prevent"])},{default:d(()=>[m(n(o.__("Select A New Image")),1)]),_:1},8,["onClick"]),a(b,{message:t.form.errors.photo,class:"mt-2"},null,8,["message"])])])]),e("div",se,[a(y,{loading:t.form.processing,class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:d(()=>[m(n(o.__("Update Badge")),1)]),_:1},8,["loading"])])])],32)])])])])]),_:1})}const ke=A(C,[["render",re]]);export{ke as default};
