import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PaiementCommandeService} from "../../../../controller/service/PaiementCommande.service";
import { Chart } from "chart.js/auto";

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
})
export class StatistiqueComponent implements OnInit{
  chart: Chart;
  year: number = 2023; // Valeur initiale de l'année

  chartType: string;
  constructor(private http: HttpClient, paiementCommandeService: PaiementCommandeService){}
  ngOnInit() : void {

    this.createChart();}

  createChart() {
    this.http.get<any[]>(`http://localhost:8036/api/admin/paiementCommande/year/${this.year}`)
        .subscribe(res => {
          const data = {
            labels: res.map(item => item.mois),
            datasets: [
              {
                label: "Montant",
                data: res.map(item => item.mt),
                backgroundColor: 'blue'
              },
            ]
          };

          if (this.chart) {
            this.chart.destroy();
          }

          this.chart = new Chart("MyChart", {
            type: 'bar',
            data: data,
            options: {
              aspectRatio: 2.5,
              backgroundColor: 'red'

            }
          });
        });
  }

  updateChart() {
    this.createChart();
  }
  changeChartType() {
    if (this.chartType === 'bar') {
      this.chartType = 'line';
    } else {
      this.chartType = 'bar';
    }
    this.chart.config["type"] = this.chartType;
    this.chart.update();
  }




}
