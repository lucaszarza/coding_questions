function repeatedString(string, number) {
  let numberOfAs = 0;

  if (number >= string.length) {
    let ocurrencesOfAs = [...string].filter((e) => e === "a").length;

    numberOfAs = Math.floor(number / string.length) * ocurrencesOfAs;
  }

  let tailStringLength = number % string.length;

  for (let i = 0; i < tailStringLength; i++) {
    if (string[i] === "a") numberOfAs++;
  }

  console.log(numberOfAs);
}
const s1 = "abcac";
const n1 = 10;

const s2 = "abcabcabcabcabcabc";
const n2 = 5;

const s3 = "a";
const n3 = 1000000000000;

const s4 = "ceebbcb";
const n4 = 817723;

const s5 =
  "epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq";
const n5 = 549382313570;

repeatedString(s5, n5);
