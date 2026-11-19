const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("form");

let erros = []

function calcular(dados) {
    let necessidadeEnergetica = 70 * (dados.peso ** 0.75);
    let fator = 1.8;

    if (dados.especie == 'cachorro') {
        if (dados.idade < 4) {
            fator = 3;
        } else if (dados.idade <= 12) {
            fator = 2;
        } else if (dados.castrado) {
            fator = 1.6;
        } else {
            fator = 1.8;
        }
    } else {
        if (dados.idade <= 12) {
            fator = 2.5;
        } else if (dados.castrado) {
            fator = 1.2;
        } else {
            fator = 1.4;
        }
    }

    necessidadeEnergetica *= fator;

    let gramas = (necessidadeEnergetica / 3800) * 1000;
    return Math.round(gramas);
}

function validarFormulario(dados){
    if(dados.especie == '' || !dados.especie){
        erros.push('Erro: selecione uma espécie');
        return false;
    }

    if(dados.nome == '' || !dados.nome){
        erros.push('Erro: digite um nome');
        return false;
    }

    if(dados.peso < 0 || dados.peso > 200 || isNaN(dados.peso)){
        erros.push('Erro: peso inválido');
        return false;
    }

    if(dados.idade < 0 || dados.idade > 5000 || isNaN(dados.idade)){
        erros.push('Erro: idade inválida');
        return false;
    }

    return true;
}

function lerFormulario () {
    let especie = formulario.querySelector("#especie").value;
    let nome = formulario.querySelector("#nome").value;
    let peso = formulario.querySelector("#peso").value;
    let idade = formulario.querySelector("#idade").value;
    let castrado = false;

    if(formulario.querySelector('input[name="castrado"]:checked')){
        castrado = formulario.querySelector('input[name="castrado"]:checked').value == 'true';
    }

    return {
        "especie": especie,
        "nome": nome,
        "peso": peso,
        "idade": idade,
        "castrado": castrado == true,
    }
}

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    
    erros = [];
    resultado.innerHTML = ``;
    
    if(validarFormulario(lerFormulario())){
let dados = lerFormulario();
let quantidade = calcular(dados);
let animal = dados.especie == "gato" ? "gatinho" : "cachorrinho";

resultado.innerHTML = `
    <div style="
        margin-top: 25px;
        border-radius: 18px;
        overflow: hidden;
        background: #fffaf0;
        border: 1px solid #f0dfbd;
        text-align: left;
        animation: aparecer 0.4s ease;
    ">

        <div style="
            background: linear-gradient(135deg, #6925a5, #9148c5);
            padding: 22px;
            color: white;
            text-align: center;
        ">
            <i class="fa-solid fa-paw" style="font-size: 28px; margin-bottom: 10px;"></i>
            <h3 style="margin: 0; font-size: 21px;">
                Resultado para ${dados.nome}
            </h3>
            <p style="margin: 7px 0 0; opacity: 0.85; font-size: 13px;">
                Estimativa de alimentação diária
            </p>
        </div>

        <div style="padding: 22px;">

            <div style="text-align: center; margin-bottom: 22px;">
                <small style="color: #777; font-weight: 600;">
                    QUANTIDADE DIÁRIA ESTIMADA
                </small>

                <div style="
                    color: #6925a5;
                    font-size: 42px;
                    font-weight: 800;
                    margin: 5px 0;
                ">
                    ${quantidade} g
                </div>

                <span style="
                    background: #eee3f8;
                    color: #6925a5;
                    padding: 6px 13px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 600;
                ">
                    <i class="fa-solid fa-check-circle"></i>
                    Cálculo concluído
                </span>
            </div>

            <div style="
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 12px;
            ">

                <div style="
                    background: white;
                    border: 1px solid #eee5d8;
                    border-radius: 12px;
                    padding: 14px;
                ">
                    <i class="fa-solid fa-calendar-days"
                       style="color: #d18a0e; font-size: 20px;"></i>
                    <p style="color: #888; font-size: 12px; margin: 8px 0 3px;">
                        Consumo mensal
                    </p>
                    <b style="font-size: 19px; color: #333;">
                        ${(quantidade * 30 / 1000).toFixed(2).replace(".", ",")} kg
                    </b>
                </div>

                <div style="
                    background: white;
                    border: 1px solid #eee5d8;
                    border-radius: 12px;
                    padding: 14px;
                ">
                    <i class="fa-solid fa-weight-scale"
                       style="color: #d18a0e; font-size: 20px;"></i>
                    <p style="color: #888; font-size: 12px; margin: 8px 0 3px;">
                        Peso informado
                    </p>
                    <b style="font-size: 19px; color: #333;">
                        ${dados.peso} kg
                    </b>
                </div>

            </div>

            <div style="
                margin-top: 15px;
                padding: 14px;
                background: white;
                border-radius: 12px;
                border: 1px solid #eee5d8;
            ">
                <b style="color: #6925a5; font-size: 14px;">
                    <i class="fa-solid fa-heart"></i>
                    Sobre ${animal}
                </b>

                <p style="
                    color: #666;
                    font-size: 13px;
                    line-height: 1.6;
                    margin-bottom: 0;
                ">
                    Com base nos dados informados, ${dados.nome}
                    possui uma estimativa de consumo de
                    ${quantidade} gramas de ração por dia.
                </p>
            </div>

            <p style="
                color: #999;
                font-size: 11px;
                line-height: 1.5;
                text-align: center;
                margin: 18px 0 0;
            ">
                <i class="fa-solid fa-circle-info"></i>
                Estimativa educativa baseada em uma ração de referência
                de 3.800 kcal/kg. Não substitui a orientação veterinária.
            </p>

        </div>
    </div>
`;

calcular(lerFormulario());
    } else {
        let errosTexto = "";
        erros.map(erro => {
            errosTexto += erro + '<br>';
        })

        resultado.innerHTML = `<br><div style='border-top: solid 1px red; width: 100%; '></div><br><b style='color: red;'>${errosTexto}</b>`;
    }
});