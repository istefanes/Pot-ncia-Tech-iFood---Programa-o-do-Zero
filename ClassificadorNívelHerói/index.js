
let nomeHeroi = 'Goku';
let qtdeXP = 100000;
let nivelHeroi = '';


if ( qtdeXP <= 1000 ) {
    nivelHeroi = 'Ferro';

} else if ( qtdeXP>=1001 && qtdeXP<=2000 ) {
    nivelHeroi = 'Bronze';

} else if ( qtdeXP>=2001 && qtdeXP<=6000 ) {
    nivelHeroi = 'Prata';

} else if ( qtdeXP>=6001 && qtdeXP<=7000 ) {
    nivelHeroi = 'Ouro';

} else if ( qtdeXP>=7001 && qtdeXP<=8000 ) {
    nivelHeroi = 'Platina';

} else if ( qtdeXP>=8001 && qtdeXP<=9000 ) {
    nivelHeroi = 'Ascendente';

} else if ( qtdeXP>=9001 && qtdeXP<=10000 ) {
    nivelHeroi = 'Imortal';

} else if ( qtdeXP >= 10001 ) {
    nivelHeroi = 'Radiante';
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);