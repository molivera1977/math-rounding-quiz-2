/* ═══════════════════════════════════════════════════════
   FORM A — REVIEW (answer + explanation + worked number line after each question)
   Built from the district video "Teaching Rounding in Grades 3 and 4":
   find the two benchmarks → find halfway → place the number →
   compare distances → only then the digit shortcut (A20).
   Aimed at what Quiz 1 showed (10/6): rounding to the wrong place,
   "it starts with 5 so it's 5,000", "round down = the digit goes down",
   and halfway points.
   Same skill in the same slot as Form B (A01 ↔ B01 …).
   line  = number line drawn under the question
   model = { n, place } → worked number line drawn in the review feedback
═══════════════════════════════════════════════════════ */
window.FORM_A = [
  { id:"A01", q:"3,476 is between which two hundreds?", choices:["3,400 and 3,500","3,000 and 4,000","3,470 and 3,480","3,300 and 3,400"], answer:"3,400 and 3,500", model:{ n:3476, place:100 }, explanation:"Count by hundreds: 3,300, 3,400, 3,500. 3,476 comes after 3,400 but before 3,500, so it lives between 3,400 and 3,500." },
  { id:"A02", q:"68,749 is between which two thousands?", choices:["68,000 and 69,000","60,000 and 70,000","68,700 and 68,800","67,000 and 68,000"], answer:"68,000 and 69,000", model:{ n:68749, place:1000 }, explanation:"68,749 has 68 thousands. It comes after 68,000 but before 69,000, so it lives between 68,000 and 69,000." },
  { id:"A03", q:"527,416 is between which two ten thousands?", choices:["520,000 and 530,000","500,000 and 600,000","527,000 and 528,000","510,000 and 520,000"], answer:"520,000 and 530,000", model:{ n:527416, place:10000 }, explanation:"Count by ten thousands: 510,000, 520,000, 530,000. 527,416 comes after 520,000 but before 530,000." },
  { id:"A04", q:"438,920 is between which two hundred thousands?", choices:["400,000 and 500,000","430,000 and 440,000","438,000 and 439,000","300,000 and 400,000"], answer:"400,000 and 500,000", model:{ n:438920, place:100000 }, explanation:"The 4 means 4 hundred thousands. 438,920 comes after 400,000 but before 500,000. (430,000 and 440,000 are ten thousands, not hundred thousands.)" },

  { id:"A05", q:"What number is halfway between 3,400 and 3,500?", choices:["3,450","3,405","3,045","3,460"], answer:"3,450",
    line:{ lo:3400, hi:3500, ticks:[{ v:3400 }, { v:3450, kind:"ask" }, { v:3500 }] },
    explainLine:{ lo:3400, hi:3500, dot:3450, ticks:[{ v:3400 }, { v:3450, kind:"mid" }, { v:3500 }], dist:{ lo:"50", hi:"50" } },
    explanation:"From 3,400 to 3,500 is 100. Half of 100 is 50. 3,400 + 50 = 3,450, so 3,450 is halfway." },
  { id:"A06", q:"What number is halfway between 60,000 and 70,000?", choices:["65,000","60,500","66,000","65,500"], answer:"65,000",
    line:{ lo:60000, hi:70000, ticks:[{ v:60000 }, { v:65000, kind:"ask" }, { v:70000 }] },
    explainLine:{ lo:60000, hi:70000, dot:65000, ticks:[{ v:60000 }, { v:65000, kind:"mid" }, { v:70000 }], dist:{ lo:"5,000", hi:"5,000" } },
    explanation:"From 60,000 to 70,000 is 10,000. Half of 10,000 is 5,000. 60,000 + 5,000 = 65,000, so 65,000 is halfway." },

  { id:"A07", q:"Is 6,284 before or past the halfway point between 6,280 and 6,290?", choices:["Before halfway","Past halfway","Exactly at halfway","It is not between them"], answer:"Before halfway",
    line:{ lo:6280, hi:6290, ticks:[{ v:6280 }, { v:6285, kind:"mid" }, { v:6290 }] }, model:{ n:6284, place:10 },
    explanation:"Halfway is 6,285. 6,284 is 1 less than 6,285, so it is before halfway. It rounds down to 6,280." },
  { id:"A08", q:"Is 42,651 before or past the halfway point between 42,600 and 42,700?", choices:["Past halfway","Before halfway","Exactly at halfway","It is not between them"], answer:"Past halfway",
    line:{ lo:42600, hi:42700, ticks:[{ v:42600 }, { v:42650, kind:"mid" }, { v:42700 }] }, model:{ n:42651, place:100 },
    explanation:"Halfway is 42,650. 42,651 is only 1 more, but past is past! It is 49 away from 42,700 and 51 away from 42,600, so it rounds up to 42,700." },

  { id:"A09", q:"5,738 is 38 away from 5,700. How far is it from 5,800?", choices:["62","38","72","50"], answer:"62",
    line:{ lo:5700, hi:5800, dot:5738, ticks:[{ v:5700 }, { v:5750, kind:"mid" }, { v:5800 }], dist:{ lo:"38 away", hi:"?" } }, model:{ n:5738, place:100 },
    explanation:"From 5,738 up to 5,800 is 62 (5,738 + 62 = 5,800). 38 is less than 62, so 5,738 is closer to 5,700." },
  { id:"A10", q:"Which hundred is 8,215 closer to?", choices:["8,200","8,300","8,250","8,000"], answer:"8,200",
    line:{ lo:8200, hi:8300, dot:8215, ticks:[{ v:8200 }, { v:8250, kind:"mid" }, { v:8300 }] }, model:{ n:8215, place:100 },
    explanation:"8,215 is 15 away from 8,200 and 85 away from 8,300. 15 is less, so it is closer to 8,200." },

  { id:"A11", q:"Round 23,418 to the nearest ten thousand.", choices:["20,000","10,000","30,000","23,000"], answer:"20,000", model:{ n:23418, place:10000 },
    explanation:"23,418 lives between 20,000 and 30,000. Halfway is 25,000. 23,418 is before halfway, so it rounds down to 20,000. Rounding down goes to the lower benchmark. It never goes below it." },
  { id:"A12", q:"Round 7,325 to the nearest thousand.", choices:["7,000","6,000","8,000","7,300"], answer:"7,000", model:{ n:7325, place:1000 },
    explanation:"7,325 lives between 7,000 and 8,000. Halfway is 7,500. 7,325 is before halfway, so it rounds down to 7,000. 6,000 is not one of its benchmarks." },

  { id:"A13", q:"Round 68,749 to the nearest thousand.", choices:["69,000","68,700","70,000","68,000"], answer:"69,000", model:{ n:68749, place:1000 },
    explanation:"68,749 lives between 68,000 and 69,000. Halfway is 68,500. 68,749 is past halfway: 251 away from 69,000 and 749 away from 68,000. It rounds up to 69,000." },
  { id:"A14", q:"Round 362,540 to the nearest hundred thousand.", choices:["400,000","360,000","363,000","300,000"], answer:"400,000", model:{ n:362540, place:100000 },
    explanation:"362,540 lives between 300,000 and 400,000. Halfway is 350,000. 362,540 is past halfway, so it rounds up to 400,000. (360,000 is the nearest ten thousand, a different place.)" },
  { id:"A15", q:"Round 527,416 to the nearest ten thousand.", choices:["530,000","527,000","500,000","520,000"], answer:"530,000", model:{ n:527416, place:10000 },
    explanation:"527,416 lives between 520,000 and 530,000. Halfway is 525,000. 527,416 is past halfway, so it rounds up to 530,000." },
  { id:"A16", q:"Round 4,736 to the nearest ten.", choices:["4,740","4,700","4,730","4,800"], answer:"4,740", model:{ n:4736, place:10 },
    explanation:"4,736 lives between 4,730 and 4,740. Halfway is 4,735. 4,736 is past halfway, so it rounds up to 4,740." },

  { id:"A17", q:"Which number rounds to 5,000 when it is rounded to the nearest thousand?", choices:["4,682","5,712","4,391","5,503"], answer:"4,682",
    explainLine:{ lo:4000, hi:6000, dot:4682, ticks:[{ v:4000 }, { v:4500, kind:"mid" }, { v:5000, kind:"goal" }, { v:5500, kind:"mid" }, { v:6000 }] },
    explanation:"Numbers that round to 5,000 are between the halfway points 4,500 and 5,500. 4,682 is past 4,500, so it rounds up to 5,000. 5,712 and 5,503 round to 6,000. 4,391 rounds to 4,000. Starting with a 5 does not mean it rounds to 5,000!" },

  { id:"A18", q:"Round 68,749 to the nearest hundred.", choices:["68,700","69,000","68,800","68,750"], answer:"68,700", model:{ n:68749, place:100 },
    explanation:"Same number, new place, new benchmarks! To the nearest hundred, 68,749 lives between 68,700 and 68,800. Halfway is 68,750. 68,749 is just before halfway, so it rounds down to 68,700." },

  { id:"A19", q:"Round each number to the nearest hundred, then add to estimate: 3,476 + 2,812", choices:["6,300","6,200","6,000","6,288"], answer:"6,300",
    explanation:"3,476 rounds to 3,500. 2,812 rounds to 2,800. 3,500 + 2,800 = 6,300. The exact answer, 6,288, is close to 6,300, so it makes sense." },

  { id:"A20", q:"When you round to the nearest hundred, why do you look at the tens digit?", choices:["It tells you if the number is past halfway","It tells you how many hundreds there are","It is always the biggest digit","It tells you which digits become zero"], answer:"It tells you if the number is past halfway", model:{ n:3476, place:100 },
    explanation:"Halfway between two hundreds is 50. In 3,476 the tens digit is 7, which means 70. 70 is past 50, so 3,476 is past halfway and rounds up to 3,500. A tens digit of 5 or more means halfway or past." },
];
