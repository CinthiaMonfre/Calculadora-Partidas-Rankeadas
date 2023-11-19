function SaldoRankeado(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel;

    while (saldo > 0) {
        if (saldo <= 10) {
            nivel = "Ferro";
        } else if (saldo >= 11 && vitorias <= 20) {
            nivel = "Bronze";
        } else if (saldo >= 21 && vitorias <= 50) {
            nivel = "Prata";
        } else if (saldo >= 51 && vitorias <= 80) {
            nivel = "Ouro";
        } else if (saldo >= 81 && vitorias <= 90) {
            nivel = "Diamante";
        } else if (saldo >= 91 && vitorias <= 100) {
            nivel = "Lendário";
        } else {
            nivel = "Imortal";
        }

        break;
    }

    console.log("O Herói tem saldo de " + saldo + " e está no nível de " + nivel);
}

// Chamada da função com valores de exemplo
SaldoRankeado(30, 25);