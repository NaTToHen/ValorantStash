CREATE TABLE bundle(
	idbundle INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	valor VARCHAR(100) NOT NULL,
	nivelURL VARCHAR(255) NOT NULL,
	dataLancamento VARCHAR(100) NOT NULL,
	nivel VARCHAR(100) NOT NULL,
	fotoURL VARCHAR(255) NOT NULL
);

CREATE TABLE arma(
	idArma INT auto_increment PRIMARY KEY,
	fk_idBundle INT NOT NULL,
	nome VARCHAR(100) NOT NULL,
	nivel VARCHAR(100) NOT NULL,
	nivelURL VARCHAR(255) NOT NULL,
	valor VARCHAR(100) NOT NULL,
	categoriaArma VARCHAR(100) NOT NULL,
	fotoURL VARCHAR(255) NOT NULL
);

-- inserções Glitchpop ---------------------------------------------------------

INSERT INTO bundle(nome, valor, nivelURL, dataLancamento, nivel, fotoURL) VALUES
("Glitchpop Collection", "8,700",
"https://valostashimg.s3.sa-east-1.amazonaws.com/assets/Exclusive.png",
"EP 1", "Exclusive",
"https://valostashimg.s3.sa-east-1.amazonaws.com/banners/bundleGlitchpop2.webp");

INSERT INTO arma(fk_idBundle, nome, valor, categoriaArma, nivel, nivelURL, fotoURL) VALUES
(1, "Adaga Glitchpop", "4,350", "faca" , "Exclusive",
"https://valostashimg.s3.sa-east-1.amazonaws.com/assets/Exclusive.png",
"https://valostashimg.s3.sa-east-1.amazonaws.com/armas/glitchpop/GlitchpopDagger.webp");

INSERT INTO arma(fk_idBundle, nome, valor, categoriaArma, nivel, nivelURL, fotoURL) VALUES
(1, "Odin Glitchpop", "2,175", "rifle", "Exclusive",
"https://valostashimg.s3.sa-east-1.amazonaws.com/assets/Exclusive.png",
"https://valostashimg.s3.sa-east-1.amazonaws.com/armas/glitchpop/GlitchpopOdin.webp");

INSERT INTO arma(fk_idBundle, nome, valor, categoriaArma, nivel, nivelURL, fotoURL) VALUES
(1, "Frenzy Glitchpop", "2,175", "pistola", "Exclusive",
"https://valostashimg.s3.sa-east-1.amazonaws.com/assets/Exclusive.png",
"https://valostashimg.s3.sa-east-1.amazonaws.com/armas/glitchpop/glitchpopFrenzy.webp");

INSERT INTO arma(fk_idBundle, nome, valor, categoriaArma, nivel, nivelURL, fotoURL) VALUES
(1, "Bulldog Glitchpop", "2,175", "rifle", "Exclusive",
"https://valostashimg.s3.sa-east-1.amazonaws.com/assets/Exclusive.png",
"https://valostashimg.s3.sa-east-1.amazonaws.com/armas/glitchpop/GlitchpopBulldog.webp");

INSERT INTO arma(fk_idBundle, nome, valor, categoriaArma, nivel, nivelURL, fotoURL) VALUES
(1, "Judge Glitchpop", "2,175", "escopeta", "Exclusive",
"https://valostashimg.s3.sa-east-1.amazonaws.com/assets/Exclusive.png",
"https://valostashimg.s3.sa-east-1.amazonaws.com/armas/glitchpop/GlitchpopJudge.webp");

-- inserções Abyssal ---------------------------------------------------------

INSERT INTO bundle(nome, valor, nivelURL, dataLancamento, nivel, fotoURL) VALUES
("Abyssal Collection", "5,100",
"https://valostashimg.s3.sa-east-1.amazonaws.com/assets/Deluxe.png",
"EP 5", "Deluxe",
"https://valostashimg.s3.sa-east-1.amazonaws.com/banners/bundleAbyssal.webp");

INSERT INTO arma(fk_idBundle, nome, valor, categoriaArma, nivel, nivelURL, fotoURL) VALUES
(1, "Caeruleus(Abyssal) Axe", "2,550", "faca" , "Deluxe",
"https://valostashimg.s3.sa-east-1.amazonaws.com/assets/Deluxe.png",
"https://valostashimg.s3.sa-east-1.amazonaws.com/armas/Abyssal/Caeruleus.webp");

INSERT INTO arma(fk_idBundle, nome, valor, categoriaArma, nivel, nivelURL, fotoURL) VALUES
(1, "Sheriff Abyssal", "1,275", "pistola", "Deluxe",
"https://valostashimg.s3.sa-east-1.amazonaws.com/assets/Deluxe.png",
"https://valostashimg.s3.sa-east-1.amazonaws.com/armas/Abyssal/AbyssalSheriff.webp");

INSERT INTO arma(fk_idBundle, nome, valor, categoriaArma, nivel, nivelURL, fotoURL) VALUES
(1, "Spectre Abyssal", "1,275", "sub-metraladora", "Deluxe",
"https://valostashimg.s3.sa-east-1.amazonaws.com/assets/Deluxe.png",
"https://valostashimg.s3.sa-east-1.amazonaws.com/armas/Abyssal/AbyssalSpectre.webp");

INSERT INTO arma(fk_idBundle, nome, valor, categoriaArma, nivel, nivelURL, fotoURL) VALUES
(1, "Guardian Abyssal", "1,275", "rifle", "Deluxe",
"https://valostashimg.s3.sa-east-1.amazonaws.com/assets/Deluxe.png",
"https://valostashimg.s3.sa-east-1.amazonaws.com/armas/Abyssal/AbyssalGuardian.webp");

INSERT INTO arma(fk_idBundle, nome, valor, categoriaArma, nivel, nivelURL, fotoURL) VALUES
(1, "Phantom Abyssal", "1,275", "rifle", "Deluxe",
"https://valostashimg.s3.sa-east-1.amazonaws.com/assets/Deluxe.png",
"https://valostashimg.s3.sa-east-1.amazonaws.com/armas/Abyssal/AbyssalPhantom.webp");