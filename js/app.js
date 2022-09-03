function initPage() {
  fetch(
    "https://data.sbb.ch/api/records/1.0/analyze/?location=13,46.69679,7.8602&basemap=00c4d6&dataset=ist-daten-sbb&x=ankunftsverspatung&sort=&maxpoints=&y.serie1-1.expr=linien_id&y.serie1-1.func=COUNT&y.serie1-1.cumulative=false&timezone=Europe%2FBerlin&lang=en"
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("delayedTotalPercentage").innerText =
        100 -
        ((100 / data[0]["serie1-1"]) * data[1]["serie1-1"]).toFixed(2) +
        "%";
      document.getElementById("delayedTrainCount").innerText =
        data[1]["serie1-1"];
      document.getElementById("maxTrainCount").innerText = data[0]["serie1-1"];
    });

  fetch(
    "https://data.sbb.ch/api/records/1.0/analyze/?rows=1000000&dataset=ist-daten-sbb&x=verkehrsmittel_text&x=abfahrtsverspatung&sort=x.verkehrsmittel_text,x.abfahrtsverspatung&maxpoints=20&y.serie1-1.expr=linien_id&y.serie1-1.func=COUNT&y.serie1-1.cumulative=false&timezone=Europe%2FBerlin&lang=de"
  )
    .then((response) => response.json())
    .then((data) => {
      // Setting it using static methods, we could also use iterative functions here, but that would be too much for some simple calculations
      // Eurocity
      document.getElementById("percentageEC").innerText =
        (
          100 -
          (100 / (data[0]["serie1-1"] + data[1]["serie1-1"])) *
            data[1]["serie1-1"]
        ).toFixed(2) + "%";
      // Intercity
      document.getElementById("percentageIC").innerText =
        (
          100 -
          (100 / (data[4]["serie1-1"] + data[5]["serie1-1"])) *
            data[5]["serie1-1"]
        ).toFixed(2) + "%";
      // Intercity-Express
      document.getElementById("percentageICE").innerText =
        (
          100 -
          (100 / (data[6]["serie1-1"] + data[7]["serie1-1"])) *
            data[7]["serie1-1"]
        ).toFixed(2) + "%";
      // Interregio
      document.getElementById("percentageIR").innerText =
        (
          100 -
          (100 / (data[8]["serie1-1"] + data[9]["serie1-1"])) *
            data[9]["serie1-1"]
        ).toFixed(2) + "%";
      // Regio
      document.getElementById("percentageR").innerText =
        (
          100 -
          (100 / (data[14]["serie1-1"] + data[15]["serie1-1"])) *
            data[15]["serie1-1"]
        ).toFixed(2) + "%";
      // Regio-Express
      document.getElementById("percentageRE").innerText =
        (
          100 -
          (100 / (data[17]["serie1-1"] + data[18]["serie1-1"])) *
            data[18]["serie1-1"]
        ).toFixed(2) + "%";
    });
}

function mail() {
  window.open('mailto:puenktlichkeitsradar@woelk.li?subject=Kontaktaufnahme%20via%20P%C3%BCnktlichkeitsradar&body=Diesen%20Inhalt%20kannst%20Du%20l%C3%B6schen.%20Gib%20deine%20Nachricht%20ein%20und%20sende%20sie%20abschliessend%20wie%20gewohnt%20ab.')
}