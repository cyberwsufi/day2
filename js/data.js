const DEMO_DATA={
skills:[
{group:"DEVELOPMENT",items:["HTML5","CSS3","JavaScript","Java","Git & GitHub"]},
{group:"DESIGN",items:["UI/UX Design","Figma","Design Systems","Prototyping","Responsive Design"]},
{group:"SECURITY",items:["Networking","Wireshark","Cybersecurity Fundamentals","Linux","TryHackMe"]},
{group:"CURRENTLY LEARNING",items:["React","Cloud Fundamentals","System Design","Web Security"]}
],
projects:[
{title:"Quad Locker",tag:"SIH · PRODUCT",desc:"A campus lost & found platform with admin verification, live status tracking and a credit system that rewards students for returning belongings.",stack:"HTML · CSS · JavaScript · UX",year:"2026",link:"#"},
{title:"Cyber Lab",tag:"SECURITY · LEARNING",desc:"A hands-on learning concept that turns networking and security fundamentals into visual, practical challenges.",stack:"Networking · Linux · Wireshark",year:"2026",link:"#"},
{title:"Creative Portfolio",tag:"DESIGN · FRONTEND",desc:"This portfolio — an expressive interface built to make recruiters stop scrolling and start exploring.",stack:"HTML · CSS · JavaScript",year:"2026",link:"#"}
],
experience:[
{role:"Student Developer / Hackathon Builder",company:"University & Community Projects",period:"2026 — Present",desc:"Building product concepts, prototypes and presentation-ready solutions for hackathons and student innovation challenges."},
{role:"Cybersecurity Learner",company:"TryHackMe & Self-directed Labs",period:"2026 — Present",desc:"Developing practical foundations across networking, protocols, packet analysis and web security."}
],
achievements:[
{title:"Smart India Hackathon",meta:"2026 · Participant / Team Project",desc:"Built and presented a campus Lost & Found solution focused on accountability and student participation."},
{title:"Networking Fundamentals",meta:"TryHackMe · Completed",desc:"Completed foundational networking concepts and continued into practical packet-analysis learning."},
{title:"Engineering Journey",meta:"University of Mumbai · 2025—Present",desc:"Electronics & Telecommunication engineering with a growing focus on software, security and product design."}
],
profile:{email:"sufiyan@example.com"}
};
function getData(){const raw=localStorage.getItem("portfolioData");if(!raw){localStorage.setItem("portfolioData",JSON.stringify(DEMO_DATA));return structuredClone(DEMO_DATA)}return JSON.parse(raw)}
function saveData(d){localStorage.setItem("portfolioData",JSON.stringify(d))}
