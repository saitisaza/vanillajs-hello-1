window.onload = function() {
  let pronouns = ["the", "hour"];
  let adjs = ["great", "big"];
  let nouns = ["joger", "racoon"];
  let tlds = [".com", ".net"];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          console.log(`${pronoun}${adj}${noun}${tld}`);
        }
      }
    }
  }
};
