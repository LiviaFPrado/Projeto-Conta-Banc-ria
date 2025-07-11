import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/util/ContaCorrente";
import { ContaPoupanca } from "./src/util/ContaPoupanca";

export function main() {

    let opcao: number;

    const contacorrente: ContaCorrente = new ContaCorrente(2,123,1,"Mariana",15000,1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3,123,2,"Victor",1000,10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();



    while (true) {

        console.log(colors.bg.black, colors.fg.yellow,
                     "****************************************************");
        console.log("                                                     ");
        console.log("                    BANCO DAS DEVS                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
        colors.reset);

        console.log("Entre com a opcao desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong,
                "\nBanco das Devs - Respeita sua e a nossa historia!");
            sobre();
            console.log(colors.reset, ""); 
            process.exit(0);


        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Conta\n\n", colors.reset);

                keyPress()
                break; 

            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;

            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta\n\n", colors.reset);

                keyPress()
                break

            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);
                
                keyPress()
                break

            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break

            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break

            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepositorio\n\n", colors.reset);

                keyPress()    
                break

            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferencia entre Contas\n\n", colors.reset);
                
                keyPress()
                break

            default:
                console.log(colors.fg.whitestrong,
                    "\nOpcao Invalida!\n", colors.reset);

                keyPress()
                break


        }
    }
}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Lívia Fernandes Prado");
    console.log("Lívia F. Prado - liv.fprado@gmail.com");
    console.log("github.com/LiviaFPrado");
    console.log("*****************************************************");
}

function keyPress(): void{
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();

}

main();

