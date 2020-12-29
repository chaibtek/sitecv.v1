<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <title>Site CV Chaib Tektek - Développeur Web</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/index.css" />
    <link rel="stylesheet" href="css/mobile.css">
    <meta name="description" content="Développeur web">
    <meta name="description" content="Site CV Développeur web">
</head>

<body>
    <header>
        <div class="fond1">
            <div id="entete" class="conteneur flex">
                <div class="logo">
                    <a href="index.html"><img src="img/logochaibtektek.png" alt=""></a>
                </div>
                <nav>
                    <ul id="menu" class="flex">
                        <li>
                            <a href="index.html#Propos">à Propos</a>
                        </li>
                        <li>
                            <a href="index.html#comp">Compétences</a>
                        </li>
                        <li>
                            <a href="index.html#real">Réalisations</a>
                        </li>
                        <li>
                            <a href="index.html#exp">Expériences</a>
                        </li>
                        <li>
                            <a href="index.html#dipl">Diplômes</a>
                        </li>
                        <li>
                            <a href="index.html#cont">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <div class="fondcontact">
            <div id="cont" class="conteneur">
                <?php
                if (isset($_POST["valid_form"])) {
                    echo "<h1>Merci " . $_POST["prenom"] . "</h1>";
                    $to = 'chaibtektek@hotmail.fr';
                    $subject = $_POST['subject'];
                    $message = $_POST['message'];
                    $headers = "From: contact@chaibtektek.fr" . "\r\n" .
                        'Reply-To:' . $_POST['email'];
                    mail($to, $subject, $message, $headers);
                    echo "<p>Votre message a bien été envoyé </p>";
                } else {
                    echo "<h1>Houston, on a un problème</h1>";
                }
                ?>
            </div>
        </div>
    </main>

    <div class="fondpied">
        <div id="pied" class="flex conteneur">
            <div class="reseaux">
                Retrouvez-Moi sur :
                <a href="https://www.linkedin.com/in/chaib-tektek-292000183/"><img src="img/linkedin.png" alt="linkedin"></a>
            </div>
            <div class="copy">Copyright 2020 © Designed by chaibtektek.fr
            </div>
        </div>
    </div>
    <script src="js/formulaire.js"></script>
</body>

</html>