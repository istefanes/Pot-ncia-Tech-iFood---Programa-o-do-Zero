
class Heroi {

    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    getAtaque() {

        var ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;

            case 'guerreiro':
                ataque = 'espada';
                break;

            case 'monge':
                ataque = 'marciais';
                break;

            case 'ninja':
                ataque = 'shuriken';
                break;
        
            default:
                ataque = 'INVÁLIDO';
                break;
        }

        return ataque;
    }

    atacar() {

        var ataque = this.getAtaque();
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


const heroi1 = new Heroi('Garen',35,'guerreiro');
const heroi2 = new Heroi('Veigar',63,'mago');
const heroi3 = new Heroi('Zed',42,'ninja');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();