import { Component, Input } from "@angular/core";

@Component({
  selector: "landing-sa-servicos",
  templateUrl: "landing-sat-servicos.component.html",
  styleUrls: ["landing-sat-servicos.component.css"],
})
export class LandingSATServicos {
  @Input()
  rootClassName: string = "";
  constructor() {}
}
