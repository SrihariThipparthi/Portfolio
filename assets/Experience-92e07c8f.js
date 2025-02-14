import{c as n,j as e,m as i}from"./index-a6cd2294.js";import{C as o}from"./chevron-right-2e878051.js";const m=n("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]),x=n("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]),y=n("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),b=()=>{const l=[{company:"Areete Business Solutions",role:"Machine Learning Engineer",duration:"2023 - 2025",location:"Pune, India",responsibilities:["Developed and deployed ML models for cattle health monitoring","Designed streaming architecture using AWS services","Implemented Generative AI solutions for farmers","Created deep learning models for video analysis","Built interactive dashboards for data visualization"],skills:["Machine Learning","Deep Learning","AWS","Data Engineering","Statisitcs","Computer Vision","NLP","IoT","Generative AI","Python","C++","Mysql"],achievements:["Reduced manual monitoring time by 60%","Improved prediction accuracy by 90%","Automated data processing pipeline"]}],r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},c={hidden:{x:-20,opacity:0},visible:{x:0,opacity:1}};return e.jsx("div",{className:"min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20 px-4",children:e.jsxs(i.div,{className:"max-w-6xl mx-auto",initial:"hidden",animate:"visible",variants:r,children:[e.jsx(i.h1,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},className:"text-4xl font-bold text-blue-400 mb-12 text-center",children:"Professional Experience"}),l.map((t,d)=>e.jsxs(i.div,{className:"bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8 hover:bg-gray-700/50 transition-all",variants:c,children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start mb-6",children:[e.jsxs(i.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{delay:.2},children:[e.jsx("h2",{className:"text-2xl font-bold text-blue-400",children:t.company}),e.jsxs("div",{className:"flex items-center text-gray-400 mt-2",children:[e.jsx(x,{className:"w-4 h-4 mr-2"}),e.jsx("span",{children:t.role})]}),e.jsxs("div",{className:"flex items-center text-gray-400 mt-1",children:[e.jsx(y,{className:"w-4 h-4 mr-2"}),e.jsx("span",{children:t.duration})]})]}),e.jsx(i.div,{className:"mt-4 md:mt-0",initial:{scale:0},animate:{scale:1},transition:{delay:.4},children:e.jsxs("div",{className:"bg-blue-500/20 rounded-lg p-4",children:[e.jsx("h3",{className:"text-blue-400 font-semibold mb-2",children:"Key Achievements"}),t.achievements.map((s,a)=>e.jsxs(i.div,{className:"flex items-center text-gray-300 mb-1",initial:{x:20,opacity:0},animate:{x:0,opacity:1},transition:{delay:.5+a*.1},children:[e.jsx(m,{className:"w-4 h-4 mr-2 text-blue-400"}),e.jsx("span",{children:s})]},a))]})})]}),e.jsxs(i.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.6},children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-400 mb-2",children:"Responsibilities"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:t.responsibilities.map((s,a)=>e.jsxs(i.div,{className:"flex items-start",initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{delay:.7+a*.1},children:[e.jsx(o,{className:"w-4 h-4 mr-2 text-blue-400 mt-1"}),e.jsx("span",{className:"text-gray-300",children:s})]},a))})]}),e.jsxs(i.div,{className:"mt-6",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.8},children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-400 mb-2",children:"Skills Used"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:t.skills.map((s,a)=>e.jsx(i.span,{className:"bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm",initial:{scale:0},animate:{scale:1},transition:{delay:.9+a*.1},children:s},a))})]})]},d))]})})};export{b as default};
