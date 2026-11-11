const conteudoRede = {

/*****                    Aqui começar os fundamentos de rede              ***********/

    "conceitosbasicos": {
        titulo: "Conceitos Básicos",
        conteudo: `

        <p>
                Uma rede de computadores é um conjunto de dispositivos, (computadores,
            servidores, smartphones, impressoras) interconectados para trocar dados,
            compartilhar recursos e se comunicar.
        </p>

        <h4> Classificação por Abrangência (Tipos de Rede) </h4>

        <p>
            As redes são categorizadas de acordo com sua extensão geográfica:
        </p>
        <ul>
            <li>
                LAN (Local Area Network): Rede local que cobre uma área restrita,
                como uma residência, escritório ou escola. Oferece alta velocidade
                e baixa latência.
            </li>
            <li>
                WLAN (Wireless LAN): Uma LAN que utiliza tecnologia sem fio(Wi-Fi)
                para conectar os dispositivos.
            </li>
            <li>
                MAN (Metropolitan Area Network): Rede que abrange uma cidade inteira
                ou um grande campus, conectando várias LANs.
            </li>
            <li>
                WAN (Wide Area Network): Rede de longa distância que conecta redes
                menores através de grandes distâncias geográficas (países ou 
                continentes). A internet é o maior exemplo de WAN.
            </li>
        </ul>

        <h4> Dispositivos de Rede essenciais </h4>

        <p> 
            Para que os dados circulem, diferentes equipamentos desempenham
            papéis específicos:
        </p>

        <ul>
            <li>
                Roteador(Router): Conecta redes diferentes(como uma rede domestica 
                à internet) e determina a melhor rota(caminho) para os pacotes de 
                dados viajarem.
            </li>
            <li>
                Switch: Conecta dispositivos dentro da mesma LAN, encaminhando
                o tráfego diretamente para o destinatário correto com base
                no endereço físico.
            </li>
            <li>
                Modem: Modula e desmodula o sinal analógico da operadora(fibra, 
                cabo ou linha telefônica) em sinal digital compreensível pelos
                seus dispositivos.
            </li>
            <li>
                Access Point(Ponto de Acesso): Dispositivo que expande a
                cobertura de uma rede sem fio, permitindo que mais aparelhos
                se conectem ao Wi-Fi.
            </li>
        </ul>

        <h4> Endereçamento: IP e MAC </h4>

        <p>
                Para que a comunicação ocorra, cada dispositivo precisa de identi-
            ficação única.
        </p>

        <ul>
            <li>
                Endereço MAC(Media Access Control): É o endereço físico gravado
                na placa de ree do hardware(Ex: 00:1A:2B:3C:4D:5E). Ele é único
                no mundo usado para comunicação na rede local.
            </li>
            <li>
                Endereço IP(Internet Protocol): É o endereço lógico atribuido
                a um dispositivo quando ele se conecta a uma rede. Pode ser
                IPv4(Ex: 192.168.1.1) ou IPv6(Ex: 2001:db8::ff00:42:8329).
                Ele muda conforme a rede em que você esta e serve para
                rotear dados entre redes distintas.
            </li>
        </ul>

        <h4> O Modelo OSI e a Arquitetura em Camadas </h4>

        <p>
                A comunicação em rede é dividida em camadas para padronizar
            e facilitar o desenvolvimento de protocolos e hardware.
            O modelo OSI possui 7 camadas, enquanto o modelo prático
            da Internet (TCP/IP) agrupa essas funções em 4 camadas:
        </p>

        <ol>
            <li>
                Aplicação: Onde as aplicações interagem com o usuário(ex:
                navegadores usando HTTP/HTTPS, clientes de e-mail usando
                SMTP/IMAP).
            </li>
            <li>
                Transporte: Garante a entrega confiável dos dados(ex: 
                protocolos TCP para conexões orientadas à sessão e
                UDP para transmissões rápidas e sem confirmação).
            </li>
            <li>
                Rede(ou Internet): Responsável pelo roteamento dos pacotes
                entre redes diferentes usando endereços IP.
            </li>
            <li>
                Enlace de Dados/Física: Cuida da transmissão física dos
                bits pelos meios de transmissão(cabos de rede, fibra óptica 
                ou ondas de rádio) e do acesso ao meio físico.
            </li>
        </ol>

        `
    },

    /******************************************************************************************************** */


    "lanwanmanpan": {
        titulo: "LAN, WAN, MAN E PAN",
        conteudo: `

        <p>
            Esses termos representam a classificação das redes de 
            computadores por abrangência geográfica, organizados
            da menor para a maior cobertura:
        </p>

        <h4> PAN(Personal Area Network / Rede de Área Pessoal) </h4>

        <ul>
            <li>
                Alcance: Muito curto (geralmente até 10 metros).
            </li>
            <li>
                Objetivo: Conectar dispositivos pessoais de um único
                usiário localizados no mesmo espaço físico imediato.
            </li>
            <li>
                Exemplo de tecnologias: Bluetooth, Zigbee, NFC, USB.
            </li>
            <li>
                Casos de uso: Conecar fones de ouvido sem fio ao 
                smartphone, sincronizar um smartwatch, conectar
                mouse e teclado bluetooth a um notebook.
            </li>
        </ul>

        <h4> LAN (Local Area Network / Rede de Área Local) </h4>

        <ul>
            <li>
                Alcance: Curto a médio(de alguns metros até poucos
                quilômentros).
            </li>
            <li>
                Objetivo: Interconectar computadores e periféricos dentro
                de um ambiente limitado e geograficamente restrito com alta
                taxa de transferência e baixa latência.
            </li>
            <li>
                Exemplos de tecnologias: Ethernet(cabos RJ45), Wi-Fi(neste 
                caso, chamada de WLAN).
            </li>
            <li>
                Casos de uso: A rede de uma casa, escritório, sala de aula
                ou de um laboratório.
            </li>
        </ul>

        <h4> MAN (Metropolitan Area Network / Rede de Área Metropolitana) </h4>

        <ul>
            <li>
                Alcance: Médio a grande (cobrindo a extensão de uma cidade 
                ou região metropolitana de 10 km a 50 km).
            </li>
            <li>
                Objetivo: Interconectar diversas LANs distribuidas pou uma
                cidade, permitindo comunicação de altíssima velocidade entre
                sedes de empresas ou orgãos públicos.
            </li>
            <li>
                Exemplos de tecnologias: Anéis de fibra óptica, WiMAX,
                redes Metro Ethernet.
            </li>
            <li>
                Casos de uso: A rede que conecta várias agências de um
                banco dentro de uma mesma cidade, a rede da prefeitura
                conectando escolas e postos de saúde, ou a infraestrutura
                de uma TV a cabo local.
            </li>
        </ul>

        <h4> WAN (Wide Area Network / Rede de Longa Distância) </h4>

        <ul>
            <li>
                Alcance: Global ou regionalmente ilimitado (interconecta 
                países, continentes ou o mundo inteiro)
            </li>
            <li>
                Objetivo: Interligar redes menores (LANs, MANs) situadas
                em grandes distâncias geográficas.
            </li>
            <li>
                Exemplo de tecnologias: Cabos submarinos de fibra
                óptica, comunicação via satélite, links dedicados de 
                telecomunicões (MPLS, SD-WAN).
            </li>
            <li>
                Casos de uso: A própria Internet(que é a maior WAN existente),
                redes privadas de multinacionais conectando filiais em 
                diferentes países.
            </li>
        </ul>

        <table>
            <tr>
                <td> Resumo Comparativo</td>
            </tr>
            <tr>
                <td> PAN </td>
                <td> Personal Area Network </td>
                <td> 10 metros </td>
                <td> Bluetooth (fone + celular) </td>
            </tr>
            <tr>
                <td> LAN </td>
                <td> Local Area Network </td>
                <td> Um cômodo/prédio </td>
                <td> Wi-Fi / cabo </td>
            </tr>
            <tr>
                <td> MAN </td>
                <td> Metropolitan Area Network </td>
                <td> Uma cidade </td>
                <td> Fibra óptica interligando bairros </td>
            </tr>
            <tr>
                <td> WAN </td>
                <td> Wide Area Network </td>
                <td> Países/Mundo </td>
                <td> A Internet </td>
            </tr>
        </table>

        `
    },

    /************************************************************************************************************ */

    "topologiasderede": {
        titulo: "Topologias de Rede",
        conteudo: `

        <p>
            A topologia de rede é a estrutura geométrica ou física/lógica como
            os dispositivos (nós) e os cabos são interconectados em uma rede
            de computadores. Ela define o caminho pelo qual os dados
            trafegam e como a rede se comporta diante de falhas.
        </p>

        <p>
            As topologias dividem-se principalmente entre física(como os
            cabos e equipamentos estão dispostos) e lógicas(como os dados
            fluem de fato pela rede). As principais topologias
            estruturais são:
        </p>

        <h4> 1. Topologia em Estrela(Star) </h4>

        <p> É a topologia mais utilizada atualmente em redes LAN
        residencias e cor´porativas. </p>

        <ul>
            <li>
                Como funciona: Todos os dispositivos(computadores,
                impressoras, etc.) conectam-se individualmente a um
                nó central, que geralmente é um Switch ou Roteador.
            </li>
            <li>
                Vantagens: 
                <ul>
                    <li>
                        Seu um cabo ou dispositivo falhar, apenas
                        ele é desconectado; o resto da rede continua funcionando
                        normalmente.
                    </li>
                    <li>
                        Fácil de expandir(basta plugar um novo cabo no Switch).
                    </li>
                    <li>
                        Alto desempenho, pois o tráfego é direcionado direta-
                        mente ao destino.
                    </li>
                </ul>
            </li>
            <li>
                Desvantagens:
                <ul>
                    <li>
                        Se o dispositivo(Switch/roteador) falhar, toda a
                        rede cai.
                    </li>
                    <li>
                        Usa mais cabos do que algumas outras topologias
                        (como o barramento).
                    </li>
                </ul>
            </li>
        </ul>

        <h4> 2. Topologia em Barramento(Bus) </h4>

        <p> Muito comum nos primórdios das redes locais, hoje
            praticamente obsoleta. </p>

        <ul>
            <li>
                Como funciona: Todos os dispositivos compartilham
                um único canal de transmissão central(um cabo 
                chamado backbone ou barramento). Nas pontas do 
                cabo existem terminadores para evitar o eco do sinal.
            </li>
            <li>
                Vantagens:
                <ul>
                    <li>
                        Usa poucos cabos e é muito barata e simples
                        de instalar para redes pequenas.
                    </li>
                </ul>
            </li>
            <li>
                Desvantagens:
                <ul>
                    <li>
                        Se o cabo principal(Backbone) sofrer um corte
                        ou falha em qualquer ponto, toda a rede para.
                    </li>
                    <li>
                        Difícil de isolar falhas e a performance
                        degrada rapidamente à medida que mais
                        computadores são adicionados(ocorre muita
                        colisão de dados).
                    </li>
                </ul>
            </li>
        </ul>

        <h4> 3. Topologia em Anel(Ring) </h4>

        <ul>
            <li>
                Como funciona: Os dispositivos são conectados em um circuito
                fechado(um anel). Os dados viajam de um computador para o 
                próximo em uma única direção(ou bidirecional em versões
                mais robustas) até atingirem o destinatário. Cada estação
                funciona como um repetidor.
            </li>
            <li>
                Vantagens:
                <ul>
                    <li>
                        O fluxo de dados é ordenado, evitando colisões
                        intensas(muitas vezes utilizando um tokem, 
                        como nas redes token Ring).
                    </li>
                </ul>
            </li>
            <li>
                Desvantagens:
                
                <ul>
                    <li>
                        Se um único computador ou cabo do anel quebrar
                        a rede inteira é interrompida(em anéis simples).
                    </li>
                    <li>
                        a adição ou remoção de nós exige a interrupção
                        temporária da rede.
                    </li>
                </ul>
            </li>
        </ul>

        <h4> 4. Topologia em Malha(Mesh) </h4>

        <p> Usada em ambientes críticos de alta disponibilidade( como
        datacenters, redes de operadoras e espinha dorsal da internet). </p>

        <ul>
            <li>
                Como funciona: Cada dispositivo possui conexões dedicadas 
                ponto a ponto com todos ou vários outros dispositivos da rede.
            </li>
            <li>
                Tipos:

                <ul>
                    <li>
                        Totalmente Ligada: Todo mundo se conecta com todo mundo.
                    </li>
                    <li>
                        Parcialmente Ligada: alguns nós possuem múltiplas
                        rotas, enquanto outros se conectam apenas
                        aos essenciais.
                    </li>
                </ul>
            </li>
            <li>
                Vantagens:
                <ul>
                    <li>
                        Tolerância a falhas extremas: Se um cabo ou 
                        caminho romper, os dados encontram automa-
                        ticamente uma rota alternativa.
                    </li>
                    <li>
                        Alta segurança e privacidade(dados tráfegam
                        em canais dedicados).
                    </li>
                </ul>
            </li>
            <li>
                Desvantagens:
                <ul>
                    <li>
                        Custo de implementação altíssimo(exige muitos
                        cabos, portas de rede e placas).
                    </li>
                    <li>
                        Complexa de configuração e manutenção.
                    </li>
                </ul>
            </li>
        </ul>

        <h4> 5. Topologia em Árvore(Tree) </h4>

        <ul>
            <li>
                Como funciona: É uma combinação da topologia em 
                estrela com a de barramento, estruturada de forma
                hierárquica(como galhos de uma árvore). Há um
                nó raiz que se ramifica em outros switches ou
                hubs secundários.
            </li>

            <li>
                Vantagens:
                <ul>
                    <li>
                        Excelente para expansões em grandes
                        empresas ou campus universitários.
                    </li>
                    <li>
                        Fácil de isolar problemas por seções/ramos.
                    </li>
                </ul>
            </li>
            <li>
                Desvantagens:
                <ul>
                    <li>
                        Se o nó principal(raiz) falhar, todos
                        os ramos dependentes perdem a conexão.
                    </li>
                    <li>
                        Requer muita infraestrutura de cabeamento.
                    </li>
                </ul>
            </li>
        </ul>

        <h4> 6. Topologia Híbrida(Hybrid) </h4>

        <p> 
            Na prática, o mundo real raramente usa uma topologia
            pura. As redes modernas são híbridas, combunando duas
            ou mais topologias diferentes para atender às neces-
            sidades de custo e desempenho(por exemplo, uma rede
            corporativa que usa topologia em estrela nas salas,
            mais interliga os prédios em um anel ou malha).
        </p>

        `
    },

    /******************************************************************************************* */


    "larguradebandaelatencia": {
        titulo: "Largura de banda e Latência",
        conteudo: `

        <p>
            Dois conceitos fundamentais para medir a velocidade,
            a qualidade e o desempenho de qualquer conexão de rede
            sãop a largura de banda e a latência.
        </p>

        <p>
            Embora muitas pessoas usem a palavra "velocidade" como
            um termo genérico para descrever as duas coisas, elas
            medem aspectos completamente diferentes da transmissão
            de dados.
        </p>

        <h4> 1. Largura de Banda(Bandwidth) </h4>

        <p>
            A largura de banda(muitas vezes tratada comercialmente
            como taxa de transferência ou throughput) mede a
            quantidde de dados que podem se transmitidos em um
            determinado intervalo de tempo.
        </p>

        <ul>
            <li>
                A metáfora da rodovia: Pense na largura de banda
                como um número de faixas de uma rodovia. Quanto
                mais faixas a estrada tiver, mais carros(dados)
                conseguem passar lado a lado ao mesmo tempo.
            </li>
            <li>
                Unidade de medida: É medida em bps(bits por segundo),
                comumente em Megabits por segundo(Mbps) ou Gigabits
                por segundo(Gbps).
            </li>
            <li>
                Na prática: Se você tem uma internet de 300 Mbps,
                significa que sua conexão tem "espaço" suficiente
                para baixar até 300 milhões de bits de dados por
                segundo.
            </li>
            <li>
                Para que serve: Uma largura de banda alta é
                essecial para baixar arquivos grandes,
                assistir a vídeos em 4k, fazer downloads pesados
                ou permitir que várias pessoas usem a mesma
                rede sem travamento.
            </li>
        </ul>

        <h4> 2. Latência (Latency) </h4>

        <p>
            A latência mede o tempo que um pacote de dados leva para
            ir de um ponto de origem até o destino e retornar(medida 
            conhecida como Round Trip Time ou RTT).
        </p>

        <ul>
            <li>
                A metáfora da rodovia: Pense na latência como o limite de
                velocidade ou tempo que um carro leva para percorrer
                a estrada de ponta a ponta. Não adianta a rodovia ter
                10 faixa(largura de banda alta) se os carros preci-
                sarem adar a 10 km/h.
            </li>
            <li>
                Unidade de medida: É medida em milissegundos(ms).
                Quanto menor o valor em ms, mais rápida e respon-
                siva é a conexão.
            </li>
            <li>
                Na prática: Quando você clica em um link ou atira em um
                jogo online, o tempo que passa entre o clique e a ação
                acontecer na tela é a sua latência(frenquentemente 
                chamada de ping). Se o ping for de 20 ms, a resposta é
                quase instantânea; se for de 200 ms, haverá um atraso
                perceptível(travadinhas ou lag).
            </li>
            <li>
                Para que serve:> A baixa latência é crítica para
                aplicações em tempo real, como jogos online
                competitivos, chamadas de vídeo(Zoom/Teams),
                VoIP e transações financeiras.
            </li>
        </ul>

        <h4> O Impacto Combinado </h4>

        <p>
            Para uma excelente experiência de rede, você precisa de ambos
            em equilíbrio. Uma conexão de alta largura de banda com
            latência altíssim(como a internet via satélite tradicional 
            de órbita geoestacionária) permite baixar arquivos grandes,
            mas torna impossível jogar online ou conversar por vídeo
            sem atrasos incômodos. Já a conexão de baixíssima latência,
            mas com pouca largura de banda, sofrerá congestionamentos
            se muitas pessoas tentarem usá-la ao mesmo tempo.
        </p>

        `
    },

    /******************************************************************************************* */


    "meiosdetransmissao": {
        titulo: "Meios de Tansmissões",
        conteudo: `

        <p>
            Os meios de transmissão são os canais físicos ou atmos-
            féricos por onde os dados (sinal elétrico, óptico ou 
            eletromagnético) viajam de um ponto a outro na rede.
            Eles compõem a Camada Física do modelo OSI.
        </p>

        <p>
            Eles são divididos em duas grandes categorias: 
            guiados(cabeados) e não guiados(sem fio).
        </p>

        <h4> 1. Meios Guiados(Cabeados) </h4>

        <p>
            Neste modelo, os sinais são confinados a um meio
            físico concreto, o que garante maior segurança,
            estabilidade e imunidade a interferências externas.
        </p>

        <ul>
            <li>
                Cabo de Par Trançado(Twisted Pair):
                <ul>
                    <li>
                        Como é: Formado por pares de fios de cobre
                        entrelaçados(para reduzir interferências 
                        eletromagnéticas). Os conectores mais 
                        comuns são os RJ45.
                    </li>
                    <li>
                        Tipos principais: UTP(sem blindagem, o mais 
                        comum em residências/escritórios) e STP
                        (blindado, usado em ambientes industriais 
                        com muita interferência).
                    </li>
                    <li>
                        Uso: Redes LAN, conexões de computadores a
                        roteadores e switchers(categoras comuns: 
                        Cat5e, Cat´6, Cat6a).
                    </li>
                </ul>

            </li>
            <li>
                Cabo Coaxial:
                <ul>
                    <li>
                        Como é: Possui um núcleo de cobre central 
                        cercado por uma blindagem isolante e uma
                        maloha metálica externa.
                    </li>
                    <li>
                        Uso: Antigamente muito usado em redes
                        de computadores(topologia em barramento)
                        e hoje amplamente utilizado por operadoras
                        de TV a cabo e internet banda larga
                        tradicional(HFC).
                    </li>
                </ul>
            </li>
            <li>
                Fibra Óptica:
                <ul>
                    <li>
                        Como é: Transmite os dados através de 
                        filamentos finíssimo de vidro ou plástico
                        que conduzem pulsos de luz.
                    </li>
                    <li>
                        Vantagens: Altíssima velocidade, capacidade
                        massiva de tráfego de dados e imunidade
                        total a interferências eletromagnéticas,
                        além de permitir grandes distâncias sem
                        perda de sinal.
                    </li>
                    <li>
                        Uso: Redes de longa distância(WANs), espinha
                        dorsal da internet(cabos submarinos) e 
                        conexões residenciais de alta velocidade
                        (FTTH - Fiber to the Home).
                    </li>
                </ul>
            </li>
        </ul>

        <h4> 2. Meios Não Guiados(Sem Fio/Wireless) </h4>

        <p>
            Neste modelo, os dados viajam pelo ar através de ondas
            eletromagnéticas(espectro de radiofrequência, micro-
            ondas ou luz infravermelha), sem a necessidade de cabos
            físicos.
        </p>

        <ul>
            <li>
                Rádio Frequência(Wi-Fi e Redes Celulares):
                <ul>
                    <li>
                        Usa ondas de rádio para conectar dis-
                        positivos em redes locais(como rotea-
                        dores sem fio) ou redes móveis(4G, 5G).
                    </li>
                </ul>
            </li>
            <li>
                Micro-ondas (Terrestres e Espaciais):
                <ul>
                    <li>
                        Terrestres: Torres de transmissão que enviam
                        sinais de linha de visada direta entre 
                        pontos distantes(muito usado por operadoras 
                        de telecomunicações).
                    </li>
                    <li>
                        Satélites: Comunicação espacial onde os dados
                        viajam da terra para um satélite em órbita 
                        e rabatem para outro ponto do globo(ex: internt 
                        via satélite como Starlink).
                    </li>
                </ul>
            </li>
            <li>
                Infravermelho:
                <ul>
                    <li>
                        Usa luz de alta frequência invisível ao olho
                        humano. Tem alcance curto e exige linha de visão
                        direta(usado trandicionalmente em controles 
                        remotos).
                    </li>
                </ul>
            </li>
        </ul>
        `
    },


    //Aqui começa os modelos de referência

    "modeloosi": {
        titulo: "Modelo OSI",
        conteudo: `

        <p>
            Modelo OSI(Open Systems Interconnection ou Interconexão 
            de Sistemas Abertos) é um modelo conceitul criado pela
            ISO(Organização Internacional para Padronização) em
            1984.
        </p>

        <p>
            O objetivo principal do modelo OSI é padronizar a
            comunicação entre diferentes sistemas de computadores,
            dividindo o processo complexo de transmissão de dados
            em 7 camadas distintas e modulares.
        </p>

        <p>
            Essa divisão em camadas traz grandes vantagens: se um
            protocolo de uma camada especifica precisar ser alterado,
            ele não afeta as outras camadas, facilitando o desen-
            volvimento de hardwares, softwares e a solução de pro-
            blemas(troubleshooting).
        </p>

        <h4> As 7 camadas do Modelo OSI(da Aplicação à Física) </h4>

        <p>
            Abaixo, descrevemos as camadas seguindo o fluxo de envio
            de dados(do usuário até o cabo) ou de cima para baixo:
        </p>

        <h4> 7. Camada de Aplicação(Application) </h4>

        <ul>
            <li>
                O que faz: É a camada mais próxima do usuário final.
                Ela fornece as interfaces e os protocolos de rede
                que os aplicativos utilizam para interagir com a rede.
            </li>
            <li>
                Exemplos de Protocolos: HTTP/HTTPS(navegadores web), 
                SMTP/IMAP(e-mails), FTP(transferência de arquivos),
                DNS(resolução de nomes).
            </li>
            <li>
                Em resumo: Onde o usuário interage com o software
                de rede.
            </li>
        </ul>

        <h4> 6. Camada de Apresentação(Presentation) </h4>

        <ul>
            <li>
                O que faz: Atua como o tradutor da rede. Ela garante
                que os dados enviados por uma aplicação de um sisteme
                possam ser compreendidos pela aplicação de outro
                sistema. Também cuida da formatação, criptografia
                (como SSL/TLS) e compreessão de dados.
            </li>
            <li>
                Em resumo: Formata, criptografa e traduz os dados.
            </li>
        </ul>

        <h4> 5. Camada de Sessão(Session) </h4>

        <ul>
            <li>
                O que faz: Estabelece, gerencia e encerra as conexões
                (sessões) entre os aplicativos que estão se comunicando
                em computadores diferentes. Ela controla o diálogo(quem
                fala, quando e por quanto tempo).
            </li>
            <li>
                Em resumo: Gerencia a sessão de comunicação entre os
                softwares.
            </li>
        </ul>

        <h4> 4. Camada de Transporte(Transport) </h4>

        <ul>
            <li>
                O que faz: Garante a entrega confiável e ordenada dos
                dados de ponta a ponta entre a origem e o destino.
                Ela divide os dados em blocos menores(segmentos),
                verifica erros e controla o fluxo de dados.
            </li>
            <li>
                Exemplos de Protocolos:
                <ul>
                    <li>
                        TCP(Transmission Control Protocol): Confiável,
                        orientada à conexão, garante que nenhum 
                        pacote se perca(usado em paginas web, e-mails,
                        aquivos).
                    </li>
                    <li>
                        UDP(User Datagram Protocol): Rápido, não 
                        orientado à conexão, sem garantia de entrega 
                        (usado em streaming de video, chamadas de voz 
                        e jogos online).
                    </li>
                </ul>
            </li>
            <li>
                Em resumo: Cuida da entrega dos dados("porta a porta")
            </li>
        </ul>

        <h4> 3. Camada de Rede(Network) </h4>

        <ul>
            <li>
                O que faz: Responsável pelo roteamento dos pacotes
                de dados, determinando o melhor caminho para que
                eles viajem da rede de origem até a rede de 
                destino através de múltiplos saltos.
            </li>
            <li>
                Endereçamento principal: Utiliza Endereços IP.
            </li>
            <li>
                Exemplos de Protocolos/Dispositivos: IP(IPv4 e 
                IPv6), ICMP, Roteadores.
            </li>
            <li>
                Em resumo: Roteia os pacotes entre redes diferentes.
            </li>
        </ul>

        <h4> 2. Camada de Enlace de Dados(Data Link) </h4>

        <ul>
            <li>
                O que faz: Cuida da transmissão confiável de dados
                entre dois nós diretamente conectados na mesma
                rede local(LAN). Ela empacota os dados em quadros
                (frames) e controla o acesso ao meio físico, além
                de detectar erros locais.
            </li>
            <li>
                Endereçamento principal: Utiliza Endereços MAC(
                físicos).
            </li>
            <li>
                Exemplos de Dispositivos: Switches e placas de rede.
            </li>
            <li>
                Em resumo: Conecta dispositivos na mesma rede
                física usando endereços MAC.
            </li>
        </ul>


        <h4> 1. Camada Física(Phiysical) </h4>

        <ul>
            <li>
                O que faz: É a camada base. Cuida da transmissão
                real dos bits(0s e 1s) através do meio físico
                de transmissão(cabos de cobre, fibras ópticas ou
                ondas de rádio). Ela define voltagens, pinagem de
                conectores, frequências e propriedades elétricas/
                ópticas.
            </li>
            <li>
                Exemplos de Elementos: Cabos RJ45, fibra óptica,
                hubs, conectores.
            </li>
            <li>
                Em resumo: Transforma bits em sinais físicos
                reais no cabo ou no ar.
            </li>
        </ul>

        <h4> Modelo OSI x Modelo TCP/IP </h4>

        <p>
            Vale notar que, na prática moderna da internet, 
            utilizamos mais o Modelo TCP/IP(que consolida essas
            7 camadas do OSI em apneas 4 camadas mais práticas:
            Aplicação, Transporte, Internet, e Acesso à Rede).
            No entanto, o modelo OSI continua sendo a referên-
            cia teórica fundamental para explicar e estudar
            como funcionam as redes de computadores.
        </p>

        `
    },

 /******************************************************************************************* */
    
    "modelotcpip": {
        titulo: "Modelo TCP/IP",
        conteudo: `

        <p>
            O Modelo TCP/IP(também conhecido como Conjunto de
            Protocolos da Internet) é a arquitetura prática
            que sustenta toda a internet e a grande maioria
            das redes de computadores modernas.
        </p>

        <p>
            Enquanto o Modelo OSI, é um modelo conceitual e 
            teórico de 7 camadas, o TCP/IP foi desenvolvido
            pelo Departamento de Defesa dos EUA(DARPA) na
            década de 1970 para ser um modelo funcional,
            direto e otimizado para a comunicação real.
        </p>

        <table id="osi-tcp">
            <tr class="titulo-osi-tcp">
                <td> Modelo OSI </td>
                <td> X </td>
                <td> Modelo TCP/IP </td>
            </tr>
            <tr>
                <td> Aplicação </td>
                <td rowspan="3"> <====> </td>
                <td rowspan="3"> Aplicação </td>
            </tr>
            <tr>
                <td> Apresentação </td>
            </tr>
            <tr>
                <td> Sessão </td>
            </tr>
            <tr>
                <td> Transporte </td>
                <td> <====> </td>
                <td> Transporte </td>
            </tr>
            <tr>
                <td> Rede </td>
                <td> <====> </td>
                <td> Internet </td>
            </tr>
            <tr>
                <td> Enlace </td>
                <td rowspan="2"> <====> </td>
                <td rowspan="2"> Acesso a rede </td>
            </tr>
            <tr>
                <td> Física </td>
            </tr>
        </table>

        <h4> As 4 Camadas do Modelo TCP/IP </h4>

        <p>
            O modelo TCP/IP agrupa as funções da rede apenas
            4 camadas(embora algumas versões da leteratura
            técnica dividam a camada de acesso à rede em duas,
            formando 5):
        </p>

        <h4> 4 Camada de Aplicação </h4>

        <ul>
            <li>
                O que faz: Equivalente às camadas de Aplicação,
                Apresentação e Sessão do Modelo OSI juntas.
                É onde os aplicativos geram e consomem os dados.
            </li>
            <li>
                Exemplos de Protocolos: HTTP/HTTPS(Web), FTP(arquivos),
                SMTP/POP3/IMAP(e-mails), DNS(nomes de domínio), SSH e
                Telnet(acesso remoto).
            </li>
        </ul>

        <h4> 3. Camada de Transporte </h4>

        <ul>
            <li>
                O que faz: Gerencia a comunicação lógica de ponta a
                ponta entre os hosts, garantindo a integridde dos
                dados e controlando o fluxo.
            </li>
            <li>
                Principais Protocolos:
                <ul>
                    <li>
                        TCP(Trasmition Control Protocol): Orientado 
                        à conexão, confiável, verifica erros, retrans-
                        mite pacotes perdidos e entrega os dados na
                        ordem certa.
                    </li>
                    <li>
                        UDP(User Datagram Protocol): Não orientado à
                        conexão, focado em velocidade, sem garatia
                        de entrega(ideal para streamng, jogos e ViIP).
                    </li>
                </ul>
            </li>
        </ul>

        <h4> 2. Camada de Internet(ou Rede) </h4>

        <ul>
            <li>
                O que faz: Responsável pelo endereçamento lógico e pelo
                roteamento dos pacotes através de diferentes redes
                (inter-rede). É o coração da conectividade da internt.
            </li>
            <li>
                Principais Protocolos: IP(IPv4 e IPv6), ICMP(usado
                pelo comoando ping para diagnósticos), ARP(associa
                IP ao endereço MAC) e protocolos de roteamento(como
                OSPF e BGP).
            </li>
        </ul>

        <h4> 1. Camada de Acesso a Rede(ou Enlace/Física) </h4>

        <ul>
            <li>
                O que faz: Combina as camadas de Enlace e Física
                do Modelo OSI. Cuida de como os dados são colocados
                fisicamente no meio de transmissão(cabo de rede
                fibra, Wi-Fi) e da comunicação direta entre dis-
                positivos na mesma rede local usando endereços MAC.
            </li>
            <li>
                Exemplos de Tecnologias: Ethernet, Wi-Fi(802.11). PPP.
            </li>
        </ul>

        <h4> Por que TCP/IP venceu na prática? </h4>

        <p>
            Enquanto o modelo OSI seviu como uma excelente base
            de padronização, o TCP/IP se tornou o padrão global
            absoluto da internet por ser pragmático, flexível e
            eficiente. Ele não se prende a regras rígidas de
            separação de software e hardware, permitindo que
            a infraestrutura da internet crescesse de forma
            descentralizada e robusta ao longo das décadas.
        </p>

        `
    },


}