const conteudoRede = {

/*****                    Aqui começar os fundamentos de rede              ***********/

    "cons-basicos": {
        titulo: "Conceitos Básicos",
        conteudo: `

        <p>
                Uma rede de computadores é um conjunto de dispositivos, (<span class="destaque">computadores,
            servidores, smartphones, impressoras</span>) interconectados para trocar dados,
            compartilhar recursos e se comunicar.
        </p>

        <h4> Classificação por Abrangência (Tipos de Rede) </h4>

        <p>
            As redes são categorizadas de acordo com sua extensão geográfica:
        </p>
        <ul>
            <li>
                <span class="destaque">LAN (Local Area Network):</span> Rede local que cobre uma área restrita,
                como uma residência, escritório ou escola. Oferece alta velocidade
                e baixa latência.
            </li>
            <li>
                <span class="destaque">WLAN (Wireless LAN):</span> Uma LAN que utiliza tecnologia sem fio(Wi-Fi)
                para conectar os dispositivos.
            </li>
            <li>
                <span class="destaque">MAN (Metropolitan Area Network):</span> Rede que abrange uma cidade inteira
                ou um grande campus, conectando várias LANs.
            </li>
            <li>
                <span class="destaque">WAN (Wide Area Network):</span> Rede de longa distância que conecta redes
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
                <span class="destaque">Roteador(Router):</span> Conecta redes diferentes(como uma rede domestica 
                à internet) e determina a melhor rota(caminho) para os pacotes de 
                dados viajarem.
            </li>
            <li>
                <span class="destaque">Switch:</span> Conecta dispositivos dentro da mesma LAN, encaminhando
                o tráfego diretamente para o destinatário correto com base
                no endereço físico.
            </li>
            <li>
                <span class="destaque">Modem:</span> Modula e desmodula o sinal analógico da operadora(fibra, 
                cabo ou linha telefônica) em sinal digital compreensível pelos
                seus dispositivos.
            </li>
            <li>
                <span class="destaque">Access Point(Ponto de Acesso):</span> Dispositivo que expande a
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
                <span class="destaque">Endereço MAC(Media Access Control):</span> É o endereço físico gravado
                na placa de ree do <span class="destaque">hardware(Ex: 00:1A:2B:3C:4D:5E)</span>. Ele é único
                no mundo usado para comunicação na rede local.
            </li>
            <li>
                <span class="destaque">Endereço IP(Internet Protocol):</span> É o endereço lógico atribuido
                a um dispositivo quando ele se conecta a uma rede. Pode ser
                <span class="destaque">IPv4(Ex: 192.168.1.1)</span> ou <span class="destaque">IPv6(Ex: 2001:db8::ff00:42:8329).</span>
                Ele muda conforme a rede em que você esta e serve para
                rotear dados entre redes distintas.
            </li>
        </ul>

        <h4> O Modelo OSI e a Arquitetura em Camadas </h4>

        <p>
                A comunicação em rede é dividida em camadas para padronizar
            e facilitar o desenvolvimento de protocolos e hardware.
            O modelo <span class="destaque">OSI</span> possui 7 camadas, enquanto o modelo prático
            da Internet <span class="destaque">(TCP/IP)</span> agrupa essas funções em 4 camadas:
        </p>

        <ol>
            <li>
                <span class="destaque">Aplicação:</span> Onde as aplicações interagem com o usuário(ex:
                navegadores usando HTTP/HTTPS, clientes de e-mail usando
                SMTP/IMAP).
            </li>
            <li>
                <span class="destaque">Transporte:</span> Garante a entrega confiável dos dados(ex: 
                protocolos TCP para conexões orientadas à sessão e
                UDP para transmissões rápidas e sem confirmação).
            </li>
            <li>
                <span class="destaque">Rede(ou Internet):</span> Responsável pelo roteamento dos pacotes
                entre redes diferentes usando endereços IP.
            </li>
            <li>
                <span class="destaque">Enlace de Dados/Física:</span> Cuida da transmissão física dos
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
                <span class="destaque">Alcance:</span> Muito curto (geralmente até 10 metros).
            </li>
            <li>
                <span class="destaque">Objetivo:</span> Conectar dispositivos pessoais de um único
                usiário localizados no mesmo espaço físico imediato.
            </li>
            <li>
                Exemplo de tecnologias: <span class="destaque">Bluetooth, Zigbee, NFC, USB</span>.
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
                <span class="destaque">Alcance:</span> Curto a médio(de alguns metros até poucos
                quilômentros).
            </li>
            <li>
                <span class="destaque">Objetivo:</span> Interconectar computadores e periféricos dentro
                de um ambiente limitado e geograficamente restrito com alta
                taxa de transferência e baixa latência.
            </li>
            <li>
                Exemplos de tecnologias: <span class="destaque">Ethernet(cabos RJ45), Wi-Fi(neste 
                caso, chamada de WLAN)</span>.
            </li>
            <li>
                Casos de uso: A rede de uma casa, escritório, sala de aula
                ou de um laboratório.
            </li>
        </ul>

        <h4> MAN (Metropolitan Area Network / Rede de Área Metropolitana) </h4>

        <ul>
            <li>
                <span class="destaque">Alcance:</span> Médio a grande (cobrindo a extensão de uma cidade 
                ou região metropolitana de 10 km a 50 km).
            </li>
            <li>
                <span class="destaque">Objetivo:</span> Interconectar diversas LANs distribuidas pou uma
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
                <span class="destaque">Alcance:</span> Global ou regionalmente ilimitado (<span class="destaque">interconecta 
                países, continentes ou o mundo inteiro</span>)
            </li>
            <li>
                <span class="destaque">Objetivo:</span> Interligar redes menores <span class="destaque">(LANs, MANs)</span> situadas
                em grandes distâncias geográficas.
            </li>
            <li>
                Exemplo de tecnologias: Cabos submarinos de fibra
                óptica, comunicação via satélite, links dedicados de 
                telecomunicões <span class="destaque">(MPLS, SD-WAN)</span>.
            </li>
            <li>
                Casos de uso: A própria Internet(que é a maior <span class="destaque">WAN</span> existente),
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
            A topologia de rede é a estrutura <span class="destaque">geométrica ou física/lógica</span> como
            os dispositivos <span class="destaque">(nós)</span> e os cabos são interconectados em uma rede
            de computadores. Ela define o caminho pelo qual os dados
            trafegam e como a rede se comporta diante de falhas.
        </p>

        <p>
            As <span class="destaque">topologias</span> dividem-se principalmente entre <span class="destaque">física(como os
            cabos e equipamentos estão dispostos)</span> e <span class="destaque">lógicas(como os dados
            fluem de fato pela rede)</span>. As principais topologias
            estruturais são:
        </p>

        <h4> 1. Topologia em Estrela(Star) </h4>

        <p> É a topologia mais utilizada atualmente em redes <span class="destaque">LAN</span>
        residencias e cor´porativas. </p>

        <ul>
            <li>
                Como funciona: Todos os dispositivos(<span class="destaque">computadores,
                impressoras, etc.</span>) conectam-se individualmente a um
                nó central, que geralmente é um <span class="destaque">Switch ou Roteador</span>.
            </li>
            <li>
                <span class="destaque">Vantagens:</span> 
                <ul>
                    <li>
                        Seu um cabo ou dispositivo falhar, apenas
                        ele é desconectado; o resto da rede continua funcionando
                        normalmente.
                    </li>
                    <li>
                        Fácil de expandir(basta plugar um novo cabo no <span class="destaque">Switch</span>).
                    </li>
                    <li>
                        Alto desempenho, pois o tráfego é direcionado direta-
                        mente ao destino.
                    </li>
                </ul>
            </li>
            <li>
                <span class="destaque">Desvantagens:</span>
                <ul>
                    <li>
                        Se o dispositivo(<span class="destaque">Switch/roteador</span>) falhar, toda a
                        rede cai.
                    </li>
                    <li>
                        Usa mais cabos do que algumas outras topologias
                        (como o <span class="destaque">barramento</span>).
                    </li>
                </ul>
            </li>
        </ul>

        <h4> 2. Topologia em Barramento(Bus) </h4>

        <p> Muito comum nos primórdios das redes locais, hoje
            praticamente <span class="destaque">obsoleta</span>. </p>

        <ul>
            <li>
                Como funciona: Todos os dispositivos compartilham
                um único canal de transmissão central(um cabo 
                chamado <span class="destaque">backbone ou barramento</span>). Nas pontas do 
                cabo existem terminadores para evitar o eco do sinal.
            </li>
            <li>
                <span class="destaque">Vantagens:</span>
                <ul>
                    <li>
                        Usa poucos cabos e é muito barata e simples
                        de instalar para redes pequenas.
                    </li>
                </ul>
            </li>
            <li>
                <span class="destaque">Desvantagens:</span>
                <ul>
                    <li>
                        Se o cabo principal(<span class="destaque">Backbone</span>) sofrer um corte
                        ou falha em qualquer ponto, toda a rede para.
                    </li>
                    <li>
                        Difícil de isolar falhas e a performance
                        degrada rapidamente à medida que mais
                        computadores são adicionados(ocorre muita
                        <span class="destaque">colisão</span> de dados).
                    </li>
                </ul>
            </li>
        </ul>

        <h4> 3. Topologia em Anel(Ring) </h4>

        <ul>
            <li>
                Como funciona: Os dispositivos são conectados em um circuito
                fechado(<span class="destaque">um anel</span>). Os dados viajam de um computador para o 
                próximo em uma única direção(ou bidirecional em versões
                mais robustas) até atingirem o destinatário. Cada estação
                funciona como um repetidor.
            </li>
            <li>
                <span class="destaque">Vantagens:</span>
                <ul>
                    <li>
                        O fluxo de dados é ordenado, evitando colisões
                        intensas(muitas vezes utilizando um <span class="destaque">tokem, 
                        como nas redes token Ring</span>).
                    </li>
                </ul>
            </li>
            <li>
                <span class="destaque">Desvantagens:</span>
                
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
        <span class="destaque">datacenters, redes de operadoras e espinha dorsal da internet</span>). </p>

        <ul>
            <li>
                Como funciona: Cada dispositivo possui conexões dedicadas 
                ponto a ponto com todos ou vários outros dispositivos da rede.
            </li>
            <li>
                Tipos:

                <ul>
                    <li>
                        Totalmente <span class="destaque">Ligada</span>: Todo mundo se conecta com todo mundo.
                    </li>
                    <li>
                        Parcialmente Ligada: alguns nós possuem múltiplas
                        rotas, enquanto outros se conectam apenas
                        aos essenciais.
                    </li>
                </ul>
            </li>
            <li>
                <span class="destaque">Vantagens:</span>
                <ul>
                    <li>
                        Tolerância a falhas extremas: Se um cabo ou 
                        caminho romper, os dados encontram automa-
                        ticamente uma rota alternativa.
                    </li>
                    <li>
                        Alta segurança e privacidade(dados <span class="destaque">tráfegam
                        em canais dedicados</span>).
                    </li>
                </ul>
            </li>
            <li>
                <span class="destaque">Desvantagens:</span>
                <ul>
                    <li>
                        Custo de implementação <span class="destaque">altíssimo</span>(exige muitos
                        cabos, portas de rede e placas).
                    </li>
                    <li>
                        <span class="destaque">Complexa de configuração e manutenção</span>.
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
                <span class="destaque">Vantagens:</span>
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
                <span class="destaque">Desvantagens:</span>
                <ul>
                    <li>
                        Se o nó <span class="destaque">principal(raiz)</span> falhar, todos
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
            <span class="destaque">pura</span>. As redes modernas são <span class="destaque">híbridas</span>, combinando duas
            ou mais topologias diferentes para atender às neces-
            sidades de custo e desempenho(por exemplo, uma rede
            corporativa que usa <span class="destaque">topologia em estrela</span> nas salas,
            mais interliga os prédios em um <span class="destaque">anel ou malha</span>).
        </p>

        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>

        `
    },

    /******************************************************************************************* */


    "larg-banda": {
        titulo: "Largura de banda e Latência",
        conteudo: `

        <p>
            Dois conceitos fundamentais para medir a <span class="destaque">velocidade</span>,
            a qualidade e o desempenho de qualquer conexão de rede
            são a largura de banda e a <span class="destaque">latência</span>.
        </p>

        <p>
            Embora muitas pessoas usem a palavra <span class="destaque">"velocidade"</span> como
            um termo genérico para descrever as duas coisas, elas
            medem aspectos completamente diferentes da transmissão
            de dados.
        </p>

        <h4> 1. Largura de Banda(Bandwidth) </h4>

        <p>
            A <span class="destaque">largura de banda</span>(muitas vezes tratada comercialmente
            como taxa de transferência ou <span class="destaque">throughput</span>) mede a
            quantidde de dados que podem se transmitidos em um
            determinado intervalo de tempo.
        </p>

        <ul>
            <li>
                A metáfora da rodovia: Pense na largura de banda
                como um número de faixas de uma rodovia. Quanto
                mais faixas a estrada tiver, mais <span class="destaque">carros(dados)</span>
                conseguem passar lado a lado ao mesmo tempo.
            </li>
            <li>
                <span class="destaque">Unidade de medida</span>: É medida em <span class="destaque">bps(bits por segundo)</span>,
                comumente em <span class="destaque">Megabits</span> por segundo(Mbps) ou <span class="destaque">Gigabits</span>
                por segundo(Gbps).
            </li>
            <li>
                Na prática: Se você tem uma internet de <span class="destaque">300 Mbps</span>,
                significa que sua conexão tem "espaço" suficiente
                para baixar até <span class="destaque">300 milhões de bits</span> de dados por
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
            A <span class="destaque">latência</span> mede o tempo que um pacote de dados leva para
            ir de um ponto de origem até o destino e retornar(medida 
            conhecida como <span class="destaque">Round Trip Time ou RTT</span>).
        </p>

        <ul>
            <li>
                A metáfora da <span class="destaque">rodovia</span>: Pense na <span class="destaque">latência</span> como o limite de
                velocidade ou tempo que um carro leva para percorrer
                a estrada de ponta a ponta. Não adianta a rodovia ter
                <span class="destaque">10 faixa(largura de banda alta)</span> se os carros preci-
                sarem adar a 10 km/h.
            </li>
            <li>
                Unidade de medida: É medida em <span class="destaque">milissegundos(ms)</span>.
                Quanto menor o valor em <span class="destaque">ms</span>, mais rápida e respon-
                siva é a conexão.
            </li>
            <li>
                Na prática: Quando você clica em um link ou atira em um
                jogo online, o tempo que passa entre o clique e a ação
                acontecer na tela é a sua <span class="destaque">latência(frenquentemente 
                chamada de ping)</span>. Se o ping for de <span class="destaque">20 ms</span>, a resposta é
                quase instantânea; se for de <span class="destaque">200 ms</span>, haverá um atraso
                perceptível(<span class="destaque">travadinhas ou lag</span>).
            </li>
            <li>
                Para que serve: A baixa <span class="destaque">latência</span> é crítica para
                aplicações em tempo real, como jogos online
                competitivos, chamadas de vídeo(Zoom/Teams),
                VoIP e transações financeiras.
            </li>
        </ul>

        <h4> O Impacto Combinado </h4>

        <p>
            Para uma excelente experiência de rede, você precisa de ambos
            em equilíbrio. Uma conexão de <span class="destaque">alta largura de banda</span> com
            <span class="destaque">latência altíssim</span>(como a internet via satélite tradicional 
            de órbita geoestacionária) permite baixar arquivos grandes,
            mas torna impossível jogar online ou conversar por vídeo
            sem atrasos incômodos. Já a conexão de <span class="destaque">baixíssima latência</span>,
            mas com pouca <span class="destaque">largura de banda</span>, sofrerá congestionamentos
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
            Os meios de <span class="destaque">transmissão</span> são os canais físicos ou atmos-
            féricos por onde os dados <span class="destaque">(sinal elétrico, óptico ou 
            eletromagnético)</span> viajam de um ponto a outro na rede.
            Eles compõem a Camada <span class="destaque">Física</span> do modelo <span class="destaque">OSI</span>.
        </p>

        <p>
            Eles são divididos em duas grandes categorias: 
            guiados(<span class="destaque">cabeados</span>) e não guiados(<span class="destaque">sem fio</span>).
        </p>

        <h4> 1. Meios Guiados(Cabeados) </h4>

        <p>
            Neste modelo, os sinais são confinados a um meio
            <span class="destaque">físico concreto</span>, o que garante maior segurança,
            estabilidade e imunidade a interferências externas.
        </p>

        <ul>
            <li>
                <span class="destaque">Cabo de Par Trançado(Twisted Pair)</span>:
                <ul>
                    <li>
                        <span class="destaque">Como é:</span> Formado por pares de fios de cobre
                        <span class="destaque">entrelaçados</span>(para reduzir interferências 
                        <span class="destaque">eletromagnéticas</span). Os conectores mais 
                        comuns são os <span class="destaque">RJ45</span>.
                    </li>
                    <li>
                        <span class="destaque">Tipos principais</span>: <span class="destaque">UTP</span>(sem blindagem, o mais 
                        comum em residências/escritórios) e <span class="destaque">STP</span>
                        (blindado, usado em ambientes industriais 
                        com muita interferência).
                    </li>
                    <li>
                        Uso: <span class="destaque">Redes LAN</span>, conexões de computadores a
                        roteadores e switchers(categoras comuns: 
                        <span class="destaque">Cat5e, Cat´6, Cat6a</span>).
                    </li>
                </ul>

            </li>
            <li>
                <span class="destaque">Cabo Coaxial:</span>
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
                <span class="destaque">Fibra Óptica:</span>
                <ul>
                    <li>
                        Como é: <span class="destaque">Transmite</span> os dados através de 
                        filamentos finíssimo de vidro ou plástico
                        que conduzem pulsos de luz.
                    </li>
                    <li>
                        <span class="destaque">Vantagens</span>: Altíssima velocidade, capacidade
                        massiva de tráfego de dados e imunidade
                        total a interferências <span class="destaque">eletromagnéticas</span>,
                        além de permitir grandes distâncias sem
                        perda de sinal.
                    </li>
                    <li>
                        Uso: <span class="destaque">Redes de longa distância(WANs)</span>, espinha
                        dorsal da internet(cabos submarinos) e 
                        conexões residenciais de alta velocidade
                        (<span class="destaque">FTTH</span> - Fiber to the Home).
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
                <span class="destaque">Rádio Frequência(Wi-Fi e Redes Celulares)</span>:
                <ul>
                    <li>
                        Usa ondas de rádio para conectar dis-
                        positivos em redes locais(como rotea-
                        dores sem <span class="destaque">fio</span>) ou redes móveis(<span class="destaque">4G, 5G</span>).
                    </li>
                </ul>
            </li>
            <li>
                <span class="destaque">Micro-ondas</span> (Terrestres e Espaciais):
                <ul>
                    <li>
                        <span class="destaque">Terrestres</span>: Torres de transmissão que enviam
                        sinais de linha de visada direta entre 
                        pontos distantes(muito usado por operadoras 
                        de <span class="destaque">telecomunicações</span>).
                    </li>
                    <li>
                        <span class="destaque">Satélites</span>: Comunicação espacial onde os dados
                        viajam da terra para um satélite em órbita 
                        e rabatem para outro ponto do globo(ex: internt 
                        via satélite como <span class="destaque">Starlink</span>).
                    </li>
                </ul>
            </li>
            <li>
                <span class="destaque">Infravermelho:</span>
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
            Modelo <span class="destaque">OSI(Open Systems Interconnection ou Interconexão 
            de Sistemas Abertos)</span> é um modelo conceitul criado pela
            <span class="destaque">ISO</span>(Organização Internacional para Padronização) em
            1984.
        </p>

        <p>
            O objetivo principal do modelo <span class="destaque">OSI</span> é padronizar a
            comunicação entre diferentes sistemas de computadores,
            dividindo o processo complexo de transmissão de dados
            em 7 camadas distintas e modulares.
        </p>

        <p>
            Essa divisão em camadas traz grandes vantagens: se um
            protocolo de uma camada especifica precisar ser alterado,
            ele não afeta as outras camadas, facilitando o desen-
            volvimento de hardwares, softwares e a solução de pro-
            blemas(<span class="destaque">troubleshooting</span>).
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
                Exemplos de Protocolos: <span class="destaque">HTTP/HTTPS</span>(navegadores web), 
                <span class="destaque">SMTP/IMAP</span>(e-mails), <span class="destaque">FTP</span>(transferência de arquivos),
                <span class="destaque">DNS</span>(resolução de nomes).
            </li>
            <li>
                Em resumo: Onde o usuário interage com o <span class="destaque">software
                de rede</span>.
            </li>
        </ul>

        <h4> 6. Camada de Apresentação(Presentation) </h4>

        <ul>
            <li>
                O que faz: Atua como o tradutor da rede. Ela garante
                que os dados enviados por uma aplicação de um sisteme
                possam ser compreendidos pela aplicação de outro
                sistema. Também cuida da formatação, criptografia
                (como <span class="destaque">SSL/TLS</span>) e compreessão de dados.
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
                Ela divide os dados em blocos menores(<span class="destaque">segmentos</span>),
                verifica erros e controla o fluxo de dados.
            </li>
            <li>
                Exemplos de Protocolos:
                <ul>
                    <li>
                        <span class="destaque">TCP</span>(Transmission Control Protocol): Confiável,
                        orientada à conexão, garante que nenhum 
                        pacote se perca(usado em paginas web, e-mails,
                        aquivos).
                    </li>
                    <li>
                        <span class="destaque">UDP</span>(User Datagram Protocol): Rápido, não 
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

        <h4> 3. Camada de <span class="destaque">Rede(Network)</span> </h4>

        <ul>
            <li>
                O que faz: Responsável pelo roteamento dos pacotes
                de dados, determinando o melhor caminho para que
                eles viajem da rede de origem até a rede de 
                destino através de múltiplos saltos.
            </li>
            <li>
                Endereçamento principal: Utiliza Endereços <span class="destaque">IP</span>.
            </li>
            <li>
                Exemplos de Protocolos/Dispositivos: <span class="destaque">IP(IPv4 e 
                IPv6), ICMP, Roteadores</span>.
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
                rede <span class="destaque">local(LAN)</span>. Ela empacota os dados em quadros
                (<span class="destaque">frames</span>) e controla o acesso ao meio físico, além
                de detectar erros locais.
            </li>
            <li>
                Endereçamento principal: Utiliza Endereços <span class="destaque">MAC(
                físicos)</span>.
            </li>
            <li>
                Exemplos de Dispositivos: <span class="destaque">Switches e placas de rede</span>.
            </li>
            <li>
                Em resumo: Conecta dispositivos na mesma rede
                física usando endereços <span class="destaque">MAC</span>.
            </li>
        </ul>


        <h4> 1. Camada Física(Phiysical) </h4>

        <ul>
            <li>
                O que faz: É a camada base. Cuida da transmissão
                real dos <span class="destaque">bits(0s e 1s)</span> através do meio físico
                de transmissão(cabos de cobre, fibras ópticas ou
                ondas de rádio). Ela define voltagens, pinagem de
                conectores, frequências e propriedades elétricas/
                ópticas.
            </li>
            <li>
                Exemplos de Elementos: Cabos <span class="destaque">RJ45</span>, fibra óptica,
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
            utilizamos mais o Modelo <span class="destaque">TCP/IP</span>(que consolida essas
            7 camadas do <span class="destaque">OSI</span> em apneas 4 camadas mais práticas:
            Aplicação, Transporte, Internet, e Acesso à Rede).
            No entanto, o modelo <span class="destaque">OSI</span> continua sendo a referên-
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
            O Modelo <span class="destaque">TCP/IP</span>(também conhecido como Conjunto de
            Protocolos da Internet) é a arquitetura prática
            que sustenta toda a internet e a grande maioria
            das redes de computadores modernas.
        </p>

        <p>
            Enquanto o Modelo <span class="destaque">OSI</span>, é um modelo conceitual e 
            teórico de 7 camadas, o <span class="destaque">TCP/IP</span> foi desenvolvido
            pelo Departamento de Defesa dos <span class="destaque">EUA(DARPA)</span> na
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
            O modelo <span class="destaque">TCP/IP</span> agrupa as funções da rede apenas
            4 camadas(embora algumas versões da leteratura
            técnica dividam a camada de acesso à rede em duas,
            formando 5):
        </p>

        <h4> 4 Camada de Aplicação </h4>

        <ul>
            <li>
                O que faz: Equivalente às camadas de Aplicação,
                Apresentação e Sessão do Modelo <span class="destaque">OSI</span> juntas.
                É onde os aplicativos geram e consomem os dados.
            </li>
            <li>
                Exemplos de Protocolos: <span class="destaque">HTTP/HTTPS(Web), FTP(arquivos),
                SMTP/POP3/IMAP(e-mails), DNS(nomes de domínio), SSH e
                Telnet(acesso remoto)</span>.
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
                <span class="destaque">Principais Protocolos:</span>
                <ul>
                    <li>
                        <span class="destaque">TCP(Trasmition Control Protocol)</span>: Orientado 
                        à conexão, confiável, verifica erros, retrans-
                        mite pacotes perdidos e entrega os dados na
                        ordem certa.
                    </li>
                    <li>
                        <span class="destaque">UDP(User Datagram Protocol)</span>: Não orientado à
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
                Principais Protocolos: <span class="destaque">IP(IPv4 e IPv6), ICMP(usado
                pelo comoando ping para diagnósticos), ARP(associa
                IP ao endereço MAC) e protocolos de roteamento(como
                OSPF e BGP)</span>.
            </li>
        </ul>

        <h4> 1. Camada de Acesso a Rede(ou Enlace/Física) </h4>

        <ul>
            <li>
                O que faz: Combina as camadas de <span class="destaque">Enlace e Física</span>
                do Modelo <span class="destaque">OSI</span>. Cuida de como os dados são colocados
                fisicamente no meio de transmissão(cabo de rede
                fibra, Wi-Fi) e da comunicação direta entre dis-
                positivos na mesma rede local usando endereços <span class="destaque">MAC</span>.
            </li>
            <li>
                Exemplos de Tecnologias: <span class="destaque">Ethernet, Wi-Fi(802.11). PPP</span>.
            </li>
        </ul>

        <h4> Por que TCP/IP venceu na prática? </h4>

        <p>
            Enquanto o modelo <span class="destaque">OSI</span> seviu como uma excelente base
            de padronização, o <span class="destaque">TCP/IP</span> se tornou o padrão global
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
            O <span class="destaque">HTTP</span>(HyperText Transfer Protocol ou Protocolo
            de Transferência de Hipertexto) é o protocolo da 
            Camada de Aplicação que serve de base para toda
            a comunicação de dados da Word Wide Web.
            Sempre que você digita um site no navegador
            ou clica em um link, é o <span class="destaque">HTTP</span>(ou versão segura,
            <span class="destaque">HTTPS</span>) que permite que o seu navegador (cliente)
            converse com o servidor web onde o site está
            hospedado.
        </p>

        <h4> O Ciclo de Funcionamento: Requisição e Resposta(
        Request-Response) </h4>

        <p>
            O funcionamento do <span class="destaque">HTTP</span> é baseado estritamento no 
            modelo Cliente-Servidor através de um ciclo de 
            solicitação e entrega:
        </p>

        <ul>
            <li>
                A <span class="destaque">Requisição(Request)</span>: O seu navegador (cliente)
                envia uma mensagem para o servidor pedindo
                um recurso(ex: carregar a página inicial, enviar
                um formulário de login, buscar um imagem).
            </li>
            <li>
                A <span class="destaque">Resposta(Response)</span>: O servidor processa o pedido
                e devolve o resultado (ex: o código <span class="destaque">HTML/CSS</span> da
                página, um arquivo <span class="destaque">JSON</span> ou uma mensagem de erro).
            </li>
        </ul>

        <h4> Estrutura de uma Requisição HTTP </h4>

        <p>
            Uma requisição <span class="destaque">HTTP</span> é composta basicamente por:
        </p>

        <ul>
            <li>
                <span class="destaque">Método(Verbo HTTP)</span>: O que você quer fazer com
                o recurso.
            </li>
            <li>
                <span class="destaque">URL</span>(Caminmho): O endereço do recurso no sevidor
                (ex: /produtos).
            </li>
            <li>
                <span class="destaque">Cabeçaclho(Headers)</span>: Metadados informando 
                detalhes como o navegador que está acessando,
                idioma aceito ou tokens de autenticação.
            </li>
            <li>
                <span class="destaque">Corpo(Body-opcional)</span>: Dados enviados ao servidor
                (usado ao preencher um cadastro, por exemplo).
            </li>
        </ul>

        <h4> Os Principais Métodos HTTP(Verbos): </h4>

        <ul>
            <li>
                <span class="destaque">GET</span>: Pede para o servidor trazer(ler) um
                recurso.(ex: Abrir uma página Web).
            </li>
            <li>
                <span class="destaque">POST</span>: Envia dados novos para o servidor criar
                algo.(ex: Cadastrar um usuário ou enviar um
                comentário).
            </li>
            <li>
                <span class="destaque">PUT/PATCH</span>: Atualiza um recurso existente no 
                servidor (<span class="destaque">PUT</span> substitui o recurso todo; <span class="destaque">PATCH</span>
                altera apenas alguns campos).
            </li>
            <li>
                <span class="destaque">DELETE</span>: Remove um recurso do servidor.
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
                <span class="destaque">1xx(Informativo)</span>: A requisição foi recebida
                e o processo continua.
            </li>
            <li>
                <span class="destaque">2xx(Sucesso)</span>: Tudo ocorreu bem.
                <ul>
                    <li>
                        <span class="destaque">200 OK</span>: Sucesso padrão.
                    </li>
                    <li>
                        <span class="destaque">201 Created</span>: Recurso criado com sucesso
                        (comum em cadastros via <span class="destaque">POST</span>).
                    </li>
                </ul>
            </li>
            <li>
                <span class="destaque">3xx(Redirecionamento)</span>: O cliente precisa executar
                ações adicionais para concluir a requisição.
                
                <ul>
                    <li>
                        <span class="destaque">301 Moved Permanently</span>: O endereço mudou
                        permanentemente para outra <span class="destaque">URL</span>.
                    </li>
                </ul>
            </li>
            <li>
                <span class="destaque">4xx(Erro do Cliente)</span>: O pedido tem algum erro que 
                partiu de quem enviou(você).

                <ul>
                    <li>
                        <span class="destaque">400 Bad Request</span>: Requisição mal furmatada.
                    </li>
                    <li>
                        <span class="destaque">401 Unauthorized</span>: Falta autenticação( você
                        precisa fazer login).
                    </li>
                    <li>
                        <span class="destaque">403 Forbidden</span>: Você está logado, mas não tem
                        permissão para acessar aquilo
                    </li>
                    <li>
                        <span class="destaque">404 Not Found</span>: O recurso ou página solicitada
                        não existe no servidor.
                    </li>
                </ul>
            </li>
            <li>
                <span class="destaque">5xx(Erro do Servidor)</span>: O cliente enviou tudo center,
                mas o servidor falhou ao processar.

                <ul>
                    <li>
                        <span class="destaque">500 Internal Server Error</span>: Erro genérico
                        no servidor.
                    </li>
                    <li>
                        <span class="destaque">502 Bad Gateway</span>: O servidor de gateway
                        recebeu um reposta inválida.
                    </li>
                </ul>
            </li>
        </ul>

        <h4> HTTP vs HTTPS </h4>

        <p>
            O <span class="destaque">HTTP</span> tradicional transmite os dados em texto plano, 
            o que significa que se alguém interceptar o cabo ou 
            a rede <span class="destaque">Wi-Fi</span> no meio do caminho, consegue ler senhas,
            cartões de crédito e mensagens trocadas.
        </p>

        <p>
            Para resolver isso, surgiu o <span class="destaque">HTTPS(HTTP Secure)</span>. Ele
            adiciona uma camada de criptografia (<span class="destaque">TLS/SSL</span> -
            correspondente à camada de Apresentação do modelo <span class="destaque">OSI</span>)
            que embaralha os dados de ponta a ponta. Hoje em dia,
            o uso de <span class="destaque">HTTPS</span> é obrigatório na web moderna para
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
            O <span class="destaque">HTTPS</span>(HyperText Transfer Protocol Secure ou Protocolo de
            Transferência de Hipertexto Seguro) é a evolução do <span class="destaque">HTTP</span>.
            Enquanto o <span class="destaque">HTTP</span> tradicional transmite todos os dados em
            texto plano(o que permite que qualquer invasor na mesma
            rede intercepte senhas, dados de cartão de crédito e 
            mensagens), o <span class="destaque">HTTPS</span> adiciona uma camada robusta de 
            criptografia sobre a conexão.
        </p>

        <h4> Como o HTTPS funciona? </h4>

        <p>
            O segredo do <span class="destaque">HTTPS</span> esta na combinação do protocolo <span class="destaque">HTTP</span>
            com protocolos de segurança criptográfica chamados <span class="destaque">SSL</span>
            <span class="destaque">(Secure Sockts Layer)</span> ou, na sua versão moderna e 
            atualizada, <span class="destaque">TLS(Transport Layer Security)</span>.
        </p>

        <p>
            Quando você acessa um site via <span class="destaque">HTTPS</span>, ocorre um processo
            chamado Handshake <span class="destaque">TLS</span> (Aperto de Mão) antes de qualquer
            dado real ser trocado:
        </p>

        <ul>
            <li>
                Autenticação: O navegador verifica se o certificado
                digital do site é legítimo e emitido por uma 
                Autoridade Certificadora(CA) confiável. Isso garante
                que você está realmente acessando o site oficial(
                evitando golpes de <span class="destaque">phishing</span>).
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
            O <span class="destaque">HTTPS</span> garante três propriedades vitais para a segu-
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
                <span class="destaque">HTTP: PORTA -> 80</span>
            </li>
            <li>
                <span class="destaque">HTTPS: PORTA -> 443</span>
            </li>
        </ul>


        <p>
            Hoje em dia, o <span class="destaque">HTTPS</span> deixou de ser exclusivo de bancos
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
            O <span class="destaque">FTP(File Transfer Protocol ou Protocolo de Transferência de Arquivos)</span>
            é um protocolo clássico da Camada de Aplicação do modelo <span class="destaque">TCP/IP</span>, 
            desenvolvido especificamente para tranferir arquivos entre um 
            computador cliente e um servidor através de uma rede(como a internet).
        </p>

        <p>
            Enquanto o <span class="destaque">HTTP</span> foi feito para carregar páginas web estruturada
            em hipertexto, o <span class="destaque">FTP</span> nasceu para mover arquivos brutos - sejam
            imagens, documentos, instaladores ou códigos de sites inteiros -
            de um lugar para o outro.
        </p>

        <h4> Como o FTP Funciona? </h4>

        <p>
            O <span class="destaque">FTP</span> opera no modelo Cliente-Servidor, mas com uma característica
            muito interessante: ele utiliza duas conexões separada(canais)
            simultaneamente para funcionar:
        </p>

        <ul>
            <li>
                Canal de Controle(Porta <span class="destaque">21</span>): É por onde viajam os comandos
                que você envia ao servidor(como "listar arquivos", "excluir",
                "mudar de deretório") e as respostas do servidor.
            </li>
            <li>
                Canal de Dados(Porta <span class="destaque">20</span> ou porta dinâmica): É aberto exclu-
                sivamente para a transferência real do arquivo(quando o upload
                ou download de fato acontece).
            </li>

        <p>
           Para usar o <span class="destaque">FTP</span>, você normalmente utiliza um software chamado
           cliente <span class="destaque">FTP</span>(como o FileZilla, Cyberduck ou comandos via terminal),
           que se conecta ao servidor informando um endereço(ex: 
           ftp.meusite.com), um nome de usuário e uma senha.
        </p>

        <h4> Modos de Operação do FTP </h4>

        <p>
            O <span class="destaque">FTP</span> possui duas formas de lidar com a abertura do canal de dados
            o que historicamente costumava gerar dores de cabeça com <span class="destaque">firewalls</span>:
        </p>

        <ul>
            <li>
                <span class="destaque">Modo Ativo</span>(Active Mode): O servidor inicia a conexão de dados
                voltando para o cliente. Se o cliente tiver um <span class="destaque">firewall</span>
                rigoroso bloqueando conexões externas, a transferência falha.
            </li>
            <li>
                <span class="destaque">Modo Passivo</span>(Passive Mode): O cliente solicita ao servidor
                que abra uma porta de dados específica e se conecta a ela.
                É o modo mais utilizado hoje em dia porque evita proble-
                mas com firewalls de roteadores domésticos e corporativos.
            </li>
        </ul>

        <h4> O Problema Histórico de Segurança: FTP vs FTPS/SFTP </h4>

        <p>
            Assim como o <span class="destaque">HTTP</span> antigo, o <span class="destaque">FTP</span> tradicional foi criado em 
            uma época em que a segurança da rede não era a principal
            preocupação.
        </p>

        <ul>
            <li>
                <span class="destaque">FTP</span> padrão: Transmite absolutamente tudo em texto plano-
                incluindo o seu nome de usuário e senha de login. Se
                alguém interceptar a rede no meio do caminho, conse-
                gue roubar suas credenciais instantaneamente.
            </li>

            <p>
                Por causa disso, o <span class="destaque">FTP</span> puro foi sendo substituido
                por alternativas seguras:
            </p>

            <li>
                <span class="destaque">FTPS(FTP Secure ou FTP-SSL)</span>: Adiciona criptografia <span class="destaque">SSL/TLS</span>
                sobre a conexão <span class="destaque">FTP</span> tradicional, protegendo os dados e as
                senhas.
            </li>
            <li>
                <span class="destaque">SFTP(SSH File Transfer Protocolo)</span>: Embora muitas vezes seja
                confundido com o <span class="destaque">FTP</span>, ele tecnicamente é outro protocolo que 
                roda inteiramente sobre o <span class="destaque">SSH</span>(Camada de Transporte segura),
                utilizando geralmente a porta <span class="destaque">22</span>. É o padrão mais utilizado
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
                Situação atual: o <span class="destaque">FTP</span> clássico em texto plano esta
                praticamente obsoleto e bloqueado em ambientes 
                prifissionais devido ao risco de segurança, sendo
                substituido pelo <span class="destaque">SFTP</span> ou serviços baseado em nuvem.
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
            O <span class="destaque">SMTP</span>(Simple Mail Transfer Protocol ou Protocolo de Simples
            Transferência de Correio) é o protocolo padrão da <span class="destaque">Camada
            de Aplicação</span> responsável pelo <span class="destaque">envio e encaminhamento de 
            e-mail</span> na internet.
        </p>

        <p>
            Enquanto o <span class="destaque">HTTP</span> lida com páginas web e o <span class="destaque">FTP</span> com arquivos,
            o <span class="destaque">SMTP</span> é o carteiro digital que pega a mensagem que você
            escreveu e garante que ela seja entregue do seu servidor
            de e-mail até o servidor de e-mail do destinatário.
        </p>

        <h4> Como o SMTP Funciona? </h4>

        <p>
            O SMTP opera predominantemente no modelo Cliente-servidor,
            utilizando a porta <span class="destaque">25</span>(para transferência entre servidores)
            ou as portas <span class="destaque">465/587</span>(para envio de e-mails de clientes,
            como o seu aplicativo de e-mail, para o servidor).
        </p>

        <p> 
            O processo de envio ocorre em etapas bem definidas:
        </p>

        <ol>
            <li>
                <span class="destaque">Compsição (MUA):</span> Você usa um programa cliente de e-mail
                (como o Gmail, Outlook ou Thunderbird) para escrever
                a mensagem e clica em Enviar.
            </li>
            <li>
                <span class="destaque">Envio para o Servidor de Saída:</span> O seu cliente de e-mail
                se conecta ao servidor <span class="destaque">SMTP</span> da sua  provedora usando
                o protocolo <span class="destaque">SMTP</span>
            </li>
            <li>
                <span class="destaque">Roteamento de Servidor para Servidor:</span> O servidor SMTP
                de origem consulta os registros <span class="destaque">DNS(MX)</span> do domínio
                de destino para descobrir qual é o servidor de e-meial
                responsável por receber as mensagens da pessoa para 
                quem você enviou.
            </li>
            <li>
                <span class="destaque">Entrega:</span> O servidor de origem transfere a mensagems
                via <span class="destaque">SMTP</span> para o servidor de destino, que a armazena
                na caixa postal do destinatário.
            </li>
        </ol>

        <h4> O SMTP é apenas para enviar e-mails! </h4>

        <p>
            Uma confusão muito comum é achar que o <span class="destaque">SMTP</span> faz todo
            o trabalho do e-mail. Na verdade, o <span class="destaque">SMTP</span> server
            estritamente para o envio e o repassa.
        </p>

        <p>
            Quando a mensagem chega ao servidor de destino, ela
            precisa ser baixada ou visualizada por quem vae ler.
            É ai que entram os protocolos irmãos do SMTP:
        </p>

        <ol>
            <li>
                <span class="destaque">POP3(Post Office Protocol):</span> Baixa os e-mails do 
                servidor para seu dispositivo e, por padrão,
                os apaga do servidor
            </li>
            <li>
                <span class="destaque">IMAP(Internet Message Access Protocol):</span> Sincroniza 
                os e-mails diretamente no servidor, permitindo que
                você acesse a mesma caixa de entrada de vários
                dispositivos diferentes(Celular, computador, web)
                sem perder o hitórico.
            </li>
        </ol>

        <h4> A importância da Segurança no SMTP </h4>

        <p>
            Assim como os outros protocolos clássicos da internet. o 
            <span class="destaque">SMTP</span> original foi criado sem criptografia, o que permitia
            que qualquer pessoa interceptasse o tráfego de mensagens
            no meio do caminho.
        </p>

        <p>
            Para resolver isso, a arquitetura de e-mail moderna
            adotou extensões de segurança:
        </p>

        <ol>
            <li>
                <span class="destaque"> SMTP com STARTTLS/SMTPS:</span> Adiciona criptografia <span class="destaque">TLS</span>
                sobre a comunicação <span class="destaque">SMTP</span>(portas <span class="destaque">465</span> ou <span class="destaque">587</span>), 
                embaralhando os dados de autenticação e o corpo da
                mensagem.
            </li>
            <li>
                <span class="destaque"> Autenticação e Proteção contra Spam: </span> Mecanismo como
                <span class="destaque">SPF, DKIM e DMARC</span> são configurados via <span class="destaque">DNS</span> em 
                conjunto com o <span class="destaque">SMTP</span> para provar que o servidor
                que está enviando o e-mail é realmente legítimo,
                evitando fraudes e falsificações de remetente(
                phishing).
            </li>            
        </ol> 
        
        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>
        `
    },

    /******************************************************************************* */

    "pop3": {
        titulo: "Protocolo POP3",
        conteudo: `

        <p>
            O <span class="destaque">POP3</span>(Post Office Protocol version 3) é
            um protocolo padrão da camada de aplicação(modelo TCP/IP e OSI)
            utilizado por clientes de e-mail(como Outlook, Thunderbird ou Apple
            Mail) para <span class="destaque">baixar mensagens de um servidor remoto para um dispositivo
            local</span>.
        </p>

        <p>
            Diferente de protocolos modernos modernos focados em nubem, o POP3
            foi projetado na década de 1980 com a filosofia de <span class="destaque>"baixar e apagar"</span>:
            ele transfere os e-mails para o seu computador ou celular e, por padrão, 
            remove as cópias do servidor para economizar espaço.
        </p>

        <h4> Como funciona na prática(Ciclo de Vida) </h4>

        <p>
            O POP3 opera sobre o protocolo de transporte <span class="destaque">TCP</span>,
            garantindo entrega confiável e ordenada, e passa
            por três estados distintos durante uma sessão:
        </p>

        <ol>
            <li>
                <span class="destaque">Autorização(Authorization)</span>: O cliente
                abre uma conexão TCP como o servidor e envia
                suas credenciais<span class="destaque">(USER e PASS)</span> para autenticação.
            </li>
            <li>
                <span class="destaque">Transação(Transaction)</span>: O cliente
                solicita a lista de mensagens<span class="destaque">(LIST)</span>, baixa os e-mails
                desejados<span class="destaque">(RETR)</span> e marca os que devem ser excluídos<span class="destaque">(DELE)</span>.
                Durante essa fase, o servidor apenas marca os itens
                para exclusão, sem apagá-los imediatamente.
            </li>
            <li>
                <span class="destaque">Atualização(Update)</span>: Ocorre quando o cliente encerra a sessão
                enviando o comando <span class="destaque">QUIT</span>. Nesse momento, o servidor executa 
                definitivamente a exclusão das mensagens marcadas e libera
                os recursos.
            </li>
        </ol>

        <h4> Características Técnicas Principais </h4>

        <ul>
            <li>
                <span class="destaque">Portas Padão:</span>

                <ul>
                    <li>
                        <span class="destaque">Porta 110</span>: Conexão padrão sem criptografia(pode 
                        ser atualizada para criptografia via comando
                        <span class="destaque">STLS / STARTTLS</span>).
                    </li
                    <li>
                        <span class="destaque">Porta 995(POP3S)</span>: Conexão segura criptografada 
                        <span class="destaque">SSL/TLS</span> implícita(padrão exigido pela maioria
                        dos provedores atuais).
                    </li>
                </ul>
            </li>
            <li>
                <span class="destaque">Direção do Tráfego</span>: É um protocolo estritamente de recebimento(
                <span class="destaque">servidor->cliente</span>). para enviar e-mails, o cliente usa outro
                protocolo, o <span class="destaque">SMTP</span>.
            </li>
            <li>
                <span class="destaque">Acesso Offline</span>: Como os arquivos ficam armazenados localmente
                no disco do dispositivo, você pode ler, pesquisar e gerenciar
                e-mails antigos sem precisar de conexão com a internet.
            </li>
            <li>
                Comandos baseados em texto: Assim como o <span class="destaque">HTTP e o SMTP</span>,
                utiliza comandos simples em <span class="destaque">ASCII(STAT, LIST, RETR, DELE,
                NOOP, RSET, QUIT)</span> e resposta curtas iniciadas por <span class="destaque">+OK</span> 
                (sucesso) ou <span class="destaque">-ERR</span>(erro).
            </li>
        </ul>

        <h4> POP3 vs IMAP vs SMTP </h4>


        <ul>
            <li>
                <span class="destaque">POP3:</span>
                <ul>
                    <li>
                        Função -> Recebimento(Download)
                    </li>
                    <li>
                        Onde ficam os e-emails -> Armazenados localmente no dispostivos
                    </li>
                    <li>
                        Mútiplos dispositivos -> Ruim(não sincroniza status de 
                        lido/pastas)
                    </li>
                    <li>
                        Uso de espaço no servidor -> Baixo(apaga após baixar, por
                        padrão)
                    </li>
                    <li>
                        Portas principais -> 110/995(SSL/TLS)
                    </li>
                </ul>
            </li>
            <li>
                <span class="destaque">IMAP:</span>
                <ul>
                    <li>
                        Função -> Recebimento(Sincronização)
                    </li>
                    <li>
                        Onde ficam os e-emails -> Mantidos no servidor remoto
                    </li>
                    <li>
                        Mútiplos dispositivos -> Excelente(sincroniza tudo em 
                        tempo real)
                    </li>
                    <li>
                        Uso de espaço no servidor -> Alto(acumula mensagens na
                        nuvem)
                    </li>
                    <li>
                        Portas principais -> 143/993(SSL/TLS)
                    </li>
                </ul>
            </li>
            <li>
                <span class="destaque">SMTP:</span>
                <ul>
                    <li>
                        Função -> Envio e encaminhamentos
                    </li>
                    <li>
                        Onde ficam os e-emails -> Apenas transita até o destino
                    </li>
                    <li>
                        Mútiplos dispositivos -> N/A
                    </li>
                    <li>
                        Uso de espaço no servidor -> N/A
                    </li>
                    <li>
                        Portas principais -> 25/465/587
                    </li>
                </ul>
            </li>         
        </ul> 

        <h4> Vantagens e Desvantagens </h4>

        <ul>
            <li>
                <span class="destaque">Vantagens:</span>
                <ul>
                    <li>
                        Privacidade e backup local: Você detém a posse física dos 
                        arquivos (como .pst ou .mbox), sem depender de servidor
                        de terceiros para acessar seu histórico.
                    </li>
                    <li>
                        Economia de armazenamento na nuvem: Ideal para servidores
                        corporativos antigos ou planos de hospedagem com limite
                        rígido de espaço em disco.
                    </li>
                    <li>
                        Leitura offline completa: Todo o conteúdo e anexo já
                        estaõ baixados na máquina.
                    </li>
                </ul>
            </li>
            <li>
                <span class="destaque">Desvantagens:</span>
                <ul>
                    <li>
                        Falta de sincronização: Se você ler ou apagar um 
                        e-mail no computador, ele continuará aparecendo
                        como "não lido" se você abrir a conta no celular
                        (caso tenha configurado o cliente para manter
                        uma cópia no servidor).
                    </li>
                    <li>
                        Risco de perda de dados: Se o dispositivos local
                        sofrer falha de hardware sem backup, todos os
                        e-mails baixados e apagados do servidor serão
                        perdidos permantemente.
                    </li>
                </ul>
            </li>
        </ul>
        
        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>
        `
    },

    /************************************************************************ */

    "imap": {
        titulo: "Protocolo IMAP",
        conteudo: `

        <p>
            O <span class="destaque">IMAP</span>(Internet Message Access Protocol ou
            Protocolo de Acesso a Mensagens da Internet) é o protocolo da <span class="destaque">Camada
            de Aplicação</span> responsável por <span class="destaque">acessar, gerenciar e sincronizar e-mails
            diretamente no servidor</span>.
        </p>

        <p>
            Enquanto o <span class="destaque">SMTP</span> cuida do envio da mensagem, o <span class="destaque">IMAP</span> é o protocolo
            que permite que você leia e organize os seus e-mails mantendo tudo
            centralizado e sincronizado na nuvem.
        </p>

        <h4> O Problema Histórico: <span class="destaque">IMAP vs POP3</span> </h4>

        <p>
            Para entender a genialidade do <span class="destaque">IMAP</span>, vale a pena compará-lo
            com seu antecessor direto, o <span class="destaque">POP3</span>(Post Office Protocol):
        </p>

        <ul>
            <li>
                <span class="destaque">Como o POP3 funcionava(e ainda funciona em casos específicos)</span>:
                Quando seu aplicativo de e-mail se conectava via POP3, ele
                <span class="destaque">baixava</span> as mensagens para seu dispositivos físico(computador
                ou celular) e, por padrão, <span class="destaque">apagava cópias do servidor</span>.
                Isso significava que se você lesse o e-mail no computador
                do trabalho, ele sumia do seu celular ou da versão web,
                gerando uma grande fragmentação.
            </li>
            <li>
                <span class="destaque">Como o IMAP resolve isso</span>: O IMAP foi criado para a era
                dos múltiplos dispositivos. <span class="destaque">Ele mantém os e-mails
                armazenados no servidor</span>, permitindo que vários 
                aparelhos diferentes acessem a mesma caixa postal
                simultaneamente.
            </li>
        </ul>

        <h4> Como o <span class="destaque">IMAP</span> Funciona na Prática? </h4>

        <p>
            Com o IMAP, existe uma <span class="destaque">sincronização bidirecional
            constante</span> entre o seu dispositivo(cliente)
            e o servidor de e-mail:
        </p>

        <ol>
            <li>
                <span class="destaque">Estado centralizado</span>: As mesmas, pastas(Caixas de
                entrada, Enviados, Lixeira, Pastas personalizadas)
                e os estados dos e-mails(lido, não lido, marcado com 
                estrela) ficam salvos no servidor.
            </li>
            <li>
                <span class="destaque">Atualização em tempo real</span>: Se você recebe uma mensagem
                no celular e a marca como "lida", essa alteração é
                enviada imediatamente ao servidor. Quando você abre o
                notebook, o e-mail tembém aparecerá como lido.
            </li>
            <li>
                <span class="destaque">Gerenciamento remoto</span>: Se você apagar um e-mail no 
                tablet, ele é apagado do servidor e desaparece de
                todos os outros aparelhos conectados.
            </li>
        </ol>

        <h4> Portas e Segurança </h4>


        <ul>
            <li>
                <span class="destaque">Porta padrão(não segura)</span>: Porta 143(envia dados
                em texto plano).
            </li>
            <li>
                <span class="destaque">Porta segura(IMAPS)</span>: Porta 993, que utiliza
                criptografia <span class="destaque">TLS/SSL</span> sobre o canal <span class="destaque">IMAP</span>, garantindo
                qua suas credenciais de login e o conteúdo das
                suas mensagens não possam ser interceptados na rede.
            </li>

        <h4> Resumo das Aplicações </h4>

        <ul>
            <li>
                <span class="destaque">Para que serve</span>: Acessar a mesma conta de e-mail em
                múltiplos dispositivos(smartphone, tablet, notbook
                e webmail) mantendo todo o histórico perfeitamente
                sincronizado.
            </li>
            <li>
                <span class="destaque">Cenário atual</span>: É o padrão absoluto de mercado para 
                serviços de e-mail corporativo e pessoal(como Gmail,
                Outlook e servidores de hospedagem próprios), tornando
                o POP3 obsoleto para grande maioria dos usuários modernos.
            </li>
        </ul>
        
        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>
        `
    },

    /************************************************************************ */

    "dns": {
        titulo: "Protocolo DNS",
        conteudo: `

        <p>
            O <span class="destaque">DNS</span>(Domain System ou Sistema de Nomes de Domínio) é 
            frequentemente chamado de <span class="destaque">"a agenda telefônica da internet"</span>. Ele é o protocolo
            da <span class="destaque">Camada de Aplicação</span> responsável por traduzir nomes de domínio fáceis de
            lembrar(como google.com ou youtube.com) em <span class="destaque">endereços IP</span> numériocos que os
            computadores realmente usam para se encontrar na rede(como 142.250.190.46).
        </p>

        <h4> Por que o <span class="destaque">DNS</span> é necessário? </h4>

        <p>
            Os computadores, roteadores e servidores conversam ente si
            usando <span class="destaque">endereços IP</span>(como o IPv4 192.0.2.1 ou IPv6 2001:db8::).
            No entanto, seria humanamente impossível memorizar
            sequências numéricas para cada site de visitamos diariamente.
        </p>

        <p>
            O DNS resolve esse problema criando uma camada de abstração:
            você digita o nome amigável no navegador e o DNS faz a ponte 
            para descobrir o número IP exato por trás daquele site.
        </p>

        <h4> Como o <span class="destaque">DNS</span> Funciona?(o Passo a Passo) </h4>

        <p>
            Quando voce digita exemplo.com na barra de endereço e
            aperta Enter, ocorre uma verdadeira "investigação em 
            cadeia" nos bastidores em frações de segundo:
        </p>

        <ol>
            <li>
                <span class="destaque">Consulta Local(Cache)</span>: O seu computador verifica se já
                lembra do IP desse site recetemente salvo na memória(cache).
                Se não encontrar, pergunta para o roteador ou para o 
                servidor DNS da sua operadora.
            </li>
            <li>
                <span class="destaque">Servidor Raiz(Root Server)</span>: Se o servidor DNS local não
                sabe a resposta, ele recorre a um dos 13 servidores rais
                distribuídos pelo mundo. O servidor raiz diz: "Não sei
                o IP exato mais sei quem cuida da extensão .com"
            </li>
            <li>
                <span class="destaque">Servidor de Domínio de Nível Superior(TLD Server)</span>:
                O Sistema consulta o servidor responsável pela extensão(
                .com, .br, .org, etc.). Ele responde: "Não sei o site
                todo, mais o domínio exemplo.com é gerenciado por este
                servidor especifico".
            </li>
            <li>
                <span class="destaque">Servidor Autoritativo(Authoritative Name Server)</span>: Por
                por fim, o sistema pergunta ao servidor definitivo do 
                dono do site(o servidor autoritativo). Ele retorna
                o <span class="destaque">endereço IP correto</span>.
            </li>
            <li>
                <span class="destaque">Conexão Estabelecida</span>: Com o IP em mãos, o seu navegador
                finalmente consegue iniciar a conexão HTTP/HTTPS com
                o servidor do site
            </li>
        </ol>

        <p>
            (Todo esse caminho complexo geralmente acontece em 
            <span class="destaque">menos de 50 milissegundos</span> graças ao sistemas de cache).
        </p>

        <h4> Os Principais Tipos de Registros <span class="destaque">DNS</span> </h4>

        <p>
            Dentro de um painel de domínio, existem diferentes tipos
            de registros(records) que dizem ao DNS o que fazer
            com cada informação:
        </p>

        <ul>
            <li>
                <span class="destaque">Registro A</span>: Aponta um domínio para um endereço <span class="destaque">IPv4</span>(
                ex: exemplo.com -> 192.0.2.1).
            </li>
            <li>
                <span class="destaque">Registro AAAA</span>: Aponta um domínio para um endereço <span class="destaque">IPv6</span>(
                endereços mais longos e modernos).
            </li>
            <li>
                <span class="destaque">Registro CNAME(Canonical Name)</span>: Cria um "apelido"
                para um domínio(ex: fazer com que [www.exemplo.com](
                https://www.exemplo.com) aponte para exemplo.com).
            </li>
            <li>
                <span class="destaque">Registro MX(Mail Exchange)</span>: Indica qual é o servidor 
                responsável por receber os e-mail daquele domínio(
                essencial para funcionamento do SMTP que vimos antes).
            </li>
            <li>
                <span class="destaque">Registro TXT</span>: Armazena textos arbitrários, muito usados
                para validação de segurança e configuração ante-spam(
                como SPF, DKIM e DMARC).
            </li>
        </ul>

        <h4> A Importância da Segurança no <span class="destaque">DNS(DNSSEC) e DNS</span> Alternativos </h4>

        <p>
            O protocolo DNS tradicional foi criado sem criptografia, o que
            abria brechas para ataques perigosos, como o DNS Spoofing(
            onde um invasor desviava o tráfego do usuário para um site
            falso idêntico).
        </p>

        <p>
            Para mitigar issom, surgiram melhorias:
        </p>

        <ul>
            <li>
                <span class="destaque">DNSSEC</span>: Adiciona assinatura criptográfica aos registros DNS
                para garantir que a resposta veio de uma fonte legítima e não
                foi adulterada.
            </li>
            <li>
                <span class="destaque">DoH e DoT(DNS over HTTPS/DNS over TLS)</span>: Criptografam as 
                consultas DNS para que nem mesmo a sua operadora de
                internet consiga ver quais sites você esta acessando.
            </li>
            <li>
                <span class="destaque">Servidores DNS Públicos</span>: Você pode substituir o DNS
                padrão da sua operadora por serviçoes mais rápidos
                e seguros, como o <span class="destaque">Cloudflare</span>(1.1.1.1), <span class="destaque">Google</span>(
                8.8.8.8) ou <span class="destaque">Quad9</span>(9.9.9.9).
            </li>
        </ul>       
        
        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>
        `
    },


    /************************************************************************ */

    "dhcp": {
        titulo: "Protocolo DHCP",
        conteudo: `

        <p>
            O <span class="destaque">DHCP</span>(Dynamic Host Configuration ou Protocolo de Configuração
            Dinâmica de Host) é o protocolo de rede que <span class="destaque">atribui automaticamente configurações
            de rede</span>(como endereço IP, máscara de sub-rede, gateway padrão 
            servidores DNS) aos dispositivos assim que eles entram em uma rede.
        </p>

        <p>
            Imagine ter que configurar manualmente um endereço IP,
            máscara de gateway toda vez que seu smartphone conecta Wi-Fi
            de casa, do trabalho ou de uma cafeteria - além de 
            cansativo, isso causaria conflitos constantes de IP.
            O DHCP automatiza esse processo de forma transparente
            e dinâmica, operando tipicamente sobre <span class="destaque">UDP</span>(portas <span class="destaque">67</span>
            para o servidor e <span class="destaque">68</span> para o cliente).
        </p>

        <h4> O que o <span class="destaque">DHCP</span> entrega ao dispositivo? </h4>

        <p>
            Quando um host(computador, celular, impressora, notebook)
            solicita configuração via DHCP, ele geralmente recebe um
            pacote completo de parâmetros:
        </p>

        <ul>
            <li>
                <span class="destaque">Endereço IP</span>: A identificação lógica do dispositivo nquela
                rede local(ex: 192.168.1.42).
            </li>
            <li>
                <span class="destaque">Máscara de Sub-rede</span>: Define qual parte do IP corresponde
                à rede e qual parte identifica o host(ex: 255.255.255.0 ou /24).
            </li>
            <li>
                <span class="destaque">Gateway Padrão(Default Gateway)</span>: Geralmente o IP do roteador
                local (ex: 192.168.1.1), por onde saem os pacotes destinados
                a outras redes ou à internet.
            </li>
            <li>
                <span class="destaque">Servidores DNS</span>: Os endereços dos servidores que farão a resolução
                de nomes de domínio(que vimos no passo anterior).
            </li>
            <li>
                <span class="destaque">Tempo de Concessão(Lease Time)</span>: Por quanto tempo aquele IP
                fica reservado para o dispositivo antes de precisar
                ser renovado.
            </li>
        </ul>

        <h4> Como o <span class="destaque">DHCP</span> funciona: O processo <span class="destaque">DORA</span> </h4>

        <p>
            A negociação clássica no DHCPv4 segue quatro etapas
            conhecidas pela sigla <span class="destaque">DORA</span>:
        </p>

        <ol>
            <li>
                <span class="destaque">Discover(Descoberta)</span>: O dispositivo recém-conectado
                não tem IP ainda. Ele envia uma mensagem de broadcast
                na rede local perguntando: "Existe algum servidor
                DHCP por aqui?".
            </li>
            <li>
                <span class="destaque">Offer(Oferta)</span>: Um servidor DHCP(muitas vezes o
                próprio roteador doméstico ou um servidor dedicado
                na rede corporativa) responde oferecendo um IP 
                disponível pool(faixa de IPs), junto com máscara,
                gateway e tempo de concessão.
            </li>
            <li>
                <span class="destaque">Request(Solicitação)</span>: O cliente aceita a oferta e 
                envia um broadcast informando que deseja utilizar
                aquele IP oferecido(útil também se mais de um
                servidor DHCP tiver respondido).
            </li>
            <li>
                <span class="destaque">Acknowledge(Confirmação / ACK)</span>: O servidor DHCP
                confirma formalmente a concessão e registra o
                vínculo entre o endereço <span class="destaque">MAC</span> do cliente e o <span class="destaque">IP</span>
                entregue durante o lease time.
            </li>
        </ol>

        <h4> DHCP Dinâmico vs Reserva de IP(DHCP Estático) </h4>

        <ul>
            <li>
                <span class="destaque">Alocação Dinâmica</span>: O IP é emprestado por um tempo
                determinado(lease time). Se o dispositivo desconec-
                ta e o prazo expira, o IP pode voltar ao conjunto
                disponível para outro aparelho.
            </li>
            <li>
                <span class="destaque">Reserva / IP Fixo via DHCP(Static DHCP)</span>: O 
                administrador associa permanetemente um endereço
                <span class="destaque">MAC</span> específico a um determinado <span class="destaque">IP</span> no servidor
                DHCP. Assim, o dispositivo sempre recebe o mesmo
                IP automaticamente - muito útil para servidores
                locais, impressoras de rede ou câmeras IP sem
                precisar configurar manualmente em cada máquina.
            </li>
        </ul> 
        
        <h4> Resumo na Prática </h4>

        <ul>
            <li>
                <span class="destaque">Camada / Transporte</span>: Funciona no nível de configuração
                de host/aplicação utilizando <span class="destaque">UDP</span>(portas 67 e 68).
            </li>
            <li>
                <span class="destaque">Benefício central</span>: Evita conflitos de endereço IP,
                reduz erros humanos e facilita a entrada e saída de
                dispositivos móveis em redes <span class="destaque">LAN e WLAN</span>.
            </li>
        </ul>
        
        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>
        `
    },


    /************************************************************************ */

    "tcp": {
        titulo: "Camada TCP",
        conteudo: `

        <p>
            O <span class="destaque">TCP</span>(Transmission Control Protocol ou Protocolo de
            transmissão) é o protocolo da <span class="destaque">Camada de Transporte</span> (no modelo TCP/IP e na 
            camada 4 do modelo OSI) projetado para entregar dados de forma
            <span class="destaque">confiável, ordenada e orientada à conexão</span>.
        </p>

        <p>
            Enquanto a camada de Rede(IP) cuida de levar pacotes de 
            endereço IP a outro sem garantir que todos cheguem in-
            tactos ou na ordem certa. o TCP atua como o "gerente
            de qualidade" da entrega: ele assegura que o arquivo,
            página web ou mensagem chegue completa e remontada
            corretamente no destino.
        </p>


        <img src="img/tcpxudp.png" class="img-tcp" />

        <h4> Como o TCP Funciona? </h4>

        <p>
            1. Conexão Orientada a Three-Way Handshake
            Antes de enviar dados de aplicação, o TCP estabelece uma
            conexão lógica entre cliente e servidor por meio do <span class="destaque">aperto
            de mão de três vias(Three-Way Handshake)</span>:
        </p>

        <ol>
            <li>
                <span class="destaque">SYN</span>: O cliente envia um segmento com a flag <span class="destaque">SYN</span>(Synchronize)
                e um número de sequência inicial para iniciar a conversa.
            </li>
            <li>
                <span class="destaque">SYN-ACK</span>: O servidor responde com <span class="destaque">SYN e ACK</span>(Acknowledge),
                confirmando que recebeu o pedido e enviando seu próprio
                número de sequência inicial.
            </li>
            <li>
                <span class="destaque">ACK</span>: O cliente envia um <span class="destaque">ACK</span> final confirmando a conexão.
                A partir daqui, a troca de dados ocorre.
            </li>
        </ol>

        <p>
            Para encerrar a conexão de forma limpa, o protocolo
            utiliza trocas com as flags <span class="destaque">FIN</span>(Finish) e <span class="destaque">ACK</span>(ou RST
            em resets abruptos).
        </p>

        <h4> Confiabilidade, Números de Sequência e Confirmações(<span class="destaque">ACK</span>) </h4>

        <p>
            O <span class="destaque">TCP</span> trata os dados da aplicação como um fluxo contínuo
            de bytes e os divide em segmentos. Cada byte/segmento
            recebe um <span class="destaque">Número de Sequência</span>(Sequence Number) e o 
            recptor devolve <span class="destaque">Números de Confirmação</span>(Acknowledgment
            Number):
        </p>

        <ul>
            <li>
                <span class="destaque">Retransmissão</span>: Se um segmento se perder ou demora
                além do timeout, o remetente reenvia o trecho não
                confirmado.
            </li>
            <li>
                <span class="destaque">Reordenação</span>: Se os segmentos chegarem fora de ordem
                pela rede, o TCP os reorganiza antes de entregar
                à camada de Aplicação.
            </li>
            <li>
                <span class="destaque">Integridade</span>: O campo <span class="destaque">Checksum</span> ajuda a detectar 
                corrupção de dados no cabeçalho ou no payload.
            </li>
        </ul>

        <h4> Controle de Fluxo e Controle de Congestionamento </h4>

        <p>
            Para não sobrecarregar nem o receptor nem a rede
            intermediária, o TCP gerencia o ritmo de envio:
        </p>

        <ul>
            <li>
                <span class="destaque">Controle de Fluxo(Window Size)</span>: O receptor informa
                quanta memória de buffer disponível ele tem para
                receber dados, evitando estourar sua capacidade de
                processamento.
            </li>
            <li>
                <span class="destaque">Controle de Congestionamento</span>: O remetente ajusta sua
                taxa de envio ao detectar perdas de pacotes ou 
                aumento de RTT, reduzindo o tráfego em momentos de 
                congestionamento na rede(com algoritmos como Slow
                Start, Congestion Avoidance, Fast Retransmit e
                Fast Recovery).
            </li>
        </ul> 
        
        <h4> Portas e Cabeçalho do Segmento TCP </h4>

        <p>
            O TCP usa <span class="destaque">portas de 16 bits</span>(de 0 a 65535) para identificar qual
            processo ou serviço de rede deve receber os dados dentro de um
            mesmo host - por exemplo, porta 80(HTTP), 443(HTTPS), 21(FTP)
            ou 22(SSH).
        </p>

        <h4> Quando Usar TCP(e Quando Evitar) </h4>

        <ul>
            <li>
                <span class="destaque">Ideal para</span>: Navegação web(HTTP/HTTPS), tranferência de 
                arquivos(SFTP/FTP), e-mails(SMTP/IMAP), acesso remoto(SSH) 
                e APIs onde a perda ou troca de ordem de um único byte
                compromente o resultado.
            </li>
            <li>
                <span class="destaque">Trade-off</span>: A confiabilidade exige overhead(cabeçalho maior,
                controle de estado, confirmação e eventuais retransmissões),
                o que adiciona latência em cenários sensíveis ao tempo real.
                É exatamente esse custo que motiva o uso do <span class="destaque">UDP</span> em aplicações
                que priorizam baixa latência sobre entrega garantida.
            </li>
        </ul>
        
        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>
        `
    },

    /************************************************************************ */

    "udp": {
        titulo: "Camada UDP",
        conteudo: `

        <p>
            O <span class="destaque">UDP</span>(User Datagram Protocol ou Protocolo de
            Datagrama de Usuário) é o protocolo da <span class="destaque">Camada de Transporte</span>(Camada
            4 do OSI/Transporte no TCP/IP) focado em <span class="destaque">velocidade, simplicidade
            e baixa latência</span>, em vez de confiabilidade garantida.
        </p>

        <p>
            Enquanto o TCP funciona como um serviço de entrega registrada
            com confirmação e reenvio, o UDP age como o envio de <span class="destaque">datagrama</span>
            independentes("dispara e segue"): ele envia os dados sem 
            estabelecer conexão prévia, sem exigir confirmação de 
            recebimento(ACK) e sem retransmitir pacotes perdidos.
        </p>

        <h4> Como o UDP Funciona? </h4>

        <p>
            <span class="destaque">1. Sem Conexão(Connectionless)</span>
            O UDP não realiza Three-Way Handshake(<span class="destaque">SYN, SYN-ACK, ACK</span>) antes de 
            transmitir. O remetente simplesmente monta o <span class="destaque">datagrama UDP</span> e o 
            envia pela camada de Rede(IP) assim que há dados prontos. Isso
            elimina o atraso inicial de estabelecimento de conexão e reduz
            o estado mantido nos hosts.
        </p>

        <h4> Sem Garantia de Entrega, Ordem ou Retransmissão </h4>

        <ul>
            <li>
                <span class="destaque">Perda de pacotes</span>: Se um datagrama se perder no caminho
                ou for descartado por congestionamento, o UDP não o reenvia.
            </li>
            <li>
                <span class="destaque">Fora de ordem</span>: Datagramas diferentes podem seguir rotas
                distintas e chegar fora de sequência; o UDP não reordena
                automaticamente.
            </li>
            <li>
                <span class="destaque">Sem controle de fluxo/congestionamento</span>: O UDP não regula
                o ritmo de envio com base no buffer do receptor ou 
                no congrestionamento da rede(a menbos que a própria
                aplicação implemente algum mecanismo próprio).
            </li>
        </ul>

        <h4> Multiplexação por Portas e Verificação Básica </h4>

        <p>
            Assim como o TCP, o UDP usa <span class="destaque">Portas de 16 bits</span>(0 a 65535)
            para direcionar cada datagrama ao processo/aplicação correta
            no destino, e inclui um campo <span class="destaque">Checksum</span>(opcional no IPv4,
            obrigatório no IPv6) para detectar alterações acidentais
            nos bits do datagrama.
        </p>

        <h4> Cabeçalho Minimalista do Datagrama UDP </h4>

        <p>
            Uma das grandes vantagens do UDP é seu overhead 
            baixíssimo: o cabeçalho tem apenas <span class="destaque">8 bytes</span>(contra
            20 a 60 bytes do TCP), composto por apenas 4 campos
            de 16 bits:
        </p>

        <ul>
            <li>
                <span class="destaque">Source Port(16 bits)</span>: Porta de origem.
            </li>
            <li>
                <span class="destaque">Destination Port(16 bits)</span>: Porta de destino.
            </li>
            <li>
                <span class="destaque">Length(16 bits)</span>: Tamanho total do datagrama UDP(cabeçalho
                + dados da aplicação).
            </li>
            <li>
                <span class="destaque">Checksum(16 bits)</span>: Soma de verificação para detcção de erros.
            </li>
        </ul>

        <h4> Quando Usar UDP(e Como Ele Aparece na Prática) </h4>

        <p>
            O UDP brilha quando <span class="destaque">dados atrasados perdem o valor</span> e 
            retransmir um pacote antigo atrapalharia mais do que 
            simplesmente seguir com o próximo:
        </p>

        <ul>
            <li>
                <span class="destaque">Jogos online em tempo real</span>: A posição de um jogador
                daqui a 200ms vale muito mais do que retransmitir
                onde ele estava há meio segundo.
            </li>
            <li>
                <span class="destaque">VoIP e chamadas de vídeo/áudio</span>: Em conversas ao vivo,
                retransmissões causam pausas e eco; perder um pequeno
                trecho imperceptível é preferível a travar o fluxo.
            </li>
            <li>
                <span class="destaque">Streaming ao vivo/mídia em tempo real</span>: Prioriza continuidade
                e baixa latência.
            </li>
            <li>
                <span class="destaque">DNS e DHCP</span>: Consultas rápidas de resolução de nomes
                (DNS tradicional) e concessão de IP(DHCP) se beneficiam
                de trocas curtas sem o custo de abrir e fechar conexão TCP.
            </li>
            <li>
                <span class="destaque">QUIC e HTTP/3</span>: Protocolos modernos como o <span class="destaque">QUIC</span>(base
                do <span class="destaque">HTTP/3</span>) rodam <span class="destaque">sobre UDP</span> para reduzir a latência de
                conexão e evitar o bloqueio de cabeça de linha(
                head-of-line blocking) do TCP, implementando confiabilidade
                e controle de congestionamento de forma mais ágil
                no espaço de aplicação/transporte moderno.
            </li>
        </ul> 
        
        <h4> TCP vs UDP em Resumo </h4>

        <table>
            <tr>
                <td> <span class="destaque">Característica</span> </td>
                <td> <span class="destaque">TCP</span> </td>
                <td> <span class="destaque">UDP</span> </td>
            </tr>
            <tr>
                <td> Conexão </td>
                <td> Orientado à conexão(Three-Way Handshake) </td>
                <td> Sem conexão(Connectionless) </td>
            </tr>
            <tr>
                <td> Confiabilidade </td>
                <td> Alta(ACK, retransmissão, ordenação) </td>
                <td> Baixa/Best-effort(sem garantia de entrega/ordem) </td>
            </tr>
            <tr>
                <td> Cabeçalho </td>
                <td> 20 a 60 bytes </td>
                <td> 8 bytes fixos </td>
            </tr>
            <tr>
                <td> Controle de fluxo/congestionamento </td>
                <td> Sim </td>
                <td> Não(fica a cargo da aplicação, se necessário) </td>
            </tr>
            <tr>
                <td> Letência/Overhead </td>
                <td> Maior overhead e atraso inicial </td>
                <td> Menor overhead e menor latência </td>
            </tr>
            <tr>
                <td> Exemplos de uso </td>
                <td> HTTP/HTTPS, FTP/SFTP, SMTP, IMAP, SSH </td>
                <td> Jogos online, VoIP, vídeo ao vivo, DNS, QUIC </td>
            </tr>
        </table>
        
        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>
        `
    },


    /************************************************************************ */

    "ipv4": {
        titulo: "Camada IPv4",
        conteudo: `

        <p>
            O <span class="destaque">IPv4</span>(Internet Protocol Version 4) é o protocolo
            clássico da <span class="destaque">Camada de Rede</span>(Camda 3 do OSI/Camada de internet do TCP/IP)
            responsável pelo <span class="destaque">endereçamento lógico e pelo roteamento
            de pacotes</span> entre redes distintas.
        </p>

        <p>
           Ele opera no modelo best-effort(melhor esforço possível),
           sem estabelecer conexão nem garantir entrega ou ordem por si
           só - essas garantias ficam a cargo de camadas superiores
           (como o TCP). Ainda assim, é o IPv4 que define <span class="destaque">onde está
           a rede de origem, onde fica a rede de destino e como
           os roteadores encaminham cada pacote</span> até o alvo.
        </p>

        <h4> Como Funciona o Endereçamento <span class="destaque">IPv4</span>? </h4>

        <p>
            Um endereço IPv4 tem <span class="destaque">32 bits</span>, normalmente divididos em 
            <span class="destaque">4 octetos</span>(blocos de 8 bits) e representados em <span class="destaque">notação
            decimal pontuada</span> - por exemplo: <span class="destaque">192.168.10.25</span> como 
            cada octeto vai de 0 a 255 (2^8=256 valores), o espaço
            total do <span class="destaque">IPv4 e de 2^32</span>, o que dá cerca de <span class="destaque">4,29
            bilhões de endereços</span> teóricos.
        </p>

        <p>
            Todo endereço IPv4 se divide logicamente em duas
            partes, separadas pela <span class="destaque">máscara de sub-rede</span>(ou
            notação <span class="destaque">CIDR</span>, como <span class="destaque">/24</span>):
        </p>

        <ul>
            <li>
                <span class="destaque">Porção de Rede(Network)</span>: Identifica qual sub-rede específica
                o dispositivo integra.
            </li>
            <li>
                <span class="destaque">Porção de Host(Host)</span>: Identifica o dispositivo(interface)
                dentro daquela rede.
            </li>
        </ul>

        <img src="img/ipv4.png" class="img-ipv4" />

        <h4> IPs Públicos, IPs Privados e o Esgatamento do <span class="destaque">IPv4</span> </h4>

        <p>
            Com 4,29 bilhões de endereços a bilhões de distpositivos
            conectados, os endereços públicos globais se esgotaram.
            Para contornar isso, a arquitetura IPv4 apoia-se em 
            faixas <span class="destaque">privadas</span>(reservadas pela RFC 1918 para redes
            locais e não roteáveis diretamente na Internet
            pública) e em <span class="destaque">NAT</span>(Network Adress Translation):
        </p>

        <ul>
            <li>
                <span class="destaque">10.0.0.0</span> a <span class="destaque">10.255.255.255(/8)</span>.
            </li>
            <li>
                <span class="destaque">172.16.0.0</span> a <span class="destaque">72.31.255.255(/12)</span>.
            </li>
            <li>
                <span class="destaque">192.168.0.0</span> a <span class="destaque">192.168.255.255(/16)</span>.
            </li>
        </ul>

        <p>
            Na prática, sua casa ou escritório usa um IP privado(
            como 192.168.0.15), e o roteador traduz esse endereço
            para IP público da conexão ao conversar com a internet.
            Além disso, em uma sub-rede IPv4 clássica, o <span class="destaque">primeiro
            IP</span> constuma representar o endereço de rede e o 
            <span class="destaque">último IP</span> constuma ser o endereço de broadcast(envio
            para todos os hosts daquela sub-rede).
        </p>

        <h4> Campos Essenciais do Cabeçalho <span class="destaque">IPv4</span> </h4>

        <p>
            O cabeçalho IPv4 padrão tem <span class="destaque">20 bytes</span>(podendo
            chegar a 60 bytes com opções). Alguns campos
            são fundamentais para o funcionamento da rede:
        </p>

        <ul>
            <li>
                <span class="destaque">Versão(VER)</span>: Indica a versão do protocolo(4 para <span class="destaque">IPv4</span>).
            </li>
            <li>
                <span class="destaque">Tempo de Vida(TTL - Time to Live)</span>: Um contador decres-
                cente que evita que pacotes fiquem girando enternamente
                em loops de roteamento. A cada roteador(hop) que o 
                pacote atravessa, o TTL diminui em 1; se chegar a 0,
                o roteador descarta o pacote e pode retornar uma 
                mensagem ICMP de tempo esgotado.
            </li>
            <li>
                <span class="destaque">Protocolo</span>: Identifica qual protocolo da camada superior
                está encapsulado no pacote - por exemplo, 6 para <span class="destaque">TCP</span>,
                17 para <span class="destaque">UDP</span> ou 1 para <span class="destaque">ICMP</span>.
            </li>
            <li>
                <span class="destaque">Endereçamento de Origem e Destino</span>: Os dois endereços IPv4
                de 32 bits que guiam o roteamento ponta a ponta.
            </li>
            <li>
                <span class="destaque">Fragmentação(Identificação, Flags, Deslocamento)</span>:
                Permite que pacotes maiores que o <span class="destaque">MTU</span>(Maximum 
                Transmission Unit) de um enlace sejam divididos
                em fragamentos menores e remontados no destino.
            </li>
        </ul> 

        <img src="img/ipv42.png" class="img-ipv4" />
        
        <h4> Limitações do <span class="destaque">IPv4</span> </h4>

        <ul>
            <li>
                <span class="destaque">Escassez de endereços</span>: 32 bits já não atendem nativamente
                à escala global sem <span class="destaque">NAT e CGNAT</span>(que adicionam complexidade
                e podem dificultar conexões diretas).
            </li>
            <li>
                <span class="destaque">Cabeçalho e roteamento mais pesados</span>: Inclui cheksum de 
                cabeçalho(recalculado a cada salto) e suporte â fragmentação
                em roteadores intermediários, direferentemente do <span class="destaque">IPv6</span>,
                que simplifica o cabeçalho e amplia o espaço de endereçamento
                para 128 bits.
            </li>
        </ul>

        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>
        `
    },


    /************************************************************************ */

    "ipv6": {
        titulo: "Camada IPv6",
        conteudo: `

        <p>
            O <span class="destaque">IPv6</span>(Internet Protocol Version 6) é a evolução moderna
            do protocolo da <span class="destaque">Camada de Rede</span>(Camada 3 do OSI/Camada de Internet
            do TCP/IP), criado para resovlver o esgotamento de endereços do
            IPv4 e modernizar o roteamento e a autoconfiguração na rede.
        </p>

        <p>
           Enquanto o IPv4 usa endereços de 32 bits em decimal pontuado, o IPv6
           expande o espaço de endereçamento para <span class="destaque">128 bits</span> - oferencendo
           cerca de <span class="destaque">3,4 x 10^38</span> endereços(mais de 340 undecilhões), o 
           suficiente para atribuir endereços globais únicos a bilhões
           de dispositivos sem depender do NAT tradicional como solução
           de escassez.
        </p>

        <h4> Formato e Regras de Abreviação do Endereço <span class="destaque">IPv6</span> </h4>

        <p>
            Um endereço IPv6 completo tem <span class="destaque">128 bits</span>, divididos
            em <span class="destaque">8 blocos (hextetos) de 16 bits</span> cada, escrito em 
            <span class="destaque">hexadecimal</span> e separados por dois-pontos(:). Exemplo
            completo: 
        </p>

        <p>
            <span class="destaque">2001:0db8:85a3:0000:0000:8a2e:0370:7334</span>
        </p>

        <p>
            Para facilitar a leitura e a escrita, existem duas
            regras de abreviação:
        </p>

        <ol>
            <li>
                <span class="destaque">Zero à esquerda em cada bloco podem ser omitidos</span>:
                0db8 vira db8, 0000 vira 0, e 0370 vira 370.
            </li>
            <li>
                <span class="destaque">Uma única sequência continua de blocos compostos
                apenas por zeros pode ser substituida por :::</span> no 
                exemplo acima, o trecho :0000:0000 pode virar ::,
                resultando em 2001:db8:85a3::8a2e:370:7334 O
                :: só pode aparecer uma vez por endereço para não
                gerar ambiguidade na contagem dos blocos.
            </li>
        </ol>

        <img src="img/ipv6.png" class="img-ipv6" />

        <h4> Cabeçalho Simplificado e Principais Mudanças em Relação ao <span class="destaque">IPv4</span> </h4>

        <p>
            Apesar de os endereços serem muito maiores, o <span class="destaque">cabeçalho
            fixo do IPv6 tem 40 bytes</span> e é mais enxuto e previsível
            que o do IPv4: ele remove campos redundantes ou custosos
            durante o encaminhamento como o  Header Cheksum (já 
            coberto nas camadas de enlace e transporte/aplicação)
            e o campo de opções de tamanho variáveis, substituido
            por Extension Headers quando necessário.
        </p>

        <p>
            Alguns campos e conceitos importantes do IPv6:
        </p>

        <ul>
            <li>
                <span class="destaque">Versão(Version)</span>: Valor 6 para identificar IPv6.
            </li>
            <li>
                <span class="destaque">Classe de Tráfego(Traffic Class) e Rótulo de Fluxo(Flow Label)</span>:
                Facilitam a priorização de pacotes e o tratamento de fluxos 
                contínuos(como áudio, vídeo e tempo real).
            </li>
            <li>
                <span class="destaque">Tamanho da Carga Útil(Payload Length)</span>: Indica o tamanho
                dos dados que seguem o cabeçalho fixo de 40 bytes.
            </li>
            <li>
                <span class="destaque">Próximo Cabeçalho(Next Header)</span>: Indica o tipo do cabeçalho
                seguinte(por exemplo, TCP, UDP, ICMPv6 ou um cabeçalho
                de exteensão).
            </li>
            <li>
                <span class="destaque">Limite de Saltos(Hop Limit)</span>: Cumpre o mesmo papel do 
                <span class="destaque">TTL</span> no iPv4 - decrementa em 1 a cada roteador e 
                descarta o pacote se chegar a 0 para impedir loops.
            </li>
        </ul>

        <img src="img/ipv62.png" class="img-ipv6" />

        <h4> Recursos Práticos e Transição(Dual-Stack) </h4>

        <ul>
            <li>
                <span class="destaque">SLAAC e NDP</span>: Em vez de depender exclusivamente de
                broadcast e <span class="destaque">NAT</span>, o IPv6 utiliza o <span class="destaque">NDP</span>(Neighbor 
                Discovery Protocol) e o <span class="destaque">SLAAC</span>(Stateless 
                Address Autoconfiguration) para que os dispositivos
                descubram roteadores, configurem endereços auto-
                maticamente com base no prefixo da rede e evitem
                conflitos na camada de rede - sem excluir o uso
                de <span class="destaque">DHCPv6</span> quando o ambiente exige controle
                centralizado adicioal.
            </li>
            <li>
                <span class="destaque">Sem Broadcast</span>: O IPv6 substitui o broadcast do 
                IPv4 por endereços multicast mais eficientes,
                evitando que todos os hosts da rede precisem
                processar tráfego irrelevante.
            </li>
            <li>
                <span class="destaque">Convivência na Internet</span>: Como a Internet não migrou
                de um dia para o outro, as redes atuais operam em grande
                parte em <span class="destaque">Dual-Stack</span>(rodando IPv4 e IPv6 simultaneamente),
                apoiadas por mecanismos como túneis e tradução quando
                necessário.
            </li>
        </ul> 
        
        <h4> IPv4 vs IPv6 em Resumo </h4>

        <table>
            <tr>
                <td> <span class="destaque">Característica</span> </td>
                <td> <span class="destaque">IPv4</span> </td>
                <td> <span class="destaque">IPv6</span> </td>
            </tr>
            <tr>
                <td> Tamanho </td>
                <td> 32 bits(~4,29 bilhões de endereços) </td>
                <td> 128 bits(~340 undecilhões de endereços) </td>
            </tr>
            <tr>
                <td> Notação </td>
                <td> Decimal pontuado(ex: 192.168.1.1) </td>
                <td> Hexadecimal com : e abreviação :: </td>
            </tr>
            <tr>
                <td> Cabeçalho fixo </td>
                <td> 20 bytes(com campos variáveis e checksum de cabaçalho) </td>
                <td> 40 bytes fixos e simplificados </td>
            </tr>
            <tr>
                <td> Broadcast </td>
                <td> Sim </td>
                <td> Não(usa multicast e anycast) </td>
            </tr>
            <tr>
                <td> Uso de NAT </td>
                <td> Amplamente necessário para contornar escassez </td>
                <td> Não é necessário para ampliar endereços </td>
            </tr>
        </table>

        <a href="javascript:history.back()"><span class="voltar"> voltar </span></a>
        `
    },



}