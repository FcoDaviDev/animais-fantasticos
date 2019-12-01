export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  const diaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora <= horarioSemana[1];
  // console.log(diaAberto);
  // console.log(horarioAberto);
  if (diaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  } else {
    funcionamento.classList.remove('aberto');
  }
}

// console.log(diasSemana);
// console.log(horarioSemana);
