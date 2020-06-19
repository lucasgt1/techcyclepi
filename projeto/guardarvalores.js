function Enviar() {
  var texto = null;

  var nome = document.getElementById("txtnome").value;
  var email = document.getElementById("txtemail").value;
  var telefone = document.getElementById("txttelefone").value;
  var celular = document.getElementById("txtcelular").value;
  var endereco = document.getElementById("txtendereco").value;
  var complemento = document.getElementById("txtcomplemento").value;
  var referencia = document.getElementById("txtreferencia").value;
  var materiais = document.getElementById("txtmateriais").value;

  projetopi_database.new(
    nome,
    email,
    telefone,
    celular,
    endereco,
    complemento,
    referencia,
    materiais
  );
}
function getPontos() {
  projetopi_database.get((resultado) => {
    resultado.forEach((r) => {
      $("#pontosColeta").append(
        `<div class="card px-3 col-12 col-md-6">
          <div class="card-wrapper media-container-row media-container-row">
            <div class="card-box">
              <div class="top-line pb-1">
                <h4 class="card-title mbr-fonts-style display-5">
                  ${r.nomeResponsavel}
                </h4>
              </div>
              <div class="bottom-line">
                <p class="mbr-text mbr-fonts-style display-7">
                  ${r.endereço}<br><b>Contato: </b>
                  ${r.telefone} / ${r.celular}<br><b>Materiais Aceitos: </b>
                  ${r.materiaisAceitos}
                </p>
              </div>
            </div>
          </div>
        </div>`
      );
    });
  });
}
