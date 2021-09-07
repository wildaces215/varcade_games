import Phaser from 'phaser'

import { BootScene } from './scenes/boot_scene.js'
import { LoadingScene } from './scenes/loading_scene.js'
import { MainMenuScene } from './scenes/main_menu.js'
import { StoryIntroScene } from './scenes/story_intro.js'
import { CharacterSelectScene } from './scenes/character_select.js'
import { CharacterIntroScene } from './scenes/character_intro.js'
import { VSScene } from './scenes/vs_screen.js'
import { BattleScene } from './scenes/fight_screen.js'
import { PostFightScene } from './scenes/post_fight.js'
import { GameOverScene } from './scenes/game_over.js'

import { globalLayoutData } from './game_data/layout.js'

const config = {
  type: Phaser.AUTO,
  width: globalLayoutData.screenWidth,
  height: globalLayoutData.screenHeight,
  parent: 'gameContainer',
  scene: [
    BootScene,
    LoadingScene,
    MainMenuScene,
    StoryIntroScene,
    CharacterSelectScene,
    CharacterIntroScene,
    VSScene,
    BattleScene,
    PostFightScene,
    GameOverScene
  ]
}

const game = new Phaser.Game(config) // eslint-disable-line
