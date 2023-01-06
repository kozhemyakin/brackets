module.exports = function check(str, bracketsConfig) {
  let isSearch = true;

  const brackets = bracketsConfig.map(item => item.join(''));
  
  const reStr = bracketsConfig
      .map(bracketsPair => bracketsPair
      .map(bracket => '[]\^$.|?*+()'.includes(bracket) ? '\\' + bracket : bracket)
      .join(''))
      .join('|');
  const re = new RegExp(reStr, 'g');

  while (isSearch) {
      str = str.replace(re, '');
      isSearch = brackets.some(bracketPair => str.includes(bracketPair)) ? true : false;
  }

return !str;
 
}
