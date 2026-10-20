// NEGAD GRILL local server: serves index.html and keeps ALL data in datadb.json (no installs needed, just Node.js)
const http=require('http'),fs=require('fs'),path=require('path'),os=require('os');
const DIR=__dirname,DB=path.join(DIR,'datadb.json'),PORT=process.env.PORT||3000;
let db={};try{db=JSON.parse(fs.readFileSync(DB,'utf8'))}catch(e){}
let timer=null;
const flush=()=>{clearTimeout(timer);fs.writeFileSync(DB+'.tmp',JSON.stringify(db));fs.renameSync(DB+'.tmp',DB)};
const save=()=>{clearTimeout(timer);timer=setTimeout(flush,150)};
http.createServer((req,res)=>{
  if(req.method==='GET'&&req.url.startsWith('/api/db')){res.writeHead(200,{'Content-Type':'application/json','Cache-Control':'no-store'});return res.end(JSON.stringify(db))}
  if(req.method==='POST'&&req.url.startsWith('/api/')){let b='';req.on('data',c=>{b+=c;if(b.length>2e7)req.destroy()});
    req.on('end',()=>{try{const j=JSON.parse(b),op=req.url.slice(5);if(op==='put'){(db[j.c]=db[j.c]||{})[j.id]=j.d}else if(op==='del'){if(db[j.c])delete db[j.c][j.id]}else throw 0;save();res.writeHead(200);res.end('{}')}catch(e){res.writeHead(400);res.end()}});return}
  fs.readFile(path.join(DIR,'index.html'),(e,d)=>{if(e){res.writeHead(404);return res.end('index.html is missing')}res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});res.end(d)});
}).listen(PORT,'0.0.0.0',()=>{console.log('\nNEGAD GRILL is running.\n  On this computer:  http://localhost:'+PORT);
  Object.values(os.networkInterfaces()).flat().filter(i=>i.family==='IPv4'&&!i.internal).forEach(i=>console.log('  On other devices:  http://'+i.address+':'+PORT));
  console.log('\nAll data is saved in datadb.json. Press Ctrl+C to stop.\n')});
process.on('SIGINT',()=>{flush();process.exit()});process.on('SIGTERM',()=>{flush();process.exit()});
