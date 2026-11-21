const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-9GN5Nt71.js","assets/vendor-react-Dmh8BX8j.js","assets/vendor-firebase-DL-Dt56E.js","assets/vendor-icons-DaFmA_gc.js","assets/index-DhqHWlbW.css"])))=>i.map(i=>d[i]);
import{_ as z}from"./index-9GN5Nt71.js";import{r as u,j as t}from"./vendor-react-Dmh8BX8j.js";import{R as F,d as G,g as H,b as J,c as Y}from"./StaffDashboard-BdE6Xcjz.js";import{s as P,aB as V,g as W,u as X,U as Q,a5 as Z,r as q,t as tt}from"./vendor-icons-DaFmA_gc.js";import"./vendor-firebase-DL-Dt56E.js";import"./StudentIdCardView-Dcu38wTJ.js";import"./vendor-xlsx-B6DAvdoD.js";function d(f){return f==null?"":String(f).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function R(f,c=[]){const o=(f==null?void 0:f.files)||{},v=Object.values(o).filter(m=>m&&(m.viewUrl||m.fileName)),y=v.length,b=v.filter(m=>m.status==="Terverifikasi").length,$=v.filter(m=>!m.status||m.status==="Menunggu Verifikasi").length,x=c.length>0?c.length:1,K=c.length>0?c.every(m=>{const A=o[m];return A&&(A.viewUrl||A.fileName)&&A.status==="Terverifikasi"}):b>0;return{uploadedCount:y,verifiedCount:b,pendingCount:$,targetRequired:x,isComplete:K}}function dt({students:f=[],rombels:c=[],schoolProfile:o={},customDocRequirements:v=[],showToast:y}){const[b,$]=u.useState("rombel"),[x,K]=u.useState("ALL"),[m,A]=u.useState("ALL"),[S,M]=u.useState("ALL"),[E,U]=u.useState(!1),w=u.useMemo(()=>(v||[]).filter(e=>e.active!==!1&&e.required).map(e=>e.key),[v]),T=u.useMemo(()=>{const e=new Set;return c.forEach(a=>a.tingkat&&e.add(String(a.tingkat))),f.forEach(a=>a.tingkat&&e.add(String(a.tingkat))),Array.from(e).sort((a,s)=>a.localeCompare(s,void 0,{numeric:!0}))},[c,f]),p=u.useMemo(()=>f.filter(e=>{if(x!=="ALL"){const a=c.find(n=>n.namaRombel===e.kelas);if(String(e.tingkat||(a==null?void 0:a.tingkat)||"")!==x)return!1}if(m!=="ALL"){const a=e.status||"Aktif";if(m==="LAINNYA"){if(a==="Aktif"||a==="Mutasi / Pindah"||a==="Lulus")return!1}else if(a!==m)return!1}return!0}),[f,c,x,m]),i=u.useMemo(()=>{const e=p.length,a=p.filter(r=>r.jenisKelamin==="L").length,s=p.filter(r=>r.jenisKelamin==="P").length,n=p.filter(r=>(r.status||"Aktif")==="Aktif").length,h=p.filter(r=>(r.status||"Aktif")!=="Aktif").length,j=p.filter(r=>R(r,w).isComplete).length,k=c.filter(r=>r.active!==!1&&(x==="ALL"||String(r.tingkat||"")===x)),g=k.reduce((r,D)=>r+Number(D.kuota||32),0),L=g>0?Math.min(100,Math.round(e/g*100)):0,l=k.length>0?(e/k.length).toFixed(1):"0.0";return{total:e,laki:a,perempuan:s,aktif:n,mutasi:h,berkasLengkap:j,totalRombel:k.length,totalKuota:g,pctKuota:L,avgPerRombel:l}},[p,c,x,w]),C=u.useMemo(()=>{const e=c.filter(n=>x==="ALL"||String(n.tingkat||"")===x).map(n=>{const h=p.filter(N=>(N.kelas||"")===n.namaRombel),j=h.filter(N=>N.jenisKelamin==="L").length,k=h.filter(N=>N.jenisKelamin==="P").length,g=h.filter(N=>(N.status||"Aktif")==="Aktif").length,L=h.length-g,l=h.filter(N=>R(N,w).isComplete).length,r=Number(n.kuota||32),D=r>0?Math.round(h.length/r*100):0;return{id:n.id||n.namaRombel,namaRombel:n.namaRombel,tingkat:n.tingkat||"-",waliKelas:n.waliKelas||"-",ruangKelas:n.ruangKelas||"-",kuota:r,l:j,p:k,total:h.length,pct:D,aktif:g,nonAktif:L,verifiedDocs:l}}),a=new Set(c.map(n=>n.namaRombel)),s=p.filter(n=>!n.kelas||!a.has(n.kelas));if(s.length>0&&x==="ALL"){const n=s.filter(g=>g.jenisKelamin==="L").length,h=s.filter(g=>g.jenisKelamin==="P").length,j=s.filter(g=>(g.status||"Aktif")==="Aktif").length,k=s.filter(g=>R(g,w).isComplete).length;e.push({id:"__unassigned__",namaRombel:"Belum Masuk Rombel",tingkat:"-",waliKelas:"-",ruangKelas:"-",kuota:0,l:n,p:h,total:s.length,pct:0,aktif:j,nonAktif:s.length-j,verifiedDocs:k})}return e},[c,p,x,w]),I=u.useMemo(()=>{const e={};return T.forEach(a=>{x!=="ALL"&&a!==x||(e[a]={tingkat:a,rombelCount:0,l:0,p:0,total:0,aktif:0})}),c.forEach(a=>{const s=String(a.tingkat||"");!s||x!=="ALL"&&s!==x||(e[s]||(e[s]={tingkat:s,rombelCount:0,l:0,p:0,total:0,aktif:0}),a.active!==!1&&(e[s].rombelCount+=1))}),p.forEach(a=>{const s=c.find(h=>h.namaRombel===a.kelas),n=String(a.tingkat||(s==null?void 0:s.tingkat)||"Lainnya");e[n]||(e[n]={tingkat:n,rombelCount:0,l:0,p:0,total:0,aktif:0}),e[n].total+=1,a.jenisKelamin==="L"&&(e[n].l+=1),a.jenisKelamin==="P"&&(e[n].p+=1),(a.status||"Aktif")==="Aktif"&&(e[n].aktif+=1)}),Object.values(e).sort((a,s)=>a.tingkat.localeCompare(s.tingkat,void 0,{numeric:!0}))},[T,c,p,x]),B=u.useMemo(()=>{const e={};return p.forEach(a=>{const s=(a.agama||"Belum Diisi").trim();e[s]||(e[s]={agama:s,l:0,p:0,total:0}),e[s].total+=1,a.jenisKelamin==="L"&&(e[s].l+=1),a.jenisKelamin==="P"&&(e[s].p+=1)}),Object.values(e).sort((a,s)=>s.total-a.total)},[p]),_=u.useMemo(()=>p.filter(e=>S==="ALL"?!0:S==="__UNASSIGNED__"?!e.kelas:(e.kelas||"")===S).map(e=>({...e,docStats:R(e,w)})).sort((e,a)=>{const s=String(e.kelas||"").localeCompare(String(a.kelas||""));return s!==0?s:String(e.nama||"").localeCompare(String(a.nama||""))}),[p,S,w]),O=()=>{const e=window.open("","_blank","width=1100,height=800");if(!e){y&&y("error","Pop-up diblokir browser. Izinkan pop-up untuk mencetak laporan.");return}const a={rombel:"LAPORAN REKAPITULASI PESERTA DIDIK PER ROMBONGAN BELAJAR",tingkat:"LAPORAN REKAPITULASI PESERTA DIDIK PER TINGKAT & AGAMA",daftar:"LAPORAN DAFTAR PESERTA DIDIK & KELENGKAPAN BERKAS PER ROMBEL"},s=o.kopSuratUrl||o.bannerKopUrl||o.headerLogoUrl?`<div style="width:100%;margin-bottom:8px;text-align:center;border-bottom:2px solid #0f172a;padding-bottom:6px;">
           <img src="${d(o.kopSuratUrl||o.bannerKopUrl||o.headerLogoUrl)}" alt="Kop Surat Resmi" style="width:100%;max-height:118px;object-fit:contain;display:block;margin:0 auto;" />
         </div>`:`<div style="text-align:center;margin-bottom:10px;border-bottom:2px solid #0f172a;padding-bottom:8px;">
           <h2 style="margin:0;font-size:18px;">${d(o.namaSekolah||"SATUAN PENDIDIKAN")}</h2>
           <p style="margin:4px 0 0;font-size:11px;color:#475569;">NPSN: ${d(o.npsn||"-")} &bull; ${d(o.alamat||"")} ${d(o.kabupatenKota||"")}</p>
         </div>`;let n="";b==="rombel"?n=`
        <table id="print-main-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Rombel</th>
              <th>Tingkat</th>
              <th>Wali Kelas</th>
              <th>Ruang</th>
              <th>Kuota</th>
              <th>L</th>
              <th>P</th>
              <th>Total</th>
              <th>% Isi</th>
              <th>Aktif</th>
              <th>Mutasi</th>
              <th>Berkas Lengkap</th>
            </tr>
          </thead>
          <tbody>
            ${C.map((l,r)=>`
              <tr>
                <td style="text-align:center">${r+1}</td>
                <td><strong>${d(l.namaRombel)}</strong></td>
                <td style="text-align:center">${d(l.tingkat)}</td>
                <td>${d(l.waliKelas)}</td>
                <td>${d(l.ruangKelas)}</td>
                <td style="text-align:center">${l.kuota||"-"}</td>
                <td style="text-align:center">${l.l}</td>
                <td style="text-align:center">${l.p}</td>
                <td style="text-align:center"><strong>${l.total}</strong></td>
                <td style="text-align:center">${l.pct}%</td>
                <td style="text-align:center">${l.aktif}</td>
                <td style="text-align:center">${l.nonAktif}</td>
                <td style="text-align:center">${l.verifiedDocs}</td>
              </tr>`).join("")}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="5"><strong>TOTAL KESELURUHAN</strong></td>
              <td style="text-align:center"><strong>${i.totalKuota}</strong></td>
              <td style="text-align:center"><strong>${i.laki}</strong></td>
              <td style="text-align:center"><strong>${i.perempuan}</strong></td>
              <td style="text-align:center"><strong>${i.total}</strong></td>
              <td style="text-align:center"><strong>${i.pctKuota}%</strong></td>
              <td style="text-align:center"><strong>${i.aktif}</strong></td>
              <td style="text-align:center"><strong>${i.mutasi}</strong></td>
              <td style="text-align:center"><strong>${i.berkasLengkap}</strong></td>
            </tr>
          </tfoot>
        </table>`:b==="tingkat"?n=`
        <table id="print-main-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Tingkat Kelas</th>
              <th>Jumlah Rombel</th>
              <th>Laki-laki (L)</th>
              <th>Perempuan (P)</th>
              <th>Total Siswa</th>
              <th>Siswa Aktif</th>
            </tr>
          </thead>
          <tbody>
            ${I.map((l,r)=>`
              <tr>
                <td style="text-align:center">${r+1}</td>
                <td><strong>Tingkat ${d(l.tingkat)}</strong></td>
                <td style="text-align:center">${l.rombelCount}</td>
                <td style="text-align:center">${l.l}</td>
                <td style="text-align:center">${l.p}</td>
                <td style="text-align:center"><strong>${l.total}</strong></td>
                <td style="text-align:center">${l.aktif}</td>
              </tr>`).join("")}
          </tbody>
        </table>`:n=`
        <table id="print-main-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Lengkap</th>
              <th>NISN</th>
              <th>NIPD</th>
              <th>JK</th>
              <th>Rombel</th>
              <th>Status</th>
              <th>Berkas Diunggah</th>
              <th>Terverifikasi</th>
            </tr>
          </thead>
          <tbody>
            ${_.map((l,r)=>`
              <tr>
                <td style="text-align:center">${r+1}</td>
                <td>${d(l.nama)}</td>
                <td style="text-align:center">${d(l.nisn||"-")}</td>
                <td style="text-align:center">${d(l.nipd||"-")}</td>
                <td style="text-align:center">${d(l.jenisKelamin||"-")}</td>
                <td style="text-align:center">${d(l.kelas||"-")}</td>
                <td style="text-align:center">${d(l.status||"Aktif")}</td>
                <td style="text-align:center">${l.docStats.uploadedCount}</td>
                <td style="text-align:center">${l.docStats.verifiedCount}</td>
              </tr>`).join("")}
          </tbody>
        </table>`;const h=new Date().toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"}),j=E&&(o.ttdDanCapUrl||o.ttdKepalaUrl)||"",k=H(),g=Y({orientation:"landscape"}),L=J({schoolProfile:o,printCode:k,docTitle:a[b],orientation:"landscape"});try{z(async()=>{const{recordAuditLog:l}=await import("./index-9GN5Nt71.js").then(r=>r.aE);return{recordAuditLog:l}},__vite__mapDeps([0,1,2,3,4])).then(({recordAuditLog:l})=>{l({module:"Cetak Dokumen",action:"PRINT_PDF",description:`Mencetak dokumen resmi "${a[b]}" [Security Print ID: ${k}]`,securityPrintId:k,documentTitle:a[b]}).catch(()=>{})})}catch{}e.document.write(`<!DOCTYPE html>
      <html>
        <head>
          <title>${d(a[b])}</title>
          <style>
            @page { size: A4 landscape; margin: 6mm 8mm 5mm 8mm; }
            * { box-sizing: border-box; }
            body { font-family: 'Segoe UI', Arial, sans-serif; color: #0f172a; font-size: 10.5px; margin: 0; padding: 0; background: #fff; }
            h3 { text-align: center; margin: 6px 0 2px; font-size: 13.5px; text-decoration: underline; }
            .meta { text-align: center; font-size: 10px; color: #334155; font-weight: 600; margin-bottom: 8px; }
            table { width: 100%; border-collapse: collapse; margin-top: 6px; table-layout: auto; }
            th, td { border: 1px solid #cbd5e1; padding: 5px 6px; white-space: normal; word-wrap: break-word; overflow-wrap: break-word; vertical-align: middle; line-height: 1.35; }
            th { background: #f1f5f9; font-weight: 800; text-align: center; font-size: 10px; border-color: #94a3b8; }
            tfoot td { background: #ecfdf5; }
            .sign { margin-top: 16px; display: flex; justify-content: flex-end; page-break-inside: avoid; }
            .sign-box { width: 240px; text-align: left; font-size: 10.5px; }
            ${g}
          </style>
        </head>
        <body>
          <div id="print-header-area">
            ${s}
            <h3>${a[b]}</h3>
            <div class="meta">
              Tahun Pelajaran: ${d(o.tahunAjaranAktif||"-")} &bull;
              Semester: ${d(o.semesterAktif||"-")} &bull;
              Dicetak: ${d(h)}
            </div>
          </div>
          ${n}
          <div id="print-after-table">
            <div class="sign">
              <div class="sign-box">
                <div>${d(o.kabupatenKota||"Kota")}, ${d(h)}</div>
                <div>Kepala Sekolah,</div>
                ${j?`<img src="${d(j)}" style="height:64px;object-fit:contain;margin:6px 0;" />`:'<div style="height:56px;"></div>'}
                <div><strong>${d(o.kepalaSekolah||"_____________________")}</strong></div>
                <div>${d(o.jenisIdKepala||"NIP")}: ${d(o.nipKepalaSekolah||"-")}</div>
              </div>
            </div>
          </div>
          ${L}
        </body>
      </html>`),e.document.close()};return t.jsxs("div",{className:"space-y-5",children:[t.jsxs("div",{className:"bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-4",children:[t.jsxs("div",{className:"flex items-start gap-3",children:[t.jsx("div",{className:"w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center shadow-sm shrink-0",children:t.jsx(P,{className:"w-5 h-5"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-lg font-extrabold text-slate-900",children:"Laporan Rekapitulasi Siswa & Rombel"}),t.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:"Rekapitulasi data peserta didik per rombongan belajar, tingkat kelas, agama, status keaktifan, dan kelengkapan berkas digital."})]})]}),t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.jsxs("label",{className:"inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 cursor-pointer",title:"Centang jika ingin menyertakan scan Cap & TTD Kepala Sekolah pada cetakan PDF",children:[t.jsx("input",{type:"checkbox",checked:E,onChange:e=>U(e.target.checked),className:"rounded text-emerald-600 focus:ring-emerald-500"}),t.jsx("span",{children:"Dengan Cap & TTD"})]}),t.jsx(F,{label:"Download Laporan",variant:"emerald",onDownloadPdf:O,onDownloadExcel:()=>{try{G({rombels:c,students:p,schoolProfile:o,customDocRequirements:v}),y&&y("success","Laporan Rekapitulasi Rombel & Siswa (.xlsx) berhasil diunduh.")}catch(e){y&&y("error","Gagal mengekspor Excel: "+e.message)}}})]})]}),t.jsxs("div",{className:"bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-3",children:[t.jsx("div",{className:"flex flex-wrap items-center gap-1.5",children:[{id:"rombel",label:"Rekap per Rombel",icon:V},{id:"tingkat",label:"Rekap Tingkat & Agama",icon:P},{id:"daftar",label:"Daftar Siswa & Berkas",icon:W}].map(e=>{const a=e.icon,s=b===e.id;return t.jsxs("button",{type:"button",onClick:()=>$(e.id),className:`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${s?"bg-emerald-600 text-white shadow-xs":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:[t.jsx(a,{className:"w-3.5 h-3.5"}),t.jsx("span",{children:e.label})]},e.id)})}),t.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs",children:[t.jsxs("div",{className:"inline-flex items-center gap-1 text-slate-500 font-semibold",children:[t.jsx(X,{className:"w-3.5 h-3.5"}),t.jsx("span",{children:"Filter:"})]}),t.jsxs("select",{value:x,onChange:e=>K(e.target.value),className:"px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 font-semibold text-slate-700 outline-none",children:[t.jsx("option",{value:"ALL",children:"Semua Tingkat"}),T.map(e=>t.jsxs("option",{value:e,children:["Tingkat ",e]},e))]}),t.jsxs("select",{value:m,onChange:e=>A(e.target.value),className:"px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 font-semibold text-slate-700 outline-none",children:[t.jsx("option",{value:"ALL",children:"Semua Status Siswa"}),t.jsx("option",{value:"Aktif",children:"Aktif"}),t.jsx("option",{value:"Mutasi / Pindah",children:"Mutasi / Pindah"}),t.jsx("option",{value:"Lulus",children:"Lulus"}),t.jsx("option",{value:"LAINNYA",children:"Status Lainnya"})]}),b==="daftar"&&t.jsxs("select",{value:S,onChange:e=>M(e.target.value),className:"px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 font-semibold text-slate-700 outline-none",children:[t.jsx("option",{value:"ALL",children:"Semua Rombel"}),c.map(e=>t.jsx("option",{value:e.namaRombel,children:e.namaRombel},e.id||e.namaRombel)),t.jsx("option",{value:"__UNASSIGNED__",children:"Belum Masuk Rombel"})]})]})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[t.jsxs("div",{className:"bg-gradient-to-br from-blue-50 via-white to-indigo-50/70 rounded-2xl p-4 border border-blue-200/80 shadow-xs",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-blue-700",children:"Total Peserta Didik"}),t.jsx(Q,{className:"w-4 h-4 text-blue-600"})]}),t.jsxs("div",{className:"text-2xl font-black text-slate-900 mt-1",children:[i.total," Siswa"]}),t.jsxs("div",{className:"text-[11px] text-slate-600 mt-1",children:["Laki-laki: ",t.jsx("strong",{children:i.laki})," • Perempuan: ",t.jsx("strong",{children:i.perempuan})]})]}),t.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 via-white to-teal-50/70 rounded-2xl p-4 border border-emerald-200/80 shadow-xs",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-emerald-700",children:"Rombongan Belajar"}),t.jsx(Z,{className:"w-4 h-4 text-emerald-600"})]}),t.jsxs("div",{className:"text-2xl font-black text-slate-900 mt-1",children:[i.totalRombel," Rombel"]}),t.jsxs("div",{className:"text-[11px] text-slate-600 mt-1",children:["Rata-rata ",t.jsx("strong",{children:i.avgPerRombel})," siswa/rombel • Terisi"," ",t.jsxs("strong",{children:[i.pctKuota,"%"]})]})]}),t.jsxs("div",{className:"bg-gradient-to-br from-amber-50 via-white to-orange-50/70 rounded-2xl p-4 border border-amber-200/80 shadow-xs",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-amber-700",children:"Status Keaktifan"}),t.jsx(q,{className:"w-4 h-4 text-amber-600"})]}),t.jsxs("div",{className:"text-2xl font-black text-slate-900 mt-1",children:[i.aktif," Aktif"]}),t.jsxs("div",{className:"text-[11px] text-slate-600 mt-1",children:["Mutasi / Non-Aktif: ",t.jsx("strong",{children:i.mutasi})," Siswa"]})]}),t.jsxs("div",{className:"bg-gradient-to-br from-purple-50 via-white to-fuchsia-50/70 rounded-2xl p-4 border border-purple-200/80 shadow-xs",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-purple-700",children:"Kelengkapan Berkas"}),t.jsx(tt,{className:"w-4 h-4 text-purple-600"})]}),t.jsxs("div",{className:"text-2xl font-black text-slate-900 mt-1",children:[i.berkasLengkap," / ",i.total]}),t.jsx("div",{className:"text-[11px] text-slate-600 mt-1",children:"Siswa dengan seluruh berkas wajib terverifikasi"})]})]}),b==="rombel"&&t.jsx("div",{className:"bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden",children:t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full text-left border-collapse text-xs",children:[t.jsx("thead",{children:t.jsxs("tr",{className:"bg-slate-50 text-slate-600 border-b border-slate-200 uppercase text-[10px]",children:[t.jsx("th",{className:"py-3 px-3.5 font-bold",children:"No"}),t.jsx("th",{className:"py-3 px-3.5 font-bold",children:"Rombel"}),t.jsx("th",{className:"py-3 px-3.5 font-bold",children:"Tingkat"}),t.jsx("th",{className:"py-3 px-3.5 font-bold",children:"Wali Kelas"}),t.jsx("th",{className:"py-3 px-3.5 font-bold",children:"Ruang"}),t.jsx("th",{className:"py-3 px-3.5 font-bold text-center",children:"Kuota"}),t.jsx("th",{className:"py-3 px-3.5 font-bold text-center text-blue-700",children:"L"}),t.jsx("th",{className:"py-3 px-3.5 font-bold text-center text-rose-700",children:"P"}),t.jsx("th",{className:"py-3 px-3.5 font-bold text-center",children:"Total"}),t.jsx("th",{className:"py-3 px-3.5 font-bold",children:"Keterisian"}),t.jsx("th",{className:"py-3 px-3.5 font-bold text-center",children:"Aktif / Mutasi"}),t.jsx("th",{className:"py-3 px-3.5 font-bold text-center",children:"Berkas Lengkap"})]})}),t.jsx("tbody",{className:"divide-y divide-slate-100",children:C.map((e,a)=>t.jsxs("tr",{className:"hover:bg-slate-50/80 transition",children:[t.jsx("td",{className:"py-3 px-3.5 font-mono text-slate-400",children:a+1}),t.jsx("td",{className:"py-3 px-3.5 font-extrabold text-slate-900",children:e.namaRombel}),t.jsx("td",{className:"py-3 px-3.5 font-semibold text-slate-600",children:e.tingkat}),t.jsx("td",{className:"py-3 px-3.5 text-slate-700",children:e.waliKelas}),t.jsx("td",{className:"py-3 px-3.5 text-slate-500",children:e.ruangKelas}),t.jsx("td",{className:"py-3 px-3.5 text-center font-mono",children:e.kuota||"-"}),t.jsx("td",{className:"py-3 px-3.5 text-center font-bold text-blue-700",children:e.l}),t.jsx("td",{className:"py-3 px-3.5 text-center font-bold text-rose-700",children:e.p}),t.jsx("td",{className:"py-3 px-3.5 text-center font-black text-slate-900",children:e.total}),t.jsx("td",{className:"py-3 px-3.5 min-w-[120px]",children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden",children:t.jsx("div",{className:`h-full rounded-full ${e.pct>=90?"bg-emerald-500":e.pct>=60?"bg-blue-500":"bg-amber-500"}`,style:{width:`${Math.min(100,e.pct)}%`}})}),t.jsxs("span",{className:"text-[10px] font-mono font-bold text-slate-600",children:[e.pct,"%"]})]})}),t.jsxs("td",{className:"py-3 px-3.5 text-center",children:[t.jsx("span",{className:"font-bold text-emerald-700",children:e.aktif}),e.nonAktif>0&&t.jsxs("span",{className:"text-rose-600 font-semibold",children:[" / ",e.nonAktif]})]}),t.jsxs("td",{className:"py-3 px-3.5 text-center font-bold text-purple-700",children:[e.verifiedDocs," / ",e.total]})]},e.id))}),t.jsx("tfoot",{children:t.jsxs("tr",{className:"bg-emerald-50/80 border-t-2 border-emerald-200 font-extrabold text-slate-900",children:[t.jsxs("td",{colSpan:5,className:"py-3 px-3.5",children:["TOTAL KESELURUHAN (",C.length," Baris)"]}),t.jsx("td",{className:"py-3 px-3.5 text-center font-mono",children:i.totalKuota}),t.jsx("td",{className:"py-3 px-3.5 text-center text-blue-800",children:i.laki}),t.jsx("td",{className:"py-3 px-3.5 text-center text-rose-800",children:i.perempuan}),t.jsx("td",{className:"py-3 px-3.5 text-center text-emerald-800",children:i.total}),t.jsxs("td",{className:"py-3 px-3.5 font-mono text-emerald-800",children:[i.pctKuota,"%"]}),t.jsxs("td",{className:"py-3 px-3.5 text-center text-emerald-800",children:[i.aktif," / ",i.mutasi]}),t.jsxs("td",{className:"py-3 px-3.5 text-center text-purple-800",children:[i.berkasLengkap," / ",i.total]})]})})]})})}),b==="tingkat"&&t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5",children:[t.jsxs("div",{className:"bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden",children:[t.jsx("div",{className:"px-5 py-3.5 bg-slate-50 border-b border-slate-200 font-extrabold text-xs text-slate-800 uppercase tracking-wider",children:"Rekapitulasi per Tingkat Kelas"}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full text-left border-collapse text-xs",children:[t.jsx("thead",{children:t.jsxs("tr",{className:"border-b border-slate-200 text-slate-500 text-[10px] uppercase",children:[t.jsx("th",{className:"py-2.5 px-4",children:"Tingkat"}),t.jsx("th",{className:"py-2.5 px-4 text-center",children:"Rombel"}),t.jsx("th",{className:"py-2.5 px-4 text-center text-blue-700",children:"L"}),t.jsx("th",{className:"py-2.5 px-4 text-center text-rose-700",children:"P"}),t.jsx("th",{className:"py-2.5 px-4 text-center",children:"Total"}),t.jsx("th",{className:"py-2.5 px-4 text-center",children:"Aktif"})]})}),t.jsx("tbody",{className:"divide-y divide-slate-100",children:I.map(e=>t.jsxs("tr",{className:"hover:bg-slate-50",children:[t.jsxs("td",{className:"py-2.5 px-4 font-bold text-slate-900",children:["Tingkat ",e.tingkat]}),t.jsx("td",{className:"py-2.5 px-4 text-center font-mono",children:e.rombelCount}),t.jsx("td",{className:"py-2.5 px-4 text-center font-bold text-blue-700",children:e.l}),t.jsx("td",{className:"py-2.5 px-4 text-center font-bold text-rose-700",children:e.p}),t.jsx("td",{className:"py-2.5 px-4 text-center font-black text-slate-900",children:e.total}),t.jsx("td",{className:"py-2.5 px-4 text-center font-semibold text-emerald-700",children:e.aktif})]},e.tingkat))})]})})]}),t.jsxs("div",{className:"bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden",children:[t.jsx("div",{className:"px-5 py-3.5 bg-slate-50 border-b border-slate-200 font-extrabold text-xs text-slate-800 uppercase tracking-wider",children:"Rekapitulasi Berdasarkan Agama"}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full text-left border-collapse text-xs",children:[t.jsx("thead",{children:t.jsxs("tr",{className:"border-b border-slate-200 text-slate-500 text-[10px] uppercase",children:[t.jsx("th",{className:"py-2.5 px-4",children:"Agama"}),t.jsx("th",{className:"py-2.5 px-4 text-center text-blue-700",children:"L"}),t.jsx("th",{className:"py-2.5 px-4 text-center text-rose-700",children:"P"}),t.jsx("th",{className:"py-2.5 px-4 text-center",children:"Total"}),t.jsx("th",{className:"py-2.5 px-4 text-right",children:"Persentase"})]})}),t.jsx("tbody",{className:"divide-y divide-slate-100",children:B.map(e=>{const a=i.total>0?Math.round(e.total/i.total*100):0;return t.jsxs("tr",{className:"hover:bg-slate-50",children:[t.jsx("td",{className:"py-2.5 px-4 font-bold text-slate-900",children:e.agama}),t.jsx("td",{className:"py-2.5 px-4 text-center font-bold text-blue-700",children:e.l}),t.jsx("td",{className:"py-2.5 px-4 text-center font-bold text-rose-700",children:e.p}),t.jsx("td",{className:"py-2.5 px-4 text-center font-black text-slate-900",children:e.total}),t.jsxs("td",{className:"py-2.5 px-4 text-right font-mono text-slate-600",children:[a,"%"]})]},e.agama)})})]})})]})]}),b==="daftar"&&t.jsx("div",{className:"bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden",children:t.jsx("div",{className:"overflow-x-auto max-h-[540px]",children:t.jsxs("table",{className:"w-full text-left border-collapse text-xs",children:[t.jsx("thead",{className:"sticky top-0 bg-slate-50 z-10",children:t.jsxs("tr",{className:"text-slate-600 border-b border-slate-200 uppercase text-[10px]",children:[t.jsx("th",{className:"py-3 px-3.5 font-bold",children:"No"}),t.jsx("th",{className:"py-3 px-3.5 font-bold",children:"Nama Lengkap Siswa"}),t.jsx("th",{className:"py-3 px-3.5 font-bold",children:"NISN / NIPD"}),t.jsx("th",{className:"py-3 px-3.5 font-bold text-center",children:"JK"}),t.jsx("th",{className:"py-3 px-3.5 font-bold",children:"Rombel"}),t.jsx("th",{className:"py-3 px-3.5 font-bold",children:"Status"}),t.jsx("th",{className:"py-3 px-3.5 font-bold text-center",children:"Diunggah"}),t.jsx("th",{className:"py-3 px-3.5 font-bold text-center",children:"Terverifikasi"})]})}),t.jsx("tbody",{className:"divide-y divide-slate-100",children:_.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,className:"py-8 text-center text-slate-400",children:"Tidak ada siswa yang sesuai dengan filter saat ini."})}):_.map((e,a)=>t.jsxs("tr",{className:"hover:bg-slate-50/80",children:[t.jsx("td",{className:"py-2.5 px-3.5 font-mono text-slate-400",children:a+1}),t.jsx("td",{className:"py-2.5 px-3.5 font-bold text-slate-900",children:e.nama}),t.jsxs("td",{className:"py-2.5 px-3.5 font-mono text-slate-600",children:[e.nisn||"-"," / ",e.nipd||"-"]}),t.jsx("td",{className:"py-2.5 px-3.5 text-center font-bold",children:e.jenisKelamin||"-"}),t.jsx("td",{className:"py-2.5 px-3.5 font-semibold text-emerald-700",children:e.kelas||"Belum Masuk Rombel"}),t.jsx("td",{className:"py-2.5 px-3.5",children:t.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${(e.status||"Aktif")==="Aktif"?"bg-emerald-50 text-emerald-700":"bg-amber-50 text-amber-700"}`,children:e.status||"Aktif"})}),t.jsx("td",{className:"py-2.5 px-3.5 text-center font-mono",children:e.docStats.uploadedCount}),t.jsx("td",{className:"py-2.5 px-3.5 text-center",children:t.jsxs("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${e.docStats.isComplete?"bg-emerald-100 text-emerald-800":"bg-slate-100 text-slate-600"}`,children:[e.docStats.verifiedCount," Berkas"]})})]},e.id))})]})})})]})}export{dt as default};
