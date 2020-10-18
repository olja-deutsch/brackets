module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    } else {
      const combinedConfig = bracketsConfig.map((item) => item.join(""));

      str = str.split('');

      for (let i = 0; i < str.length; i++) {
        if (combinedConfig.includes(str[i] + str[i + 1])) {
          str.splice(i, 2);
          i = -1;
        }
      };

      return str.length ? false : true;
    };
}
