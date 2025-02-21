"use strict";exports.id=589,exports.ids=[589],exports.modules={9494:(e,t,s)=>{s.d(t,{default:()=>n});var r=s(5512),a=s(2414),l=s(9334);function n(){let e=(0,l.useRouter)(),t=[{icon:(0,r.jsx)(a.Cab,{className:"text-green-500 text-4xl"}),title:"Call Us Anytime",description:"Get in touch with our team for inquiries and support.",buttonLink:"/quote"},{icon:(0,r.jsx)(a.maD,{className:"text-green-500 text-4xl"}),title:"Email Support",description:"Reach out via email for quick responses and assistance.",buttonLink:"/contact"},{icon:(0,r.jsx)(a.vq8,{className:"text-green-500 text-4xl"}),title:"Visit Our Office",description:"Meet us in person at our office for consultations.",buttonLink:"/contact"},{icon:(0,r.jsx)(a.x$1,{className:"text-green-500 text-4xl"}),title:"Customer Service",description:"We are dedicated to providing top-notch customer service.",buttonLink:"/contact"}];return(0,r.jsxs)("div",{className:"relative text-white py-20 px-4 md:px-16 bg-cover bg-center",style:{backgroundImage:"url('https://images.pexels.com/photos/7407312/pexels-photo-7407312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"},children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-[#253745e6] opacity-90"}),(0,r.jsxs)("div",{className:"relative flex flex-col md:flex-row justify-between items-center text-center md:text-left",children:[(0,r.jsxs)("div",{className:"md:w-2/5",children:[(0,r.jsx)("span",{className:"text-green-500 text-sm uppercase font-bold",children:"Get in Touch with Us"}),(0,r.jsx)("h2",{className:"text-3xl md:text-5xl font-bold mt-4",children:"Reach Out for the Best Renewable Energy Solutions Today"})]}),(0,r.jsxs)("div",{className:"md:w-1/2 mt-6 md:mt-0",children:[(0,r.jsx)("p",{className:"text-gray-300 mb-4",children:"Our team is here to provide expert solutions and personalized support. Contact us to explore the best options for your energy needs."}),(0,r.jsx)("p",{className:"text-gray-300 mb-6",children:"Whether you re looking for consultation or project execution, we have the experience and knowledge to help you transition to sustainable energy."}),(0,r.jsxs)("div",{className:"flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4",children:[(0,r.jsx)("button",{onClick:()=>e.push("/about"),className:"bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600 w-full md:w-auto",children:"Get Started"}),(0,r.jsx)("button",{className:"bg-gray-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-600 w-full md:w-auto",children:"Our Plans"})]})]})]}),(0,r.jsx)("div",{className:"relative flex justify-center mt-16 overflow-hidden",children:(0,r.jsx)("div",{className:"flex overflow-x-auto space-x-6 px-4 md:px-0 snap-x snap-mandatory",children:t.map((t,s)=>(0,r.jsxs)("div",{className:"w-80 bg-white p-6 flex justify-center rounded-lg text-black shadow-lg border-t-4 border-green-500 flex flex-col items-center text-center snap-center flex-shrink-0",children:[t.icon,(0,r.jsx)("h3",{className:"text-xl font-bold mt-4",children:t.title}),(0,r.jsx)("p",{className:"text-gray-600 mt-2",children:t.description}),(0,r.jsx)("button",{onClick:()=>e.push(t.buttonLink),className:"mt-4 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600",children:(0,r.jsx)(a.Z0P,{})})]},s))})})]})}},1357:(e,t,s)=>{s.d(t,{default:()=>d});var r=s(5512),a=s(2414),l=s(8009),n=s(8531),o=s.n(n),i=s(772);function d(){(0,i.y)();let[e,t]=(0,l.useState)([]),[s,n]=(0,l.useState)(!1),[d,c]=(0,l.useState)(!1),[x,m]=(0,l.useState)(null),u=e=>{m(x===e?null:e)};return(0,r.jsxs)("nav",{className:`w-full bg-white shadow-md px-6 py-4 flex items-center justify-between border-b border-gray-300 transition-all duration-300 z-50
        ${d?"fixed top-0 left-0 animate-slideDown shadow-lg":"relative"}`,children:[(0,r.jsxs)("div",{className:"flex items-center space-x-6",children:[(0,r.jsxs)("div",{className:"text-5xl font-bold flex items-center",children:[(0,r.jsx)("span",{className:"text-black",children:"D"}),(0,r.jsx)("span",{className:"text-green-500",children:"E"})]}),(0,r.jsx)("ul",{className:"hidden md:flex space-x-6 text-gray-700 font-medium",children:e.map(e=>(0,r.jsxs)("li",{className:"relative",children:[e.dropdown.length>0?(0,r.jsxs)("button",{onClick:()=>u(e.name),className:"flex items-center hover:text-green-500 focus:outline-none",children:[e.name," ",(0,r.jsx)(a.Vr3,{className:"ml-1 text-gray-500 text-sm"})]}):(0,r.jsx)(o(),{href:e.path,className:"hover:text-green-500",children:e.name}),x===e.name&&e.dropdown&&(0,r.jsx)("ul",{className:"absolute left-0 mt-2 bg-white shadow-md rounded-md w-40 text-gray-700 z-50",children:e.dropdown.map(e=>(0,r.jsx)("li",{className:"px-4 py-2 hover:bg-gray-100",children:(0,r.jsx)(o(),{href:e.path,children:e.name})},e.name))})]},e.name))})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-5",children:[(0,r.jsx)(a.KSO,{className:"hidden md:block text-gray-600 cursor-pointer hover:text-green-500"}),(0,r.jsx)(o(),{href:"/quote",className:"hidden md:block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600",children:"Request Quote"}),(0,r.jsx)("button",{className:"md:hidden text-2xl text-gray-700",onClick:()=>n(!s),children:"☰"})]}),s&&(0,r.jsxs)("div",{className:"absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden z-50",children:[e.map(e=>(0,r.jsxs)("div",{className:"w-full text-center",children:[e.dropdown.length>0?(0,r.jsxs)("button",{onClick:()=>u(e.name),className:"flex items-center justify-center w-full hover:text-green-500 focus:outline-none",children:[e.name," ",(0,r.jsx)(a.Vr3,{className:"ml-1 text-gray-500 text-sm"})]}):(0,r.jsx)(o(),{href:e.path,className:"hover:text-green-500",children:e.name}),x===e.name&&e.dropdown&&(0,r.jsx)("ul",{className:"w-full bg-white shadow-md rounded-md text-gray-700",children:e.dropdown.map(e=>(0,r.jsx)("li",{className:"px-4 py-2 hover:bg-gray-100",children:(0,r.jsx)(o(),{href:e.path,children:e.name})},e.name))})]},e.name)),(0,r.jsx)(o(),{href:"/quote",className:"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600",children:"Request Quote"})]})]})}},5976:(e,t,s)=>{s.d(t,{default:()=>n});var r=s(5512),a=s(9334),l=s(2414);function n(){let e=(0,a.useRouter)();return(0,r.jsxs)("div",{className:"relative text-white py-20 px-6 md:px-20 bg-cover bg-center",style:{backgroundImage:"url('https://images.pexels.com/photos/5115946/pexels-photo-5115946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"},children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-green-500 opacity-90"}),(0,r.jsxs)("div",{className:"relative flex flex-col md:flex-row justify-between items-center",children:[(0,r.jsxs)("div",{className:"md:w-1/2",children:[(0,r.jsx)("span",{className:"text-sm font-bold uppercase",children:"Your Trusted Energy Partner"}),(0,r.jsx)("h2",{className:"text-3xl md:text-4xl font-bold mt-4",children:"Reliable, Sustainable, and Affordable Energy Solutions"}),(0,r.jsx)("p",{className:"text-gray-200 mt-4",children:"We provide innovative energy solutions tailored to meet your needs while ensuring sustainability and efficiency."}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[(0,r.jsxs)("div",{className:"flex items-center bg-gray-700 text-white p-3 rounded-md",children:[(0,r.jsx)(l.CMH,{className:"text-green-400 mr-2"})," Eco-Friendly Solutions"]}),(0,r.jsxs)("div",{className:"flex items-center bg-gray-700 text-white p-3 rounded-md",children:[(0,r.jsx)(l.CMH,{className:"text-green-400 mr-2"})," Cost-Effective Energy"]}),(0,r.jsxs)("div",{className:"flex items-center bg-gray-700 text-white p-3 rounded-md",children:[(0,r.jsx)(l.CMH,{className:"text-green-400 mr-2"})," High Efficiency"]}),(0,r.jsxs)("div",{className:"flex items-center bg-gray-700 text-white p-3 rounded-md",children:[(0,r.jsx)(l.CMH,{className:"text-green-400 mr-2"})," Reliable Supply"]}),(0,r.jsxs)("div",{className:"flex items-center bg-gray-700 text-white p-3 rounded-md",children:[(0,r.jsx)(l.CMH,{className:"text-green-400 mr-2"})," 24/7 Customer Support"]})]}),(0,r.jsxs)("div",{className:"flex space-x-4 mt-6",children:[(0,r.jsx)("button",{onClick:()=>e.push("contact"),className:"bg-white text-green-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-100",children:"Learn More"}),(0,r.jsx)("button",{className:"bg-gray-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-600",children:"Our Core Values"})]})]}),(0,r.jsxs)("div",{className:"md:w-1/3 bg-white text-black p-8 rounded-lg shadow-lg mt-10 md:mt-0",children:[(0,r.jsx)("h3",{className:"text-2xl font-bold",children:"Request a Quote"}),(0,r.jsx)("p",{className:"text-gray-600 mt-2",children:"Fill out the form below and our team will get in touch with you soon."}),(0,r.jsxs)("form",{className:"mt-6 space-y-4",children:[(0,r.jsx)("input",{type:"text",placeholder:"Full Name",className:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"}),(0,r.jsx)("input",{type:"email",placeholder:"Email Address",className:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"}),(0,r.jsx)("input",{type:"text",placeholder:"Phone Number",className:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"}),(0,r.jsx)("textarea",{placeholder:"Your Message",className:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",rows:"4"}),(0,r.jsx)("button",{className:"bg-green-500 text-white w-full py-3 rounded-md text-lg font-semibold hover:bg-green-600",children:"Submit"})]})]})]})]})}},9334:(e,t,s)=>{var r=s(8686);s.o(r,"useParams")&&s.d(t,{useParams:function(){return r.useParams}}),s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}})},6055:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var r=s(8077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]}};