let produtosJson = [
    {
        id: 1,
        name: 'Cadeira Reclinável Aço, Mor',
        img: '../img/outros/outros-produtos-1.png',
        price: [127.99],
        description: 'A Cadeira Reclinável Aço é fabricada pela Mor em materiais de excelente qualidade. Possui estrutura em tubos de aço carbono com pintura epóxi à pó branco e suas peças plásticas em polipropileno. Conta com braço largo e ergonômico com regulagem para oito posições diferentes.'
      },
      {
        id: 2,
        name: 'Cadeira Alta Alumínio, Mor',
        img: '../img/outros/outros-produtos-2.png',
        price: [98.60],
        description: 'Estrutura fabricada pela Mor em alumínio de excelente qualidade, peças plásticas em polipropileno e tela produzida em 100% poliéster. Suporta até 110 kg. Além de tudo é confortável, perfeita para te acompanhar.'
      },
      {
        id: 3,
        name: 'Cadeira Alumínio Max Preta',
        img: '../img/outros/outros-produtos-3.png',
        price: [136.99],
        description: 'A Cadeira Alumínio Max Preta tem seus principais diferenciais a largura e a altura, é indicada para pessoas com até 140kg, mais altas ou com sobrepeso. Fabricada em alumínio de alta resistência e que não enferruja, tecido BMDNET, soldado eletronicamente, sem costuras.'
      },
      {
        id: 4,
        name: 'Conjunto de Panelas, NUTOT',
        img: '../img/outros/outros-produtos-4.png',
        price: [194.99],
        description: 'Conjunto de Panelas Camping atende a todas as suas necessidades! Você não sentirá fome e será fácil aproveitar o tempo de cozimento em qualquer lugar!'
      },
      {
        id: 5,
        name: 'Copo de Titânio 450ml',
        img: '../img/outros/outros-produtos-5.png',
        price: [105.00],
        description: 'Este copo é feito de material de titânio, super leve e forte. É ótimo para camping, caminhadas, mochila e uso doméstico.'
      },
      {
        id: 6,
        name: 'Chaleira Kettle Camping',
        img: '../img/outros/outros-produtos-6.png',
        price: [95.00],
        description: 'Adequado para atividades indoor e ao ar livre, especialmente para caminhadas, camping. A Chaleira Kettle Camping é compacta e utilitária, da forma clássica.'
      },
      {
        id: 7,
        name: 'Caixa Térmica 45,4L, Coleman',
        img: '../img/outros/outros-produtos-7.png',
        price: [280.00],
        description: ' A caixa térmica Coleman foi construída com matéria prima ecologicamente correta Thermozone Insulation ideal para refrigerar bebidas e alimentos.'
      },
      {
        id: 8,
        name: 'Bolsa Térmica 48L, Insmeer',
        img: '../img/outros/outros-produtos-8.png',
        price: [224.99],
        description: 'Cooler durável e dobrável com forro de alta densidade: atualizado a partir da construção de costura tradicional, o exterior do cooler é construído de tecido oxford, o que o torna durável e reutilizável.'
      },
      {
        id: 9,
        name: 'Bolsa Térmica Tropical 20L',
        img: '../img/outros/outros-produtos-9.png',
        price: [160.00],
        description: 'Conserva lanches, frutas e bebidas por mais tempo. Possui alça tiracolo regulável, porta objetos lateral e frontal, revestimento interno com multicamadas e interior soldado que evita vazamentos.'
      },
      {
        id: 10,
        name: 'Fogareiro Camping - Portátil, Titanium',
        img: '../img/outros/outros-produtos-10.png',
        price: [189.99],
        description: 'Fogão portátil com 1 boca a gás butano, conta com acendimento automático para facilitar na utilização do item. Indicado para camping, pesca, piquenique e viagens.'
      },
      {
        id: 11,
        name: 'Fogareiro Jetcook',
        img: '../img/outros/outros-produtos-11.png',
        price: [320.00],
        description: 'O condutor de calor na base da panela (jarra) Azteq otimiza o aquecimento e dessa forma o tempo de cozimento é drasticamente reduzido. Desenhado para ser mais seguro para praticantes de camping e viagens.'
      },
      {
        id: 12,
        name: 'Refil Fogareiro - 4 Latas, Refil',
        img: '../img/outros/outros-produtos-12.png',
        price: [46.99],
        description: 'Maçarico multiprofissional de acendimento automático. Ideal para soldagem de juntas de tubos, retirada de pinturas antigas, cozinhar, flambar, caramelizar, escurecer, entre outros.'
      },
      {
        id: 13,
        name: 'Lâmpada/Ventilador para Camping, Moniss',
        img: '../img/outros/outros-produtos-13.png',
        price: [202.48],
        description: 'Lanterna LED multifuncional com design de ventilador, possui rotação de 270 graus, diferentes ajustes de velocidade e 3 ajustes de brilho. Perfeito para uso interno e externo.'
      },
      {
        id: 14,
        name: 'Lanterna Tática Militar X900',
        img: '../img/outros/outros-produtos-14.png',
        price: [46.00],
        description: 'A Lanterna Tática Militar X900 é perfeita para usar em situações táticas ou em atividades ao ar livre. A lanterna tem ótima qualidade, é versátil e capaz de impressionar com a sua potência de longo alcance.'
      },
      {
        id: 15,
        name: 'Conjunto - Faca e Facão',
        img: '../img/outros/outros-produtos-15.png',
        price: [89.90],
        description: 'Em conjunto vem com laminas amoladas em Aço Carbono, ideais para camping, pesca e caça. Acompanha bainha para cinto'
      },
      {
        id: 16,
        name: 'Mesa-Maleta Dobrável, Branca',
        img: '../img/outros/outros-produtos-16.png',
        price: [132.90],
        description: 'Mesa-Maleta Dobrável com altura de  85 cm, aguenta 130 kilos e pode ser transportada facilmente em forma de maleta. Estrutura em aço, por isso pode ficar no sol e na chuva.'
      },
      {
        id: 17,
        name: 'Travesseiro Inflável, Stansport',
        img: '../img/outros/outros-produtos-17.png',
        price: [70.00],
        description: 'Se você é como a maioria de nós, um travesseiro confortável é uma necessidade para uma boa noite de sono. O travesseiro de viagem auto-inflável da Stansport ajudará você a recarregar suas baterias confortavelmente à noite!'
      },
      {
        id: 18,
        name: 'Saco De Dormir Solteiro Viper',
        img: '../img/outros/outros-produtos-18.png',
        price: [160.00],
        description: 'Nas noites no camping, nada como uma noite aquecida com praticidade, isso pede imediatamente um saco de dormir, que vai oferecer o conforto e a temperatura ideal para uma ótima noite de sono.'
      },
      {
        id: 19,
        name: 'Chaveiro com Bússola, Nautika',
        img: '../img/outros/outros-produtos-19.png',
        price: [37.90],
        description: 'O Chaveiro com Bússola da Nautika é ideal para campistas e aventureiros que buscam um item prático e que não deixa a desejar na funcionalidade.'
      },
      {
        id: 20,
        name: 'Cama Dobrável, Coleman',
        img: '../img/outros/outros-produtos-20.png',
        price: [200.00],
        description: 'A Cama Dobrável da Coleman, para 1 pessoa, é super compacta e a construção durável da estrutura de aço suporta até 136 kg e acomoda pessoas de até 1,90 m de altura.'
      },
      {
        id: 21,
        name: 'Churrasqueira Amazonas, Mor',
        img: '../img/outros/outros-produtos-21.png',
        price: [230.00],
        description: 'Pretende organizar um churrasco gostoso para a galera? Então você precisa adquirir a Churrasqueira Amazonas da Mor. Ela se destaca por ser muito leve, totalmente desmontável, além de prática para transportar, guardar e limpar.'
      }
];