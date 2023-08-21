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

//gpt解
function longestPalindrome(s) {
  const n = s.length;
  let maxLength = 1; // 最长回文子串的长度
  let start = 0; // 最长回文子串的起始索引

  // 创建一个二维数组来表示子串是否为回文串
  const dp = Array.from(Array(n), () => Array(n).fill(false));

  // 单个字符都是回文串
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // 检查长度为2的子串
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      maxLength = 2;
      start = i;
    }
  }

  // 检查长度大于等于3的子串
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1; // 子串的结束索引

      // 子串首尾字符相同并且内部子串是回文串
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        if (len > maxLength) {
          maxLength = len;
          start = i;
        }
      }
    }
  }

  return s.substr(start, maxLength);
}

var s =
  "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy";
console.log(longestPalindrome(s));
