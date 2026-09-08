let data=getData();
const $=s=>document.querySelector(s);
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tab,.panel").forEach(x=>x.classList.remove("active"));b.classList.add("active");$("#"+b.dataset.tab).classList.add("active");render()});
function field(label,val,cls=""){return `<label>${label}<input class="${cls}" value="${esc(val)}"></label>`}
function esc(v){return String(v??"").replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;")}
function render(){
$("#countSkills").textContent=data.skills.reduce((n,x)=>n+x.items.length,0);$("#countProjects").textContent=data.projects.length;$("#countExp").textContent=data.experience.length;$("#countAch").textContent=data.achievements.length;
$("#skillsEditor").innerHTML=data.skills.map((s,i)=>`<div class="editor-card"><div class="editor-head"><strong>Skill group ${i+1}</strong><button class="remove" onclick="removeItem('skills',${i})">Delete</button></div>${field("Group",s.group,"group")}<label>Skills <input class="items" value="${esc(s.items.join(", "))}"></label><button onclick="updateSkill(${i},this)">Save changes</button></div>`).join("");
$("#projectsEditor").innerHTML=data.projects.map((p,i)=>`<div class="editor-card"><div class="editor-head"><strong>Project ${i+1}</strong><button class="remove" onclick="removeItem('projects',${i})">Delete</button></div>${field("Title",p.title,"title")}${field("Tag",p.tag,"tag")}${field("Year",p.year,"year")}<label>Description<textarea class="desc">${esc(p.desc)}</textarea></label>${field("Tech stack",p.stack,"stack")}${field("Link",p.link,"link")}<button onclick="updateProject(${i},this)">Save changes</button></div>`).join("");
$("#experienceEditor").innerHTML=data.experience.map((x,i)=>`<div class="editor-card"><div class="editor-head"><strong>Experience ${i+1}</strong><button class="remove" onclick="removeItem('experience',${i})">Delete</button></div>${field("Role",x.role,"role")}${field("Company",x.company,"company")}${field("Period",x.period,"period")}<label>Description<textarea class="desc">${esc(x.desc)}</textarea></label><button onclick="updateExperience(${i},this)">Save changes</button></div>`).join("");
$("#achievementsEditor").innerHTML=data.achievements.map((a,i)=>`<div class="editor-card"><div class="editor-head"><strong>Achievement ${i+1}</strong><button class="remove" onclick="removeItem('achievements',${i})">Delete</button></div>${field("Title",a.title,"title")}${field("Meta",a.meta,"meta")}<label>Description<textarea class="desc">${esc(a.desc)}</textarea></label><button onclick="updateAchievement(${i},this)">Save changes</button></div>`).join("");
}
function vals(card){return Object.fromEntries([...card.querySelectorAll("input,textarea")].map(x=>[x.className,x.value]))}
function updateSkill(i,b){let v=vals(b.closest(".editor-card"));data.skills[i]={group:v.group,items:v.items.split(",").map(x=>x.trim()).filter(Boolean)};commit()}
function updateProject(i,b){let v=vals(b.closest(".editor-card"));data.projects[i]={title:v.title,tag:v.tag,year:v.year,desc:v.desc,stack:v.stack,link:v.link};commit()}
function updateExperience(i,b){let v=vals(b.closest(".editor-card"));data.experience[i]={role:v.role,company:v.company,period:v.period,desc:v.desc};commit()}
function updateAchievement(i,b){let v=vals(b.closest(".editor-card"));data.achievements[i]={title:v.title,meta:v.meta,desc:v.desc};commit()}
function removeItem(type,i){if(confirm("Delete this item?")){data[type].splice(i,1);commit()}}
function addSkill(){data.skills.push({group:"NEW SKILL GROUP",items:["Skill 1","Skill 2"]});commit("skills")}
function addProject(){data.projects.push({title:"New Project",tag:"PROJECT",desc:"Describe the problem, solution and impact.",stack:"HTML · CSS · JavaScript",year:"2026",link:"#"});commit("projects")}
function addExperience(){data.experience.push({role:"New Role",company:"Company / Organization",period:"2026 — Present",desc:"What did you build, learn or improve?"});commit("experience")}
function addAchievement(){data.achievements.push({title:"New Achievement",meta:"2026 · Certification",desc:"Describe why this matters."});commit("achievements")}
function commit(tab){saveData(data);render();if(tab){document.querySelector(`[data-tab="${tab}"]`).click()}else alert("Saved ✓")}
$("#reset").onclick=()=>{if(confirm("Reset all portfolio content to demo data?")){localStorage.removeItem("portfolioData");data=getData();render()}};render();
