/* ═══════════════════════════════════════════════════════
   FORM E — PRACTICE A (the easy start; before Practice B)
   Marcos 10/7: "an even easier practice version … discuss how to
   find the benchmarks more and easier versions first."
   Built on 10/7's Practice B results: the benchmark step was the
   most-missed (6,284 → "6,200 and 6,300" ×15; 649,870 →
   "649,000 and 650,000" ×18) and big halfway points (600,500 ×16).
   Order (NOT shuffled — each part builds on the last):
     E01–E07  count by tens/hundreds · benchmarks for small numbers
     E08–E13  cover-the-digits trick · how far apart the benchmarks are
     E14–E16  easy halfway points
     E17–E20  round easy numbers
   Short sentences on purpose (class reads mostly at Level 1).
   Every question has an opt-in `hint` (closed until 💡 Need a hint?; 10/8: all 20).
═══════════════════════════════════════════════════════ */
window.FORM_E = [
  // ── Count by tens · benchmarks for a 2-digit number ──
  { id:"E01", q:"Count by tens: 30, 40, 50. What comes next?", hint:"Add 10 to the last number.", choices:["60","51","55","70"], answer:"60",
    line:{ lo:30, hi:60, ticks:[{ v:30 }, { v:40 }, { v:50 }, { v:60, kind:"q" }] },
    explainLine:{ lo:30, hi:60, ticks:[{ v:30 }, { v:40 }, { v:50 }, { v:60, kind:"goal" }] },
    explanation:"Each ten is 10 more. 50 + 10 = 60. So 60 comes next." },
  { id:"E02", q:"47 is between which two tens?", hint:"Count by tens. Stop when you pass 47.", choices:["40 and 50","4 and 7","47 and 48","50 and 60"], answer:"40 and 50",
    line:{ lo:30, hi:70, dot:47, ticks:[{ v:30 }, { v:40 }, { v:50 }, { v:60 }, { v:70 }] },
    explainLine:{ lo:40, hi:50, dot:47, ticks:[{ v:40, kind:"goal" }, { v:50, kind:"goal" }] },
    explanation:"Count by tens: 30, 40, 50. 47 comes after 40. It comes before 50. So 47 is between 40 and 50." },
  { id:"E03", q:"How many tens are in 47?", hint:"Look at the tens place.", choices:["4 tens","7 tens","47 tens","40 tens"], answer:"4 tens",
    explanation:"The 4 is in the tens place. So 47 has 4 tens. 4 tens is 40." },
  { id:"E04", q:"4 tens is 40. What is the next ten after 40?", hint:"Add one more ten.", choices:["50","41","48","60"], answer:"50",
    line:{ lo:40, hi:50, dot:47, ticks:[{ v:40 }, { v:50, kind:"q" }] },
    explainLine:{ lo:40, hi:50, dot:47, ticks:[{ v:40, kind:"goal" }, { v:50, kind:"goal" }] },
    explanation:"One more ten is 10 more. 40 + 10 = 50. So the two benchmarks for 47 are 40 and 50." },

  // ── Count by hundreds and thousands · benchmarks ──
  { id:"E05", q:"Count by hundreds: 200, 300, 400. What comes next?", hint:"Add 100 to the last number.", choices:["500","401","410","450"], answer:"500",
    line:{ lo:200, hi:500, ticks:[{ v:200 }, { v:300 }, { v:400 }, { v:500, kind:"q" }] },
    explainLine:{ lo:200, hi:500, ticks:[{ v:200 }, { v:300 }, { v:400 }, { v:500, kind:"goal" }] },
    explanation:"Each hundred is 100 more. 400 + 100 = 500. So 500 comes next." },
  { id:"E06", q:"362 is between which two hundreds?", hint:"362 has 3 hundreds.", choices:["300 and 400","360 and 370","3 and 6","200 and 300"], answer:"300 and 400",
    line:{ lo:200, hi:600, dot:362, ticks:[{ v:200 }, { v:300 }, { v:400 }, { v:500 }, { v:600 }] },
    explainLine:{ lo:300, hi:400, dot:362, ticks:[{ v:300, kind:"goal" }, { v:400, kind:"goal" }] },
    explanation:"362 has 3 hundreds. 3 hundreds is 300. One more hundred is 400. So 362 is between 300 and 400." },
  { id:"E07", q:"4,718 is between which two thousands?", hint:"4,718 has 4 thousands.", choices:["4,000 and 5,000","4,700 and 4,800","3,000 and 4,000","4,710 and 4,720"], answer:"4,000 and 5,000",
    line:{ lo:2000, hi:6000, dot:4718, ticks:[{ v:2000 }, { v:3000 }, { v:4000 }, { v:5000 }, { v:6000 }] },
    explainLine:{ lo:4000, hi:5000, dot:4718, ticks:[{ v:4000, kind:"goal" }, { v:5000, kind:"goal" }] },
    explanation:"4,718 has 4 thousands. That is 4,000. One more thousand is 5,000. So 4,718 is between 4,000 and 5,000." },

  // ── The cover-the-digits trick · how far apart ──
  { id:"E08", q:"We round 6,284 to the nearest ten. What is the ten just before 6,284?", hint:"Cover the ones digit. Make it a 0.", choices:["6,280","6,200","6,000","6,290"], answer:"6,280",
    explainLine:{ lo:6280, hi:6290, dot:6284, ticks:[{ v:6280, kind:"goal" }, { v:6290 }] },
    explanation:"Keep the 6, the 2, and the 8. Make the ones digit a 0. You get 6,280. That is the ten just before 6,284." },
  { id:"E09", q:"The ten just before 6,284 is 6,280. What is the next ten?", hint:"Add one more ten.", choices:["6,290","6,300","6,281","6,380"], answer:"6,290",
    line:{ lo:6280, hi:6290, dot:6284, ticks:[{ v:6280 }, { v:6290, kind:"q" }] },
    explainLine:{ lo:6280, hi:6290, dot:6284, ticks:[{ v:6280, kind:"goal" }, { v:6290, kind:"goal" }] },
    explanation:"Add one ten. 6,280 + 10 = 6,290. So 6,284 is between 6,280 and 6,290." },
  { id:"E10", q:"For the nearest ten, the two benchmarks are 10 apart. Which pair is 10 apart?", hint:"Subtract the small number from the big one. Which pair makes 10?", choices:["6,280 and 6,290","6,200 and 6,300","6,000 and 7,000","6,270 and 6,290"], answer:"6,280 and 6,290",
    explanation:"6,290 − 6,280 = 10. They are 10 apart. 6,200 and 6,300 are 100 apart. Those are hundreds, not tens." },
  { id:"E11", q:"We round 5,736 to the nearest hundred. What is the hundred just before 5,736?", hint:"Cover the tens and ones. Make them 0.", choices:["5,700","5,730","5,000","5,800"], answer:"5,700",
    explainLine:{ lo:5700, hi:5800, dot:5736, ticks:[{ v:5700, kind:"goal" }, { v:5800 }] },
    explanation:"Keep the 5 and the 7. Make the tens and ones 0. You get 5,700. The next hundred is 5,800." },
  { id:"E12", q:"We round 649,870 to the nearest hundred thousand. What is the hundred thousand just before it?", hint:"Keep the first digit. Make all the rest 0.", choices:["600,000","640,000","649,000","500,000"], answer:"600,000",
    explainLine:{ lo:600000, hi:700000, dot:649870, ticks:[{ v:600000, kind:"goal" }, { v:700000 }] },
    explanation:"Keep the 6. Make every other digit 0. You get 600,000. The next hundred thousand is 700,000." },
  { id:"E13", q:"For the nearest hundred thousand, the benchmarks are 100,000 apart. Which pair is 100,000 apart?", hint:"Subtract. Which pair makes 100,000?", choices:["600,000 and 700,000","649,000 and 650,000","640,000 and 650,000","650,000 and 660,000"], answer:"600,000 and 700,000",
    explanation:"700,000 − 600,000 = 100,000. 649,000 and 650,000 are only 1,000 apart. That is too close." },

  // ── Easy halfway points ──
  { id:"E14", q:"What number is halfway between 40 and 50?", hint:"Count from 40 to 50. Which number is in the middle?", choices:["45","44","405","49"], answer:"45",
    line:{ lo:40, hi:50, ticks:[{ v:40 }, { v:45, kind:"ask" }, { v:50 }] },
    explainLine:{ lo:40, hi:50, dot:45, ticks:[{ v:40 }, { v:45, kind:"mid" }, { v:50 }], dist:{ lo:"5", hi:"5" } },
    explanation:"45 is 5 from 40. It is 5 from 50. It is right in the middle." },
  { id:"E15", q:"What number is halfway between 300 and 400?", hint:"The gap is 100. What is half of 100?", choices:["350","305","340","3,050"], answer:"350",
    line:{ lo:300, hi:400, ticks:[{ v:300 }, { v:350, kind:"ask" }, { v:400 }] },
    explainLine:{ lo:300, hi:400, dot:350, ticks:[{ v:300 }, { v:350, kind:"mid" }, { v:400 }], dist:{ lo:"50", hi:"50" } },
    explanation:"From 300 to 400 is 100. Half of 100 is 50. 300 + 50 = 350." },
  { id:"E16", q:"What number is halfway between 600,000 and 700,000?", hint:"The gap is 100,000. What is half of that?", choices:["650,000","600,500","605,000","660,000"], answer:"650,000",
    line:{ lo:600000, hi:700000, ticks:[{ v:600000 }, { v:650000, kind:"ask" }, { v:700000 }] },
    explainLine:{ lo:600000, hi:700000, dot:650000, ticks:[{ v:600000 }, { v:650000, kind:"mid" }, { v:700000 }], dist:{ lo:"50,000", hi:"50,000" } },
    explanation:"From 600,000 to 700,000 is 100,000. Half of that is 50,000. 600,000 + 50,000 = 650,000." },

  // ── Round easy numbers ──
  { id:"E17", q:"Round 47 to the nearest ten.", hint:"Find the two tens. Is 47 past halfway?", choices:["50","40","45","47"], answer:"50",
    line:{ lo:40, hi:50, dot:47, ticks:[{ v:40 }, { v:45, kind:"mid" }, { v:50 }] }, model:{ n:47, place:10 },
    explanation:"47 is between 40 and 50. Halfway is 45. 47 is past 45. So 47 rounds up to 50." },
  { id:"E18", q:"Round 362 to the nearest hundred.", hint:"Halfway is 350. Is 362 past it?", choices:["400","300","360","350"], answer:"400",
    line:{ lo:300, hi:400, dot:362, ticks:[{ v:300 }, { v:350, kind:"mid" }, { v:400 }] }, model:{ n:362, place:100 },
    explanation:"362 is between 300 and 400. Halfway is 350. 362 is past 350. So it rounds up to 400." },
  { id:"E19", q:"Round 4,218 to the nearest thousand.", hint:"Halfway is 4,500. Is 4,218 past it?", choices:["4,000","5,000","3,000","4,200"], answer:"4,000",
    line:{ lo:4000, hi:5000, dot:4218, ticks:[{ v:4000 }, { v:4500, kind:"mid" }, { v:5000 }] }, model:{ n:4218, place:1000 },
    explanation:"4,218 is between 4,000 and 5,000. Halfway is 4,500. 4,218 is before 4,500. So it rounds down to 4,000. It does not go down to 3,000." },
  { id:"E20", q:"Round 6,284 to the nearest ten.", hint:"Halfway is 6,285. Is 6,284 before it or past it?", choices:["6,280","6,290","6,270","6,300"], answer:"6,280",
    line:{ lo:6280, hi:6290, dot:6284, ticks:[{ v:6280 }, { v:6285, kind:"mid" }, { v:6290 }] }, model:{ n:6284, place:10 },
    explanation:"6,284 is between 6,280 and 6,290. Halfway is 6,285. 6,284 is just before it. So it rounds down to 6,280." },
];
