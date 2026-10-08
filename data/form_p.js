/* ═══════════════════════════════════════════════════════
   FORM P — PRACTICE (Step 2, before the review). Answer + why +
   number line after every question; practice as many times as
   they like. Questions stay IN ORDER (not shuffled): each of four
   numbers walks the district routine one step at a time —
     Step 1 benchmarks → Step 2 halfway →
     Step 3 closer / before-or-past → Step 4 round.
   Numbers: the video's own examples (3,476 · 6,284 · 68,749) and
   649,870, the item 11 of 19 missed on Quiz 1 (10/6).
   The picture grows each step, so students learn the format the
   review and quiz use. Each question has a hint (read aloud) that
   reuses the Practice A strategy for that step (Marcos 10/7).
═══════════════════════════════════════════════════════ */
window.FORM_P = [
  // ── 3,476 → nearest hundred (rounds up) ──
  { id:"P01", q:"Round 3,476 to the nearest hundred. Step 1: Which two hundreds does 3,476 live between?", hint:"Cover the tens and ones. Make them 0. Then add one hundred.", choices:["3,400 and 3,500","3,000 and 4,000","3,470 and 3,480","3,300 and 3,400"], answer:"3,400 and 3,500",
    line:{ lo:3400, hi:3500, dot:3476, ticks:[{ v:3400, kind:"q" }, { v:3500, kind:"q" }] },
    explainLine:{ lo:3400, hi:3500, dot:3476, ticks:[{ v:3400 }, { v:3500 }] },
    explanation:"Count by hundreds: 3,300, 3,400, 3,500. 3,476 comes after 3,400 but before 3,500. Those are its two benchmarks." },
  { id:"P02", q:"Round 3,476 to the nearest hundred. Step 2: What number is halfway between 3,400 and 3,500?", hint:"The benchmarks are 100 apart. What is half of 100?", choices:["3,450","3,405","3,045","3,500"], answer:"3,450",
    line:{ lo:3400, hi:3500, ticks:[{ v:3400 }, { v:3450, kind:"ask" }, { v:3500 }] },
    explainLine:{ lo:3400, hi:3500, ticks:[{ v:3400 }, { v:3450, kind:"mid" }, { v:3500 }] },
    explanation:"From 3,400 to 3,500 is 100. Half of 100 is 50. 3,400 + 50 = 3,450, so halfway is 3,450." },
  { id:"P03", q:"Round 3,476 to the nearest hundred. Step 3: Which benchmark is 3,476 closer to?", hint:"Look at the two distances. Which one is shorter?", choices:["3,500","3,400","3,450","4,000"], answer:"3,500",
    line:{ lo:3400, hi:3500, dot:3476, ticks:[{ v:3400 }, { v:3450, kind:"mid" }, { v:3500 }], dist:{ lo:"76 away", hi:"24 away" } }, model:{ n:3476, place:100 },
    explanation:"3,476 is 76 away from 3,400 but only 24 away from 3,500. It is past halfway, so it is closer to 3,500." },
  { id:"P04", q:"Round 3,476 to the nearest hundred. Step 4: What is 3,476 rounded to the nearest hundred?", hint:"Round to the benchmark that is closer.", choices:["3,500","3,400","3,480","4,000"], answer:"3,500", model:{ n:3476, place:100 },
    explanation:"3,476 is past halfway and closer to 3,500, so it rounds up to 3,500." },

  // ── 6,284 → nearest ten (just before halfway, rounds down) ──
  { id:"P05", q:"Round 6,284 to the nearest ten. Step 1: Which two tens does 6,284 live between?", hint:"Cover the ones digit. Make it a 0. Then add one ten.", choices:["6,280 and 6,290","6,200 and 6,300","6,270 and 6,280","6,284 and 6,294"], answer:"6,280 and 6,290",
    line:{ lo:6280, hi:6290, dot:6284, ticks:[{ v:6280, kind:"q" }, { v:6290, kind:"q" }] },
    explainLine:{ lo:6280, hi:6290, dot:6284, ticks:[{ v:6280 }, { v:6290 }] },
    explanation:"Count by tens: 6,270, 6,280, 6,290. 6,284 comes after 6,280 but before 6,290. Those are its two benchmarks." },
  { id:"P06", q:"Round 6,284 to the nearest ten. Step 2: What number is halfway between 6,280 and 6,290?", hint:"The benchmarks are 10 apart. What is half of 10?", choices:["6,285","6,250","6,289","6,280"], answer:"6,285",
    line:{ lo:6280, hi:6290, ticks:[{ v:6280 }, { v:6285, kind:"ask" }, { v:6290 }] },
    explainLine:{ lo:6280, hi:6290, ticks:[{ v:6280 }, { v:6285, kind:"mid" }, { v:6290 }] },
    explanation:"From 6,280 to 6,290 is 10. Half of 10 is 5. 6,280 + 5 = 6,285, so halfway is 6,285." },
  { id:"P07", q:"Round 6,284 to the nearest ten. Step 3: Is 6,284 before or past halfway?", hint:"Halfway is 6,285. Is 6,284 less or more than 6,285?", choices:["Before halfway","Past halfway","Exactly at halfway","It is not between them"], answer:"Before halfway",
    line:{ lo:6280, hi:6290, dot:6284, ticks:[{ v:6280 }, { v:6285, kind:"mid" }, { v:6290 }] }, model:{ n:6284, place:10 },
    explanation:"Halfway is 6,285. 6,284 is 1 less, so it is just before halfway. It is 4 away from 6,280 and 6 away from 6,290, so it is closer to 6,280." },
  { id:"P08", q:"Round 6,284 to the nearest ten. Step 4: What is 6,284 rounded to the nearest ten?", hint:"Before halfway, round down. Past halfway, round up.", choices:["6,280","6,290","6,270","6,300"], answer:"6,280", model:{ n:6284, place:10 },
    explanation:"6,284 is before halfway, so it rounds down to 6,280. Rounding down goes to the lower benchmark, 6,280, not 6,270." },

  // ── 68,749 → nearest thousand (rounds up) ──
  { id:"P09", q:"Round 68,749 to the nearest thousand. Step 1: Which two thousands does 68,749 live between?", hint:"Cover the hundreds, tens, and ones. Make them 0. Then add one thousand.", choices:["68,000 and 69,000","60,000 and 70,000","68,700 and 68,800","67,000 and 68,000"], answer:"68,000 and 69,000",
    line:{ lo:68000, hi:69000, dot:68749, ticks:[{ v:68000, kind:"q" }, { v:69000, kind:"q" }] },
    explainLine:{ lo:68000, hi:69000, dot:68749, ticks:[{ v:68000 }, { v:69000 }] },
    explanation:"Count by thousands: 67,000, 68,000, 69,000. 68,749 comes after 68,000 but before 69,000. Those are its two benchmarks." },
  { id:"P10", q:"Round 68,749 to the nearest thousand. Step 2: What number is halfway between 68,000 and 69,000?", hint:"The benchmarks are 1,000 apart. What is half of 1,000?", choices:["68,500","68,050","68,005","68,750"], answer:"68,500",
    line:{ lo:68000, hi:69000, ticks:[{ v:68000 }, { v:68500, kind:"ask" }, { v:69000 }] },
    explainLine:{ lo:68000, hi:69000, ticks:[{ v:68000 }, { v:68500, kind:"mid" }, { v:69000 }] },
    explanation:"From 68,000 to 69,000 is 1,000. Half of 1,000 is 500. 68,000 + 500 = 68,500, so halfway is 68,500." },
  { id:"P11", q:"Round 68,749 to the nearest thousand. Step 3: Which benchmark is 68,749 closer to?", hint:"Look at the two distances. Which one is shorter?", choices:["69,000","68,000","68,500","70,000"], answer:"69,000",
    line:{ lo:68000, hi:69000, dot:68749, ticks:[{ v:68000 }, { v:68500, kind:"mid" }, { v:69000 }], dist:{ lo:"749 away", hi:"251 away" } }, model:{ n:68749, place:1000 },
    explanation:"68,749 is 749 away from 68,000 but only 251 away from 69,000. It is past halfway, so it is closer to 69,000." },
  { id:"P12", q:"Round 68,749 to the nearest thousand. Step 4: What is 68,749 rounded to the nearest thousand?", hint:"Round to the benchmark that is closer.", choices:["69,000","68,700","70,000","68,000"], answer:"69,000", model:{ n:68749, place:1000 },
    explanation:"68,749 is past halfway and closer to 69,000, so it rounds up to 69,000. The numbers got bigger, but the steps stayed the same!" },

  // ── 649,870 → nearest hundred thousand (just before halfway, rounds down) ──
  { id:"P13", q:"Round 649,870 to the nearest hundred thousand. Step 1: Which two hundred thousands does 649,870 live between?", hint:"Keep the first digit. Make all the rest 0. Then add one hundred thousand.", choices:["600,000 and 700,000","640,000 and 650,000","649,000 and 650,000","500,000 and 600,000"], answer:"600,000 and 700,000",
    line:{ lo:600000, hi:700000, dot:649870, ticks:[{ v:600000, kind:"q" }, { v:700000, kind:"q" }] },
    explainLine:{ lo:600000, hi:700000, dot:649870, ticks:[{ v:600000 }, { v:700000 }] },
    explanation:"The 6 means 6 hundred thousands. Count by hundred thousands: 500,000, 600,000, 700,000. 649,870 comes after 600,000 but before 700,000." },
  { id:"P14", q:"Round 649,870 to the nearest hundred thousand. Step 2: What number is halfway between 600,000 and 700,000?", hint:"The benchmarks are 100,000 apart. What is half of 100,000?", choices:["650,000","605,000","660,000","600,500"], answer:"650,000",
    line:{ lo:600000, hi:700000, ticks:[{ v:600000 }, { v:650000, kind:"ask" }, { v:700000 }] },
    explainLine:{ lo:600000, hi:700000, ticks:[{ v:600000 }, { v:650000, kind:"mid" }, { v:700000 }] },
    explanation:"From 600,000 to 700,000 is 100,000. Half of 100,000 is 50,000. 600,000 + 50,000 = 650,000, so halfway is 650,000." },
  { id:"P15", q:"Round 649,870 to the nearest hundred thousand. Step 3: Is 649,870 before or past halfway?", hint:"Halfway is 650,000. Is 649,870 less or more than 650,000?", choices:["Before halfway","Past halfway","Exactly at halfway","It is not between them"], answer:"Before halfway",
    line:{ lo:600000, hi:700000, dot:649870, ticks:[{ v:600000 }, { v:650000, kind:"mid" }, { v:700000 }] }, model:{ n:649870, place:100000 },
    explanation:"Halfway is 650,000. 649,870 is 130 less than 650,000, so it is just before halfway. That makes it closer to 600,000." },
  { id:"P16", q:"Round 649,870 to the nearest hundred thousand. Step 4: What is 649,870 rounded to the nearest hundred thousand?", hint:"Round to a benchmark, not to halfway. Is it closer to 600,000 or 700,000?", choices:["600,000","650,000","700,000","500,000"], answer:"600,000", model:{ n:649870, place:100000 },
    explanation:"649,870 is before halfway, so it rounds down to 600,000. 650,000 is the halfway point, not a hundred thousand. Rounding down never goes below 600,000." },
];
