module.exports = reverse;
function reverse (n) {
    let number = n.toString();
    let str = number.split('').reverse().join('');
         return parseInt(str);
        }

reverse(165)
