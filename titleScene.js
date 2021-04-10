class TitleScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'titleScene'
        });
    }

    preload() {
        this.load.image('title', 'assets/title.png');
        this.load.image('start', 'assets/start.png');
        this.load.image('ghost-goblin', 'assets/ghostgoblin.png');
        this.load.image('pizza-guy', 'assets/pizza-guy.png');
        this.load.audio("intro", ["assets/jingle-achievement-01.wav"]);
    }

    create() {
        // this.sound.add('intro', { loop: false }).play();
        const title = this.add.image(390, 250, 'title');
        this.add.image(300, 160, 'ghost-goblin');
        this.add.image(400, 350, 'start');
        this.add.image(410, 130, 'pizza-guy');
        title.setInteractive({useHandCursor: true});
        title.on('pointerdown', () => this.clickButton());
        
    }
    clickButton() {
        this.scene.switch('gameScene');

    }

    update() {
        this.cursors = this.input.keyboard.createCursorKeys();
        // if (this.cache.isSoundDecoded('intro')) {
        //     this.scene.start();
        // };
        if (this.cursors.space.isDown) {
            this.scene.switch('gameScene');
        }
    }

}

export default TitleScene;