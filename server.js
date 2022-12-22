const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const path = require('path');
const app = express();

const teams = [
    {
        id: '1',
        name: 'Hyvinkään Tahko',
        image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/tahko.png',
        description:
            'Hyvinkään Tahko on vuonna 1915 perustettu hyvinkääläinen urheiluseura. Seura on ottanut nimensä pesäpallon kehittäjän, professori Lauri "Tahko" Pihkalan mukaan. Hyvinkään Tahko on pesäpallon erikoisseura ja miesten sekä naisten joukkueet pelaavat Superpesistä. Tahkon kotikenttänä toimii Pihkalan pesäpallostadion. Sen yleisöennätys syntyi 1992 ensimmäisessä SM-finaalissa Sotkamoa vastaan, jolloin ottelua oli katsomassa 7640 katsojaa.',
        achievements:
            'Seura on voittanut miesten pesäpallon suomenmestaruuden neljä kertaa vuosina 1979–1981, sekä 2007. Lisäksi Tahko on saavuttanut hopeaa viisi kertaa (1983, 1992, 1994, 1996 ja 1999) ja pronssia myös viisi kertaa (1978, 1982, 1989, 1990 ja 2002).',
        arena: 'Pihkala',
        arena_image:
            'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/pihkala.jpg',
        players: [
            {
                id: '1',
                image: 'https://www.hyvinkaantahko.fi/wp-content/uploads/2020/06/jere-harjuvaara.jpg',
                player_name: 'Jere Harjuvaara',
            },
            {
                id: '2',
                image: 'https://www.hyvinkaantahko.fi/wp-content/uploads/2020/06/aleksanteri-haukka.jpg',
                player_name: 'Aleksanteri Haukka',
            },
            {
                id: '3',
                image: 'https://www.hyvinkaantahko.fi/wp-content/uploads/2020/06/riku-hokkanen.jpg',
                player_name: 'Riku Hokkanen',
            },
            {
                id: '4',
                image: 'https://www.hyvinkaantahko.fi/wp-content/uploads/2020/06/kalle-tapio-huusko.jpg',
                player_name: 'Kalle-Tapio Huusko',
            },
            {
                id: '5',
                image: 'https://www.hyvinkaantahko.fi/wp-content/uploads/2020/06/kaapo-kalmari.jpg',
                player_name: 'Kaapo Kalmari',
            },
            {
                id: '6',
                image: 'https://www.hyvinkaantahko.fi/wp-content/uploads/2020/06/matias-kauppinen-1.jpg',
                player_name: 'Matias Kauppinen',
            },
            {
                id: '7',
                image: 'https://www.hyvinkaantahko.fi/wp-content/uploads/2020/06/juha-korhonen.jpg',
                player_name: 'Juha Korhonen',
            },
            {
                id: '8',
                image: 'https://www.hyvinkaantahko.fi/wp-content/uploads/2020/06/luukas-levanen.jpg',
                player_name: 'Luukas Levänen',
            },
            {
                id: '9',
                image: 'https://www.hyvinkaantahko.fi/wp-content/uploads/2020/06/kristian-malikine.jpg',
                player_name: 'Kristian Malikine',
            },
            {
                id: '10',
                image: 'https://www.hyvinkaantahko.fi/wp-content/uploads/2020/06/teemu-nikkanen.jpg',
                player_name: 'Teemu Nikkanen',
            },
            {
                id: '11',
                image: 'https://www.hyvinkaantahko.fi/wp-content/uploads/2020/06/santtu-patova.jpg',
                player_name: 'Santtu Patova',
            },
            {
                id: '12',
                image: 'https://www.hyvinkaantahko.fi/wp-content/uploads/2020/06/teemu-rouhiainen.jpg',
                player_name: 'Teemu Rouhiainen',
            },
            {
                id: '13',
                image: 'https://www.hyvinkaantahko.fi/wp-content/uploads/2020/06/joosua-ratto.jpg',
                player_name: 'Joosua Rättö',
            },
            {
                id: '14',
                image: 'https://www.hyvinkaantahko.fi/wp-content/uploads/2020/06/patrik-vartama.jpg',
                player_name: 'Patrik Vartama',
            },
            {
                id: '15',
                image: 'https://www.hyvinkaantahko.fi/wp-content/uploads/2020/06/lauri-vierimaa.jpg',
                player_name: 'Lauri Vierimaa',
            },
            {
                id: '16',
                image: 'https://www.hyvinkaantahko.fi/wp-content/uploads/2020/06/jere-vikstrom.jpg',
                player_name: 'Jere Vikström',
            },
        ],
    },
    {
        id: '2',
        name: 'Imatran Pallo-Veikot',
        image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/imatra.png',
        description:
            'Imatran Pallo-Veikot (IPV) on vuonna 1955 perustettu imatralainen pesäpalloseura, jonka miesten edustusjoukkue pelaa korkeimmalla sarjatasolla Superpesiksessä. IPV harjoittelee ja pelaa kotiottelunsa Ukonniemen stadionilla. Aiemmin kotikenttänä toimi ensin Taininkosken Maneesi ja tämän jälkeen Linnalan kenttä.',
        achievements:
            'Seura on voittanut miesten pesäpallon suomenmestaruuden neljä kertaa vuosina 1977, 1978, 1986 ja 1991. Lisäksi IPV on saavuttanut hopeaa kolme kertaa (1989, 1990 ja 1993) ja pronssia kerran (1973).',
        arena: 'Ukunniemi',
        arena_image:
            'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/ukonniemi.png',
        players: [
            {
                id: '1',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Konsta Hyötyläinen',
            },
            {
                id: '2',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Ville Hämäläinen',
            },
            {
                id: '3',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Harri Irjala',
            },
            {
                id: '4',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Tuomas Jussila',
            },
            {
                id: '5',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Mikko Kosonen',
            },
            {
                id: '6',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Ville-Markus Kosonen',
            },
            {
                id: '7',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Veeti Lankinen',
            },
            {
                id: '8',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Juuso Lattu',
            },
            {
                id: '9',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Teemu Nurmio',
            },
            {
                id: '10',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Sami Partanen',
            },
            {
                id: '11',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Miitri Pesonen',
            },
            {
                id: '12',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Jani Raami',
            },
            {
                id: '13',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Joona Sikiö',
            },
            {
                id: '14',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Rasmus Surakka',
            },
            {
                id: '15',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Juha Toivola',
            },
            {
                id: '16',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Arttu Vilander',
            },
        ],
    },

    {
        id: '3',
        name: 'Joensuun Maila',
        image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/joma.png',
        description:
            'Joensuun Maila (JoMa) on vuonna 1958 perustettu joensuulainen pesäpalloseura. Seuran miesten joukkue pelaa kaudella 2019 Suomen korkeimmalla sarjatasolla Superpesiksessä. Joukkueen kotikenttänä toimii Kerubi Stadion, joka sijaitsee Joensuun Mehtimäellä. Talvella harjoitus- ja pelikenttänä toimii Joensuu Areena.',
        achievements:
            'Joensuun Mailan miesten pesäpallojoukkue on saavuttanut kultaa vuosina 2018 ja 2019. Lisäksi Maila on saavuttanut pronssia viisi kertaa (2013, 2014, 2015, 2016 ja 2017).',
        arena: 'Kerubi Stadion',
        arena_image:
            'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/kerubi.jpg',
        players: [
            {
                id: '1',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Joensuun+Maila/hartikainen.png',
                player_name: 'Antti Hartikainen',
            },
            {
                id: '2',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Joensuun+Maila/hurskainen.png',
                player_name: 'Topi Hurskainen',
            },
            {
                id: '3',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Joensuun+Maila/vainikainen.png',
                player_name: 'Simo Vainikainen',
            },
            {
                id: '4',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Joensuun+Maila/kemppainen.png',
                player_name: 'Mikko Kemppainen',
            },
            {
                id: '5',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Joensuun+Maila/kettunen.png',
                player_name: 'Konsta Kettunen',
            },
            {
                id: '6',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Joensuun+Maila/kivinen.png',
                player_name: 'Lauri Kivinen',
            },
            {
                id: '7',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Joensuun+Maila/kuosa.png',
                player_name: 'Iiro Kuosa',
            },
            {
                id: '8',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Joensuun+Maila/piironen.png',
                player_name: 'Konsta Piironen',
            },
            {
                id: '9',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Joensuun+Maila/litmanen.png',
                player_name: 'Henri Litmanen',
            },
            {
                id: '10',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Joensuun+Maila/tirkkonen.png',
                player_name: 'Samuel Tirkkonen',
            },
            {
                id: '11',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Joensuun+Maila/rahunen.png',
                player_name: 'Simo Rahunen',
            },
            {
                id: '12',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Joensuun+Maila/puhtimaki.png',
                player_name: 'Juha Puhtimäki',
            },
            {
                id: '13',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Joensuun+Maila/rautiainen.png',
                player_name: 'Aleksi Rautiainen',
            },
            {
                id: '14',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Joensuun+Maila/grohn.png',
                player_name: 'Erkka Gröhn',
            },
            {
                id: '15',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Joensuun+Maila/niemelainen.png',
                player_name: 'Justus Niemeläinen',
            },
            {
                id: '16',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Joensuun+Maila/hanninen.png',
                player_name: 'Matias Hänninen',
            },
        ],
    },

    {
        id: '4',
        name: 'Kankaanpään Maila',
        image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/kama.png',
        description:
            'Kankaanpään Maila (KaMa) on kankaanpääläinen vuonna 1958 perustettu pesäpalloseura. Kotiottelunsa joukkue pelaa Pohjanlinnan pesäpallostadionilla. Sen katsojaennätys 3869 syntyi vuonna 1970 ottelussa Kankaanpää-Ulvila.',
        achievements:
            'KaMa voitti SM-hopeaa vuosina 1971 ja 1972 sekä SM-pronssia vuosina 1969 ja 1975. Viimeisin SM-mitali saavutettiin vuoden 1988 pronssimitalilla.',
        arena: 'Pohjanlinnan pesäpallostadion',
        arena_image:
            'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/pohjanlinna.jpg',
        players: [
            {
                id: '1',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Jouni Itävalo',
            },
            {
                id: '2',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Kari Kellokoski',
            },
            {
                id: '3',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Petteri Kortelainen',
            },
            {
                id: '4',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Manu Haukkala',
            },
            {
                id: '5',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Valtteri Hämäläinen',
            },
            {
                id: '6',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Niko J. Korhonen',
            },
            {
                id: '7',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Joona Lehtinen',
            },
            {
                id: '8',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Topias Lilja',
            },
            {
                id: '9',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Mikko Pauna',
            },
            {
                id: '10',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Toni Pomell',
            },
            {
                id: '11',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Luukas Poutanen',
            },
            {
                id: '12',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Miikka Riikonen',
            },
            {
                id: '13',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Arttu Ruuska',
            },
            {
                id: '14',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Teemu Utunen',
            },
            {
                id: '15',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Joona Anttila',
            },
            {
                id: '16',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Aleksi Pajuniemi',
            },
            {
                id: '17',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Joonas Peltomäki',
            },
            {
                id: '18',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Niko Ehto',
            },
            {
                id: '19',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Rasmus Paananen',
            },
            {
                id: '20',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Eeli Uusitalo',
            },
            {
                id: '21',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Joe Vartiamäki',
            },
        ],
    },

    {
        id: '5',
        name: 'Kempeleen Kiri',
        image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/kempele.png',
        description:
            'Kempeleen Kiri r.y.[1] on kempeleläinen urheilun yleisseura, jonka lajeja ovat pesäpallo, yleisurheilu, salibandy ja maastohiihto. Kotiottelunsa seura pelaa Sarkkirannan pesäpallostadionilla. Kentän erityispiirre on hiekkatekonurmi, joka on väriltään sininen. Kenttä myös tunnetaan nimellä "Laguuni".',
        achievements:
            'Vuonna 2015 Kempeleen Kirin miesten joukkue nousi Superpesikseen.',
        arena: 'Sarkkirannan pesäpallostadion',
        arena_image:
            'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/sarkkiranta.jpg',
        players: [
            {
                id: '1',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Aki Hanhela',
            },
            {
                id: '2',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Aleksi Hautala',
            },
            {
                id: '3',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Eero-Matti Karppinen',
            },
            {
                id: '4',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Heikki Savukoski',
            },
            {
                id: '5',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Jani Lassila',
            },
            {
                id: '6',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Jonne Luhtavaara',
            },
            {
                id: '7',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Joona Suni',
            },
            {
                id: '8',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Juhani Ojala',
            },
            {
                id: '9',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Jussi Korhonen',
            },
            {
                id: '10',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Marko Pelkonen',
            },
            {
                id: '11',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Markus Keski-Petäjä',
            },
            {
                id: '12',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Matti Korhonen',
            },
            {
                id: '13',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Onni Määttä',
            },
            {
                id: '14',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Ossi Meriläinen',
            },
            {
                id: '15',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Pekka Hepokangas',
            },
            {
                id: '16',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Tommi Koivisto',
            },
            {
                id: '17',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Valtteri Kleemola',
            },
        ],
    },

    {
        id: '6',
        name: 'Kiteen-Pallo -90',
        image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/kitee.png',
        description:
            'Kiteen Pallo -90 (KiPa-90) on vuonna 1990 perustettu kiteeläinen pesäpalloseura, joka pelaa Superpesiksessä. KiPan kotikenttä on Kiteen Rantakenttä, joka sijaitsee Kiteenjärven rannalla. Sen yleisöennätys on 5 320, 12. syyskuuta 2000 kolmannesta ja ratkaisevasta finaalista Sotkamon Jymyä vastaan.',
        achievements:
            'Joukkue on voittanut kolme SM-kultaa (1999, 2000, 2005). Lisäksi se on saavuttanut hopeaa kolme kertaa  (1997, 2001 ja 2004) ja pronssia kerran (1998).',
        arena: 'Rantakenttä',
        arena_image:
            'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/rantakentta.jpg',
        players: [
            {
                id: '1',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Jesse Eskelinen',
            },
            {
                id: '2',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Valtteri Havukainen',
            },
            {
                id: '3',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Valentin Ikonen',
            },
            {
                id: '4',
                image: '',
                player_name: 'Kasperi Kaksonen',
            },
            {
                id: '5',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Joni Lehikoinen',
            },
            {
                id: '6',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Ville Liukku',
            },
            {
                id: '7',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Sami Mikkolanaho',
            },
            {
                id: '8',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Juhani Myyryläinen',
            },
            {
                id: '9',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Hannes Pekkinen',
            },
            {
                id: '10',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Jiri Pippola',
            },
            {
                id: '11',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Elmeri Purmonen',
            },
            {
                id: '12',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Tommi Päivinen',
            },
            {
                id: '13',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Miika Timonen',
            },
            {
                id: '14',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Samu-Kalle Varonen',
            },
            {
                id: '15',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Lasse Vasarainen',
            },
        ],
    },

    {
        id: '7',
        name: 'Koskenkorvan Urheilijat',
        image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/koskenkorva.png',
        description:
            'Koskenkorvan Urheilijat (KoU, Koskenkorva, "Kossu"), viralliselta nimeltään Koskenkorvan Urheilijat r.y., on vuonna 1945 perustettu urheilun yleisseura Ilmajoen Koskenkorvan kylästä. Kotiottelunsa KoU pelaa Koskenkorvan Honkalanmäellä sijaitsevalla Sähkökoje-Areenalla, jonka yleisökapasiteetti istumapaikkojen puolesta on 2500 katsojaa. Seuran yleisöennätys on 3547 katsojaa, joka syntyi 26. elokuuta 2007 ottelussa Vimpelin Vetoa vastaan.',
        achievements:
            'Koskenkorvan Urheilijat on voittanut SM-pronssia 2003 ja 2007.',
        arena: 'Sähkökone Areena',
        arena_image:
            'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/sahkokoje.jpg',
        players: [
            {
                id: '1',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Koskenkorvan+Urheilijat/hakomaki.jpg',
                player_name: 'Juho Hakomäki',
            },
            {
                id: '2',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Koskenkorvan+Urheilijat/jakobsson.jpg',
                player_name: 'Anttoni Jakobsson',
            },
            {
                id: '3',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Koskenkorvan+Urheilijat/kauppinen.jpg',
                player_name: 'Otto Kauppinen',
            },
            {
                id: '4',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Koskenkorvan+Urheilijat/kuitunen.jpg',
                player_name: 'Eero Kuitunen',
            },
            {
                id: '5',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Koskenkorvan+Urheilijat/kettunen.jpg',
                player_name: 'Aku Kettunen',
            },
            {
                id: '6',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Koskenkorvan+Urheilijat/maki.jpg',
                player_name: 'Jouni Mäki',
            },
            {
                id: '7',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Koskenkorvan+Urheilijat/olli.jpg',
                player_name: 'Ville-Veikko Olli',
            },
            {
                id: '8',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Koskenkorvan+Urheilijat/puputti.jpg',
                player_name: 'Petrus Puputti',
            },
            {
                id: '9',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Koskenkorvan+Urheilijat/rantamaki.jpg',
                player_name: 'Jesse Rantamäki',
            },
            {
                id: '10',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Koskenkorvan+Urheilijat/suvisalmi.jpg',
                player_name: 'Aapeli Suvisalmi',
            },
            {
                id: '11',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Jaakko Erkkilä',
            },
            {
                id: '12',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Koskenkorvan+Urheilijat/anttila.jpg',
                player_name: 'Miika Anttila',
            },
            {
                id: '13',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Koskenkorvan+Urheilijat/wahlsten.jpg',
                player_name: 'Patrik Wahlsten',
            },
            {
                id: '14',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Koskenkorvan+Urheilijat/vuorenmaki.jpg',
                player_name: 'Juuso Vuorenmäki',
            },
            {
                id: '15',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Koskenkorvan+Urheilijat/ylihirvela.jpg',
                player_name: 'Veli-Pekka Yli-Hirvelä',
            },
        ],
    },

    {
        id: '8',
        name: 'Kouvolan Pallonlyöjät',
        image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/kouvola.png',
        description:
            'Kouvolan Pallonlyöjät ry. on pesäpallon erikoisseura Kouvolasta. Joukkueen nimestä käytetään lyhennystä KPL ja kutsumanimeä Kopla. Joukkueen kotikenttä on Kouvolan urheilupuistossa sijaitseva KSS Areena. Areenan yleisöennätys on 5648 katsojaa ja se syntyi miesten Superpesiksen kolmannessa finaaliottelussa Kouvola-Vimpeli 11.9.2010.',
        achievements:
            'Kouvolan Pallonlyöjien miesten pesäpallojoukkue on saavuttanut kultaa vuosina  1966, 1967, 1968, 1969 ja 1976. Lisäksi se on saavuttanut hopeaa seitsemän kertaa (1943, 1955, 1960, 1970, 2009, 2010 ja 2018) ja pronssia viisi kertaa ( 1954, 1959, 1972, 1977 ja 2019).',
        arena: 'KSS Areena',
        arena_image:
            'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/KSSAreena.jpg',
        players: [
            {
                id: '1',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Kouvolan+Pallonlyojat/dahlstrom.jpg',
                player_name: 'Jere Dahlström',
            },
            {
                id: '2',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Kouvolan+Pallonlyojat/hacklin.jpg',
                player_name: 'Juho Hacklin',
            },
            {
                id: '3',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Kouvolan+Pallonlyojat/kivipelto.jpg',
                player_name: 'Janne Kivipelto',
            },
            {
                id: '4',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Kouvolan+Pallonlyojat/kohonen.jpg',
                player_name: 'Toni Kohonen',
            },
            {
                id: '5',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Kouvolan+Pallonlyojat/koskelainen.jpg',
                player_name: 'Roope Koskelainen',
            },
            {
                id: '6',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Kouvolan+Pallonlyojat/laakso.jpg',
                player_name: 'Toni Laakso',
            },
            {
                id: '7',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Kouvolan+Pallonlyojat/lammila.jpg',
                player_name: 'Anssi Lammila',
            },
            {
                id: '8',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Kouvolan+Pallonlyojat/latvala.jpg',
                player_name: 'Matti Latvala',
            },
            {
                id: '9',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Kouvolan+Pallonlyojat/luoma.jpg',
                player_name: 'Valtteri Luoma',
            },
            {
                id: '10',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Kouvolan+Pallonlyojat/lopponen.jpg',
                player_name: 'Santeri Löppönen',
            },
            {
                id: '11',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Kouvolan+Pallonlyojat/maentausta.jpg',
                player_name: 'Tommi Mäentausta',
            },
            {
                id: '12',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Kouvolan+Pallonlyojat/nokkala.jpg',
                player_name: 'Iiro Nokkala',
            },
            {
                id: '13',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Kouvolan+Pallonlyojat/paananen.jpg',
                player_name: 'Jere Paananen',
            },
            {
                id: '14',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Kouvolan+Pallonlyojat/pesu.jpg',
                player_name: 'Ville Pesu',
            },
            {
                id: '15',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Kouvolan+Pallonlyojat/saukko.jpg',
                player_name: 'Matti Saukko',
            },
            {
                id: '16',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Kouvolan+Pallonlyojat/toikka.jpg',
                player_name: 'Sasu Toikka',
            },
            {
                id: '17',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Kouvolan+Pallonlyojat/vuorela.jpg',
                player_name: 'Lassi Vuorela',
            },
        ],
    },

    {
        id: '9',
        name: 'Manse PP',
        image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/manse.png',
        description:
            'Manse PP on vuonna 2005 perustettu tamperelainen pesäpalloseura. Manse PP pelaa kotiottelunsa Kaupin pesäpallostadionilla.',
        achievements: 'Manse PP nousi kaudeksi 2020 Superpesikseen.',
        arena: 'Kaupin urheilustadion',
        arena_image:
            'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/kauppi.jpg',
        players: [
            {
                id: '1',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Pyry Alanen',
            },
            {
                id: '2',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Petteri Alanen',
            },
            {
                id: '3',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Kimmo Carlson',
            },
            {
                id: '4',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Joonas Eirola',
            },
            {
                id: '5',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Mikko Haukkala',
            },
            {
                id: '6',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Ville Hotakainen',
            },
            {
                id: '7',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Taneli Lassila',
            },
            {
                id: '8',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Leevi Lehto',
            },
            {
                id: '9',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Konsta Lehtola',
            },
            {
                id: '10',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Jasperi Luoma',
            },
            {
                id: '11',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Sampo Lähdesmäki',
            },
            {
                id: '12',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Tommi Malinen',
            },
            {
                id: '13',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Juuso Myllyniemi',
            },
            {
                id: '14',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Juha Niemi',
            },
            {
                id: '15',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Juho Peltoniemi',
            },
            {
                id: '16',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Timo Torppa',
            },
            {
                id: '17',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Tuomas Tuohisaari',
            },
            {
                id: '18',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Jukka Tuomisto',
            },
        ],
    },

    {
        id: '10',
        name: 'Pattijoen Urheilijat',
        image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/pattijoki.png',
        description:
            'Pattijoen Urheilijat eli PattU on raahelainen pesäpalloseura. Seuran kotikenttä Miilu-areena (Rännäri) sijaitsee Pattijoella, joka liitettiin Raahen kaupunkiin vuonna 2003. Rännärin katsojaennätys on vuoden 2008 Itä-Länsi -ottelusta, jolloin katsojia oli paikalla yhteensä 4830. Pattijoen Urheilijoiden omassa kotipelissä katsojaennätys on niin ikään vuodelta 2008 neljännessä finaalissa, jolloin katsojia oli 3512.',
        achievements:
            'Pattijoen Urheilijoiden miesten joukkue on saavuttanut yhden Suomen mestaruuden (2008) ja kaksi hopeaa (2002 ja 2006) ja kolme pronssia (2001, 2011 ja 2012).',
        arena: 'Rännäri',
        arena_image:
            'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/rannari.jpg',
        players: [
            {
                id: '1',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Jere Achren',
            },
            {
                id: '2',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Sami Haapakoski',
            },
            {
                id: '3',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Jan Hankala',
            },
            {
                id: '4',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Teemu Juntunen',
            },
            {
                id: '5',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Topi Kaisto',
            },
            {
                id: '6',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Timo Kallio',
            },
            {
                id: '7',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Juuso Keski-Koukkari',
            },
            {
                id: '8',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Harri Kolehmainen',
            },
            {
                id: '9',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Topi Kosonen',
            },
            {
                id: '10',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Konsta Launonen',
            },
            {
                id: '11',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Miikka Matikka',
            },
            {
                id: '12',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Marko Nikula',
            },
            {
                id: '13',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Severi Piispanen',
            },
            {
                id: '14',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Tuukka Sarkkinen',
            },
            {
                id: '15',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Eetu Suni',
            },
            {
                id: '16',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Jari Törmänen',
            },
        ],
    },

    {
        id: '11',
        name: 'Seinäjoen Jymyjussit',
        image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/jymyjussit.png',
        description:
            'Seinäjoen JymyJussit on vuonna 2012 perustettu seinäjokelainen pesäpalloseura. Seuran perustivat Nurmon Jymy ja Seinäjoen Maila-Jussit. Seura peri Nurmon Jymyn sarjapaikan pesäpallon korkeimmalla sarjatasolla Miesten Superpesiksessä. JymyJussien superpesisjoukkue pelaa pääsääntöisesti kotiottelunsa Seinäjoen keskustassa sijaitsevalla Kotijoukkue Areenalla sekä osan otteluista Hyllykallion Skaala Areenalla.',
        achievements:
            'JymyJussien toistaiseksi paras saavutus on Halli-SM hopea vuodelta 2015.',
        arena: 'Kotijoukkue Areena',
        arena_image:
            'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/kotijoukkue.jpg',
        players: [
            {
                id: '1',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Seinajoen+Jymyjussit/viita.jpg',
                player_name: 'Ville Viita',
            },
            {
                id: '2',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Seinajoen+Jymyjussit/vainionpaa.jpg',
                player_name: 'Jukka-Pekka Vainionpää',
            },
            {
                id: '3',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Seinajoen+Jymyjussit/puputti.jpg',
                player_name: 'Henri Puputti',
            },
            {
                id: '4',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Seinajoen+Jymyjussit/marjamaki.jpg',
                player_name: 'Toni Marjamäki',
            },
            {
                id: '5',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Seinajoen+Jymyjussit/korvola.jpg',
                player_name: 'Sami Jukka-Korvola',
            },
            {
                id: '6',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Seinajoen+Jymyjussit/tyynela.jpg',
                player_name: 'Tero Tyynelä',
            },
            {
                id: '7',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Seinajoen+Jymyjussit/raunio.jpg',
                player_name: 'Tuomas Rainio',
            },
            {
                id: '8',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Seinajoen+Jymyjussit/lieto.jpg',
                player_name: 'Elmeri Lieto',
            },
            {
                id: '9',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Mikko Kytömäki',
            },
            {
                id: '10',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Seinajoen+Jymyjussit/kontio.jpg',
                player_name: 'Atte Kontio',
            },
            {
                id: '11',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Seinajoen+Jymyjussit/kettunen.jpg',
                player_name: 'Joona Kettunen',
            },
            {
                id: '12',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Seinajoen+Jymyjussit/jaakkola.jpg',
                player_name: 'Eemeli Jaakkola',
            },
            {
                id: '13',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Tomi Ritola',
            },
            {
                id: '14',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Seinajoen+Jymyjussit/makela.jpg',
                player_name: 'Oskari Mäkelä',
            },
            {
                id: '15',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Seinajoen+Jymyjussit/itavalo.jpg',
                player_name: 'Henri Itävalo',
            },
            {
                id: '16',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Seinajoen+Jymyjussit/teppo.jpg',
                player_name: 'Rasmus Teppo',
            },
        ],
    },

    {
        id: '12',
        name: 'Siilinjärven Pesis',
        image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/siilinjarvi.png',
        description:
            'Siilinjärven Pesis (SiiPe) on 1987 perustettu, tunnettu siilinjärveläinen pesäpalloseura. SiiPen kotikenttä on Manttu. Kenttä on kuuluisa heti kakkosrajan takaa alkavasta jyrkästä rinteestään, joka tunnetaan nimellä "Mantun monttu". Kentän yleisöennätys syntyi vuoden 1986 SM-finaalissa, jolloin Siilinjärven Ponnistuksen ja Imatran Pallo-Veikkojen välistä miesten ottelua oli seuraamassa 3820 katsojaa.',
        achievements:
            'SiiPe on vuosina 2012 ja 2013 ollut lisenssimäärissä mitattuna Suomen suurin pesäpalloseura.',
        arena: 'Manttu',
        arena_image:
            'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/manttu.jpg',
        players: [
            {
                id: '1',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Siilinjarven+Pesis/hakomaki.jpg',
                player_name: 'Mikko Hakomäki',
            },
            {
                id: '2',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Siilinjarven+Pesis/hoffren.jpg',
                player_name: 'Otto Hoffren',
            },
            {
                id: '3',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Siilinjarven+Pesis/huhtakangas.jpg',
                player_name: 'Teemu Huhtakangas',
            },
            {
                id: '4',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Siilinjarven+Pesis/hanninen.jpg',
                player_name: 'Matias Hänninen',
            },
            {
                id: '5',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Siilinjarven+Pesis/keinanen.jpg',
                player_name: 'Juho Keinänen',
            },
            {
                id: '6',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Siilinjarven+Pesis/kinnunen.jpg',
                player_name: 'Teemu Kinnunen',
            },
            {
                id: '7',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Siilinjarven+Pesis/lahti.jpg',
                player_name: 'Sebastian Lahti',
            },
            {
                id: '8',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Siilinjarven+Pesis/lantiainen.jpg',
                player_name: 'Ville Lantiainen',
            },
            {
                id: '9',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Siilinjarven+Pesis/litmanen.jpg',
                player_name: 'Matias Litmanen',
            },
            {
                id: '10',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Kalle Miettinen',
            },
            {
                id: '11',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Siilinjarven+Pesis/paldanius.jpg',
                player_name: 'Eemeli Paldanius',
            },
            {
                id: '12',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Siilinjarven+Pesis/pietinen.jpg',
                player_name: 'Ville Pietinen',
            },
            {
                id: '13',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Siilinjarven+Pesis/piirainen.jpg',
                player_name: 'Tommi Piirainen',
            },
            {
                id: '14',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Siilinjarven+Pesis/puustinen.jpg',
                player_name: 'Eino Puustinen',
            },
            {
                id: '15',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Siilinjarven+Pesis/roivainen.jpg',
                player_name: 'Aatu Roivainen',
            },
            {
                id: '16',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Siilinjarven+Pesis/rooperaisanen.jpg',
                player_name: 'Roope Räisänen',
            },
            {
                id: '17',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/placeholder.jpg',
                player_name: 'Santeri Räisänen',
            },
            {
                id: '18',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Siilinjarven+Pesis/toivanen.jpg',
                player_name: 'Toni Toivanen',
            },
            {
                id: '19',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Siilinjarven+Pesis/ronivainikainen.jpg',
                player_name: 'Roni Vainikainen',
            },
            {
                id: '20',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Siilinjarven+Pesis/samuvainikainen.jpg',
                player_name: 'Samu Vainikainen',
            },
        ],
    },

    {
        id: '13',
        name: 'Sotkamon Jymy',
        image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/sotkamo.png',
        description:
            'Sotkamon Jymy on vuonna 1909 perustettu sotkamolainen urheilun yleisseura. Jymy tunnetaan parhaiten pesäpallojaostostaan, joka on lajissaan Suomen kaikkien aikojen menestynein seura 18 Suomen mestaruudellaan. Sotkamon Jymy pelaa kotiottelunsa Sotkamon keskustassa, Sapsojärven rannalla sijaitsevalla Hiukan pesäpallostadionilla.',
        achievements:
            'Sotkamon Jymy on yksi Suomen kaikkien aikojen menestyksekkäimpiä pesäpalloseuroja. Sotkamon mitalitilillä on mestaruudet vuosilta 1963, 1990, 1992, 1993, 1995, 1996, 1997, 2001, 2002, 2003, 2004, 2006, 2009, 2011, 2012, 2013, 2014 ja 2015. Hopeamitaleja on kuusi kappaletta vuosilta 1991, 2000, 2007, 2008, 2016 ja 2017. Pronssisia mitaleja on kolme kappaletta: 1994, 2005 ja 2010. Sotkamon Jymyllä oli vuosien 2000 ja 2017 välillä ennätyksellinen 18 mitalin mitaliputki.',
        arena: 'Hiukka',
        arena_image:
            'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/hiukka.jpg',
        players: [
            {
                id: '1',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Sotkamon+Jymy/kiiskinen.jpg',
                player_name: 'Antti Kiiskinen',
            },
            {
                id: '2',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Sotkamon+Jymy/anttikorhonen.jpg',
                player_name: 'Antti Korhonen',
            },
            {
                id: '3',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Sotkamon+Jymy/nikokorhonen.jpg',
                player_name: 'Niko Korhonen',
            },
            {
                id: '4',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Sotkamon+Jymy/roopekorhonen.jpg',
                player_name: 'Roope Korhonen',
            },
            {
                id: '5',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Sotkamon+Jymy/topikorhonen.jpg',
                player_name: 'Topi Korhonen',
            },
            {
                id: '6',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Sotkamon+Jymy/konstakurikka.jpg',
                player_name: 'Konsta Kurikka',
            },
            {
                id: '7',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Sotkamon+Jymy/litmanen.jpg',
                player_name: 'Matias Litmanen',
            },
            {
                id: '8',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Sotkamon+Jymy/niemi.jpg',
                player_name: 'Riku Niemi',
            },
            {
                id: '9',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Sotkamon+Jymy/piiponniemi.jpg',
                player_name: 'Niilo Piiponniemi',
            },
            {
                id: '10',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Sotkamon+Jymy/rytkonen.jpg',
                player_name: 'Joni Rytkönen',
            },
            {
                id: '11',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Sotkamon+Jymy/ronkko.jpg',
                player_name: 'Lauri Rönkkö',
            },
            {
                id: '12',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Sotkamon+Jymy/valiaho.jpg',
                player_name: 'Ville Väliaho',
            },
        ],
    },

    {
        id: '14',
        name: 'Vimpelin Veto',
        image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/vimpeli.png',
        description:
            'Vimpelin Veto on 27. toukokuuta 1934 perustettu vimpeliläinen urheiluseura. Nykyisin seuran lajivalikoimana on pesäpallo, koripallo ja elektroninen urheilu. Vimpelin Vedon pesäpallojoukkueen kotikenttä on Saarikenttä. Vuonna 2010 Vimpelin Veto voitti finaaleissa Kouvolan Pallonlyöjät, ja toisessa loppuottelussa syntyi Saarikentällä pelattujen SM-sarjaotteluiden yleisöennätys 5 216 katsojaa.',
        achievements:
            'Vimpelin Vedon miesten pesäpallojoukkue on saavuttanut kultaa vuosina 1960, 1965, 2010, 2016 ja 2017. Hopealle se on sijoittunut vuosina 1959, 1961, 1962, 1966, 1975, 2011, 2012, 2013, 2014 ja 2015 sekä pronssille vuosina 1940, 1946, 1952, 1958, 1963, 1964, 1967, 1968, 2009 ja 2018.',
        arena: 'Saarikenttä',
        arena_image:
            'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/saarikentta.jpg',
        players: [
            {
                id: '1',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Vimpelin+Veto/anttila.png',
                player_name: 'Elmeri Anttila',
            },
            {
                id: '2',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Vimpelin+Veto/hanhisalo.png',
                player_name: 'Timo Hanhisalo',
            },
            {
                id: '3',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Vimpelin+Veto/juhoheikkala.png',
                player_name: 'Juho Heikkala',
            },
            {
                id: '4',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Vimpelin+Veto/olliheikkala.png',
                player_name: 'Olli Heikkala',
            },
            {
                id: '5',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Vimpelin+Veto/isoketo.png',
                player_name: 'Teemu Isoketo',
            },
            {
                id: '6',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Vimpelin+Veto/kanala.png',
                player_name: 'Mikko Kanala',
            },
            {
                id: '7',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Vimpelin+Veto/kortteenpera.png',
                player_name: 'Antti Kortteenperä',
            },
            {
                id: '8',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Vimpelin+Veto/aleksilassila.png',
                player_name: 'Aleksi Lassila',
            },
            {
                id: '9',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Vimpelin+Veto/severilassila.png',
                player_name: 'Severi Lassila',
            },
            {
                id: '10',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Vimpelin+Veto/makela.png',
                player_name: 'Janne Mäkelä',
            },
            {
                id: '11',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Vimpelin+Veto/olli.png',
                player_name: 'Perttu Olli',
            },
            {
                id: '12',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Vimpelin+Veto/rantala.png',
                player_name: 'Aleksi Rantala',
            },
            {
                id: '13',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Vimpelin+Veto/rintaaho.png',
                player_name: 'Matias Rinta-aho',
            },
            {
                id: '14',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Vimpelin+Veto/ruuska.png',
                player_name: 'Perttu Ruuska',
            },
            {
                id: '15',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Vimpelin+Veto/saukko.png',
                player_name: 'Jere Saukko',
            },
            {
                id: '16',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Vimpelin+Veto/sillanpaa.png',
                player_name: 'Viljo Sillanpää',
            },
            {
                id: '17',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Vimpelin+Veto/takala.png',
                player_name: 'Ville Takala',
            },
            {
                id: '18',
                image: 'https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/Vimpelin+Veto/vihriala.png',
                player_name: 'Mikko Vihriälä',
            },
        ],
    },
];

const resolvers = {
    Query: {
        teams: () => {
            return teams;
        },
        team: (root, { id }) => {
            return teams.find((team) => team.id === id);
        },
    },
};

const typeDefs = gql`
    type Team {
        id: ID!
        name: String
        image: ID
        description: String
        achievements: String
        arena: String
        arena_image: ID
        players: [Player]!
    }

    type Player {
        id: ID!
        image: ID
        player_name: String
    }

    type Query {
        teams: [Team]
        team(id: ID!): Team
    }
`;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        endpoint: '/graphql',
    },
    context: ({ req }) => {
        const user = req.headers.user
            ? JSON.parse(req.headers.user)
            : req.user
            ? req.user
            : null;
        return { user };
    },
});

server.applyMiddleware({ app });

app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
