const conteudoRede = {

/*****                    Aqui começar os fundamentos de rede              ***********/

    "cons-basicos": {
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

        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>

        `
    },

    /******************************************************************************************************** */


    "lan-wan": {
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

        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>

        `
    },

    /************************************************************************************************************ */

    "topo-rede": {
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

        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>

        `
    },

    /******************************************************************************************* */


    "larg-banda": {
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

        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>

        `
    },

    /******************************************************************************************* */


    "meio-trans": {
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

        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>

        `
    },


    //Aqui começa os modelos de referência

    "model-osi": {
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

        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>

        `
    },

 /******************************************************************************************* */
    
    "model-tcp": {
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

        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>

        `
    },

    /************* Aqui começa os Protocolos  ****************/

    
    "http": {
        titulo: "Protocolor HTTP",
        conteudo: `

        <p>
            O HTTP(HyperText Transfer Protocol ou Protocolo
            de Transferência de Hipertexto) é o protocolo da 
            Camada de Aplicação que serve de base para toda
            a comunicação de dados da Word Wide Web.
            Sempre que você digita um site no navegador
            ou clica em um link, é o HTTP(ou versão segura,
            HTTPS) que permite que o seu navegador (cliente)
            converse com o servidor web onde o site está
            hospedado.
        </p>

        <h4> O Ciclo de Funcionamento: Requisição e Resposta(
        Request-Response) </h4>

        <p>
            O funcionamento do HTTP é baseado estritamento no 
            modelo Cliente-Servidor através de um ciclo de 
            solicitação e entrega:
        </p>

        <ul>
            <li>
                A Requisição(Request): O seu navegador (cliente)
                envia uma mensagem para o servidor pedindo
                um recurso(ex: carregar a página inicial, enviar
                um formulário de login, buscar um imagem).
            </li>
            <li>
                A Resposta(Response): O servidor processa o pedido
                e devolve o resultado (ex: o código HTML/CSS da
                página, um arquivo JSON ou uma mensagem de erro).
            </li>
        </ul>

        <h4> Estrutura de uma Requisição HTTP </h4>

        <p>
            Uma requisição HTTP é composta basicamente por:
        </p>

        <ul>
            <li>
                Método(Verbo HTTP): O que você quer fazer com
                o recurso.
            </li>
            <li>
                URL(Caminmho): O endereço do recurso no sevidor
                (ex: /produtos).
            </li>
            <li>
                Cabeçaclho(Headers): Metadados informando 
                detalhes como o navegador que está acessando,
                idioma aceito ou tokens de autenticação.
            </li>
            <li>
                Corpo(Body-opcional): Dados enviados ao servidor
                (usado ao preencher um cadastro, por exemplo).
            </li>
        </ul>

        <h4> Os Principais Métodos HTTP(Verbos): </h4>

        <ul>
            <li>
                GET: Pede para o servidor trazer(ler) um
                recurso.(ex: Abrir uma página Web).
            </li>
            <li>
                POST: Envia dados novos para o servidor criar
                algo.(ex: Cadastrar um usuário ou enviar um
                comentário).
            </li>
            <li>
                PUT/PATCH: Atualiza um recurso existente no 
                servidor (PUT substitui o recurso todo; PATCH
                altera apenas alguns campos).
            </li>
            <li>
                DELETE: Remove um recurso do servidor.
            </li>
        </ul>

        <h4> Códigos de Status HTTP(Status Codes) </h4>

        <p>
            Quando o servidor responde à sua requisição,
            ele inclui um número de 3 digitos que indica
            o resultado da operação. Eles são divididos
            em cinco grandes categorias:
        </p>

        <ul>
            <li>
                1xx(Informativo): A requisição foi recebida
                e o processo continua.
            </li>
            <li>
                2xx(Sucesso): Tudo ocorreu bem.
                <ul>
                    <li>
                        200 OK: Sucesso padrão.
                    </li>
                    <li>
                        201 Created: Recurso criado com sucesso
                        (comum em cadastros via POST).
                    </li>
                </ul>
            </li>
            <li>
                3xx(Redirecionamento): O cliente precisa executar
                ações adicionais para concluir a requisição.
                
                <ul>
                    <li>
                        301 Moved Permanently: O endereço mudou
                        permanentemente para outra URL.
                    </li>
                </ul>
            </li>
            <li>
                4xx(Erro do Cliente): O pedido tem algum erro que 
                partiu de quem enviou(você).

                <ul>
                    <li>
                        400 Bad Request: Requisição mal furmatada.
                    </li>
                    <li>
                        401 Unauthorized: Falta autenticação( você
                        precisa fazer login).
                    </li>
                    <li>
                        403 Forbidden: Você está logado, mas não tem
                        permissão para acessar aquilo
                    </li>
                    <li>
                        404 Not Found: O recurso ou página solicitada
                        não existe no servidor.
                    </li>
                </ul>
            </li>
            <li>
                5xx(Erro do Servidor): O cliente enviou tudo center,
                mas o servidor falhou ao processar.

                <ul>
                    <li>
                        500 Internal Server Error: Erro genérico
                        no servidor.
                    </li>
                    <li>
                        502 Bad Gateway: O servidor de gateway
                        recebeu um reposta inválida.
                    </li>
                </ul>
            </li>
        </ul>

        <h4> HTTP vs HTTPS </h4>

        <p>
            O HTTP tradicional transmite os dados em texto plano, 
            o que significa que se alguém interceptar o cabo ou 
            a rede Wi-Fi no meio do caminho, consegue ler senhas,
            cartões de crédito e mensagens trocadas.
        </p>

        <p>
            Para resolver isso, surgiu o HTTPS(HTTP Secure). Ele
            adiciona uma camada de criptografia (TLS/SSL -
            correspondente à camada de Apresentação do modelo OSI)
            que embaralha os dados de ponta a ponta. Hoje em dia,
            o uso de HTTPS é obrigatório na web moderna para
            garantir a privacidade e a integridade das informações.
        </p>

        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>
        `
    },

    /************************************************************************** */


    "https": {
        titulo: "Protocolor HTTPS",
        conteudo: `

        <p>
            O HTTPS(HyperText Transfer Protocol Secure ou Protocolo de
            Transferência de Hipertexto Seguro) é a evolução do HTTP.
            Enquanto o HTTP tradicional transmite todos os dados em
            texto plano(o que permite que qualquer invasor na mesma
            rede intercepte senhas, dados de cartão de crédito e 
            mensagens), o HTTPS adiciona uma camada robusta de 
            criptografia sobre a conexão.
        </p>

        <h4> Como o HTTPS funciona? </h4>

        <p>
            O segredo do HTTPS esta na combinação do protocolo HTTP
            com protocolos de segurança criptográfica chamados SSL
            (Secure Sockts Layer) ou, na sua versão moderna e 
            atualizada, TLS(Transport Layer Security).
        </p>

        <p>
            Quando você acessa um site via HTTPS, ocorre um processo
            chamado Handshake TLS (Aperto de Mão) antes de qualquer
            dado real ser trocado:
        </p>

        <ul>
            <li>
                Autenticação: O navegador verifica se o certificado
                digital do site é legítimo e emitido por uma 
                Autoridade Certificadora(CA) confiável. Isso garante
                que você está realmente acessando o site oficial(
                evitando golpes de phishing).
            </li>
            <li>
                Troca de Chaves: O navegador e o servidor negociam
                chaves criptográficas exclusivas para aquela sessão.
            </li>
            <li>
                Criptografia de Ponta a Ponta: A partir desse momento,
                todos os dados trocados entre o seu dispositivo e o 
                servidor são embaralhados de forma que apenas as
                duas pontas conseguem ler. Se alguém interceptar os
                pacotes no meio do caminho, verá apenas códigos
                ilegíveis.
            </li>
        </ul>

        <h4> Os Três Pilares da Segurança no HTTPS </h4>

        <p>
            O HTTPS garante três propriedades vitais para a segu-
            rança digital:
        </p>

        <ul>
            <li>
                Confidencialidade: Ninguém consegue ler os dados
                no meio do caminho(proteção contra escutas indese-
                jadas).
            </li>
            <li>
                Integridade: Garante que os dados enviados naõ 
                foram modificados ou adulterados durante o 
                trajeto por terceiros.
            </li>
            <li>
                Autenticidade: Prova que você está conversando
                com o servidor verdadeiro, e não com um impostor.
            </li>
        </ul>

        <h4> Porta Padrão de cada Protocolo </h4>

        <ul>
            <li>
                HTTP: PORTA -> 80
            </li>
            <li>
                HTTPS: PORTA -> 443
            </li>
        </ul>


        <p>
            Hoje em dia, o HTTPS deixou de ser exclusivo de bancos
            e e-commerces e se tornou o padrão obrigatório para toda
            a internet, garantindo a privacidade de qualquer 
            usuário ao navegar na rede.
        </p>

        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>

        `
    },

    /************************************************************************************ */


    "ftp": {
        titulo: "Protocolo FTP(arquivos)",
        conteudo: `

        <p>
            O FTP(File Transfer Protocol ou Protocolo de Transferência de Arquivos)
            é um protocolo clássico da Camada de Aplicação do modelo TCP/IP, 
            desenvolvido especificamente para tranferir arquivos entre um 
            computador cliente e um servidor através de uma rede(como a internet).
        </p>

        <p>
            Enquanto o HTTP foi feito para carregar páginas web estruturada
            em hipertexto, o FTP nasceu para mover arquivos brutos - sejam
            imagens, documentos, instaladores ou códigos de sites inteiros -
            de um lugar para o outro.
        </p>

        <h4> Como o FTP Funciona? </h4>

        <p>
            O FTP opera no modelo Cliente-Servidor, mas com uma característica
            muito interessante: ele utiliza duas conexões separada(canais)
            simultaneamente para funcionar:
        </p>

        <ul>
            <li>
                Canal de Controle(Porta 21): É por onde viajam os comandos
                que você envia ao servidor(como "listar arquivos", "excluir",
                "mudar de deretório") e as respostas do servidor.
            </li>
            <li>
                Canal de Dados(Porta 20 ou porta dinâmica): É aberto exclu-
                sivamente para a transferência real do arquivo(quando o upload
                ou download de fato acontece).
            </li>

        <p>
           Para usar o FTP, você normalmente utiliza um software chamado
           cliente FTP(como o FileZilla, Cyberduck ou comandos via terminal),
           que se conecta ao servidor informando um endereço(ex: 
           ftp.meusite.com), um nome de usuário e uma senha.
        </p>

        <h4> Modos de Operação do FTP </h4>

        <p>
            O FTP possui duas formas de lidar com a abertura do canal de dados
            o que historicamente costumava gerar dores de cabeça com firewalls:
        </p>

        <ul>
            <li>
                Modo Ativo(Active Mode): O servidor inicia a conexão de dados
                voltando para o cliente. Se o cliente tiver um firewall
                rigoroso bloqueando conexões externas, a transferência falha.
            </li>
            <li>
                Modo Passivo(Passive Mode): O cliente solicita ao servidor
                que abra uma porta de dados específica e se conecta a ela.
                É o modo mais utilizado hoje em dia porque evita proble-
                mas com firewalls de roteadores domésticos e corporativos.
            </li>
        </ul>

        <h4> O Problema Histórico de Segurança: FTP vs FTPS/SFTP </h4>

        <p>
            Assim como o HTTP antigo, o FTP tradicional foi criado em 
            uma época em que a segurança da rede não era a principal
            preocupação.
        </p>

        <ul>
            <li>
                FTP padrão: Transmite absolutamente tudo em texto plano-
                incluindo o seu nome de usuário e senha de login. Se
                alguém interceptar a rede no meio do caminho, conse-
                gue roubar suas credenciais instantaneamente.
            </li>

            <p>
                Por causa disso, o FTP puro foi sendo substituido
                por alternativas seguras:
            </p>

            <li>
                FTPS(FTP Secure ou FTP-SSL): Adiciona criptografia SSL/TLS
                sobre a conexão FTP tradicional, protegendo os dados e as
                senhas.
            </li>
            <li>
                SFTP(SSH File Transfer Protocolo): Embora muitas vezes seja
                confundido com o FTP, ele tecnicamente é outro protocolo que 
                roda inteiramente sobre o SSH(Camada de Transporte segura),
                utilizando geralmente a porta 22. É o padrão mais utilizado
                hoje para gerenciar arquivos em servidores web de forma segura.
            </li>
        </ul>


        <h4> Resumo das Aplicaçãoes </h4>

        <ul>
            <li>
                Para que serve: Enviar arquivos pesados para um servidor
                de hospedagem web, fazer backup de dados ou gerenciar
                diretórios remotos de sistemas.
            </li>
            <li>
                Situação atual: o FTP clássico em texto plano esta
                praticamente obsoleto e bloqueado em ambientes 
                prifissionais devido ao risco de segurança, sendo
                substituido pelo SFTP ou serviços baseado em nuvem.
            </li>
        </ul>

        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>
        
        `
    },


    /*********************************************************************************** */


    "smtp": {
        titulo: "Protocolo SMTP",
        conteudo: `

        <p>
            O <span class="destacar">SMTP</span>(Simple Mail Transfer Protocol ou Protocolo de Simples
            Transferência de Correio) é o protocolo padrão da <span class="destacar">Camada
            de Aplicação</span> responsável pelo <span class="destacar">envio e encaminhamento de 
            e-mail</span> na internet.
        </p>

        <p>
            Enquanto o HTTP lida com páginas web e o FTP com arquivos,
            o SMTP é o carteiro digital que pega a mensagem que você
            escreveu e garante que ela seja entregue do seu servidor
            de e-mail até o servidor de e-mail do destinatário.
        </p>

        <h4> Como o SMTP Funciona? </h4>

        <p>
            O SMTP opera predominantemente no modelo Cliente-servidor,
            utilizando a porta 25(para transferência entre servidores)
            ou as portas 465/587(para envio de e-mails de clientes,
            como o seu aplicativo de e-mail, para o servidor).
        </p>

        <p> 
            O processo de envio ocorre em etapas bem definidas:
        </p>

        <ol>
            <li>
                <span class="destacar">Compsição (MUA):</span> Você usa um programa cliente de e-mail
                (como o Gmail, Outlook ou Thunderbird) para escrever
                a mensagem e clica em Enviar.
            </li>
            <li>
                <span class="destacar">Envio para o Servidor de Saída:</span> O seu cliente de e-mail
                se conecta ao servidor SMTP da sua  provedora usando
                o protocolo SMTP
            </li>
            <li>
                <span class="destacar">Roteamento de Servidor para Servidor:</span> O servidor SMTP
                de origem consulta os registros DNS(MX) do domínio
                de destino para descobrir qual é o servidor de e-meial
                responsável por receber as mensagens da pessoa para 
                quem você enviou.
            </li>
            <li>
                <span class="destacar">Entrega:</span> O servidor de origem transfere a mensagems
                via SMTP para o servidor de destino, que a armazena
                na caixa postal do destinatário.
            </li>
        </ol>

        <h4> O SMTP é apenas para enviar e-mails! </h4>

        <p>
            Uma confusão muito comum é achar que o SMTP faz todo
            o trabalho do e-mail. Na verdade, <span class="destacar">o SMTP server
            estritamente para o envio e o repassa</span>.
        </p>

        <p>
            Quando a mensagem chega ao servidor de destino, ela
            precisa ser baixada ou visualizada por quem vae ler.
            É ai que entram os protocolos irmãos do SMTP:
        </p>

        <ol>
            <li>
                <span class="destacar">POP3(Post Office Protocol):</span> Baixa os e-mails do 
                servidor para seu dispositivo e, por padrão,
                os apaga do servidor
            </li>
            <li>
                <span class="destacar">IMAP(Internet Message Access Protocol):</span> Sincroniza 
                os e-mails diretamente no servidor, permitindo que
                você acesse a mesma caixa de entrada de vários
                dispositivos diferentes(Celular, computador, web)
                sem perder o hitórico.
            </li>
        </ol>

        <h4> A importância da Segurança no SMTP </h4>

        <p>
            Assim como os outros protocolos clássicos da internet. o 
            SMTP original foi criado sem criptografia, o que permitia
            que qualquer pessoa interceptasse o tráfego de mensagens
            no meio do caminho.
        </p>

        <p>
            Para resolver isso, a arquitetura de e-mail moderna
            adotou extensões de segurança:
        </p>

        <ol>
            <li>
                <span class="destacar"> SMTP com STARTTLS/SMTPS:</span> Adiciona criptografia TLS
                sobre a comunicação SMTP(portas 465 ou 587), 
                embaralhando os dados de autenticação e o corpo da
                mensagem.
            </li>
            <li>
                <span class="destacar"> Autenticação e Proteção contra Spam: </span> Mecanismo como
                SPF, DKIM e DMARC são configurados via DNS em 
                conjunto com o SMTP para provar que o servidor
                que está enviando o e-mail é realmente legítimo,
                evitando fraudes e falsificações de remetente(
                phishing).
            </li>            
        </ol> 
        
        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>
        `
    }

}