import{v as U,r as f,c as w,w as a,o as d,f as n,d as S,a as l,b as o,k as p,A as v,B as j,h,e as _,u as t,i as A,n as E,O as F}from"./app-c5d3c7da.js";import{_ as O}from"./ActionMessage-6ee4b4ca.js";import{_ as R}from"./FormSection-4e444a5f.js";import{a as g,_ as V}from"./TextInput-b65c1c95.js";import{_ as k}from"./InputLabel-4083862f.js";import{_ as z}from"./PrimaryButton-b39bf627.js";import{_ as C}from"./SecondaryButton-39383897.js";import"./SectionTitle-32c76e0b.js";import"./_plugin-vue_export-helper-c27b6911.js";const D={key:0,class:"col-span-6 sm:col-span-4"},L={class:"mt-2"},T=["src","alt"],M={class:"mt-2"},Y={class:"col-span-6 sm:col-span-4"},q={class:"col-span-6 sm:col-span-4"},G={key:0},H={class:"text-sm mt-2"},J={class:"mt-2 font-medium text-sm text-green-600"},ae={__name:"UpdateProfileInformationForm",props:{user:Object},setup(c){const y=c,e=U({_method:"PUT",name:y.user.name,email:y.user.email,photo:null}),b=f(null),u=f(null),r=f(null),$=()=>{r.value&&(e.photo=r.value.files[0]),e.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>P()})},x=()=>{b.value=!0},I=()=>{r.value.click()},N=()=>{const s=r.value.files[0];if(!s)return;const i=new FileReader;i.onload=m=>{u.value=m.target.result},i.readAsDataURL(s)},B=()=>{F.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{u.value=null,P()}})},P=()=>{var s;(s=r.value)!=null&&s.value&&(r.value.value=null)};return(s,i)=>(d(),w(R,{onSubmitted:$},{title:a(()=>[n(" Profile Information ")]),description:a(()=>[n(" Update your account's profile information and email address. ")]),form:a(()=>[s.$page.props.jetstream.managesProfilePhotos?(d(),S("div",D,[l("input",{ref_key:"photoInput",ref:r,type:"file",class:"hidden",onChange:N},null,544),o(k,{for:"photo",value:"Photo"}),p(l("div",L,[l("img",{src:c.user.profile_photo_url,alt:c.user.name,class:"rounded-full h-20 w-20 object-cover"},null,8,T)],512),[[v,!u.value]]),p(l("div",M,[l("span",{class:"block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",style:j("background-image: url('"+u.value+"');")},null,4)],512),[[v,u.value]]),o(C,{class:"mt-2 mr-2",type:"button",onClick:h(I,["prevent"])},{default:a(()=>[n(" Select A New Photo ")]),_:1},8,["onClick"]),c.user.profile_photo_path?(d(),w(C,{key:0,type:"button",class:"mt-2",onClick:h(B,["prevent"])},{default:a(()=>[n(" Remove Photo ")]),_:1},8,["onClick"])):_("",!0),o(g,{message:t(e).errors.photo,class:"mt-2"},null,8,["message"])])):_("",!0),l("div",Y,[o(k,{for:"name",value:"Name"}),o(V,{id:"name",modelValue:t(e).name,"onUpdate:modelValue":i[0]||(i[0]=m=>t(e).name=m),type:"text",class:"mt-1 block w-full",autocomplete:"name"},null,8,["modelValue"]),o(g,{message:t(e).errors.name,class:"mt-2"},null,8,["message"])]),l("div",q,[o(k,{for:"email",value:"Email"}),o(V,{id:"email",modelValue:t(e).email,"onUpdate:modelValue":i[1]||(i[1]=m=>t(e).email=m),type:"email",class:"mt-1 block w-full",autocomplete:"username"},null,8,["modelValue"]),o(g,{message:t(e).errors.email,class:"mt-2"},null,8,["message"]),s.$page.props.jetstream.hasEmailVerification&&c.user.email_verified_at===null?(d(),S("div",G,[l("p",H,[n(" Your email address is unverified. "),o(t(A),{href:s.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:h(x,["prevent"])},{default:a(()=>[n(" Click here to re-send the verification email. ")]),_:1},8,["href","onClick"])]),p(l("div",J," A new verification link has been sent to your email address. ",512),[[v,b.value]])])):_("",!0)])]),actions:a(()=>[o(O,{on:t(e).recentlySuccessful,class:"mr-3"},{default:a(()=>[n(" Saved. ")]),_:1},8,["on"]),o(z,{class:E({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:a(()=>[n(" Save ")]),_:1},8,["class","disabled"])]),_:1}))}};export{ae as default};
