const projetopi_database = {};

(function () {
  let pontocoleta_id = false;

  function new_pontocoleta(
    nomeResponsavel,
    email,
    telefone,
    celular,
    endereço,
    complemento,
    pontoreferencia,
    materiaisAceitos
  ) {
    const data_ponto = {
      nomeResponsavel: nomeResponsavel,
      email: email,
      telefone: telefone,
      celular: celular,
      endereço: endereço,
      complemento: complemento,
      pontoreferencia: pontoreferencia,
      materiaisAceitos: materiaisAceitos,
      createdat: firebase.database.ServerValue.TIMESTAMP,
    };

    if (!pontocoleta_id) {
      pontocoleta_id = firebase.database().ref().child("pontoscoleta").push()
        .key;
    }

    let updates = {};
    updates["/pontoscoleta/" + pontocoleta_id] = data_ponto;

    let ponto_ref = firebase.database().ref();
    ponto_ref
      .update(updates)
      .then(function () {
        return { success: true, message: "Ponto de coleta criado" };
      })
      .catch(function () {
        return { success: false, message: "Falha ao criar o ponto de coleta" };
      });
  }

  function remove_pontocoleta() {}

  function update_pontocoleta() {}

  function reset_pontocoleta() {}

  function get_pontoscoleta(callback = null) {
    ref = firebase.database().ref();
    ref.on("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var data = childSnapshot.val();
        if (callback) {
          callback(Object.values(data));
          console.log(Object.values(data));
        }
      });
    });
  }

  projetopi_database.new = new_pontocoleta;
  projetopi_database.remove = remove_pontocoleta;
  projetopi_database.update = update_pontocoleta;
  projetopi_database.reset = reset_pontocoleta;
  projetopi_database.get = get_pontoscoleta;
})();
