

const dataTreatment = (data) => {
  let number = 0;
  let value = data.split(" ").pop();
  number = parseFloat(value.replace(",","."));

  console.log(number + " type " + typeof number);
  console.log();
  
}

const data1 = "R$ 403,10"
const data2 = "R$ 321894,890"
const data3 = "R$ 31283127,41"
const data4 = "R$ 50000,41"
dataTreatment(data1);
dataTreatment(data2);
dataTreatment(data3);
dataTreatment(data4);