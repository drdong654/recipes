export const KEY='caesar-experience:v1'
export type Screen='welcome'|'ingredients'|'cooking'|'completion'
export type Timer={id:string;label:string;duration:number;status:'idle'|'running'|'paused'|'done';targetEndTime:number|null;remainingMs:number}
export type Progress={screen:Screen;portions:number;prepared:string[];step:number;checked:string[];timers:Record<string,Timer>;completed:boolean;started:boolean}
export const initial:Progress={screen:'welcome',portions:2,prepared:[],step:0,checked:[],timers:{},completed:false,started:false}
export function loadProgress():Progress { try { const raw=localStorage.getItem(KEY); if(!raw)return initial; const p=JSON.parse(raw) as Partial<Progress>; if(!p || !['welcome','ingredients','cooking','completion'].includes(p.screen||'') || !Number.isInteger(p.portions) || p.portions!<1 || p.portions!>6 || !Array.isArray(p.prepared) || !Array.isArray(p.checked) || !Number.isInteger(p.step) || p.step!<0 || p.step!>4 || typeof p.timers!=='object' || p.timers===null || typeof p.completed!=='boolean' || typeof p.started!=='boolean')return initial; return {...initial,...p} as Progress } catch {return initial} }
export function saveProgress(p:Progress){try{localStorage.setItem(KEY,JSON.stringify(p))}catch{/* storage may be unavailable */}}
export function timerRemaining(t:Timer,now=Date.now()){return t.status==='running'&&t.targetEndTime!==null ? Math.max(0,t.targetEndTime-now) : t.remainingMs}
export function settleTimers(timers:Record<string,Timer>,now=Date.now()){const next={...timers}; for(const [id,t] of Object.entries(next)){if(t.status==='running'&&timerRemaining(t,now)===0)next[id]={...t,status:'done',targetEndTime:null,remainingMs:0}} return next}
