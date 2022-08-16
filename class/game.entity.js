const { v4: uuidv4 } = require('uuid');

class GameEntity {
    constructor(game) {
        this.id = uuidv4().v1;
        this.name = game.name;
        this.gen = game.gen;
        this.mode = game.mode;
        this.release = game.release;
        this.platform = game.platform;
        this.developer = game.developer;
        this.publisher = game.publisher;
    }

    validate() {
        if (!this.name || this.name === '') {
            throw new Error('O nome é obrigatório');
        }

        if (!this.gen || this.gen === '') {
            this.gen = 'NULL';
        }
        if (!this.mode || this.mode === '') {
            throw new Error('Escolha um modo:');
        }
        if (!this.release || this.release === '') {
            throw new Error('Release não inserida');
        }
        if (!this.platform || this.platform === '') {
            throw new Error('Plataforma não inserida');
        }
        if (!this.developer || this.developer === '') {
            throw new Error('Desenvolvedor(a) não inserido(a)');
        }
        if (!this.publisher || this.publisher === '') {
            this.publisher = 'NULL';
        }
    }

    getGame() {
        return {
            name: this.name,
            gen: this.gen,
            mode: this.mode,
            resease: this.release,
            platform: this.platform,
            developer: this.developer,
            publisher: this.publisher,
        };
    }
}

module.exports = GameEntity;
