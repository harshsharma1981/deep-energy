(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[144],{4863:(e,t,s)=>{Promise.resolve().then(s.bind(s,5898))},3279:(e,t,s)=>{"use strict";s.d(t,{default:()=>c});var a=s(5155),l=s(1536),r=s(2115),n=s(8173),i=s.n(n),o=s(9522);function c(){let e=(0,o.y)(),[t,s]=(0,r.useState)([]),[n,c]=(0,r.useState)(!1),[d,x]=(0,r.useState)(!1),[h,m]=(0,r.useState)(null);(0,r.useEffect)(()=>{s(e),console.log(e)},[e]),(0,r.useEffect)(()=>{let e=()=>{x(window.scrollY>200)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let u=e=>{m(h===e?null:e)};return(0,a.jsxs)("nav",{className:"w-full bg-white shadow-md px-6 py-4 flex items-center justify-between border-b border-gray-300 transition-all duration-300 z-50\n        ".concat(d?"fixed top-0 left-0 animate-slideDown shadow-lg":"relative"),children:[(0,a.jsxs)("div",{className:"flex items-center space-x-6",children:[(0,a.jsxs)("div",{className:"text-5xl font-bold flex items-center",children:[(0,a.jsx)("span",{className:"text-black",children:"D"}),(0,a.jsx)("span",{className:"text-green-500",children:"E"})]}),(0,a.jsx)("ul",{className:"hidden md:flex space-x-6 text-gray-700 font-medium",children:t.map(e=>(0,a.jsxs)("li",{className:"relative",children:[e.dropdown.length>0?(0,a.jsxs)("button",{onClick:()=>u(e.name),className:"flex items-center hover:text-green-500 focus:outline-none",children:[e.name," ",(0,a.jsx)(l.Vr3,{className:"ml-1 text-gray-500 text-sm"})]}):(0,a.jsx)(i(),{href:e.path,className:"hover:text-green-500",children:e.name}),h===e.name&&e.dropdown&&(0,a.jsx)("ul",{className:"absolute left-0 mt-2 bg-white shadow-md rounded-md w-40 text-gray-700 z-50",children:e.dropdown.map(e=>(0,a.jsx)("li",{className:"px-4 py-2 hover:bg-gray-100",children:(0,a.jsx)(i(),{href:e.path,children:e.name})},e.name))})]},e.name))})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-5",children:[(0,a.jsx)(l.KSO,{className:"hidden md:block text-gray-600 cursor-pointer hover:text-green-500"}),(0,a.jsx)(i(),{href:"/quote",className:"hidden md:block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600",children:"Request Quote"}),(0,a.jsx)("button",{className:"md:hidden text-2xl text-gray-700",onClick:()=>c(!n),children:"☰"})]}),n&&(0,a.jsxs)("div",{className:"absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden z-50",children:[t.map(e=>(0,a.jsxs)("div",{className:"w-full text-center",children:[e.dropdown.length>0?(0,a.jsxs)("button",{onClick:()=>u(e.name),className:"flex items-center justify-center w-full hover:text-green-500 focus:outline-none",children:[e.name," ",(0,a.jsx)(l.Vr3,{className:"ml-1 text-gray-500 text-sm"})]}):(0,a.jsx)(i(),{href:e.path,className:"hover:text-green-500",children:e.name}),h===e.name&&e.dropdown&&(0,a.jsx)("ul",{className:"w-full bg-white shadow-md rounded-md text-gray-700",children:e.dropdown.map(e=>(0,a.jsx)("li",{className:"px-4 py-2 hover:bg-gray-100",children:(0,a.jsx)(i(),{href:e.path,children:e.name})},e.name))})]},e.name)),(0,a.jsx)(i(),{href:"/quote",className:"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600",children:"Request Quote"})]})]})}},5898:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var a=s(5155),l=s(6046),r=s(2115),n=s(4956),i=s(8173),o=s.n(i),c=s(3279),d=s(5565),x=s(8422);function h(e){var t,s,i;let{params:h}=e,{projects:m}=(0,n.Y)(),[u,f]=(0,r.useState)(null),p=(0,l.useRouter)();return((0,r.useEffect)(()=>{(async()=>{let{slug:e}=await h;f(m.find(t=>t.slug===e)||null)})()},[h,m]),u)?(0,a.jsxs)("div",{children:[(0,a.jsx)(c.default,{}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-cover bg-center opacity-60",style:{backgroundImage:"url('https://images.pexels.com/photos/162646/cooling-tower-power-plant-energy-industry-162646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}),(0,a.jsxs)("div",{className:"relative z-10 py-24 px-6 md:px-20 text-center text-white",children:[(0,a.jsxs)("nav",{className:"text-sm mb-6 flex justify-center items-center space-x-2",children:[(0,a.jsxs)(o(),{href:"/",className:"flex items-center hover:text-green-500",children:[(0,a.jsx)(x.rTq,{size:20,className:"mr-1"})," Home"]}),(0,a.jsx)(x.huF,{size:20,className:"text-gray-400"}),(0,a.jsx)(o(),{href:"/projects",className:"hover:text-green-500",children:"Projects"}),(0,a.jsx)(x.huF,{size:20,className:"text-gray-400"}),(0,a.jsx)("span",{className:"text-green-500",children:u.title})]}),(0,a.jsx)("h1",{className:"text-3xl md:text-5xl font-bold",children:u.title}),(0,a.jsx)("p",{className:"text-lg mt-6 opacity-80",children:u.description})]})]}),(0,a.jsx)("div",{className:"py-16 px-6 md:px-20",children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto grid gap-8 md:grid-cols-2",children:[(null===(t=u.image)||void 0===t?void 0:t.length)>0&&(0,a.jsx)("div",{className:"overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105",children:(0,a.jsx)(d.default,{src:"http://localhost:1337".concat(null===(i=u.image[0].formats)||void 0===i?void 0:null===(s=i.large)||void 0===s?void 0:s.url),alt:u.title,width:1200,height:800,className:"w-full h-72 md:h-96 object-cover"})}),(0,a.jsxs)("div",{className:"space-y-8 text-gray-700",children:[(0,a.jsx)("h2",{className:"text-2xl md:text-3xl font-semibold",children:"Project Details"}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:u.content},className:"prose lg:prose-xl"})]})]})}),(0,a.jsxs)("div",{className:"bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-20 px-6 md:px-20 text-center text-white rounded-lg shadow-lg",children:[(0,a.jsx)("h2",{className:"text-4xl font-extrabold mb-6 text-gray-100",children:"Our Experience in Action"}),(0,a.jsx)("p",{className:"text-xl opacity-90 mb-8",children:"With years of expertise, we have successfully delivered countless projects that have helped businesses grow and scale. Our focus on quality, innovation, and client satisfaction sets us apart in the industry. Below are just a few highlights of what we bring to the table:"}),(0,a.jsxs)("div",{className:"space-y-8 max-w-4xl mx-auto",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-6 justify-center",children:[(0,a.jsx)("div",{className:"w-16 h-16 bg-white text-green-500 rounded-full flex items-center justify-center shadow-xl",children:(0,a.jsx)("span",{className:"text-3xl font-bold",children:"✔"})}),(0,a.jsxs)("div",{className:"max-w-md",children:[(0,a.jsx)("h3",{className:"text-2xl font-semibold mb-3",children:"Tailored Solutions"}),(0,a.jsx)("p",{className:"text-lg text-gray-100",children:"We specialize in creating custom solutions that are specifically tailored to meet the unique needs of your business. No two projects are alike, and we ensure every detail aligns with your vision."})]})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-6 justify-center",children:[(0,a.jsx)("div",{className:"w-16 h-16 bg-white text-green-500 rounded-full flex items-center justify-center shadow-xl",children:(0,a.jsx)("span",{className:"text-3xl font-bold",children:"✔"})}),(0,a.jsxs)("div",{className:"max-w-md",children:[(0,a.jsx)("h3",{className:"text-2xl font-semibold mb-3",children:"Proven Results"}),(0,a.jsx)("p",{className:"text-lg text-gray-100",children:"Our portfolio showcases a proven track record of success, with measurable results that demonstrate our ability to deliver on our promises. We take pride in the long-term relationships we build with our clients."})]})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-6 justify-center",children:[(0,a.jsx)("div",{className:"w-16 h-16 bg-white text-green-500 rounded-full flex items-center justify-center shadow-xl",children:(0,a.jsx)("span",{className:"text-3xl font-bold",children:"✔"})}),(0,a.jsxs)("div",{className:"max-w-md",children:[(0,a.jsx)("h3",{className:"text-2xl font-semibold mb-3",children:"Expert Team"}),(0,a.jsx)("p",{className:"text-lg text-gray-100",children:"Our team consists of highly skilled professionals with years of experience in the industry. From development to design, we have the expertise needed to bring your ideas to life efficiently and effectively."})]})]})]}),(0,a.jsx)("div",{className:"mt-10",children:(0,a.jsx)("button",{onClick:()=>p.push("/contact"),className:"bg-white text-green-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-100 transition-all shadow-lg hover:shadow-xl",children:"Get in Touch to Learn More"})})]})]}):(0,a.jsx)("div",{className:"text-center py-20 px-6",children:(0,a.jsx)("h2",{className:"text-3xl font-bold text-gray-600",children:"Project not found"})})}},9522:(e,t,s)=>{"use strict";s.d(t,{NavbarProvider:()=>n,y:()=>i});var a=s(5155),l=s(2115);let r=(0,l.createContext)([]),n=e=>{let{children:t}=e,[s,n]=(0,l.useState)([]);return(0,l.useEffect)(()=>{fetch("http://localhost:1337/api/page-setting?populate[Navbar][populate]=*").then(e=>e.json()).then(e=>n(e.data.Navbar)).catch(e=>console.error("Error fetching navbar:",e))},[]),(0,a.jsx)(r.Provider,{value:s,children:t})},i=()=>(0,l.useContext)(r)},4956:(e,t,s)=>{"use strict";s.d(t,{ProjectContextProvider:()=>n,Y:()=>i});var a=s(5155),l=s(2115);let r=(0,l.createContext)(void 0);function n(e){let{children:t}=e,[s,n]=(0,l.useState)([]),[i,o]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{(async function(){try{let e=await fetch("http://localhost:1337/api/projects?populate=*");if(!e.ok)throw Error("Failed to fetch projects");let t=await e.json();n((null==t?void 0:t.data)||[])}catch(e){console.error("Error fetching projects:",e)}finally{o(!1)}})()},[]),(0,a.jsx)(r.Provider,{value:{projects:s,loading:i},children:t})}function i(){let e=(0,l.useContext)(r);if(!e)throw Error("useProjects must be used within a ProjectContextProvider");return e}},6046:(e,t,s)=>{"use strict";var a=s(6658);s.o(a,"useParams")&&s.d(t,{useParams:function(){return a.useParams}}),s.o(a,"useRouter")&&s.d(t,{useRouter:function(){return a.useRouter}})}},e=>{var t=t=>e(e.s=t);e.O(0,[711,777,7,565,441,517,358],()=>t(4863)),_N_E=e.O()}]);