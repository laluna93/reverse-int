module.exports = reverse;
function reverse (n) {
    let number = n.toString();
    let str = number.split('').reverse().join('');
         return Number(str);
        }

reverse(165)
