function multiply(num1, num2) {
    let pos = new Array(num1.length + num2.length).fill(0);
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            let mul = (num1[i] - '0') * (num2[j] - '0'); 
            let p1 = i + j, p2 = i + j + 1;
            let sum = mul + pos[p2];

            pos[p1] += Math.floor(sum / 10);
            pos[p2] = sum % 10;
        }
    }
    let res = pos.join('').replace(/^0+/, '') || '0';
    return res;
}
