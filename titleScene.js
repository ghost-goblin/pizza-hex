class TitleScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'titleScene'
        });
    }

    preload() {
        this.load.image('mushroom-0', 'assets/mush-0.png');
        this.load.image('mushroom-1', 'assets/mush-1.png');
        this.load.image('cloud-0', 'assets/cloud-0.png');
        this.load.image('cloud-1', 'assets/cloud-1.png');
        this.load.image('cloud-2', 'assets/cloud-2.png');
        this.load.image('background', 'assets/background.png');
        this.load.audio("intro", ["assets/jingle-achievement-01.wav"]);
    }

    create() {
        // this.sound.add('intro', { loop: false }).play();
        // this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor('#380073');
        this.add.image(400, 250, 'background');
        // this.add.image(220,300, 'mushroom-0');
        this.add.image(220,180, 'mushroom-1');
        this.add.image(20, 100, 'cloud-0');
        this.add.image(400, 250, 'cloud-1');
        this.add.image(750, 100, 'cloud-2');
        this.title = this.add.text(400, -500, 'Pizza Hex',
        { color: '#380073',fontSize: 100, fontFamily: 'Alagard'  }).setOrigin(0.5, 0);
        this.add.text(400, 60, 'Press <SPACEBAR> to Start',
        { color: '#FFBBE2',fontSize: 50, fontFamily: 'Alagard'  }).setOrigin(0.5, 0);
        this.title.setInteractive({useHandCursor: true});
        this.title.on('pointerdown', () => this.clickButton());
        
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