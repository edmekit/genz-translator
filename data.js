const Slang = {
    "cooked": {
    plain: "done for",
    formal: "completely incapacitated or overwhelmed"
  },
  "ate and left no crumbs": {
    plain: "did really well",
    formal: "delivered an exemplary performance"
  },
  "delulu": {
    plain: "delusional",
    formal: "demonstrating unrealistic expectations"
  },
  "rizz": {
    plain: "charisma",
    formal: "social charisma or personal magnetism"
  },
  "lowkey": {
    plain: "a little",
    formal: "to a modest or discreet extent"
  },
  "highkey": {
    plain: "very",
    formal: "to a significant and overt extent"
  },
  "it’s giving": {
    plain: "it feels like",
    formal: "this conveys an impression of"
  },
  "no cap": {
    plain: "I’m serious",
    formal: "this statement is made without exaggeration"
  },
  "mid": {
    plain: "average",
    formal: "of mediocre quality"
  },
  "based": {
    plain: "truee",
    formal: "principled and consistent with stated values"
  },
  "cringe": {
    plain: "embarrassing",
    formal: "socially awkward or discomforting"
  },
  "touch grass": {
    plain: "go outside",
    formal: "step away and regain perspective"
  },
  "goat": {
    plain: "greatest of all time",
    formal: "the most outstanding individual in a field"
  },
  "sigma": {
    plain: "independent",
    formal: "demonstrating self-sufficient and nonconformist behavior"
  },
  "bussin": {
    plain: "tasty",
    formal: "exceptionally well-made or enjoyable"
  },
  "cap": {
    plain: "lie",
    formal: "a false or exaggerated statement"
  },
  "slaps": {
    plain: "really good",
    formal: "remarkably effective or enjoyable"
  },
  "fire": {
    plain: "amazing",
    formal: "of outstanding quality"
  },
  "dead": {
    plain: "laughing hard",
    formal: "experiencing uncontrollable amusement"
  },
  "lit": {
    plain: "exciting",
    formal: "energetic and highly stimulating"
  },
  "salty": {
    plain: "bitter",
    formal: "displaying resentment or irritation"
  },
  "shook": {
    plain: "surprised",
    formal: "deeply unsettled or astonished"
  },
  "stan": {
    plain: "big fan",
    formal: "an excessively enthusiastic supporter"
  },
  "simp": {
    plain: "too submissive for love",
    formal: "overly compliant or deferential in pursuit of affection"
  },
  "flex": {
    plain: "show off",
    formal: "display possessions or qualities ostentatiously"
  },
  "sus": {
    plain: "suspicious",
    formal: "appearing questionable or untrustworthy"
  },
  "drip": {
    plain: "stylish clothing",
    formal: "a fashionable or visually appealing appearance"
  },
  "ghosted": {
    plain: "suddenly stopped talking",
    formal: "ceased communication without explanation"
  },
  "slay": {
    plain: "did amazing",
    formal: "achieved success with remarkable impact"
  },
  "glow up": {
    plain: "big improvement in looks",
    formal: "a notable transformation in appearance"
  },
  "npc": {
    plain: "unoriginal person",
    formal: "an individual perceived as lacking independent thought"
  },
  "vibe check": {
    plain: "test the mood",
    formal: "evaluate the prevailing atmosphere or attitude"
  },
  "periodt": {
    plain: "no discussion",
    formal: "this concludes the matter without further debate"
  },
  "ratioed": {
    plain: "got more hate than likes",
    formal: "received disproportionately negative feedback compared to support"
  },
  "spill the tea": {
    plain: "share gossip",
    formal: "disclose informal or potentially sensitive information"
  },
  "npc energy": {
    plain: "acting dull",
    formal: "displaying behavior perceived as mechanical or uninspired"
  },
  "pressed": {
    plain: "upset",
    formal: "demonstrating irritation or frustration"
  },
  "chad": {
    plain: "confident guy",
    formal: "a stereotypically assertive and socially dominant male"
  },
  "fomo": {
    plain: "fear of missing out",
    formal: "anxiety about being excluded from rewarding experiences"
  },
  "mogged": {
    plain: "completely overshadowed",
    formal: "thoroughly surpassed to the point of being diminished in comparison"
  },
  "bet": {
    plain: "agreed",
    formal: "an affirmative response indicating full agreement"
  },
  "bruh": {
    plain: "dude",
    formal: "an informal address used to express disbelief or frustration"
  },
  "fam": {
    plain: "close friend",
    formal: "a term of endearment used to describe a trusted companion"
  },
  "ong": {
    plain: "truthfully",
    formal: "a declaration asserting complete sincerity"
  },
  "vibing": {
    plain: "relaxing",
    formal: "experiencing a state of calm enjoyment"
  },
  "caught in 4k": {
    plain: "caught red handed",
    formal: "indisputably exposed in an act of wrongdoing"
  },
  "skibidi": {
    plain: "nonsense",
    formal: "a frivolous expression used humorously without inherent meaning"
  },
  "gyatt": {
    plain: "admiration for attractiveness",
    formal: "an exclamation denoting strong appreciation for physical appeal"
  }
}

const btn = document.getElementById("trans");
const input = document.getElementById("inputText");
const output = document.getElementById("outputText");

btn.addEventListener("click", () => {
  let input = inputText.value.toLowerCase();

  let plainOutput = input;
  let formalOutput = input;


  for (let slang in Slang) {
    let regex = new RegExp("\\b" + slang + "\\b", "gi");
    plainOutput = plainOutput.replace(regex, Slang[slang].plain);
    formalOutput = formalOutput.replace(regex, Slang[slang].formal);
  }

 outputText.value = plainOutput;
 formalText.value = formalOutput;

});