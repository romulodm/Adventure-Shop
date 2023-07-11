let produtosJson = [
    {
        id: 1,
        name: 'Barraca Amazônia, Coleman',
        img: '../img/barracas/barraca-1.png',
        price: [832.80],
        description: 'Para as pessoas que gostam de se conectar com a natureza, seja fazendo trilha ou acampando, esta super novidade da Coleman é ideal para você! Com capacidade de acomodar 6 pessoas, este equipamento não pode ficar de fora da sua aventura. Em 8 minutos sua barraca está montada e pronta para ser utilizada.'
      },
      {
        id: 2,
        name: 'Barraca IGLU, Mor',
        img: '../img/barracas/barraca-2.png',
        price: [246.00],
        description: 'Barraca fácil de montar com peso e volume reduzido devido a sua estrutura em varetas de fibra de vidro interligadas. São confeccionadas em poliéster, a costura entre o piso e o dormitório é invertida, evitando vazamentos de água para o interior da barraca e o piso é confeccionado em polietileno (ráfia) reforçado.'
      },
      {
        id: 3,
        name: 'Barraca Dome, Nautika',
        img: '../img/barracas/barraca-3.png',
        price: [372.53],
        description: 'A Barraca Dome para 3 Pessoas da marca Nautika é direcionada para o público de Camping, especificamente para os que acampam em climas mais secos ou com menor umidade no ar. Para isso, ela provém de muita resistência, durabilidade e altíssima respirabilidade.'
      },
      {
        id: 4,
        name: 'Barraca Flash NTK, Nautika',
        img: '../img/barracas/barraca-4.png',
        price: [1785.50],
        description: 'Essa é uma barraca de fácil montagem, peso leve a alta resistência. Possui coluna d’agua de 3000 mm, montagem rápida de até 1 minuto e pesa somente 10 kg. Comporta até 6 pessoas, possui três janelas amplas e mosquiteiro com tela No-see-um, por esses atributos essa barraca permite grande circulação de ar.'
      },
      {
        id: 5,
        name: 'Barraca Grande Transform, Nautika',
        img: '../img/barracas/barraca-5.png',
        price: [1100.00],
        description: 'A Barraca Grande Transform, da marca Nautika, comporta 5/6 pessoas para Tendas Gazebos. Ela possui dois pontos de fixação nas hastes laterais do gazebo, fixação nas laterais por meio de ganchos seguros, e um perfeito ajuste com janelas laterais.'
      },
      {
        id: 6,
        name: 'Barraca Octagon Full, Coleman',
        img: '../img/barracas/barraca-6.png',
        price: [790.00],
        description: 'A barraca Coleman Octagon facilita o acampamento para que você possa aproveitar cada momento de sua aventura ao ar livre. Em cerca de 15 minutos, você pode montar ou retirar a barraca. Varetas de aço criam uma estrutura resistente. Além disso, abriga até 8 pessoas.'
      },
      {
        id: 7,
        name: 'Barraca Guepardo Family Titan',
        img: '../img/barracas/barraca-7.png',
        price: [574.99],
        description: 'Barraca espaçosa com dois ambientes internos com divisória dupla, zíperes duplos, dois porta-objetos e portas e janelas duplas para maior privacidade e conforto dos usuários. O modelo para 12 pessoas é ideal para acampar com a família e amigos.'
      },
      {
        id: 8,
        name: 'Barraca Weathermaster Elite, Coleman',
        img: '../img/barracas/barraca-8.png',
        price: [1420.50],
        description: 'A barraca Coleman Elite WeatherMaster (6 pessoas) possui sistema de iluminação LED incorporado, que oferece uma boa iluminaçã para ler um livro. Ele também tem um modo de luz noturna para ajudar as crianças a se sentirem seguras enquanto dormem.'
      },
      {
        id: 9,
        name: 'Barraca Skydome, Coleman',
        img: '../img/barracas/barraca-9.png',
        price: [480.00],
        description: 'Ideal para momentos de lazer e camping, a Barraca Skydome para 4 Pessoas é simplesmente SENSACIONAL! Um produto completo e de qualidade Coleman, marca de grande destaque e reconhecimento mundial no ramo de esporte e lazer.'
      },
      {
        id: 10,
        name: 'Barraca Luz - Comfort, Coleman',
        img: '../img/barracas/barraca-10.png',
        price: [1220.00],
        description: 'Com a barraca Luz Comfort - 6 pessoas, vai ficar mais fácil de dormir em dias ensolarados ou colocar as crianças para dormirem mais cedo. A tecnologia Dark Room desta barraca bloqueia 98,4% da luz solar e também reduz até 11,4% o calor.'
      },
      {
        id: 11,
        name: 'Barraca Instant Mountain, Coleman',
        img: '../img/barracas/barraca-11.png',
        price: [800.00],
        description: 'A Barra Instantânea Coleman Signal Mountain 4-Pessoas já possui varetas semi automática que tornam a instalação mais simples e rápida, em apenas 60 segundos. Se chover, o sistema WeatherTec , com seus pisos de solda patenteados e costuras invertidas, o ajudará a manter a sua barraca sempre seca.'
      },
      {
        id: 12,
        name: 'Barraca Indy NTK',
        img: '../img/barracas/barraca-12.png',
        price: [620.00],
        description: 'Indy NTK é um dos modelos de barracas para até quatro pessoas com sobreteto completo. Possui duas portas com avancê abrigado completo para melhorar a ventilação e respiração durante a noite, e possui fechamento total para aumentar o espaço.'
      },
      {
        id: 13,
        name: 'Barraca Falcon, Nautika',
        img: '../img/barracas/barraca-13.png',
        price: [235.80],
        description: 'Barraca iglu com sobreteto completo! A barraca Falcon 2 é leve, possui um avanço frontal possibilitando guardar os materiais fora da barraca. Seu sobreteto é de poliéster laminado com poliuretano, possui coluna d’agua de 1000 mm, com costura selada termo-soldada e proteção UV.'
      },
      {
        id: 14,
        name: 'Barraca Guepardo Vênus Ultra, Guepardo',
        img: '../img/barracas/barraca-14.png',
        price: [300.00],
        description: 'Destaca-se por ser auto portante e por ter uma estrutura reforçada, além de saídas de ar para garantir a ventilação adequada à barraca. Possui costuras seladas e pontos de stress reforçado, varetas de fibra de vidro fabricadas com material 100% virgem com sistema NANO-FIBER, garantindo maior segurança no camping.'
      },
      {
        id: 15,
        name: 'Barraca Echolife Weekend, Echolife',
        img: '../img/barracas/barraca-15.png',
        price: [316.70],
        description: 'A barraca Weekend da Echolife é do tipo iglu, ideal para camping e atividades outdoor! Suas medidas permitem agradável espaço acomodando confortavelmente até 4 pessoas.'
      },
      {
        id: 16,
        name: ' Barraca de mochila, Fantaxi',
        img: '../img/barracas/barraca-16.png',
        price: [220.00], 
        description: 'ibra de poliéster durável, malha interna de fio respirável da abertura para ventilação Fundo de pano oxford 210D para impermeável, você pode acampar perto de riachos. Fácil de configurar com postes de suporte de alumínio resistentes.'
      },
      {
        id: 17,
        name: 'Barraca Sundome, Coleman',
        img: '../img/barracas/barraca-17.png',
        price: [665.10], 
        description: 'Ideal para momentos de lazer e camping, a Barraca Sundome para 3 Pessoas é simplesmente INCRÍVEL! Um produto completo e de qualidade Coleman, marca de grande destaque e reconhecimento mundial no ramo de esporte e lazer.'
      },
      {
        id: 18,
        name: 'Barraca Mochila Scout, Stansport',
        img: '../img/barracas/barraca-18.png',
        price: [236.80], 
        description: 'Barraca clássica de acampamento da tropa de escoteiro, projetada para mochileiros e pessoas que curtem acampar.'
      }
];