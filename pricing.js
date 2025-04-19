  let cedarUsed = true;
  let pineUsed = false;
  let pvcUsed = true;
  let steelUsed = false;
  
  let materials = [
    { name: "Cedar Board", cost: 10.00, used: cedarUsed },
    { name: "Pine Board", cost: 5.00, used: pineUsed },
    { name: "PVC", cost: 2.50, used: pvcUsed },
    { name: "Steel", cost: 1.75, used: steelUsed }
  ];
  let container = document.getElementById("materialsUsed");
  container.innerHTML = "";
  materials
    .filter(material => material.used)
    .forEach(material => {
      let printPrices = document.createElement("p");
      printPrices.className = "price";
      printPrices.textContent = `${material.name}: $${material.cost.toFixed(2)}`;
      container.appendChild(printPrices);
    });
  