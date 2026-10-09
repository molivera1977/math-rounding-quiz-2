/* ═══════════════════════════════════════════════════════
   FORM B — OFFICIAL QUIZ (one try; students see correct / not quite only)
   Same skill in the same slot as Form A (B01 ↔ A01 …), new numbers.
   Explanations are kept for the teacher's review mode and the dashboard.
═══════════════════════════════════════════════════════ */
window.FORM_B = [
  { id:"B01", q:"8,354 is between which two hundreds?", choices:["8,300 and 8,400","8,000 and 9,000","8,350 and 8,360","8,200 and 8,300"], answer:"8,300 and 8,400", model:{ n:8354, place:100 }, explanation:"Count by hundreds: 8,200, 8,300, 8,400. 8,354 comes after 8,300 but before 8,400." },
  { id:"B02", q:"47,385 is between which two thousands?", choices:["47,000 and 48,000","40,000 and 50,000","47,300 and 47,400","46,000 and 47,000"], answer:"47,000 and 48,000", model:{ n:47385, place:1000 }, explanation:"47,385 has 47 thousands. It comes after 47,000 but before 48,000." },
  { id:"B03", q:"184,630 is between which two ten thousands?", choices:["180,000 and 190,000","100,000 and 200,000","184,000 and 185,000","170,000 and 180,000"], answer:"180,000 and 190,000", model:{ n:184630, place:10000 }, explanation:"Count by ten thousands: 170,000, 180,000, 190,000. 184,630 comes after 180,000 but before 190,000." },
  { id:"B04", q:"286,410 is between which two hundred thousands?", choices:["200,000 and 300,000","280,000 and 290,000","286,000 and 287,000","100,000 and 200,000"], answer:"200,000 and 300,000", model:{ n:286410, place:100000 }, explanation:"The 2 means 2 hundred thousands. 286,410 comes after 200,000 but before 300,000." },

  { id:"B05", q:"What number is halfway between 7,200 and 7,300?", choices:["7,250","7,205","7,025","7,260"], answer:"7,250",
    line:{ lo:7200, hi:7300, ticks:[{ v:7200 }, { v:7250, kind:"ask" }, { v:7300 }] },
    explainLine:{ lo:7200, hi:7300, dot:7250, ticks:[{ v:7200 }, { v:7250, kind:"mid" }, { v:7300 }], dist:{ lo:"50", hi:"50" } },
    explanation:"From 7,200 to 7,300 is 100. Half of 100 is 50. 7,200 + 50 = 7,250." },
  { id:"B06", q:"What number is halfway between 30,000 and 40,000?", choices:["35,000","30,500","36,000","35,500"], answer:"35,000",
    line:{ lo:30000, hi:40000, ticks:[{ v:30000 }, { v:35000, kind:"ask" }, { v:40000 }] },
    explainLine:{ lo:30000, hi:40000, dot:35000, ticks:[{ v:30000 }, { v:35000, kind:"mid" }, { v:40000 }], dist:{ lo:"5,000", hi:"5,000" } },
    explanation:"From 30,000 to 40,000 is 10,000. Half of 10,000 is 5,000. 30,000 + 5,000 = 35,000." },

  { id:"B07", q:"Is 5,164 before or past the halfway point between 5,160 and 5,170?", choices:["Before halfway","Past halfway","Exactly at halfway","It is not between them"], answer:"Before halfway",
    line:{ lo:5160, hi:5170, ticks:[{ v:5160 }, { v:5165, kind:"mid" }, { v:5170 }] }, model:{ n:5164, place:10 },
    explanation:"Halfway is 5,165. 5,164 is 1 less, so it is before halfway. It rounds down to 5,160." },
  { id:"B08", q:"Is 91,551 before or past the halfway point between 91,500 and 91,600?", choices:["Past halfway","Before halfway","Exactly at halfway","It is not between them"], answer:"Past halfway",
    line:{ lo:91500, hi:91600, ticks:[{ v:91500 }, { v:91550, kind:"mid" }, { v:91600 }] }, model:{ n:91551, place:100 },
    explanation:"Halfway is 91,550. 91,551 is 1 more, so it is past halfway. It rounds up to 91,600." },

  { id:"B09", q:"2,617 is 17 away from 2,600. How far is it from 2,700?", choices:["83","17","93","50"], answer:"83",
    line:{ lo:2600, hi:2700, dot:2617, ticks:[{ v:2600 }, { v:2650, kind:"mid" }, { v:2700 }], dist:{ lo:"17 away", hi:"?" } }, model:{ n:2617, place:100 },
    explanation:"From 2,617 up to 2,700 is 83 (2,617 + 83 = 2,700). 17 is less than 83, so 2,617 is closer to 2,600." },
  { id:"B10", q:"Which hundred is 4,382 closer to?", choices:["4,400","4,300","4,350","4,000"], answer:"4,400",
    line:{ lo:4300, hi:4400, dot:4382, ticks:[{ v:4300 }, { v:4350, kind:"mid" }, { v:4400 }] }, model:{ n:4382, place:100 },
    explanation:"4,382 is 82 away from 4,300 and 18 away from 4,400. 18 is less, so it is closer to 4,400." },

  { id:"B11", q:"Round 41,276 to the nearest ten thousand.", choices:["40,000","30,000","50,000","41,000"], answer:"40,000", model:{ n:41276, place:10000 },
    explanation:"41,276 lives between 40,000 and 50,000. Halfway is 45,000. 41,276 is before halfway, so it rounds down to 40,000, not 30,000." },
  { id:"B12", q:"Round 9,184 to the nearest thousand.", choices:["9,000","8,000","10,000","9,100"], answer:"9,000", model:{ n:9184, place:1000 },
    explanation:"9,184 lives between 9,000 and 10,000. Halfway is 9,500. 9,184 is before halfway, so it rounds down to 9,000, not 8,000." },

  { id:"B13", q:"Round 35,682 to the nearest thousand.", choices:["36,000","35,700","40,000","35,000"], answer:"36,000", model:{ n:35682, place:1000 },
    explanation:"35,682 lives between 35,000 and 36,000. Halfway is 35,500. 35,682 is past halfway, so it rounds up to 36,000." },
  { id:"B14", q:"Round 548,210 to the nearest hundred thousand.", choices:["500,000","550,000","548,000","600,000"], answer:"500,000", model:{ n:548210, place:100000 },
    explanation:"548,210 lives between 500,000 and 600,000. Halfway is 550,000. 548,210 is before halfway, so it rounds down to 500,000." },
  { id:"B15", q:"Round 263,594 to the nearest ten thousand.", choices:["260,000","264,000","300,000","270,000"], answer:"260,000", model:{ n:263594, place:10000 },
    explanation:"263,594 lives between 260,000 and 270,000. Halfway is 265,000. 263,594 is before halfway, so it rounds down to 260,000." },
  { id:"B16", q:"Round 8,953 to the nearest ten.", choices:["8,950","8,900","8,960","9,000"], answer:"8,950", model:{ n:8953, place:10 },
    explanation:"8,953 lives between 8,950 and 8,960. Halfway is 8,955. 8,953 is before halfway, so it rounds down to 8,950." },

  { id:"B17", q:"Which number rounds to 400 when it is rounded to the nearest hundred?", choices:["372","451","336","468"], answer:"372",
    explainLine:{ lo:300, hi:500, dot:372, ticks:[{ v:300 }, { v:350, kind:"mid" }, { v:400, kind:"goal" }, { v:450, kind:"mid" }, { v:500 }] },
    explanation:"Numbers that round to 400 are between the halfway points 350 and 450. 372 is past 350, so it rounds up to 400. 451 and 468 round to 500. 336 rounds to 300." },

  { id:"B18", q:"Round 47,385 to the nearest hundred.", choices:["47,400","47,000","47,390","47,300"], answer:"47,400", model:{ n:47385, place:100 },
    explanation:"To the nearest hundred, 47,385 lives between 47,300 and 47,400. Halfway is 47,350. 47,385 is past halfway, so it rounds up to 47,400." },

  { id:"B21", q:"Round 72,318 to the nearest thousand.", choices:["72,000","71,000","73,000","72,300"], answer:"72,000", model:{ n:72318, place:1000 },
    explanation:"72,318 lives between 72,000 and 73,000. Halfway is 72,500. 72,318 is before halfway, so it rounds down to 72,000. Rounding down keeps the 2. It does not go down to 71,000." },

  { id:"B20", q:"When you round to the nearest thousand, why do you look at the hundreds digit?", choices:["It tells you if the number is past halfway","It tells you how many thousands there are","It is always the biggest digit","It tells you which digits become zero"], answer:"It tells you if the number is past halfway", model:{ n:35682, place:1000 },
    explanation:"Halfway between two thousands is 500. In 35,682 the hundreds digit is 6, which means 600. 600 is past 500, so 35,682 rounds up to 36,000. A hundreds digit of 5 or more means halfway or past." },
];
