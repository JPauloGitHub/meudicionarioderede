const conteudoRede = {


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
    }

}