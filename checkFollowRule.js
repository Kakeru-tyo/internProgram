(function() {

  const isValid = (s) => {
    
    if(s.length % 2 !== 0) {
      return false;
    }
    
    let changeStr = s;

    for(let i = 0; i < s.length / 2; i++) {
      if(changeStr.includes('()')) {
        changeStr = changeStr.replace('()', '');
      } else if(changeStr.includes('{}')) {
        changeStr = changeStr.replace('{}', '');
      } else if(changeStr.includes('[]')) {
        changeStr = changeStr.replace('[]', '');
      } else {
        return false;
      }
    }

    return true;
  }

  let s = '()';
  console.log(isValid(s));
  isValid(s);

  s = '([]){}'
  console.log(isValid(s));
  isValid(s);

  s = '({)}';
  console.log(isValid(s));
})();