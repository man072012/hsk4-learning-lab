/* HSK4 V5.1 — non-destructive audited UI layer. Legacy GRAMMAR/PICTURES remain untouched. */
(()=>{'use strict';
const W=window.HSK4_V5_WORD_BANK,A=window.HSK4_V5_ABC;if(!W||!A){console.error('HSK4 V5 data missing');return;}
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const G=W.groups,F=W.families;
const GUIDE={
 ba:'رتّبها ككتلة: الفاعل/الظرف → 把 → الشيء المتأثر → الفعل → النتيجة أو الاتجاه. لا تنقل 把 لمجرد وجود أمر أو نهي.',
 bei:'ابدأ بالشيء المتأثر بالفعل، ثم 被، ثم المنفّذ إن ظهر، ثم الفعل/النتيجة. وجود 被 داخل وصف اسمي يُحفظ كوسم ثانوي فقط.',
 comparative:'ابحث عن طرفي المقارنة أولًا. مع 比 يأتي A ثم 比 ثم B ثم الوصف/الفرق؛ ومع 相反 أو 跟…差不多 احفظ الكتلة الدالة على المقارنة.',
 de_degree_complement:'得 هنا يربط الفعل بما يصف درجته أو حالته: فعل + 得 + الوصف. لا تخلطه مع 得 بمعنى «يجب».',
 adj_de_result_complement:'الوصف قبل 得، وما بعد 得 يبين النتيجة أو المظهر الناتج.',
 adverbial_de:'الوصف + 地 يسبق الفعل ويشرح كيف وقع الفعل. ميّزه عن 的 قبل الاسم و得 بعد الفعل.',
 attributive_de_noun:'ابنِ كتلة الاسم أولًا: المعدِّل + 的 + الاسم. ثم ضع الكتلة كاملة في موقعها داخل الجملة.',
 de_phrase:'هنا 的 تُنشئ عبارة اسمية/وصفية أو خبرًا وصفيًا. قد تظهر 是، لكن هذا لا يعني تلقائيًا أن الجملة من نوع تأكيد حدث 是…的.',
 shi_definition:'هذه 是 للحكم أو التعريف وربط الموضوع بالخبر. لا تبحث عن «تفصيل حدث» ما لم توجد بنية 是…的 الحدثية فعلًا.',
 shi_de_event:'هنا بنية 是…的 تُستخدم لتسليط الضوء على تفصيل في حدث: مثل الوقت أو الفاعل أو الطريقة. في بعض الاستعمالات يمكن حذف 是 مع بقاء الوظيفة؛ لذلك نحكم من البنية والمعنى لا من وجود الرمز وحده.',
 existential:'ابدأ بالمكان/الموضع، ثم فعل الوجود/الظهور مثل 有 أو 着، ثم الشيء الموجود أو الظاهر.',
 pivotal:'في 让/使/叫 ونحوها، الاسم بعد الفعل الأول يكون متلقي التأثير وغالبًا فاعلًا معنويًا للفعل التالي.',
 prep_phrase:'تعامل مع 对/给/用/从…到/跟/根据 ونحوها ككتلة علاقة قبل المسند أو في موقعها الطبيعي.',
 progressive:'正在 / 在 + الفعل يدل على حدث جارٍ. لا تخلط 在 الدالة على المكان بـ 在 الاستمرارية.',
 question_focus:'到底 / 究竟 عدسة على السؤال؛ رتّب هيكل السؤال الطبيعي أولًا ثم ضع أداة التركيز في موقعها الظرفي.',
 rhetorical:'ابنِ الجملة الطبيعية ثم حافظ على أداة النبرة البلاغية مثل 难道…吗 دون افتراض أن كل سؤال بلاغي له نفس القالب.',
 interrogative:'حدّد كلمة السؤال أو 吗 أولًا، ثم ابنِ الجملة الخبرية المقابلة وضع أداة السؤال في موقعها الطبيعي.',
 imperative:'ابحث عن 请 / 别 / 不要 / 最好 / 祝… ونبرة الطلب. إن وُجد تركيب أقوى مثل 把 في سؤال المشروع فقد يكون هو التصنيف الأساسي ويظهر الأمر كوسم.',
 compressed_complex:'ثبّت زوج الربط قبل بقية الكلمات: 一…就، 再…就، 既…又… ونحوها؛ العلاقة المنطقية تحدد ترتيب الجزأين.',
 degree_change:'越来越 كتلة دالة على التدرج: الموضوع/الفعل الرابط → 越来越 → الصفة أو الحالة.',
 modal_verb:'الفعل المساعد مثل 能/能够/要/得/不得不 يسبق الفعل الرئيسي أو الخبر الذي يتحكم فيه.',
 mental_verb:'أفعال مثل 想/觉得/希望/拒绝/保证 تأخذ بعدَها محتوى أو فعلًا/جملة؛ حدّد مضمون الفعل الذهني كوحدة.',
 verb_predicate:'ابدأ بالفعل الرئيس وعلاقته بالمفعول أو المكمل، ثم أعد الظروف والوقت والمكان إلى مواضعها الطبيعية.',
 adjective_predicate:'في الصينية قد تكون الصفة نفسها مسندًا من دون 是. ظروف الدرجة مثل 很/太/挺/非常 تأتي قبل الصفة.',
 subject_predicate:'الجملة الداخلية تعمل مسندًا للموضوع الخارجي؛ حدّد الموضوع الكبير ثم ابنِ الجملة التي تخبر عنه.',
 noun_predicate:'المسند اسم/كمية/وقت من دون حاجة إلى 是 في الأنماط التي يسمح بها السياق.',
 general:'لا توجد علامة حاسمة واحدة؛ ابحث عن المسند أولًا، ثم الفاعل والمفعول، ثم ألحق الظروف والمعدلات.',
 verbal_measure_complement:'مكمّل عدد المرات يأتي بعد الفعل/المفعول وفق البنية؛ مثل 一遍، 一次.',
 duration_complement:'حدّد مدة الحدث؛ المدة ترتبط بالفعل ولا تُعامل كظرف وقت بداية.',
 directional_complement:'مكمّل الاتجاه مثل 来/去/进/出/上/下 يرتبط بالفعل كوحدة ولا يُفصل عنه بلا سبب.',
 locative_complement:'مكمّل المكان يحدد أين انتهى الفعل/الوضع؛ اربطه بالفعل قبل ترتيب باقي الجملة.',
 serial_verb:'هناك فعلان متتابعان يشتركان عادةً في الفاعل؛ رتّبهما حسب الهدف أو التسلسل الدلالي.',
 degree_mental:'ظرف الدرجة يسبق الفعل النفسي/التقييمي ويحدد شدته.'
};
const originLabel=x=>x.origin==='teacher_added'?'ملفات المحاضرات والدروس':x.origin==='project_post210'?'المشروع بعد 210':'المشروع الأصلي';
const originClass=x=>x.origin==='teacher_added'?'teacher':x.origin==='project_post210'?'post':'';
const focusName=id=>id&&G[id]?G[id].zh:'';
function speak(text){try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='zh-CN';u.rate=.82;speechSynthesis.speak(u)}catch(_){}}
function setStats(){
 const s=$('.stats'); if(s){const spans=$$('span',s);if(spans[0])spans[0].textContent=`0/${W.meta.active_total} ✓`;if(spans[1])spans[1].innerHTML=`<b>${Object.keys(G).length}</b> مجموعة`;}
}
function addAbcTab(){
 const tabs=$('.tabs'), container=$('.container'); if(!tabs||!container||$('[data-section="abc"]'))return;
 const t=document.createElement('div');t.className='tab';t.dataset.section='abc';t.tabIndex=0;t.setAttribute('role','tab');
 t.innerHTML='<span class="icon">🔀</span>ترتيب A/B/C <span class="zh">句子排序</span>';
 const pic=$('[data-section="pictures"]',tabs); pic?tabs.insertBefore(t,pic):tabs.append(t);
 const sec=document.createElement('div');sec.id='section-abc';sec.className='section';sec.innerHTML='<div id="v5-abc-root"></div>';container.append(sec);
 const activate=()=>{if(typeof window.showSection==='function')window.showSection('abc');else{$$('.section').forEach(x=>x.classList.remove('active'));$$('.tab').forEach(x=>x.classList.remove('active'));sec.classList.add('active');t.classList.add('active')}};
 t.addEventListener('click',activate);t.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activate()}});
}
function toolbar(){return `<div class="v5-toolbar"><div class="v5-toolbar-row"><input id="v5Search" class="v5-search" type="search" placeholder="ابحث بالصينية أو رقم الجملة…" aria-label="بحث في جمل ترتيب الكلمات"><select id="v5Origin" class="v5-select" aria-label="فلترة المصدر"><option value="all">كل المصادر</option><option value="project_original">المشروع الأصلي</option><option value="project_post210">بعد 210</option><option value="teacher_added">ملفات المحاضرات والدروس</option></select><span id="v5VisibleCount" class="v5-count"></span></div><div class="v5-family-nav"><button class="v5-chip active" data-family="all">الكل</button>${Object.entries(F).map(([id,v])=>`<button class="v5-chip" data-family="${id}">${v[0]} ${esc(v[1])}</button>`).join('')}</div></div>`}
function qHTML(x,idx){
 const focus=x.teaching_focus_group&&x.teaching_focus_group!==x.primary_group?`<span class="v5-focus">تركيز المعلمة: <span class="zh">${esc(focusName(x.teaching_focus_group))}</span></span>`:'';
 const source=x.origin==='teacher_added'?`ملف المعلمة · ص${x.teacher_crossref?.page??'—'}`:`صف المصدر ${x.source_row_aliases.join(' / ')}`;
 const alt=x.alternate_project_variants?.length?`<details class="v5-alt"><summary>صيغة قطع بديلة محفوظة من المصدر (لا تُكرر الجملة)</summary>${x.alternate_project_variants.map(v=>`<div class="zh" dir="ltr">#${v.legacy_index}: ${v.fragments.map(esc).join(' / ')}</div>`).join('')}</details>`:'';
 return `<div class="v5-q" data-id="${x.id}" data-answer="${esc(x.answer)}"><div class="v5-q-top"><span class="v5-qno">${x.legacy_index?`#${x.legacy_index}`:`T${String(idx+1).padStart(3,'0')}`}</span><span class="v5-origin ${originClass(x)}">${originLabel(x)}</span>${focus}</div><div class="v5-frags">${x.fragments.map((f,i)=>`<button class="v5-frag" data-i="${i}" type="button">${esc(f)}</button>`).join('')}</div><div class="v5-answer"></div><div class="v5-actions"><button class="v5-btn primary" data-act="check">تحقّق</button><button class="v5-btn" data-act="clear">مسح</button><button class="v5-btn info" data-act="reveal">إظهار</button><button class="v5-btn" data-act="tts">🔊</button></div><div class="v5-feedback"></div>${x.pinyin?`<div class="v5-pinyin v5-hidden">${esc(x.pinyin)}</div>`:''}<div class="v5-source-note">${esc(source)}</div>${alt}</div>`;
}
function renderGroupBody(card,items){
 if(card.dataset.rendered)return;card.dataset.rendered='1';const gid=card.dataset.group, body=$('.v5-group-body',card);body.innerHTML=`<div class="v5-guide"><b>مفتاح الحل:</b> ${esc(GUIDE[gid]||GUIDE.general)}${['shi_definition','de_phrase','shi_de_event'].includes(gid)?'<div class="v5-special-warning">قاعدة الحماية: لا نُصنّف الجملة على أساس وجود 是 أو 的 وحدهما؛ وظيفة الجملة هي التي تحسم التصنيف.</div>':''}</div><div class="v5-question-list">${items.map(qHTML).join('')}</div>`;
}
function renderWordBank(){
 const sec=$('#section-grammar'), root=$('#grammar-list');if(!sec||!root)return;
 const intro=$('.intro',sec); if(intro)intro.innerHTML=`<h2>القسم الأول · ترتيب الكلمات — تدقيق V5.1</h2><p>البنك النشط الآن <b>${W.meta.active_total}</b> جملة فريدة: <b>${W.meta.base_unique_active}</b> من المشروع بعد دمج التكرارات + <b>${W.meta.teacher_added_active}</b> إضافة آمنة من ملفات المعلمة. كل جملة لها <b>مجموعة أساسية واحدة</b>، وأي تركيب إضافي يظهر كوسم ثانوي.</p><div class="v5-shi-key"><div class="v5-shi-cell"><strong>是判断句</strong>تعريف/حكم؛ ليست 是…的.</div><div class="v5-shi-cell"><strong>的字短语</strong>وظيفة اسمية/وصفية؛ قد تظهر مع 是 من دون تأكيد حدث.</div><div class="v5-shi-cell"><strong>是…的（事件强调）</strong>تأكيد تفصيل حدث؛ وقد تُحذف 是 في بعض الصيغ مع بقاء الوظيفة.</div></div>`;
 root.innerHTML=toolbar()+`<div class="v5-audit-note">✓ فُحصت صفوف المشروع الـ220 جملةً جملةً. التكراران الأصليان محفوظان كصيغ قطع بديلة ولا يظهران كسؤالين مكررين. الحالات الخمس غير المتطابقة في PDF المعلمة ليست ضمن بنك الطالب.</div><div id="v5Groups"></div>`;
 const host=$('#v5Groups');
 const order=['core','modifiers','special','relations','logic'];
 for(const fid of order){const groups=Object.keys(G).filter(g=>G[g].family===fid&&W.items.some(x=>x.primary_group===g));if(!groups.length)continue;const ft=document.createElement('div');ft.className='v5-family-block';ft.dataset.family=fid;ft.innerHTML=`<div class="v5-family-title"><span>${F[fid][0]}</span><b>${esc(F[fid][1])}</b><span class="zh">${esc(F[fid][2])}</span></div>`;host.append(ft);for(const gid of groups){const items=W.items.filter(x=>x.primary_group===gid);const c=document.createElement('div');c.className='v5-group-card';c.dataset.group=gid;c.dataset.family=fid;c.innerHTML=`<button class="v5-group-head" type="button" aria-expanded="false"><span class="v5-group-num">${items.length}</span><span class="v5-group-titles"><span class="v5-group-ar">${esc(G[gid].ar)}</span><span class="v5-group-zh zh">${esc(G[gid].zh)}</span></span><span class="v5-group-count">${items.length} جملة</span><span class="v5-group-chev">⌄</span></button><div class="v5-group-body"></div>`;c._items=items;ft.append(c)}}
 root.addEventListener('click',wordClick);$('#v5Search').addEventListener('input',applyFilters);$('#v5Origin').addEventListener('change',applyFilters);$$('.v5-chip').forEach(b=>b.addEventListener('click',()=>{$$('.v5-chip').forEach(x=>x.classList.remove('active'));b.classList.add('active');applyFilters()}));applyFilters();
}
function wordClick(e){
 const head=e.target.closest('.v5-group-head');if(head){const c=head.closest('.v5-group-card');const open=c.classList.toggle('open');head.setAttribute('aria-expanded',String(open));if(open)renderGroupBody(c,c._filtered||c._items);return}
 const frag=e.target.closest('.v5-frag');if(frag){const q=frag.closest('.v5-q'),ans=$('.v5-answer',q);frag.classList.add('used');const clone=frag.cloneNode(true);clone.classList.remove('used');clone.dataset.src=frag.dataset.i;ans.append(clone);return}
 const inAns=e.target.closest('.v5-answer .v5-frag');if(inAns){const q=inAns.closest('.v5-q'),src=$(`.v5-frags .v5-frag[data-i="${inAns.dataset.src}"]`,q);src?.classList.remove('used');inAns.remove();return}
 const btn=e.target.closest('[data-act]');if(!btn)return;const q=btn.closest('.v5-q'),act=btn.dataset.act;if(act==='clear')clearQ(q);if(act==='check')checkQ(q);if(act==='reveal')revealQ(q);if(act==='tts')speak(q.dataset.answer);
}
function built(q){return $$('.v5-answer .v5-frag',q).map(x=>x.textContent.trim()).join('')}
function clearQ(q){$$('.v5-frags .v5-frag',q).forEach(x=>x.classList.remove('used'));$('.v5-answer',q).innerHTML='';q.classList.remove('correct','wrong');const f=$('.v5-feedback',q);f.className='v5-feedback';f.innerHTML=''}
function feedback(q,ok,html){q.classList.toggle('correct',ok);q.classList.toggle('wrong',!ok);const f=$('.v5-feedback',q);f.className=`v5-feedback show ${ok?'ok':'bad'}`;f.innerHTML=html}
function checkQ(q){const got=built(q),want=q.dataset.answer;if(!got){feedback(q,false,'رتّب القطع أولًا.');return}feedback(q,got===want,got===want?'✓ صحيح. ثبّت سبب الترتيب لا شكل الجملة فقط.':`ليست بعد. راجع الكتل وعلامة القاعدة قبل كشف الحل.`)}
function revealQ(q){const x=W.items.find(z=>z.id===q.dataset.id);feedback(q,true,`<div class="v5-answer-zh">${esc(x.answer)}</div>${x.pinyin?`<div class="v5-pinyin">${esc(x.pinyin)}</div>`:''}${x.explain?`<div>${esc(x.explain)}</div>`:''}`)}
function applyFilters(){
 const term=$('#v5Search').value.trim().toLowerCase(),origin=$('#v5Origin').value,fam=$('.v5-chip.active')?.dataset.family||'all';let total=0;
 $$('.v5-family-block').forEach(block=>{let familyAny=false;$$('.v5-group-card',block).forEach(c=>{const filt=c._items.filter(x=>(origin==='all'||x.origin===origin)&&(!term||x.answer.toLowerCase().includes(term)||x.fragments.join(' ').toLowerCase().includes(term)||String(x.legacy_index||'').includes(term)));c._filtered=filt;const show=(fam==='all'||c.dataset.family===fam)&&filt.length;c.hidden=!show;if(show){familyAny=true;total+=filt.length;$('.v5-group-num',c).textContent=filt.length;$('.v5-group-count',c).textContent=`${filt.length} جملة`;if(c.dataset.rendered){c.dataset.rendered='';$('.v5-group-body',c).innerHTML='';if(c.classList.contains('open'))renderGroupBody(c,filt)}}});block.hidden=!familyAny});$('#v5VisibleCount').textContent=`${total} جملة`;
}
const strategyLabel={first_sentence:'تحديد الجملة الأولى',pronouns:'تتبّع الضمائر',signal_words:'الكلمات الإشارية/الروابط'};
function abcHTML(x,i){return `<div class="v5-abc" data-id="${x.id}" data-answer="${x.answer_order}"><div class="v5-abc-top"><span class="v5-qno">${i+1}</span><span class="v5-strategy">${strategyLabel[x.strategy]||x.strategy}</span><span class="v5-source-note">ص${x.page}</span></div><div class="v5-abc-lines">${'ABC'.split('').map(k=>`<button class="v5-abc-line" data-letter="${k}" type="button"><span class="v5-letter">${k}</span><span>${esc(x[k])}</span></button>`).join('')}</div><div class="v5-abc-order"></div><div class="v5-actions"><button class="v5-btn primary" data-abc-act="check">تحقّق</button><button class="v5-btn" data-abc-act="clear">مسح</button><button class="v5-btn info" data-abc-act="reveal">إظهار الترتيب</button></div><div class="v5-feedback"></div></div>`}
function renderABC(){const root=$('#v5-abc-root');if(!root)return;root.innerHTML=`<div class="intro"><h2>القسم الجديد · ترتيب الجمل A/B/C</h2><p>هذا القسم مستقل عن ترتيب الكلمات. يحتوي <b>${A.meta.count}</b> تمرينًا من ملف <span class="zh">句子排序 重要练习</span>. لا تغيّر A/B/C نفسها؛ المطلوب تحديد تسلسل الجمل الكامل.</p><div class="v5-method"><div><b>1 · 找首句</b>ابحث عن الجملة التي تصلح بدايةً للموضوع.</div><div><b>2 · 信号词</b>استخدم كلمات الربط لتحديد العلاقة المنطقية.</div><div><b>3 · 代词</b>تتبّع الضمائر وما تعود إليه.</div><div><b>4 · 检查逻辑</b>اقرأ التسلسل كاملًا وتحقق من المنطق.</div></div></div><div class="v5-audit-note">تم التحقق آليًا من أن الإجابات الـ72 كلها permutations صحيحة من A/B/C، وحُفظ تقسيم المعلمة إلى: البداية، الضمائر، وكلمات الربط.</div><div class="v5-abc-list">${A.items.map(abcHTML).join('')}</div>`;root.addEventListener('click',abcClick)}
function abcClick(e){const line=e.target.closest('.v5-abc-line');if(line){const q=line.closest('.v5-abc');if(line.classList.contains('used'))return;line.classList.add('used');const t=document.createElement('button');t.className='v5-order-token';t.type='button';t.textContent=line.dataset.letter;t.dataset.letter=line.dataset.letter;$('.v5-abc-order',q).append(t);return}const tok=e.target.closest('.v5-order-token');if(tok){const q=tok.closest('.v5-abc');$(`.v5-abc-line[data-letter="${tok.dataset.letter}"]`,q)?.classList.remove('used');tok.remove();return}const b=e.target.closest('[data-abc-act]');if(!b)return;const q=b.closest('.v5-abc'),a=b.dataset.abcAct;if(a==='clear')clearABC(q);if(a==='check')checkABC(q);if(a==='reveal')revealABC(q)}
function clearABC(q){$$('.v5-abc-line',q).forEach(x=>x.classList.remove('used'));$('.v5-abc-order',q).innerHTML='';q.classList.remove('correct','wrong');const f=$('.v5-feedback',q);f.className='v5-feedback';f.innerHTML=''}
function checkABC(q){const got=$$('.v5-order-token',q).map(x=>x.dataset.letter).join('');const ok=got===q.dataset.answer;q.classList.toggle('correct',ok);q.classList.toggle('wrong',!ok);const f=$('.v5-feedback',q);f.className=`v5-feedback show ${ok?'ok':'bad'}`;f.textContent=!got?'اختر الجمل الثلاث أولًا.':ok?'✓ التسلسل صحيح.':'راجع البداية، الروابط، والضمائر قبل كشف الحل.'}
function revealABC(q){const x=A.items.find(z=>z.id===q.dataset.id);const f=$('.v5-feedback',q);f.className='v5-feedback show ok';f.innerHTML=`الترتيب: <b dir="ltr">${x.answer_order}</b> · ${x.answer_order.split('').map(k=>`<span class="zh" dir="ltr">${esc(x[k])}</span>`).join(' → ')}`}
function init(){addAbcTab();renderWordBank();renderABC();setStats();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
