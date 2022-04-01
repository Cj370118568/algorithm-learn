/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var isPalindrome = function (s) {
    if (s == null) {
      return true;
    }
    const tmplength = s.length;
    s = s.toLowerCase();
    s = s.match(/[a-zA-Z0-9]/g);
    if (s == null && tmplength > 0) {
      return true;
    }
    if (s == null || s.length < 2) {
      return true;
    }
    var slow = 0,
      fast = 0;
    for (; fast < s.length; fast += 2) {
      slow += 1;
    }
    fast = Math.min(s.length - 1, fast);
    var i = 0;
    while (fast >= slow) {
      if (s[i] != s[fast]) {
        return false;
      }
      i++;
      fast--;
    }

    return true;
  };

  const length = s.length;
  if (s.length < 2) return s;
  var dp = new Array(length).fill(0).map(() => new Array(length).fill(0));
  var longestStr = s[0];
  dp[0][0] = s[0];
  for (let i = 0; i < length; i++) {
    for (let j = i > 0 ? i : 1; j < length; j++) {
      const substr = s.substring(i, j + 1);
      dp[i][j] = isPalindrome(substr) ? substr : dp[i][j - 1];
      longestStr = longestStr.length > dp[i][j].length ? longestStr : dp[i][j];
    }
  }

  return longestStr;
};

var s =
  "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy";
console.log(longestPalindrome(s));
