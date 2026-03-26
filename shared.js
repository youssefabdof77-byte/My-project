/* ════════ PUREFORM — shared.js ════════ */

/* ════════ DATA ════════ */
const KITS = [
  // Strong Kit
  { id:'b1', kit:'strong', em:'🌿', name:'سيروم تفتيح البشرة', kitLabel:'كيت القوة', tags:['تفتيح','ترطيب'], price:320, orig:420, benefits:['يُوحّد لون البشرة','يُقلّل البقع الداكنة','ترطيب عميق'], best:true },
  { id:'b2', kit:'strong', em:'🌸', name:'كريم الإشراق اليومي', kitLabel:'كيت القوة', tags:['إشراق','حماية'], price:280, orig:370, benefits:['إشراق فوري','حماية من الشمس','بشرة نضرة'], hot:true },
  { id:'b3', kit:'strong', em:'✨', name:'غسول التنقية العميقة', kitLabel:'كيت القوة', tags:['تنقية','تكافح البثور'], price:180, orig:240, benefits:['ينظّف المسامات','يُوازن الدهون','بشرة صافية'] },
  // Enzyme Kit
  { id:'e1', kit:'enzyme', em:'🍋', name:'ماسك الإنزيم المقشّر', kitLabel:'كيت الإنزيم', tags:['تقشير','تجديد'], price:350, orig:460, benefits:['يجدّد خلايا البشرة','يُشرّق البشرة','يُزيل الجلد الميت'], best:true },
  { id:'e2', kit:'enzyme', em:'🌼', name:'تونر الإنزيم الملطّف', kitLabel:'كيت الإنزيم', tags:['ترطيب','توازن'], price:220, orig:290, benefits:['يُوازن الـ pH','يُنعّم البشرة','ترطيب فوري'] },
  { id:'e3', kit:'enzyme', em:'💎', name:'أمبولات الإنزيم المركّزة', kitLabel:'كيت الإنزيم', tags:['علاجي','مركّز'], price:480, orig:620, benefits:['نتائج مرئية سريعة','يُعالج التصبّغات','يُشدّد المسامات'], hot:true },
  // Berries Kit
  { id:'be1', kit:'berries', em:'🫐', name:'سيروم التوت المضاد للأكسدة', kitLabel:'كيت التوت', tags:['مضاد أكسدة','ضد الشيخوخة'], price:420, orig:550, benefits:['يُحارب الشيخوخة المبكرة','يُعيد الشباب للبشرة','يُشرّق ويُرطّب'], best:true, newBadge:true },
  // Splash Kit
  { id:'s1', kit:'splash', em:'💧', name:'جيل الترطيب الفائق', kitLabel:'كيت سبلاش', tags:['ترطيب','خفيف'], price:240, orig:310, benefits:['ترطيب 24 ساعة','خفيف على البشرة','مناسب للبشرة الدهنية'] },
  { id:'s2', kit:'splash', em:'🌊', name:'ميست التحديد الفوري', kitLabel:'كيت سبلاش', tags:['انتعاش','تثبيت'], price:160, orig:210, benefits:['يُثبّت المكياج','ترطيب فوري','يُعطي إشراقاً طبيعياً'] },
  // Lotion Kit
  { id:'l1', kit:'lotion', em:'🧴', name:'لوشن الجسم المُغذّي', kitLabel:'كيت اللوشن', tags:['تغذية','توحيد'], price:200, orig:260, benefits:['يُغذّي الجسم بعمق','يُوحّد لون الجسم','رائحة عطرية رائعة'] },
  { id:'pk1', kit:'lotion', em:'🌺', name:'حزمة البشرة المثالية', kitLabel:'كيت اللوشن', tags:['حزمة','قيمة'], price:550, orig:720, benefits:['توفير أكثر من 23%','مجموعة متكاملة','هدية مثالية'], best:true }
];

const ELEVATE = [
  { id:'el1', em:'🔥', name:'Burnmode', sub:'FAT BURNER PRO', macros:['120mg كافيين','500mg L-كارنيتين','300mg CLA'], uses:['يُعزّز حرق الدهون بسرعة','يرفع طاقتك للتدريب','يُقلّل الشهية بذكاء'], price:480, orig:620, save:'وفّر 140 ج' },
  { id:'el2', em:'💪', name:'Creatine', sub:'MONOHYDRATE 100%', macros:['5g كرياتين','لا سكر','لا إضافات'], uses:['يزيد القوة العضلية','يُحسّن الأداء الرياضي','يُسرّع التعافي'], price:320, orig:400, save:'وفّر 80 ج' },
  { id:'el3', em:'🏆', name:'MaxBulk', sub:'MASS GAINER ELITE', macros:['50g بروتين','250g كارب','850 سعر'], uses:['زيادة الكتلة العضلية','كالوريز عالية جودة','مثالي للنحيفين'], price:650, orig:850, save:'وفّر 200 ج' },
  { id:'el4', em:'⚡', name:'ISO Pro', sub:'WHEY ISOLATE ZERO', macros:['30g بروتين','0g دهون','120 سعر'], uses:['بروتين نقي 100%','مناسب للحمية','يُبني العضل ويُقلّل الدهون'], price:580, orig:740, save:'وفّر 160 ج' }
];

const REVIEWS = {
  b1:[
    {name:'سارة أحمد',stars:5,text:'منتج رائع جداً! بشرتي أصبحت أكثر إشراقاً بعد أسبوعين فقط',date:'منذ 3 أيام'},
    {name:'مريم علي',stars:5,text:'أفضل سيروم استخدمته في حياتي. النتيجة مذهلة والبشرة ناعمة جداً',date:'منذ أسبوع'},
    {name:'نور محمد',stars:4,text:'منتج ممتاز، لكن الرائحة قوية قليلاً. النتيجة رائعة',date:'منذ أسبوعين'},
    {name:'لينا خالد',stars:5,text:'سيروم التفتيح أنقذني! البقع الداكنة اختفت تقريباً',date:'منذ شهر'},
    {name:'هبة إبراهيم',stars:5,text:'أوصي به لكل بنت، النتيجة واضحة من الأسبوع الأول',date:'منذ شهر'}
  ],
  b2:[{name:'دينا محمود',stars:5,text:'كريم الإشراق أصبح جزء من روتيني اليومي. البشرة تبدو نضرة طوال اليوم',date:'منذ 5 أيام'},{name:'رنا سعد',stars:5,text:'خفيف على البشرة ويعطي إشراق طبيعي. حبيته جداً',date:'منذ أسبوع'},{name:'آية حسين',stars:4,text:'جيد لكن أتمنى تأثيره يدوم أطول',date:'منذ أسبوعين'},{name:'شهد عمر',stars:5,text:'أحسن قرار اشتريته. بشرتي تغيرت تماماً',date:'منذ شهر'},{name:'ياسمين رضا',stars:5,text:'منتج خرافي من الجد. راضية جداً',date:'منذ شهر'}],
  b3:[{name:'فاطمة حسن',stars:5,text:'الغسول نظّف مساماتي بشكل لم يفعله أي غسول آخر',date:'منذ 4 أيام'},{name:'زينب إبراهيم',stars:4,text:'ممتاز للبشرة الدهنية، يُوازن الدهون بشكل رائع',date:'منذ أسبوع'},{name:'منى يوسف',stars:5,text:'قضى على البثور في أقل من أسبوعين',date:'منذ 3 أسابيع'},{name:'رهف طارق',stars:5,text:'الأفضل في السوق للبشرة المختلطة',date:'منذ شهر'},{name:'لمى جميل',stars:4,text:'جيد ولكن يحتاج وقت أطول لرؤية النتائج الكاملة',date:'منذ شهرين'}],
  e1:[{name:'مي أحمد',stars:5,text:'الماسك رهيب! بشرتي أصبحت ناعمة كالحرير',date:'منذ يومين'},{name:'نادية علي',stars:5,text:'التقشير بالإنزيم أفضل من التقشير الفيزيائي. غيّر نظرتي',date:'منذ أسبوع'},{name:'صفاء محمود',stars:5,text:'نتيجة ممتازة من أول استخدام. البشرة مشرقة جداً',date:'منذ أسبوعين'},{name:'روان سلطان',stars:4,text:'رائع لكن لا تستخدميه كثيراً كي لا تُهيّج البشرة',date:'منذ شهر'},{name:'إيمان شريف',stars:5,text:'أفضل استثمار لبشرتي. النتيجة مبهرة',date:'منذ شهر'}],
  e2:[{name:'حنين فاروق',stars:4,text:'التونر ملطّف ومريح على البشرة',date:'منذ أسبوع'},{name:'سلمى حامد',stars:5,text:'يُوازن البشرة بعد التنظيف. مثالي',date:'منذ أسبوعين'},{name:'نهى رشاد',stars:5,text:'أحسن تونر استخدمته للبشرة الحساسة',date:'منذ شهر'},{name:'سمر كامل',stars:4,text:'جيد ولكن العبوة صغيرة بالنسبة للسعر',date:'منذ شهر'},{name:'ريم خضر',stars:5,text:'ترطيبه فوري ورائع. لا أستغني عنه',date:'منذ شهرين'}],
  e3:[{name:'دانا مصطفى',stars:5,text:'الأمبولات شغلت معايا من اليوم الأول. البقع طارت',date:'منذ 3 أيام'},{name:'لارا بسيوني',stars:5,text:'مركّزة وفعّالة جداً. تستحق كل قرش',date:'منذ أسبوع'},{name:'ميساء رمزي',stars:5,text:'قضت على التصبغ الهرموني عندي. شكراً Risen Live',date:'منذ أسبوعين'},{name:'تالا صادق',stars:4,text:'فعّالة لكن السعر مرتفع قليلاً',date:'منذ شهر'},{name:'جويل حداد',stars:5,text:'الأفضل للعناية المكثّفة. لا أستطيع العيش بدونها',date:'منذ شهر'}],
  be1:[{name:'كارين عزت',stars:5,text:'سيروم التوت أصبح المنتج المفضّل لديّ. مذهل',date:'منذ يوم'},{name:'غادة نجيب',stars:5,text:'يُحارب الشيخوخة بشكل ملحوظ. بشرتي تبدو أصغر',date:'منذ 4 أيام'},{name:'منة الله سعيد',stars:5,text:'رائحته جميلة جداً والنتيجة أجمل',date:'منذ أسبوع'},{name:'مريان وهبة',stars:4,text:'ممتاز، أتمنى لو يكون أقل لزوجة',date:'منذ أسبوعين'},{name:'كندة فتحي',stars:5,text:'لا أصدق الفرق! بشرتي شابّت من جديد',date:'منذ شهر'}],
  s1:[{name:'نجلاء توفيق',stars:5,text:'الجيل رهيب! ترطيب فائق وخفيف جداً',date:'منذ 3 أيام'},{name:'رشا حجازي',stars:4,text:'جيد للبشرة الدهنية، لا يُضيف لمعة',date:'منذ أسبوع'},{name:'هديل منصور',stars:5,text:'أفضل ترطيب صيفي استخدمته',date:'منذ أسبوعين'},{name:'شيرين ممدوح',stars:5,text:'يترطّب لـ 24 ساعة فعلاً، مش مجرد كلام تسويقي',date:'منذ شهر'},{name:'سلوى سليم',stars:4,text:'ممتاز لكن العبوة تنتهي بسرعة',date:'منذ شهرين'}],
  s2:[{name:'دلال شمس',stars:5,text:'الميست أصبح ضروري في يومي. يُثبّت المكياج بشكل رائع',date:'منذ يومين'},{name:'ربا ماهر',stars:5,text:'انتعاش فوري وإشراق طبيعي. أحبه',date:'منذ أسبوع'},{name:'جنى بكري',stars:4,text:'ممتاز لكن الرائحة خفيفة جداً، أتمنى أقوى',date:'منذ أسبوعين'},{name:'إلهام شحاتة',stars:5,text:'يُثبّت المكياج ويُرطّب في نفس الوقت. مثالي',date:'منذ شهر'},{name:'نرمين رأفت',stars:5,text:'رفيق الصيف الأساسي. لا أسافر بدونه',date:'منذ شهرين'}],
  l1:[{name:'سوسن غانم',stars:5,text:'اللوشن يُغذّي الجسم بشكل رائع والرائحة فخمة',date:'منذ 5 أيام'},{name:'أميرة وليد',stars:5,text:'بشرة جسمي أصبحت ناعمة وموحّدة. أحبه',date:'منذ أسبوع'},{name:'سناء عبد الله',stars:4,text:'جيد جداً لكن يحتاج وقت للامتصاص',date:'منذ أسبوعين'},{name:'منال زيدان',stars:5,text:'يُوحّد لون الجسم فعلاً. واضح الفرق',date:'منذ شهر'},{name:'وفاء كريم',stars:5,text:'الأفضل في فئته. استخدمه يومياً',date:'منذ شهرين'}],
  pk1:[{name:'هناء سلامة',stars:5,text:'الحزمة قيمة للغاية. كل المنتجات ممتازة',date:'منذ 3 أيام'},{name:'راندا فوزي',stars:5,text:'هدية مثالية. استخدمتها لنفسي وأهديت واحدة',date:'منذ أسبوع'},{name:'نادين خوري',stars:5,text:'توفير حقيقي مع جودة عالية. شكراً',date:'منذ أسبوعين'},{name:'سحر بلال',stars:4,text:'ممتازة لكن التغليف كان ممكن يكون أجمل',date:'منذ شهر'},{name:'مها مجدي',stars:5,text:'أفضل حزمة عناية بالبشرة وجدتها في مصر',date:'منذ شهرين'}],
  el1:[{name:'أحمد كمال',stars:5,text:'Burnmode غيّر حياتي! فقدت 5 كيلو في شهر مع الرياضة',date:'منذ يومين'},{name:'محمد إبراهيم',stars:5,text:'طاقة ممتازة للتدريب ويُقلّل الشهية فعلاً',date:'منذ أسبوع'},{name:'كريم رضا',stars:4,text:'فعّال لكن القهوة الزيادة ممكن تأثّر على النوم',date:'منذ أسبوعين'},{name:'عمر طارق',stars:5,text:'المنتج الأفضل للحرق في السوق المصري',date:'منذ شهر'},{name:'هيثم سامي',stars:5,text:'نتائج مذهلة مع نظام غذائي صحي',date:'منذ شهر'}],
  el2:[{name:'أحمد فاروق',stars:5,text:'كرياتين نقي 100%. حسيت بالفرق في الأسبوع الأول',date:'منذ 3 أيام'},{name:'مصطفى جمال',stars:5,text:'يزيد قوتي بشكل واضح في التدريب',date:'منذ أسبوع'},{name:'إبراهيم ناصر',stars:4,text:'جيد جداً لكن يذوب ببطء في الماء',date:'منذ أسبوعين'},{name:'خالد عزيز',stars:5,text:'الأفضل بالسعر ده. استمر',date:'منذ شهر'},{name:'طارق سعيد',stars:5,text:'كرياتين ممتاز. تعافيت أسرع بكثير',date:'منذ شهر'}],
  el3:[{name:'علي حسن',stars:5,text:'MaxBulk زود وزني 4 كيلو في شهرين من العضل الصافي',date:'منذ أسبوع'},{name:'سامح يوسف',stars:5,text:'مناسب جداً للنحيفين اللي بيعاني من زيادة الوزن',date:'منذ أسبوعين'},{name:'عماد رياض',stars:4,text:'طعمه تمام لكن حجم العلبة كبير وتقيل شوية',date:'منذ شهر'},{name:'أسامة فتحي',stars:5,text:'أفضل مكسب وزن جربته بدون دهون زيادة',date:'منذ شهر'},{name:'وليد منير',stars:4,text:'نتيجة جيدة مع التدريب المنتظم',date:'منذ شهرين'}],
  el4:[{name:'تامر حلمي',stars:5,text:'ISO Pro من أفضل بروتين جربته. نقي وبيبني عضل حقيقي',date:'منذ يومين'},{name:'ضياء الدين',stars:5,text:'صفر دهون وصفر سكر. مثالي للحمية',date:'منذ أسبوع'},{name:'نبيل عثمان',stars:4,text:'ممتاز لكن الطعم ممكن يكون أفضل',date:'منذ أسبوعين'},{name:'شريف منصور',stars:5,text:'يُبني العضل ويُحرق الدهون في نفس الوقت فعلاً',date:'منذ شهر'},{name:'جمال حسين',stars:5,text:'المنتج الأول من نوعه في مصر بهذه الجودة',date:'منذ شهر'}]
};

// Build unified PRODUCTS lookup
const PRODUCTS = {};
[...KITS, ...ELEVATE].forEach(p => PRODUCTS[p.id] = p);

// Gradient fallback per product
const CARD_GRADS = {
  b1:'linear-gradient(135deg,#1B4332,#2D6A4F)', b2:'linear-gradient(135deg,#7B2D8B,#C56BDC)',
  b3:'linear-gradient(135deg,#0F4C75,#1B6CA8)', e1:'linear-gradient(135deg,#F6A623,#F7D060)',
  e2:'linear-gradient(135deg,#2D8B5A,#52B788)', e3:'linear-gradient(135deg,#1A1A2E,#16213E)',
  be1:'linear-gradient(135deg,#4A0E8F,#7B2FBE)', s1:'linear-gradient(135deg,#0077B6,#00B4D8)',
  s2:'linear-gradient(135deg,#023E8A,#0096C7)', l1:'linear-gradient(135deg,#6B4226,#A0522D)',
  pk1:'linear-gradient(135deg,#C8963E,#DEB068)', el1:'linear-gradient(135deg,#7F0000,#C00)',
  el2:'linear-gradient(135deg,#1B4332,#2D6A4F)', el3:'linear-gradient(135deg,#1A0533,#4A0E8F)',
  el4:'linear-gradient(135deg,#002244,#003580)'
};

/* ════════ USER STATE ════════ */
function loadUser() {
  try { return JSON.parse(localStorage.getItem('pf_u')) || {}; } catch(e){ return {}; }
}
function saveUser(u) {
  localStorage.setItem('pf_u', JSON.stringify(u));
}
let USER = loadUser();

/* ════════ NAVIGATION ════════ */
function go(page, id) {
  const pages = { home:'index.html', beauty:'beauty.html', elevate:'elevate.html', tips:'tips.html', contact:'contact.html' };
  let url;
  if (page === 'product' && id) {
    url = 'product.html?id=' + encodeURIComponent(id);
  } else {
    url = pages[page] || 'index.html';
  }
  // Fade out
  const app = document.getElementById('app');
  if (app) {
    app.classList.add('pg-out');
    setTimeout(() => { window.location.href = url; }, 140);
  } else {
    window.location.href = url;
  }
}

/* ════════ THEME ════════ */
(function initTheme(){
  const saved = localStorage.getItem('pf_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
})();

function toggleTheme(){
  const html = document.documentElement;
  const cur = html.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('pf_theme', next);
}

/* ════════ LANGUAGE / COUNTRY ════════ */
const COUNTRIES = [
  { name:'مصر', flag:'🇪🇬', code:'EG', lang:'ar', wa:'+201000000000' },
  { name:'السعودية', flag:'🇸🇦', code:'SA', lang:'ar', wa:'+966500000000' },
  { name:'الإمارات', flag:'🇦🇪', code:'AE', lang:'ar', wa:'+971500000000' },
  { name:'الكويت', flag:'🇰🇼', code:'KW', lang:'ar', wa:'+965500000000' },
  { name:'قطر', flag:'🇶🇦', code:'QA', lang:'ar', wa:'+974500000000' },
  { name:'البحرين', flag:'🇧🇭', code:'BH', lang:'ar', wa:'+973500000000' },
  { name:'الأردن', flag:'🇯🇴', code:'JO', lang:'ar', wa:'+962500000000' },
  { name:'لبنان', flag:'🇱🇧', code:'LB', lang:'ar', wa:'+961500000000' },
  { name:'ليبيا', flag:'🇱🇾', code:'LY', lang:'ar', wa:'+218500000000' },
  { name:'تونس', flag:'🇹🇳', code:'TN', lang:'fr', wa:'+216500000000' },
  { name:'الجزائر', flag:'🇩🇿', code:'DZ', lang:'fr', wa:'+213500000000' },
  { name:'المغرب', flag:'🇲🇦', code:'MA', lang:'fr', wa:'+212500000000' },
  { name:'السودان', flag:'🇸🇩', code:'SD', lang:'ar', wa:'+249500000000' },
  { name:'العراق', flag:'🇮🇶', code:'IQ', lang:'ar', wa:'+964500000000' },
  { name:'اليمن', flag:'🇾🇪', code:'YE', lang:'ar', wa:'+967500000000' },
  { name:'سوريا', flag:'🇸🇾', code:'SY', lang:'ar', wa:'+963500000000' },
  { name:'فلسطين', flag:'🇵🇸', code:'PS', lang:'ar', wa:'+970500000000' },
  { name:'Maroc', flag:'🇲🇦', code:'MA-fr', lang:'fr', wa:'+212500000001' },
  { name:'France', flag:'🇫🇷', code:'FR', lang:'fr', wa:'+33600000000' },
  { name:'UK', flag:'🇬🇧', code:'GB', lang:'en', wa:'+44700000000' },
  { name:'USA', flag:'🇺🇸', code:'US', lang:'en', wa:'+1200000000' },
  { name:'Canada', flag:'🇨🇦', code:'CA', lang:'en', wa:'+1300000000' },
  { name:'Germany', flag:'🇩🇪', code:'DE', lang:'en', wa:'+49150000000' },
  { name:'Australia', flag:'🇦🇺', code:'AU', lang:'en', wa:'+61400000000' },
  { name:'Netherlands', flag:'🇳🇱', code:'NL', lang:'en', wa:'+31600000000' }
];

const LANG = {
  ar: { dir:'rtl', brand:'PUREFORM', tagline:'العناية الطبيعية', beauty:'RZN Beauty', elevate:'Elevate', tips:'نصائح', contact:'تواصل', cart:'السلة', wishlist:'المفضلة', addCart:'أضف للسلة', buyNow:'اشتري الآن', shipping:'شحن مجاني فوق 500 ج', chatName:'مساعد بيورفورم', chatStatus:'متاح الآن · رد خلال دقيقتين', orderNow:'اطلب الآن عبر واتساب', close:'إغلاق' },
  en: { dir:'ltr', brand:'PUREFORM', tagline:'Natural Care', beauty:'RZN Beauty', elevate:'Elevate', tips:'Tips', contact:'Contact', cart:'Cart', wishlist:'Wishlist', addCart:'Add to Cart', buyNow:'Buy Now', shipping:'Free shipping over 500 EGP', chatName:'PUREFORM Assistant', chatStatus:'Online · Replies in 2 min', orderNow:'Order via WhatsApp', close:'Close' },
  fr: { dir:'ltr', brand:'PUREFORM', tagline:'Soin Naturel', beauty:'RZN Beauty', elevate:'Elevate', tips:'Conseils', contact:'Contact', cart:'Panier', wishlist:'Favoris', addCart:'Ajouter au panier', buyNow:'Acheter', shipping:'Livraison gratuite dès 500 EGP', chatName:'Assistant PUREFORM', chatStatus:'En ligne · Répond en 2 min', orderNow:'Commander via WhatsApp', close:'Fermer' }
};

function applyLanguage(lang) {
  const L = LANG[lang] || LANG.ar;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', L.dir);
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (L[key]) el.textContent = L[key];
  });
}

/* ════════ SMART RECS ════════ */
function smartRecs(user) {
  const map = {
    acne: [{ id:'b3', why:'يُنظّف المسامات ويُقلّل البثور بفاعلية' }, { id:'e2', why:'يُوازن pH البشرة ويُهدّئها' }],
    dark:  [{ id:'b1', why:'يُوحّد اللون ويُقلّل البقع الداكنة' }, { id:'e1', why:'يُجدّد الخلايا ويُزيل التصبّغ' }],
    dry:   [{ id:'s1', why:'ترطيب فائق لمدة 24 ساعة' }, { id:'l1', why:'يُغذّي الجسم ويُرطّبه بعمق' }],
    oily:  [{ id:'b3', why:'يُوازن الدهون دون تجفيف' }, { id:'s2', why:'خفيف ويُثبّت المكياج' }],
    aging: [{ id:'be1', why:'مضاد أكسدة قوي يُحارب الشيخوخة' }, { id:'e3', why:'أمبولات مركّزة لتجديد شباب البشرة' }],
    fit:   [{ id:'el1', why:'يُعزّز حرق الدهون أثناء التدريب' }, { id:'el4', why:'بروتين نقي يبني العضل' }]
  };
  return map[user.problem] || [{ id:'b1', why:'الأكثر مبيعاً لبشرة أكثر إشراقاً' }, { id:'be1', why:'صيغة مضادة للأكسدة للشباب الدائم' }];
}

/* ════════ NAV & DRAWER ════════ */
function initNav() {
  const nav = document.getElementById('nav');
  const ham = document.getElementById('ham');
  const drawer = document.getElementById('drawer');
  const themeBtn = document.getElementById('theme-btn');

  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  if (ham && drawer) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      drawer.classList.toggle('open');
    });
    // Close drawer on nav link click
    drawer.querySelectorAll('.n-lnk').forEach(l => {
      l.addEventListener('click', () => {
        ham.classList.remove('open');
        drawer.classList.remove('open');
      });
    });
  }

  // Set active link based on current page
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.n-lnk[data-page]').forEach(l => {
    if (l.getAttribute('data-page') === page) l.classList.add('cur');
  });
}

/* ════════ SCROLL REVEAL ════════ */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.rv, .rv-left, .rv-scale, [data-stagger]').forEach(el => io.observe(el));
}

/* ════════ CARD TILT ════════ */
function initTilt() {
  document.querySelectorAll('.pcard').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `translateY(-10px) rotateY(${x * 10}deg) rotateX(${-y * 6}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ════════ RIPPLE ════════ */
function ripple(e) {
  const btn = e.currentTarget;
  const r = document.createElement('span');
  r.style.cssText = `position:absolute;border-radius:50%;background:rgba(255,255,255,.3);width:60px;height:60px;transform:translate(-50%,-50%) scale(0);animation:rippleAnim .5s ease forwards;left:${e.offsetX}px;top:${e.offsetY}px;pointer-events:none`;
  btn.style.position = 'relative';
  btn.appendChild(r);
  setTimeout(() => r.remove(), 600);
}
if (!document.getElementById('ripple-style')) {
  const s = document.createElement('style');
  s.id = 'ripple-style';
  s.textContent = '@keyframes rippleAnim{to{transform:translate(-50%,-50%) scale(4);opacity:0}}';
  document.head.appendChild(s);
}

/* ════════ PRODUCT CARD BUILDER ════════ */
function buildProductCard(p, opts = {}) {
  const grad = CARD_GRADS[p.id] || 'linear-gradient(135deg,var(--g800),var(--g900))';
  const stars = '★★★★★';
  const discPct = p.orig ? Math.round((1 - p.price / p.orig) * 100) : 0;
  const isWL = isInWishlist(p.id);
  return `
<div class="pcard rv d${(opts.idx||0)%5+1}" onclick="go('product','${p.id}')">
  <div class="pc-top" style="background:${grad}">
    <span class="pc-em">${p.em}</span>
    <div class="pc-overlay"></div>
    <div class="pc-badges">
      ${p.best ? `<span class="pb-best">⭐ الأفضل مبيعاً</span>` : ''}
      ${p.hot ? `<span class="pb-hot">🔥 رائج</span>` : ''}
      ${p.newBadge ? `<span class="pb-new">✨ جديد</span>` : ''}
    </div>
    ${discPct > 0 ? `<span class="pc-discount">-${discPct}%</span>` : ''}
    <span class="pc-stars-overlay">${stars}</span>
    <button class="wl-btn ${isWL ? 'wl-on' : ''}" onclick="event.stopPropagation();WL.toggle('${p.id}',this)">
      <i class="${isWL ? 'fas' : 'far'} fa-heart"></i>
    </button>
  </div>
  <div class="pc-body">
    <div class="pc-kit">${p.kitLabel || p.sub || ''}</div>
    <div class="pc-name">${p.name}</div>
    ${p.tags ? `<div class="pc-pills">${p.tags.map(t => `<span class="pc-pill">${t}</span>`).join('')}</div>` : ''}
    ${p.benefits ? `<div class="pc-benefits">${p.benefits.slice(0,2).map(b => `<span class="pc-ben">${b}</span>`).join('')}</div>` : ''}
    <div class="pc-foot">
      <div class="pc-prices">
        <div class="pc-price">${p.price}<sup>ج</sup></div>
        ${p.orig ? `<div class="pc-orig">${p.orig} ج</div>` : ''}
      </div>
      <button class="pc-action" onclick="event.stopPropagation();CART.add('${p.id}',this)">
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <button class="atc-btn" onclick="event.stopPropagation();CART.add('${p.id}',this)">
      <i class="fas fa-shopping-bag"></i> أضف للسلة
    </button>
  </div>
</div>`;
}

/* ════════ DISCOUNT BANNER ════════ */
const DISC = (function(){
  const KEY = 'pf_disc_end';
  let end, tmr;

  function getEnd() {
    const s = sessionStorage.getItem(KEY);
    if (s) return +s;
    const e = Date.now() + 600000;
    sessionStorage.setItem(KEY, e);
    return e;
  }

  function format(ms) {
    const t = Math.max(0, Math.floor(ms / 1000));
    const m = String(Math.floor(t / 60)).padStart(2, '0');
    const s = String(t % 60).padStart(2, '0');
    return [m, s];
  }

  function update() {
    const rem = end - Date.now();
    const [m, s] = format(rem);
    ['db-m', 'db-s'].forEach((id, i) => {
      const el = document.getElementById(id);
      if (el) el.textContent = [m, s][i];
    });
    if (rem <= 60000) {
      document.querySelector('.db-timer')?.classList.add('urgent');
    }
    if (rem <= 0) {
      clearInterval(tmr);
      document.getElementById('disc-banner')?.classList.remove('db-show');
    }
  }

  function init() {
    const banner = document.getElementById('disc-banner');
    if (!banner) return;
    end = getEnd();
    update();
    tmr = setInterval(update, 1000);
    setTimeout(() => banner.classList.add('db-show'), 3500);
    document.getElementById('db-close-btn')?.addEventListener('click', () => {
      banner.classList.remove('db-show');
      clearInterval(tmr);
    });
  }

  return { init };
})();

/* ════════ CART ════════ */
const CART = (function(){
  const KEY = 'pf_cart';
  const SHIP = 70;
  let items = [];

  function load() {
    try { items = JSON.parse(sessionStorage.getItem(KEY)) || []; } catch(e){ items = []; }
  }
  function save() { sessionStorage.setItem(KEY, JSON.stringify(items)); }

  function add(id, btn) {
    load();
    const existing = items.find(i => i.id === id);
    if (existing) existing.qty++;
    else items.push({ id, qty: 1 });
    save();
    updateUI();
    // Button feedback
    if (btn) {
      btn.classList.add('added');
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> تمت الإضافة';
      setTimeout(() => { btn.classList.remove('added'); btn.innerHTML = orig; }, 1800);
    }
    openDrawer();
    UPSELL.show(id);
  }

  function remove(id) { load(); items = items.filter(i => i.id !== id); save(); updateUI(); renderItems(); }

  function updateQty(id, delta) {
    load();
    const it = items.find(i => i.id === id);
    if (!it) return;
    it.qty = Math.max(1, it.qty + delta);
    save(); updateUI(); renderItems();
  }

  function total() {
    load();
    return items.reduce((s, i) => s + (PRODUCTS[i.id]?.price || 0) * i.qty, 0);
  }

  function count() { load(); return items.reduce((s, i) => s + i.qty, 0); }

  function updateUI() {
    const cnt = count();
    const el = document.getElementById('cart-count');
    if (el) {
      el.textContent = cnt;
      el.classList.toggle('vis', cnt > 0);
      if (cnt > 0) { el.classList.add('pop'); setTimeout(() => el.classList.remove('pop'), 350); }
    }
    // Update chat badge
    const badge = document.getElementById('chat-cart-count-badge');
    if (badge) { badge.style.display = cnt > 0 ? 'flex' : 'none'; badge.textContent = cnt; }
  }

  function renderItems() {
    const wrap = document.getElementById('cart-items-wrap');
    if (!wrap) return;
    load();
    if (items.length === 0) {
      wrap.innerHTML = `<div class="cart-empty"><div class="cart-empty-ico">🛒</div><div>سلتك فارغة</div></div>`;
    } else {
      wrap.innerHTML = items.map(it => {
        const p = PRODUCTS[it.id];
        if (!p) return '';
        return `<div class="ci">
          <div class="ci-img" style="background:${CARD_GRADS[p.id]}">${p.em}</div>
          <div class="ci-body">
            <div class="ci-name">${p.name}</div>
            <div class="ci-kit">${p.kitLabel || p.sub || ''}</div>
            <div class="ci-price">${p.price * it.qty} ج</div>
          </div>
          <div class="ci-right">
            <button class="ci-del" onclick="CART.remove('${p.id}')"><i class="fas fa-trash-alt"></i></button>
            <div class="ci-qty">
              <button class="ci-qty-btn" onclick="CART.updateQty('${p.id}',-1)">−</button>
              <span class="ci-qty-num">${it.qty}</span>
              <button class="ci-qty-btn" onclick="CART.updateQty('${p.id}',+1)">+</button>
            </div>
          </div>
        </div>`;
      }).join('');
    }
    // Totals
    const sub = total();
    const ship = sub > 0 ? SHIP : 0;
    const countEl = document.getElementById('cart-item-count');
    if (countEl) countEl.textContent = count() + ' منتجات';
    const subEl = document.getElementById('cart-subtotal'); if (subEl) subEl.textContent = sub + ' ج';
    const shipEl = document.getElementById('cart-ship'); if (shipEl) shipEl.textContent = ship === 0 ? 'مجاناً' : ship + ' ج';
    const totEl = document.getElementById('cart-total'); if (totEl) totEl.textContent = (sub + ship) + ' ج';
  }

  function openDrawer() {
    document.getElementById('cart-overlay')?.classList.add('open');
    document.getElementById('cart-drawer')?.classList.add('open');
    renderItems();
  }

  function closeDrawer() {
    document.getElementById('cart-overlay')?.classList.remove('open');
    document.getElementById('cart-drawer')?.classList.remove('open');
  }

  function checkout() {
    load();
    if (items.length === 0) return;
    const U = loadUser();
    const wa = (U.country && COUNTRIES.find(c => c.code === U.country)?.wa) || '+201000000000';
    let msg = '🛒 طلب جديد - PUREFORM\n\n';
    if (U.name) msg += `الاسم: ${U.name}\n`;
    items.forEach(it => {
      const p = PRODUCTS[it.id];
      if (p) msg += `• ${p.name} × ${it.qty} = ${p.price * it.qty} ج\n`;
    });
    msg += `\n📦 المجموع: ${total()} ج\n🚚 الشحن: ${SHIP} ج\n💰 الإجمالي: ${total() + SHIP} ج`;
    window.open(`https://wa.me/${wa.replace(/\D/g,'')}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  function init() {
    load(); updateUI();
    document.getElementById('cart-btn')?.addEventListener('click', openDrawer);
    document.getElementById('cart-overlay')?.addEventListener('click', closeDrawer);
    document.getElementById('cart-close')?.addEventListener('click', closeDrawer);
    document.getElementById('cart-checkout-btn')?.addEventListener('click', checkout);
  }

  return { init, add, remove, updateQty, total, count, openDrawer, closeDrawer, renderItems, load, items: () => { load(); return items; } };
})();

/* ════════ WISHLIST ════════ */
const WL = (function(){
  const KEY = 'pf_wl';
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch(e){ return []; } }
  function save(arr) { localStorage.setItem(KEY, JSON.stringify(arr)); }

  function toggle(id, btn) {
    let arr = load();
    const has = arr.includes(id);
    if (has) arr = arr.filter(x => x !== id);
    else arr.push(id);
    save(arr);
    if (btn) {
      btn.classList.toggle('wl-on', !has);
      btn.innerHTML = has ? '<i class="far fa-heart"></i>' : '<i class="fas fa-heart"></i>';
    }
    updateUI();
    renderItems();
  }

  function updateUI() {
    const arr = load();
    const cnt = arr.length;
    const el = document.getElementById('wl-count');
    if (el) { el.textContent = cnt; el.classList.toggle('vis', cnt > 0); }
  }

  function renderItems() {
    const wrap = document.getElementById('wl-items-wrap');
    if (!wrap) return;
    const arr = load();
    if (arr.length === 0) {
      wrap.innerHTML = `<div class="wl-empty"><div class="wl-empty-ico">🤍</div><div>قائمة مفضلتك فارغة</div></div>`;
    } else {
      wrap.innerHTML = arr.map(id => {
        const p = PRODUCTS[id];
        if (!p) return '';
        return `<div class="wl-card" onclick="go('product','${id}')">
          <div class="wl-card-img" style="background:${CARD_GRADS[id]}">${p.em}</div>
          <div class="wl-card-body">
            <div class="wl-card-nm">${p.name}</div>
            <div class="wl-card-kit">${p.kitLabel || p.sub || ''}</div>
            <div class="wl-card-pr">${p.price} ج</div>
          </div>
          <div class="wl-card-right">
            <button class="wl-del" onclick="event.stopPropagation();WL.toggle('${id}')"><i class="fas fa-times"></i></button>
            <button class="wl-move-cart" onclick="event.stopPropagation();CART.add('${id}');WL.toggle('${id}')">سلة</button>
          </div>
        </div>`;
      }).join('');
    }
  }

  function open() {
    document.getElementById('wl-overlay')?.classList.add('open');
    document.getElementById('wl-drawer')?.classList.add('open');
    renderItems();
  }
  function close() {
    document.getElementById('wl-overlay')?.classList.remove('open');
    document.getElementById('wl-drawer')?.classList.remove('open');
  }

  function init() {
    updateUI();
    document.getElementById('wl-nav-btn')?.addEventListener('click', open);
    document.getElementById('wl-overlay')?.addEventListener('click', close);
    document.getElementById('wl-close')?.addEventListener('click', close);
  }

  return { init, toggle, open, close, updateUI, renderItems };
})();

function isInWishlist(id) {
  try { return (JSON.parse(localStorage.getItem('pf_wl')) || []).includes(id); } catch(e){ return false; }
}

/* ════════ UPSELL ════════ */
const UPSELL = (function(){
  const CROSS = {
    b1:['b2','e1'], b2:['b3','s1'], b3:['b1','e2'], e1:['e2','e3'], e2:['e1','b1'],
    e3:['e1','be1'], be1:['b1','e3'], s1:['s2','l1'], s2:['s1','b2'], l1:['s1','pk1'],
    pk1:['b1','e1'], el1:['el4','el2'], el2:['el1','el4'], el3:['el2','el4'], el4:['el1','el3']
  };
  let tmr;

  function show(id) {
    clearTimeout(tmr);
    tmr = setTimeout(() => _show(id), 900);
  }

  function _show(id) {
    const ids = CROSS[id] || [];
    if (ids.length === 0) return;
    const modal = document.getElementById('upsell-modal');
    const overlay = document.getElementById('upsell-overlay');
    if (!modal || !overlay) return;
    const grid = modal.querySelector('.upsell-grid');
    if (grid) {
      grid.innerHTML = ids.map(pid => {
        const p = PRODUCTS[pid];
        if (!p) return '';
        return `<div class="upsell-card" onclick="go('product','${pid}')">
          <div class="upsell-card-img" style="background:${CARD_GRADS[pid]}">${p.em}</div>
          <div class="upsell-card-body">
            <div class="upsell-card-nm">${p.name}</div>
            <div class="upsell-card-pr">${p.price} ج</div>
            <button class="upsell-card-atc" onclick="event.stopPropagation();CART.add('${pid}',this);UPSELL.close()">
              <i class="fas fa-plus"></i> أضف
            </button>
          </div>
        </div>`;
      }).join('');
    }
    overlay.classList.add('open');
    modal.classList.add('open');
  }

  function close() {
    document.getElementById('upsell-overlay')?.classList.remove('open');
    document.getElementById('upsell-modal')?.classList.remove('open');
  }

  function init() {
    document.getElementById('upsell-overlay')?.addEventListener('click', close);
    document.getElementById('upsell-dismiss')?.addEventListener('click', close);
  }

  return { init, show, close };
})();

/* ════════ SOCIAL PROOF TOASTS ════════ */
(function(){
  const EVENTS = [
    { ico:'🛒', accent:'#52B788', title:'نور من القاهرة', sub:'أضافت سيروم التفتيح للسلة' },
    { ico:'⭐', accent:'#C8963E', title:'سارة - الإسكندرية', sub:'قيّمت الإنزيم بـ 5 نجوم' },
    { ico:'🔥', accent:'#e53935', title:'24 شخصاً', sub:'يشاهدون هذه الصفحة الآن' },
    { ico:'✅', accent:'#52B788', title:'مريم - دبي', sub:'استلمت طلبها اليوم 🎉' },
    { ico:'💬', accent:'#7B2FBE', title:'هدى من الرياض', sub:'سألت عن كيت التوت' },
    { ico:'📦', accent:'#0096C7', title:'آخر 5 قطع', sub:'من سيروم التوت المضاد للأكسدة' },
    { ico:'🌟', accent:'#C8963E', title:'دينا - المنصورة', sub:'اشترت حزمة البشرة المثالية' },
    { ico:'💪', accent:'#e53935', title:'أحمد - الجيزة', sub:'أضاف Burnmode للسلة للمرة الثانية' }
  ];

  let wrap;
  let queue = [...EVENTS].sort(() => Math.random() - .5);

  function show() {
    if (!wrap) { wrap = document.getElementById('sp-wrap'); if (!wrap) return; }
    if (queue.length === 0) queue = [...EVENTS].sort(() => Math.random() - .5);
    const ev = queue.shift();
    const el = document.createElement('div');
    el.className = 'spt';
    el.style.setProperty('--spt-accent', ev.accent);
    el.innerHTML = `
      <div class="spt-ico">${ev.ico}</div>
      <div class="spt-body">
        <div class="spt-title">${ev.title}</div>
        <div class="spt-sub">${ev.sub}</div>
      </div>
      <div class="spt-dot"></div>
      <div class="spt-bar"><div class="spt-fill" style="animation:none;width:100%"></div></div>
      <span class="spt-x" onclick="this.closest('.spt').remove()">✕</span>`;
    wrap.appendChild(el);
    requestAnimationFrame(() => { requestAnimationFrame(() => { el.classList.add('sp-in'); }); });
    const fill = el.querySelector('.spt-fill');
    if (fill) { fill.style.transition = 'width 5s linear'; setTimeout(() => fill.style.width = '0', 50); }
    setTimeout(() => {
      el.classList.add('sp-out');
      setTimeout(() => el.remove(), 400);
    }, 5200);
  }

  function init() {
    // Start after 5s, then random intervals
    setTimeout(() => {
      show();
      function next() { setTimeout(() => { show(); next(); }, 8000 + Math.random() * 8000); }
      next();
    }, 5000);
  }

  document.addEventListener('DOMContentLoaded', init);
})();

/* ════════ HERO CANVAS ════════ */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function Particle() {
    this.x = Math.random() * W; this.y = Math.random() * H;
    this.r = Math.random() * 2 + 0.5;
    this.vx = (Math.random() - 0.5) * 0.3; this.vy = -Math.random() * 0.4 - 0.1;
    this.alpha = Math.random() * 0.6 + 0.2;
    this.color = Math.random() > 0.5 ? `rgba(82,183,136,${this.alpha})` : `rgba(200,150,62,${this.alpha})`;
  }

  function init() {
    resize();
    particles = Array.from({ length: 80 }, () => new Particle());
    window.addEventListener('resize', resize);
    loop();
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    requestAnimationFrame(loop);
  }

  init();
}

/* ════════ REVIEW SYSTEM ════════ */
function initReviews(productId) {
  const revs = REVIEWS[productId] || [];
  const listEl = document.getElementById('revs-list');
  if (!listEl) return;

  let shown = 3;
  function render() {
    listEl.innerHTML = revs.slice(0, shown).map(r => `
      <div class="rev2">
        <div class="rev2-top">
          <div class="rev2-avatar">${r.name[0]}</div>
          <div class="rev2-meta">
            <div class="rev2-name">${r.name}</div>
            <div class="rev2-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
            <div class="rev2-date">${r.date}</div>
          </div>
          <div class="rev2-badge"><i class="fas fa-check-circle"></i> مشتري موثّق</div>
        </div>
        <div class="rev2-txt">${r.text}</div>
      </div>`).join('');
    const btn = document.getElementById('revs-more-btn');
    if (btn) btn.style.display = shown >= revs.length ? 'none' : 'block';
  }

  render();
  document.getElementById('revs-more-btn')?.addEventListener('click', () => { shown += 3; render(); });

  // Star picker
  let selectedStars = 0;
  document.querySelectorAll('.rv-star-pick').forEach((star, i) => {
    star.addEventListener('click', () => {
      selectedStars = i + 1;
      document.querySelectorAll('.rv-star-pick').forEach((s, j) => s.classList.toggle('on', j < selectedStars));
    });
  });

  // Submit review
  document.getElementById('rv-submit-btn')?.addEventListener('click', () => {
    const nameEl = document.getElementById('rv-name');
    const txtEl = document.getElementById('rv-text');
    if (!nameEl || !txtEl) return;
    const name = nameEl.value.trim();
    const text = txtEl.value.trim();
    if (!name) { nameEl.classList.add('err'); setTimeout(() => nameEl.classList.remove('err'), 600); return; }
    if (!text) { txtEl.classList.add('err'); setTimeout(() => txtEl.classList.remove('err'), 600); return; }
    const p = PRODUCTS[productId];
    const wa = '+201000000000';
    const msg = `⭐ تقييم جديد - PUREFORM\n\nالمنتج: ${p?.name || productId}\nالاسم: ${name}\nالتقييم: ${'★'.repeat(selectedStars || 5)}\n\n${text}`;
    window.open(`https://wa.me/${wa.replace(/\D/g,'')}?text=${encodeURIComponent(msg)}`, '_blank');
  });
}

/* ════════ CHAT ASSISTANT ════════ */
const CHAT = (function(){
  const INTENTS = [
    { kw:['مرحبا','هلا','اهلا','السلام'], fn: () => 'أهلاً وسهلاً! 😊 كيف يمكنني مساعدتك اليوم؟ يمكنني مساعدتك في اختيار المنتج المناسب أو الاستفسار عن طلبك.' },
    { kw:['سعر','بكام','تمن','فلوس'], fn: u => `المنتجات تبدأ من 160 ج. اللي يناسبك:\n${smartRecs(u||{}).map(r=>PRODUCTS[r.id]?.name+' — '+PRODUCTS[r.id]?.price+' ج').join('\n')}` },
    { kw:['حرق','رجيم','تخسيس','وزن'], fn: () => 'مرتبة 🔥' , products:['el1','el4'] },
    { kw:['تقشير','مسامات','بشرة'], fn: () => 'لبشرتك نوصي بـ:', products:['e1','b3'] },
    { kw:['ترطيب','جفاف'], fn: () => 'لترطيب فائق:', products:['s1','l1'] },
    { kw:['شحن','توصيل'], fn: () => '🚚 الشحن 70 ج وبيوصل في 2-4 أيام. فوق 500 ج مجاناً!' },
    { kw:['دفع','كاش','اونلاين'], fn: () => '💳 نقبل: كاش عند الاستلام، فودافون كاش، إنستاباي.' },
    { kw:['اصلي','اصل','وهمي'], fn: () => '✅ كل منتجاتنا أصلية 100% مع ضمان الجودة. غير راضي؟ بنرجع لك فلوسك.' },
    { kw:['طلب','اطلب','واتس'], fn: () => null, wa: true },
    { kw:['شكرا','تسلم','ممتاز'], fn: () => 'العفو! يسعدنا خدمتك دائماً 🌿' }
  ];

  let msgs = [], open = false;

  function detect(text) {
    const t = text.toLowerCase();
    return INTENTS.find(i => i.kw.some(k => t.includes(k)));
  }

  function addMsg(text, who, products) {
    msgs.push({ text, who, products });
    renderMsgs();
  }

  function renderMsgs() {
    const wrap = document.getElementById('chat-msgs');
    if (!wrap) return;
    wrap.innerHTML = msgs.map(m => {
      let html = `<div class="chat-msg ${m.who}">${m.text}</div>`;
      if (m.products) {
        html += m.products.map(id => {
          const p = PRODUCTS[id];
          if (!p) return '';
          return `<div class="chat-prod-card" onclick="go('product','${id}')">
            <div class="chat-prod-card-name">${p.em} ${p.name}</div>
            <div class="chat-prod-card-price">${p.price} ج</div>
            <div class="chat-prod-card-desc">${(p.benefits||p.uses||[''])[0]}</div>
            <div class="chat-prod-card-action">
              <button class="chat-prod-card-btn add" onclick="event.stopPropagation();CART.add('${id}',this)">+ سلة</button>
              <button class="chat-prod-card-btn info" onclick="event.stopPropagation();go('product','${id}')">تفاصيل</button>
            </div>
          </div>`;
        }).join('');
      }
      return html;
    }).join('');
    wrap.scrollTop = wrap.scrollHeight;
  }

  function send(text) {
    if (!text.trim()) return;
    addMsg(text, 'user');
    const input = document.getElementById('chat-input');
    if (input) input.value = '';
    // Typing indicator
    const wrap = document.getElementById('chat-msgs');
    const typing = document.createElement('div');
    typing.className = 'chat-typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    if (wrap) wrap.appendChild(typing);
    setTimeout(() => {
      typing.remove();
      const intent = detect(text);
      if (!intent) {
        addMsg('عذراً، لم أفهم سؤالك. تواصل معنا مباشرة عبر واتساب:', 'bot');
        const waBtn = document.createElement('a');
        waBtn.href = 'https://wa.me/201000000000';
        waBtn.target = '_blank';
        waBtn.className = 'chat-wa-btn';
        waBtn.innerHTML = '<i class="fab fa-whatsapp"></i> واتساب';
        wrap?.appendChild(waBtn);
      } else if (intent.wa) {
        addMsg('بالتأكيد! اضغط هنا للطلب عبر واتساب مباشرة:', 'bot');
      } else {
        const u = loadUser();
        const resp = intent.fn(u);
        if (resp) addMsg(resp, 'bot', intent.products);
        else if (intent.products) addMsg('إليك المنتجات الأنسب لك:', 'bot', intent.products);
      }
    }, 800 + Math.random() * 600);
  }

  function toggle() {
    open = !open;
    document.getElementById('chat-window')?.classList.toggle('open', open);
    if (open) {
      document.getElementById('chat-unread').style.display = 'none';
      if (msgs.length === 0) {
        setTimeout(() => {
          const u = loadUser();
          addMsg(`أهلاً ${u.name || 'بك'}! 🌿 أنا مساعد PUREFORM. كيف أساعدك؟`, 'bot');
        }, 400);
      }
    }
  }

  function init() {
    document.getElementById('chat-fab')?.addEventListener('click', toggle);
    document.getElementById('chat-close-btn')?.addEventListener('click', () => { open = false; document.getElementById('chat-window')?.classList.remove('open'); });
    document.getElementById('chat-send')?.addEventListener('click', () => send(document.getElementById('chat-input')?.value || ''));
    document.getElementById('chat-input')?.addEventListener('keydown', e => { if (e.key === 'Enter') send(e.target.value); });
    document.querySelectorAll('.chat-quick-btn').forEach(btn => btn.addEventListener('click', () => send(btn.textContent)));
    // Chat tabs
    document.querySelectorAll('.chat-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.chat-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.chat-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.getAttribute('data-panel'))?.classList.add('active');
      });
    });
    // Show unread badge after 8s
    setTimeout(() => {
      if (!open) {
        const badge = document.getElementById('chat-unread');
        if (badge) { badge.style.display = 'flex'; badge.textContent = '1'; }
      }
    }, 8000);
  }

  return { init, send };
})();

/* ════════ POPUP (index.html only) ════════ */
const POPUP = (function(){
  let step = 1;
  let data = {};
  const STEPS_TOTAL = 6;

  function show() {
    const popup = document.getElementById('popup');
    if (!popup) return;
    popup.classList.remove('gone');
    goStep(1);
  }

  function hide() {
    const popup = document.getElementById('popup');
    if (!popup) return;
    popup.classList.add('closing');
    setTimeout(() => popup.classList.add('gone'), 300);
    // Save user
    USER = { ...USER, ...data };
    saveUser(USER);
    // Show recs bar if problem set
    if (data.problem) showRecsSection();
  }

  function goStep(n) {
    step = n;
    document.querySelectorAll('.step').forEach((s, i) => s.classList.toggle('on', i + 1 === n));
    document.querySelectorAll('.sdot').forEach((d, i) => d.classList.toggle('on', i + 1 === n));
  }

  function next() {
    if (step === 1) {
      const nameEl = document.getElementById('p-name');
      if (!nameEl?.value.trim()) { nameEl?.classList.add('err'); setTimeout(() => nameEl?.classList.remove('err'), 600); return; }
      data.name = nameEl.value.trim();
    }
    if (step < STEPS_TOTAL) goStep(step + 1);
    else hide();
    if (step === STEPS_TOTAL) renderWelcome();
  }

  function pick(key, val, el) {
    data[key] = val;
    const group = el.closest('.c2, .c3, .cf');
    group?.querySelectorAll('.cbtn, .crow').forEach(b => b.classList.remove('on'));
    el.classList.add('on');
    setTimeout(next, 380);
  }

  function renderWelcome() {
    const box = document.getElementById('welcome-box');
    if (!box) return;
    const nameEl = document.getElementById('w-greeting');
    if (nameEl) nameEl.textContent = data.name || '';
    const recs = smartRecs(data);
    const recGrid = document.getElementById('w-rec-grid');
    if (recGrid) {
      recGrid.innerHTML = recs.map((r, i) => {
        const p = PRODUCTS[r.id];
        if (!p) return '';
        return `<div class="w-rec-card" style="--i:${i}" onclick="POPUP.hide();go('product','${p.id}')">
          <div class="w-rec-img-wrap">
            <div class="w-rec-grad" style="background:${CARD_GRADS[p.id]}">${p.em}</div>
          </div>
          <div class="w-rec-info">
            <div class="w-rec-name">${p.name}</div>
            <div class="w-rec-kit">${p.kitLabel || p.sub || ''}</div>
          </div>
        </div>`;
      }).join('');
    }
    const whyEl = document.getElementById('w-why-text');
    if (whyEl) whyEl.textContent = recs[0]?.why || 'منتجات مختارة خصيصاً لك';
  }

  function showRecsSection() {
    const sec = document.getElementById('recs-sec');
    if (!sec) return;
    const recs = smartRecs(USER);
    sec.classList.remove('hidden');
    const titleEl = sec.querySelector('.recs-title');
    if (titleEl && USER.name) titleEl.innerHTML = `توصياتنا لك، <span>${USER.name}</span> 🌿`;
    const row = sec.querySelector('.recs-row');
    if (row) {
      row.innerHTML = recs.map(r => {
        const p = PRODUCTS[r.id];
        if (!p) return '';
        return `<div class="ri" onclick="go('product','${p.id}')">
          <span class="ri-em">${p.em}</span>
          <div>
            <div class="ri-nm">${p.name}</div>
            <div class="ri-pr">${p.price} ج</div>
          </div>
        </div>`;
      }).join('');
    }
    const whyEl = sec.querySelector('.why-box');
    if (whyEl && recs[0]) whyEl.innerHTML = `<strong>لماذا؟</strong> ${recs[0].why}`;
  }

  function init() {
    if (!document.getElementById('popup')) return;
    const shown = sessionStorage.getItem('pf_popup');
    if (!shown) {
      sessionStorage.setItem('pf_popup', '1');
      setTimeout(show, 800);
    } else {
      if (USER.problem) showRecsSection();
    }
    // Button bindings
    document.getElementById('popup-next-btn')?.addEventListener('click', next);
    document.getElementById('popup-skip-btn')?.addEventListener('click', hide);
    document.getElementById('popup-finish-btn')?.addEventListener('click', hide);
    document.querySelectorAll('.cbtn[data-key]').forEach(btn => {
      btn.addEventListener('click', () => pick(btn.getAttribute('data-key'), btn.getAttribute('data-val'), btn));
    });
    document.querySelectorAll('.crow[data-key]').forEach(btn => {
      btn.addEventListener('click', () => pick(btn.getAttribute('data-key'), btn.getAttribute('data-val'), btn));
    });
  }

  return { init, show, hide, next, pick };
})();

/* ════════ INFO BAR ════════ */
function initBar() {
  const bar = document.getElementById('bar');
  if (!bar) return;
  bar.classList.add('on');
}

/* ════════ MAIN INIT ════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Page fade in
  const app = document.getElementById('app');
  if (app) requestAnimationFrame(() => app.classList.add('pg-in'));

  initNav();
  initReveal();
  initTilt();
  initBar();
  CART.init();
  WL.init();
  UPSELL.init();
  CHAT.init();
  DISC.init();
  POPUP.init();
  initHeroCanvas();
});
