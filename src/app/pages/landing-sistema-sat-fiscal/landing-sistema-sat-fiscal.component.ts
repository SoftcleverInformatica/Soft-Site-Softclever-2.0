import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "landing-sistema-sa-fiscal",
  templateUrl: "landing-sistema-sat-fiscal.component.html",
  styleUrls: ["landing-sistema-sat-fiscal.component.css"],
})
export class LandingSistemaSATFiscal {
  raw3yr2: string = " ";
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Landing-Sistema-SAT-fiscal - Soft Clever");
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content: "Landing-Sistema-SAT-fiscal - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
  }
}
