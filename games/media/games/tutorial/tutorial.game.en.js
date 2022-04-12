// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "b8641640-99ff-11ec-8bc2-0800200c9a66"; // GEnerado por http://www.famkruithof.net/uuid/uuidgen

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

// En modo depuración, que no haya efectos de jquery
jQuery.fx.off=false

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
		"<h1>Praga</h1>\
        <p> Te acabas de despertar en un callejón de la encantadora ciudad de Praga, aún desconocido para ti. Allí, una luz extraña se muestra ante tu presencia.\
        Tú, aún sufriendo las consecuencias de la noche anterior, no puedes evitar sentirte atraído por ella y decides acercarte. \
        El misterio no para de acrecentarse cuando en latín pone en la puerta de donde nace la luz cegadora: \
        <br><i><center>Sed fugit interea, fugit irreparabile tempus.</center></i></br>\
        Una pena que te saltaras las clases de latín, corre y \
        <a href='./googlear'> googlealo. </a>\
        </p>", {
        
            actions: {
                googlear: function(character, system, action) { 
                   // window.open("https://translate.google.com/?hl=es&sl=la&tl=es&text=Sed%20fugit%20interea%2C%20fugit%20irreparabile%20tempus&op=translate", "_blank");
                    system.doLink("llaves");
                }
            }
        }

    ),



    llaves: new undum.SimpleSituation(
        "<h1>LLaves</h1>\
        <p> Gracias a la generosa traducción de Google, has llegado a la conclusión de que estás ante un portal espacio-temporal que te permitirá viajar\
        a través del tiempo y el espacio. Tristemente, no todo es tan fácil, para conseguirlo necesitarás encontrar la llave que lo abra.\
        Ve a buscar la llave a <a href='torrepolvora'> la Torre de la Pólvora</a> o <a href='museolego'> al museo Lego. </a> \
        </p>"
    ),
    
    torrepolvora: new undum.SimpleSituation(
        "<h1>Torre de la Pólvora</h1>\
        <p> Te encuentras en la Torre de la Pólvora, una de las más grandes de la ciudad. \
        En la entrada, unos transeúntes te piden que les saques una foto con la Torre; al hacerlo, te da tiempo a visualizar la belleza de la torre que ante ti se alzaba.\
        Igualmente, aquí no vas a encontra la llave. Prueba en <a href='museolego'> el museo lego.</a> </p>"
    ),

    museolego: new undum.SimpleSituation(
        "<h1>Museo Lego</h1>\
        <p> Te encuentras en el Museo Lego,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \
        </p>"
    )


};

undum.game.start = "start";


