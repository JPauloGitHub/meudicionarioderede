const conteudoRede = {


    "ip": {
        titulo: "IP Internet Protocol",
        categoria: "CAMADA DE REDE",
        conteudo: `

        <p> 
            O IP é o sistema usado para identificar dispositivos em uma rede e permitir
            que eles se comuniquem. Pense nele como um endereço postal da internet:
            cada dispositivo conectado recebe um endereço IP para enviar e receber
            dados. 
        </p>

        <h3> Tipos de endereço IP: </h3>
                
            <ul>
                <li> IPv4: formato mais comum, como 192.168.1.1 </li>
                <li> IPv6: formato mais novo, criado para suportar muitos dispositivos, como
                     2001:0db8:85a3:0000:0000:8a2e:0370:7334 </li>
            </ul>

        <h3> IP público e IP privado: </h3>
                
            <ul>
                <li> IP público: identifica sua conexão na internet e é fornecido pelo provedor. </li>
                <li> IP privado: usado dentro de redes locais, como sua casa ou empresa. </li>
            </ul>

        <h3> Para que serve: </h3>

            <ul>
                <li> Localizar dispositivos na rede </li>
                <li> Permitir navegação na internet </li>
                <li> Direcionar informações para o destinatário correto </li>
                <li> Viabilizar serviços como streaming, jogos online e videogames. </li>
            </ul>
        `
    },


    "mac": {
        titulo: "MAC (Media Access Control)",
        categoria: "CAMADA DE ENLACE",
        conteudo: `

        <p> 
            É um identificador físico atribuido à interface de rede
            de um dispositivo, como computadores, celulares, 
            impressoras, roteadores e TVs conectadas. 
        </p>

        <h3> Características do endereço MAC: </h3>
                
            <ul>
                <li> É único para cada interface de rede(em teoria). </li>
                <li> Geralmente possui 48bits e é representado por 12 caracteres hexadecimais </li>
                <li> Exemplo: 00:1A:2B:3C:4D:5E </li>
            </ul>

        <h3> MAC é fixo? </h3>
            
            <p>
                Normalmente, sim. O MAC é gravado pelo fabricante na placa de rede.
                Por isso ele costuma ser chamado de endereço físico.

                No entanto, sistemas operacionais modernos permitem alterar
                temporariamente o MAC por software (processo conhecido como 
                MAC Spoofing). Assim, o dispositivo pode apresentar um MAC 
                diferente na rede.
            </p>
            
        <h3> Função na rede LAN: </h3>

            <p>
                Dentro da rede local, o MAC é usado para que os equipamentos
                consigam se identificar e trocar quadros Ethernet.

                Exemplo de um fluxo simplificado: 
                    PC A -> Switch -> PC B
            </p>

            <ol>
                <li> O PC A descobre o MAC do PC B usando o protocolo ARP </li>
                <li> O PC A envia os dados para o MAC de destino </li>
                <li> O Switch encaminha o tráfego para a porta onde aquele MAC foi aprendido. </li>
            </ol>
        `
    }

}