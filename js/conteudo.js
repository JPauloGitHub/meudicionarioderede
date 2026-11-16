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
    }

}