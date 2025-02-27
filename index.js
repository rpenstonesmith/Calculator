function Solve(val) {
    let v = document.getElementById('ans');
    v.value += val;
}

function Result() {
    let v1 = document.getElementById('ans').value;

    v1 = v1.replace(/(\d+(\.\d*)?)\s*([\+\-\*\/])\s*\((\d+(\.\d*)?) \/ 100\)/g, (match, num1, _, operator, num2) => {
        return `${num1} ${operator} (${num1} * ${num2} / 100)`;
    });

    let v2 = eval(v1);
    document.getElementById('ans').value = v2;
}

function Clear() {
    let input = document.getElementById('ans');
    input.value= '';
}

function Back() {
    let back = document.getElementById('ans');
    back.value = back.value.slice(0,-1);
}