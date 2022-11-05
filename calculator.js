

function calculator(A=0, B=0, C=0, E=1, K=0, G=0, H=0, I=0, J=0) {
    let D;
    let F;
    let L;

    D = A + B - C;
    D = D*12;
    F = D*E;
    L = F + G + H + I + J + K;
    return(L);
}


function compensation() {
    

    let A = parseFloat(document.getElementById('A').value);
    let B = parseFloat(document.getElementById('B').value);
    let C = parseFloat(document.getElementById('C').value);
    let E = parseFloat(document.getElementById('E').value);
    let K = parseFloat(document.getElementById('K').value);
    let G = parseFloat(document.getElementById('G').value);
    let H = parseFloat(document.getElementById('H').value);
    let I = parseFloat(document.getElementById('I').value);
    let J = parseFloat(document.getElementById('J').value);

    if(!A) {
        A = 0;
    }

    if(!B) {
        B = 0;
    }

    if(!C) {
        C = 0;
    }

    if(!E) {
        E = 1;
    }
    if(!G) {
        G = 0;
    }
    if(!H) {
        H = 0;
    }
    if(!I) {
        I = 0;
    }
    if(!J) {
        J = 0;
    }
    
    if(!K) {
        K = 0;
    }

    let L = calculator(A, B, C, E, K, G, H, I, J);
    document.getElementById('answer').innerText = L;

}

