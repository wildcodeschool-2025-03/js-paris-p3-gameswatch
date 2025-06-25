-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema projet_3_gamewatch
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema projet_3_gamewatch
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `projet_3_gamewatch` DEFAULT CHARACTER SET utf8 ;
USE `projet_3_gamewatch` ;

-- -----------------------------------------------------
-- Table `projet_3_gamewatch`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet_3_gamewatch`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(150) NOT NULL,
  `description` VARCHAR(45) NULL,
  `img` VARCHAR(45) NULL,
  `game_of_ heart` VARCHAR(100) NULL,
  `time` INT NULL,
  `best_friend` VARCHAR(60) NULL,
  `last_game` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projet_3_gamewatch`.`video_game`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet_3_gamewatch`.`video_game` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `date` DATETIME NOT NULL,
  `description` TEXT NOT NULL,
  `img` TEXT NOT NULL,
  `note` VARCHAR(45) NULL,
  `url` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- rajouter different isert into
NSERT INTO video_game (name, date, description, img, note, url)
VALUES 
("League of Legends", "2009-01-01", "Cool game, very fun", "https://www.pedagojeux.fr/wp-content/uploads/2019/11/1280x720_LoL.jpg", "5", "https://www.riotgames.com/fr"),
("Minecraft", "2011-11-18", "Sandbox game about creativity and survival", "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png", "5", "https://www.minecraft.net/"),
("The Legend of Zelda: Breath of the Wild", "2017-03-03", "Open-world adventure game", "https://upload.wikimedia.org/wikipedia/en/0/0b/The_Legend_of_Zelda_Breath_of_the_Wild.jpg", "5", "https://www.zelda.com/breath-of-the-wild/"),
("Elden Ring", "2022-02-25", "Dark fantasy open world action-RPG", "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg", "5", "https://en.bandainamcoent.eu/elden-ring/elden-ring"),
("God of War Ragnarok", "2022-11-09", "Norse mythology-based action game", "https://upload.wikimedia.org/wikipedia/en/e/ed/God_of_War_Ragnarok_cover.jpg", "5", "https://www.playstation.com/en-us/games/god-of-war-ragnarok/"),
("Hollow Knight", "2017-02-24", "Challenging action-platformer in a hand-drawn world", "https://upload.wikimedia.org/wikipedia/en/3/32/Hollow_Knight_cover.jpg", "5", "https://www.hollowknight.com/"),
("Stardew Valley", "2016-02-26", "Farming and life simulation RPG", "https://upload.wikimedia.org/wikipedia/en/f/fd/Stardew_Valley_cover_art.jpg", "5", "https://www.stardewvalley.net/"),
("The Witcher 3: Wild Hunt", "2015-05-18", "Story-driven open world RPG", "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg", "5", "https://thewitcher.com/en/witcher3"),
("Apex Legends", "2019-02-04", "Fast-paced free-to-play battle royale shooter", "https://upload.wikimedia.org/wikipedia/en/5/5b/Apex_legends_cover.jpg", "4", "https://www.ea.com/games/apex-legends"),
("Overwatch 2", "2022-10-04", "Team-based hero shooter", "https://upload.wikimedia.org/wikipedia/en/3/31/Overwatch_2_cover_art.jpg", "4", "https://overwatch.blizzard.com/"),
("Baldur's Gate 3", "2023-08-03", "Turn-based tactical RPG based on D&D", "https://upload.wikimedia.org/wikipedia/en/b/b5/Baldur%27s_Gate_3_cover_art.jpg", "5", "https://baldursgate3.game/");
-- -----------------------------------------------------
-- Table `projet_3_gamewatch`.`like`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet_3_gamewatch`.`like` (
  `user_id` INT NOT NULL,
  `video_game_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `video_game_id`),
  INDEX `fk_table1_has_table2_table21_idx` (`video_game_id` ASC) VISIBLE,
  INDEX `fk_table1_has_table2_table1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_table1_has_table2_table1`
    FOREIGN KEY (`user_id`)
    REFERENCES `projet_3_gamewatch`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_table1_has_table2_table21`
    FOREIGN KEY (`video_game_id`)
    REFERENCES `projet_3_gamewatch`.`video_game` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projet_3_gamewatch`.`library`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet_3_gamewatch`.`library` (
  `user_id` INT NOT NULL,
  `video_game_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `video_game_id`),
  INDEX `fk_user_has_video_game_video_game1_idx` (`video_game_id` ASC) VISIBLE,
  INDEX `fk_user_has_video_game_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_video_game_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `projet_3_gamewatch`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_video_game_video_game1`
    FOREIGN KEY (`video_game_id`)
    REFERENCES `projet_3_gamewatch`.`video_game` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projet_3_gamewatch`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet_3_gamewatch`.`comment` (
  `user_id` INT NOT NULL,
  `video_game_id` INT NOT NULL,
  `text` TEXT NULL,
  `date` DATETIME NULL,
  PRIMARY KEY (`user_id`, `video_game_id`),
  INDEX `fk_user_has_video_game1_video_game1_idx` (`video_game_id` ASC) VISIBLE,
  INDEX `fk_user_has_video_game1_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_video_game1_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `projet_3_gamewatch`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_video_game1_video_game1`
    FOREIGN KEY (`video_game_id`)
    REFERENCES `projet_3_gamewatch`.`video_game` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projet_3_gamewatch`.`style`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet_3_gamewatch`.`style` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projet_3_gamewatch`.`catégory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet_3_gamewatch`.`catégory` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projet_3_gamewatch`.`game_platform`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet_3_gamewatch`.`game_platform` (
  `catégory_id` INT NOT NULL,
  `video_game_id` INT NOT NULL,
  PRIMARY KEY (`catégory_id`, `video_game_id`),
  INDEX `fk_catégory_has_video_game_video_game1_idx` (`video_game_id` ASC) VISIBLE,
  INDEX `fk_catégory_has_video_game_catégory1_idx` (`catégory_id` ASC) VISIBLE)
ENGINE = MyISAM;


-- -----------------------------------------------------
-- Table `projet_3_gamewatch`.`game_style`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet_3_gamewatch`.`game_style` (
  `style_id` INT NOT NULL,
  `video_game_id` INT NOT NULL,
  PRIMARY KEY (`style_id`, `video_game_id`),
  INDEX `fk_style_has_video_game_video_game1_idx` (`video_game_id` ASC) VISIBLE,
  INDEX `fk_style_has_video_game_style1_idx` (`style_id` ASC) VISIBLE,
  CONSTRAINT `fk_style_has_video_game_style1`
    FOREIGN KEY (`style_id`)
    REFERENCES `projet_3_gamewatch`.`style` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_style_has_video_game_video_game1`
    FOREIGN KEY (`video_game_id`)
    REFERENCES `projet_3_gamewatch`.`video_game` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
