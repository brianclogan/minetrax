import{_ as v}from"./InputError-3eff692a.js";import{_ as w}from"./SecondaryButton-2e4cf60f.js";import{L as x}from"./LoadingButton-b2be779b.js";import{X as V}from"./XInput-7bbb2115.js";import{X as P}from"./XTextarea-b2b6afcc.js";import{T as S,l as i,o as N,c as R,w as m,b as n,a as e,t as a,f as p,i as _,j,m as E,p as L}from"./app-87ee86a0.js";import{_ as C}from"./AdminLayout-ac8a2ff9.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import"./AppLayout-0d1451ad.js";import"./Icon-a0b9d412.js";import"./useAuthorizable-b419fead.js";import"./use-resolve-button-type-2f64af67.js";import"./open-closed-4a951f7a.js";import"./CloudArrowDownIcon-b5c4422d.js";import"./index-e4c90479.js";const T={components:{AdminLayout:C,XTextarea:P,JetInputError:v,LoadingButton:x,JetSecondaryButton:w,XInput:V},props:{rank:Object},data(){return{form:S({name:this.rank.name,shortname:this.rank.shortname,description:this.rank.description,total_score_needed:this.rank.total_score_needed,total_play_time_needed:this.rank.total_play_time_needed,photo:null,_method:"PUT"}),photoPreview:null}},methods:{updateRank(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.post(route("admin.rank.update",this.rank.id),{preserveScroll:!0})},updatePhotoPreview(){const o=new FileReader;o.onload=r=>{this.photoPreview=r.target.result},o.readAsDataURL(this.$refs.photo.files[0])},selectNewPhoto(){this.$refs.photo.click()}}},A={class:"py-12 px-10 max-w-6xl mx-auto"},B={class:"flex justify-between mb-8"},I={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},D={class:"mt-10 sm:mt-0"},X={class:"md:grid md:grid-cols-3 md:gap-6"},M={class:"md:col-span-1"},z={class:"px-4 sm:px-0"},J={class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"},O={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},F=e("br",null,null,-1),K={class:"mt-3 text-sm text-gray-600 dark:text-gray-500"},W={class:"mt-3 text-sm text-gray-600 dark:text-gray-500"},q={class:"mt-5 md:mt-0 md:col-span-2"},G={class:"shadow overflow-hidden sm:rounded-md"},H={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},Q={class:"grid grid-cols-6 gap-6"},Y={class:"col-span-6 sm:col-span-4"},Z={class:"col-span-6 sm:col-span-2"},$={class:"col-span-6 sm:col-span-3"},ee={class:"col-span-6 sm:col-span-3"},oe={class:"col-span-6 sm:col-span-2"},te={for:"photo",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},re={class:"mt-2"},se={class:"col-span-6 sm:col-span-4"},ne={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"};function ae(o,r,c,ie,t,l){const u=i("app-head"),h=i("inertia-link"),d=i("x-input"),f=i("jet-secondary-button"),g=i("jet-input-error"),y=i("x-textarea"),b=i("loading-button"),k=i("AdminLayout");return N(),R(k,null,{default:m(()=>[n(u,{title:o.__("Edit Rank - :name",{name:c.rank.name})},null,8,["title"]),e("div",A,[e("div",B,[e("h1",I,a(o.__("Edit Rank")),1),n(h,{href:o.route("admin.rank.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:m(()=>[e("span",null,a(o.__("Cancel")),1)]),_:1},8,["href"])]),e("div",D,[e("div",X,[e("div",M,[e("div",z,[e("h3",J,a(o.__("Overview")),1),e("p",O,[p(a(o.__("Ranks are assigned to players when a given criteria is matched, eg: play time, score etc.")),1),F,p(a(o.__("Play Time Need should be provided in Seconds. So if you want to add criteria to give rank if player played at-least 1 minute then you write 60")),1)]),e("p",K,a(o.__("Each rank is sorted according to its weight. More the score and time is more the weight.")),1),e("p",W,a(o.__("If you instead want to sync player rank from server to web, you can do that too from Settings -> Player Settings. Currently Luckperms is supported. Make sure to have same Short Name for rank name what you have chosen in Luckperms. While rank sync is enabled the criteria like score and time will be ignored but while adding ranks it is recommended to enter something in them so web know which rank has more weight.")),1)])]),e("div",q,[e("form",{enctype:"multipart/form-data",onSubmit:r[6]||(r[6]=_((...s)=>l.updateRank&&l.updateRank(...s),["prevent"]))},[e("div",G,[e("div",H,[e("div",Q,[e("div",Y,[n(d,{id:"name",modelValue:t.form.name,"onUpdate:modelValue":r[0]||(r[0]=s=>t.form.name=s),label:o.__("Rank Name"),help:o.__("Eg: Knight"),error:t.form.errors.name,type:"text",name:"name"},null,8,["modelValue","label","help","error"])]),e("div",Z,[n(d,{id:"shortname",modelValue:t.form.shortname,"onUpdate:modelValue":r[1]||(r[1]=s=>t.form.shortname=s),label:o.__("Short Name"),help:o.__("Eg: knight"),error:t.form.errors.shortname,type:"text",name:"shortname"},null,8,["modelValue","label","help","error"])]),e("div",$,[n(d,{id:"total_score_needed",modelValue:t.form.total_score_needed,"onUpdate:modelValue":r[2]||(r[2]=s=>t.form.total_score_needed=s),label:o.__("Score Needed"),error:t.form.errors.total_score_needed,type:"number",name:"total_score_needed"},null,8,["modelValue","label","error"])]),e("div",ee,[n(d,{id:"total_play_time_needed",modelValue:t.form.total_play_time_needed,"onUpdate:modelValue":r[3]||(r[3]=s=>t.form.total_play_time_needed=s),label:o.__("Play Time Needed"),error:t.form.errors.total_play_time_needed,type:"number",name:"total_play_time_needed"},null,8,["modelValue","label","error"])]),e("div",oe,[e("input",{id:"photo",ref:"photo",type:"file",class:"hidden",onChange:r[4]||(r[4]=(...s)=>l.updatePhotoPreview&&l.updatePhotoPreview(...s))},null,544),e("label",te,a(o.__("Rank Image")),1),j(e("div",re,[e("span",{class:"block h-20",style:L("background-repeat: no-repeat; background-size: contain; background-image: url('"+t.photoPreview+"');")},null,4)],512),[[E,t.photoPreview]]),n(f,{class:"mt-2 mr-2",type:"button",onClick:_(l.selectNewPhoto,["prevent"])},{default:m(()=>[p(a(o.__("Select A New Image")),1)]),_:1},8,["onClick"]),n(g,{message:t.form.errors.photo,class:"mt-2"},null,8,["message"])]),e("div",se,[n(y,{id:"description",modelValue:t.form.description,"onUpdate:modelValue":r[5]||(r[5]=s=>t.form.description=s),rows:10,label:o.__("Description"),error:t.form.errors.description,name:"description"},null,8,["modelValue","label","error"])])])]),e("div",ne,[n(b,{loading:t.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:m(()=>[p(a(o.__("Edit Rank")),1)]),_:1},8,["loading"])])])],32)])])])])]),_:1})}const xe=U(T,[["render",ae]]);export{xe as default};
