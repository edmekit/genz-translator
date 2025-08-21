const Slang = {
  "cooked": {
    plain: "done for",
    formal: "completely incapacitated"
  },
  "ate and left no crumbs": {
    plain: "did really well",
    formal: "delivered an exemplary performance"
  },
  "delulu": {
    plain: "delusional",
    formal: "unrealistic in expectations"
  },
  "rizz": {
    plain: "charisma",
    formal: "personal magnetism"
  },
  "lowkey": {
    plain: "a little",
    formal: "discreetly"
  },
  "highkey": {
    plain: "very",
    formal: "openly"
  },
  "it’s giving": {
    plain: "it feels like",
    formal: "this conveys an impression of"
  },
  "no cap": {
    plain: "I’m serious",
    formal: "without exaggeration"
  },
  "mid": {
    plain: "average",
    formal: "mediocre quality"
  },
  "based": {
    plain: "true",
    formal: "aligned with principles"
  },
  "cringe": {
    plain: "embarrassing",
    formal: "socially awkward"
  },
  "touch grass": {
    plain: "go outside",
    formal: "step away and regain perspective"
  },
  "goat": {
    plain: "greatest",
    formal: "the most outstanding individual"
  },
  "sigma": {
    plain: "independent",
    formal: "self-sufficient"
  },
  "bussin": {
    plain: "tasty",
    formal: "exceptionally enjoyable"
  },
  "cap": {
    plain: "lie",
    formal: "false statement"
  },
  "slaps": {
    plain: "really good",
    formal: "highly effective"
  },
  "fire": {
    plain: "amazing",
    formal: "outstanding quality"
  },
  "dead": {
    plain: "laughing hard",
    formal: "uncontrollable amusement"
  },
  "lit": {
    plain: "exciting",
    formal: "energetic"
  },
  "salty": {
    plain: "bitter",
    formal: "resentful"
  },
  "shook": {
    plain: "surprised",
    formal: "deeply astonished"
  },
  "stan": {
    plain: "big fan",
    formal: "enthusiastic supporter"
  },
  "simp": {
    plain: "submissive for love",
    formal: "overly deferential"
  },
  "flex": {
    plain: "show off",
    formal: "display ostentatiously"
  },
  "sus": {
    plain: "suspicious",
    formal: "questionable"
  },
  "drip": {
    plain: "stylish clothing",
    formal: "fashionable appearance"
  },
  "ghosted": {
    plain: "suddenly stopped talking",
    formal: "ended communication without explanation"
  },
  "slay": {
    plain: "did amazing",
    formal: "achieved remarkable success"
  },
  "slayed": {
    plain: "did extremely well",
    formal: "performed with excellence"
  },
  "glow up": {
    plain: "big improvement in looks",
    formal: "notable transformation in appearance"
  },
  "npc": {
    plain: "unoriginal person",
    formal: "lacking independent thought"
  },
  "vibe check": {
    plain: "test the mood",
    formal: "evaluate the atmosphere"
  },
  "periodt": {
    plain: "no discussion",
    formal: "this concludes the matter"
  },
  "ratioed": {
    plain: "got more hate than likes",
    formal: "received disproportionate criticism"
  },
  "spill the tea": {
    plain: "share gossip",
    formal: "disclose informal information"
  },
  "npc energy": {
    plain: "acting dull",
    formal: "uninspired behavior"
  },
  "pressed": {
    plain: "upset",
    formal: "irritated"
  },
  "chad": {
    plain: "confident guy",
    formal: "socially dominant male"
  },
  "fomo": {
    plain: "fear of missing out",
    formal: "anxiety about exclusion"
  },
  "mogged": {
    plain: "completely overshadowed",
    formal: "thoroughly surpassed"
  },
  "bet": {
    plain: "agreed",
    formal: "affirmative response"
  },
  "bruh": {
    plain: "dude",
    formal: "casual address"
  },
  "fam": {
    plain: "close friend",
    formal: "trusted companion"
  },
  "ong": {
    plain: "truthfully",
    formal: "utterly sincere"
  },
  "fr": {
    plain: "for real",
    formal: "genuinely true"
  },
  "ig": {
    plain: "I guess",
    formal: "tentatively assumed"
  },
  "vibing": {
    plain: "relaxing",
    formal: "calm enjoyment"
  },
  "caught in 4k": {
    plain: "caught red handed",
    formal: "indisputably exposed"
  },
  "skibidi": {
    plain: "nonsense",
    formal: "meaningless expression"
  },
  "gyatt": {
    plain: "admiration for attractiveness",
    formal: "exclamation of physical appeal"
  }
}


const inputBox = document.getElementById("inputText");
const outputBox = document.getElementById("outputText");
const formalbtn = document.getElementById("Formal");
const plainbtn = document.getElementById("Plain");
const delbtn = document.getElementById("btn");

plainbtn.addEventListener("click", () => {
  let plainOutput = inputBox.value.toLowerCase();

  for (let slang in Slang) {
    let regex = new RegExp("\\b" + slang + "\\b", "gi");
    plainOutput = plainOutput.replace(regex, Slang[slang]["plain"]);
  }

  outputBox.value = plainOutput;
});

formalbtn.addEventListener("click", () => {
  let formalOutput = inputBox.value.toLowerCase();

  for (let slang in Slang) {
    let regex = new RegExp("\\b" + slang + "\\b", "gi");
    formalOutput = formalOutput.replace(regex, Slang[slang]["formal"]);
  }

  outputBox.value = formalOutput;
});

delbtn.addEventListener("click", () => {
  inputBox.value = "";
  outputBox.value = "";
});

